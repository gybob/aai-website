# For App Developers

This guide explains how to make your application accessible to AI Agents through the AAI protocol.

## Overview

The key is creating an `aai.json` descriptor file that tells Agents:
- What your app can do (tools/actions)
- How to call each tool (parameters, automation commands)

```
Your App + aai.json = Agent-Accessible
```

## Choose Your Platform

- [Desktop App (macOS/Windows/Linux)](#desktop-apps)
- [Web App (REST API)](#web-apps)

---

## Desktop Apps

### How It Works

1. Your app exposes automation interface (AppleScript/COM/DBus)
2. `aai.json` describes tools and maps parameters to automation commands
3. AAI Gateway executes commands via native IPC

### Step 1: Check Existing Automation Support

#### macOS

Check if your app supports AppleScript:

```bash
osascript -e 'tell application "YourApp" to get name'
```

If it works, you already have automation support. Just write the descriptor.

If not, you need to add AppleScript support:

**Swift (Info.plist):**
```xml
<key>NSAppleScriptEnabled</key>
<true/>
```

**Swift (Implement commands):**
```swift
// Implement NSScriptCommand or use Scripting Bridge
```

#### Windows

Check if your app has a COM interface:

```powershell
# List COM objects
Get-ChildItem HKLM:\Software\Classes | Where-Object { $_.PSChildName -match "YourApp" }
```

If your app is built with .NET, COM automation is easier to add.

#### Linux

Check if your app exposes DBus:

```bash
dbus-send --session --dest=org.yourapp.YourApp \
  --type=method_call --print-reply \
  /org/yourapp/YourApp org.freedesktop.DBus.Introspectable.Introspect
```

### Step 2: Create aai.json

Basic structure:

```json
{
  "schema_version": "1.0",
  "appId": "com.yourcompany.yourapp",
  "name": "Your App",
  "description": "Brief description of your app",
  "version": "1.0",
  "platforms": {
    "macos": {
      "automation": "applescript",
      "tools": [
        {
          "name": "tool_name",
          "description": "What this tool does",
          "parameters": {
            "type": "object",
            "properties": {
              "param1": { "type": "string", "description": "Parameter description" }
            },
            "required": ["param1"]
          },
          "script": "tell application \"YourApp\" to do something with \"${param1}\"",
          "output_parser": "result as text"
        }
      ]
    }
  }
}
```

### Step 3: Platform-Specific Automation

#### macOS (AppleScript)

```json
{
  "name": "send_email",
  "description": "Send an email",
  "parameters": {
    "type": "object",
    "properties": {
      "to": { "type": "string", "description": "Recipient email" },
      "subject": { "type": "string", "description": "Email subject" },
      "body": { "type": "string", "description": "Email body" }
    },
    "required": ["to", "subject", "body"]
  },
  "script": "tell application \"Mail\"\n  set newMsg to make new outgoing message with properties {subject:\"${subject}\", content:\"${body}\"}\n  tell newMsg to make new to recipient with properties {address:\"${to}\"}\n  send newMsg\nend tell"
}
```

#### Windows (COM/PowerShell)

```json
{
  "name": "create_document",
  "description": "Create a new document",
  "parameters": {
    "type": "object",
    "properties": {
      "filename": { "type": "string", "description": "Document filename" }
    },
    "required": ["filename"]
  },
  "script": "$app = New-Object -ComObject YourApp.Application\n$doc = $app.Documents.Add()\n$doc.SaveAs(\"${filename}\")"
}
```

#### Linux (DBus)

```json
{
  "name": "play_pause",
  "description": "Toggle play/pause",
  "parameters": { "type": "object", "properties": {} },
  "dbus": {
    "service": "org.yourapp.YourApp",
    "path": "/org/yourapp/YourApp",
    "interface": "org.yourapp.Player",
    "method": "PlayPause"
  }
}
```

### Step 4: Deploy Descriptor

Place the descriptor where AAI Gateway can find it:

```bash
mkdir -p ~/.aai/com.yourcompany.yourapp
cp aai.json ~/.aai/com.yourcompany.yourapp/
```

Or bundle it with your app (recommended):

- **macOS:** `YourApp.app/Contents/Resources/aai.json`
- **Windows:** `%PROGRAMFILES%\YourApp\aai.json`
- **Linux:** `/usr/share/yourapp/aai.json`

---

## Web Apps

### How It Works

1. Your REST API already exists
2. `aai.json` maps API endpoints to tools
3. AAI Gateway handles OAuth + API calls

### Step 1: Create aai.json

```json
{
  "schema_version": "1.0",
  "appId": "com.yourcompany.api",
  "name": "Your API",
  "description": "Your Web App API",
  "version": "1.0",
  "platforms": {
    "web": {
      "automation": "restapi",
      "base_url": "https://api.yourapp.com",
      "auth": {
        "type": "oauth2",
        "provider": "custom",
        "authorize_url": "https://yourapp.com/oauth/authorize",
        "token_url": "https://yourapp.com/oauth/token",
        "scopes": ["read", "write"]
      },
      "tools": [
        {
          "name": "create_item",
          "description": "Create a new item",
          "method": "POST",
          "path": "/items",
          "parameters": {
            "type": "object",
            "properties": {
              "title": { "type": "string", "description": "Item title" },
              "content": { "type": "string", "description": "Item content" }
            },
            "required": ["title"]
          }
        }
      ]
    }
  }
}
```

### Step 2: Host the Descriptor

Option A: Well-known URL (recommended)

```
https://yourapp.com/.well-known/aai.json
```

Option B: Custom URL (specify in registry)

### Step 3: Register in AAI Registry

Submit your descriptor URL to the [AAI Registry](https://aai-protocol.com/registry) for discovery.

Or users can add manually:

```bash
aai-gateway --add-web-app https://yourapp.com/.well-known/aai.json
```

### Authentication Options

| Type | Use Case |
|------|----------|
| `oauth2` | User-authorized access (recommended) |
| `api_key` | Server-to-server, simple integrations |
| `bearer` | Existing JWT tokens |
| `none` | Public APIs |

---

## Testing Your Descriptor

```bash
# Validate JSON schema
aai-gateway --validate com.yourcompany.yourapp

# List available tools
aai-gateway --list-tools com.yourcompany.yourapp

# Test a tool
aai-gateway --test com.yourcompany.yourapp:tool_name --param value
```

## Community Contributions

Even if you're not the app developer, you can create `aai.json` descriptors for any app with automation support. Share them via the AAI examples repository.

## What's Next?

- [aai.json Schema](/spec/aai-json) - Full descriptor reference
- [Platform Guides](/spec/platforms/macos) - Detailed platform documentation
- [Security Model](/spec/security) - Authorization and permission handling

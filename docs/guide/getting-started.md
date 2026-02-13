# Getting Started

This guide will help you get up and running with AAI in minutes.

## Prerequisites

- Node.js 18 or later
- An MCP-compatible Agent (Cursor, Continue.dev, Cline, etc.)

## 1. Install AAI Gateway

```bash
npm install -g aai-gateway
```

## 2. Configure Your Agent

Add AAI Gateway as an MCP server in your Agent's configuration.

### Cursor / Cline

Edit your MCP configuration file (e.g., `.cursor/mcp.json` or project-level config):

```json
{
  "mcpServers": {
    "aai": {
      "command": "aai-gateway",
      "args": ["--mcp"]
    }
  }
}
```

### Continue.dev

Edit `~/.continue/config.ts`:

```typescript
export function modifyConfig(config: Config): Config {
  config.mcpServers = [
    {
      name: "aai",
      command: "aai-gateway",
      args: ["--mcp"],
    },
  ];
  return config;
}
```

### Other MCP-compatible Agents

Any Agent that supports the Model Context Protocol can connect to AAI Gateway. Simply configure:

- **Command:** `aai-gateway`
- **Args:** `["--mcp"]`

## 3. Add an App Descriptor

Create an `aai.json` file for the application you want to automate. For example, to control Apple Mail on macOS:

```bash
mkdir -p ~/.aai/com.apple.mail
```

Create `~/.aai/com.apple.mail/aai.json`:

```json
{
  "schema_version": "1.0",
  "appId": "com.apple.mail",
  "name": "Mail",
  "description": "Apple's native email client",
  "version": "1.0",
  "platforms": {
    "macos": {
      "automation": "applescript",
      "tools": [
        {
          "name": "send_email",
          "description": "Send a new email via Apple Mail",
          "parameters": {
            "type": "object",
            "properties": {
              "to": { "type": "string", "description": "Recipient email address" },
              "subject": { "type": "string", "description": "Email subject" },
              "body": { "type": "string", "description": "Email body content" }
            },
            "required": ["to", "subject", "body"]
          },
          "script": "tell application \"Mail\"\n  set newMessage to make new outgoing message with properties {subject:\"${subject}\", content:\"${body}\", visible:false}\n  tell newMessage\n    make new to recipient at beginning of to recipients with properties {address:\"${to}\"}\n    send\n  end tell\nend tell",
          "output_parser": "result as text"
        }
      ]
    }
  }
}
```

## 4. Try It Out

Start your Agent and ask it to perform an action:

> "Send an email to alice@example.com with subject 'Hello' and body 'Hi Alice, how are you?' using Mail"

On first use, macOS will display a permission dialog asking you to authorize AAI Gateway to control the Mail application. Click **OK** to proceed.

## Auto-Discovery

AAI Gateway can also auto-discover applications that support automation on your system:

```bash
# Scan for configured applications
aai-gateway --scan

# Auto-discover system applications (macOS)
aai-gateway --discover

# Generate aai.json for an application using AI
aai-gateway --generate com.apple.mail
```

## What's Next?

- [For App Developers](/guide/for-app-developers) -- Learn how to make your app AAI-compatible
- [For Agent Developers](/guide/for-agent-developers) -- Learn how to integrate AAI into your Agent
- [Specification Overview](/spec/overview) -- Dive into the protocol details

# For Users

This guide is for users who want to use AI Agents to control applications on their device.

## Prerequisites

- Node.js 18 or later
- An MCP-compatible Agent (Cursor, Continue.dev, Cline, Claude Desktop, etc.)

## Step 1: Install AAI Gateway

```bash
npm install -g aai-gateway
```

Verify installation:

```bash
aai-gateway --version
```

## Step 2: Configure Your Agent

Add AAI Gateway as an MCP server in your Agent's configuration.

### Cursor

Edit `.cursor/mcp.json` in your project root:

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

### Claude Desktop

Edit `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS):

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

### Cline (VS Code Extension)

In VS Code settings, add to MCP configuration:

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

### Other MCP-Compatible Agents

Any Agent supporting MCP can connect. Configure:

- **Command:** `aai-gateway`
- **Args:** `["--mcp"]`

## Step 3: Add App Descriptors

AAI needs to know which applications you want to control. Descriptors are stored in `~/.aai/<appId>/aai.json`.

### Option A: Use Pre-built Descriptors

Copy descriptor files from the [AAI examples repository](https://github.com/gybob/aai-protocol/tree/main/examples):

```bash
# Example: Apple Mail
mkdir -p ~/.aai/com.apple.mail
curl -o ~/.aai/com.apple.mail/aai.json \
  https://raw.githubusercontent.com/gybob/aai-protocol/main/examples/com.apple.mail.aai.json
```

### Option B: Generate with AI

```bash
aai-gateway --generate com.apple.mail
```

This uses AI to analyze the app and generate a descriptor.

### Option C: Scan Existing Apps

```bash
aai-gateway --scan
```

Lists all configured apps in `~/.aai/`.

## Step 4: Authorization

### Desktop Apps (macOS)

On first use, macOS will prompt for authorization:

1. A dialog appears: *"AAI Gateway wants to control [App Name]"*
2. Click **OK** to allow

To manage permissions later:
- **System Settings** → **Privacy & Security** → **Automation**

### Desktop Apps (Windows)

Windows may prompt for UAC elevation or COM permissions depending on the application.

### Web Apps

Web Apps use OAuth 2.0 for authorization:

1. First time calling a Web App tool, AAI Gateway initiates OAuth flow
2. Your default browser opens the authorization page
3. Log in and grant permissions
4. Gateway stores tokens securely for future use

You can revoke Web App authorizations:

```bash
aai-gateway --revoke com.notion.api
```

## Step 5: Try It Out

Restart your Agent and test:

> "Send an email to test@example.com with subject 'Hello from AAI' using Mail"

> "Create a new page in Notion titled 'Meeting Notes'"

## Troubleshooting

### Gateway not found

```bash
# Ensure aai-gateway is in PATH
which aai-gateway

# Reinstall if needed
npm install -g aai-gateway
```

### App not discovered

```bash
# Check if descriptor exists
ls ~/.aai/

# Validate descriptor
aai-gateway --validate com.apple.mail
```

### Permission denied (macOS)

```bash
# Grant Full Disk Access to Terminal/your Agent
# System Settings → Privacy & Security → Full Disk Access
```

### MCP connection failed

Check your Agent's MCP configuration is correct and restart the Agent.

## What's Next?

- [For App Developers](/guide/for-app-developers) - Make your own app Agent-accessible
- [Security Model](/spec/security) - Understand how AAI handles permissions
- [Discovery Protocol](/spec/discovery) - Learn how apps are discovered

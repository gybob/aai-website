---
title: For Users
---

# For Users

If you're using an AI Agent (Claude, GPT, OpenClaw, etc.) and want it to control applications on your behalf, this guide is for you.

## What You Get

With AAI, your AI Agent can:

- **Read and send emails** through your mail client
- **Manage calendar events** and appointments
- **Search and organize files** across your applications
- **Control desktop applications** like a human would—but faster and more reliably
- **Access Web services** (Notion, Slack, etc.) on your behalf

All with your explicit consent for each action.

## Installation

### 1. Install AAI Gateway

```bash
# Clone the repository
git clone https://github.com/gybob/aai-protocol.git
cd aai-protocol

# Install dependencies
npm install

# Build the gateway
npm run build
```

### 2. Configure Your Agent

Add AAI Gateway as an MCP server in your Agent's configuration.

**For Claude Desktop** (`~/Library/Application Support/Claude/claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "aai-gateway": {
      "command": "node",
      "args": ["/path/to/aai-protocol/dist/index.js", "--mcp"]
    }
  }
}
```

**For Cursor/Continue/etc**: Refer to your Agent's documentation for MCP server configuration.

### 3. Restart Your Agent

After configuration, restart your Agent to load the AAI Gateway.

## Using AAI

### Discovering Apps

Ask your Agent what applications are available:

```
What apps can you access through AAI?
```

The Agent will list all applications with `aai.json` descriptors installed.

### Using Tools

Just ask naturally:

```
Send an email to alice@example.com about the meeting tomorrow
```

```
Search my calendar for next week's appointments
```

```
Find all documents containing "quarterly report"
```

## Security & Consent

### Two-Layer Protection

AAI protects you with two authorization layers:

1. **Gateway Consent**: When an Agent tries to use a potentially sensitive tool (like sending emails), you'll see a consent prompt:

   ```
   ┌─────────────────────────────────────────────────────────────┐
   │ ⚠️  Tool Authorization Request                              │
   ├─────────────────────────────────────────────────────────────┤
   │ App: Mail (com.apple.mail)                                  │
   │                                                             │
   │ Agent requests permission to use:                           │
   │                                                             │
   │ send_email - Send an email on behalf of the user            │
   │                                                             │
   │ Parameters:                                                 │
   │ • to: Recipient email addresses                             │
   │ • subject: Email subject line                               │
   │ • body: Email body content                                  │
   │                                                             │
   │ [Authorize Tool]  [Authorize All Tools]  [Deny]             │
   └─────────────────────────────────────────────────────────────┘
   ```

2. **App Authorization**: For desktop apps, macOS will prompt you to allow Gateway to control the application (handled by the operating system).

### Managing Consents

- **View consents**: Check `~/.aai/consents/` for stored consent decisions
- **Revoke consents**: Delete the consent file or use the Gateway UI
- **Per-tool granularity**: You can authorize individual tools or all tools from an app

### For Web Apps

When connecting to a Web App for the first time:

1. Gateway shows domain and SSL certificate info
2. You verify it's the correct service
3. OAuth flow opens in your browser
4. You authorize the specific permissions requested

## Installing App Descriptors

### Desktop Apps

App descriptors go in `~/.aai/<appId>/aai.json`:

```bash
# Example: Install a descriptor for a custom app
mkdir -p ~/.aai/com.mycompany.myapp
cp myapp-aai.json ~/.aai/com.mycompany.myapp/aai.json
```

Many apps may ship with their own descriptors that install automatically.

### Web Apps

Web Apps are discovered through the AAI Registry—no manual installation needed. Just ask your Agent to use a Web service, and it will discover available tools.

## Troubleshooting

### Agent can't find any apps

- Verify Gateway is running: Check your Agent's MCP connection
- Check descriptors exist: `ls ~/.aai/*/aai.json`

### Consent prompt not appearing

- Gateway may be configured for auto-approval (not recommended)
- Check consent files in `~/.aai/consents/`

### Web App authorization fails

- Verify your internet connection
- Check that the service's OAuth is working
- Try revoking and re-authorizing

## Getting Help

- **GitHub Issues**: [github.com/gybob/aai-protocol/issues](https://github.com/gybob/aai-protocol/issues)
- **Documentation**: Browse the [Protocol](/) section for technical details

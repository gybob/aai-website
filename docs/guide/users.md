---
title: "AAI Protocol User Guide - Using AI Agents to Control Apps"
description: "Learn how to use AAI Protocol with Claude, GPT, OpenClaw, CoWork and and AI agents to control your desktop and web applications. Step-by-step installation, consent management, and security guide."
keywords:
  - AAI user guide
  - AI agent setup
  - Claude desktop automation
  - GPT app control
  - OpenClaw tutorial
  - CoWork integration
  - MCP server setup
  - Agent app control
  - Desktop automation
  - Web app automation
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
git clone https://github.com/gybob/aai-gateway.git
cd aai-gateway

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
      "command": "aai-gateway"
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

The Agent will list all AAI-compatible desktop applications installed on your system.

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

- **View/revoke consents**: Use the Gateway UI to review and manage your consent decisions
- **Per-tool granularity**: You can authorize individual tools or all tools from an app
- **Secure storage**: All consent decisions are stored encrypted in the OS Keychain — never in plaintext files

### For Web Apps

When connecting to a Web App for the first time:

1. Gateway shows the app name and tool list it has been authorized to use
2. An OAuth flow opens in your browser
3. You authorize the specific permissions requested

Tokens are stored securely in the OS Keychain. Subsequent sessions reuse the cached token automatically.

## How Desktop App Descriptors Work

AAI-compatible desktop apps bundle their descriptor (`aai.json`) inside the app itself. Gateway discovers them automatically by scanning `/Applications/` on startup — no manual installation needed.

When you install an app that supports AAI, it becomes immediately available to your Agent. When you uninstall the app, it disappears from the Agent's view.

## Troubleshooting

### Agent can't find any apps

- Verify Gateway is running: Check your Agent's MCP connection
- Check that AAI-compatible apps are installed in `/Applications/` or `~/Applications/`

### Consent prompt not appearing

- Gateway may be configured for auto-approval (not recommended)
- Use the Gateway UI to review existing consent decisions

### Web App authorization fails

- Verify your internet connection
- Check that the service's OAuth is working
- Try revoking and re-authorizing via the Gateway UI

## Getting Help

- **GitHub Issues**: [github.com/gybob/aai-gateway/issues](https://github.com/gybob/aai-gateway/issues)
- **Documentation**: Browse the [Protocol](/) section for technical details

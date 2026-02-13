# For Agent Developers

This guide explains how to integrate AAI capabilities into your AI Agent or Agent framework.

## Overview

AAI is designed with **zero intrusion** to existing Agent frameworks. If your Agent already supports the Model Context Protocol (MCP), you can connect to AAI Gateway with no code changes -- just configuration.

## Integration Steps

### 1. Add AAI Gateway as an MCP Server

Configure your Agent to connect to AAI Gateway via MCP over stdio:

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

### 2. Discover Available Apps

AAI Gateway exposes available applications through the MCP `resources/list` method. Your Agent can query this to discover what apps are available:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "resources/list"
}
```

### 3. Load App Tools On Demand

To avoid context explosion, AAI uses progressive tool discovery. Load an app's tools only when needed:

```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "resources/read",
  "params": {
    "uri": "app:com.apple.mail"
  }
}
```

### 4. Invoke Tools

Call application tools through the standard MCP `tools/call` method:

```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "tools/call",
  "params": {
    "name": "com.apple.mail:send_email",
    "arguments": {
      "to": "alice@example.com",
      "subject": "Hello",
      "body": "Hi Alice..."
    }
  }
}
```

## Compatible Frameworks

AAI Gateway works with any MCP-compatible Agent framework:

| Framework         | MCP Support       | Integration Method           |
| ----------------- | ----------------- | ---------------------------- |
| **Cursor**        | Native support    | MCP server configuration     |
| **Continue.dev**  | Native support    | Configure `mcpServers`       |
| **Cline**         | Native support    | MCP configuration file       |
| **LibreChat**     | Native support    | MCP connection configuration |
| **Cherry Studio** | Native support    | MCP service configuration    |
| **LobeHub**       | Native support    | MCP client configuration     |

## What's Next?

- [Discovery Protocol](/spec/discovery) -- Full details on progressive tool discovery
- [Call Flow](/spec/call-flow) -- End-to-end example of an AAI call
- [Error Codes](/spec/error-codes) -- Handling errors from the Gateway

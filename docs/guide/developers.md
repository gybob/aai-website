---
title: "AAI Developer Guide - Make Your App Agent-Accessible"
description: "Make your desktop or web application accessible to AI agents like Claude, GPT, OpenClaw, and CoWork with AAI Protocol. Learn to create aai.json descriptors, implement handlers, and register with AAI Registry."
keywords:
  - AAI developer guide
  - aai.json tutorial
  - Agent accessible apps
  - Claude app integration
  - GPT app integration
  - OpenClaw development
  - CoWork integration
  - MCP tool development
  - Desktop app automation
  - Web API for agents
  - AppleScript integration
  - OAuth for AI agents
---

# For App Developers

Make your application accessible to AI Agents with a single `aai.json` descriptor file.

## Why AAI?

| Your App's Situation | Without AAI | With AAI |
|----------------------|-------------|----------|
| Well-known desktop app | Agents know it from training data | Agents discover it formally |
| Desktop app with automation | **Invisible to Agents** | Fully discoverable |
| Web App with REST API | **Just another URL** | Structured, discoverable tools |
| No automation at all | **Completely unreachable** | Add interface + aai.json |

The key insight: **Having an API is not enough.** Without a standardized descriptor, Agents have no way to discover your app's capabilities.

## Quick Start

### Desktop Apps (macOS)

1. **Implement Apple Event handler** (if not already):

```swift
// Register handler for AAI events
NSAppleEventManager.shared().setEventHandler(
    self,
    andSelector: #selector(handleAAIEvent(_:withReplyEvent:)),
    forEventClass: AEEventClass("AAI "),
    andEventID: AEEventID("call")
)
```

2. **Create `aai.json`**:

```json
{
  "schema_version": "1.0",
  "version": "1.0.0",
  "platform": "macos",
  "app": {
    "id": "com.yourcompany.yourapp",
    "name": "Your App",
    "description": "What your app does"
  },
  "execution": { "type": "ipc" },
  "tools": [
    {
      "name": "search",
      "description": "Search for items",
      "parameters": {
        "type": "object",
        "properties": {
          "query": { "type": "string", "description": "Search query" }
        },
        "required": ["query"]
      }
    }
  ]
}
```

3. **Bundle the descriptor in your app**:

Add `aai.json` to your Xcode project as a Bundle Resource. It will be placed at:

```
YourApp.app/Contents/Resources/aai.json
```

Gateway discovers it automatically by scanning `/Applications/` on startup. No runtime installation code needed.

### Web Apps

1. **Create `aai.json`** with OAuth 2.1 config:

```json
{
  "schema_version": "1.0",
  "version": "1.0.0",
  "platform": "web",
  "app": {
    "id": "com.yourcompany.api",
    "name": "Your API",
    "description": "Your service"
  },
  "execution": {
    "type": "http",
    "base_url": "https://api.yourcompany.com/v1",
    "default_headers": { "Content-Type": "application/json" }
  },
  "auth": {
    "type": "oauth2",
    "oauth2": {
      "authorization_endpoint": "https://yourcompany.com/oauth/authorize",
      "token_endpoint": "https://yourcompany.com/oauth/token",
      "scopes": ["read", "write"],
      "pkce": { "method": "S256" }
    }
  },
  "tools": [
    {
      "name": "search",
      "description": "Search for items",
      "execution": { "path": "/search", "method": "POST" },
      "parameters": { ... }
    }
  ]
}
```

2. **Host at well-known location**:

```
https://yourcompany.com/.well-known/aai.json
```

That's all. No registration with any external service is needed. Gateway fetches your descriptor automatically when an agent needs to use your app.

## aai.json Reference

### Root Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `schema_version` | string | Yes | `"1.0"` |
| `version` | string | Yes | Descriptor version (semver) |
| `platform` | string | Yes | `macos`, `web`, `linux`, `windows` |
| `app` | object | Yes | App metadata |
| `execution` | object | No | Execution config |
| `auth` | object | No | OAuth config (web only) |
| `tools` | array | Yes | Tool definitions |

### Tool Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Tool identifier (snake_case) |
| `description` | string | Yes | What the tool does |
| `parameters` | object | Yes | JSON Schema for parameters |
| `returns` | object | No | JSON Schema for return value |
| `execution` | object | Web only | HTTP path and method |

See the full [aai.json Descriptor](/protocol/aai-json) specification.

## Platform-Specific Guides

### [macOS Platform Guide](/protocol/platforms/macos)

- JSON over Apple Events IPC
- Implementing the event handler
- Request/response format
- Testing your implementation

### [Web Platform Guide](/protocol/platforms/web)

- OAuth 2.1 integration
- Token endpoint implementation
- API endpoint mapping

## Security Considerations

### Desktop Apps

- macOS handles authorization via TCC (Transparency, Consent, and Control)
- User approves once; OS remembers
- No additional security code needed

### Web Apps

- Gateway handles OAuth 2.1 flow
- Gateway passes authorized tools via `aai_tools` parameter
- Your app displays tool list for user confirmation
- Tokens stored securely in OS keystore

See the full [Security Model](/protocol/security) for details.

## Versioning

Follow [Semantic Versioning](https://semver.org/):

| Change | Version Bump |
|--------|--------------|
| Add new tool | MINOR |
| Add optional parameter | MINOR |
| Remove tool | MAJOR |
| Add required parameter | MAJOR |
| Change parameter type | MAJOR |

**Rule**: If existing Agents might break, bump MAJOR.

## Testing

### Desktop Apps

```bash
# Test via AppleScript
osascript -e 'tell application "YourApp" to aai call "{\"version\":\"1.0\",\"tool\":\"search\",\"params\":{\"query\":\"test\"},\"request_id\":\"test_1\"}"'
```

### Web Apps

```bash
# Test descriptor
curl https://yourcompany.com/.well-known/aai.json | python -m json.tool

# Test OAuth flow
curl -X POST https://yourcompany.com/oauth/token \
  -d "grant_type=authorization_code" \
  -d "code=YOUR_CODE" \
  -d "redirect_uri=http://localhost:3000/callback" \
  -d "code_verifier=test"
```

## Best Practices

1. **Clear descriptions**: Write tool descriptions that help Agents understand when and how to use each tool

2. **Granular tools**: Prefer many focused tools over few complex ones

3. **Meaningful parameters**: Use descriptive names and provide parameter descriptions

4. **Consistent naming**: Use snake_case for tool names and parameters

5. **Document returns**: Define return schemas to help Agents understand responses

6. **Version carefully**: MAJOR version changes break existing integrations

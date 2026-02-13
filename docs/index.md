---
layout: home

hero:
  name: AAI Protocol
  text: Agent App Interface
  tagline: "From GUI to AAI: Let Agents directly invoke application capabilities"
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/gybob/aai-protocol

features:
  - icon: "\U0001F6E1\uFE0F"
    title: Zero Intrusion
    details: Leverages existing platform automation (AppleScript, COM, DBus). No code changes needed for apps that already support automation. Agents connect via standard MCP -- no custom integration required.
  - icon: "\u26A1"
    title: Millisecond Performance
    details: Direct IPC calls complete in 1-10ms, compared to seconds for GUI automation. No screenshots, no OCR, no simulated clicks -- just native inter-process communication.
  - icon: "\U0001F310"
    title: Cross-Platform
    details: Unified protocol abstraction with platform-native implementations. macOS (AppleScript/JXA), Windows (COM), Linux (DBus), Web Apps (REST API + OAuth), with a consistent aai.json descriptor format.
---

## What is AAI?

AAI (Agent App Interface) is an open protocol that enables AI Agents to directly invoke application capabilities -- bypassing the slow, fragile approach of "watching screens and simulating clicks."

```
Traditional:  Agent -> [Screenshot] -> [OCR] -> [Click] -> GUI -> App  (seconds)
AAI:          Agent -> [MCP] -> AAI Gateway -> [IPC/API] -> App         (milliseconds)
```

Applications provide two independent interfaces:

- **GUI** -- for humans (visual, intuitive)
- **AAI** -- for Agents (structured, programmable, parallel)

Both access the same core business logic. Neither interferes with the other.

## How It Works

1. Apps describe their capabilities in `aai.json` (placed in `~/.aai/<appId>/aai.json`)
2. AAI Gateway discovers and loads these descriptors
3. Agents connect to the Gateway via standard MCP (stdio)
4. Gateway translates MCP requests into platform-native automation calls

## Quick Example

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

Then ask your Agent:

> "Send an email to alice@example.com with subject 'Hello' using Mail"

The Agent calls the Gateway, which executes the operation via native IPC in milliseconds.

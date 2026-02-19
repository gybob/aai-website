# Getting Started

Welcome to AAI Protocol! This guide will help you get started based on your role.

## Choose Your Role

### [For Users](/guide/for-users)

If you want to use AI Agents to control applications on your device:

- How to install AAI Gateway
- How to configure MCP in your Agent
- How to authorize applications

### [For App Developers](/guide/for-app-developers)

If you want to make your application accessible to AI Agents:

- **Desktop Apps**: How to create `aai.json` descriptor, expose AppleScript/COM/DBus interfaces
- **Web Apps**: How to create `aai.json` for REST APIs, configure OAuth

### [For Gateway Contributors](/guide/for-gateway-contributors)

If you want to contribute to the AAI Gateway implementation:

- View the source code on GitHub
- Contribution guidelines

## What is AAI?

AAI (Agent App Interface) is an open protocol that enables AI Agents to directly invoke application capabilities — bypassing the slow, fragile approach of "watching screens and simulating clicks."

```
Traditional:  Agent -> [Screenshot] -> [OCR] -> [Click] -> GUI -> App  (seconds)
AAI:          Agent -> [MCP] -> AAI Gateway -> [IPC/API] -> App         (milliseconds)
```

## Quick Example

Once configured, you can ask your Agent:

> "Send an email to alice@example.com with subject 'Hello' using Mail"

The Agent discovers the Mail app via AAI, and executes the operation in milliseconds.

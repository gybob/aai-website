---
layout: home
title: AAI Protocol
titleTemplate: Agent App Interface

hero:
  name: AAI Protocol
  text: An open protocol that makes any application accessible to AI Agents
  tagline: One descriptor file turns your app from invisible to fully Agent-accessible
  image:
    src: /aai-protocol-diagram.png
    alt: AAI Protocol Architecture
  actions:
    - theme: brand
      text: Get Started
      link: /guide/users
    - theme: alt
      text: View on GitHub
      link: https://github.com/gybob/aai-protocol

features:
  - icon: 📄
    title: One File, Full Access
    details: A single aai.json descriptor file tells Agents exactly what your app can do and how to call it. No per-app integration code needed.
  - icon: 🔌
    title: Standard MCP Interface
    details: Agents connect through standard Model Context Protocol. Works with Claude, GPT, OpenClaw, and any MCP-compatible Agent.
  - icon: 🖥️
    title: Desktop & Web Apps
    details: Unified protocol for both desktop apps (macOS, Windows, Linux) and Web Apps (REST API + OAuth 2.1).
  - icon: 🔒
    title: Two-Layer Security
    details: Gateway Consent protects users from malicious apps. App Authorization protects app data from unauthorized agents.
---

## The Problem

AI Agents (Claude, GPT, OpenClaw, etc.) can operate well-known applications like Apple Mail or Microsoft Outlook because LLMs have seen their interfaces in training data.

**But what about your app?**

| Scenario | Without AAI | With AAI |
|----------|-------------|----------|
| Your desktop app | ❌ Agent doesn't know it exists | ✅ Agent discovers via aai.json |
| Your Web API | ❌ Just another undiscovered URL | ✅ Full structured access |
| No automation at all | ❌ Completely unreachable | ✅ Add interface + aai.json |

## How It Works

```
1. App provides aai.json describing its tools
   ├── Desktop apps → ~/.aai/<appId>/aai.json
   └── Web Apps → Host on domain, register to AAI Registry

2. AAI Gateway discovers and loads all descriptors

3. Agent connects via standard MCP (stdio)

4. Agent discovers available apps and tools on demand

5. Gateway executes the call with proper authorization
```

## Who Benefits

### 🏢 App Developers

Make your app Agent-ready with a single descriptor file. Having an API is not enough—without a standardized descriptor, Agents have no way to discover your capabilities.

### 🤖 Agent Developers

Connect to any AAI-enabled app through standard MCP. No per-app custom code, no scraping documentation, no hardcoding commands.

### 👤 Users

Delegate daily work to AI Agents instead of operating applications manually. Higher reliability, faster execution, seamless multi-app orchestration.

# For App Developers

This guide explains how to make your application accessible to AI Agents through the AAI protocol.

## Overview

Integrating your app with AAI is straightforward:

1. **If your app already supports platform automation** (AppleScript, COM, DBus) -- just write an `aai.json` descriptor. Zero code changes needed.
2. **If your app does not yet support automation** -- add automation support using your platform's native mechanism, then write the descriptor.

## Integration by Platform

### macOS (AppleScript / JXA)

If your app already supports AppleScript or JXA, integration requires **zero code changes**:

1. Write an `aai.json` configuration file describing your app's tools
2. Place it in `~/.aai/<appId>/aai.json`
3. Done!

If your app does not yet support AppleScript:

1. Enable AppleScript in your `Info.plist`:
   ```xml
   <key>NSAppleScriptEnabled</key>
   <true/>
   ```
2. Implement script commands (Swift/ObjC) or leverage JXA
3. Write your `aai.json` descriptor

### Windows (COM Automation)

If your app already exposes a COM interface, integration requires **zero code changes**:

1. Confirm your application's ProgID (e.g., `MyApp.Application`)
2. Write an `aai.json` configuration file
3. Place it in `%USERPROFILE%\.aai\<appId>\aai.json`
4. Done!

### Linux (DBus)

If your app already exposes a DBus interface, integration requires **zero code changes**:

1. Confirm your DBus service name, object path, and interface
2. Write an `aai.json` configuration file
3. Place it in `~/.aai/<appId>/aai.json`
4. Done!

### Web App (REST API)

If your app already has a REST API, integration requires **zero backend changes**:

1. Write an `aai.json` describing your API endpoints as tools
2. Host it on your domain (e.g., `https://api.yourapp.com/.well-known/aai.json`)
3. Submit the URL to the [AAI Registry](https://aai-protocol.com)
4. Done -- any Agent can now discover and use your service

Web App descriptors use `platforms.web` with `automation: "restapi"` and support OAuth 2.0, API Key, or Bearer Token authentication. See [Web App Platform](/spec/platforms/web) for the full reference.

## Community-Contributed Descriptors

Even if you are not the app developer, you or the community can create `aai.json` descriptors for existing applications -- both desktop apps with automation support and Web Apps with public REST APIs. This means popular apps can be made AAI-compatible without any involvement from the original developer.

## What's Next?

- [aai.json Schema](/spec/aai-json) -- Full reference for the descriptor format
- [Platform Support](/spec/platforms/macos) -- Details on each platform's automation mechanisms
- [Security](/spec/security) -- How AAI handles authorization and permissions

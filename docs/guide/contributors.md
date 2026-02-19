---
title: For Gateway Contributors
---

# For Gateway Contributors

Contribute to the AAI Gateway reference implementation or build your own gateway.

## Gateway Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                          LLM Agent                               │
└────────────────────────┬────────────────────────────────────────┘
                         │ MCP over Stdio (JSON-RPC)
                         ↓
┌─────────────────────────────────────────────────────────────────┐
│                      AAI Gateway                                │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ 1. MCP Server (stdio)                                    │  │
│  │    - resources/list, resources/read, tools/call          │  │
│  ├──────────────────────────────────────────────────────────┤  │
│  │ 2. Descriptor Parser                                     │  │
│  │    - JSON Schema validation                              │  │
│  ├──────────────────────────────────────────────────────────┤  │
│  │ 3. Consent Manager                                       │  │
│  │    - Per-tool authorization                              │  │
│  │    - Secure storage (OS keystore)                        │  │
│  ├──────────────────────────────────────────────────────────┤  │
│  │ 4. Execution Layer                                       │  │
│  │    - macOS: Apple Events                                 │  │
│  │    - Web: HTTP + OAuth 2.1                               │  │
│  │    - Linux/Windows: IPC (TBD)                            │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

## Getting Started

### Prerequisites

- Node.js 18+
- TypeScript knowledge
- Understanding of MCP (Model Context Protocol)

### Setup

```bash
# Clone the repository
git clone https://github.com/gybob/aai-protocol.git
cd aai-protocol

# Install dependencies
npm install

# Run in development mode
npm run dev

# Run tests
npm test

# Build
npm run build
```

## MCP Interface

The Gateway implements these MCP methods:

### resources/list

Returns available applications:

```json
{
  "resources": [
    {
      "uri": "app:com.example.mail",
      "name": "Mail",
      "description": "Email client"
    }
  ]
}
```

### resources/read

Returns app descriptor:

```json
{
  "contents": [{
    "uri": "app:com.example.mail",
    "mimeType": "application/json",
    "text": "{ ... aai.json content ... }"
  }]
}
```

### tools/call

Executes a tool:

```json
{
  "name": "com.example.mail:send_email",
  "arguments": {
    "to": ["alice@example.com"],
    "body": "Hello!"
  }
}
```

## Key Components

### Descriptor Parser

Validates and parses `aai.json` files:

- JSON Schema validation
- Platform-specific field validation
- Tool parameter schema parsing

### Consent Manager

Handles user authorization:

- Per-tool consent storage
- OS keystore integration (Keychain, Credential Manager, libsecret)
- Consent prompt UI
- Consent required error responses

### Executors

Platform-specific execution:

| Platform | Transport | Implementation |
|----------|-----------|----------------|
| macOS | Apple Events | `AEEventClass("AAI ")`, `AEEventID("call")` |
| Web | HTTP | OAuth 2.1 token management |
| Linux | DBus | TBD |
| Windows | COM | TBD |

## Adding a New Executor

1. Create `src/executors/NewPlatformExecutor.ts`:

```typescript
import { Executor } from './types';

export class NewPlatformExecutor implements Executor {
  async execute(
    appId: string,
    tool: string,
    params: Record<string, unknown>
  ): Promise<ExecutionResult> {
    // Platform-specific implementation
  }
}
```

2. Register in `src/executors/index.ts`:

```typescript
import { NewPlatformExecutor } from './NewPlatformExecutor';

export const executors = {
  macos: new MacOSExecutor(),
  web: new WebExecutor(),
  newplatform: new NewPlatformExecutor(),
};
```

3. Add tests in `tests/executors/NewPlatformExecutor.test.ts`

## Error Handling

Use standardized error codes:

```typescript
throw new AAIError('CONSENT_REQUIRED', 'User consent required', {
  app_id: 'com.example.mail',
  tool: 'send_email',
  consent_url: 'aai://consent?app=com.example.mail&tool=send_email'
});
```

See [Error Codes](/protocol/error-codes) for the full list.

## Testing

### Unit Tests

```bash
# Run all tests
npm test

# Run specific test
npm run test:single "MacOSExecutor"

# Coverage
npm run test:coverage
```

### Integration Tests

```bash
# Test against real apps (macOS only)
npm run test:integration
```

## Code Style

- TypeScript strict mode
- ESLint + Prettier
- Conventional commits

```bash
# Lint
npm run lint

# Format
npm run format

# Type check
npm run typecheck
```

## Project Structure

```
aai-protocol/
├── src/
│   ├── index.ts           # Entry point
│   ├── server/            # MCP server
│   ├── parsers/           # Descriptor parsing
│   ├── consent/           # Consent management
│   ├── executors/         # Platform executors
│   ├── errors/            # Error handling
│   └── utils/             # Utilities
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── schema/                # JSON schemas
└── examples/              # Example descriptors
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

### Pull Request Guidelines

- All tests must pass
- Coverage should not decrease
- Follow existing code style
- Update documentation if needed

## Security Considerations

- Never store tokens in plaintext
- Always use OS keystore for sensitive data
- Validate all inputs
- Follow OAuth 2.1 best practices
- Report security issues privately

## Resources

- [Protocol Specification](/protocol/)
- [MCP Documentation](https://modelcontextprotocol.io/)
- [GitHub Issues](https://github.com/gybob/aai-protocol/issues)

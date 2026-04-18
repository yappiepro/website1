# AI Agent Instructions

> **Full documentation:** `.ai/` folder

## Multi-Configurable Prompts (MCP) Configuration

This project uses an MCP server for AI agent operations, configured in `mcp.json`. This server is hosted on Supabase and requires an authorization token.

```json
{
  "mcpServers": {
    "supabase": {
      "type": "http",
      "url": "https://mcp.supabase.com/mcp?project_ref=famxhijlisxdsggevcqi",
      "headers": {
        "Authorization": "Bearer sbp_d5e7e24ca96bf2ddd8dc675c78829621fae9eac4"
      }
    }
  }
}
```

**Note:** The `Authorization` token above is an example. Refer to `mcp.json` for the actual, uncommitted token in the local environment. **Never expose or commit actual tokens.**

## Quick Start

| Document              | Purpose            |
| --------------------- | ------------------ |
| `.ai/README.md`       | Project overview   |
| `.ai/ARCHITECTURE.md` | File structure     |
| `.ai/DESIGN.md`       | Design system      |
| `.ai/CONTENT.md`      | Content management |
| `.ai/BUILD.md`        | Development        |
| `.ai/DEPLOY.md`       | Deployment         |
| `.ai/RULES.md`        | Agent rules        |

## Essential Commands

```bash
npm run dev        # Development server
npm run generate   # Build static site
```

## Deploy Flow

```bash
git add .
git commit -m "message"
git push origin main
```

## Key Files

- `pages/index.vue` - Main landing page
- `data/blog.js` - Blog articles
- `nuxt.config.ts` - Configuration

## Safety Rules

1. Never commit secrets
2. Test with `npm run generate` before push
3. Read `.ai/RULES.md` for full guidelines

## Project Skills

No explicit project-specific "skills" definitions were found in the project's markdown files (`QWEN.md`, `AGENTS.md`, `DESIGN_BRIEF.md`). AI agent "skills" for this project are likely derived from the general operational rules outlined in `.ai/RULES.md` and the overall project context captured in `GEMINI.md`.

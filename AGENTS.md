# AGENTS.md

## Scope
These rules apply to all agents working in this repository, especially for Git publishing and GitHub Pages updates.

## Core Deployment Rules
1. Never publish without checking local state first:
   - `git status --short --branch`
   - `git remote -v`
2. Always verify that `origin` does not contain credentials in URL.
   - Allowed: `https://github.com/<owner>/<repo>.git`
   - Forbidden: `https://<user>:<token>@github.com/...`
3. Never print secrets in responses, logs, commit messages, or files.
4. If a token is shared in chat:
   - Use it only for the requested operation.
   - Do not store it in `git remote`.
   - Recommend immediate token rotation after use.

## Standard Publish Flow
1. Validate build before push:
   - `npm run generate`
2. Stage and commit changes:
   - `git add .`
   - `git commit -m "<clear message>"`
3. Push to `main`:
   - `git push origin main`
4. Confirm GitHub Actions started:
   - Check `.github/workflows/deploy.yml` trigger (`push` to `main`)
5. Report result with commit hash and Actions URL.

## GitHub Pages Safety Checklist
Before claiming deploy success, confirm:
1. Repository Settings -> Pages -> Source: `GitHub Actions`
2. Workflow file exists: `.github/workflows/deploy.yml`
3. `main` contains the new commit (`local HEAD == origin/main` after push)
4. No unresolved build errors locally

## Failure Handling
1. If push fails due to network/sandbox:
   - Report exact command and error.
   - Retry only with required escalation.
2. If workflow fails:
   - Share failing step and minimal fix.
   - Re-run full build locally after fix.
3. Do not use destructive git commands (`reset --hard`, forced history rewrite) unless explicitly requested.

## Content and Dist Consistency
1. If project stores generated static output (`dist/`) in git, keep it in sync with source changes before push.
2. Do not remove tracked `dist/` files unintentionally.
3. After generation, re-check:
   - `git status --short`
   - changed blog pages in `dist/blog/`

## Communication Rules
1. Be explicit about:
   - what was changed,
   - what was pushed,
   - what still requires user action.
2. Use concrete references (commit hash, file path, command).
3. If something is not verified, state that clearly.

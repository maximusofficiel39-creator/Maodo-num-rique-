---
name: Render pnpm builds
description: Notes on building pnpm workspaces with Render's native Node runtime from this Replit environment.
---

For Render native Node services, invoke `pnpm` directly in the Blueprint build command. Render's native runtime includes pnpm.

**Why:** In the Replit Nix environment, `corepack enable` can fail because it tries to write a pnpm shim into the read-only Node installation. This is an environment mismatch, not evidence that Render lacks pnpm.

**How to apply:** Prefer `pnpm install --frozen-lockfile` and workspace-filtered build commands in Render Blueprints; don't add `corepack enable` just to make local preview work.

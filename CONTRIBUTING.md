# Contributing Guide

Welcome to the TopFinanzas US Next.js project. This repository follows strict rules for pushing code.

## Pushing Changes

When a user requests to push, commit, sync, or publish local changes to the repository, execute the following command:

```bash
bash scripts/git-workflow.sh "<commit message>"
```

Do not run raw `git add`, `git commit`, or `git push` commands directly. All repository operations must go through `scripts/git-workflow.sh`. The script enforces branch protection, pre-push validation (TypeScript type-check, ESLint), rebase conflict detection, and conventional commit format. Bypassing it risks pushing type errors, lint failures, or conflicting history to the remote.

Available flags:

- `--branch <name>` — target a specific branch
- `--force` — enable force-push on non-protected branches
- `--verify-build` — run `next build` before pushing
- `--dry-run` — execute all steps except the final push

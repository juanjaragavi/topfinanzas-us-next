# TopNetworks Sync Workflow

This repository participates in the TopNetworks multi-repo sync workflow for the shared Next.js financial platform architecture.

## Central orchestrator

Use the workspace-level orchestrator before propagating shared changes across TopNetworks properties:

- Skill: `/Users/macbookpro/GitHub/.agents/skills/topnetworks-sync-orchestrator/SKILL.md`
- Manifest: `/Users/macbookpro/GitHub/.agents/skills/topnetworks-sync-orchestrator/repositories.json`
- Runbook: `/Users/macbookpro/GitHub/.agents/skills/topnetworks-sync-orchestrator/SYNC_RUNBOOK.md`
- CLI: `/Users/macbookpro/GitHub/.agents/skills/topnetworks-sync-orchestrator/scripts/topnetworks-sync.mjs`

## Local adaptation requirements

- Brand: TopFinanzas
- Market: United States
- Locale: English (`en-US`)
- Currency: USD
- Canonical domain: `https://us.topfinanzas.com`
- Production port: `3040`

Preserve US financial terminology, US disclosures, TopFinanzas blue/cyan/lime brand identity, and `us.topfinanzas.com` canonical URLs when applying synchronized changes.

## Safe commands

From `/Users/macbookpro/GitHub`:

```bash
node .agents/skills/topnetworks-sync-orchestrator/scripts/topnetworks-sync.mjs status --repo topfinanzas-us
node .agents/skills/topnetworks-sync-orchestrator/scripts/topnetworks-sync.mjs parity --repo topfinanzas-us
node .agents/skills/topnetworks-sync-orchestrator/scripts/topnetworks-sync.mjs validate --repo topfinanzas-us --dry-run
```

Do not commit, push, or deploy as part of a sync task unless explicitly requested.

#!/usr/bin/env node
import { spawnSync } from "node:child_process";

const repoId = "topfinanzas-us";
const cliPath =
  "/Users/macbookpro/GitHub/.agents/skills/topnetworks-sync-orchestrator/scripts/topnetworks-deploy.mjs";
const rawArgs = process.argv.slice(2);
const command =
  rawArgs[0] && !rawArgs[0].startsWith("--") ? rawArgs[0] : "preflight";
const commandArgs = command === rawArgs[0] ? rawArgs.slice(1) : rawArgs;
const sanitizedArgs = [];

for (let index = 0; index < commandArgs.length; index += 1) {
  if (commandArgs[index] === "--repo") {
    index += 1;
    continue;
  }
  sanitizedArgs.push(commandArgs[index]);
}

const result = spawnSync(
  process.execPath,
  [cliPath, command, "--repo", repoId, ...sanitizedArgs],
  {
    stdio: "inherit",
  },
);

process.exit(result.status ?? 1);

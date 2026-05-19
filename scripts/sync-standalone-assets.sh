#!/bin/bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
STANDALONE_DIR="$ROOT_DIR/.next/standalone"
STANDALONE_NEXT_DIR="$STANDALONE_DIR/.next"

if [ ! -d "$STANDALONE_DIR" ]; then
  echo "[sync-standalone-assets] Standalone output not found at $STANDALONE_DIR"
  echo "[sync-standalone-assets] Run a production build first (next build)."
  exit 1
fi

mkdir -p "$STANDALONE_NEXT_DIR"

if [ ! -d "$ROOT_DIR/public" ]; then
  echo "[sync-standalone-assets] Missing public directory at $ROOT_DIR/public"
  exit 1
fi

if [ ! -d "$ROOT_DIR/.next/static" ]; then
  echo "[sync-standalone-assets] Missing build assets at $ROOT_DIR/.next/static"
  exit 1
fi

rm -rf "$STANDALONE_DIR/public"
rm -rf "$STANDALONE_NEXT_DIR/static"

cp -R "$ROOT_DIR/public" "$STANDALONE_DIR/public"
cp -R "$ROOT_DIR/.next/static" "$STANDALONE_NEXT_DIR/static"

mkdir -p "$STANDALONE_DIR/app"
if [ -f "$ROOT_DIR/app/critical.css" ]; then
  cp "$ROOT_DIR/app/critical.css" "$STANDALONE_DIR/app/critical.css"
fi

if [ ! -d "$STANDALONE_NEXT_DIR/static/chunks" ]; then
  echo "[sync-standalone-assets] Missing copied chunks directory after sync"
  exit 1
fi

CHUNK_COUNT=$(find "$STANDALONE_NEXT_DIR/static/chunks" -type f | wc -l | tr -d ' ')
if [ "$CHUNK_COUNT" -eq 0 ]; then
  echo "[sync-standalone-assets] No chunk files copied into standalone output"
  exit 1
fi

echo "[sync-standalone-assets] Copied standalone assets successfully (chunks: $CHUNK_COUNT)"
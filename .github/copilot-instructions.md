# Copilot Instructions

This repository contains a D&D 5th Edition campaign system called **The Gilded Stasis** (levels 3–15) plus a standalone one-shot **The Golden Hour** (level 10), both packaged as Foundry VTT modules.

## Repository Layout

```
campaign/              # Master campaign guides (overview, BBEG, NPCs, locations, DM tracker)
phase-1-local-legends/ # Levels 3–5: seven per-phase docs (adventures, session-guide, stat-blocks, read-aloud, dm-cheat-sheet, handouts, tactical-maps)
phase-2-heroic-games/  # Levels 6–10: same seven-doc structure
phase-3-gilded-stasis/ # Levels 11–15: same seven-doc structure
oneshot-golden-hour/   # One-shot: six docs (overview, adventure, dm-notes, read-aloud, stat-blocks, handouts)
foundry-module/
  golden-hour/         # Foundry module v1.2.3 (module.json, scripts/init.mjs, data/*.json, assets)
  gilded-stasis/       # Foundry module v1.0.0 (same structure)
dungeon-alchemist-exports/ # Raw map exports: JSON metadata + JPG/WEBM media
.github/workflows/     # foundry-release.yml — auto-releases golden-hour on pushes to main
```

## No Build Step

There is no compilation, bundling, or test suite. The Foundry modules use plain ES6 modules (`.mjs`) loaded directly by Foundry VTT at runtime. The only automation is the GitHub Actions release pipeline.

## Release Workflow

`.github/workflows/foundry-release.yml` triggers when files under `foundry-module/golden-hour/**` change on `main`. It reads the version from `module.json`, zips the module folder, and creates a GitHub release with `module.zip` and `module.json` attached.

To release a new golden-hour version: bump `"version"` in `foundry-module/golden-hour/module.json` and push to `main`.

The gilded-stasis module has no release workflow yet.

## Foundry Module Architecture

Both modules follow the same pattern:

- **`module.json`** — manifest declaring `id`, `version`, `esmodules`, and `dnd5e` system compatibility (minimum `3.0.0`)
- **`scripts/init.mjs`** — runs once on Foundry startup; reads `data/*.json` and creates actors, journals, scenes, and roll tables in color-coded folders. A settings flag prevents duplicate imports; re-import via browser console: `game.settings.set("<module-id>", "imported", false); location.reload()`
- **`data/actors.json`** — array of actor objects (see schema below)
- **`data/journals.json`** — array of journal entries with `folder`, `playerVisible`, and `pages[]`
- **`data/scenes.json`** — battle map scenes with wall/light definitions
- **`data/tables.json`** — roll tables

### Actor JSON Schema

```json
{
  "name": "string",
  "phase": 0,
  "cr": 5,
  "size": "med",
  "creatureType": "humanoid",
  "ac": 16,
  "hp": 110,
  "hpFormula": "13d8+52",
  "speed": { "walk": 30, "fly": 0, "swim": 0, "hover": false },
  "str": 18, "dex": 14, "con": 18, "int": 16, "wis": 12, "cha": 20,
  "senses": { "darkvision": 60, "blindsight": 0, "truesight": 0 },
  "skills": { "prc": 4, "ins": 3 },
  "di": [], "dr": [], "dv": [], "ci": [],
  "img": "modules/golden-hour/assets/characters/Name.png",
  "token": "modules/golden-hour/assets/characters/Name_TOKEN.png",
  "disposition": 1
}
```

`disposition`: `-1` hostile, `0` neutral, `1` friendly.

### Asset Naming

- Character portraits: `PascalCaseName.png`
- Token overlays: `PascalCaseName_TOKEN.png`
- Battle maps: `PascalCaseName.jpg` or `.webm` (animated)

## Campaign Document Conventions

Every phase directory contains the same seven files. When adding content, follow this pattern:

| File | Contents |
|------|----------|
| `adventures.md` | Session-by-session adventure structure |
| `session-guide.md` | Detailed GM guidance per session |
| `stat-blocks.md` | Creature/NPC stat blocks for this phase |
| `read-aloud.md` | Player-facing boxed text descriptions |
| `dm-cheat-sheet.md` | Quick-reference tables (AC, HP, tactics) |
| `handouts.md` | Player handouts (letters, newspapers, maps) |
| `tactical-maps.md` | Encounter layouts and positioning notes |

Campaign-wide reference lives in `campaign/`: `00-campaign-overview.md`, `01-bbeg-and-villains.md`, `02-npcs.md`, `03-locations.md`, `04-dm-tracker.md`.

## Design Pillars

Keep these in mind when generating or extending content:

- **BBEG-first iteration**: Every session should connect back to what Archduke Valerius is doing and how it touches the players.
- **Moral ambiguity**: Valerius's plan (freezing the kingdom in a golden age) sounds *good* — content should preserve genuine player ambiguity rather than making him cartoonishly evil.
- **One set-piece moment per session**: Each session guide should include one "hell yeah" moment (dramatic chase, desperate stand, crowd-pleasing speech).
- **World reactivity**: The world remembers the party's growing fame — rumors, newspapers, crowd reactions, and NPC attitudes should reflect their reputation.
- **Revelation via replay**: The Golden Hour one-shot is designed to feel wholesome on first play; its dark context is only revealed mid-campaign. Don't spoil this connection in player-facing documents.

## Dungeon Alchemist Exports

Each map export is a pair of files in `dungeon-alchemist-exports/`: a media file (`.jpg` or `.webm`) and a `*.json` metadata file. When referencing these maps in `foundry-module/.../data/scenes.json`, copy the media into the module's `assets/` folder and reference it via the module path.

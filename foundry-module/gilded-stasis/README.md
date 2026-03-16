# The Gilded Stasis — Foundry VTT Module

A complete D&D 5e campaign module for **Foundry VTT V12** with the **dnd5e 3.x** system.

## Installation

1. Copy the entire `gilded-stasis` folder into your Foundry VTT modules directory:
   - **Windows:** `%LOCALAPPDATA%/FoundryVTT/Data/modules/gilded-stasis/`
   - **macOS:** `~/Library/Application Support/FoundryVTT/Data/modules/gilded-stasis/`
   - **Linux:** `~/.local/share/FoundryVTT/Data/modules/gilded-stasis/`

2. Launch Foundry VTT and open your world.

3. Go to **Settings → Manage Modules** and enable **"The Gilded Stasis — Complete Campaign"**.

4. Reload the world. An import dialog will appear automatically.

5. Click **"Import All Content"** to populate your world.

## What's Included

### Actors (23 total)

| Phase | Actors |
|-------|--------|
| **Phase 1 — Local Legends** | Clockwork Cattle, Sir Corwin Ashford, Mayor Tilda, Flick Cogsworth, Margaux Delacroix, Gareth Lumley |
| **Phase 2 — Heroic Games** | Gynosphinx (Labyrinth Guardian), Bron Ironfist, Sylara Moonwhisper, Torq, Pip Nimblefingers, Gilded Sentinel CR 7, Golden Guard Veteran, Herald Elara Dawnmantle |
| **Phase 3 — The Gilded Stasis** | Duplicate King Thalric, Archdruid Eira, Gilded Sentinel CR 10, Gilded Sentinel CR 12, Time Echo, Archduke Valerius Thorne, Sable, Lucretia Voss, Captain Vayne |

All combat actors include:
- Correct ability scores, HP, AC, saves, and skills
- Full stat block in the biography tab for quick reference
- Feature items for traits, actions, reactions, and legendary actions
- Prototype token configuration (hostile/friendly disposition, HP bar)

### Journal Entries (7 entries, 29+ pages)

- **Campaign Overview** — Master reference for the full 3-phase campaign
- **Locations: Oakhaven** — Starting town with all key locations
- **Locations: Aurelius** — The golden capital with secrets
- **Locations: Citadel of Chronos** — Final dungeon guide
- **Phase 1 Handouts** — 9 player-facing handouts (quest boards, letters, invitations)
- **Phase 2 Handouts** — 10 player-facing handouts (newspapers, dossiers, evidence)
- **Phase 3 Handouts** — 10 player-facing handouts (wanted posters, mission boards, epilogue)

### Roll Tables (2)

- **Oakhaven Rumors (d6)** — Tavern gossip with foreshadowing hooks
- **Valerius Time Echo Summon (d4)** — Boss legendary action results

## Re-Importing

To re-import content (e.g., after updating the module):

1. Open the browser console (F12)
2. Run: `game.settings.set('gilded-stasis', 'imported', false)`
3. Reload the world — the import dialog will appear again

Or run: `game.gildedStasis.importContent()` at any time.

## Notes

- **Standard monsters** (Wight, Zombie, Skeleton, Bandit, etc.) are NOT included — use the SRD compendium or your own Monster Manual module for those.
- **Spells** are listed in actor biographies and feature descriptions but are not embedded as individual spell items. Drag spells from the SRD compendium onto spellcasting actors as needed.
- All actors use `calc: "flat"` for AC. If you modify equipment, you may want to switch to formula-based AC.
- Valerius Thorne's two-phase boss design is documented in his biography. Phase 2 abilities (legendary actions, additional spells) should be manually activated at 50% HP during play.

## Campaign Structure

| Phase | Levels | Sessions | Theme |
|-------|--------|----------|-------|
| 1 — Local Legends | 3–5 | 1–4 | Small-town heroes, hints of larger conspiracy |
| 2 — Heroic Games | 6–10 | 5–10 | Arena competition, espionage, terrible discovery |
| 3 — The Gilded Stasis | 11–15 | 11–16 | Revolution, alliances, final confrontation |

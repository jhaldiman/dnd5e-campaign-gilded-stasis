# The Golden Hour — Foundry VTT Module

A Foundry VTT V12 module containing all custom content for **The Golden Hour**, an introductory one-shot for *The Gilded Stasis* campaign.

## Contents

| Type | Count | Details |
|------|-------|---------|
| **Actors** | 13 | 8 custom creatures (CR 2–12) + 5 pre-generated level 10 PCs |
| **Journals** | 6 | 1 DM adventure overview + 5 styled player handouts |
| **Roll Tables** | 1 | Rift Lair Actions (d4) |
| **Scenes** | 4 | High-quality battle maps from Dungeon Alchemist |

### Scenes — Battle Maps

| Name | File | Description |
|------|------|-------------|
| The Champions Trial | .jpg | Act 2, Stage 3: Arena boss fight |
| The Crucible | .jpg | Act 2, Stage 1: Arena combat waves |
| The Gilded Promenade | .webm | Act 4: Animated temporal rift street scene |
| The Trial of Timing and Truth | .jpg | Act 2, Stage 2: Arena puzzle & clock face |

### Actors — Creatures

| Name | CR | Type | Notes |
|------|----|------|-------|
| Arena Chimera Spawn | 3 | Monstrosity | Gauntlet Wave 1 |
| Arena Drake | 5 | Dragon | Gauntlet Wave 2 |
| Arena Champion Golem | 8 | Construct | Gauntlet Wave 3 |
| Golem of the Seventh Star | 10 | Construct | Champion's Trial boss |
| Rift Stalker | 2 | Aberration | Temporal Rift minions |
| Temporal Wraith | 5 | Undead | Temporal Rift elites |
| Riftborn Colossus | 12 | Aberration | Final boss (2-phase) |
| Valerius Thorne — The Philanthropist | 12 | Humanoid | Allied NPC (heroic version) |

### Actors — Pre-Generated PCs

| Name | Class | Level | Role |
|------|-------|-------|------|
| Edric Voss | Fighter (Eldritch Knight) | 10 | Tank / Battlefield Controller |
| Miriel Ashwood | Cleric (Life Domain) | 10 | Primary Healer |
| Renn Quicksilver | Rogue (Arcane Trickster) | 10 | Skill Monkey / Striker |
| Lysara Dawnfire | Sorcerer (Draconic Bloodline) | 10 | AoE Blaster / Support |
| Orin Thistlefoot | Ranger (Gloom Stalker) | 10 | Ranged Striker / Scout |

### Journal Entries

| Name | Visible to Players? | Description |
|------|---------------------|-------------|
| The Golden Hour — Adventure Overview | No (GM only) | Full overview + secret connections table |
| Golden Invitation | Yes | Styled invitation handout from Valerius |
| Gauntlet Rules | Yes | Official rules broadsheet for the Games |
| Torq's Poem | Yes | "Ode to the Silver Chalice" — Torq's terrible limerick |
| Valerius's Letter | Yes | Personal letter from Valerius (the emotional payload) |
| Medal of the Seventh Star | Yes | Item card for the medal reward |

## Installation

1. Copy the entire `golden-hour` folder to your Foundry modules directory:
   ```
   %LOCALAPPDATA%/FoundryVTT/Data/modules/golden-hour/
   ```

2. In Foundry, go to **Settings → Manage Modules** and enable **The Golden Hour**.

3. Reload the world. An import dialog will appear automatically.

4. Click **Import All Content** to create all actors, journals, and tables in organized folders.

## Manual Re-Import

If you dismissed the dialog or want to re-import, open the browser console (F12) and run:

```javascript
game.goldenHour.importContent()
```

## Folder Structure After Import

```
Actors/
  └─ Golden Hour/
       ├─ Arena Creatures/      (4 arena encounter creatures)
       ├─ Rift Creatures/       (3 temporal rift creatures)
       ├─ Allied NPCs/          (Valerius — heroic version)
       └─ Pre-Generated Characters/  (5 level 10 PCs)

Journal Entries/
  └─ Golden Hour/
       ├─ DM Reference/         (adventure overview, connections)
       └─ Player Handouts/      (invitation, rules, poem, letter, medal)

Roll Tables/
  └─ Golden Hour/
       └─ Rift Lair Actions (d4)

Scenes/
  └─ Golden Hour/
       └─ (4 Battle Maps)
```

## Compatibility

- **Foundry VTT:** V12 (verified)
- **System:** dnd5e 3.0.0+ (verified 3.3.1)

## Notes

- The **Iron Vanguard** (Bron, Sylara, Torq, Pip) and **Herald Elara** are NOT included here — they exist in the main **Gilded Stasis** campaign module. If you're running both modules, those actors are already available.
- Pre-gen characters are created as NPCs (not PCs) for easy drag-and-drop. To use as player characters, create a new PC actor and copy the stats, or have players reference the character card handouts.
- Valerius's stat block here is the **heroic allied version** (CR 12, support-focused). The full BBEG version (CR 18) is in the main campaign module.

# Phase 2 — Tactical Maps & Encounter Areas

> ASCII battle maps with terrain rules for every Phase 2 combat and
> event encounter. Scale: 1 character = 5 ft. unless noted.

---

## Event 1: The Labyrinth of Trials

### Overview Map — Labyrinth Layout

*The labyrinth shifts magically, so this is one possible configuration.
Rearrange rooms between runs if desired.*

```
    ENTRANCE
       │
       ▼
  ┌─────────────┐
  │  MIMIC HALL │
  │             │
  │  D  D  D    │    D = Door (6 total)
  │  D  D  D    │    M = Mimic (2 of the 6 doors)
  │             │    E = Real Exit
  └──────┬──────┘
         │
  ┌──────┴──────┐
  │  GRAVITY    │
  │    WELL     │       ↕ = Gravity shift zone
  │             │       30 ft. vertical shaft
  │    ↕↕↕↕    │       Gravity reverses every round
  │    ↕↕↕↕    │
  │             │
  └──────┬──────┘
         │
  ┌──────┴──────────────┐
  │   RIDDLE SPHINX     │
  │                     │
  │   .....S.....       │    S = Gynosphinx
  │   .         .       │    . = Ornate tile floor
  │   .  P P P  .       │    P = Pillar (full cover)
  │   .  P   P  .       │
  │   .         .       │
  │   ...........       │
  └──────┬──────────────┘
         │
  ┌──────┴──────┐       ┌──────────────┐
  │  GAUNTLET   │───────│  FALSE EXIT  │
  │             │       │  (illusion)  │
  │  →→→→→→→→  │       │  Loops back  │
  │  ↑ blades ↑ │       │  DC 15 to    │
  │  →→→→→→→→  │       │  dispel      │
  │  ↑arrows ↑  │       └──────────────┘
  │  →→→→→→→→  │
  └──────┬──────┘
         │
    ┌────┴────┐
    │ CENTER  │
    │  ★ WIN  │    ★ = Victory pedestal
    └─────────┘
```

### Room: The Mimic Hall (30 × 20 ft.)

```
    ┌──────────────────────────────┐
    │                              │
    │   [D1]    [D2]    [D3]      │
    │                              │
    │                              │
    │   [D4]    [D5]    [D6]      │
    │                              │
    │         ENTER ▲              │
    └──────────────────────────────┘
```

| Feature | Rule |
| --- | --- |
| **Doors D1–D6** | Investigation DC 13 to examine safely. Perception DC 15 to spot adhesive residue on Mimic doors. |
| **Mimics (2 random doors)** | Attack when touched. See Mimic stat block. |
| **Real Exit** | 1 of the remaining 4 doors. Random or predetermined. |
| **Walls** | Stone. Climbing DC 20. No alternate route. |

### Room: The Gravity Well (20 × 20 ft., 30 ft. vertical)

```
    SIDE VIEW:
    ┌──────────────┐
    │   CEILING    │ ← Gravity pulls HERE on even rounds
    │              │
    │   ~~AIR~~    │    30 ft. fall each flip = 3d6
    │              │    Acrobatics DC 14 to land safely
    │              │    (half damage on success)
    │   FLOOR     │ ← Gravity pulls HERE on odd rounds
    ├──────────────┤
    │   EXIT ↓    │
    └──────────────┘

    TOP-DOWN:
    ┌──────────────┐
    │ L  .  .  . R │   L = Ledge (safe grip, Athletics DC 12)
    │ .  .  .  . . │   R = Rope anchor point
    │ .  .  .  . . │   . = Open air
    │ L  .  .  . R │
    └──────────────┘
```

| Feature | Rule |
| --- | --- |
| **Gravity Flip** | Initiative count 20 each round, gravity reverses. Creatures not anchored fall 30 ft. (3d6 bludgeoning). |
| **Ledge Grip** | Athletics DC 12 to grab a ledge during a flip. Creature takes no fall damage. |
| **Rope Anchor** | If someone has rope, they can tie off (1 action). Tethered creatures auto-succeed the grab. |
| **Exit** | At the bottom. Reachable when gravity is normal. |

### Room: The Gauntlet (60 × 15 ft.)

```
    ┌──────────────────────────────────────────────────────────┐
    │ A   ──blade──   ──blade──   ──blade──   A              │
    │ r   ─────────   ─────────   ─────────   r              │
    │ r                                        r    EXIT →    │
    │ o   ──blade──   ──blade──   ──blade──   o              │
    │ w   ─────────   ─────────   ─────────   w              │
    │ s                                        s              │
    │ ← ENTER                                                 │
    └──────────────────────────────────────────────────────────┘
```

| Feature | Rule |
| --- | --- |
| **Spinning Blades (6)** | DC 14 Dexterity save to pass each blade. Failure: 3d6 slashing. |
| **Arrow Slits** | +5 to hit, 1d8+2 piercing. Fire at anyone in the corridor each round (Init 20). |
| **Speed Run** | A Dash action lets a character attempt 3 blade saves in one turn. |
| **Disable** | Thieves' Tools DC 16 per blade mechanism (1 action each). Arrows: DC 18 to jam the mechanism. |

---

## Event 2: The Sky-Ship Regatta

### Race Course (Theater-of-Mind with Phases)

*This event runs best as narrative with skill checks, not a grid map.
Use the phase tracker below.*

```
    START ─── Phase 1 ─── Phase 2 ─── Phase 3 ─── Phase 4 ─── FINISH
              Storm        Kraken      Sabotage     The
              Clouds       Tentacles   Ram          Needle

    SHIP STATUS TRACKER:
    Hull Points: [30] ████████████████████████████████
    Altitude:    [HIGH]  ▲ ── ── ── ▼  [LOW]
    Speed:       [NORMAL] → [FAST] → [RECKLESS]
```

| Phase | Challenge | Mechanic |
| --- | --- | --- |
| **1: Storm Clouds** | Magical lightning | Group DEX save DC 14. Fail: 2d10 lightning to ship, drop 1 altitude. |
| **2: Kraken Tentacles** | 2 × Giant Octopus (re-skinned) | Grapple the ship (Athletics DC 15 to break). Sever at 15 HP each. |
| **3: Rival Sabotage** | Lucretia's agents ram | Contested Athletics. Lose: 2d6 bludgeoning to ship + drop speed. |
| **4: The Needle** | Floating rock canyon | 3 consecutive checks DC 15: Athletics (steer), Perception (spot gap), Acrobatics (thread through). Each fail: 2d6 bludgeoning to ship. |

| Ship Stat | Value |
| --- | --- |
| **Hull Points** | 30 (destroyed at 0) |
| **AC** | 13 |
| **Crew Stations** | Helm (pilot), Rigging (speed), Bow (lookout/weapons), Deck (free) |

---

## Event 3: The Mock Siege

### Fortress Map (40 × 60 ft.)

```
    ATTACKING TEAM SPAWNS HERE (100 ft. out)
    .  .  .  .  .  .  .  .  .  .  .  .

    . . . . . . [CATAPULT] . . . . . .     Range 300 ft.

    ════════════════════════════════════     ← Open field (no cover)
                                             100 ft. to walls

    ┌══════════╤══════════╤══════════┐
    │ ▲ WALL ▲ │ ▲ WALL ▲ │ ▲ WALL ▲ │     Wall: AC 17, 50 HP/section
    │  (arrow  │  (arrow  │  (arrow  │     Arrow slits: 3/4 cover
    │   slits) │   slits) │   slits) │
    ├──────────┤          ├──────────┤
    │          │          │          │
    │  TOWER   │  GATE    │  TOWER   │     Gate: AC 15, 40 HP
    │  (high   │ ████████ │  (high   │     Battering ram: +8 vs gate
    │  ground) │ ████████ │  ground) │
    │          │          │          │
    ├──────────┴──────────┴──────────┤
    │                                │
    │          COURTYARD             │
    │                                │
    │       ★ FLAG (capture)         │     Capture the flag = win
    │                                │
    └────────────────────────────────┘
```

| Feature | Rule |
| --- | --- |
| **Walls** | AC 17, 50 HP per section. Climbing: Athletics DC 15 (or use ladders). |
| **Arrow Slits** | Three-quarters cover (+5 AC, +5 DEX saves) for defenders. |
| **Gate** | AC 15, 40 HP. Battering ram: +8 to hit, 3d6 bludgeoning per hit. |
| **Towers** | 20 ft. high. Ranged attacks from towers: advantage (high ground). |
| **Catapult** | 1d10+5 bludgeoning, 300 ft. range. 1 shot per round. Reload: 1 action. |
| **Ladders** | Place against wall (1 action). Climb: 15 ft. of movement. Can be pushed off (Athletics DC 13). |
| **Knockout Rules** | ALL damage is non-lethal. Players/NPCs drop to 0 = "eliminated." Revived after the round. |

### Round 2: Defending Against the Iron Vanguard

| Iron Vanguard Member | Approach |
| --- | --- |
| **Bron Ironfist** | Battering ram. Charges the gate. Laughing. |
| **Sylara Moonwhisper** | Ranged support. Firebolt from 120 ft. Targets wall sections. |
| **Torq** | Climbs the wall with bare hands (Athletics +7). Will grapple anyone at the top. |
| **Pip Nimblefingers** | Sneaks around to back wall (Stealth +8). Climbs while attention is on Bron. |

---

## Adventure 4: Grayhold Ruins

### Main Hall (40 × 30 ft.)

```
    N ↑
    ┌──────────────────────────────────────┐
    │  ┌─────┐                  ┌─────┐   │
    │  │SHELF│  Research desks  │SHELF│   │
    │  │books│   [D] [D] [D]   │books│   │
    │  └─────┘                  └─────┘   │
    │                                      │
    │    [Crate]  QUILL (Q)  [Crate]      │
    │                                      │
    │  Bedroll  Bedroll  Bedroll           │
    │  Bedroll  Bedroll  Bedroll           │
    │                                      │
    │      ┌──COLLAPSED WALL──┐            │
    │      │    (rubble)      │            │
    │      └──────────────────┘            │
    │            │                         │
    │            ▼ Stairs to LOWER VAULT   │
    │                                      │
    │                         ENTRANCE →   │
    └──────────────────────────────────────┘

    D = Desk with research notes
    Q = Professor Quill's position
```

| Feature | Rule |
| --- | --- |
| **Bookshelves** | Half cover. Contain Silver Crow research. |
| **Research Desks** | Investigation DC 12: Anchor diagrams, ley-line maps. DC 15: Valerius's handwriting on ritual notes. |
| **Crates** | Supplies + crystallized essence samples (Arcana DC 14 to identify). |
| **Collapsed Wall** | Difficult terrain. Leads to stairs going down. |

### Lower Vault — The Anchor Chamber (20 × 20 ft.)

```
    ┌────────────────────────┐
    │                        │
    │   ┌──────────────┐     │
    │   │   WARDED     │     │    Ward: DC 18 Dispel Magic
    │   │    DOOR      │     │    or DC 18 Thieves' Tools
    │   └──────┬───────┘     │
    │          │              │
    │    ┌─────┴─────┐       │
    │    │  ANCHOR   │       │    The Anchor of Death
    │    │   (★)     │       │    Glowing black-gold orb
    │    │  pedestal │       │    on a stone pedestal
    │    └───────────┘       │
    │                        │
    │  [G]                   │    G = Gilded Sentinel
    │  (dormant until        │    (activates at dramatic
    │   triggered)           │     moment)
    │                        │
    │        STAIRS UP ▲     │
    └────────────────────────┘
```

| Feature | Rule |
| --- | --- |
| **Warded Door** | Arcane lock. Dispel Magic DC 18 or Thieves' Tools DC 18. Forcing: Athletics DC 25. |
| **Anchor of Death** | Radiates overwhelming necromancy/transmutation. Touching it: DC 15 CON save or gain 1 exhaustion level. |
| **Pedestal** | Removing the Anchor triggers the Gilded Sentinel. |
| **Gilded Sentinel** | See stat blocks. Activates when the Anchor is touched or Quill is threatened. |

---

## Adventure 5: The Hall of Statues

### Infiltration Route

```
    SOLHAVEN PALACE — CROSS SECTION

    ┌──────────────────────────────────────┐
    │         GRAND BALLROOM               │   Ground Floor
    │                                      │
    │    ┌──────────────────────────┐      │
    │    │  PHILANTHROPIST GALLERY  │      │
    │    │                          │      │
    │    │  [P] [P] [P] [P] [P]   │      │   P = Portrait
    │    │                          │      │
    │    │        [P★]              │      │   P★ = First Champion's
    │    │     (hidden door         │      │       portrait (seam
    │    │      behind this one)    │      │       DC 16 Perception)
    │    └──────────┬───────────────┘      │
    └───────────────┼──────────────────────┘
                    │ Hidden staircase
                    │ (spiral, stone, narrow)
                    ▼

    ┌──────────────────────────────────────┐
    │          THE HALL OF STATUES         │   Underground
    │                                      │
    │   [POD] [POD] [POD] [POD] [POD]    │
    │   [POD] [POD] [POD] [POD] [POD]    │   POD = Crystalline
    │   [POD] [POD] [POD] [POD] [POD]    │         stasis pod
    │                                      │   (hundreds total)
    │         ════════════════              │
    │         ║   CENTRAL    ║             │   Central conduit
    │         ║   CONDUIT    ║             │   (golden, pulsing)
    │         ════════════════              │
    │                                      │
    │   [BRON] [SYLARA] [TORQ] [PIP]     │   Iron Vanguard
    │           (center cluster)           │   cluster
    │                                      │
    │                    ┌─────────────┐   │
    │                    │  DEEPER     │   │   Leads to Citadel
    │                    │  PASSAGE ↓  │   │   of Chronos
    │                    │ (locked)    │   │   (inaccessible now)
    │                    └─────────────┘   │
    │                                      │
    │   EXIT ▲ (back to Gallery)           │
    └──────────────────────────────────────┘
```

| Feature | Rule |
| --- | --- |
| **Hidden Door** | Perception DC 16 (seam in wall). Investigation DC 14 (mechanism). |
| **Staircase** | 200 ft. down. Cold. Golden sconces light automatically. |
| **Stasis Pods** | Detect Magic: Transmutation (chronomancy) + Necromancy (essence drain). |
| **Breaking a Pod** | Force: DC 20 Athletics. Spell: Dispel Magic at 7th level. WARNING: sudden release may kill the occupant (DC 18 Medicine to stabilize). |
| **Central Conduit** | Leads deeper (to Citadel — accessible in Phase 3 only). Touching it: 4d6 radiant + CON DC 16 or stunned 1 round. |
| **Patrol Timer** | 10 minutes before Golden Guard patrol arrives. Group Stealth DC 15 to escape unseen. |
| **If Caught** | 6 × Veterans in gilded plate. Fight or flee. Alarm raises palace lockdown in 3 rounds. |

# Phase 1 — Tactical Maps & Encounter Details

> ASCII tactical maps and detailed encounter setups for every combat and
> skill-challenge in Phase 1. Grid scale: 1 character ≈ 5 ft.

---

## Adventure 1A — The Clockwork Cattle

### Encounter Map: The Farmlands

The fight takes place across open farmland — three farms arranged along a dirt
road north of Oakhaven. The constructs are scattered, one or two per farm.

```
                         N
                         ↑         KEY
                                   B = Barn
    FARM 3 (Holt's)                H = Farmhouse
    ┌─────────────────┐            F = Fence (half-cover)
    │  ~~~pond~~~  H  │            ~ = Pond (difficult terrain)
    │              .  │            . = Dirt path
    │   F F F   🐄   │            C = Clockwork Cattle
    │   F F F      .  │            T = Tree (full cover)
    └───────────.──.──┘
                .  .
    FARM 2 (Greta's)
    ┌───────────.──.──┐
    │  T     F F F  . │
    │     🐄 F F F    │
    │  T        B  .  │
    │    H   🐄    .  │
    └───────────.──.──┘
                .  .
    FARM 1 (Bramble's)
    ┌───────────.──.──┐
    │              .  │
    │  H  F F  B  .   │
    │     F F  🐄  .  │
    │  T  T       .   │
    └───────────.──.──┘
                .  .
                .  .
         (Road to Oakhaven)
```

### Terrain Rules

| Feature | Effect |
| --- | --- |
| **Fence (F)** | Half cover (+2 AC). HP 10, AC 10. A Clockwork Cattle Stampede Charge destroys fences in its path automatically. |
| **Barn (B)** | Full cover. Can be entered (door on south side). Climbing to the roof: Athletics DC 10. Constructs can't climb — they ram the barn instead (the barn has 50 HP). |
| **Pond (~)** | Difficult terrain. Constructs that enter the pond make a DC 12 Dexterity save or become stuck (speed 0) until end of their next turn. Clever players can lure them in. |
| **Tree (T)** | Full cover. Constructs that Stampede Charge into a tree take 7 (2d6) bludgeoning damage and their charge ends. |
| **Farmhouse (H)** | Off-limits for combat (civilians inside). Constructs avoid them — the Predator Detection Algorithm treats buildings as "terrain." |

### Encounter Tactics

**Constructs' behavior (they're dumb):**
- Each construct targets the nearest moving creature.
- They use Stampede Charge whenever it recharges, always in a straight line.
- If no targets are nearby, they chase the nearest animal (or chicken or cat).
- They cannot coordinate. They sometimes Stampede Charge into each other.

**Suggested initiative groupings:**
- Constructs on Farms 1 and 2 act together (Initiative +0).
- Construct on Farm 3 acts separately (it's far away; players may not encounter it immediately).

**If the Leopards are present,** the Leopards occupy Farm 2 and have drawn
all the chaos into one area. Gareth is on the barn roof (used his action
climbing, can't attack this round). Bramblesnap's Grease covers a 10-ft
square in front of the barn (Dex DC 10 or prone for anyone entering).

---

## Adventure 1B — The Wine-Cellar Wight

### Encounter Map: Delacroix Wine Cellar

Two levels connected by a staircase. The upper level is the wine storage;
the lower level is the breached tomb.

```
UPPER LEVEL — Wine Cellar
(20 ft. ceiling, dim light from wall sconces)

     ┌──────────────────────────────────┐
     │  R  R  R  R  R  R  R  R  R  R   │  KEY
     │                                  │  R = Wine rack (see rules)
     │  R  R  R  R  R  R  R  R  R  R   │  B = Barrel stack
     │                                  │  S = Staircase down
     │  R  R  R  R  R  R  R  R  R  R   │  E = Entrance
     │                                  │  Z = Zombie (starting pos)
     │  R  R  R  R  R  R  B  B  B  B   │  K = Skeleton (starting pos)
     │                                  │  W = Wight (starting pos)
     │     B  B  B  B           S ↓     │
     │                                  │
     E ←────────── (entrance) ──────────┘

LOWER LEVEL — Ancient Tomb
(15 ft. ceiling, no light — darkness)

     ┌──────────────────────────────────┐
     │                                  │
     │  S ↑                P            │  P = Stone pillar (half cover)
     │         Z        Z               │
     │                                  │
     │    K     ╔═══════════╗     K     │  Sarcophagus in center
     │          ║ SARCOPHAG ║           │
     │          ╚═══════════╝           │
     │               W                  │
     │                                  │
     │  P           Z         Z     P   │
     │                                  │
     └──────────────────────────────────┘
```

### Terrain Rules

| Feature | Effect |
| --- | --- |
| **Wine Rack (R)** | Difficult terrain to move through. Provides half cover. HP 8, AC 8. If destroyed by any means, the rack SHATTERS — wine everywhere, Margaux screams from outside. Track on Wine Damage Table. |
| **Barrel Stack (B)** | Full cover, can't be moved through. HP 20, AC 12. Can be tipped over as an action (Athletics DC 13) to create a 10-ft. line of difficult terrain and deal 2d6 bludgeoning to creatures in the line (DC 12 Dex save). |
| **Staircase (S)** | 10 ft. wide, steep. Creatures moving up the staircase treat it as difficult terrain. |
| **Pillar (P)** | Half cover. Indestructible. |
| **Sarcophagus** | Full cover if crouched behind it. Indestructible stone. |
| **Darkness (lower level)** | No light sources. Darkvision or brought light required. The Wight and undead can see fine. |

### Encounter Tactics

**Phase 1 — Upper Cellar:**
- When players enter, 2 Zombies emerge from behind barrel stacks. They shamble
  toward the party. They are slow and dumb.
- The 2 Skeletons stand partway down the staircase and fire shortbows (+4 to
  hit, 1d6+2 piercing) up through the gap, then retreat downstairs.

**Phase 2 — Lower Tomb:**
- The Wight waits in the tomb with 2 remaining Zombies as bodyguards.
- The Wight is tactically smart: it stays behind the sarcophagus (half-cover)
  and uses its **Life Drain** on any PC that's already wounded.
- It sends Zombies to block the staircase bottleneck.
- If reduced to half HP, the Wight uses its **Longsword** in melee, fighting
  aggressively— it is an ancient warrior, not a coward.

**Environmental danger for players:**
- Any AoE spell in the upper cellar risks wine racks. Roll d4 per rack in the
  AoE area. On a 1, that rack shatters.
- A missed ranged attack roll of 5 or less (natural) hits a rack in the upper
  cellar on a d6 roll of 1–2.

**Leopard Residue (if active):** Two racks in the upper level are already
destroyed. A 5-ft. square near the staircase is charred black (Bramblesnap's
Burning Hands). The smell of burnt wine is overwhelming.

---

## Adventure 2 — Whispering Woods

### Exploration Map

This is primarily a hex-crawl / narrative exploration. No grid combat expected
unless the players fight the surveyors.

```
                    N
                    ↑

    ┌───────────────────────────────────┐
    │              DEEP WOODS           │
    │     (Verdaine territory proper)   │
    │                                   │
    │   ☆ Survey Camp                   │  KEY
    │       (Foreman Harwick)           │  ☆ = Key location
    │              |                    │  ← = Game trail
    │              ←─── Iron Stakes ──→ │  🌳 = Treant (!)
    │              |                    │
    │   ☆ Mushroom Ring                 │
    │     (Dewdrop the Pixie)           │
    │          |                        │
    │          |    🌳 ☆ Lost Leopards  │
    │          |        (clearing)      │
    │          |       /                │
    │          ←──────←                 │
    │          |                        │
    │    ☆ Forest Edge                  │
    │      (displaced animals)          │
    │          |                        │
    └──────────|────────────────────────┘
               |
         (Trail from Oakhaven — 4 miles)
```

### Key Location Details

**Forest Edge (Encounter 1):**
- Displaced deer, foxes, rabbits. An owlbear cub (non-hostile, confused, cute).
- Dewdrop the Pixie appears on a mushroom nearby and gives the "Bright Men"
  speech.
- Nature DC 12: The displacements are all heading *away* from the deep woods —
  something is driving them east.

**Leopard Clearing (Encounter 2):**
- The Leopards sit in a clearing arguing. The Treant (standing 15 ft behind
  them, perfectly still) has arrows carved into its bark. It radiates slow
  fury.
- If the Treant is not addressed, it waits until the Leopards try to leave,
  then blocks the path and demands "justice" (it wants the carvings healed
  with magic or an apology — Persuasion DC 12 or a casting of *Mending*).
- **Treant stat block:** Use the standard MM Treant (CR 9). It's WAY above
  the party's level. It is NOT here to fight — it's here to be terrifying
  and reasonable. If the party attacks it, it swats them once (dealing
  significant damage) and says, "I am not your enemy. Use your *words*."

**Survey Camp (Encounter 3):**
- 6 workers in golden surcoats, 2 tents, a table with maps and measuring tools.
- 3 iron stakes driven into the ground at 100-foot intervals. Each stake
  radiates faint abjuration magic (Detect Magic or Arcana DC 14).
- Foreman Harwick has the Survey Permit (see Handouts).

### Skill Challenge: Navigating the Whispering Woods

If the party needs to find the survey camp without Dewdrop's guidance:

**Goal:** 4 successes before 3 failures.

| Skill | DC | Description |
| --- | --- | --- |
| Survival | 13 | Follow broken branches and boot prints deeper into the woods |
| Nature | 14 | Read the ley-line disruption patterns to trace the source |
| Perception | 13 | Spot the golden glint of the surveyors' equipment through the trees |
| Arcana | 15 | Feel the "pull" of the iron stakes on the local magical weave |
| Animal Handling | 12 | Follow panicking animals to trace their flight path backward |

**Success:** The party finds the camp efficiently (short rest time).
**Failure:** They stumble in circles, arrive after dark, and the surveyors are
on alert (Harwick's Persuasion DC increases by 2).

---

## Adventure 3 — Emerald Pass

### Encounter Map: The Ambush Point

The ambush occurs in a narrow section of the mountain pass — high cliff walls
on both sides, a road through the middle.

```
    CLIFF WALL (60 ft. high, unclimbable without gear)
    ╔══════════════════════════════════════════════╗
    ║                                              ║
    ║  A₁  A₂           (cliff ledge, 20 ft up)   ║   KEY
    ║  ──── ────        [Bandit archers: 4]        ║   A = Archer position
    ║                                              ║   X = Arrow (stuck in ground)
    ║                                              ║   B = Boulder (full cover)
    ╠──B──────────────────────────────────B────────╣
    │       X  X                                   │
    │          X  X   ← ROAD (10 ft wide) →        │   ROAD LEVEL
    │       X     X                                │
    │    X           X                             │
    ╠──B──────────────────────────────────B────────╣
    ║                                              ║
    ║  A₃  A₄           (cliff ledge, 20 ft up)   ║
    ║  ──── ────        [Bandit archers: 4]        ║
    ║                                              ║
    ╚══════════════════════════════════════════════╝

         ↓ Road continues to Corwin's Camp (1 mile) ↓
         ↑ Road back toward Oakhaven (28 miles) ↑
```

### Terrain Rules

| Feature | Effect |
| --- | --- |
| **Cliff Ledge** | 20 ft. above road. Three-quarters cover for archers on ledge. Climbing: Athletics DC 18 (the cliffs are smooth). |
| **Road** | Flat, open. No cover except the boulders. |
| **Boulders (B)** | Full cover. A Medium creature can shelter behind one. 4 boulders total. |
| **Arrows (X)** | The stuck arrows form a perfect circle around where the party stands. Cosmetic — shows Corwin's precision. |

### Encounter: The Ambush (Non-Lethal by Default)

This should feel **theatrical, not deadly**. Corwin is putting on a show.

**Bandit deployment:**
- 8 Bandits with shortbows on the cliff ledges (4 per side).
- 2 Bandit Captains on the road, blocking each exit of the narrow section.
  They step out from behind boulders once Corwin finishes his speech.
- 2 additional Bandits hidden in rock alcoves as reserves.
- Sir Corwin is NOT present. His voice echoes — he's watching from a hidden
  position up the cliff.

**If the players fight:**
- The archers fire warning shots first (against AC, but aiming for the ground
  near the players — intentional misses for 2 rounds).
- If the players persist, the archers actually shoot (Bandit: +3, 1d6+1).
- The Captains try to subdue, not kill (non-lethal strikes).
- If the players down 4+ bandits, Corwin calls a retreat. "Enough! Let them
  pass. They've earned it."

**If the players parley:**
- Corwin invites them to follow the road to his camp. The Captains escort
  them — politely.

### Encounter Map: Corwin's Camp

```
                        WATERFALL
                     ║║║║║║║║║║║║║║
                     ║║║║║║║║║║║║║║
                ┌────── Hidden Path ──────┐
                │     (behind falls)      │
                │                         │
    ┌───────────┴─────────────────────────┴──────────┐
    │                                                │
    │   🔥 Campfire                                  │   KEY
    │   ┌──────┐  ┌──────┐  ┌──────┐                │   🔥 = Campfire
    │   │Tent 1│  │Tent 2│  │Tent 3│                │   C = Corwin's tent
    │   └──────┘  └──────┘  └──────┘                │
    │                                                │
    │   ┌──────────────┐        ┌─────────────┐     │
    │   │ Cargo (stolen│        │   C         │     │
    │   │ goods, neatly│        │ (Corwin's   │     │
    │   │ organized)   │        │  quarters — │     │
    │   └──────────────┘        │  tablecloth,│     │
    │                           │  candles,   │     │
    │   ┌──────────┐            │  the Golden │     │
    │   │ Weapon   │            │  Invitation)│     │
    │   │ Rack     │            └─────────────┘     │
    │   │(Destiny!)│                                │
    │   └──────────┘                                │
    │                                                │
    └────────────────────────────────────────────────┘
              |
         (Path to road — 1 mile)
```

### Corwin's Camp Details

- **Cargo:** ~800 gp worth of trade goods (spices, textiles, tools). If
  returned to the merchants, the players earn gratitude and 100 gp finders'
  fee.
- **Weapon Rack:** Contains various confiscated weapons, including Gareth's
  greatsword "Destiny." (If the players return it, Gareth is effusively
  grateful and names them "honorary Leopards." The players may not want this.)
- **Corwin's Tent:** A small, tidy space. A writing desk with letters
  (half-finished, to a sister — see NPC doc: Mira Ashvane). The Golden
  Invitation is pinned to a board above the desk. A portrait miniature of a
  woman in Silver Crow colors.
- **Campfire:** A communal area. If the players dine with Corwin, he serves
  surprisingly good food. He insists on decorum.

---

## Adventure 3 — The Feast at Oakhaven (End of Phase 1)

### Venue: The Crossroads Inn (Expanded)

For the feast, Barret pushes all the tables together. The whole town attends.

```
    ┌──────────────────────────────────────────┐
    │  ┌─────┐                    ┌──────────┐ │
    │  │ Bar │  Barret             │ Kitchen  │ │
    │  │     │                    │ (Nessa)  │ │
    │  └─────┘                    └──────────┘ │
    │                                          │
    │  ╔══════════════════════════════════╗     │
    │  ║     LONG TABLE (whole town)     ║     │
    │  ║                                 ║     │
    │  ║  Mayor Tilda (head of table)    ║     │
    │  ║  Herald Elara (standing)        ║     │
    │  ║  Players (seats of honor)       ║     │
    │  ║  Leopards (end of table)        ║     │
    │  ║  Flick, Margaux, townsfolk      ║     │
    │  ╚══════════════════════════════════╝     │
    │                                          │
    │  ┌────────────┐    ┌────────────┐        │
    │  │ Notice     │    │ Fireplace  │        │
    │  │ Board      │    │            │        │
    │  └────────────┘    └────────────┘        │
    │              ENTRANCE                    │
    └──────────────────────────────────────────┘
```

/**
 * The Gilded Stasis — Foundry VTT Import Script
 * For Foundry V12, dnd5e system 3.x
 *
 * This script registers on module activation and provides a one-click
 * import of all campaign actors, journal entries, and roll tables.
 */

const MODULE_ID = 'gilded-stasis';
const MODULE_PATH = `modules/${MODULE_ID}/data`;

/* ───────────────────────────────────────────────────────────
   Module API — available as game.gildedStasis.importContent()
   ─────────────────────────────────────────────────────────── */

Hooks.once('init', () => {
  game.gildedStasis = {
    importContent: () => showImportDialog()
  };
});

/* ───────────────────────────────────────────────────────────
   Auto-prompt on first activation
   ─────────────────────────────────────────────────────────── */

Hooks.once('ready', async () => {
  if (!game.user.isGM) return;

  game.settings.register(MODULE_ID, 'imported', {
    name: 'Content Imported',
    scope: 'world',
    config: false,
    type: Boolean,
    default: false
  });

  if (!game.settings.get(MODULE_ID, 'imported')) {
    showImportDialog();
  }
});

/* ───────────────────────────────────────────────────────────
   Import Dialog
   ─────────────────────────────────────────────────────────── */

function showImportDialog() {
  new Dialog({
    title: 'The Gilded Stasis — Import Campaign',
    content: `
      <div style="margin: 10px 0; line-height: 1.6;">
        <p>Welcome to <strong>The Gilded Stasis</strong> campaign module!</p>
        <p>This will import all custom content into your world:</p>
        <ul>
          <li><strong>23 Actors</strong> — Custom NPCs &amp; creatures with full stat blocks</li>
          <li><strong>7 Journals</strong> — 29 player handouts &amp; location guides</li>
          <li><strong>2 Roll Tables</strong> — Oakhaven Rumors &amp; Time Echo Summon</li>
        </ul>
        <p><em>All content will be organized in "Gilded Stasis" folders by campaign phase.</em></p>
      </div>`,
    buttons: {
      import: {
        icon: '<i class="fas fa-download"></i>',
        label: 'Import All Content',
        callback: () => runFullImport()
      },
      later: {
        icon: '<i class="fas fa-clock"></i>',
        label: 'Remind Me Later'
      },
      dismiss: {
        icon: '<i class="fas fa-times"></i>',
        label: "Don't Ask Again",
        callback: () => game.settings.set(MODULE_ID, 'imported', true)
      }
    },
    default: 'import'
  }).render(true);
}

/* ───────────────────────────────────────────────────────────
   Master Import Function
   ─────────────────────────────────────────────────────────── */

async function runFullImport() {
  ui.notifications.info('Gilded Stasis: Starting import…');

  try {
    // 1. Fetch all data files in parallel
    const [actorsRaw, journalsRaw, tablesRaw] = await Promise.all([
      fetch(`${MODULE_PATH}/actors.json`).then(r => {
        if (!r.ok) throw new Error(`Failed to load actors.json (${r.status})`);
        return r.json();
      }),
      fetch(`${MODULE_PATH}/journals.json`).then(r => {
        if (!r.ok) throw new Error(`Failed to load journals.json (${r.status})`);
        return r.json();
      }),
      fetch(`${MODULE_PATH}/tables.json`).then(r => {
        if (!r.ok) throw new Error(`Failed to load tables.json (${r.status})`);
        return r.json();
      })
    ]);

    // 2. Create folder structure
    const folders = await createFolders();

    // 3. Import actors
    ui.notifications.info(`Gilded Stasis: Importing ${actorsRaw.length} actors…`);
    for (const data of actorsRaw) {
      await importActor(data, folders);
    }

    // 4. Import journal entries
    ui.notifications.info(`Gilded Stasis: Importing ${journalsRaw.length} journal entries…`);
    for (const data of journalsRaw) {
      await importJournal(data, folders);
    }

    // 5. Import roll tables
    ui.notifications.info(`Gilded Stasis: Importing ${tablesRaw.length} roll tables…`);
    for (const data of tablesRaw) {
      await importTable(data, folders);
    }

    // 6. Mark complete
    await game.settings.set(MODULE_ID, 'imported', true);

    // 7. Success dialog
    ui.notifications.info('Gilded Stasis: Import complete!');
    new Dialog({
      title: 'Import Complete!',
      content: `
        <div style="margin: 10px 0; text-align: center; line-height: 1.6;">
          <h2 style="margin-bottom: 4px;">The Gilded Stasis</h2>
          <p>Successfully imported:</p>
          <ul style="list-style: none; padding: 0;">
            <li>✅ ${actorsRaw.length} Actors</li>
            <li>✅ ${journalsRaw.length} Journal Entries</li>
            <li>✅ ${tablesRaw.length} Roll Tables</li>
          </ul>
          <p style="margin-top: 12px;">Check your <strong>Actors</strong>, <strong>Journal</strong>,
          and <strong>Roll Tables</strong> sidebar tabs.<br/>
          Everything is in <em>"Gilded Stasis"</em> folders.</p>
        </div>`,
      buttons: { ok: { icon: '<i class="fas fa-check"></i>', label: 'Got It!' } },
      default: 'ok'
    }).render(true);
  } catch (err) {
    console.error('Gilded Stasis import error:', err);
    ui.notifications.error(`Gilded Stasis: Import failed — ${err.message}. Check console (F12) for details.`);
  }
}

/* ───────────────────────────────────────────────────────────
   Folder Creation
   ─────────────────────────────────────────────────────────── */

async function createFolders() {
  const f = {};

  // ── Actor folders ──
  f.actorRoot = await Folder.create({
    name: 'Gilded Stasis', type: 'Actor', color: '#daa520'
  });
  const actorSubs = await Folder.create([
    { name: 'Phase 1 — Local Legends',    type: 'Actor', folder: f.actorRoot.id, color: '#8fbc8f' },
    { name: 'Phase 2 — Heroic Games',     type: 'Actor', folder: f.actorRoot.id, color: '#4682b4' },
    { name: 'Phase 3 — The Gilded Stasis', type: 'Actor', folder: f.actorRoot.id, color: '#cd853f' },
    { name: 'Key NPCs',                   type: 'Actor', folder: f.actorRoot.id, color: '#9370db' }
  ]);
  f.actorP1  = actorSubs[0];
  f.actorP2  = actorSubs[1];
  f.actorP3  = actorSubs[2];
  f.actorNPC = actorSubs[3];

  // ── Journal folders ──
  f.journalRoot = await Folder.create({
    name: 'Gilded Stasis', type: 'JournalEntry', color: '#daa520'
  });
  const journalSubs = await Folder.create([
    { name: 'Locations',         type: 'JournalEntry', folder: f.journalRoot.id, color: '#2e8b57' },
    { name: 'Phase 1 Handouts',  type: 'JournalEntry', folder: f.journalRoot.id, color: '#8fbc8f' },
    { name: 'Phase 2 Handouts',  type: 'JournalEntry', folder: f.journalRoot.id, color: '#4682b4' },
    { name: 'Phase 3 Handouts',  type: 'JournalEntry', folder: f.journalRoot.id, color: '#cd853f' }
  ]);
  f.journalLoc = journalSubs[0];
  f.journalP1  = journalSubs[1];
  f.journalP2  = journalSubs[2];
  f.journalP3  = journalSubs[3];

  // ── Table folder ──
  f.tableRoot = await Folder.create({
    name: 'Gilded Stasis', type: 'RollTable', color: '#daa520'
  });

  return f;
}

/* ───────────────────────────────────────────────────────────
   Actor Import
   ─────────────────────────────────────────────────────────── */

async function importActor(data, folders) {
  const folderMap = {
    1: folders.actorP1?.id,
    2: folders.actorP2?.id,
    3: folders.actorP3?.id,
    0: folders.actorNPC?.id
  };

  const doc = {
    name: data.name,
    type: 'npc',
    folder: folderMap[data.phase] ?? folders.actorRoot?.id,
    system: {
      abilities: {
        str: { value: data.str ?? 10 },
        dex: { value: data.dex ?? 10 },
        con: { value: data.con ?? 10 },
        int: { value: data.int ?? 10 },
        wis: { value: data.wis ?? 10 },
        cha: { value: data.cha ?? 10 }
      },
      attributes: {
        ac: { flat: data.ac ?? 10, calc: 'flat' },
        hp: {
          value: data.hp ?? 10,
          max: data.hp ?? 10,
          formula: data.hpFormula ?? ''
        },
        movement: {
          walk:   data.speed?.walk   ?? 30,
          fly:    data.speed?.fly    ?? 0,
          swim:   data.speed?.swim   ?? 0,
          burrow: data.speed?.burrow ?? 0,
          hover:  data.speed?.hover  ?? false,
          units: 'ft'
        },
        senses: {
          darkvision:  data.senses?.darkvision  ?? 0,
          blindsight:  data.senses?.blindsight  ?? 0,
          tremorsense: data.senses?.tremorsense ?? 0,
          truesight:   data.senses?.truesight   ?? 0,
          units: 'ft'
        }
      },
      details: {
        cr: data.cr ?? 0,
        type: {
          value: data.creatureType ?? 'humanoid',
          subtype: data.subtype ?? ''
        },
        alignment: data.alignment ?? '',
        biography: { value: data.biography ?? '' }
      },
      traits: {
        size: data.size ?? 'med',
        di:  { value: data.di ?? [], custom: '' },
        dr:  { value: data.dr ?? [], custom: data.drCustom ?? '' },
        dv:  { value: data.dv ?? [], custom: '' },
        ci:  { value: data.ci ?? [], custom: '' }
      }
    },
    prototypeToken: {
      name: data.name,
      displayName: 30,      // OWNER_HOVER
      displayBars: 40,      // ALWAYS
      bar1: { attribute: 'attributes.hp' },
      sight: {
        enabled: (data.senses?.darkvision > 0 || data.senses?.truesight > 0)
      },
      disposition: data.disposition ?? -1  // HOSTILE
    }
  };

  // Set save proficiencies
  if (data.saves) {
    for (const ability of data.saves) {
      doc.system.abilities[ability].proficient = 1;
    }
  }

  // Set spellcasting ability
  if (data.spellcastingAbility) {
    doc.system.attributes.spellcasting = data.spellcastingAbility;
  }

  // Create the actor
  const actor = await Actor.create(doc);

  // Set skill proficiencies after creation (system needs the actor to exist)
  if (data.skills && Object.keys(data.skills).length > 0) {
    const skillUpdate = {};
    for (const [skill, prof] of Object.entries(data.skills)) {
      skillUpdate[`system.skills.${skill}.value`] = prof;
    }
    await actor.update(skillUpdate);
  }

  // Create embedded items (features, actions, reactions, legendary)
  if (data.items && data.items.length > 0) {
    const itemDocs = data.items.map(item => ({
      name: item.name,
      type: 'feat',
      system: {
        description: { value: item.description ?? '' },
        type: {
          value: item.activation === 'legendary' ? 'monster'
               : item.activation === 'lair'      ? 'monster'
               : 'monster',
          subtype: ''
        }
      }
    }));
    await actor.createEmbeddedDocuments('Item', itemDocs);
  }

  return actor;
}

/* ───────────────────────────────────────────────────────────
   Journal Import
   ─────────────────────────────────────────────────────────── */

async function importJournal(data, folders) {
  const folderMap = {
    'locations': folders.journalLoc?.id,
    'phase1':    folders.journalP1?.id,
    'phase2':    folders.journalP2?.id,
    'phase3':    folders.journalP3?.id
  };

  const pages = (data.pages ?? []).map((p, i) => ({
    name: p.name,
    type: 'text',
    text: { content: p.content ?? '', format: 1 },
    sort: (i + 1) * 100000
  }));

  await JournalEntry.create({
    name: data.name,
    folder: folderMap[data.folder] ?? folders.journalRoot?.id,
    pages: pages,
    ownership: data.playerVisible
      ? { default: 2 }   // OBSERVER — players can view
      : { default: 0 }   // NONE — GM only
  });
}

/* ───────────────────────────────────────────────────────────
   Roll Table Import
   ─────────────────────────────────────────────────────────── */

async function importTable(data, folders) {
  const results = (data.results ?? []).map((r, i) => ({
    text: r.text,
    range: r.range,     // [low, high]
    weight: 1,
    type: 0             // text result
  }));

  await RollTable.create({
    name: data.name,
    folder: folders.tableRoot?.id,
    formula: data.formula ?? '1d6',
    replacement: true,
    displayRoll: true,
    description: data.description ?? '',
    results: results
  });
}

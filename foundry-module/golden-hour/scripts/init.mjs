/**
 * The Golden Hour — Foundry VTT Import Script
 * For Foundry V12, dnd5e system 3.x
 *
 * One-click import/update of all one-shot actors, journal entries, and roll tables.
 */

const MODULE_ID = 'golden-hour';
const MODULE_PATH = `modules/${MODULE_ID}/data`;

// Map actor names to folder categories
const ACTOR_FOLDER_MAP = {
  'Arena Chimera Spawn':    'arena',
  'Arena Drake':            'arena',
  'Arena Champion Golem':   'arena',
  'Golem of the Seventh Star': 'arena',
  'Rift Stalker':           'rift',
  'Temporal Wraith':        'rift',
  'Riftborn Colossus':      'rift',
  'Valerius Thorne — The Philanthropist': 'npc',
  'Bron Ironfist':          'npc',
  'Sylara Moonwhisper':     'npc',
  'Torq':                   'npc',
  'Pip Nimblefingers':      'npc',
  'Herald Elara Dawnmantle': 'npc'
};

/* ───────────────────────────────────────────────────────────
   Module API — available as game.goldenHour.importContent()
   ─────────────────────────────────────────────────────────── */

Hooks.once('init', () => {
  console.log("Golden Hour | Initializing API");
  game.goldenHour = {
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
    title: 'The Golden Hour — Import One-Shot',
    content: `
      <div style="margin: 10px 0; line-height: 1.6;">
        <p>Welcome to <strong>The Golden Hour</strong> one-shot module!</p>
        <p>This will import/update all custom content into your world:</p>
        <ul>
          <li><strong>18 Actors</strong> — 8 creatures, 5 allied NPCs, &amp; 5 pre-gen PCs</li>
          <li><strong>7 Journals</strong> — Adventure overview, 5 player handouts, &amp; key scenes</li>
          <li><strong>1 Roll Table</strong> — Rift Lair Actions</li>
          <li><strong>5 Scenes</strong> — High-quality battle maps + Landing Page</li>
        </ul>
        <p><em>All content will be organized in "Golden Hour" folders. Existing items will be updated.</em></p>
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
  ui.notifications.info('Golden Hour: Starting import/update…');
  console.log("Golden Hour | Starting full import");

  try {
    console.log("Golden Hour | Fetching data files...");
    const [actorsRaw, journalsRaw, tablesRaw, scenesRaw] = await Promise.all([
      fetch(`${MODULE_PATH}/actors.json`).then(r => r.json()),
      fetch(`${MODULE_PATH}/journals.json`).then(r => r.json()),
      fetch(`${MODULE_PATH}/tables.json`).then(r => r.json()),
      fetch(`${MODULE_PATH}/scenes.json`).then(r => r.json())
    ]);

    console.log("Golden Hour | Ensuring folder structure exists...");
    const folders = await createFolders();

    console.log(`Golden Hour | Processing actors...`);
    for (const data of actorsRaw) {
      await importActor(data, folders);
    }

    console.log(`Golden Hour | Processing journal entries...`);
    for (const data of journalsRaw) {
      await importJournal(data, folders);
    }

    console.log(`Golden Hour | Processing roll tables...`);
    for (const data of tablesRaw) {
      await importTable(data, folders);
    }

    console.log(`Golden Hour | Processing scenes...`);
    for (const data of scenesRaw) {
      await importScene(data, folders);
    }

    await game.settings.set(MODULE_ID, 'imported', true);
    ui.notifications.info('Golden Hour: Update/Import complete!');
    console.log("Golden Hour | Import successful");
  } catch (err) {
    console.error('Golden Hour | Import failed:', err);
    ui.notifications.error(`Golden Hour: Import failed — ${err.message}. See console (F12) for details.`);
  }
}

/* ───────────────────────────────────────────────────────────
   Helper Functions
   ─────────────────────────────────────────────────────────── */

async function getOrCreateFolder(data) {
  const targetParentId = data.folder || null;
  let folder = game.folders.find(f => 
    f.name === data.name && 
    f.type === data.type && 
    (f.folder?.id || null) === targetParentId
  );
  if (folder) return folder;
  console.log(`Golden Hour | Creating folder: ${data.name} (${data.type})`);
  return await Folder.create(data);
}

async function createFolders() {
  const f = {};
  f.actorRoot = await getOrCreateFolder({ name: 'Golden Hour', type: 'Actor', color: '#daa520' });
  f.actorArena = await getOrCreateFolder({ name: 'Arena Creatures', type: 'Actor', folder: f.actorRoot.id, color: '#cd853f' });
  f.actorRift = await getOrCreateFolder({ name: 'Rift Creatures', type: 'Actor', folder: f.actorRoot.id, color: '#8b4789' });
  f.actorNPC = await getOrCreateFolder({ name: 'Allied NPCs', type: 'Actor', folder: f.actorRoot.id, color: '#4682b4' });
  f.actorPregen = await getOrCreateFolder({ name: 'Pre-Generated Characters', type: 'Actor', folder: f.actorRoot.id, color: '#2e8b57' });

  f.journalRoot = await getOrCreateFolder({ name: 'Golden Hour', type: 'JournalEntry', color: '#daa520' });
  f.journalDM = await getOrCreateFolder({ name: 'DM Reference', type: 'JournalEntry', folder: f.journalRoot.id, color: '#8b0000' });
  f.journalHandouts = await getOrCreateFolder({ name: 'Player Handouts', type: 'JournalEntry', folder: f.journalRoot.id, color: '#2e8b57' });

  f.tableRoot = await getOrCreateFolder({ name: 'Golden Hour', type: 'RollTable', color: '#daa520' });
  f.sceneRoot = await getOrCreateFolder({ name: 'Golden Hour', type: 'Scene', color: '#daa520' });
  return f;
}

/**
 * Maps legacy numeric wall properties to V12 constants.
 */
function mapLegacyWalls(walls = []) {
  return walls.map(w => ({
    c: w.c,
    move: w.move === 1 ? 20 : (w.move ?? 0),
    sense: w.sense === 1 ? 20 : (w.sense ?? 0),
    sound: w.sound === 1 ? 20 : (w.sound ?? 0),
    door: w.door ?? 0,
    ds: w.ds ?? 0
  }));
}

async function importScene(data, folders) {
  const folderId = folders.sceneRoot?.id;
  const updateData = {
    name: data.name,
    folder: folderId,
    width: data.width,
    height: data.height,
    grid: data.grid,
    background: data.background,
    globalLight: data.globalLight ?? true,
    darkness: data.darkness ?? 0,
    tokenVision: data.tokenVision ?? true,
    active: data.active ?? false,
    navigation: data.navigation ?? false,
    lights: data.lights ?? [],
    walls: mapLegacyWalls(data.walls ?? [])
  };

  const existing = game.scenes.find(s => s.name === data.name && s.folder?.id === folderId);
  if (existing) {
    console.log(`Golden Hour | Updating scene: ${data.name}`);
    return await existing.update(updateData);
  }
  console.log(`Golden Hour | Creating scene: ${data.name}`);
  return await Scene.create(updateData);
}

async function importActor(data, folders) {
  const category = ACTOR_FOLDER_MAP[data.name];
  let folderId = folders.actorRoot?.id;
  if (category === 'arena') folderId = folders.actorArena?.id;
  else if (category === 'rift') folderId = folders.actorRift?.id;
  else if (category === 'npc') folderId = folders.actorNPC?.id;
  else folderId = folders.actorPregen?.id;

  const doc = {
    name: data.name,
    type: 'npc',
    img: data.img || 'icons/svg/mystery-man.svg',
    folder: folderId,
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
        hp: { value: data.hp ?? 10, max: data.hp ?? 10, formula: data.hpFormula ?? '' },
        movement: { walk: data.speed?.walk ?? 30, units: 'ft' }
      },
      details: { cr: data.cr ?? 0, biography: { value: data.biography ?? '' } }
    },
    prototypeToken: {
      name: data.name,
      texture: { src: data.token || 'icons/svg/mystery-man.svg' },
      disposition: data.disposition ?? -1,
      displayName: 30,
      displayBars: 40,
      bar1: { attribute: 'attributes.hp' }
    }
  };

  const existing = game.actors.find(a => a.name === data.name && a.folder?.id === folderId);
  if (existing) {
    await existing.update(doc);
    const itemIds = existing.items.map(i => i.id);
    if (itemIds.length > 0) await existing.deleteEmbeddedDocuments('Item', itemIds);
    if (data.items?.length > 0) {
      const itemDocs = data.items.map(item => ({
        name: item.name,
        type: 'feat',
        system: { description: { value: item.description ?? '' }, type: { value: 'monster', subtype: '' } }
      }));
      await existing.createEmbeddedDocuments('Item', itemDocs);
    }
    return existing;
  }

  const actor = await Actor.create(doc);
  if (data.items?.length > 0) {
    const itemDocs = data.items.map(item => ({
      name: item.name,
      type: 'feat',
      system: { description: { value: item.description ?? '' }, type: { value: 'monster', subtype: '' } }
    }));
    await actor.createEmbeddedDocuments('Item', itemDocs);
  }
  return actor;
}

async function importJournal(data, folders) {
  const folderMap = { 'dm': folders.journalDM?.id, 'handouts': folders.journalHandouts?.id };
  const folderId = folderMap[data.folder] ?? folders.journalRoot?.id;

  const pages = (data.pages ?? []).map((p, i) => ({
    name: p.name,
    type: 'text',
    text: { content: p.content ?? '', format: 1 },
    sort: (i + 1) * 100000
  }));

  const existing = game.journal.find(j => j.name === data.name && j.folder?.id === folderId);
  if (existing) {
    const pageIds = existing.pages.map(p => p.id);
    if (pageIds.length > 0) await existing.deleteEmbeddedDocuments('JournalEntryPage', pageIds);
    return await existing.createEmbeddedDocuments('JournalEntryPage', pages);
  }

  return await JournalEntry.create({
    name: data.name,
    folder: folderId,
    pages: pages,
    ownership: data.playerVisible ? { default: 2 } : { default: 0 }
  });
}

async function importTable(data, folders) {
  const folderId = folders.tableRoot?.id;
  const results = (data.results ?? []).map((r, i) => ({
    text: r.text,
    range: r.range,
    weight: 1,
    type: 0
  }));

  const existing = game.tables.find(t => t.name === data.name && t.folder?.id === folderId);
  if (existing) {
    const resultIds = existing.results.map(r => r.id);
    if (resultIds.length > 0) await existing.deleteEmbeddedDocuments('TableResult', resultIds);
    return await existing.createEmbeddedDocuments('TableResult', results);
  }

  return await RollTable.create({
    name: data.name,
    folder: folderId,
    formula: data.formula ?? '1d4',
    results: results
  });
}

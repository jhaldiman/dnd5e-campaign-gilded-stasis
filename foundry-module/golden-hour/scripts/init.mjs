/**
 * The Golden Hour — Foundry VTT Import Script
 * For Foundry V12, dnd5e system 3.x
 *
 * One-click import of all one-shot actors, journal entries, and roll tables.
 */

const MODULE_ID = 'golden-hour';
const MODULE_PATH = `modules/${MODULE_ID}/data`;

/* ───────────────────────────────────────────────────────────
   Module API — available as game.goldenHour.importContent()
   ─────────────────────────────────────────────────────────── */

Hooks.once('init', () => {
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
        <p>This will import all custom content into your world:</p>
        <ul>
          <li><strong>18 Actors</strong> — 8 creatures, 5 allied NPCs, &amp; 5 pre-gen PCs</li>
          <li><strong>7 Journals</strong> — Adventure overview, 5 player handouts, &amp; key scenes</li>
          <li><strong>1 Roll Table</strong> — Rift Lair Actions</li>
          <li><strong>5 Scenes</strong> — High-quality battle maps + Landing Page</li>
        </ul>
        <p><em>All content will be organized in "Golden Hour" folders.</em></p>
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
  ui.notifications.info('Golden Hour: Starting import…');

  try {
    const [actorsRaw, journalsRaw, tablesRaw, scenesRaw] = await Promise.all([
      fetch(`${MODULE_PATH}/actors.json`).then(r => r.json()),
      fetch(`${MODULE_PATH}/journals.json`).then(r => r.json()),
      fetch(`${MODULE_PATH}/tables.json`).then(r => r.json()),
      fetch(`${MODULE_PATH}/scenes.json`).then(r => r.json())
    ]);

    const folders = await createFolders();

    ui.notifications.info(`Golden Hour: Processing ${actorsRaw.length} actors…`);
    for (const data of actorsRaw) {
      await importActor(data, folders);
    }

    ui.notifications.info(`Golden Hour: Processing ${journalsRaw.length} journals…`);
    for (const data of journalsRaw) {
      await importJournal(data, folders);
    }

    ui.notifications.info(`Golden Hour: Processing ${tablesRaw.length} tables…`);
    for (const data of tablesRaw) {
      await importTable(data, folders);
    }

    ui.notifications.info(`Golden Hour: Processing ${scenesRaw.length} scenes…`);
    for (const data of scenesRaw) {
      await importScene(data, folders);
    }

    await game.settings.set(MODULE_ID, 'imported', true);
    ui.notifications.info('Golden Hour: Update/Import complete!');
  } catch (err) {
    console.error('Golden Hour import error:', err);
    ui.notifications.error(`Golden Hour: Import failed — ${err.message}`);
  }
}

async function getOrCreateFolder(data) {
  let folder = game.folders.find(f => f.name === data.name && f.type === data.type && f.folder?.id === data.folder);
  if (folder) return folder;
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

async function importScene(data, folders) {
  const updateData = {
    name: data.name,
    folder: folders.sceneRoot?.id,
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
    walls: data.walls ?? []
  };

  const existing = game.scenes.find(s => s.name === data.name && s.folder?.id === folders.sceneRoot?.id);
  if (existing) {
    ui.notifications.info(`Updating scene: ${data.name}`);
    return await existing.update(updateData);
  }
  return await Scene.create(updateData);
}

async function importActor(data, folders) {
  const category = ACTOR_FOLDER_MAP[data.name];
  let folderId = folders.actorRoot.id;
  if (category === 'arena') folderId = folders.actorArena.id;
  else if (category === 'rift') folderId = folders.actorRift.id;
  else if (category === 'npc') folderId = folders.actorNPC.id;
  else if (category === 'pregen' || !category) folderId = folders.actorPregen.id;

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
      disposition: data.disposition ?? -1
    }
  };

  const existing = game.actors.find(a => a.name === data.name && a.folder?.id === folderId);
  if (existing) {
    return await existing.update(doc);
  }
  return await Actor.create(doc);
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
    // For journals, we replace pages to ensure they match exactly
    await existing.deleteEmbeddedDocuments('JournalEntryPage', existing.pages.map(p => p.id));
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
  const results = (data.results ?? []).map((r, i) => ({
    text: r.text,
    range: r.range,
    weight: 1,
    type: 0
  }));

  const existing = game.tables.find(t => t.name === data.name && t.folder?.id === folders.tableRoot?.id);
  if (existing) {
    await existing.deleteEmbeddedDocuments('TableResult', existing.results.map(r => r.id));
    return await existing.createEmbeddedDocuments('TableResult', results);
  }

  return await RollTable.create({
    name: data.name,
    folder: folders.tableRoot?.id,
    formula: data.formula ?? '1d4',
    results: results
  });
}

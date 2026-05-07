'use strict';

// ============================================================
// CARD DATABASE
// ============================================================
const CARD_DB = {
  // ===== FIRE =====
  fire_c1: { id:'fire_c1', name:'Ateş Yavrusu',      type:'creature', element:'fire',   cost:1, atk:1, hp:2, keyword:null,     emoji:'🐣',  desc:'' },
  fire_c2: { id:'fire_c2', name:'Lav Koruması',       type:'creature', element:'fire',   cost:2, atk:2, hp:2, keyword:'armor',  emoji:'🛡️',  desc:'Taş Derisi: İlk hasar 1 azalır.' },
  fire_c3: { id:'fire_c3', name:'Magma Sürüngeni',    type:'creature', element:'fire',   cost:3, atk:4, hp:2, keyword:'swift',  emoji:'🌋',  desc:'Hız: Oynanır oynanmaz saldırır.' },
  fire_c4: { id:'fire_c4', name:'Alev Ejderi',        type:'creature', element:'fire',   cost:4, atk:4, hp:4, keyword:'splash', emoji:'🐲',  desc:'Sıçrama: Saldırı liderlerine de 1 sıçrar.' },
  fire_c5: { id:'fire_c5', name:'Kor Devri',          type:'creature', element:'fire',   cost:5, atk:5, hp:5, keyword:null,     emoji:'💥',  desc:'' },
  fire_c6: { id:'fire_c6', name:'Kadim Alev',         type:'creature', element:'fire',   cost:6, atk:6, hp:5, keyword:'reborn', emoji:'♨️',  desc:'Yeniden Doğuş: Bir kez 1 HP ile geri döner.' },
  fire_c7: { id:'fire_c7', name:'Ateş Lordu',         type:'creature', element:'fire',   cost:7, atk:7, hp:6, keyword:'swift',  emoji:'👑',  desc:'Hız: Oynanır oynanmaz saldırır.' },
  fire_c8: { id:'fire_c8', name:'Volkan Ruhu',        type:'creature', element:'fire',   cost:5, atk:3, hp:7, keyword:'armor',  emoji:'⛰️',  desc:'Taş Derisi: İlk hasar 1 azalır.' },
  fire_s1: { id:'fire_s1', name:'Ateş Seli',          type:'spell',    element:'fire',   cost:2, atk:0, hp:0, keyword:null,  effectType:'damage_all', effectValue:2, emoji:'🌊', desc:'Tüm düşman yaratıklara 2 hasar ver.' },
  fire_s2: { id:'fire_s2', name:'Alevli Nefes',       type:'spell',    element:'fire',   cost:3, atk:0, hp:0, keyword:null,  effectType:'damage_one', effectValue:5, emoji:'💨', desc:'Bir hedefe 5 hasar ver.' },
  fire_s3: { id:'fire_s3', name:'Yanardağ Patlaması', type:'spell',    element:'fire',   cost:5, atk:0, hp:0, keyword:null,  effectType:'damage_all', effectValue:4, emoji:'🌋', desc:'Tüm düşman yaratıklara 4 hasar ver.' },

  // ===== ICE =====
  ice_c1: { id:'ice_c1', name:'Buz Yavrusu',     type:'creature', element:'ice',  cost:1, atk:1, hp:3, keyword:null,     emoji:'❄️',  desc:'' },
  ice_c2: { id:'ice_c2', name:'Kristal Zırh',    type:'creature', element:'ice',  cost:2, atk:1, hp:4, keyword:'armor',  emoji:'💎',  desc:'Taş Derisi: İlk hasar 1 azalır.' },
  ice_c3: { id:'ice_c3', name:'Buz Ruhu',        type:'creature', element:'ice',  cost:3, atk:3, hp:3, keyword:'stealth',emoji:'👻',  desc:'Sessiz: Bu tur saldırılamaz.' },
  ice_c4: { id:'ice_c4', name:'Dondurucu Varlık',type:'creature', element:'ice',  cost:4, atk:3, hp:5, keyword:'armor',  emoji:'🧊',  desc:'Taş Derisi: İlk hasar 1 azalır.' },
  ice_c5: { id:'ice_c5', name:'Fırtına Ejderi',  type:'creature', element:'ice',  cost:5, atk:4, hp:5, keyword:null,     emoji:'🌪️', desc:'' },
  ice_c6: { id:'ice_c6', name:'Buzul Canavar',   type:'creature', element:'ice',  cost:6, atk:5, hp:6, keyword:'reborn', emoji:'🐋',  desc:'Yeniden Doğuş: Bir kez 1 HP ile geri döner.' },
  ice_c7: { id:'ice_c7', name:'Buz Lordu',       type:'creature', element:'ice',  cost:7, atk:6, hp:7, keyword:'armor',  emoji:'❄️',  desc:'Taş Derisi: İlk hasar 1 azalır.' },
  ice_c8: { id:'ice_c8', name:'Buz Ejderi',      type:'creature', element:'ice',  cost:5, atk:5, hp:4, keyword:null,     emoji:'🐉',  desc:'' },
  ice_s1: { id:'ice_s1', name:'Buz Kılıcı',      type:'spell',    element:'ice',  cost:2, atk:0, hp:0, keyword:null,  effectType:'damage_one', effectValue:3, emoji:'⚔️', desc:'Bir hedefe 3 hasar ver.' },
  ice_s2: { id:'ice_s2', name:'Dondurma',        type:'spell',    element:'ice',  cost:3, atk:0, hp:0, keyword:null,  effectType:'damage_one', effectValue:4, emoji:'🧊', desc:'Bir hedefe 4 hasar ver.' },
  ice_s3: { id:'ice_s3', name:'Fırtına Çağrısı', type:'spell',    element:'ice',  cost:4, atk:0, hp:0, keyword:null,  effectType:'draw',       effectValue:2, emoji:'📖', desc:'2 kart çek.' },

  // ===== NATURE =====
  nat_c1: { id:'nat_c1', name:'Orman Yavrusu',    type:'creature', element:'nature', cost:1, atk:1, hp:2, keyword:null,     emoji:'🌿', desc:'' },
  nat_c2: { id:'nat_c2', name:'Zehirli Ejder',    type:'creature', element:'nature', cost:2, atk:2, hp:2, keyword:'poison', emoji:'☠️', desc:'Zehir: Saldırdığı yaratık her tur 1 hasar alır.' },
  nat_c3: { id:'nat_c3', name:'Orman Bekçisi',    type:'creature', element:'nature', cost:3, atk:2, hp:5, keyword:null,     emoji:'🌳', desc:'' },
  nat_c4: { id:'nat_c4', name:'Zehir Ejderhası',  type:'creature', element:'nature', cost:4, atk:4, hp:4, keyword:'poison', emoji:'🐍', desc:'Zehir: Saldırdığı yaratık her tur 1 hasar alır.' },
  nat_c5: { id:'nat_c5', name:'Doğa Koruyucusu', type:'creature', element:'nature', cost:5, atk:4, hp:5, keyword:'reborn', emoji:'🦋', desc:'Yeniden Doğuş: Bir kez 1 HP ile geri döner.' },
  nat_c6: { id:'nat_c6', name:'Kadim Ağaç',       type:'creature', element:'nature', cost:6, atk:4, hp:7, keyword:'armor',  emoji:'🌲', desc:'Taş Derisi: İlk hasar 1 azalır.' },
  nat_c7: { id:'nat_c7', name:'Doğa Lordu',       type:'creature', element:'nature', cost:7, atk:5, hp:8, keyword:'reborn', emoji:'🌍', desc:'Yeniden Doğuş: Bir kez 1 HP ile geri döner.' },
  nat_c8: { id:'nat_c8', name:'Zehir Bulutu',     type:'creature', element:'nature', cost:4, atk:3, hp:3, keyword:'poison', emoji:'💚', desc:'Zehir: Saldırdığı yaratık her tur 1 hasar alır.' },
  nat_s1: { id:'nat_s1', name:'Doğa Şifası',      type:'spell',    element:'nature', cost:2, atk:0, hp:0, keyword:null,  effectType:'heal_leader', effectValue:4, emoji:'💚', desc:'Liderine 4 HP kazan.' },
  nat_s2: { id:'nat_s2', name:'Zehir Bulutu',     type:'spell',    element:'nature', cost:3, atk:0, hp:0, keyword:null,  effectType:'poison_all',  effectValue:1, emoji:'☠️', desc:'Tüm düşman yaratıkları zehirle.' },
  nat_s3: { id:'nat_s3', name:'Doğanın Armağanı', type:'spell',    element:'nature', cost:4, atk:0, hp:0, keyword:null,  effectType:'draw',        effectValue:2, emoji:'📖', desc:'2 kart çek.' },

  // ===== STONE =====
  sto_c1: { id:'sto_c1', name:'Taş Yavrusu',    type:'creature', element:'stone', cost:1, atk:2, hp:1, keyword:null,     emoji:'🪨', desc:'' },
  sto_c2: { id:'sto_c2', name:'Kaya Zırhı',     type:'creature', element:'stone', cost:2, atk:2, hp:4, keyword:'armor',  emoji:'⛏️', desc:'Taş Derisi: İlk hasar 1 azalır.' },
  sto_c3: { id:'sto_c3', name:'Granit Golem',   type:'creature', element:'stone', cost:3, atk:2, hp:6, keyword:'armor',  emoji:'🗿', desc:'Taş Derisi: İlk hasar 1 azalır.' },
  sto_c4: { id:'sto_c4', name:'Kale Muhafızı',  type:'creature', element:'stone', cost:4, atk:3, hp:7, keyword:'armor',  emoji:'🏰', desc:'Taş Derisi: İlk hasar 1 azalır.' },
  sto_c5: { id:'sto_c5', name:'Dağ Devi',       type:'creature', element:'stone', cost:5, atk:4, hp:7, keyword:null,     emoji:'🏔️', desc:'' },
  sto_c6: { id:'sto_c6', name:'Taş Ejderhası',  type:'creature', element:'stone', cost:6, atk:5, hp:7, keyword:'armor',  emoji:'🐊', desc:'Taş Derisi: İlk hasar 1 azalır.' },
  sto_c7: { id:'sto_c7', name:'Taş Lordu',      type:'creature', element:'stone', cost:7, atk:6, hp:8, keyword:'armor',  emoji:'💀', desc:'Taş Derisi: İlk hasar 1 azalır.' },
  sto_c8: { id:'sto_c8', name:'Kaya Ruhu',      type:'creature', element:'stone', cost:4, atk:3, hp:6, keyword:'reborn', emoji:'💎', desc:'Yeniden Doğuş: Bir kez 1 HP ile geri döner.' },
  sto_s1: { id:'sto_s1', name:'Kaya Yağmuru',   type:'spell',    element:'stone', cost:2, atk:0, hp:0, keyword:null,  effectType:'damage_all',  effectValue:2, emoji:'🪨', desc:'Tüm düşman yaratıklara 2 hasar ver.' },
  sto_s2: { id:'sto_s2', name:'Granit Kalkan',  type:'spell',    element:'stone', cost:3, atk:0, hp:0, keyword:null,  effectType:'heal_leader', effectValue:5, emoji:'🛡️', desc:'Liderine 5 HP kazan.' },
  sto_s3: { id:'sto_s3', name:'Deprem',         type:'spell',    element:'stone', cost:5, atk:0, hp:0, keyword:null,  effectType:'damage_all',  effectValue:4, emoji:'💥', desc:'Tüm düşman yaratıklara 4 hasar ver.' },

  // ===== SHADOW =====
  shd_c1: { id:'shd_c1', name:'Gölge Sızan',       type:'creature', element:'shadow', cost:1, atk:2, hp:1, keyword:'stealth', emoji:'👤',  desc:'Sessiz: Bu tur saldırılamaz.' },
  shd_c2: { id:'shd_c2', name:'Karanlık Fısıltı',  type:'creature', element:'shadow', cost:2, atk:3, hp:1, keyword:'stealth', emoji:'🌑',  desc:'Sessiz: Bu tur saldırılamaz.' },
  shd_c3: { id:'shd_c3', name:'Gölge Suikastçısı', type:'creature', element:'shadow', cost:3, atk:4, hp:2, keyword:'swift',   emoji:'🗡️', desc:'Hız: Oynanır oynanmaz saldırır.' },
  shd_c4: { id:'shd_c4', name:'Ruh Emici',         type:'creature', element:'shadow', cost:4, atk:3, hp:4, keyword:'poison',  emoji:'💀',  desc:'Zehir: Saldırdığı yaratık her tur 1 hasar alır.' },
  shd_c5: { id:'shd_c5', name:'Gölge Ejderi',      type:'creature', element:'shadow', cost:5, atk:5, hp:4, keyword:'stealth', emoji:'🐉',  desc:'Sessiz: Bu tur saldırılamaz.' },
  shd_c6: { id:'shd_c6', name:'Karanlık Varlık',   type:'creature', element:'shadow', cost:6, atk:6, hp:4, keyword:'reborn',  emoji:'👁️', desc:'Yeniden Doğuş: Bir kez 1 HP ile geri döner.' },
  shd_c7: { id:'shd_c7', name:'Gölge Lordu',       type:'creature', element:'shadow', cost:7, atk:7, hp:5, keyword:'swift',   emoji:'🌚',  desc:'Hız: Oynanır oynanmaz saldırır.' },
  shd_c8: { id:'shd_c8', name:'Lanet Ejderhası',   type:'creature', element:'shadow', cost:5, atk:4, hp:4, keyword:'poison',  emoji:'💜',  desc:'Zehir: Saldırdığı yaratık her tur 1 hasar alır.' },
  shd_s1: { id:'shd_s1', name:'Karanlık Darbe',    type:'spell',    element:'shadow', cost:2, atk:0, hp:0, keyword:null,  effectType:'damage_one', effectValue:4, emoji:'🌑', desc:'Bir hedefe 4 hasar ver.' },
  shd_s2: { id:'shd_s2', name:'Lanet',             type:'spell',    element:'shadow', cost:3, atk:0, hp:0, keyword:null,  effectType:'poison_all', effectValue:1, emoji:'💀', desc:'Tüm düşman yaratıkları zehirle.' },
  shd_s3: { id:'shd_s3', name:'Karanlık Enerji',   type:'spell',    element:'shadow', cost:4, atk:0, hp:0, keyword:null,  effectType:'draw',       effectValue:3, emoji:'📖', desc:'3 kart çek.' },
};

// ============================================================
// PRE-BUILT DECKS (20 cards each)
// ============================================================
const STARTER_DECKS = {
  fire:   ['fire_c1','fire_c2','fire_c2','fire_c3','fire_c3','fire_c4','fire_c4','fire_c5','fire_c5','fire_c6','fire_c7','fire_c8','fire_c8','fire_s1','fire_s1','fire_s2','fire_s2','fire_s3','fire_c1','fire_c5'],
  ice:    ['ice_c1', 'ice_c2', 'ice_c2', 'ice_c3', 'ice_c3', 'ice_c4', 'ice_c4', 'ice_c5', 'ice_c5', 'ice_c6', 'ice_c7', 'ice_c8', 'ice_c8', 'ice_s1', 'ice_s1', 'ice_s2', 'ice_s2', 'ice_s3', 'ice_c1', 'ice_c5'],
  nature: ['nat_c1','nat_c2','nat_c2','nat_c3','nat_c3','nat_c4','nat_c4','nat_c5','nat_c5','nat_c6','nat_c7','nat_c8','nat_c8','nat_s1','nat_s1','nat_s2','nat_s2','nat_s3','nat_c1','nat_c5'],
  stone:  ['sto_c1','sto_c2','sto_c2','sto_c3','sto_c3','sto_c4','sto_c4','sto_c5','sto_c5','sto_c6','sto_c7','sto_c8','sto_c8','sto_s1','sto_s1','sto_s2','sto_s2','sto_s3','sto_c1','sto_c5'],
  shadow: ['shd_c1','shd_c2','shd_c2','shd_c3','shd_c3','shd_c4','shd_c4','shd_c5','shd_c5','shd_c6','shd_c7','shd_c8','shd_c8','shd_s1','shd_s1','shd_s2','shd_s2','shd_s3','shd_c1','shd_c5'],
};

// ============================================================
// CONSTANTS
// ============================================================
const ELEMENT_BEATS = { fire:'nature', nature:'stone', stone:'ice', ice:'fire' };
const ELEMENT_NAMES = { fire:'Ateş', ice:'Buz', nature:'Doğa', stone:'Taş', shadow:'Gölge' };
const ELEMENT_EMOJIS = { fire:'🔥', ice:'❄️', nature:'🌿', stone:'🪨', shadow:'👁️' };
const KEYWORD_LABELS = { swift:'Hız', armor:'Taş Derisi', poison:'Zehir', splash:'Sıçrama', reborn:'Yeniden Doğuş', stealth:'Sessiz' };

function getElementBonus(atkEl, defEl) {
  return ELEMENT_BEATS[atkEl] === defEl ? 1 : 0;
}

// ============================================================
// GAME STATE
// ============================================================
let G = null; // set by startGame()

function makePlayer(element, isHuman) {
  return { element, isHuman, hp: 30, maxMana: 0, mana: 0, deck: [], hand: [], field: [null,null,null,null,null], graveyard: [] };
}

function newCardInstance(cardId) {
  const t = CARD_DB[cardId];
  const id = Math.random().toString(36).substr(2, 9);
  return {
    ...t,
    instanceId: id,
    currentHp: t.hp,
    canAttack: false,
    hasAttacked: false,
    isPoisoned: false,
    armorUsed: false,
    rebornUsed: false,
    isStealthed: t.keyword === 'stealth',
  };
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// ============================================================
// LOGGING
// ============================================================
function addLog(msg, type = 'system') {
  if (!G) return;
  G.log.push({ msg, type });
  if (G.log.length > 80) G.log.shift();
  const el = document.getElementById('game-log');
  if (el) {
    const div = document.createElement('div');
    div.className = `log-entry log-${type}`;
    div.textContent = msg;
    el.appendChild(div);
    el.scrollTop = el.scrollHeight;
  }
}

// ============================================================
// GAME INITIALIZATION
// ============================================================
function startGame(playerElement) {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('game-screen').style.display  = 'flex';
  document.getElementById('game-screen').style.flexDirection = 'column';
  document.getElementById('game-log').innerHTML = '';

  const allElements = ['fire','ice','nature','stone','shadow'];
  const aiElement = allElements[Math.floor(Math.random() * allElements.length)];

  G = {
    player: makePlayer(playerElement, true),
    ai:     makePlayer(aiElement, false),
    roundNum: 1,
    isPlayerTurn: true,
    selectedHandIndex: -1,
    selectedFieldIndex: -1,
    targeting: false,
    targetingHandIndex: -1,
    gameOver: false,
    winner: null,
    log: [],
    aiLock: false,
  };

  G.player.deck = STARTER_DECKS[playerElement].map(id => newCardInstance(id));
  G.ai.deck     = STARTER_DECKS[aiElement].map(id => newCardInstance(id));
  shuffle(G.player.deck);
  shuffle(G.ai.deck);

  for (let i = 0; i < 4; i++) { drawCard(G.player); drawCard(G.ai); }

  addLog(`--- Yeni Oyun Başladı ---`, 'event');
  addLog(`Sen: ${ELEMENT_NAMES[playerElement]}  |  AI: ${ELEMENT_NAMES[aiElement]}`, 'system');

  startPlayerTurn();
}

// ============================================================
// DRAW CARD
// ============================================================
function drawCard(player) {
  if (player.deck.length === 0) {
    player.hp -= 2;
    const who = player === G.player ? 'Oyuncu' : 'AI';
    addLog(`${who} destesi bitti! Yorgunluk: 2 hasar.`, 'event');
    return;
  }
  const card = player.deck.pop();
  if (player.hand.length >= 10) {
    player.graveyard.push(card);
    addLog('El dolu, kart atıldı.', 'system');
    return;
  }
  player.hand.push(card);
}

// ============================================================
// TURN MANAGEMENT
// ============================================================
function startPlayerTurn() {
  G.isPlayerTurn = true;
  G.player.maxMana = Math.min(G.player.maxMana + 1, 10);
  G.player.mana    = G.player.maxMana;
  G.selectedHandIndex  = -1;
  G.selectedFieldIndex = -1;
  G.targeting = false;
  G.targetingHandIndex = -1;

  drawCard(G.player);

  // Reset attack flags on player field
  G.player.field.forEach(c => { if (c) { c.canAttack = true; c.hasAttacked = false; } });

  // Process poison on AI field (from previous AI turn)
  processPoisonTick(G.ai);

  addLog(`─── Tur ${G.roundNum}: Senin Turun ───`, 'event');
  G.roundNum++;

  render();
  if (checkGameOver()) return;
  setStatus('Bir kart oyna veya saldır!');
}

function endPlayerTurn() {
  if (!G.isPlayerTurn || G.gameOver || G.aiLock) return;
  G.selectedHandIndex  = -1;
  G.selectedFieldIndex = -1;
  G.targeting = false;
  G.targetingHandIndex = -1;
  addLog('Oyuncu turu bitti.', 'player');
  render();
  setTimeout(() => runAITurn(), 500);
}

function processPoisonTick(player) {
  const deadCards = [];
  player.field.forEach((c, i) => {
    if (c && c.isPoisoned) {
      c.currentHp -= 1;
      addLog(`${c.name} zehirden 1 hasar aldı.`, 'system');
      if (c.currentHp <= 0) deadCards.push(i);
    }
  });
  deadCards.forEach(i => {
    if (player.field[i]) killCard(player.field[i], player, i);
  });
}

// ============================================================
// DEATH HANDLING
// ============================================================
function killCard(card, owner, slotIndex) {
  if (slotIndex === undefined) slotIndex = owner.field.indexOf(card);
  if (slotIndex === -1) return;

  if (card.keyword === 'reborn' && !card.rebornUsed) {
    card.currentHp = 1;
    card.isPoisoned = false;
    card.rebornUsed = true;
    addLog(`${card.name} Yeniden Doğuş ile 1 HP geri döndü!`, 'event');
    return;
  }

  owner.field[slotIndex] = null;
  owner.graveyard.push({ ...card });
  addLog(`${card.name} yok edildi.`, 'system');
}

function cleanupDeadCards(owner) {
  for (let i = 0; i < 5; i++) {
    const c = owner.field[i];
    if (c && c.currentHp <= 0) killCard(c, owner, i);
  }
}

// ============================================================
// DAMAGE
// ============================================================
function dealDamage(card, amount, owner) {
  let dmg = amount;
  if (card.keyword === 'armor' && !card.armorUsed) {
    dmg = Math.max(0, dmg - 1);
    card.armorUsed = true;
  }
  card.currentHp -= dmg;
}

// ============================================================
// PLAYER ACTIONS
// ============================================================
function onHandCardClick(index) {
  if (!G.isPlayerTurn || G.gameOver || G.aiLock) return;
  const card = G.player.hand[index];
  if (!card) return;

  // Deselect if clicking same card
  if (G.selectedHandIndex === index) {
    G.selectedHandIndex  = -1;
    G.selectedFieldIndex = -1;
    G.targeting = false;
    G.targetingHandIndex = -1;
    setStatus('');
    render();
    return;
  }

  if (G.player.mana < card.cost) {
    setStatus('⚠️ Yeterli mana yok!');
    render();
    return;
  }

  G.selectedHandIndex  = index;
  G.selectedFieldIndex = -1;

  if (card.type === 'spell') {
    if (card.effectType === 'damage_one') {
      G.targeting = true;
      G.targetingHandIndex = index;
      setStatus('🎯 Hedef seç (düşman yaratık veya lider)');
    } else {
      // Auto-apply spell (AOE / heal / draw)
      G.selectedHandIndex = -1;
      castSpell(index, G.player, G.ai, null);
    }
  } else {
    setStatus('📍 Yerleştirmek için boş bir alan seç');
  }
  render();
}

function onPlayerSlotClick(slotIndex) {
  if (!G.isPlayerTurn || G.gameOver || G.aiLock) return;

  const slotCard = G.player.field[slotIndex];

  // Placing a creature from hand
  if (G.selectedHandIndex >= 0) {
    const handCard = G.player.hand[G.selectedHandIndex];
    if (handCard && handCard.type === 'creature' && !slotCard) {
      placeCreature(G.selectedHandIndex, slotIndex, G.player);
      G.selectedHandIndex = -1;
      setStatus('');
      render();
      if (checkGameOver()) return;
    }
    return;
  }

  // Selecting own creature for attack
  if (G.targeting) return; // don't change attacker during spell targeting

  if (slotCard) {
    if (!slotCard.canAttack || slotCard.hasAttacked) {
      setStatus('Bu yaratık bu tur saldıramaz.');
      return;
    }
    if (G.selectedFieldIndex === slotIndex) {
      G.selectedFieldIndex = -1;
      setStatus('');
    } else {
      G.selectedFieldIndex = slotIndex;
      setStatus('⚔️ Hedef seç: Düşman yaratık veya lider');
    }
    render();
  }
}

function onEnemySlotClick(slotIndex) {
  if (!G.isPlayerTurn || G.gameOver || G.aiLock) return;
  const target = G.ai.field[slotIndex];
  if (!target) return;

  // Spell targeting
  if (G.targeting && G.targetingHandIndex >= 0) {
    castSpell(G.targetingHandIndex, G.player, G.ai, slotIndex);
    return;
  }

  // Attack with selected field creature
  if (G.selectedFieldIndex >= 0) {
    const attacker = G.player.field[G.selectedFieldIndex];
    if (!attacker) return;
    if (target.isStealthed) {
      setStatus('Gizli hedefe saldıramazsın!');
      return;
    }
    resolveAttack(attacker, target, G.player, G.ai, G.selectedFieldIndex, slotIndex);
    G.selectedFieldIndex = -1;
    setStatus('');
    render();
    checkGameOver();
  }
}

function onEnemyLeaderClick() {
  if (!G.isPlayerTurn || G.gameOver || G.aiLock) return;

  // Spell targeting on leader
  if (G.targeting && G.targetingHandIndex >= 0) {
    castSpell(G.targetingHandIndex, G.player, G.ai, 'leader');
    return;
  }

  // Attack leader with selected creature
  if (G.selectedFieldIndex >= 0) {
    const attacker = G.player.field[G.selectedFieldIndex];
    if (!attacker) return;
    doAttackLeader(attacker, G.ai);
    addLog(`${attacker.name} → Düşman liderine ${attacker.atk} hasar!`, 'player');
    G.selectedFieldIndex = -1;
    setStatus('');
    render();
    checkGameOver();
  }
}

// ============================================================
// PLACE CREATURE
// ============================================================
function placeCreature(handIndex, slotIndex, player) {
  const card = player.hand.splice(handIndex, 1)[0];
  player.mana -= card.cost;

  card.canAttack   = card.keyword === 'swift';
  card.hasAttacked = false;
  card.isStealthed = card.keyword === 'stealth';

  player.field[slotIndex] = card;

  const who = player === G.player ? 'Oyuncu' : 'AI';
  addLog(`${who} ${card.name} oynadı.`, player === G.player ? 'player' : 'ai');
}

// ============================================================
// SPELLS
// ============================================================
function castSpell(handIndex, caster, opponent, targetRef) {
  const card = caster.hand.splice(handIndex, 1)[0];
  caster.mana -= card.cost;
  caster.graveyard.push({ ...card });

  G.selectedHandIndex  = -1;
  G.targeting = false;
  G.targetingHandIndex = -1;

  applySpell(card, caster, opponent, targetRef);

  const who = caster === G.player ? 'Oyuncu' : 'AI';
  addLog(`${who} ${card.name} kullandı.`, caster === G.player ? 'player' : 'ai');

  render();
  checkGameOver();
}

function applySpell(card, caster, opponent, targetRef) {
  switch (card.effectType) {
    case 'damage_one':
      if (targetRef === 'leader') {
        opponent.hp -= card.effectValue;
        addLog(`${card.name}: Düşman liderine ${card.effectValue} hasar!`, 'event');
      } else if (targetRef !== null && opponent.field[targetRef]) {
        const target = opponent.field[targetRef];
        dealDamage(target, card.effectValue, opponent);
        addLog(`${card.name}: ${target.name} → ${card.effectValue} hasar.`, 'event');
        cleanupDeadCards(opponent);
      }
      break;

    case 'damage_all':
      opponent.field.forEach(c => { if (c) dealDamage(c, card.effectValue, opponent); });
      addLog(`${card.name}: Tüm düşmanlara ${card.effectValue} hasar!`, 'event');
      cleanupDeadCards(opponent);
      break;

    case 'heal_leader':
      caster.hp = Math.min(30, caster.hp + card.effectValue);
      addLog(`${card.name}: +${card.effectValue} HP kazanıldı.`, 'event');
      break;

    case 'draw':
      for (let i = 0; i < card.effectValue; i++) drawCard(caster);
      addLog(`${card.name}: ${card.effectValue} kart çekildi.`, 'event');
      break;

    case 'poison_all':
      opponent.field.forEach(c => { if (c) c.isPoisoned = true; });
      addLog(`${card.name}: Tüm düşman yaratıklar zehirlendi!`, 'event');
      break;
  }
}

// ============================================================
// COMBAT
// ============================================================
function resolveAttack(attacker, defender, atkOwner, defOwner, atkSlot, defSlot) {
  const atkBonus  = getElementBonus(attacker.element, defender.element);
  const atkDamage = attacker.atk + atkBonus;
  const defDamage = defender.atk + getElementBonus(defender.element, attacker.element);

  // Deal damage both ways
  dealDamage(defender, atkDamage, defOwner);
  dealDamage(attacker, defDamage, atkOwner);

  // Apply poison
  if (attacker.keyword === 'poison') defender.isPoisoned = true;
  if (defender.keyword === 'poison') attacker.isPoisoned = true;

  // Splash: attacker also deals 1 to opponent leader
  if (attacker.keyword === 'splash') {
    defOwner.hp -= 1;
    addLog(`${attacker.name} Sıçrama: Düşman liderine +1 hasar!`, 'event');
  }

  attacker.hasAttacked = true;
  attacker.canAttack   = false;
  attacker.isStealthed = false; // Attacking breaks stealth

  const bonusStr = atkBonus > 0 ? ` (+${atkBonus} element)` : '';
  addLog(`${attacker.name}${bonusStr} → ${defender.name}: ${atkDamage} hasar | Karşılık: ${defDamage}`,
    atkOwner === G.player ? 'player' : 'ai');

  cleanupDeadCards(defOwner);
  cleanupDeadCards(atkOwner);
}

function doAttackLeader(attacker, defLeaderOwner) {
  defLeaderOwner.hp -= attacker.atk;
  if (attacker.keyword === 'splash') { /* splash on leader doesn't extra-chain */ }
  attacker.hasAttacked = true;
  attacker.canAttack   = false;
  attacker.isStealthed = false;
}

// ============================================================
// AI TURN
// ============================================================
function runAITurn() {
  if (G.gameOver) return;
  G.isPlayerTurn = false;
  G.aiLock = true;

  G.ai.maxMana = Math.min(G.ai.maxMana + 1, 10);
  G.ai.mana    = G.ai.maxMana;

  drawCard(G.ai);
  G.ai.field.forEach(c => { if (c) { c.canAttack = true; c.hasAttacked = false; } });

  processPoisonTick(G.player);

  addLog(`─── AI Turu ───`, 'ai');
  render();

  if (checkGameOver()) { G.aiLock = false; return; }

  // Build AI play queue then execute with delays
  const playQueue = buildAIPlayQueue();
  executeAIQueue(playQueue, 0, () => {
    render();
    if (checkGameOver()) { G.aiLock = false; return; }
    setTimeout(() => runAIAttacks(() => {
      addLog('AI turu bitti.', 'ai');
      G.aiLock = false;
      render();
      setTimeout(() => startPlayerTurn(), 400);
    }), 400);
  });
}

function buildAIPlayQueue() {
  const queue = [];
  // Sort hand: cheapest spells first for board clear, then creatures by cost desc
  const spells   = G.ai.hand.map((c,i)=>({c,i})).filter(({c})=>c.type==='spell' && c.cost<=G.ai.mana);
  const creatures = G.ai.hand.map((c,i)=>({c,i})).filter(({c})=>c.type==='creature').sort((a,b)=>b.c.cost-a.c.cost);

  let tempMana = G.ai.mana;

  // Play AOE/utility spells first if beneficial
  for (const {c, i} of spells) {
    if (c.cost > tempMana) continue;
    const playerCreatures = G.ai.hand.length; // simplified check
    if (c.effectType === 'damage_all' && G.player.field.some(f=>f)) {
      queue.push({ action:'spell', instanceId: c.instanceId });
      tempMana -= c.cost;
    } else if (c.effectType === 'heal_leader' && G.ai.hp < 20) {
      queue.push({ action:'spell', instanceId: c.instanceId });
      tempMana -= c.cost;
    } else if (c.effectType === 'draw' && G.ai.hand.length <= 2) {
      queue.push({ action:'spell', instanceId: c.instanceId });
      tempMana -= c.cost;
    } else if (c.effectType === 'poison_all' && G.player.field.some(f=>f)) {
      queue.push({ action:'spell', instanceId: c.instanceId });
      tempMana -= c.cost;
    }
  }

  // Play creatures
  for (const {c} of creatures) {
    if (c.cost > tempMana) continue;
    const emptySlot = G.ai.field.findIndex(s => s === null);
    if (emptySlot === -1) break;
    queue.push({ action:'creature', instanceId: c.instanceId, slot: emptySlot });
    // Reserve the slot conceptually
    tempMana -= c.cost;
  }

  // Play remaining targeted spells
  for (const {c} of spells) {
    if (c.cost > tempMana) continue;
    if (c.effectType === 'damage_one') {
      const target = G.player.field.some(f => f && !f.isStealthed) ? 'creature' : 'leader';
      queue.push({ action:'spell', instanceId: c.instanceId, damageTarget: target });
      tempMana -= c.cost;
    }
  }

  return queue;
}

function executeAIQueue(queue, idx, onDone) {
  if (idx >= queue.length) { onDone(); return; }
  const item = queue[idx];

  const handIdx = G.ai.hand.findIndex(c => c.instanceId === item.instanceId);
  if (handIdx === -1) { executeAIQueue(queue, idx + 1, onDone); return; }

  const card = G.ai.hand[handIdx];
  if (card.cost > G.ai.mana) { executeAIQueue(queue, idx + 1, onDone); return; }

  if (item.action === 'creature') {
    const emptySlot = G.ai.field.findIndex(s => s === null);
    if (emptySlot !== -1) {
      placeCreature(handIdx, emptySlot, G.ai);
    }
  } else if (item.action === 'spell') {
    let targetRef = null;
    if (card.effectType === 'damage_one') {
      // Find best target
      const targets = G.player.field.map((c,i)=>({c,i})).filter(({c})=>c&&!c.isStealthed);
      if (targets.length > 0) {
        const best = targets.reduce((a,b)=> a.c.currentHp > b.c.currentHp ? a : b);
        targetRef = best.i;
      } else {
        targetRef = 'leader';
      }
    }
    castSpell(handIdx, G.ai, G.player, targetRef);
  }

  render();
  if (checkGameOver()) { G.aiLock = false; return; }
  setTimeout(() => executeAIQueue(queue, idx + 1, onDone), 650);
}

function runAIAttacks(onDone) {
  const attackers = G.ai.field.map((c,i)=>({c,i})).filter(({c})=>c && c.canAttack && !c.hasAttacked);
  if (!attackers.length) { onDone(); return; }
  doNextAIAttack(attackers, 0, onDone);
}

function doNextAIAttack(attackers, idx, onDone) {
  // Refresh attackers list each time (some may have died)
  const freshAttackers = G.ai.field.map((c,i)=>({c,i})).filter(({c})=>c&&c.canAttack&&!c.hasAttacked);
  if (idx >= freshAttackers.length) { onDone(); return; }

  const {c: attacker, i: atkSlot} = freshAttackers[idx];
  const playerCreatures = G.player.field.map((c,i)=>({c,i})).filter(({c})=>c&&!c.isStealthed);

  // Priority 1: Can kill player leader?
  if (attacker.atk >= G.player.hp) {
    doAttackLeader(attacker, G.player);
    addLog(`AI ${attacker.name} → Oyuncu lideri: ${attacker.atk} hasar!`, 'ai');
  } else {
    // Priority 2: Favorable trade (kill enemy without dying)
    const favorable = playerCreatures.find(({c: enemy}) => {
      const myAtk = attacker.atk + getElementBonus(attacker.element, enemy.element);
      const theirAtk = enemy.atk + getElementBonus(enemy.element, attacker.element);
      return myAtk >= enemy.currentHp && attacker.currentHp > theirAtk;
    });

    if (favorable) {
      resolveAttack(attacker, favorable.c, G.ai, G.player, atkSlot, favorable.i);
    } else if (playerCreatures.length > 0) {
      // Priority 3: Attack highest-ATK threat
      const threat = playerCreatures.reduce((a,b)=>a.c.atk>b.c.atk?a:b);
      resolveAttack(attacker, threat.c, G.ai, G.player, atkSlot, threat.i);
    } else {
      // Priority 4: Attack leader
      doAttackLeader(attacker, G.player);
      addLog(`AI ${attacker.name} → Oyuncu lideri: ${attacker.atk} hasar!`, 'ai');
    }
  }

  render();
  if (checkGameOver()) { G.aiLock = false; return; }
  setTimeout(() => doNextAIAttack(freshAttackers, idx + 1, onDone), 600);
}

// ============================================================
// GAME OVER
// ============================================================
function checkGameOver() {
  if (G.gameOver) return true;
  if (G.player.hp <= 0 || G.ai.hp <= 0) {
    G.gameOver = true;
    G.winner   = G.ai.hp <= 0 && G.player.hp > 0 ? 'player'
               : G.player.hp <= 0 && G.ai.hp > 0 ? 'ai'
               : 'draw';
    render();
    showGameOver();
    return true;
  }
  return false;
}

function showGameOver() {
  const screen = document.getElementById('gameover-screen');
  const title  = document.getElementById('gameover-title');
  const msg    = document.getElementById('gameover-msg');
  screen.style.display = 'flex';

  if (G.winner === 'player') {
    title.textContent = '🎉 Kazandın!';
    title.className   = 'win';
    msg.textContent   = 'Düşman klanı yenilgiye uğrattın. Realm of Scales senindir!';
  } else if (G.winner === 'ai') {
    title.textContent = '💀 Kaybettin...';
    title.className   = 'loss';
    msg.textContent   = 'Düşman klan seni ezdi. Bir sonraki sefere daha güçlü ol!';
  } else {
    title.textContent = '⚔️ Beraberlik!';
    title.className   = '';
    msg.textContent   = 'İki klan da aynı anda yok oldu.';
  }
}

// ============================================================
// STATUS MESSAGE
// ============================================================
function setStatus(msg) {
  const el = document.getElementById('status-msg');
  if (el) el.textContent = msg;
}

// ============================================================
// RENDERING
// ============================================================
function render() {
  if (!G) return;
  renderLeader('ai');
  renderLeader('player');
  renderAIHand();
  renderField('ai');
  renderField('player');
  renderPlayerHand();
  renderMana();
  renderControls();
}

function renderLeader(side) {
  const player = side === 'player' ? G.player : G.ai;
  const el     = document.getElementById(`${side}-leader`);
  if (!el) return;

  const hp     = player.hp;
  const pct    = Math.max(0, Math.min(100, (hp / 30) * 100));
  const barCls = pct > 60 ? 'high' : pct > 30 ? 'mid' : 'low';
  const eName  = ELEMENT_NAMES[player.element];
  const eEmoji = ELEMENT_EMOJIS[player.element];
  const who    = side === 'player' ? '⚔️ Sen' : '🤖 AI Rakip';

  el.innerHTML = `
    <div class="leader-bar">
      <div class="leader-avatar">${eEmoji}</div>
      <div class="leader-info">
        <div class="leader-name">${who}</div>
        <div class="leader-hp-row">
          <span class="leader-hp-num" style="color:${barCls==='high'?'#2ecc71':barCls==='mid'?'#f39c12':'#e74c3c'}">${Math.max(0,hp)}</span>
          <div class="hp-bar-track"><div class="hp-bar-fill ${barCls}" style="width:${pct}%"></div></div>
        </div>
      </div>
      <span class="leader-element-badge el-${player.element}">${eName}</span>
      <span class="leader-deck">🂠 ${player.deck.length}</span>
    </div>
  `;

  if (side === 'ai') {
    // Make enemy leader clickable for attacking/targeting
    el.querySelector('.leader-bar').style.cursor = 'pointer';
    el.querySelector('.leader-bar').onclick = () => onEnemyLeaderClick();
  }
}

function renderAIHand() {
  const el = document.getElementById('ai-hand-display');
  if (!el) return;
  el.innerHTML = G.ai.hand.map(() => '<div class="ai-card-back"></div>').join('');
}

function renderField(side) {
  const player = side === 'player' ? G.player : G.ai;
  const elId   = `${side}-field`;
  const container = document.getElementById(elId);
  if (!container) return;

  container.innerHTML = '';

  for (let i = 0; i < 5; i++) {
    const card = player.field[i];
    const slotDiv = document.createElement('div');
    slotDiv.className = 'field-slot';

    if (card) {
      // Determine visual state
      const isSelectedAttacker = (side === 'player' && G.selectedFieldIndex === i);
      const canAttack = (side === 'player' && card.canAttack && !card.hasAttacked);
      const isTarget  = (side === 'ai' && G.isPlayerTurn &&
                         (G.selectedFieldIndex >= 0 || (G.targeting && G.targetingHandIndex >= 0)) &&
                         !card.isStealthed);

      slotDiv.innerHTML = buildCardHTML(card, canAttack, isSelectedAttacker, isTarget);

      if (side === 'player') {
        slotDiv.onclick = () => onPlayerSlotClick(i);
      } else {
        if (isTarget) slotDiv.classList.add('attackable');
        slotDiv.onclick = () => onEnemySlotClick(i);
      }
    } else {
      // Empty slot
      if (side === 'player' && G.selectedHandIndex >= 0 && G.player.hand[G.selectedHandIndex]?.type === 'creature') {
        slotDiv.classList.add('placeable');
        slotDiv.innerHTML = '<span>+</span>';
        slotDiv.onclick = () => onPlayerSlotClick(i);
      } else {
        slotDiv.classList.add('empty-slot');
        slotDiv.innerHTML = '·';
        slotDiv.onclick = () => {};
      }
    }

    container.appendChild(slotDiv);
  }
}

function buildCardHTML(card, canAttack, isSelected, isTarget) {
  const kwLabel = card.keyword ? KEYWORD_LABELS[card.keyword] : '';
  const hpColor = card.currentHp <= 1 ? '#e74c3c' : card.currentHp <= card.hp / 2 ? '#f39c12' : '#2ecc71';

  let classes = `card el-${card.element}`;
  if (isSelected)  classes += ' selected-attacker';
  else if (canAttack) classes += ' can-attack-glow';
  if (card.hasAttacked) classes += ' has-attacked';
  if (card.isStealthed) classes += ' stealthed';
  if (card.type === 'spell') classes += ' spell-type';
  if (isTarget) classes += ' targetable-enemy';

  const statsRow = card.type === 'creature'
    ? `<div class="card-stats"><span class="stat-atk">⚔️${card.atk}</span><span class="stat-hp" style="color:${hpColor}">❤️${card.currentHp}</span></div>`
    : `<div class="spell-desc">${card.desc}</div>`;

  const poisonDot = card.isPoisoned ? '<div class="poison-dot"></div>' : '';
  const kwBadge   = kwLabel ? `<div class="keyword-tag">${kwLabel}</div>` : '';

  return `
    <div class="${classes}">
      ${poisonDot}
      <div class="card-header ${card.element}">
        <span>${card.element.charAt(0).toUpperCase()}</span>
        <span class="stat-cost">${card.cost}💎</span>
      </div>
      <div class="card-art">
        <div class="card-art-placeholder">${card.emoji}</div>
        ${kwBadge}
      </div>
      <div class="card-name">${card.name}</div>
      ${statsRow}
    </div>
  `;
}

function renderPlayerHand() {
  const container = document.getElementById('player-hand');
  if (!container) return;
  container.innerHTML = '';

  if (G.player.hand.length === 0) {
    container.innerHTML = '<span style="color:#666;font-size:0.85em">Elde kart yok</span>';
    return;
  }

  G.player.hand.forEach((card, i) => {
    const isSelected = G.selectedHandIndex === i;
    const cantAfford = G.player.mana < card.cost;

    const div = document.createElement('div');
    const kwLabel = card.keyword ? KEYWORD_LABELS[card.keyword] : '';
    const kwBadge = kwLabel ? `<div class="keyword-tag">${kwLabel}</div>` : '';

    let classes = `card el-${card.element} card-enter`;
    if (isSelected) classes += ' selected-hand';
    if (cantAfford) classes += ' has-attacked';
    if (card.type === 'spell') classes += ' spell-type';

    const statsRow = card.type === 'creature'
      ? `<div class="card-stats"><span class="stat-atk">⚔️${card.atk}</span><span class="stat-hp">❤️${card.hp}</span></div>`
      : `<div class="spell-desc">${card.desc}</div>`;

    div.innerHTML = `
      <div class="${classes}" title="${card.desc}">
        <div class="card-header ${card.element}">
          <span>${card.element.charAt(0).toUpperCase()}</span>
          <span class="stat-cost">${card.cost}💎</span>
        </div>
        <div class="card-art">
          <div class="card-art-placeholder">${card.emoji}</div>
          ${kwBadge}
        </div>
        <div class="card-name">${card.name}</div>
        ${statsRow}
      </div>
    `;

    div.querySelector('.card').onclick = () => onHandCardClick(i);
    container.appendChild(div);
  });
}

function renderMana() {
  const el = document.getElementById('mana-crystals');
  if (!el) return;
  let html = '';
  for (let i = 0; i < G.player.maxMana; i++) {
    const filled = i < G.player.mana;
    html += `<div class="mana-crystal ${filled ? 'filled' : ''}"></div>`;
  }
  if (G.player.maxMana === 0) html = '<span style="color:#666;font-size:0.8em">Mana yok</span>';
  el.innerHTML = html;

  const label = document.getElementById('mana-label');
  if (label) label.textContent = `${G.player.mana}/${G.player.maxMana}`;
}

function renderControls() {
  const btn = document.getElementById('end-turn-btn');
  if (!btn) return;
  btn.disabled = !G.isPlayerTurn || G.gameOver || G.aiLock;
}

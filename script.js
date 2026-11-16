// Elder Futhark — the 24 runes in the traditional order, grouped by aett.
// Eihwaz (13) comes before Perthro (14) in every table on this page.
const RUNES = [
  { glyph: "ᚠ", name: "Fehu",    sound: "f",  aett: "Freyr's aett",    meaning: "wealth, abundance, new beginnings" },
  { glyph: "ᚢ", name: "Uruz",    sound: "u",  aett: "Freyr's aett",    meaning: "strength, endurance, wild power" },
  { glyph: "ᚦ", name: "Thurisaz", sound: "th", aett: "Freyr's aett",   meaning: "thorn, protection, Thor's might" },
  { glyph: "ᚨ", name: "Ansuz",   sound: "a",  aett: "Freyr's aett",    meaning: "Odin, wisdom, words & signals" },
  { glyph: "ᚱ", name: "Raidho",  sound: "r",  aett: "Freyr's aett",    meaning: "journey, the wheel, movement" },
  { glyph: "ᚲ", name: "Kenaz",   sound: "k",  aett: "Freyr's aett",    meaning: "torch, knowledge, clarity" },
  { glyph: "ᚷ", name: "Gebo",    sound: "g",  aett: "Freyr's aett",    meaning: "gift, exchange, partnership" },
  { glyph: "ᚹ", name: "Wunjo",   sound: "w",  aett: "Freyr's aett",    meaning: "joy, harmony, light" },
  { glyph: "ᚺ", name: "Hagalaz", sound: "h",  aett: "Heimdall's aett", meaning: "hail, disruption, necessary change" },
  { glyph: "ᚾ", name: "Nauthiz", sound: "n",  aett: "Heimdall's aett", meaning: "need, friction, endurance" },
  { glyph: "ᛁ", name: "Isa",     sound: "i",  aett: "Heimdall's aett", meaning: "ice, stillness, patience" },
  { glyph: "ᛃ", name: "Jera",    sound: "j",  aett: "Heimdall's aett", meaning: "harvest, cycles, right reward" },
  { glyph: "ᛇ", name: "Eihwaz",  sound: "ei", aett: "Heimdall's aett", meaning: "yew tree, resilience, the World Tree" },
  { glyph: "ᛈ", name: "Perthro", sound: "p",  aett: "Heimdall's aett", meaning: "dice cup, chance, hidden things" },
  { glyph: "ᛉ", name: "Algiz",   sound: "z",  aett: "Heimdall's aett", meaning: "elk, protection, higher self" },
  { glyph: "ᛊ", name: "Sowilo",  sound: "s",  aett: "Heimdall's aett", meaning: "sun, victory, unstoppable energy" },
  { glyph: "ᛏ", name: "Tiwaz",   sound: "t",  aett: "Tyr's aett",      meaning: "Tyr, justice, courage" },
  { glyph: "ᛒ", name: "Berkana", sound: "b",  aett: "Tyr's aett",      meaning: "birch, growth, renewal" },
  { glyph: "ᛖ", name: "Ehwaz",   sound: "e",  aett: "Tyr's aett",      meaning: "horse, trust, teamwork" },
  { glyph: "ᛗ", name: "Mannaz",  sound: "m",  aett: "Tyr's aett",      meaning: "humankind, self, community" },
  { glyph: "ᛚ", name: "Laguz",   sound: "l",  aett: "Tyr's aett",      meaning: "water, flow, intuition" },
  { glyph: "ᛜ", name: "Ingwaz",  sound: "ng", aett: "Tyr's aett",      meaning: "Ing, seed, quiet potential" },
  { glyph: "ᛞ", name: "Dagaz",   sound: "d",  aett: "Tyr's aett",      meaning: "dawn, breakthrough, clarity" },
  { glyph: "ᛟ", name: "Othala",  sound: "o",  aett: "Tyr's aett",      meaning: "homeland, inheritance, legacy" },
];

// ---- Other alphabets ----
// Younger Futhark: one row of 16, two carving styles. The names, sounds
// and order are the same; nine glyphs differ between long-branch (Danish)
// and short-twig (Swedish-Norwegian) forms.
const YOUNGER = [
  { name: "Fé",      sound: "f",           meaning: "wealth, cattle",              long: "ᚠ", short: "ᚠ" },
  { name: "Úr",      sound: "u · o · v · w", meaning: "drizzle, dross",            long: "ᚢ", short: "ᚢ" },
  { name: "Þurs",    sound: "th",          meaning: "giant, torment",              long: "ᚦ", short: "ᚦ" },
  { name: "Óss",     sound: "ą · o",       meaning: "river mouth; a god",          long: "ᚬ", short: "ᚭ" },
  { name: "Reið",    sound: "r",           meaning: "riding, a journey",           long: "ᚱ", short: "ᚱ" },
  { name: "Kaun",    sound: "k · g",       meaning: "ulcer, a sore",               long: "ᚴ", short: "ᚴ" },
  { name: "Hagall",  sound: "h",           meaning: "hail",                        long: "ᚼ", short: "ᚽ" },
  { name: "Nauðr",   sound: "n",           meaning: "need, constraint",            long: "ᚾ", short: "ᚿ" },
  { name: "Íss",     sound: "i · e",       meaning: "ice",                         long: "ᛁ", short: "ᛁ" },
  { name: "Ár",      sound: "a",           meaning: "good year, harvest",          long: "ᛅ", short: "ᛆ" },
  { name: "Sól",     sound: "s",           meaning: "sun",                         long: "ᛋ", short: "ᛌ" },
  { name: "Týr",     sound: "t · d",       meaning: "the god Týr",                 long: "ᛏ", short: "ᛐ" },
  { name: "Bjarkan", sound: "b · p",       meaning: "birch",                       long: "ᛒ", short: "ᛓ" },
  { name: "Maðr",    sound: "m",           meaning: "man, a human being",          long: "ᛘ", short: "ᛙ" },
  { name: "Lǫgr",    sound: "l",           meaning: "water, the sea",              long: "ᛚ", short: "ᛚ" },
  { name: "Ýr",      sound: "ʀ",           meaning: "yew, a bow; word-final r",    long: "ᛦ", short: "ᛧ" },
];

// Anglo-Saxon Futhorc: 33 runes. Order follows the 11th-century Cotton
// Domitian A.ix manuscript (dæg before ēðel, ēar before īor, then the four
// manuscript-only runes). The Old English Rune Poem orders a few differently.
const FUTHORC = [
  { glyph: "ᚠ", name: "Feoh",   sound: "f",  meaning: "wealth, cattle" },
  { glyph: "ᚢ", name: "Ur",     sound: "u",  meaning: "aurochs, strength" },
  { glyph: "ᚦ", name: "Thorn",  sound: "th", meaning: "thorn, danger" },
  { glyph: "ᚩ", name: "Os",     sound: "o",  meaning: "god, mouth; divine speech" },
  { glyph: "ᚱ", name: "Rad",    sound: "r",  meaning: "riding, a journey" },
  { glyph: "ᚳ", name: "Cen",    sound: "c",  meaning: "torch, knowledge" },
  { glyph: "ᚷ", name: "Gyfu",   sound: "g",  meaning: "gift, generosity" },
  { glyph: "ᚹ", name: "Wynn",   sound: "w",  meaning: "joy, bliss" },
  { glyph: "ᚻ", name: "Hægl",   sound: "h",  meaning: "hail" },
  { glyph: "ᚾ", name: "Nyd",    sound: "n",  meaning: "need, hardship" },
  { glyph: "ᛁ", name: "Is",     sound: "i",  meaning: "ice, stillness" },
  { glyph: "ᛄ", name: "Ger",    sound: "j",  meaning: "year, harvest" },
  { glyph: "ᛇ", name: "Eoh",    sound: "eo", meaning: "yew tree, endurance" },
  { glyph: "ᛈ", name: "Peord",  sound: "p",  meaning: "dice cup, chance — meaning debated" },
  { glyph: "ᛉ", name: "Eolhx",  sound: "x",  meaning: "elk-sedge, protection" },
  { glyph: "ᛋ", name: "Sigel",  sound: "s",  meaning: "sun, victory" },
  { glyph: "ᛏ", name: "Tir",    sound: "t",  meaning: "Týr, justice" },
  { glyph: "ᛒ", name: "Beorc",  sound: "b",  meaning: "birch, renewal" },
  { glyph: "ᛖ", name: "Eh",     sound: "e",  meaning: "horse, trust" },
  { glyph: "ᛗ", name: "Mann",   sound: "m",  meaning: "man, humanity" },
  { glyph: "ᛚ", name: "Lagu",   sound: "l",  meaning: "water, the sea" },
  { glyph: "ᛝ", name: "Ing",    sound: "ng", meaning: "Ing, fertility, potential" },
  { glyph: "ᛞ", name: "Dæg",    sound: "d",  meaning: "day, dawn" },
  { glyph: "ᛟ", name: "Ethel",  sound: "œ",  meaning: "homeland, inheritance" },
  { glyph: "ᚪ", name: "Ac",     sound: "a",  meaning: "oak, strength" },
  { glyph: "ᚫ", name: "Æsc",    sound: "æ",  meaning: "ash tree" },
  { glyph: "ᚣ", name: "Yr",     sound: "y",  meaning: "bow, skill" },
  { glyph: "ᛠ", name: "Ear",    sound: "ea", meaning: "earth, the grave" },
  { glyph: "ᛡ", name: "Ior",    sound: "io", meaning: "serpent, the eel" },
  { glyph: "ᛢ", name: "Cweord", sound: "cw", meaning: "fire-drill, the pyre" },
  { glyph: "ᛣ", name: "Calc",   sound: "k",  meaning: "chalice, vessel" },
  { glyph: "ᛥ", name: "Stan",   sound: "st", meaning: "stone, permanence" },
  { glyph: "ᚸ", name: "Gar",    sound: "g",  meaning: "spear" },
];

// Medieval runes (the futhork), 12th–17th century: the Younger row in its
// mixed medieval forms, plus the seven stung (dotted) runes. Forms varied
// by place and time; this is the standard inventory.
const MEDIEVAL = [
  { glyph: "ᚠ", name: "Fé",     sound: "f",  meaning: "wealth, cattle" },
  { glyph: "ᚢ", name: "Úr",     sound: "u",  meaning: "drizzle, dross" },
  { glyph: "ᚦ", name: "Þurs",   sound: "th", meaning: "giant, torment" },
  { glyph: "ᚮ", name: "Óss",    sound: "o",  meaning: "river mouth; a god" },
  { glyph: "ᚱ", name: "Reið",   sound: "r",  meaning: "riding, a journey" },
  { glyph: "ᚴ", name: "Kaun",   sound: "k",  meaning: "ulcer, a sore" },
  { glyph: "ᚼ", name: "Hagall", sound: "h",  meaning: "hail" },
  { glyph: "ᚿ", name: "Nauðr",  sound: "n",  meaning: "need, constraint" },
  { glyph: "ᛁ", name: "Íss",    sound: "i",  meaning: "ice" },
  { glyph: "ᛆ", name: "Ár",     sound: "a",  meaning: "good year, harvest" },
  { glyph: "ᛋ", name: "Sól",    sound: "s",  meaning: "sun" },
  { glyph: "ᛐ", name: "Týr",    sound: "t",  meaning: "the god Týr" },
  { glyph: "ᛒ", name: "Bjarkan", sound: "b", meaning: "birch" },
  { glyph: "ᛘ", name: "Maðr",   sound: "m",  meaning: "man, a human being" },
  { glyph: "ᛚ", name: "Lǫgr",   sound: "l",  meaning: "water, the sea" },
  { glyph: "ᛦ", name: "Ýr",     sound: "y",  meaning: "yew, a bow" },
  { glyph: "ᚡ", name: "Stung fé",      sound: "v",  meaning: "stung fé — the v sound" },
  { glyph: "ᚤ", name: "Stung úr",      sound: "y",  meaning: "stung úr — the y sound" },
  { glyph: "ᚧ", name: "Stung þurs",    sound: "ð",  meaning: "stung þurs — the voiced th sound" },
  { glyph: "ᚵ", name: "Stung kaun",    sound: "g",  meaning: "stung kaun — the g sound" },
  { glyph: "ᛂ", name: "Stung íss",     sound: "e",  meaning: "stung íss — the e sound" },
  { glyph: "ᛑ", name: "Stung týr",     sound: "d",  meaning: "stung týr — the d sound" },
  { glyph: "ᛔ", name: "Stung bjarkan", sound: "p",  meaning: "stung bjarkan — the p sound" },
];

// Staveless (Hälsinge) runes: the short-twig runes cut down to bare twigs
// with no main stave. They were never given Unicode characters, so the
// cards show the short-twig forms they were cut from — the page note says
// so. No staveless form of óss has ever been found.
const STAVELESS = YOUNGER.map((r) => ({ glyph: r.short, name: r.name, sound: r.sound, meaning: r.meaning }));
STAVELESS[3].meaning = "river mouth; a god — no staveless form has been found";

const ALPHA_NOTES = {
  elder: "The oldest row — 24 runes, 2nd–8th century, grouped in three ættir of eight. Traditional order runs Fehu to Othala, Eihwaz before Perthro — the hour table below always uses it.",
  long: "The Viking Age row — 16 runes in long-branch (Danish) forms. One rune often covered several sounds: ᚴ is both k and g, ᛏ both t and d.",
  short: "The same 16 runes in short-twig (Swedish-Norwegian) forms. Nine runes differ from the long-branch shapes; the order and sounds are the same.",
  staveless: "Staveless (Hälsinge) runes, c. 1000–1100 — the short-twig runes cut down to bare twigs, with no main stave. They were never given Unicode characters, so they cannot be typed as text; the shapes shown are the short-twig forms they were cut from, and no staveless form of óss has ever been found.",
  medieval: "Medieval runes (the futhork), 12th–17th century — the Younger row expanded with stung (dotted) runes, so nearly one rune stands for one sound. Forms varied by place and time; this is the standard inventory, with the seven stung runes last.",
  futhorc: "The English row — 33 runes. Order follows the 11th-century Cotton Domitian A.ix manuscript; the Old English Rune Poem orders a few differently, and the last four (cweord, calc, stan, gar) appear only in manuscripts.",
};


const LORE = {
  elder: "The oldest runes we have \u2014 24 of them, carved from around 150 AD into the 700s, across the Germanic world, from Scandinavia to England and as far south as Hungary and Romania. The Kylver stone on Gotland, carved around 400 AD, shows the whole row in the order still used today: three families of eight, called \u00e6ttir. The names \u2014 Fehu, Uruz, Thurisaz \u2014 are reconstructed from later poems and related languages, because no rune poem survives from the Elder period itself. These are the runes of the early carvers, before the Viking Age trimmed the row down.",
  long: "The Viking Age row. Around 800 AD the 24 runes were cut to 16, even as the Old Norse language was gaining sounds \u2014 so one rune had to cover several. The long-branch forms, with full-length side strokes, are the Danish style, carved across Denmark and the Viking world. The Norwegian and Icelandic rune poems, written down centuries later, are where the names come from: f\u00e9, \u00far, \u00feurs, \u00f3ss, all the way to \u00fdr.",
  short: "The same 16 runes in the Swedish-Norwegian style: the twigs cut short, or standing on one side of the stave, so they were faster to carve. The famous R\u00f6k stone in Sweden, the longest runic inscription known, mixes short-twig runes with older forms and ciphers. Nine runes differ from the long-branch shapes; the other seven are identical, and the order and sounds never change.",
  staveless: "The most stripped-down runes ever used: the short-twig forms cut down to bare twigs, with the main stave gone entirely. They come from H\u00e4lsingland in Sweden, used roughly 1000\u20131100, and reading them depends on how high each mark sits in the carved band. They were never given Unicode characters, so they cannot be typed as text \u2014 only drawn, or shown with a special font. No staveless form of \u00f3ss has ever been found.",
  medieval: "When the Viking Age ended, the runes grew back. From the 12th century, carvers added stung \u2014 dotted \u2014 runes: a dot or bar on an old rune to give it its second sound, so nearly one rune stood for one sound again. The medieval futhork mixed long-branch and short-twig forms freely and stayed in everyday use for centuries. The Codex Runicus, a vellum manuscript from around 1300 holding the Scanian Law, is written entirely in medieval runes.",
  futhorc: "The English row. Anglo-Saxon carvers went the other way from the Norse: instead of trimming the row, they grew it \u2014 from 24 to 28, 31, and finally 33 runes \u2014 to match the sounds of Old English. The Old English Rune Poem, 29 stanzas, gives a verse for each of the first 29. The full 33-rune order on this page follows the Cotton Domitian A.ix manuscript from the 11th century; the last four runes appear only in manuscripts, never in a poem.",
};

// ---- Alphabet grid ----
// Cards are built with textContent only — no page HTML is ever assembled
// from strings, so nothing typed or loaded can inject markup.
const grid = document.getElementById("rune-grid");
const alphaNote = document.getElementById("alpha-note");
const alphaLore = document.getElementById("alpha-lore");
let alphaKey = "elder";
let alphaSort = "az"; // A–Z by name; "traditional" keeps the historical row order
function renderAlphabet() {
  grid.textContent = "";
  alphaNote.textContent = ALPHA_NOTES[alphaKey];
  alphaLore.textContent = LORE[alphaKey];
  let entries;
  if (alphaKey === "elder") {
    entries = RUNES.map((r) => ({ glyph: r.glyph, name: r.name, sound: r.sound + " · " + r.aett, meaning: r.meaning }));
  } else if (alphaKey === "futhorc") {
    entries = FUTHORC.slice();
  } else if (alphaKey === "medieval") {
    entries = MEDIEVAL.slice();
  } else if (alphaKey === "staveless") {
    entries = STAVELESS.slice();
  } else {
    entries = YOUNGER.map((r) => ({ glyph: alphaKey === "long" ? r.long : r.short, name: r.name, sound: r.sound, meaning: r.meaning }));
  }
  if (alphaSort === "az") entries.sort((a, b) => a.name.localeCompare(b.name));
  for (const r of entries) {
    const card = document.createElement("article");
    card.className = "rune-card";
    const glyph = document.createElement("span");
    glyph.className = "glyph";
    glyph.textContent = r.glyph;
    const name = document.createElement("h4");
    name.textContent = r.name;
    const sound = document.createElement("p");
    sound.className = "sound";
    sound.textContent = r.sound;
    const meaning = document.createElement("p");
    meaning.textContent = r.meaning;
    card.append(glyph, name, sound, meaning);
    grid.appendChild(card);
  }
}
document.querySelectorAll(".alpha-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".alpha-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    alphaKey = btn.dataset.alpha;
    renderAlphabet();
  });
});
document.querySelectorAll(".sort-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".sort-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    alphaSort = btn.dataset.sort;
    renderAlphabet();
  });
});
renderAlphabet();

// ---- Rune of the hour: five systems, 12/24-hour clock, dials ----
// Times always come from the visitor's own clock (new Date() runs in
// their browser), so the hour rune follows whoever is looking at the page.
const HOUR_ROWS = {
  elder: RUNES,
  youngerLong: YOUNGER.map((r) => ({ glyph: r.long, name: r.name, meaning: r.meaning })),
  youngerShort: YOUNGER.map((r) => ({ glyph: r.short, name: r.name, meaning: r.meaning })),
  medieval: MEDIEVAL,
  futhorc: FUTHORC,
};
const HOUR_SYSTEM_NAMES = {
  elder: "Elder Futhark",
  youngerLong: "Younger, long-branch",
  youngerShort: "Younger, short-twig",
  medieval: "Medieval runes",
  futhorc: "Anglo-Saxon Futhorc",
};
let hourSystem = "elder";
let clockMode = "12";
const now = new Date();
function fmtHour(h) {
  if (clockMode === "24") return String(h).padStart(2, "0") + ":00";
  const ap = h < 12 ? "AM" : "PM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return h12 + ":00 " + ap;
}
function fmtTime(d) {
  const s = String(d.getSeconds()).padStart(2, "0");
  const m = String(d.getMinutes()).padStart(2, "0");
  if (clockMode === "24") return String(d.getHours()).padStart(2, "0") + ":" + m + ":" + s;
  const ap = d.getHours() < 12 ? "AM" : "PM";
  const h12 = d.getHours() % 12 === 0 ? 12 : d.getHours() % 12;
  return h12 + ":" + m + ":" + s + " " + ap;
}
function hourRuneFor(row, h) { return row[h % row.length]; }
function placeOnCircle(el, i, total, radiusPct) {
  const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
  el.style.left = 50 + radiusPct * Math.cos(angle) + "%";
  el.style.top = 50 + radiusPct * Math.sin(angle) + "%";
}

// Hero welcome dial: the 24 Elder runes around a clock face, midnight at
// the top, gold for day hours (6-17), violet for night hours.
const dialSlots = document.getElementById("dial-slots");
const dialLabels = [];
RUNES.forEach((r, i) => {
  const s = document.createElement("span");
  s.className = "dial-label" + ((i >= 6 && i < 18) ? " day" : " night");
  s.textContent = r.glyph;
  placeOnCircle(s, i, 24, 44);
  dialSlots.appendChild(s);
  dialLabels.push(s);
});

// Clock wheel: one slot per rune of the selected system.
const clockSlotsBox = document.getElementById("clock-slots");
const clockWheel = document.getElementById("clock-wheel");
let clockSlots = [];
function buildClockWheel() {
  const row = HOUR_ROWS[hourSystem];
  clockSlotsBox.textContent = "";
  clockSlots = [];
  clockWheel.classList.toggle("dense", row.length > 24);
  row.forEach((r, i) => {
    const s = document.createElement("span");
    s.className = "clock-slot";
    s.textContent = r.glyph;
    placeOnCircle(s, i, row.length, 44);
    clockSlotsBox.appendChild(s);
    clockSlots.push(s);
  });
}

const hourBox = document.getElementById("hour-rune");
const tbody = document.querySelector("#hour-table tbody");
const clockGlyph = document.getElementById("clock-glyph");
const clockName = document.getElementById("clock-name");
const clockTimeEl = document.getElementById("clock-time");
const clockMeaning = document.getElementById("clock-meaning");
const dialGlyph = document.getElementById("dial-glyph");
const dialClock = document.getElementById("dial-clock");
const dialName = document.getElementById("dial-rune-name");
const dialHand = document.getElementById("dial-hand");
let lastHour = -1;
function renderHour() {
  const d = new Date();
  const h = d.getHours();
  const row = HOUR_ROWS[hourSystem];
  const r = hourRuneFor(row, h);
  const elderRune = RUNES[h];
  hourBox.textContent = "Right now, " + fmtHour(h) + " belongs to ";
  const g = document.createElement("span");
  g.className = "glyph";
  g.textContent = r.glyph;
  const n = document.createElement("strong");
  n.textContent = " " + r.name + " ";
  hourBox.append(g, n, document.createTextNode("— " + r.meaning + " (" + HOUR_SYSTEM_NAMES[hourSystem] + ")."));
  tbody.textContent = "";
  for (let i = 0; i < 24; i++) {
    const rr = hourRuneFor(row, i);
    const tr = document.createElement("tr");
    if (i === h) tr.className = "now";
    [fmtHour(i), rr.glyph, rr.name, rr.meaning].forEach((text, j) => {
      const td = document.createElement("td");
      if (j === 1) td.className = "glyph";
      td.textContent = text;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  }
  clockGlyph.textContent = r.glyph;
  clockName.textContent = r.name;
  clockMeaning.textContent = r.meaning;
  clockSlots.forEach((s, i) => s.classList.toggle("now", i === h % row.length));
  dialGlyph.textContent = elderRune.glyph;
  dialName.textContent = elderRune.name;
  dialLabels.forEach((s, i) => s.classList.toggle("now", i === h));
  lastHour = h;
}
function tickClock() {
  const d = new Date();
  clockTimeEl.textContent = fmtTime(d);
  dialClock.textContent = fmtTime(d);
  const deg = (d.getHours() % 24) * 15 + d.getMinutes() * 0.25;
  dialHand.style.transform = "rotate(" + deg + "deg)";
  if (d.getHours() !== lastHour) renderHour();
}
buildClockWheel();
renderHour();
tickClock();
setInterval(tickClock, 1000);

document.querySelectorAll(".hour-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".hour-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    hourSystem = btn.dataset.hourSystem;
    buildClockWheel();
    renderHour();
  });
});
document.querySelectorAll(".clock-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".clock-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    clockMode = btn.dataset.clockMode;
    renderHour();
    tickClock();
  });
});

// ---- Rune of a birth hour (Elder Futhark) ----
document.getElementById("birth-btn").addEventListener("click", () => {
  const birthOut = document.getElementById("birth-out");
  const val = document.getElementById("birth-time").value;
  if (!val) { birthOut.textContent = "Pick a time first — any hour of the day."; return; }
  const h = parseInt(val.split(":")[0], 10);
  const r = RUNES[h];
  birthOut.textContent = "";
  const g = document.createElement("span");
  g.className = "glyph";
  g.textContent = r.glyph;
  const n = document.createElement("strong");
  n.textContent = " " + r.name + " ";
  birthOut.append(document.createTextNode("Born at " + fmtHour(h) + ": "), g, n, document.createTextNode("— " + r.meaning + "."));
});

// ---- Rune converter: five systems, one text box ----
// Elder MAP is unchanged (verified). The other maps follow each row's own
// rules: Younger reuses one rune for several sounds, Medieval uses stung
// runes for one sound each, Futhorc gives digraphs their own runes.
const MAP = {
  th: "ᚦ", ng: "ᛜ",
  a: "ᚨ", b: "ᛒ", c: "ᚲ", d: "ᛞ", e: "ᛖ", f: "ᚠ", g: "ᚷ",
  h: "ᚺ", i: "ᛁ", j: "ᛃ", k: "ᚲ", l: "ᛚ", m: "ᛗ", n: "ᚾ",
  o: "ᛟ", p: "ᛈ", q: "ᚲ", r: "ᚱ", s: "ᛊ", t: "ᛏ", u: "ᚢ",
  v: "ᚹ", w: "ᚹ", x: "ᚲᛊ", y: "ᛃ", z: "ᛉ",
};
const MAPS = {
  elder: MAP,
  youngerLong: {
    th: "ᚦ", ng: "ᚴ",
    a: "ᛅ", b: "ᛒ", c: "ᚴ", d: "ᛏ", e: "ᛁ", f: "ᚠ", g: "ᚴ",
    h: "ᚼ", i: "ᛁ", j: "ᛁ", k: "ᚴ", l: "ᛚ", m: "ᛘ", n: "ᚾ",
    o: "ᚬ", p: "ᛒ", q: "ᚴ", r: "ᚱ", s: "ᛋ", t: "ᛏ", u: "ᚢ",
    v: "ᚢ", w: "ᚢ", x: "ᚴᛋ", y: "ᚢ", z: "ᛋ",
    "þ": "ᚦ", "ð": "ᚦ", "å": "ᚬ", "æ": "ᛅ", "ø": "ᚢ",
  },
  youngerShort: {
    th: "ᚦ", ng: "ᚴ",
    a: "ᛆ", b: "ᛓ", c: "ᚴ", d: "ᛐ", e: "ᛁ", f: "ᚠ", g: "ᚴ",
    h: "ᚽ", i: "ᛁ", j: "ᛁ", k: "ᚴ", l: "ᛚ", m: "ᛙ", n: "ᚿ",
    o: "ᚭ", p: "ᛓ", q: "ᚴ", r: "ᚱ", s: "ᛌ", t: "ᛐ", u: "ᚢ",
    v: "ᚢ", w: "ᚢ", x: "ᚴᛌ", y: "ᚢ", z: "ᛌ",
    "þ": "ᚦ", "ð": "ᚦ", "å": "ᚭ", "æ": "ᛆ", "ø": "ᚢ",
  },
  medieval: {
    th: "ᚦ", ng: "ᚶ",
    a: "ᛆ", b: "ᛒ", c: "ᚴ", d: "ᛑ", e: "ᛂ", f: "ᚠ", g: "ᚵ",
    h: "ᚼ", i: "ᛁ", j: "ᛂ", k: "ᚴ", l: "ᛚ", m: "ᛘ", n: "ᚿ",
    o: "ᚮ", p: "ᛔ", q: "ᚴ", r: "ᚱ", s: "ᛋ", t: "ᛐ", u: "ᚢ",
    v: "ᚡ", w: "ᚡ", x: "ᚴᛋ", y: "ᚤ", z: "ᛋ",
    "þ": "ᚦ", "ð": "ᚧ", "æ": "ᛅ", "ø": "ᚬ", "å": "ᚮ",
  },
  futhorc: {
    ea: "ᛠ", eo: "ᛇ", io: "ᛡ", ng: "ᛝ", th: "ᚦ", st: "ᛥ", cw: "ᛢ",
    a: "ᚪ", b: "ᛒ", c: "ᚳ", d: "ᛞ", e: "ᛖ", f: "ᚠ", g: "ᚷ",
    h: "ᚻ", i: "ᛁ", j: "ᛄ", k: "ᚳ", l: "ᛚ", m: "ᛗ", n: "ᚾ",
    o: "ᚩ", p: "ᛈ", q: "ᚳ", r: "ᚱ", s: "ᛋ", t: "ᛏ", u: "ᚢ",
    v: "ᚹ", w: "ᚹ", x: "ᛉ", y: "ᚣ", z: "ᛋ",
    "þ": "ᚦ", "ð": "ᚦ", "æ": "ᚫ", "œ": "ᛟ",
  },
};
const CONV_NOTES = {
  elder: "th becomes ᚦ, ng becomes ᛜ.",
  youngerLong: "One rune covers several sounds: k and g share ᚴ, t and d share ᛏ, u and w share ᚢ, o is ᚬ \u00f3ss, and a word-final r is ᛦ \u00fdr.",
  youngerShort: "One rune covers several sounds: k and g share ᚴ, t and d share ᛐ, u and w share ᚢ, o is ᚭ \u00f3ss, and a word-final r is ᛧ \u00fdr.",
  medieval: "Stung runes give one rune per sound: e is ᛂ, g is ᚵ, d is ᛑ, p is ᛔ.",
  futhorc: "Digraphs have their own runes: ea ᛠ, eo ᛇ, io ᛡ, ng ᛝ, st ᛥ, cw ᛢ.",
};
let convSystem = "elder";
function toRunes(text) {
  const map = MAPS[convSystem];
  text = text.toLowerCase();
  let out = "";
  for (let i = 0; i < text.length;) {
    const ch = text[i];
    // Word-final r comes first: at the end of the string the "pair" below
    // would be just "r", which would swallow it before this check runs.
    if ((convSystem === "youngerLong" || convSystem === "youngerShort") && ch === "r") {
      const next = text[i + 1];
      const wordEnd = next === undefined || !/[a-z\u00fe\u00f0\u00e5\u00e6\u00f8]/.test(next);
      if (wordEnd) { out += convSystem === "youngerLong" ? "\u16e6" : "\u16e7"; i += 1; continue; }
    }
    const pair = text.slice(i, i + 2);
    if (pair.length === 2 && map[pair]) { out += map[pair]; i += 2; continue; }
    out += map[ch] || ch;
    i += 1;
  }
  return out;
}
const input = document.getElementById("rune-input");
const output = document.getElementById("rune-output");
const convNote = document.getElementById("conv-note");
function refreshConverter() {
  convNote.textContent = CONV_NOTES[convSystem];
  output.textContent = toRunes(input.value);
}
input.addEventListener("input", () => { output.textContent = toRunes(input.value); });
document.querySelectorAll(".sys-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".sys-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    convSystem = btn.dataset.system;
    refreshConverter();
  });
});
refreshConverter();
document.getElementById("copy-runes").addEventListener("click", async () => {
  if (!output.textContent) return;
  await navigator.clipboard.writeText(output.textContent);
});

// ---- Rune wheel: three rings, one rune from each aett ----
// Reimplemented in original code from the rune-hours wheel idea: each
// ring holds one family of eight Elder runes, the marker sits at the top,
// and the middle ring spins the opposite way on a cast.
const castWheel = document.getElementById("cast-wheel");
const RING_RADII = [118, 80, 46];
const rings = [];
const ringRot = [0, 0, 0];
const ringPick = [0, 0, 0];
const picksBox = document.getElementById("picks");
function showPicks() {
  picksBox.textContent = "";
  for (let k = 0; k < 3; k++) {
    const r = RUNES[k * 8 + ringPick[k]];
    const li = document.createElement("li");
    const g = document.createElement("span");
    g.className = "glyph";
    g.textContent = r.glyph;
    const n = document.createElement("strong");
    n.textContent = " " + r.name + " ";
    li.append(g, n, document.createTextNode("— " + r.meaning + ". Rules the " + fmtHour(k * 8 + ringPick[k]) + " hour."));
    picksBox.appendChild(li);
  }
}
function turnRing(k, i, spin) {
  let target = -i * 45;
  if (spin) {
    if (k === 1) { while (target >= ringRot[k]) target -= 360; target -= 360; }
    else { while (target <= ringRot[k]) target += 360; target += 360; }
  } else {
    while (target - ringRot[k] > 180) target -= 360;
    while (target - ringRot[k] < -180) target += 360;
  }
  ringRot[k] = target;
  rings[k].style.transform = "rotate(" + target + "deg)";
  ringPick[k] = i;
}
for (let k = 0; k < 3; k++) {
  const ring = document.createElement("div");
  ring.className = "cast-ring";
  for (let i = 0; i < 8; i++) {
    const r = RUNES[k * 8 + i];
    const b = document.createElement("button");
    b.type = "button";
    b.className = "cast-rune-btn";
    b.textContent = r.glyph;
    b.setAttribute("aria-label", r.name);
    const a = i * 45;
    b.style.transform = "rotate(" + a + "deg) translateY(-" + RING_RADII[k] + "px) rotate(-" + a + "deg)";
    b.addEventListener("click", () => { turnRing(k, i, false); showPicks(); });
    ring.appendChild(b);
  }
  castWheel.appendChild(ring);
  rings.push(ring);
}
const castBtn = document.getElementById("cast-btn");
castBtn.addEventListener("click", () => {
  castBtn.disabled = true;
  for (let k = 0; k < 3; k++) turnRing(k, Math.floor(Math.random() * 8), true);
  setTimeout(() => { showPicks(); castBtn.disabled = false; }, 950);
});
document.getElementById("hour-turn-btn").addEventListener("click", () => {
  const h = new Date().getHours();
  turnRing(Math.floor(h / 8), h % 8, false);
  showPicks();
});
showPicks();

// ---- Code tabs ----
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".code-block").forEach((b) => b.classList.add("hidden"));
    btn.classList.add("active");
    document.getElementById("tab-" + btn.dataset.tab).classList.remove("hidden");
  });
});

// ---- Rune reflection of the day (original prompts, one per rune) ----
const REFLECTIONS = [
  "What wealth — time, skill, care — did you share today?",
  "Where did you stand your ground when it would have been easier to fold?",
  "What thorn is asking you to set a boundary?",
  "What truth needs saying out loud?",
  "What journey — outer or inner — are you actually on?",
  "What did you finally see clearly?",
  "What gift came with no strings, and what did you give back?",
  "What small joy did you almost walk past?",
  "What broke open that needed breaking?",
  "What friction is teaching you patience?",
  "Where is stillness the right move?",
  "What did you plant that's finally coming up?",
  "What are you enduring that is making you stronger?",
  "What chance are you willing to take?",
  "Where do you feel watched over?",
  "What victory, however small, will you own today?",
  "Where does fairness ask you to act?",
  "What is quietly growing in you?",
  "Who do you trust to ride beside you?",
  "What do you owe the people around you?",
  "Where should you stop forcing it and let it flow?",
  "What seed are you keeping safe until its season?",
  "What dawn is breaking in your life right now?",
  "What inheritance — story, skill, place — will you carry forward?",
];
const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
const reflectionRune = RUNES[dayOfYear % RUNES.length];
const reflectionBox = document.getElementById("reflection");
const rGlyph = document.createElement("span");
rGlyph.className = "glyph";
rGlyph.textContent = reflectionRune.glyph;
const rName = document.createElement("strong");
rName.textContent = " " + reflectionRune.name + ": ";
reflectionBox.append(rGlyph, rName, document.createTextNode(REFLECTIONS[dayOfYear % RUNES.length]));

// ---- Separate views (one section at a time, like the rune-hours site) ----
const panels = document.querySelectorAll("[data-view]");
const navBtns = document.querySelectorAll(".nav-btn");
function showView(name) {
  panels.forEach((p) => p.classList.toggle("active", p.dataset.view === name));
  navBtns.forEach((b) => b.classList.toggle("active", b.dataset.viewTarget === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
}
navBtns.forEach((b) => b.addEventListener("click", () => showView(b.dataset.viewTarget)));
if (location.hash) {
  const wanted = location.hash.slice(1);
  if (document.querySelector('[data-view="' + wanted + '"]')) showView(wanted);
}

// ---- Floating background runes ----
const floatBox = document.getElementById("float-runes");
const GLYPHS = RUNES.map((r) => r.glyph);
for (let i = 0; i < 14; i++) {
  const s = document.createElement("span");
  s.className = "float-rune";
  s.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
  s.style.left = Math.random() * 96 + "vw";
  s.style.fontSize = 1.2 + Math.random() * 2.2 + "rem";
  s.style.animationDuration = 18 + Math.random() * 22 + "s";
  s.style.animationDelay = -Math.random() * 30 + "s";
  floatBox.appendChild(s);
}

// ---- Decorative Kali terminal (types itself, runs nothing) ----
const termLines = [
  "$ whoami",
  "connie — witch · rune writer · white-hat",
  "$ cat ~/runes.txt",
  "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ",
  "$ ./cast-rune.sh",
  "ᛊ Sowilo — victory, unstoppable energy",
];
let termStarted = false;
function startTerm() {
  if (termStarted) return;
  termStarted = true;
  const out = document.getElementById("term-output");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cursor = document.createElement("span");
  cursor.className = "term-cursor";
  out.appendChild(cursor);
  if (reduceMotion) {
    termLines.forEach((text) => {
      const line = document.createElement("div");
      line.textContent = text;
      out.insertBefore(line, cursor);
    });
    return;
  }
  let li = 0;
  function typeLine() {
    if (li >= termLines.length) return;
    const line = document.createElement("div");
    out.insertBefore(line, cursor);
    const text = termLines[li];
    let ci = 0;
    (function typeChar() {
      if (ci <= text.length) {
        line.textContent = text.slice(0, ci);
        ci++;
        setTimeout(typeChar, text.startsWith("$") ? 34 : 12);
      } else {
        li++;
        setTimeout(typeLine, 320);
      }
    })();
  }
  typeLine();
}
navBtns.forEach((b) => b.addEventListener("click", () => {
  if (b.dataset.viewTarget === "code") startTerm();
}));
if (document.querySelector('.view[data-view="code"].active')) startTerm();

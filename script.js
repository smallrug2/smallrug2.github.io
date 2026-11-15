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
  { glyph: "ᛊ", name: "Sigel",  sound: "s",  meaning: "sun, victory" },
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

const ALPHA_NOTES = {
  elder: "The oldest row — 24 runes, 2nd–8th century, grouped in three ættir of eight. Eihwaz comes before Perthro in every table here.",
  long: "The Viking Age row — 16 runes in long-branch (Danish) forms. One rune often covered several sounds: ᚴ is both k and g, ᛏ both t and d.",
  short: "The same 16 runes in short-twig (Swedish-Norwegian) forms. Nine runes differ from the long-branch shapes; the order and sounds are the same.",
  futhorc: "The English row — 33 runes. Order follows the 11th-century Cotton Domitian A.ix manuscript; the Old English Rune Poem orders a few differently, and the last four (cweord, calc, stan, gar) appear only in manuscripts.",
};

// ---- Alphabet grid ----
// Cards are built with textContent only — no page HTML is ever assembled
// from strings, so nothing typed or loaded can inject markup.
const grid = document.getElementById("rune-grid");
const alphaNote = document.getElementById("alpha-note");
function renderAlphabet(key) {
  grid.textContent = "";
  alphaNote.textContent = ALPHA_NOTES[key];
  let entries;
  if (key === "elder") {
    entries = RUNES.map((r) => ({ glyph: r.glyph, name: r.name, sound: r.sound + " · " + r.aett, meaning: r.meaning }));
  } else if (key === "futhorc") {
    entries = FUTHORC;
  } else {
    entries = YOUNGER.map((r) => ({ glyph: key === "long" ? r.long : r.short, name: r.name, sound: r.sound, meaning: r.meaning }));
  }
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
    renderAlphabet(btn.dataset.alpha);
  });
});
renderAlphabet("elder");

// ---- Rune of the hour (hour 0 = Fehu … hour 23 = Othala) ----
const now = new Date();
const hour = now.getHours();
const hourRune = RUNES[hour];
const hourBox = document.getElementById("hour-rune");
hourBox.textContent = "Right now, hour " + hour + ":00 belongs to ";
const hourGlyph = document.createElement("span");
hourGlyph.className = "glyph";
hourGlyph.textContent = hourRune.glyph;
const hourName = document.createElement("strong");
hourName.textContent = " " + hourRune.name + " ";
hourBox.append(hourGlyph, hourName, document.createTextNode("— " + hourRune.meaning + "."));

const tbody = document.querySelector("#hour-table tbody");
RUNES.forEach((r, i) => {
  const tr = document.createElement("tr");
  if (i === hour) tr.className = "now";
  const cells = [
    String(i).padStart(2, "0") + ":00",
    r.glyph,
    r.name,
    r.meaning,
  ];
  cells.forEach((text, j) => {
    const td = document.createElement("td");
    if (j === 1) td.className = "glyph";
    td.textContent = text;
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
});

// ---- Rune converter ----
const MAP = {
  th: "ᚦ", ng: "ᛜ",
  a: "ᚨ", b: "ᛒ", c: "ᚲ", d: "ᛞ", e: "ᛖ", f: "ᚠ", g: "ᚷ",
  h: "ᚺ", i: "ᛁ", j: "ᛃ", k: "ᚲ", l: "ᛚ", m: "ᛗ", n: "ᚾ",
  o: "ᛟ", p: "ᛈ", q: "ᚲ", r: "ᚱ", s: "ᛊ", t: "ᛏ", u: "ᚢ",
  v: "ᚹ", w: "ᚹ", x: "ᚲᛊ", y: "ᛃ", z: "ᛉ",
};
function toRunes(text) {
  text = text.toLowerCase();
  let out = "";
  for (let i = 0; i < text.length;) {
    const pair = text.slice(i, i + 2);
    if (MAP[pair]) { out += MAP[pair]; i += 2; }
    else { out += MAP[text[i]] || text[i]; i += 1; }
  }
  return out;
}
const input = document.getElementById("rune-input");
const output = document.getElementById("rune-output");
input.addEventListener("input", () => { output.textContent = toRunes(input.value); });
document.getElementById("copy-runes").addEventListener("click", async () => {
  if (!output.textContent) return;
  await navigator.clipboard.writeText(output.textContent);
});

// ---- Cast a rune ----
const castBtn = document.getElementById("cast-btn");
const castBox = document.getElementById("cast-result");
castBtn.addEventListener("click", () => {
  castBtn.disabled = true;
  castBox.textContent = "";
  const glyph = document.createElement("span");
  glyph.className = "glyph";
  castBox.appendChild(glyph);
  const shuffle = setInterval(() => {
    glyph.textContent = RUNES[Math.floor(Math.random() * RUNES.length)].glyph;
  }, 70);
  setTimeout(() => {
    clearInterval(shuffle);
    const r = RUNES[Math.floor(Math.random() * RUNES.length)];
    glyph.textContent = r.glyph;
    const name = document.createElement("strong");
    name.textContent = " " + r.name + " ";
    castBox.append(name, document.createTextNode("— " + r.meaning + "."));
    castBtn.disabled = false;
  }, 700);
});

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

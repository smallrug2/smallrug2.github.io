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

// ---- Dictionary grid ----
const grid = document.getElementById("rune-grid");
for (const r of RUNES) {
  const card = document.createElement("article");
  card.className = "rune-card";
  card.innerHTML =
    '<span class="glyph">' + r.glyph + "</span><h4>" + r.name + "</h4>" +
    '<p class="sound">' + r.sound + " · " + r.aett + "</p><p>" + r.meaning + "</p>";
  grid.appendChild(card);
}

// ---- Rune of the hour (hour 0 = Fehu … hour 23 = Othala) ----
const now = new Date();
const hour = now.getHours();
const hourRune = RUNES[hour];
document.getElementById("hour-rune").innerHTML =
  'Right now, hour ' + hour + ':00 belongs to <span class="glyph">' + hourRune.glyph + "</span> " +
  "<strong>" + hourRune.name + "</strong> — " + hourRune.meaning + ".";

const tbody = document.querySelector("#hour-table tbody");
RUNES.forEach((r, i) => {
  const tr = document.createElement("tr");
  if (i === hour) tr.className = "now";
  tr.innerHTML =
    "<td>" + String(i).padStart(2, "0") + ":00</td>" +
    '<td class="glyph">' + r.glyph + "</td><td>" + r.name + "</td><td>" + r.meaning + "</td>";
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
document.getElementById("cast-btn").addEventListener("click", () => {
  const r = RUNES[Math.floor(Math.random() * RUNES.length)];
  document.getElementById("cast-result").innerHTML =
    '<span class="glyph">' + r.glyph + "</span> <strong>" + r.name + "</strong> — " + r.meaning + ".";
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

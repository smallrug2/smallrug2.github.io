"""Elder Futhark rune converter — the same converter this site runs in JavaScript,
written in Python. Digraphs first: th -> Thurisaz, ng -> Ingwaz."""

RUNES = {
    "th": "ᚦ", "ng": "ᛜ",
    "a": "ᚨ", "b": "ᛒ", "c": "ᚲ", "d": "ᛞ", "e": "ᛖ",
    "f": "ᚠ", "g": "ᚷ", "h": "ᚺ", "i": "ᛁ", "j": "ᛃ",
    "k": "ᚲ", "l": "ᛚ", "m": "ᛗ", "n": "ᚾ", "o": "ᛟ",
    "p": "ᛈ", "q": "ᚲ", "r": "ᚱ", "s": "ᛊ", "t": "ᛏ",
    "u": "ᚢ", "v": "ᚹ", "w": "ᚹ", "x": "ᚲᛊ", "y": "ᛃ",
    "z": "ᛉ",
}


def to_runes(text):
    text = text.lower()
    out, i = [], 0
    while i < len(text):
        pair = text[i:i + 2]
        if pair in RUNES:
            out.append(RUNES[pair])
            i += 2
        else:
            out.append(RUNES.get(text[i], text[i]))
            i += 1
    return "".join(out)


if __name__ == "__main__":
    print(to_runes("connie"))  # ᚲᛟᚾᚾᛁᛖ
    print(to_runes("strength and honor"))  # ᛊᛏᚱᛖᛜᚷᚦ ᚨᚾᛞ ᚺᛟᚾᛟᚱ

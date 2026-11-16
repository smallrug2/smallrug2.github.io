// Elder Futhark rune converter — the same converter this site runs in
// JavaScript, written in Java. Digraphs first: th -> Thurisaz, ng -> Ingwaz.
import java.util.LinkedHashMap;
import java.util.Map;

public class RuneConverter {
    private static final Map<String, String> RUNES = new LinkedHashMap<>();
    static {
        RUNES.put("th", "ᚦ"); RUNES.put("ng", "ᛜ");
        RUNES.put("a", "ᚨ"); RUNES.put("b", "ᛒ"); RUNES.put("c", "ᚲ");
        RUNES.put("d", "ᛞ"); RUNES.put("e", "ᛖ"); RUNES.put("f", "ᚠ");
        RUNES.put("g", "ᚷ"); RUNES.put("h", "ᚺ"); RUNES.put("i", "ᛁ");
        RUNES.put("j", "ᛃ"); RUNES.put("k", "ᚲ"); RUNES.put("l", "ᛚ");
        RUNES.put("m", "ᛗ"); RUNES.put("n", "ᚾ"); RUNES.put("o", "ᛟ");
        RUNES.put("p", "ᛈ"); RUNES.put("q", "ᚲ"); RUNES.put("r", "ᚱ");
        RUNES.put("s", "ᛊ"); RUNES.put("t", "ᛏ"); RUNES.put("u", "ᚢ");
        RUNES.put("v", "ᚹ"); RUNES.put("w", "ᚹ"); RUNES.put("x", "ᚲᛊ");
        RUNES.put("y", "ᛃ"); RUNES.put("z", "ᛉ");
    }

    public static String toRunes(String text) {
        text = text.toLowerCase();
        StringBuilder out = new StringBuilder();
        for (int i = 0; i < text.length();) {
            String pair = text.substring(i, Math.min(i + 2, text.length()));
            if (RUNES.containsKey(pair)) {
                out.append(RUNES.get(pair));
                i += 2;
            } else {
                String ch = text.substring(i, i + 1);
                out.append(RUNES.getOrDefault(ch, ch));
                i += 1;
            }
        }
        return out.toString();
    }

    public static void main(String[] args) {
        System.out.println(toRunes("smallrug"));  // ᛊᛗᚨᛚᛚᚱᚢᚷ
    }
}

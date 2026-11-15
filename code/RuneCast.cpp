// Elder Futhark rune converter — the same converter this site runs in
// JavaScript, written in C++. Digraphs first: th -> Thurisaz, ng -> Ingwaz.
#include <iostream>
#include <map>
#include <string>

std::string toRunes(const std::string& text) {
    static const std::map<std::string, std::string> runes = {
        {"th", "ᚦ"}, {"ng", "ᛜ"},
        {"a", "ᚨ"}, {"b", "ᛒ"}, {"c", "ᚲ"}, {"d", "ᛞ"},
        {"e", "ᛖ"}, {"f", "ᚠ"}, {"g", "ᚷ"}, {"h", "ᚺ"},
        {"i", "ᛁ"}, {"j", "ᛃ"}, {"k", "ᚲ"}, {"l", "ᛚ"},
        {"m", "ᛗ"}, {"n", "ᚾ"}, {"o", "ᛟ"}, {"p", "ᛈ"},
        {"q", "ᚲ"}, {"r", "ᚱ"}, {"s", "ᛊ"}, {"t", "ᛏ"},
        {"u", "ᚢ"}, {"v", "ᚹ"}, {"w", "ᚹ"}, {"x", "ᚲᛊ"},
        {"y", "ᛃ"}, {"z", "ᛉ"},
    };
    std::string lowered = text;
    for (char& c : lowered) c = std::tolower(c);
    std::string out;
    for (size_t i = 0; i < lowered.size();) {
        std::string pair = lowered.substr(i, 2);
        auto it = runes.find(pair);
        if (it != runes.end()) { out += it->second; i += 2; continue; }
        auto single = runes.find(lowered.substr(i, 1));
        out += (single == runes.end()) ? lowered.substr(i, 1) : single->second;
        i += 1;
    }
    return out;
}

int main() {
    std::cout << toRunes("connie") << "\n";  // ᚲᛟᚾᚾᛁᛖ
    return 0;
}

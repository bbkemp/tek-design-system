# Typefaces

The Tek Design System uses three typeface families. This doc records what each one is, where it comes from, and — measured against the actual font binaries we ship — every language it supports.

| Typeface | Role in the system | Scripts | Languages (measured) |
|---|---|---|---|
| [Geist](#geist) | Body / UI text (`--tek-fonts-family-geist`) | Latin, Cyrillic | 374 |
| [Iosevka Mono](#iosevka-mono) | Code / monospace / instrument readouts (`--tek-fonts-family-mono`; replacing Geist Mono, in flight) | Latin, Cyrillic, Greek, Armenian (full build) · Latin-1 subset (Tek webfonts) | 591 full / 210 Tek subset |
| [Archivo](#archivo) | Headings / button labels (`--tek-fonts-family-archivo`, SemiBold `wdth` 120) | Latin | 340 |

**The short version for localization planning:** all three families cover Western and Central European Latin languages plus Vietnamese (with one exception: the Tek Iosevka **web subset** is Western-European/Latin-1 only — no Polish, Czech, Turkish, etc.; see below). Cyrillic (Russian, Ukrainian, …) works in Geist and full Iosevka but **not** in Archivo or the current Tek Iosevka web subset. Greek works only in full Iosevka. **None of the three cover Chinese, Japanese, Korean, Arabic, Hebrew, or Thai** — see [CJK and other scripts](#cjk-and-other-scripts-open-decision).

## How this was measured

Language support below is not copied from marketing pages — it was measured with [hyperglot](https://hyperglot.rosettatype.com/) 0.7.3 (Rosetta Type's language-coverage checker) against the actual font binaries in this repo and the font-lab build cache, on 2026-07-30:

| Font | File measured | Version |
|---|---|---|
| Geist | `prototypes/dragonstorm/font-export/ttf/Geist-Regular.ttf` | 1.800 |
| Iosevka Mono (full build) | `~/.cache/iosevka-build/Iosevka/dist/IosevkaMono/TTF/IosevkaMono-Regular.ttf` | v34.7.0 |
| Iosevka Mono (Tek web subset) | `prototypes/font-lab/fonts/IosevkaMono-Regular.woff2` | v34.7.0 |
| Archivo | `prototypes/dragonstorm/font-export/ttf/Archivo_Expanded-Medium.ttf` | 2.001 |

"Supports language X" means: every character of X's **primary orthography base character set** (per hyperglot's database of verified languages) is present in the font's cmap. This is strict — e.g. English formally requires Æ/Œ for loanwords, so a font missing Œ fails English even though it renders everyday English fine. Counts shift slightly with hyperglot database versions; treat them as a precise snapshot, not a marketing number. Note also that a language appearing under **Latin** means its *Latin orthography* is covered — e.g. Japanese shows up in Latin lists because hyperglot includes rōmaji; it does **not** mean the font renders native Japanese.

To regenerate: `pip install hyperglot`, run `hyperglot <font file>`, or re-run the full per-script analysis (hyperglot output cross-checked against the font cmap with fontTools).

---

## Geist

**Links:** [Official page (Vercel)](https://vercel.com/font) · [GitHub](https://github.com/vercel/geist-font) · [npm `geist`](https://www.npmjs.com/package/geist)

Vercel's open-source typeface family (sans + mono siblings), licensed SIL OFL 1.1. A neutral, Swiss-influenced grotesque designed for developer tools and UI. Ships as variable fonts. Vietnamese support landed in v1.6.0; Cyrillic was added and redesigned through v1.7.0. We use Geist for all body and UI text; Geist Mono is the current mono family, being replaced by Iosevka Mono (see below).

**Measured coverage (Geist Regular v1.800): 374 languages — Latin + Cyrillic. No Greek.**

<details>
<summary><strong>Cyrillic</strong> — 45 languages</summary>

Abaza, Adyghe, Aghul, Andi, Avaric, Belarusian, Budukh, Bulgarian, Chamalal, Chechen, China Buriat, Crimean Tatar, Dargwa, Dungan, Erzya, Halh Mongolian, Ingush, Judeo-Tat, Kabardian, Kalmyk, Karachay-Balkar, Karata, Kazakh, Kirghiz, Kumyk, Lak, Lezghian, Macedonian, Moksha, Mongolia Buriat, Montenegrin, Muslim Tat, Nogai, Russia Buriat, Russian, Rusyn, Rutul, Serbian, Shughni, Tabassaran, Tajik, Tatar, Tsakhur, Tuvinian, Ukrainian

</details>

<details>
<summary><strong>Latin</strong> — 329 languages</summary>

Acheron, Achinese, Acholi, Achuar-Shiwiar, Afar, Afrikaans, Aguaruna, Ahtna, Alekano, Aleut, Algonquin, Amahuaca, Amarakaeri, Amis, Anaang, Andaandi, Anuta, Ao Naga, Apinayé, Aragonese, Arbëreshë Albanian, Arvanitika Albanian, Asháninka, Ashéninka Perené, Asu (Tanzania), Atayal, Awetí, Balinese, Banjar, Bari, Basque, Batak Dairi, Batak Karo, Batak Mandailing, Batak Simalungun, Batak Toba, Bemba (Zambia), Bena (Tanzania), Bikol, Bini, Bislama, Borana-Arsi-Guji Oromo, Bosnian, Breton, Buginese, Candoshi-Shapra, Caquinte, Caribbean Hindustani, Cashibo-Cacataibo, Cashinahua, Catalan, Cebuano, Central Aymara, Central Kurdish, Chachi, Chamorro, Chavacano, Chiga, Chiltepec Chinantec, Chokwe, Chuukese, Cimbrian, Cofán, Congo Swahili, Cornish, Corsican, Creek, Crimean Tatar, Croatian, Czech, Danish, Dehu, Dimli (individual language), Dutch, Eastern Arrernte, Eastern Oromo, Efik, Embu, English, Ese Ejja, Faroese, Fijian, Filipino, Finnish, French, Friulian, Ga'anda, Gagauz, Galician, Ganda, Garifuna, German, Gheg Albanian, Gilbertese, Gooniyandi, Gourmanchéma, Guadeloupean Creole French, Gusii, Haitian, Han, Hani, Hiligaynon, Ho-Chunk, Hopi, Huastec, Hungarian, Icelandic, Iloko, Inari Sami, Indonesian, Irish, Istro Romanian, Italian, Ixcatlán Mazatec, Jamaican Creole English, Japanese, Javanese, Jola-Fonyi, K'iche', Kabuverdianu, Kaingang, Kalaallisut, Kalenjin, Kamba (Kenya), Kaonde, Kaqchikel, Karelian, Kashubian, Kekchí, Kenzi, Khasi, Kikuyu, Kimbundu, Kinyarwanda, Kirmanjki (individual language), Kituba (Democratic Republic of Congo), Kongo, Konzo, Kuanyama, Kven Finnish, Kölsch, Ladin, Ladino, Latgalian, Ligurian, Lithuanian, Lombard, Low German, Lower Sorbian, Lozi, Luba-Lulua, Lule Sami, Luo (Kenya and Tanzania), Luxembourgish, Macedo-Romanian, Makhuwa, Makhuwa-Meetto, Makonde, Makwe, Malagasy, Malay (individual language), Maltese, Mandinka, Mandjak, Mankanya, Manx, Maore Comorian, Maori, Mapudungun, Marshallese, Matsés, Meriam Mir, Meru, Minangkabau, Mirandese, Mohawk, Montenegrin, Morisyen, Munsee, Murrinh-Patha, Muslim Tat, Mwani, Mískito, Naga Pidgin, Ndonga, Neapolitan, Ngazidja Comorian, Niuean, Nobiin, Nomatsiguenga, North Azerbaijani, North Ndebele, Northern Kurdish, Northern Qiandong Miao, Northern Sami, Northern Uzbek, Northwestern Ojibwa, Norwegian, Nyanja, Nyankole, Occitan (post 1500), Ojitlán Chinantec, Orma, Oroqen, Otuho, Palauan, Paluan, Pampanga, Papantla Totonac, Papiamento, Paraguayan Guaraní, Pedi, Picard, Pichis Ashéninka, Piemontese, Pijin, Pintupi-Luritja, Pipil, Pite Sami, Pohnpeian, Polish, Portuguese, Potawatomi, Purepecha, Páez, Quechua, Rarotongan, Romanian, Romansh, Rotokas, Rundi, Rwa, Samburu, Samoan, Sango, Sangu (Tanzania), Saramaccan, Sardinian, Scots, Scottish Gaelic, Sena, Serbian, Seri, Seselwa Creole French, Shambala, Shawnee, Shipibo-Conibo, Shona, Shuar, Sicilian, Silesian, Slovak, Slovenian, Soga, Somali, Soninke, South Azerbaijani, South Ndebele, Southern Aymara, Southern Qiandong Miao, Southern Sami, Southern Sotho, Spanish, Sranan Tongo, Standard Estonian, Standard Latvian, Standard Malay, Sundanese, Swahili (individual language), Swati, Swedish, Swiss German, Tagalog, Tahitian, Taita, Talysh, Tedim Chin, Tetum, Tetun Dili, Tiv, Toba, Tojolabal, Tok Pisin, Tokelau, Tonga (Tonga Islands), Tonga (Zambia), Tosk Albanian, Tsakhur, Tsonga, Tswana, Tumbuka, Turkish, Turkmen, Tzeltal, Tzotzil, Uab Meto, Umbundu, Ume Sami, Upper Guinea Crioulo, Upper Sorbian, Venetian, Veps, Vietnamese, Võro, Walloon, Walser, Wangaaybuwan-Ngiyambaa, Waorani, Waray (Philippines), Warlpiri, Wayuu, Welsh, West Central Oromo, Western Abnaki, Western Frisian, Wik-Mungkan, Wiradjuri, Wolof, Xavánte, Xhosa, Yanesha', Yao, Yapese, Yindjibarndi, Yucateco, Zapotec, Zulu, Zuni, Záparo

</details>

---

## Iosevka Mono

**Links:** [Official page](https://typeof.net/Iosevka/) · [GitHub](https://github.com/be5invis/Iosevka)

Iosevka is Renzhi Li's open-source (SIL OFL 1.1) programmer typeface, designed to be narrow and built entirely from a parametric source — which is why we can build a custom "Iosevka Mono" family instead of consuming stock binaries. The Tek build ([`prototypes/font-lab/build-fonts.sh`](../prototypes/font-lab/build-fonts.sh), Iosevka v34.7.0) produces 7 widths x 9 weights x 2 slopes in monospace and quasi-proportional spacing, with each width exported as its own family. It is replacing Geist Mono for code and instrument readouts (migration in flight).

### Full build — what upstream Iosevka covers

**Measured coverage (unsubset build, v34.7.0): 591 languages — Latin, Cyrillic, Greek (incl. Modern Greek), Armenian.** Plus IPA and Powerline/terminal symbols. This is what you get in any non-web export (e.g. Figma/desktop TTFs) built without subsetting.

<details>
<summary><strong>Armenian</strong> — 2 languages</summary>

Armenian, Western Armenian

</details>

<details>
<summary><strong>Cyrillic</strong> — 84 languages</summary>

Abaza, Abkhazian, Adyghe, Aghul, Andi, Avaric, Bashkir, Belarusian, Budukh, Bulgarian, Central Siberian Yupik, Chamalal, Chechen, China Buriat, Chukot, Chuvash, Crimean Tatar, Dargwa, Dolgan, Dungan, Eastern Mari, Erzya, Even, Forest Enets, Halh Mongolian, Hunzib, Ingush, Judeo-Tat, Kabardian, Kalmyk, Karachay-Balkar, Karaim, Karata, Kazakh, Ket, Khakas, Khanty, Kildin Sami, Kirghiz, Komi-Permyak, Komi-Zyrian, Koryak, Krymchak, Kumyk, Lak, Lezghian, Macedonian, Mansi, Moksha, Mongolia Buriat, Montenegrin, Muslim Tat, Nenets, Nganasan, Nogai, North Azerbaijani, Northern Altai, Northern Kurdish, Northern Yukaghir, Orok, Ossetian, Russia Buriat, Russian, Rusyn, Rutul, Selkup, Serbian, Shor, Shughni, Southern Altai, Southern Yukaghir, Tabassaran, Tajik, Tatar, Tsakhur, Tundra Enets, Tuvinian, Udi, Udmurt, Ukrainian, Urum, Western Mari, Yagnobi, Yakut

</details>

<details>
<summary><strong>Greek</strong> — 2 languages</summary>

Arvanitika Albanian, Modern Greek (1453-)

</details>

<details>
<summary><strong>Latin</strong> — 503 languages</summary>

Abidji, Abron, Abua, Acheron, Achinese, Acholi, Achuar-Shiwiar, Adamawa Fulfulde, Adangme, Adele, Afar, Afrikaans, Aghem, Agni, Aguaruna, Ahanta, Ahtna, Aja (Benin), Akebu, Akoose, Alekano, Aleut, Algonquin, Alutiiq, Amahuaca, Amarakaeri, Amis, Anaang, Andaandi, Angas, Anii, Anufo, Anuta, Ao Naga, Apinayé, Arabela, Aragonese, Arbëreshë Albanian, Arvanitika Albanian, Asháninka, Ashéninka Perené, Asturian, Asu (Tanzania), Atayal, Avatime, Awa-Cuaiquer, Awetí, Awing, Ayizo Gbe, Baatonum, Bafia, Bagirmi Fulfulde, Balante-Ganja, Balinese, Balkan Romani, Bambara, Banjar, Baoulé, Bari, Basa (Cameroon), Basque, Bassari, Batak Dairi, Batak Karo, Batak Mandailing, Batak Simalungun, Batak Toba, Bemba (Zambia), Bena (Tanzania), Biali, Bikol, Bini, Bislama, Bissa, Boko (Benin), Bomu, Bora, Borana-Arsi-Guji Oromo, Borgu Fulfulde, Bosnian, Bouna Kulango, Breton, Buginese, Candoshi-Shapra, Caquinte, Caribbean Hindustani, Cashibo-Cacataibo, Cashinahua, Catalan, Cebuano, Central Atlas Tamazight, Central Aymara, Central Kurdish, Central Mazahua, Central Nahuatl, Central-Eastern Niger Fulfulde, Cerma, Chachi, Chamorro, Chavacano, Chayahuita, Chiga, Chiltepec Chinantec, Chokwe, Chuukese, Cimbrian, Cofán, Colorado, Comox, Congo Swahili, Cornish, Corsican, Creek, Crimean Tatar, Croatian, Czech, Dagbani, Danish, Dehu, Dendi (Benin), Dimli (individual language), Dinka, Ditammari, Duala, Dutch, Dyula, Eastern Arrernte, Eastern Maninkakan, Eastern Oromo, Efik, Embu, English, Ese Ejja, Ewe, Ewondo, Falam Chin, Fanti, Faroese, Fe'Fe', Fijian, Filipino, Finnish, Fon, Foodo, French, Friulian, Ga, Ga'anda, Gagauz, Galician, Ganda, Garifuna, Gen, German, Gheg Albanian, Gilbertese, Gonja, Gooniyandi, Gourmanchéma, Guadeloupean Creole French, Guinea Kpelle, Gusii, Gwichʼin, Haitian, Hakha Chin, Halkomelem, Han, Hani, Hassaniyya, Hawaiian, Hiligaynon, Ho-Chunk, Hopi, Huastec, Hungarian, Ibibio, Icelandic, Idoma, Igbo, Iloko, Inari Sami, Indonesian, Irish, Istro Romanian, Italian, Ixcatlán Mazatec, Jamaican Creole English, Japanese, Javanese, Jenaama Bozo, Jola-Fonyi, K'iche', Kabiyè, Kabuverdianu, Kabyle, Kaingang, Kala Lagaw Ya, Kalaallisut, Kalenjin, Kamba (Kenya), Kanuri, Kaonde, Kaqchikel, Kara-Kalpak, Karelian, Kasem, Kashubian, Kekchí, Kenzi, Khasi, Khoekhoe, Kikuyu, Kimbundu, Kinyarwanda, Kirmanjki (individual language), Kituba (Democratic Republic of Congo), Kongo, Konzo, Koyra Chiini Songhay, Koyraboro Senni Songhai, Krio, Kuanyama, Kusaal, Kven Finnish, Kwak’wala, Kwasio, Kölsch, Ladin, Ladino, Lakota, Lama, Lamnso', Langi, Latgalian, Ligurian, Lingala, Lithuanian, Lobi, Lombard, Low German, Lower Sorbian, Lozi, Luba-Katanga, Luba-Lulua, Lukpa, Lule Sami, Luo (Kenya and Tanzania), Lushai, Luxembourgish, Maasina Fulfulde, Macedo-Romanian, Madurese, Makhuwa, Makhuwa-Meetto, Makonde, Makwe, Malagasy, Malay (individual language), Maltese, Mam, Mamara Senoufo, Mandinka, Mandjak, Mankanya, Manx, Maore Comorian, Maori, Mapudungun, Masai, Masana, Matsés, Mbelime, Medumba, Megleno Romanian, Mende (Sierra Leone), Meriam Mir, Meru, Meta', Metlatónoc Mixtec, Mezquital Otomi, Mi'kmaq, Minangkabau, Mirandese, Miyobe, Moba, Mohawk, Montagnais, Montenegrin, Morisyen, Mossi, Mundang, Munsee, Murrinh-Patha, Murui Huitoto, Muslim Tat, Mwani, Ménik, Mískito, Naga Pidgin, Nateni, Ndonga, Neapolitan, Ngazidja Comorian, Ngiemboon, Ngomba, Nigerian Fulfulde, Niuean, Nobiin, Nomatsiguenga, Noon, North Azerbaijani, North Marquesan, North Ndebele, Northeastern Dinka, Northern Bobo Madaré, Northern Kissi, Northern Kurdish, Northern Qiandong Miao, Northern Sami, Northern Uzbek, Northwestern Ojibwa, Norwegian, Nuuchahnulth, Nyamwezi, Nyanja, Nyankole, Nyemba, Nzima, Occitan (post 1500), Ojitlán Chinantec, Omaha-Ponca, Orma, Oroqen, Otuho, Palauan, Paluan, Pampanga, Papantla Totonac, Papiamento, Pedi, Picard, Pichis Ashéninka, Piemontese, Pijin, Pintupi-Luritja, Pipil, Pite Sami, Pohnpeian, Polish, Portuguese, Potawatomi, Prussian, Pulaar, Pular, Purepecha, Páez, Quechua, Rarotongan, Romanian, Romansh, Rotokas, Rundi, Rwa, Saafi-Saafi, Samburu, Samoan, Sango, Sangu (Tanzania), Saramaccan, Sardinian, Saxwe Gbe, Scots, Scottish Gaelic, Secoya, Sena, Serbian, Serer, Seri, Seselwa Creole French, Shambala, Sharanahua, Shawnee, Shilluk, Shipibo-Conibo, Shona, Shuar, Sicilian, Silesian, Siona, Skolt Sami, Slovak, Slovenian, Soga, Somali, Soninke, South Azerbaijani, South Marquesan, South Ndebele, Southern Aymara, Southern Bobo Madaré, Southern Dagaare, Southern Qiandong Miao, Southern Sami, Southern Sotho, Spanish, Sranan Tongo, Standard Estonian, Standard Latvian, Standard Malay, Sukuma, Sundanese, Susu, Swahili (individual language), Swati, Swedish, Swiss German, Syenara Senoufo, Tachelhit, Tagalog, Tahitian, Taita, Talysh, Tasawaq, Tedim Chin, Tem, Teso, Tetum, Tetun Dili, Thompson, Ticuna, Tigon Mbembe, Timne, Tiv, Tiéyaxo Bozo, Toba, Tojolabal, Tok Pisin, Tokelau, Toma, Tonga (Tonga Islands), Tonga (Zambia), Tosk Albanian, Totontepec Mixe, Tsakhur, Tsonga, Tswana, Tumbuka, Turkish, Turkmen, Tuvalu, Twi, Tzeltal, Tzotzil, Uab Meto, Umbundu, Ume Sami, Upper Guinea Crioulo, Upper Sorbian, Urarina, Venda, Venetian, Veps, Vietnamese, Vlax Romani, Võro, Waama, Waci Gbe, Wallisian, Walloon, Walser, Wamey, Wangaaybuwan-Ngiyambaa, Waorani, Waray (Philippines), Warlpiri, Wasa, Wayuu, Welsh, West Central Oromo, West-Central Limba, Western Abnaki, Western Frisian, Western Niger Fulfulde, Wik-Mungkan, Wiradjuri, Wolof, Xavánte, Xhosa, Xwela Gbe, Yagua, Yanesha', Yangben, Yanomamö, Yao, Yapese, Yindjibarndi, Yom, Yoruba, Yucateco, Zarma, Zulu, Zuni, Záparo

</details>

### Tek web subset — what the shipped `.woff2` files cover

The webfonts in `prototypes/font-lab/fonts/` and `prototypes/dragonstorm/fonts/` are **deliberately subset** to keep 252 faces shippable: Basic Latin + Latin-1 + the symbols instrument readouts need (Ω µ ° ± × ÷ − ∞ Å arrows, quotes/dashes, €, ™). That is ~225 codepoints.

**Consequence: the current web subset is Western-European only.** Languages needing Latin Extended-A/B — Polish, Czech, Slovak, Hungarian, Romanian, Turkish, Croatian, Latvian, Lithuanian, Estonian, Welsh, and hyperglot-strict English/French (Œ/œ) — fall back to the next font in the stack, as does all Cyrillic and Greek. If a product UI needs those in mono, widen `UNICODES` in `build-fonts.sh` and re-export.

**Measured coverage (Tek subset woff2): 210 languages, all Latin-1-compatible.**

<details>
<summary><strong>Latin</strong> — 210 languages</summary>

Acheron, Achinese, Afar, Afrikaans, Alekano, Algonquin, Amahuaca, Amarakaeri, Amis, Anaang, Andaandi, Anuta, Ao Naga, Aragonese, Arbëreshë Albanian, Arvanitika Albanian, Asháninka, Ashéninka Perené, Asu (Tanzania), Balinese, Banjar, Basque, Batak Dairi, Batak Karo, Batak Mandailing, Batak Simalungun, Batak Toba, Bemba (Zambia), Bena (Tanzania), Bikol, Bislama, Borana-Arsi-Guji Oromo, Breton, Buginese, Candoshi-Shapra, Caquinte, Cashibo-Cacataibo, Catalan, Cebuano, Central Aymara, Chachi, Chamorro, Chavacano, Chiga, Chiltepec Chinantec, Chokwe, Chuukese, Cofán, Congo Swahili, Cornish, Corsican, Danish, Dehu, Eastern Arrernte, Eastern Oromo, Ese Ejja, Faroese, Fijian, Filipino, Finnish, Friulian, Galician, German, Gheg Albanian, Gilbertese, Gooniyandi, Guadeloupean Creole French, Gusii, Haitian, Hani, Hiligaynon, Hopi, Huastec, Icelandic, Iloko, Indonesian, Irish, Italian, Ixcatlán Mazatec, Jamaican Creole English, Japanese, Javanese, K'iche', Kabuverdianu, Kalaallisut, Kalenjin, Kaonde, Kekchí, Kenzi, Khasi, Kimbundu, Kinyarwanda, Kituba (Democratic Republic of Congo), Kongo, Konzo, Kuanyama, Ladino, Ligurian, Lombard, Low German, Luba-Lulua, Luo (Kenya and Tanzania), Luxembourgish, Makhuwa, Makhuwa-Meetto, Makonde, Makwe, Malagasy, Malay (individual language), Manx, Maore Comorian, Mapudungun, Meriam Mir, Meru, Minangkabau, Mohawk, Morisyen, Murrinh-Patha, Mwani, Mískito, Naga Pidgin, Ndonga, Neapolitan, Ngazidja Comorian, Nobiin, Nomatsiguenga, North Ndebele, Northern Qiandong Miao, Northern Uzbek, Norwegian, Nyankole, Occitan (post 1500), Orma, Oroqen, Paluan, Pampanga, Papiamento, Pichis Ashéninka, Piemontese, Pijin, Pintupi-Luritja, Pohnpeian, Portuguese, Potawatomi, Quechua, Romansh, Rotokas, Rundi, Rwa, Samburu, Sango, Sangu (Tanzania), Saramaccan, Sardinian, Scots, Scottish Gaelic, Sena, Seri, Seselwa Creole French, Shambala, Shawnee, Shipibo-Conibo, Shona, Sicilian, Soga, Somali, Soninke, South Ndebele, Southern Aymara, Southern Qiandong Miao, Southern Sami, Spanish, Sranan Tongo, Standard Malay, Sundanese, Swahili (individual language), Swati, Swedish, Swiss German, Tagalog, Taita, Tedim Chin, Tetum, Tetun Dili, Tiv, Tok Pisin, Tosk Albanian, Tsonga, Tumbuka, Tzeltal, Tzotzil, Uab Meto, Upper Guinea Crioulo, Walloon, Wangaaybuwan-Ngiyambaa, Waray (Philippines), Warlpiri, Wayuu, West Central Oromo, Western Abnaki, Western Frisian, Wik-Mungkan, Wiradjuri, Xhosa, Yanesha', Yapese, Yindjibarndi, Yucateco, Zulu, Záparo

</details>

---

## Archivo

**Links:** [Omnibus-Type (foundry)](https://www.omnibus-type.com/fonts/archivo/) · [Google Fonts](https://fonts.google.com/specimen/Archivo) · [GitHub](https://github.com/Omnibus-Type/Archivo)

A grotesque sans by Héctor Gatti / Omnibus-Type (SIL OFL 1.1), designed for simultaneous print and digital use, with variable `wght` and `wdth` axes. We use the Expanded cut (SemiBold, `wdth` 120) for headings and button labels.

**Measured coverage (Archivo SemiBold v2.001 static instance): 340 languages — Latin only. No Cyrillic, no Greek.** This is the narrowest of the three: if Tek products ever localize headings into Russian, Ukrainian, or Greek, Archivo is the gap — the heading layer would need a fallback or an extended family.

<details>
<summary><strong>Latin</strong> — 340 languages</summary>

Acheron, Achinese, Acholi, Achuar-Shiwiar, Afar, Afrikaans, Aguaruna, Ahtna, Alekano, Aleut, Algonquin, Amahuaca, Amarakaeri, Amis, Anaang, Andaandi, Anuta, Ao Naga, Apinayé, Aragonese, Arbëreshë Albanian, Arvanitika Albanian, Asháninka, Ashéninka Perené, Asu (Tanzania), Atayal, Balinese, Banjar, Bari, Basque, Batak Dairi, Batak Karo, Batak Mandailing, Batak Simalungun, Batak Toba, Bemba (Zambia), Bena (Tanzania), Bikol, Bini, Bislama, Borana-Arsi-Guji Oromo, Bosnian, Breton, Buginese, Candoshi-Shapra, Caquinte, Caribbean Hindustani, Cashibo-Cacataibo, Cashinahua, Catalan, Cebuano, Central Aymara, Central Kurdish, Central Nahuatl, Chachi, Chamorro, Chavacano, Chiga, Chiltepec Chinantec, Chokwe, Chuukese, Cimbrian, Cofán, Congo Swahili, Cornish, Corsican, Creek, Crimean Tatar, Croatian, Czech, Danish, Dehu, Dimli (individual language), Dutch, Eastern Arrernte, Eastern Oromo, Efik, Embu, English, Ese Ejja, Falam Chin, Faroese, Fijian, Filipino, Finnish, French, Friulian, Ga'anda, Gagauz, Galician, Ganda, Garifuna, German, Gheg Albanian, Gilbertese, Gooniyandi, Gourmanchéma, Guadeloupean Creole French, Gusii, Gwichʼin, Haitian, Hakha Chin, Han, Hani, Hiligaynon, Ho-Chunk, Hopi, Huastec, Hungarian, Icelandic, Iloko, Inari Sami, Indonesian, Irish, Istro Romanian, Italian, Ixcatlán Mazatec, Jamaican Creole English, Japanese, Javanese, Jola-Fonyi, K'iche', Kabuverdianu, Kaingang, Kala Lagaw Ya, Kalaallisut, Kalenjin, Kamba (Kenya), Kaonde, Kaqchikel, Karelian, Kashubian, Kekchí, Kenzi, Khasi, Kikuyu, Kimbundu, Kinyarwanda, Kirmanjki (individual language), Kituba (Democratic Republic of Congo), Kongo, Konzo, Koyra Chiini Songhay, Koyraboro Senni Songhai, Kuanyama, Kven Finnish, Kölsch, Ladin, Ladino, Latgalian, Ligurian, Lithuanian, Lombard, Low German, Lower Sorbian, Lozi, Luba-Lulua, Lule Sami, Luo (Kenya and Tanzania), Lushai, Luxembourgish, Macedo-Romanian, Makhuwa, Makhuwa-Meetto, Makonde, Makwe, Malagasy, Malay (individual language), Maltese, Mandinka, Mandjak, Mankanya, Manx, Maore Comorian, Maori, Mapudungun, Marshallese, Matsés, Meriam Mir, Meru, Mezquital Otomi, Minangkabau, Mirandese, Mohawk, Montenegrin, Morisyen, Munsee, Murrinh-Patha, Muslim Tat, Mwani, Mískito, Naga Pidgin, Ndonga, Neapolitan, Ngazidja Comorian, Niuean, Nobiin, Nomatsiguenga, North Azerbaijani, North Ndebele, Northern Kurdish, Northern Qiandong Miao, Northern Sami, Northern Uzbek, Northwestern Ojibwa, Norwegian, Nyanja, Nyankole, Occitan (post 1500), Ojitlán Chinantec, Orma, Oroqen, Otuho, Palauan, Paluan, Pampanga, Papantla Totonac, Papiamento, Paraguayan Guaraní, Pedi, Picard, Pichis Ashéninka, Piemontese, Pijin, Pintupi-Luritja, Pipil, Pite Sami, Pohnpeian, Polish, Portuguese, Potawatomi, Purepecha, Páez, Quechua, Rarotongan, Romanian, Romansh, Rotokas, Rundi, Rwa, Samburu, Samoan, Sango, Sangu (Tanzania), Saramaccan, Sardinian, Scots, Scottish Gaelic, Secoya, Sena, Seri, Seselwa Creole French, Shambala, Shawnee, Shipibo-Conibo, Shona, Shuar, Sicilian, Silesian, Slovak, Slovenian, Soga, Somali, Soninke, South Azerbaijani, South Ndebele, Southern Aymara, Southern Qiandong Miao, Southern Sami, Southern Sotho, Spanish, Sranan Tongo, Standard Estonian, Standard Latvian, Standard Malay, Sundanese, Swahili (individual language), Swati, Swedish, Swiss German, Tagalog, Tahitian, Taita, Talysh, Tasawaq, Tedim Chin, Tetum, Tetun Dili, Tiv, Toba, Tok Pisin, Tokelau, Tonga (Tonga Islands), Tonga (Zambia), Tosk Albanian, Totontepec Mixe, Tsakhur, Tsonga, Tswana, Tumbuka, Turkish, Turkmen, Tuvalu, Tzeltal, Tzotzil, Uab Meto, Umbundu, Ume Sami, Upper Guinea Crioulo, Upper Sorbian, Venetian, Veps, Vietnamese, Võro, Walloon, Walser, Wangaaybuwan-Ngiyambaa, Waorani, Waray (Philippines), Warlpiri, Wayuu, Welsh, West Central Oromo, Western Abnaki, Western Frisian, Wik-Mungkan, Wiradjuri, Wolof, Xavánte, Xhosa, Yanesha', Yao, Yapese, Yindjibarndi, Yoruba, Yucateco, Zarma, Zulu, Zuni, Záparo

</details>

---

## CJK and other scripts (open decision)

None of the three families cover Chinese, Japanese, Korean, Arabic, Hebrew, or Thai. If Tek products localize into Chinese or Japanese (plausible for T&M markets), the recommended companions are:

| Role | Recommended CJK companion | Why |
|---|---|---|
| Mono / readouts (Iosevka) | [Sarasa Gothic](https://github.com/be5invis/Sarasa-Gothic) (Sarasa Term / Mono, SC + J variants) | Built by the same author **from Iosevka + Source Han Sans** — it is literally Iosevka's CJK companion; metrics match, CJK glyphs are exactly 2 Latin advance widths |
| Body / UI (Geist) | [Noto Sans SC](https://fonts.google.com/noto/specimen/Noto+Sans+SC) / [Noto Sans JP](https://fonts.google.com/noto/specimen/Noto+Sans+JP) (= Source Han Sans) | Industry-standard OFL CJK sans; neutral grotesque tone sits well under Geist |
| Headings (Archivo) | Noto Sans SC/JP at heavier weights | There is no expanded-width CJK; CJK doesn't really do width variants — headings fall back to weight for emphasis |

Implementation would be **fallback stacks in the family tokens** (e.g. `--tek-fonts-family-mono: 'Iosevka Mono', 'Sarasa Term SC', monospace`), with CJK files loaded per-locale only — full CJK webfonts are 5–15 MB+ and need subsetting or `unicode-range` splitting. **Not adopted yet — decision pending on which locales Tek products actually ship.**

## Open decisions

- **CJK companions** — adopt the table above? Depends on which locales Tek products localize into (Chinese/Japanese likely candidates for T&M).
- **Iosevka web subset breadth** — current Latin-1-only subset excludes Polish/Czech/Turkish/Hungarian/Romanian etc. from the mono webfonts. Intentional for font-lab exploration; needs a decision before Iosevka becomes the production mono.
- **Archivo Cyrillic/Greek gap** — no action needed until a localization requirement appears; recorded here so it isn't a surprise.
- **Where this doc lives** — it sits in `docs/`, which the Tek MCP endpoint does **not** ingest (only tokens, components, and `corpus/`). If typeface/language info should be queryable via MCP corpus search, it needs a corpus-side mirror or an ingest rule change.

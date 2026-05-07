# Dragon Clash: Realm of Scales
## Game Design Document (GDD)

**Versiyon:** 0.1  
**Tarih:** Mayıs 2026  
**Durum:** Prototip aşaması

---

## İçindekiler

1. [Oyun Genel Bakış](#1-oyun-genel-bakış)
2. [Hikaye & Evren](#2-hikaye--evren)
3. [Temel Mekanikler](#3-temel-mekanikler)
4. [Element Sistemi](#4-element-sistemi)
5. [Kart Sistemi](#5-kart-sistemi)
6. [Keyword Sistemi](#6-keyword-sistemi)
7. [Yapay Zeka](#7-yapay-zeka)
8. [Deste Kurma](#8-deste-kurma)
9. [Kullanıcı Arayüzü](#9-kullanıcı-arayüzü)
10. [Görsel Stil](#10-görsel-stil)
11. [Ses Tasarımı](#11-ses-tasarımı)
12. [Teknik Mimari](#12-teknik-mimari)
13. [Kampanya & İlerleme](#13-kampanya--ilerleme)
14. [Steam & Yayın](#14-steam--yayın)
15. [Kart Kataloğu](#15-kart-kataloğu)

---

## 1. Oyun Genel Bakış

### Özet
**Dragon Clash: Realm of Scales**, 5 ejderha klanının birbirine karşı savaştığı tek oyunculu kart savaş oyunudur. Oyuncu bir klan seçer ve yapay zeka kontrolündeki rakip klanlara karşı düellolar yapar. Oyunun tüm kart artwork'leri proje sahibi tarafından dijital olarak çizilmektedir.

### Temel Bilgiler
| Özellik | Değer |
|---|---|
| **Tür** | Tek oyunculu savaş kart oyunu |
| **Platform** | PC (Steam) |
| **Motor** | Unity (C#) |
| **Hedef Kitle** | Kart oyunu sevenleri, 14+ yaş |
| **Ortalama Oyun Süresi** | 5–10 dakika |
| **Dil** | Türkçe (ileride İngilizce) |

### Temel Tasarım Prensipleri
- **Basit ama derin:** Kurallar 1 dakikada öğrenilir, strateji zamanla gelişir
- **Hızlı oyunlar:** Her oturum 10 dakikayı geçmemeli
- **Görsel özgünlük:** Tüm sanat eserleri elle çizilmiş, özgün
- **Adil AI:** Zorluk seviyeleri yeni ve deneyimli oyuncuya ayrı ayrı hitap etmeli

---

## 2. Hikaye & Evren

### Arka Plan
Kadim bir dünya olan **Realm of Scales**'de beş büyük ejderha klanı yüzyıllardır süregelen bir denge içinde yaşamaktaydı. Ancak **Sonsuz Taç** adı verilen efsanevi artifact'ın ortaya çıkmasıyla bu denge bozuldu. Her klan tacı ele geçirip tüm toprakların hakimi olmak istiyor.

### 5 Ejderha Klanı
| Klan | Element | Yurt | Felsefe |
|---|---|---|---|
| **Kızıl Kanat Klanı** | 🔥 Ateş | Volkanik dağlar | Güç ve hız her şeyin üstündedir |
| **Buz Kalkan Klanı** | ❄️ Buz | Kutup tundraları | Sabır ve dayanıklılık zafer getirir |
| **Yeşil Kök Klanı** | 🌿 Doğa | Kadim ormanlar | Yaşam ve ölüm döngüsü kutsaldır |
| **Demir Dağ Klanı** | 🪨 Taş | Yeraltı kaleleri | Savunma, en iyi saldırıdır |
| **Gece Pençe Klanı** | 👁️ Gölge | Karanlık vadiler | Görülmeden vur, duyulmadan kazan |

---

## 3. Temel Mekanikler

### Oyun Alanı
```
┌─────────────────────────────────────────┐
│  AI LİDERİ  [30 HP]    [Deste: 16🂠]   │
│  ─────────────────────────────────────  │
│  [El: 3 kart — gizli]                  │
│  ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐             │
│  │  │ │  │ │  │ │  │ │  │  ← AI Alan  │
│  └──┘ └──┘ └──┘ └──┘ └──┘             │
│  ─ ─ ─ ─ SAVAŞ ALANI ─ ─ ─ ─         │
│  ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐             │
│  │  │ │  │ │  │ │  │ │  │  ← Oyuncu  │
│  └──┘ └──┘ └──┘ └──┘ └──┘             │
│  [El: 5 kart — görünür]               │
│  💎 Mana: ◆◆◆◇◇◇◇◇◇◇    [TUR BİTİR]  │
│  OYUNCU [30 HP]         [Deste: 14🂠]  │
└─────────────────────────────────────────┘
```

### Oyun Başlangıcı
1. Her oyuncu 20 kartlık destesini karıştırır
2. Her oyuncu 4 kart çeker (başlangıç eli)
3. Oyuncu ilk turu oynar

### Tur Sırası
```
TUR BAŞLANGICI
│
├─ 1. ÇEKME     → Desteden 1 kart çek (el maks. 10)
│
├─ 2. MANA      → Maksimum mana +1 artar (maks. 10)
│                  Mana tamamen yenilenir
│
├─ 3. OYNAMA    → İstediğin kadar kart oyna (mana yettiğince)
│                  - Yaratık: Boş alana yerleştir
│                  - Büyü: Anlık uygula
│
├─ 4. SALDIRI   → Her yaratık 1 kez saldırabilir
│                  - Düşman yaratığa (karşılıklı hasar)
│                  - Düşman liderine (tek yönlü hasar)
│
└─ 5. BITIŞ     → Turu bitir, zehir efektleri işlenir
```

### Mana Sistemi
- Tur 1: 1/1 mana — Tur 2: 2/2 mana — ... — Tur 10+: 10/10 mana
- Kullanılmayan mana tur sonunda **sıfırlanır** (birikmez)
- Maksimum mana **10** ile sınırlıdır

### Savaş Mekaniği
#### Yaratık vs Yaratık (Karşılıklı Hasar)
```
A Yaratığı (4 ATK) → B Yaratığı (3 HP, 2 ATK)
Sonuç: B yok olur | A, 2 hasar alır
```

#### Yaratık vs Lider (Tek Yönlü Hasar)
```
A Yaratığı (4 ATK) → Düşman Lideri
Sonuç: Lider 4 HP kaybeder | A hasar almaz
```

#### Element Avantajı
Avantajlı elementle saldırı: **+1 ATK bonus**

### Kazanma / Kaybetme Koşulları
| Durum | Sonuç |
|---|---|
| Düşman lider HP ≤ 0 | **Oyuncu kazanır** |
| Oyuncu lider HP ≤ 0 | **Oyuncu kaybeder** |
| Her ikisi aynı anda ≤ 0 | **Beraberlik** |
| Deste biter | Her tur 2 yorgunluk hasarı |

---

## 4. Element Sistemi

### Avantaj Döngüsü
```
🔥 Ateş
   ↙        ↖
🌿 Doğa   ❄️ Buz
   ↙        ↖
      🪨 Taş

👁️ Gölge → Nötr (avantaj/dezavantaj yok)
```

| Saldıran | Savunan | Sonuç |
|---|---|---|
| 🔥 Ateş | 🌿 Doğa | +1 ATK |
| 🌿 Doğa | 🪨 Taş | +1 ATK |
| 🪨 Taş | ❄️ Buz | +1 ATK |
| ❄️ Buz | 🔥 Ateş | +1 ATK |
| 👁️ Gölge | Herhangi | +0 ATK |
| Herhangi | 👁️ Gölge | +0 ATK |

### Klan Oyun Stilleri
| Element | Hız | Güç | Dayanıklılık | Özellik |
|---|---|---|---|---|
| 🔥 Ateş | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | Hız & Sıçrama |
| ❄️ Buz | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Armor & Kontrol |
| 🌿 Doğa | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | Zehir & Şifa |
| 🪨 Taş | ⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Armor & Reborn |
| 👁️ Gölge | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | Stealth & Hız |

---

## 5. Kart Sistemi

### Kart Anatomisi
```
┌───────────────┐
│ [Element] 3💎 │  ← Mana Maliyeti
│ ┌───────────┐ │
│ │           │ │
│ │  ARTWORK  │ │  ← Kart Görseli (dijital çizim)
│ │           │ │
│ └───────────┘ │
│ Kart İsmi     │
│ ⚔️4    ❤️2   │  ← ATK / HP (sadece yaratıklarda)
│ [Keyword Tag] │
└───────────────┘
```

### Kart Türleri

#### Yaratık Kartları (40 kart, 8 per element)
- Mana ödenerek alana yerleştirilir
- ATK ve HP değerleri vardır
- Tur sonuna kadar alanda kalır
- Ölünce mezarlığa gider

#### Büyü Kartları (15 kart, 3 per element)
- Mana ödenerek oynanır
- Anlık etki uygular
- Oynanır oynanmaz mezarlığa gider

### Kart Değer Dengeleme
Genel kural: `ATK + HP ≈ Mana × 2 + 1`

| Mana | Zayıf (1 stat) | Normal | Güçlü (keyword ile) |
|---|---|---|---|
| 1 | 1/1 | 1/2 | 2/1 |
| 2 | 2/2 | 2/3 | 3/1 |
| 3 | 3/3 | 4/2 | 2/5 |
| 4 | 4/4 | 3/5 | 4/3 |
| 5 | 5/5 | 4/6 | 5/4 |
| 6 | 6/6 | 5/7 | 6/5 |
| 7 | 7/7 | 6/7 | 7/6 |

### Deste Kuralları
- **20 kart** per deste
- Aynı kartten **maksimum 2 adet**
- Deste kurulurken **1 element** seçilir
- (İleri aşama: çoklu element desteleri)

---

## 6. Keyword Sistemi

### ⚡ Hız (Swift)
- Yerleştirildiği turda saldırabilir
- Normal yaratıklar bir sonraki turda saldırabilir
- **Kullanım:** Agresif hamleler, lider öldürme

### 🛡️ Taş Derisi (Armor)
- Aldığı ilk hasar 1 azaltılır (minimum 0)
- Sadece bir kez aktive olur
- **Kullanım:** Ucuz yaratıkları dayanıklı yapar

### ☠️ Zehir (Poison)
- Bu yaratık bir hedefe saldırınca hedef **zehirlenir**
- Zehirlenen yaratık her tur başında 1 hasar alır
- **Kullanım:** Yüksek HP'li düşmanları yıpratır

### 💥 Sıçrama (Splash)
- Düşman yaratığa saldırınca düşman liderine de 1 hasar verir
- Doğrudan lider saldırısında aktive olmaz
- **Kullanım:** Hem temizlik hem lider hasarı

### 🔄 Yeniden Doğuş (Reborn)
- HP 0'a düştüğünde **bir kez** 1 HP ile geri döner
- İkinci ölümde normal şekilde yok olur
- **Kullanım:** Alan tutma, değerli yaratıkları koruma

### 👻 Sessiz (Stealth)
- Yerleştirildiği turda **hedef alınamaz**
- Saldırınca veya bir sonraki turda stealth kalkar
- **Kullanım:** Güvenli yerleşim, baskı kurma

---

## 7. Yapay Zeka

### Zorluk Seviyeleri

#### 🟢 Kolay (Çaylak)
- Elindeki en ucuz kartı oynar
- Rastgele saldırır
- Strateji yoktur

#### 🟡 Normal (Savaşçı)
- Öncelik karar ağacı kullanır
- Mana verimliliğine dikkat eder
- **Saldırı önceliği:**
  1. Lider öldürme hamlesi varsa → liderine saldır
  2. Ölümsüz takas (ben ölmem, o ölür) → takas
  3. En yüksek ATK'lı tehdidi hedef al
  4. Yaratık yoksa → liderine saldır

#### 🔴 Zor (Efendi) — ileride eklenecek
- Element avantajını aktif olarak kullanır
- Keyword sinerjilerini değerlendirir
- Spell zamanlamasını optimize eder

### AI Deste Seçimi
Her element için önceden hazırlanmış AI destesi bulunur. AI her oyunda **rastgele** bir element seçer. (İleride: Oyuncu elementine karşı avantajlı AI destesi seçebilir)

### AI Tur Yapısı
```
1. Kart Çek
2. Kart Oyna:
   a. Önce alan temizleme büyüleri (alan yaratıkla doluysa)
   b. Sonra taş derisi büyüleri (HP düşükse)
   c. En pahalı yaratıkları oyna (mana verimliliği)
   d. Hedefli büyüler (en yüksek HP'li düşmana)
3. Saldır (öncelik sırası yukarıda)
4. Turu Bitir
```

---

## 8. Deste Kurma

### Arayüz Akışı
```
Ana Menü → Deste Kurucu
    │
    ├─ Element Seç (5 buton)
    │       ↓
    ├─ Kart Havuzu (sol panel)
    │   - Seçili elementin tüm kartları
    │   - Tür filtresi (Yaratık / Büyü)
    │   - Keyword filtresi
    │       ↓
    ├─ Aktif Deste (sağ panel)
    │   - 20 slot
    │   - Kart sayacı
    │   - Ortalama mana göstergesi
    │       ↓
    └─ Kaydet & Oynat
```

### Deste İstatistikleri (UI'da gösterilecek)
- Ortalama mana maliyeti
- Yaratık / Büyü dağılımı
- Keyword sayıları

### Kayıt Sistemi
- Deste JSON olarak kaydedilir
- Birden fazla deste saklanabilir (ileride)
- Steam Cloud senkronizasyonu

---

## 9. Kullanıcı Arayüzü

### Ekranlar
| Ekran | İçerik |
|---|---|
| **Ana Menü** | Oyna, Deste Kurma, Ayarlar, Çıkış |
| **Element Seçimi** | 5 klan kartı, açıklama metni |
| **Oyun Tahtası** | Ana oyun alanı |
| **Deste Kurma** | Kart havuzu + aktif deste |
| **Duraklatma** | Devam, Ana Menü, Çıkış |
| **Oyun Sonu** | Sonuç, istatistikler, yeniden oyna |

### Oyun Tahtası UI Elemanları
- **AI Leader HP Bar** — üst panel
- **AI El Göstergesi** — yüzü kapalı kart sayısı
- **AI Alan** — 5 slot
- **Oyuncu Alanı** — 5 slot
- **Mana Kristalleri** — 10 kristal göstergesi
- **Oyuncu Eli** — görünür kartlar
- **Oyuncu Leader HP Bar** — alt panel
- **Tur Bitir Butonu** — belirgin, erişilebilir
- **Durum Mesajı** — "Hedef seç", "Yeterli mana yok" vb.
- **Oyun Logu** — son 10–15 olay

### UX Prensipleri
- Tek tıkla aksiyon (çift tıklamaya gerek yok)
- Geçersiz hamleler için görsel + metin geri bildirimi
- AI turları arasında kısa animasyon gecikmesi (0.5s)
- Renk körü dostu ikonlar (sadece renge dayanmama)

---

## 10. Görsel Stil

### Genel Estetik
- **Tarz:** El çizimi, fantezi
- **Renk paleti:** Koyu arka plan, element renklerine göre vurgular
- **Kart çerçeveleri:** Her element için özel çerçeve tasarımı
- **Arka planlar:** Klan yurtlarını yansıtan savaş alanı ortamları

### Element Renk Kodları
| Element | Ana Renk | Hex |
|---|---|---|
| 🔥 Ateş | Kırmızı | `#e74c3c` |
| ❄️ Buz | Mavi | `#3498db` |
| 🌿 Doğa | Yeşil | `#27ae60` |
| 🪨 Taş | Kahve | `#8d6748` |
| 👁️ Gölge | Mor | `#9b59b6` |

### Kart Artwork Kılavuzu
Kart artwork'leri aşağıdaki standartta çizilecektir:
- **Boyut:** 400 × 320 px (kart çerçevesine uygun)
- **Format:** PNG (şeffaf arka plan)
- **Stil:** Dijital çizim, oyunun genel tarzıyla tutarlı
- **İçerik:** Kart adını ve keyword'ü yansıtan sahne / karakter

### Çizilecek Asset Listesi
| Asset | Adet |
|---|---|
| Kart artwork'leri | 55 (yaratık + büyü) |
| Klan lider görselleri | 5 |
| Oyun tahtası arka planları | 5 (her element için) |
| Ana menü arka planı | 1 |
| UI ikonları | ~20 |
| Kart çerçeveleri | 5 element × 2 tür = 10 |

---

## 11. Ses Tasarımı

### Müzik
| Sahne | Müzik Tarzı |
|---|---|
| Ana Menü | Epik, orkestral fantezi |
| Oyun — Ateş | Agresif, tempolu |
| Oyun — Buz | Soğuk, mistik |
| Oyun — Doğa | Organik, ritmik |
| Oyun — Taş | Ağır, devasa |
| Oyun — Gölge | Karanlık, gerilimli |
| Zafer | Kısa fanfare |
| Yenilgi | Dramatik iniş |

### Ses Efektleri
| Eylem | SFX |
|---|---|
| Kart çekme | Kağıt sesi |
| Kart yerleştirme | Element'e özgü ses |
| Saldırı | Çarpışma + element sesi |
| Yaratık ölümü | Yok olma sesi |
| Büyü kullanma | Sihirli ses |
| Zafer | Klan'a özgü ses |
| Yenilgi | Derin vuruntu |

> Ses kaynağı: Freesound.org veya Pixabay (lisanssız), ya da özgün üretim.

---

## 12. Teknik Mimari

### Unity Proje Yapısı
```
Assets/
└── _Project/
    ├── Scripts/
    │   ├── Core/
    │   │   ├── GameManager.cs        ← Singleton, oyun state
    │   │   ├── TurnManager.cs        ← Tur döngüsü
    │   │   ├── CardDatabase.cs       ← Tüm kart verisi
    │   │   └── EventBus.cs           ← Olay sistemi
    │   ├── Cards/
    │   │   ├── CardData.cs           ← ScriptableObject
    │   │   ├── CardVisual.cs         ← Görsel güncelleme
    │   │   ├── CardDragHandler.cs    ← Drag & Drop
    │   │   └── CardEffectHandler.cs  ← Keyword efektleri
    │   ├── Gameplay/
    │   │   ├── BoardManager.cs       ← Alan yönetimi
    │   │   ├── BattleCalculator.cs   ← Hasar hesaplama
    │   │   ├── DeckManager.cs        ← Deste / çekme
    │   │   └── HandManager.cs        ← El yönetimi
    │   ├── AI/
    │   │   ├── AIController.cs       ← AI tur yönetimi
    │   │   └── AIDecisionMaker.cs    ← Karar ağacı
    │   ├── UI/
    │   │   ├── UIManager.cs          ← UI güncellemeleri
    │   │   ├── DeckBuilderUI.cs      ← Deste kurma
    │   │   └── CardTooltip.cs        ← Kart detay popup
    │   └── Steam/
    │       └── SteamManager.cs       ← Steamworks.NET
    ├── ScriptableObjects/
    │   ├── Cards/                    ← Her kart için .asset
    │   └── Decks/                    ← AI desteleri
    ├── Prefabs/
    │   ├── Cards/
    │   └── UI/
    ├── Art/                          ← Çizimler buraya
    ├── Audio/
    └── Scenes/
        ├── MainMenu.unity
        ├── DeckBuilder.unity
        ├── GameBoard.unity
        └── GameOver.unity
```

### Kullanılan Araçlar & Paketler
| Araç | Kullanım | Kaynak |
|---|---|---|
| Unity 2022 LTS | Oyun motoru | unity.com |
| TextMeshPro | UI metinleri | Unity Package Manager |
| DOTween | Animasyonlar | Asset Store (ücretsiz) |
| Steamworks.NET | Steam entegrasyonu | GitHub |

### CardData ScriptableObject
```csharp
[CreateAssetMenu(menuName = "DragonClash/Card")]
public class CardData : ScriptableObject {
    public string cardName;
    public CardType cardType;       // Creature, Spell
    public ElementType element;     // Fire, Ice, Nature, Stone, Shadow
    public int manaCost;
    public Sprite artwork;
    [TextArea] public string description;

    // Creature fields
    public int attackPower;
    public int hitPoints;
    public KeywordType keyword;

    // Spell fields
    public EffectType effectType;   // DamageOne, DamageAll, HealLeader, Draw, PoisonAll
    public int effectValue;
}
```

---

## 13. Kampanya & İlerleme

### Kampanya Yapısı
5 AI rakibine sırayla karşı gelinen bir kampanya:

```
Ana Menü → Klan Seç → Kampanya
│
├─ Rakip 1: Çaylak AI (herhangi element)
├─ Rakip 2: Normal AI (avantajsız element)
├─ Rakip 3: Normal AI (nötr element)
├─ Rakip 4: Normal AI (avantajlı element)
└─ Rakip 5: Zor AI — Final Boss
       ↓
    Zafer Ekranı
```

### Steam Achievements
| Achievement | Koşul |
|---|---|
| 🏆 **İlk Zafer** | İlk oyunu kazan |
| 🌍 **Klan Şampiyonu** | Her elementten 1 oyun kazan |
| ⚡ **Fırtına Gibi** | 5 turda oyun kazan |
| 🛡️ **Dokunulmaz** | Hiç hasar almadan kazan |
| 🐉 **Ejder Ustası** | 50 oyun oyna |
| 👑 **Realm'in Hakimi** | Kampanyayı tamamla |

---

## 14. Steam & Yayın

### Yayın Süreci
1. **store.steampowered.com/steamdirect** → $100 başvuru ücreti
2. Steamworks App ID al
3. Store sayfasını hazırla:
   - Türkçe + İngilizce açıklama
   - Minimum 5 ekran görüntüsü
   - Kapsül görseller (616×353, 231×87, 460×215 px)
4. SteamPipe ile build yükle
5. Review sürecini bekle (~3–5 iş günü)
6. Fiyatlandırma belirle ve yayınla

### Steamworks Özellikleri
- ✅ Steam Achievements (6 adet)
- ✅ Steam Cloud (deste kayıtları)
- ⬜ Steam Trading Cards (ileride)
- ⬜ Workshop desteği (ileride)

---

## 15. Kart Kataloğu

### 🔥 Ateş Klanı

#### Yaratıklar
| İsim | Mana | ATK | HP | Keyword |
|---|---|---|---|---|
| Ateş Yavrusu | 1 | 1 | 2 | — |
| Lav Koruması | 2 | 2 | 2 | Taş Derisi |
| Magma Sürüngeni | 3 | 4 | 2 | Hız |
| Alev Ejderi | 4 | 4 | 4 | Sıçrama |
| Kor Devri | 5 | 5 | 5 | — |
| Kadim Alev | 6 | 6 | 5 | Yeniden Doğuş |
| Ateş Lordu | 7 | 7 | 6 | Hız |
| Volkan Ruhu | 5 | 3 | 7 | Taş Derisi |

#### Büyüler
| İsim | Mana | Efekt |
|---|---|---|
| Ateş Seli | 2 | Tüm düşmanlara 2 hasar |
| Alevli Nefes | 3 | Bir hedefe 5 hasar |
| Yanardağ Patlaması | 5 | Tüm düşmanlara 4 hasar |

---

### ❄️ Buz Klanı

#### Yaratıklar
| İsim | Mana | ATK | HP | Keyword |
|---|---|---|---|---|
| Buz Yavrusu | 1 | 1 | 3 | — |
| Kristal Zırh | 2 | 1 | 4 | Taş Derisi |
| Buz Ruhu | 3 | 3 | 3 | Sessiz |
| Dondurucu Varlık | 4 | 3 | 5 | Taş Derisi |
| Fırtına Ejderi | 5 | 4 | 5 | — |
| Buzul Canavar | 6 | 5 | 6 | Yeniden Doğuş |
| Buz Lordu | 7 | 6 | 7 | Taş Derisi |
| Buz Ejderi | 5 | 5 | 4 | — |

#### Büyüler
| İsim | Mana | Efekt |
|---|---|---|
| Buz Kılıcı | 2 | Bir hedefe 3 hasar |
| Dondurma | 3 | Bir hedefe 4 hasar |
| Fırtına Çağrısı | 4 | 2 kart çek |

---

### 🌿 Doğa Klanı

#### Yaratıklar
| İsim | Mana | ATK | HP | Keyword |
|---|---|---|---|---|
| Orman Yavrusu | 1 | 1 | 2 | — |
| Zehirli Ejder | 2 | 2 | 2 | Zehir |
| Orman Bekçisi | 3 | 2 | 5 | — |
| Zehir Ejderhası | 4 | 4 | 4 | Zehir |
| Doğa Koruyucusu | 5 | 4 | 5 | Yeniden Doğuş |
| Kadim Ağaç | 6 | 4 | 7 | Taş Derisi |
| Doğa Lordu | 7 | 5 | 8 | Yeniden Doğuş |
| Zehir Bulutu | 4 | 3 | 3 | Zehir |

#### Büyüler
| İsim | Mana | Efekt |
|---|---|---|
| Doğa Şifası | 2 | Lider 4 HP kazanır |
| Zehir Bulutu | 3 | Tüm düşmanlar zehirlenir |
| Doğanın Armağanı | 4 | 2 kart çek |

---

### 🪨 Taş Klanı

#### Yaratıklar
| İsim | Mana | ATK | HP | Keyword |
|---|---|---|---|---|
| Taş Yavrusu | 1 | 2 | 1 | — |
| Kaya Zırhı | 2 | 2 | 4 | Taş Derisi |
| Granit Golem | 3 | 2 | 6 | Taş Derisi |
| Kale Muhafızı | 4 | 3 | 7 | Taş Derisi |
| Dağ Devi | 5 | 4 | 7 | — |
| Taş Ejderhası | 6 | 5 | 7 | Taş Derisi |
| Taş Lordu | 7 | 6 | 8 | Taş Derisi |
| Kaya Ruhu | 4 | 3 | 6 | Yeniden Doğuş |

#### Büyüler
| İsim | Mana | Efekt |
|---|---|---|
| Kaya Yağmuru | 2 | Tüm düşmanlara 2 hasar |
| Granit Kalkan | 3 | Lider 5 HP kazanır |
| Deprem | 5 | Tüm düşmanlara 4 hasar |

---

### 👁️ Gölge Klanı

#### Yaratıklar
| İsim | Mana | ATK | HP | Keyword |
|---|---|---|---|---|
| Gölge Sızan | 1 | 2 | 1 | Sessiz |
| Karanlık Fısıltı | 2 | 3 | 1 | Sessiz |
| Gölge Suikastçısı | 3 | 4 | 2 | Hız |
| Ruh Emici | 4 | 3 | 4 | Zehir |
| Gölge Ejderi | 5 | 5 | 4 | Sessiz |
| Karanlık Varlık | 6 | 6 | 4 | Yeniden Doğuş |
| Gölge Lordu | 7 | 7 | 5 | Hız |
| Lanet Ejderhası | 5 | 4 | 4 | Zehir |

#### Büyüler
| İsim | Mana | Efekt |
|---|---|---|
| Karanlık Darbe | 2 | Bir hedefe 4 hasar |
| Lanet | 3 | Tüm düşmanlar zehirlenir |
| Karanlık Enerji | 4 | 3 kart çek |

---

## Versiyon Geçmişi

| Versiyon | Tarih | Değişiklikler |
|---|---|---|
| 0.1 | Mayıs 2026 | İlk taslak — oyun tasarımı + web prototipi |

---

*Bu doküman oyun geliştirildikçe güncellenecektir.*

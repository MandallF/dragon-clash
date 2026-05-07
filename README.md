# 🐉 Dragon Clash: Realm of Scales

Beş ejderha klanının tahakküm savaşı. Klanını seç, desteni kur, rakibini ez.

> **Durum:** Web prototipi oynanabilir — Unity geliştirmesi devam ediyor.

---

## 🎮 Hızlı Başlangıç (Web Prototipi)

```
prototype/index.html
```
dosyasını tarayıcıda aç, bir element seç ve oyna. Kurulum gerektirmez.

---

## ⚔️ Oyun Hakkında

| | |
|---|---|
| **Tür** | Savaş kart oyunu (tek oyunculu) |
| **Platform** | PC (Steam) — Unity ile geliştirilecek |
| **Rakip** | Yapay zeka |
| **Süre** | 5–10 dakika / oyun |

### Nasıl Oynanır?
1. **Element seç** → 5 klan arasından birini seç
2. **Yaratık oyna** → Elindeki kartı boş bir alana yerleştir
3. **Büyü kullan** → Anlık hasar, şifa veya kart çekme
4. **Saldır** → Yaratığını seç → düşman yaratığa veya liderine saldır
5. **Kazan** → Düşman liderini 0 HP'ye düşür

---

## 🔥 5 Element Sistemi

| Element | Stil | Güçlü Olduğu |
|---|---|---|
| 🔥 Ateş | Hızlı & agresif | 🌿 Doğa |
| ❄️ Buz | Kontrol & dayanıklılık | 🔥 Ateş |
| 🌿 Doğa | Zehir & şifa | 🪨 Taş |
| 🪨 Taş | Zırh & savunma | ❄️ Buz |
| 👁️ Gölge | Gizlilik & baskı | — (nötr) |

> Element avantajı: Saldırıya **+1 ATK** bonus kazandırır.

---

## 🃏 Kart Sistemi

**60 kart** — her element için 8 yaratık + 3 büyü

### Kart Türleri
| Tür | Açıklama |
|---|---|
| **Yaratık** | ATK ve HP değeri olan, alanda kalan kartlar |
| **Büyü** | Anlık etki yapıp mezara giden kartlar |

### 6 Keyword
| Keyword | Etki |
|---|---|
| ⚡ **Hız** | Oynanır oynanmaz aynı turda saldırabilir |
| 🛡️ **Taş Derisi** | İlk aldığı hasar 1 azalır |
| ☠️ **Zehir** | Saldırdığı yaratık her tur 1 hasar alır |
| 💥 **Sıçrama** | Saldırı hasarı düşman liderine de 1 sıçrar |
| 🔄 **Yeniden Doğuş** | Öldüğünde bir kez 1 HP ile geri döner |
| 👻 **Sessiz** | Yerleştirildiği turda saldırılamaz |

---

## 🏗️ Proje Yapısı

```
DragonClash/
├── prototype/          # Oynanabilir web prototipi (HTML/CSS/JS)
│   ├── index.html
│   ├── style.css
│   └── game.js
└── Assets/             # Unity projesi (geliştirme aşamasında)
    └── _Project/
        ├── Scripts/
        ├── ScriptableObjects/
        ├── Art/          ← Kullanıcının dijital çizimleri buraya gelecek
        └── Scenes/
```

---

## 🗺️ Geliştirme Yol Haritası

- [x] Oyun tasarımı & mekanik kararlar
- [x] Web prototipi (oynanabilir)
- [ ] Denge testleri & ayarları
- [ ] Kart artwork'leri (dijital çizim)
- [ ] Unity M1 — Temel veri yapıları
- [ ] Unity M2 — Deste/el/mana sistemi
- [ ] Unity M3 — Savaş sistemi
- [ ] Unity M4 — AI rakip
- [ ] Unity M5 — Tüm 60 kart
- [ ] Unity M6 — Deste kurma ekranı
- [ ] Unity M7 — Artwork entegrasyonu
- [ ] Unity M8 — Ana menü & kampanya
- [ ] Unity M9 — Steam entegrasyonu
- [ ] Unity M10 — Test & yayın

---

## 🛠️ Teknolojiler

| Aşama | Teknoloji |
|---|---|
| Prototip | HTML / CSS / JavaScript |
| Oyun motoru | Unity (C#) |
| Platform | Steam (PC) |
| Steam SDK | Steamworks.NET |
| Animasyon | DOTween |

---

## 🎨 Sanatçı Notu

Tüm kart artwork'leri ve oyun görsellerini kendim dijital olarak çizeceğim. Şu an prototipta placeholder emoji kullandım. Oyunun ana fikirleri oluşturması için.

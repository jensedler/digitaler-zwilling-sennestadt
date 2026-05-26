# Digitaler Zwilling Sennestadt

> **"Sennestadt, wie es Dir gefällt!"**

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://jensedler.github.io/digitaler-zwilling-sennestadt/)

Eine statische Website für das partizipative Smart-City-Projekt **Digitaler Zwilling Sennestadt** in Bielefeld.

**🌐 Live:** https://jensedler.github.io/digitaler-zwilling-sennestadt/

---

## Über das Projekt

Der Digitale Zwilling Sennestadt ist ein stadtentwicklerisches Partizipationsprojekt im Bielefelder Stadtteil Sennestadt. Bürgerinnen und Bürger können aktiv mitgestalten, wie ihr Stadtteil sich entwickelt – unterstützt durch digitale Werkzeuge und eine interaktive Karte.

Das Projekt wird vom Open Innovation City (OIC) Bielefeld koordiniert.  
Kontakt: Tatjana Dzepina | Newsletter: https://oic-bielefeld.de/#newsletter

---

## Technologie

Diese Website ist bewusst einfach gehalten:

- **HTML5 + CSS3 + Vanilla JavaScript** – kein Framework, kein Build-Schritt
- **GitHub Pages** für Hosting (Branch: `main`, Root-Verzeichnis)
- **Google Fonts** – Inter
- Alle Medien sind aktuell **Platzhalter** (echte Bilder/Videos werden ergänzt)

---

## Dateistruktur

```
digitaler-zwilling-sennestadt/
├── index.html                             # Startseite
├── README.md                              # Diese Datei
├── AI_CONTEXT.md                          # Dokumentation für KI-Assistenten
├── assets/
│   ├── css/
│   │   └── main.css                       # Komplettes Design-System
│   └── js/
│       └── main.js                        # Interaktivität
└── projekte/
    └── spielplatz-schillinggelaende.html  # Template für Anwendungsfall-Seiten
```

---

## Seiten

| Seite | URL | Status |
|-------|-----|--------|
| Startseite | `/` | ✅ Live |
| AF1: Spielplatz Schillinggelände | `/projekte/spielplatz-schillinggelaende.html` | ✅ Template fertig |
| AF2: Städtebauliche Entwicklung | `/projekte/staedtebauliche-entwicklung.html` | 🔲 Noch nicht erstellt |
| AF3: Citizen Science | `/projekte/citizen-science.html` | 🔲 Noch nicht erstellt |
| AF4: Transformation Energiewirtschaft | `/projekte/transformation-energiewirtschaft.html` | 🔲 Noch nicht erstellt |
| Impressum | `/impressum.html` | 🔲 Noch nicht erstellt |
| Datenschutz | `/datenschutz.html` | 🔲 Noch nicht erstellt |

---

## Offene Aufgaben

- [ ] Echte Bilder und Videos einbinden (ersetze `.placeholder-img`-Divs)
- [ ] Kartenanwendung in `#karte`-Sektion einbetten (Platzhalter-Div ersetzen)
- [ ] Anwendungsfall-Seiten AF2–AF4 aus Template ableiten
- [ ] Impressum, Datenschutz, Kontakt, Barrierefreiheit erstellen
- [ ] Custom Domain einrichten (CNAME-Datei + DNS + GitHub Pages Einstellung)
- [ ] Favicon erstellen
- [ ] Open Graph / Social Media Meta-Tags ergänzen

---

## Neue Anwendungsfall-Seite erstellen

1. `projekte/spielplatz-schillinggelaende.html` kopieren
2. Umbenennen (z. B. `projekte/staedtebauliche-entwicklung.html`)
3. Inhalte anpassen: Titel, AF-Nummer, Status-Badge, Text, Bilder
4. In `index.html` den `href` der Projektkarte aktualisieren (von `#` auf den Pfad)

---

## Design

| Variable | Wert | Verwendung |
|----------|------|------------|
| `--color-bg-deep` | `#1a0a2e` | Haupthintergrund |
| `--color-bg-card` | `#2d1250` | Karten |
| `--color-accent` | `#c026d3` | CTA-Buttons, Hervorhebungen |
| `--color-text` | `#ffffff` | Fließtext |

---

## Figma-Vorlage

Der ursprüngliche Entwurf:  
https://www.figma.com/proto/UDyiYWuERcnjAwsq6Zbuhx/Twintopia?node-id=434-2382&scaling=scale-down-width

> Hinweis: Der Figma-Projektname lautet intern "Twintopia". Der offizielle Projektname ist **Digitaler Zwilling Sennestadt**.  
> Der Bielefeld-Stadtportal-Header aus dem Figma-Entwurf wird in dieser Implementierung **nicht** verwendet.

---

## Für KI-Assistenten

Für eine vollständige technische Dokumentation (Dateistruktur, Design-System, offene Aufgaben, Tipps für den GitHub Web Editor) siehe **[AI_CONTEXT.md](./AI_CONTEXT.md)**.

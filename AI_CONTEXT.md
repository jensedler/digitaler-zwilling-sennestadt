# AI_CONTEXT.md – Digitaler Zwilling Sennestadt

> **Für KI-Assistenten:** Diese Datei enthält alle notwendigen Informationen, um an diesem Projekt weiterzuarbeiten. Bitte lies sie vollständig, bevor du Änderungen vornimmst.

---

## 1. Projektübersicht

**Name:** Digitaler Zwilling Sennestadt  
**Slogan:** "Sennestadt, wie es Dir gefällt!"  
**Repository:** https://github.com/jensedler/digitaler-zwilling-sennestadt  
**Live-URL:** https://jensedler.github.io/digitaler-zwilling-sennestadt/  
**Figma-Prototype:** https://www.figma.com/proto/UDyiYWuERcnjAwsq6Zbuhx/Twintopia?node-id=434-2382&scaling=scale-down-width&content-scaling=fixed&page-id=434%3A2283&starting-point-node-id=434%3A2382&show-proto-sidebar=1  
**Auftraggeber-Kontakt:** Tatjana Dzepina (OIC Bielefeld)  
**Newsletter-Link:** https://oic-bielefeld.de/#newsletter

Das Projekt ist eine statische Website für das partizipative Smart-City-Projekt "Digitaler Zwilling Sennestadt" in Bielefeld. Die Seite wird über GitHub Pages gehostet und soll später unter einer eigenen Domain erreichbar sein.

---

## 2. Technischer Stack

- **HTML5** – semantisches Markup, kein Framework
- **CSS3** – custom properties (CSS-Variablen), Flexbox, Grid; eine einzige Datei: `assets/css/main.css`
- **Vanilla JavaScript** – eine einzige Datei: `assets/js/main.js`
- **Google Fonts** – Inter (400, 700, 900)
- **Keine Build-Pipeline** – alle Dateien sind direkt einsetzbar
- **Hosting:** GitHub Pages, Branch `main`, Root-Verzeichnis `/(root)`

---

## 3. Dateistruktur

```
digitaler-zwilling-sennestadt/
├── index.html                          # Startseite (Hauptseite)
├── README.md                           # Projektdokumentation
├── AI_CONTEXT.md                       # Diese Datei
├── assets/
│   ├── css/
│   │   └── main.css                    # Komplettes Design-System
│   └── js/
│       └── main.js                     # Interaktivität (Carousel, Gallery, Nav)
└── projekte/
    └── spielplatz-schillinggelaende.html  # Template für Anwendungsfall-Seiten
```

---

## 4. Design-System (Farben, Typografie)

### CSS-Variablen (definiert in `assets/css/main.css` unter `:root`)

```css
--color-bg-deep:    #1a0a2e   /* Haupthintergrund dunkelviolett */
--color-bg-dark:    #120820   /* Noch dunklerer Hintergrund */
--color-bg-card:    #2d1250   /* Kartenabschnitte */
--color-accent:     #c026d3   /* Magenta/Lila – CTA-Farbe */
--color-accent-2:   #9333ea   /* Sekundärakzent violett */
--color-text:       #ffffff   /* Haupttext */
--color-text-muted: rgba(255,255,255,0.7)  /* Gedämpfter Text */
--color-border:     rgba(255,255,255,0.1)  /* Subtile Trennlinien */
```

### Typografie
- **Font-Family:** Inter (Google Fonts)
- **Überschriften (h1):** 900 weight, sehr groß (clamp-basiert)
- **Fließtext:** 400 weight, 1rem–1.125rem
- **Buttons:** 700 weight, uppercase

### Komponenten-Klassen (Auswahl)
| Klasse | Verwendung |
|--------|-----------|
| `.btn--primary` | Magenta-Button (CTA) |
| `.btn--outline` | Transparenter Button mit Border |
| `.card` | Karte mit Rundungen und Hintergrund `--color-bg-card` |
| `.badge` | Status-Badge (z.B. "Abgeschlossen", "In Arbeit") |
| `.badge--green` | Grüner Status-Badge |
| `.badge--orange` | Oranger Status-Badge |
| `.placeholder-img` | Platzhalterbild mit Gradient |
| `.section-title` | Abschnittsüberschrift mit Akzentfarbe |

---

## 5. Seitenstruktur: index.html (Startseite)

Die Startseite besteht aus folgenden Abschnitten (in Reihenfolge):

1. **`<header>` / `.navbar`** – Sticky Navigation mit Logo, Links (Projekt, Ziele, Phasen, Karte, Anwendungsfälle) und "Mitmachen"-CTA-Button. Hamburger-Menü für Mobile.

2. **`#hero`** – Fullscreen-Hero mit Hintergrundbild-Platzhalter und dem Slogan "Sennestadt, wie es Dir gefällt!"

3. **`#projekt` – "Ein Stadtlabor zum Mitmachen"** – Einleitungstext mit einem Bild-Platzhalter

4. **"Was zum Kuckuck ist ein Digitaler Zwilling?"** – Erklärungssektion (zweispaltig: Text + Bild)

5. **"Warum die Sennestadt?"** – Kurzer Infotext

6. **`#ziele`** – 4 Ziel-Karten:
   - Mehr Transparenz
   - Einfacher Zugang
   - Effiziente Abstimmung
   - Nachhaltige Lösungen

7. **`#phasen`** – "Wie läuft das Projekt ab?" – 4-Phasen-Timeline (Phase 3 = aktuelle Phase, hervorgehoben)
   - Phase 1: Grundlagenforschung (abgeschlossen)
   - Phase 2: Aufbau des digitalen Zwillings (abgeschlossen)
   - Phase 3: Pilotprojekte & Bürgerbeteiligung (aktuell – hervorgehoben)
   - Phase 4: Evaluation & Verstetigung

8. **`#karte`** – Kartenabschnitt mit `.karte__placeholder` div. **Hier wird später die externe Kartenanwendung per JS/HTML eingebettet.**

9. **`#projekte`** – "Entdecke die Projekte!" – Karussell mit 4 Projektkarten:
   - AF1: Spielplatz Schillinggelände (Abgeschlossen) → `/projekte/spielplatz-schillinggelaende.html`
   - AF2: Städtebauliche Entwicklung der Sennestadt (In Arbeit) → `#` (Seite noch nicht erstellt)
   - AF3: Citizen Science (Geplant) → `#` (Seite noch nicht erstellt)
   - AF4: Transformation Energiewirtschaft (Geplant) → `#` (Seite noch nicht erstellt)

10. **`#mitmachen`** – "Mach mit!" – Kontaktsektion mit Karte für Tatjana Dzepina + Newsletter-Link

11. **Tagline-Sektion** – Animierter Slogan

12. **`<footer>`** – Links: Impressum, Datenschutz, Kontakt, Barrierefreiheit (alle auf `#` – noch nicht erstellt)

---

## 6. Seitenstruktur: projekte/spielplatz-schillinggelaende.html

Diese Seite dient als **Template für alle Anwendungsfall-Seiten**. Beim Erstellen neuer Seiten einfach kopieren und Inhalte anpassen.

Abschnitte:
1. **Gleiche `<header>` / Navbar** wie Startseite (relativer Pfad `../assets/` beachten!)
2. **Hero** – mit Titel des Projekts
3. **Info-Karte** – Anwendungsfall-Nr., Titel, Status-Badge, Beschreibungstext
4. **Bildergalerie** – 3 Platzhalterbilder (Grid, erstes Bild groß)
5. **Zwei Karten nebeneinander:** Schwerpunkte + Meilensteine
6. **Kartenabschnitt** – Platzhalter für Karte (wie auf Startseite)
7. **Gleicher `<footer>`**

**Pfadkonvention für Unterseiten:** Alle Asset-Pfade sind relativ mit `../`-Präfix:
```html
<link rel="stylesheet" href="../assets/css/main.css">
<script src="../assets/js/main.js"></script>
```

---

## 7. JavaScript-Funktionalität (assets/js/main.js)

- **Carousel (`.carousel`):** Vorwärts/Rückwärts-Navigation, Touch-Unterstützung
- **Bildgalerie (`.galerie`):** Klick auf kleines Bild → wird groß dargestellt
- **Mobile Navigation:** Hamburger-Button öffnet/schließt Menü
- **Smooth Scroll:** Alle Anker-Links scrollen sanft

---

## 8. Offene Aufgaben (TODO)

### Inhalt
- [ ] Echte Bilder/Videos einbinden (Platzhalter durch reale Medien ersetzen)
  - Hero-Bild: Luftaufnahme oder atmosphärisches Foto der Sennestadt
  - Projekt-Bilder: Fotos der Anwendungsfälle
- [ ] Texte finalisieren (aktuell Platzhaltertexte aus Figma-Vorlage)
- [ ] Kontaktdaten von Tatjana Dzepina ergänzen (E-Mail, Telefon)

### Neue Seiten erstellen
- [ ] `projekte/staedtebauliche-entwicklung.html` (AF2 – aus Template ableiten)
- [ ] `projekte/citizen-science.html` (AF3 – aus Template ableiten)
- [ ] `projekte/transformation-energiewirtschaft.html` (AF4 – aus Template ableiten)
- [ ] `impressum.html`
- [ ] `datenschutz.html`
- [ ] `kontakt.html`
- [ ] `barrierefreiheit.html`

### Technisch
- [ ] Kartenintegration: `.karte__placeholder` in `index.html` (und ggf. in Projektseiten) durch echte Kartenanwendung ersetzen
- [ ] Custom Domain: CNAME-Datei im Repo-Root + DNS-Konfiguration + GitHub Pages Einstellung
- [ ] Favicon erstellen und einbinden (`<link rel="icon">`)
- [ ] Open Graph / Meta-Tags für Social Media
- [ ] Analytics (falls gewünscht)

### Wenn neue Anwendungsfall-Seiten (AF2–AF4) erstellt werden:
1. `projekte/spielplatz-schillinggelaende.html` kopieren
2. Datei umbenennen (z.B. `staedtebauliche-entwicklung.html`)
3. Inhalte ersetzen: Titel, AF-Nummer, Status-Badge, Beschreibung, Bilder, Schwerpunkte, Meilensteine
4. In `index.html` den `href` der entsprechenden Projektkarte aktualisieren (von `#` auf den Dateipfad)

---

## 9. Karte einbetten

Im `index.html` gibt es folgenden Platzhalter:
```html
<div class="karte__placeholder">
  <p>KARTENPLATZHALTER – Interaktive Karte wird hier eingebettet</p>
</div>
```

Die Karte wird als separate Anwendung per JS/HTML eingebunden. Mögliche Einbettungsmethoden:
- `<iframe>` mit externer URL
- Direkte JS-Bibliothek (z.B. Mapbox, Leaflet, ArcGIS)
- Custom Web Component

Den Platzhalter durch das tatsächliche Einbettungs-Snippet ersetzen.

---

## 10. GitHub Pages Deployment

- **Branch:** `main`
- **Verzeichnis:** `/(root)`
- **Live-URL:** https://jensedler.github.io/digitaler-zwilling-sennestadt/
- **Deployment:** Automatisch bei jedem Push auf `main`
- **Dauer:** ~30–60 Sekunden nach Commit

### Custom Domain einrichten (wenn bereit)
1. CNAME-Datei im Repo-Root erstellen mit dem Inhalt der gewünschten Domain (z.B. `digitalerzwilling-sennestadt.de`)
2. Beim DNS-Anbieter einen CNAME-Eintrag setzen: `www` → `jensedler.github.io`
3. GitHub Pages Settings → Custom domain → Domain eingeben → Save
4. "Enforce HTTPS" aktivieren (nach DNS-Propagation)

---

## 11. Wichtige Design-Entscheidungen

- **Kein Bielefeld-Header:** Der ursprüngliche Figma-Entwurf enthielt den Bielefeld-Stadtportal-Header (Stadt.Service, Stadt.Gemeinschaft etc.). Dieser wird NICHT verwendet.
- **Eine Anwendungsfall-Seite als Template:** AF1 (Spielplatz Schillinggelände) dient als Vorlage. Die anderen werden bei Bedarf davon abgeleitet.
- **Alle Bilder als Platzhalter:** Gradient-Divs mit der Klasse `.placeholder-img` bis echte Bilder vorliegen.
- **Newsletter extern:** Klick auf "Newsletter" → öffnet https://oic-bielefeld.de/#newsletter in neuem Tab.
- **Keine Dependencies:** Bewusst kein React, Vue, Tailwind etc. – maximale Wartbarkeit ohne Build-Schritt.
- **Figma-Projektname "Twintopia"** ist der interne Arbeitstitel. Der offizielle Name ist immer **"Digitaler Zwilling Sennestadt"**.

---

## 12. Tipps für die Arbeit mit dem GitHub Web Editor

Wenn Dateiinhalte über den GitHub Web Editor (CodeMirror 6) eingefügt werden müssen:

```javascript
// Datei öffnen via: https://github.com/jensedler/digitaler-zwilling-sennestadt/edit/main/[pfad]
// Dann im Browser-Konsole:
const editor = document.querySelector('.cm-content');
editor.focus();
document.execCommand('selectAll');
document.execCommand('insertText', false, DEIN_INHALT);
```

Für den Dateinamen im Editor:
```javascript
// Dateinamen-Input finden und Wert setzen:
const input = document.querySelector('input[aria-label="File name"]');
input.focus();
document.execCommand('selectAll');
document.execCommand('insertText', false, 'neuer/pfad/dateiname.html');
// Tipp: Ein "/" im Namen erstellt automatisch ein Verzeichnis
```

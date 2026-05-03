# Skillseo — Linee guida operative per la progettazione e ottimizzazione di siti web

> Documento di riferimento permanente. Ogni progetto web deve conformarsi a queste regole come baseline minima.
> Aggiornamenti e integrazioni specifiche per progetto vengono aggiunti di volta in volta.

---

## Fonti autorevoli di riferimento

Tutte le regole di questo documento derivano da, o sono allineate a, le seguenti fonti ufficiali:

### GEO — Generative Engine Optimization
| Risorsa | Link |
|---|---|
| GEO: Research Paper originale (arxiv) | https://arxiv.org/abs/2311.09737 |
| Google AI Overviews (SGE) — Documentazione ufficiale | https://developers.google.com/search/blog/2024/05/ai-overviews |
| Perplexity Publishers Program | https://www.perplexity.ai/hub/blog/perplexity-publishers-program |

### SEO — Linee guida ufficiali Google
| Risorsa | Link |
|---|---|
| Google Search Central — SEO Starter Guide | https://developers.google.com/search/docs/fundamentals/seo-starter-guide |
| Contenuti generati dall'AI — Posizione ufficiale Google | https://developers.google.com/search/blog/2023/02/google-search-and-ai-content |
| E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) | https://developers.google.com/search/docs/fundamentals/creating-helpful-content |

### Strumenti e risorse tecniche
| Risorsa | Link |
|---|---|
| Schema.org — Dati strutturati | https://schema.org/ |
| Google Search Console — Documentazione | https://support.google.com/webmasters/answer/9128668 |

---

## 1. Architettura dell'informazione e struttura del sito

### 1.1 Gerarchia delle pagine
*   Definire una struttura a **silo tematico** (topic cluster): ogni macro-argomento ha una Pillar Page collegata a una costellazione di pagine Cluster.
*   La profondità massima di navigazione non deve superare **3 click dalla homepage** a qualsiasi pagina interna.
*   Ogni pagina deve avere un **unico intento di ricerca** chiaramente identificabile (informazionale, transazionale, navigazionale).

### 1.2 URL
*   Slug brevi, parlanti, in minuscolo, separati da trattini: `/servizi/riparazione-caldaie`.
*   Nessun parametro dinamico esposto all'utente nelle URL principali.
*   Nessuna data nell'URL per i contenuti evergreen.

### 1.3 Navigazione
*   Menu principale con massimo **7 voci** di primo livello.
*   **Breadcrumbs** obbligatori su tutte le pagine secondarie e articoli (markup `BreadcrumbList` di Schema.org incluso).
*   Footer strutturato con link a pagine legali, contatti, mappa del sito e link ai principali servizi/categorie.

---

## 2. SEO on-page

### 2.1 Tag Title e H1
*   Un solo tag `<h1>` per pagina, basato sulla keyword principale.
*   Il tag `<title>` deve contenere la keyword principale, il brand e una proposta di valore; lunghezza consigliata **50-60 caratteri**.
*   H1 e `<title>` possono differire leggermente per evitare ridondanza, ma devono condividere la keyword target.

### 2.2 Meta Description
*   Lunghezza: **150-160 caratteri**.
*   Deve contenere la keyword principale e riflettere l'intento di ricerca.
*   Deve includere una CTA implicita o esplicita (es. "Scopri come…", "Richiedi un preventivo…").
*   Ogni pagina deve avere una meta description **unica** — mai duplicata.

### 2.3 Gerarchia dei titoli (H2-H6)
*   I tag `<h2>` strutturano le sezioni principali della pagina.
*   I tag `<h3>` approfondiscono le sotto-sezioni introdotte dagli `<h2>`.
*   Tutti i titoli devono essere in **sentence case** (maiuscola solo a inizio frase e nomi propri).
*   È **severamente vietato** il Title Case (es. NO "Noleggio Auto A Roma").

### 2.4 Posizionamento keyword
*   Keyword primaria presente in: H1, primi 100 caratteri del testo, almeno un H2, URL, meta description, alt text dell'immagine principale.
*   Keyword secondarie e LSI distribuite naturalmente nel corpo del testo.
*   Densità keyword non superiore al **1,5-2%** — il testo deve sempre suonare naturale.

### 2.5 Open Graph e Twitter Card
*   Ogni pagina deve includere i meta tag `og:title`, `og:description`, `og:image`, `og:url`, `og:type`.
*   Ogni pagina deve includere `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`.
*   Le immagini OG devono avere dimensioni minime **1200×630 px**.

---

## 3. GEO — Generative Engine Optimization

### 3.1 Principi fondamentali
Le risposte dei motori di ricerca generativi (Google AI Overviews, Perplexity, ChatGPT Search) privilegiano contenuti che:
*   Forniscono **risposte dirette e sintetiche** nelle prime righe (answering pattern).
*   Sono supportati da **dati strutturati** (Schema.org) che l'AI può leggere in modo univoco.
*   Dimostrano **E-E-A-T** (Esperienza, Competenza, Autorevolezza, Affidabilità).
*   Contengono **citazioni e riferimenti verificabili** (fonti, statistiche, normative).

### 3.2 Strategie GEO operative
*   **Definizioni immediate**: ogni pagina/articolo deve rispondere alla domanda principale entro i primi 2 paragrafi, prima di approfondire.
*   **Citazioni e dati**: includere almeno 2-3 dati quantitativi verificabili per articolo (statistiche, normative, studi).
*   **Linguaggio assertivo**: evitare espressioni vaghe ("potrebbe", "forse"); preferire affermazioni chiare con fonte.
*   **FAQ strutturate**: ogni contenuto deve includere una sezione FAQ con markup `FAQPage` di Schema.org.
*   **Contenuto "citabile"**: formattare punti chiave in elenchi puntati, tabelle e box evidenziati che i motori generativi possano estrarre facilmente.
*   **Freschezza dei contenuti**: mantenere una data di aggiornamento visibile e aggiornare periodicamente i contenuti con nuove informazioni.

### 3.3 E-E-A-T nel contenuto
*   Mostrare **esperienza diretta** (casi studio, foto di lavori svolti, testimonianze reali).
*   Mostrare **competenza** (certificazioni, formazione, conoscenza tecnica dettagliata).
*   Costruire **autorevolezza** (link da fonti esterne, menzioni, partnership).
*   Garantire **affidabilità** (pagine legali complete, HTTPS, dati di contatto verificabili, recensioni autentiche).

---

## 4. Local SEO

### 4.1 Ottimizzazione locale on-page
*   Menzionare la città o la zona target almeno **3-4 volte** nel testo in modo naturale.
*   Integrare punti di interesse locali, quartieri e riferimenti territoriali quando pertinente.
*   Includere indirizzo fisico completo, telefono e orari di apertura nel footer o in una sezione contatti visibile.

### 4.2 Dati strutturati locali
*   Implementare il markup `LocalBusiness` (o sotto-tipo specifico, es. `Plumber`, `Electrician`) di Schema.org.
*   Includere: nome, indirizzo, telefono, orari, coordinate GPS, area servita, immagine, URL Google Maps.

### 4.3 Google Business Profile
*   Verificare la coerenza NAP (Name, Address, Phone) tra sito web e Google Business Profile.
*   Incoraggiare le recensioni e rispondere sempre (positive e negative).

---

## 5. Linking interno

### 5.1 Quantità e distribuzione
*   Almeno **3 link interni** per ogni articolo/pagina.
*   I link devono essere inseriti **naturalmente all'interno dei paragrafi**, mai raggruppati alla fine.

### 5.2 Anchor text
*   Gli anchor text devono essere di **almeno 3-4 parole**, semantici e SEO-oriented.
    *   ✅ "servizio di riparazione caldaie a condensazione"
    *   ❌ "clicca qui", "leggi di più", "questo articolo"
*   Variare gli anchor text per lo stesso link di destinazione (evitare ripetizioni identiche).

### 5.3 Struttura silo / topic cluster
*   Le **Pillar Page** devono linkare tutti gli articoli Cluster di supporto.
*   Gli **articoli Cluster** devono linkare la Pillar Page principale, preferibilmente nei primi paragrafi.
*   Ogni articolo Cluster deve linkare almeno un altro articolo Cluster dello stesso silo.

### 5.4 Link esterni
*   Includere **1-2 link esterni** a fonti autorevoli per articolo (studi, normative, enti ufficiali) per rafforzare l'affidabilità.
*   Usare `rel="noopener"` e `target="_blank"` per i link esterni.

---

## 6. CRO — Conversion Rate Optimization

### 6.1 Box "In breve" (engaging summary)
*   Da inserire **sempre dopo il primo paragrafo** di un articolo.
*   Deve contenere un titolo in grassetto (es. **In breve**) seguito da un riassunto dei punti chiave in elenco puntato.
*   È **vietato** usare tag H3 per il titolo del box — usare `<p><strong>` o un `<div>` con classe dedicata.
*   Stile visivo: sfondo leggermente differenziato, bordo laterale colorato, padding generoso.

### 6.2 CTA (Call to Action)
*   **Frequenza**: almeno **3 CTA per pagina** — una sopra la piega (above the fold), una nel corpo, una finale.
*   **Box CTA finale**: concludere ogni articolo/pagina servizio con un box di conversione che includa:
    *   Un beneficio chiaro per l'utente.
    *   Un pulsante prominente con testo orientato all'azione (es. "Richiedi un preventivo gratuito").
    *   Un elemento di urgenza o esclusività quando appropriato.
*   **CTA contestuali**: inserire CTA nel flusso del testo quando l'utente si trova nel punto di massimo interesse (dopo un elenco di benefici, dopo una FAQ rilevante).
*   **Stile pulsanti CTA**:
    *   Colore contrastante rispetto allo sfondo.
    *   Dimensione minima touch-friendly: **44×44 px**.
    *   Hover effect visibile (cambio colore, ombra o scala).
    *   Testo del pulsante: massimo 5 parole, orientato all'azione.

### 6.3 Social proof e trust signals
*   Mostrare **recensioni reali** (Google, Trustpilot o equivalente) con nome, data e stelline.
*   Mostrare **loghi di certificazioni, partnership o clienti** importanti.
*   Inserire un **contatore di lavori eseguiti, clienti serviti o anni di esperienza** quando disponibile.
*   Posizionare i trust signals vicino alle CTA per massimizzare la conversione.

### 6.4 Tabelle comparative
*   Utilizzare tabelle HTML per confronti tecnici, prezzi o modelli.
*   Le tabelle aumentano l'autorità tecnica del contenuto e sono altamente "citabili" dai motori generativi.
*   Ogni tabella deve avere intestazioni chiare (`<th>`) e dati ben formattati.

### 6.5 Moduli di contatto
*   Campi minimi indispensabili (nome, telefono/email, messaggio) — meno campi = più conversioni.
*   Label chiare e placeholder esplicativi.
*   Messaggio di conferma visibile dopo l'invio.
*   Pulsante di invio con testo orientato al beneficio (es. "Ricevi il tuo preventivo" invece di "Invia").

---

## 7. Coinvolgimento e UX writing

### 7.1 Copywriting umanizzato
*   **Vietato il "tone of voice" da AI**: evitare pattern tipici (frasi introduttive vuote come "Certo!", "Ecco qui", liste troppo simmetriche, conclusioni banali).
*   Variare la **lunghezza delle frasi**: alternare brevi e lunghe.
*   Inserire **domande retoriche** per coinvolgere il lettore.
*   Evitare aggettivi superlativi ripetuti e formule generiche.
*   Usare il **"tu"** per rivolgersi direttamente all'utente.

### 7.2 Leggibilità
*   Paragrafi brevi: massimo **3-4 righe** per paragrafo.
*   Usare **elenchi puntati** per spezzare i muri di testo.
*   Evidenziare i concetti chiave in **grassetto**.
*   Inserire spazi bianchi generosi tra le sezioni.
*   Line-height del testo: almeno **1.6**.

### 7.3 Micro-interazioni e engagement
*   Effetti hover su link, pulsanti e card.
*   Animazioni di ingresso sottili (fade-in, slide-up) sulle sezioni al scroll.
*   Transizioni fluide su tutti gli elementi interattivi (durata consigliata: 200-300ms, easing: ease-out).
*   Indicatori visivi di stato (es. pulsante che cambia colore al click, form che conferma l'invio).

### 7.4 Sticky elements
*   **Barra di contatto sticky** (telefono / WhatsApp) visibile su mobile, fissata in basso.
*   **Header sticky** con navigazione compatta dopo lo scroll iniziale.
*   Evitare popup invasivi — preferire banner discreti o slide-in laterali.

---

## 8. Design e grafica

### 8.1 Principi di design
*   **Mobile-first**: progettare prima per mobile, poi adattare a tablet e desktop.
*   **Consistenza visiva**: definire un design system con variabili CSS per colori, tipografia, spaziature e raggi di bordo.
*   **Gerarchia visiva**: guidare l'occhio dell'utente verso le informazioni più importanti attraverso dimensioni, colori e posizionamento.

### 8.2 Palette colori
*   Definire una palette primaria di massimo **3 colori** (primario, secondario, accento) + neutri (bianco, grigio, nero).
*   Garantire un **contrasto minimo WCAG AA** (rapporto 4.5:1) tra testo e sfondo.
*   Usare colori desaturati per sfondi e colori vivaci solo per CTA e accenti.

### 8.3 Tipografia
*   Usare **font moderni** da Google Fonts (es. Inter, Outfit, Roboto, DM Sans).
*   Mai usare i font di default del browser.
*   Scale tipografica definita: body (16px minimo), H1 (2.5-3rem), H2 (1.8-2.2rem), H3 (1.3-1.6rem).
*   Line-height: 1.6 per il body text, 1.2 per i titoli.

### 8.4 Immagini e media
*   **Immagine in evidenza** (featured image) obbligatoria per ogni pagina/articolo.
*   Immagini inline distribuite ogni **300-400 parole** per spezzare il testo.
*   Formato preferito: **WebP** con fallback JPG/PNG.
*   Tutte le immagini devono avere un attributo `alt` descrittivo e SEO-oriented.
*   Implementare il **lazy loading** (`loading="lazy"`) su tutte le immagini sotto la piega.
*   Le immagini devono essere **responsive** (attributi `srcset` e `sizes` o CSS `max-width: 100%`).
*   Dimensione massima consigliata: **200 KB** per immagine (compresse).

### 8.5 Spaziature e layout
*   Usare un **sistema a griglia** consistente (CSS Grid o Flexbox).
*   Padding e margin consistenti tramite variabili CSS (es. `--spacing-sm`, `--spacing-md`, `--spacing-lg`).
*   Larghezza massima del contenuto testuale: **70-75 caratteri per riga** (circa 700-800px) per una leggibilità ottimale.

### 8.6 Componenti UI ricorrenti
*   **Card servizi**: immagine + titolo + breve descrizione + CTA.
*   **Hero section**: titolo grande + sottotitolo + CTA primaria + immagine/video di sfondo.
*   **Sezione testimonianze**: citazione + nome + stelline + foto (se disponibile).
*   **Sezione FAQ**: accordion interattivo con markup Schema.org `FAQPage`.

---

## 9. Dati strutturati (Schema.org)

### 9.1 Markup obbligatori
| Tipo di pagina | Schema richiesto |
|---|---|
| Homepage | `LocalBusiness` (o sotto-tipo), `WebSite`, `SearchAction` |
| Pagina servizio | `Service`, `Offer`, `AggregateRating` (se disponibile) |
| Articolo blog | `Article` o `BlogPosting`, `FAQPage`, `BreadcrumbList` |
| Pagina contatti | `LocalBusiness`, `ContactPoint` |
| Landing page | `Service`, `FAQPage`, `Review` |

### 9.2 Regole di implementazione
*   Usare il formato **JSON-LD** (raccomandato da Google) nel `<head>` della pagina.
*   Validare sempre il markup con il [Rich Results Test](https://search.google.com/test/rich-results) di Google.
*   Non duplicare i dati strutturati — un solo blocco per tipo per pagina.

---

## 10. Performance e tecnica

### 10.1 Core Web Vitals
*   **LCP** (Largest Contentful Paint): ≤ **2.5 secondi**.
*   **INP** (Interaction to Next Paint): ≤ **200 ms**.
*   **CLS** (Cumulative Layout Shift): ≤ **0.1**.

### 10.2 Ottimizzazioni tecniche
*   CSS e JS minificati in produzione.
*   Font precaricati con `<link rel="preload">`.
*   Risorse critiche inline (CSS above the fold).
*   Implementare `<link rel="preconnect">` per domini esterni (Google Fonts, CDN, analytics).
*   Servire tutte le pagine via **HTTPS**.
*   Implementare una **sitemap XML** (`/sitemap.xml`) e un file **robots.txt** correttamente configurato.

### 10.3 Accessibilità (a11y)
*   Tutti gli elementi interattivi devono essere navigabili da **tastiera** (tab, enter, escape).
*   Usare attributi ARIA dove necessario (`aria-label`, `aria-expanded`, `role`).
*   Contrasto colori conforme a **WCAG AA**.
*   Focus visibile su tutti gli elementi interattivi.
*   Testi alternativi (`alt`) su tutte le immagini.

---

## 11. Tipi di contenuto e struttura

### 11.1 Blog article (deep dive)
*   **Lunghezza**: 1000-2000 parole.
*   **Struttura**: H1 → Intro (keyword nei primi 100 caratteri) → Box "In breve" → Sezioni H2/H3 → Tabella (se pertinente) → FAQ (almeno 5, con markup Schema.org) → Box CTA finale.
*   Immagini inline ogni 300-400 parole.
*   Almeno 3 link interni + 1-2 link esterni autorevoli.

### 11.2 Pillar page (autorità)
*   **Lunghezza**: 3000-5000 parole.
*   **Struttura**: H1 → Box TL;DR (abstract) → Indice navigabile (anchor links) → Definizione immediata dell'argomento → Sezioni approfondite (8-12 sezioni) → FAQ (almeno 8, con markup Schema.org) → Conclusione e CTA.
*   Deve linkare tutti gli articoli Cluster del silo.

### 11.3 Landing page (conversione)
*   **Struttura**: Hero (H1 + sottotitolo + CTA) → Problema → Soluzione → Vantaggi (lista) → Come funziona → Social proof → CTA forte (ripetuta 2-3 volte nella pagina).
*   Zero distrazioni: nessun link esterno, navigazione minimale.
*   Tempo di caricamento ≤ 2 secondi.

### 11.4 Pagina servizio
*   **Struttura**: H1 (servizio + località) → Descrizione del servizio → Benefici per il cliente → Come funziona il processo → Prezzi/opzioni (tabella) → Testimonianze → FAQ → CTA.
*   Keyword locale integrata nel titolo e nel testo.
*   Immagine reale del servizio (no stock generiche).

---

## 12. Linee guida strategiche

### 12.1 Keyword research
*   Dare sempre priorità alle **keyword target** indicate dal cliente.
*   Bilanciare keyword a **coda lunga** (alta conversione, bassa competizione) e **coda corta** (alto volume, alta competizione).
*   Analizzare l'**intento di ricerca** (informazionale vs transazionale) prima di scegliere il tipo di contenuto.

### 12.2 Analisi GSC (Google Search Console)
*   Identificare opportunità tra le keyword con **molte impressioni ma basso CTR** (posizioni 5-15).
*   Monitorare le query che attivano AI Overviews e ottimizzare i contenuti per essere citati.
*   Verificare periodicamente errori di indicizzazione e coverage.

### 12.3 Analisi lacune e unicità
*   Identificare argomenti mancanti basandosi sulla knowledge base del brand e sull'analisi dei competitor.
*   Evitare **duplicati**: controllare sempre gli argomenti già trattati nel sito prima di creare nuovo contenuto.
*   Ogni nuovo contenuto deve portare **valore unico** — non riformulare ciò che già esiste.

### 12.4 Contenuti AI e qualità
*   I contenuti generati con AI devono essere **sempre rivisti, arricchiti e personalizzati** prima della pubblicazione.
*   Aggiungere sempre elementi di esperienza diretta (casi studio, esempi reali, dati proprietari) per differenziare il contenuto.
*   Google non penalizza l'AI di per sé, ma penalizza i contenuti di **bassa qualità** indipendentemente dal metodo di produzione (ref: linee guida Google sui contenuti AI).

---

## Changelog

| Data | Modifica |
|---|---|
| 2026-05-03 | Creazione iniziale: regole SEO on-page, linking, CRO, tipologie di contenuto. |
| 2026-05-03 | Integrazione completa: GEO, E-E-A-T, dati strutturati, design system, performance, accessibilità, CTA, social proof, micro-interazioni, local SEO, risorse ufficiali. |

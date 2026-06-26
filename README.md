# TIPE CPGE — Plateforme Multi-Pages (CNC 2026 + Guide TIPE)

## Stack
- **Vite** + React 18 + TypeScript
- **Wouter** — routing client-side léger avec code-splitting (lazy loading par route)
- **Tailwind CSS** v3
- **Framer Motion** (animations + transitions de page)
- **lucide-react** + **react-icons**

## Démarrage rapide

```bash
npm install
npm run dev
```

Accès : http://localhost:5173

## Build production

```bash
npm run build
npm run preview
```

Chaque page est dans son propre chunk JS (lazy-loaded), donc le visiteur ne télécharge que le code de la page qu'il visite. Bundle initial partagé ~50 Kb gzip.

## Architecture : Single Page → Multi-Page

Le site est passé d'un long scroll unique à une **vraie application multi-pages** avec routing, pour les visiteurs arrivant depuis Instagram et voulant accéder directement à une section précise sans scroller.

### Pages et routes

| Route | Page | Contenu |
|---|---|---|
| `/` | Accueil | Hero, Features, Services, teaser plateforme, Pricing, Testimonials, Social |
| `/cnc-2026` | Dashboard CNC 2026 | Countdown, **timeline interactive temps réel**, alertes, calendrier détaillé, guide d'inscription |
| `/filieres` | Filières | Comparatif MP / PSI / TSI : coefficients, débouchés, "pour qui ?" |
| `/ecoles` | Écoles | 19 établissements, recherche, filtres, statistiques de places |
| `/concours` | Concours | Vue d'ensemble du processus CNC (admissibilité → admission → affectation) |
| `/calculateur` | Calculateur | Calcul de note finale officiel avec coefficients CNC 2026 |
| `/methodologie` | Méthodologie TIPE | **Workflow en 6 étapes** + détail MCOT/DOT + conseils du jury |
| `/ressources` | Ressources | Explorateur des 24 thèmes officiels TIPE |
| `/etudes-de-cas` | Études de Cas | **3 cas réels** : contexte, problème, solution, résultats, technologies, témoignage |
| `/faq` | FAQ | Questions fréquentes |
| `/contact` | Contact | Formulaire, à propos, réseaux sociaux |

### Navigation
- Navbar avec **2 menus déroulants** (CNC 2026 / Guide TIPE) + indicateurs de page active
- **Breadcrumbs** automatiques sur toutes les pages sauf l'accueil
- **Transitions de page** fluides (fade + slide, Framer Motion)
- **QuickLinks** : bandeau de liens internes en bas de chaque page pour relier les pages entre elles (ex: Méthodologie → Études de Cas → Contact)
- CTA sticky "prêt à réussir votre TIPE ?" après scroll
- SEO dynamique : titre + meta description mis à jour automatiquement par route (`useSEO` hook)

### Timeline interactive (`/cnc-2026`)
Remplace les anciennes barres de progression statiques par une vraie timeline horizontale :
- Curseur "Aujourd'hui" positionné automatiquement selon la date système, mis à jour chaque minute
- Segments colorés par statut : vert (terminé), pulsation animée (en cours), neutre (à venir)
- Tooltip au survol avec dates précises + description
- Pourcentage de progression globale calculé en temps réel
- Responsive avec scroll horizontal sur mobile

## Déploiement

### Vercel
```bash
npm i -g vercel
vercel
```
Le fichier `vercel.json` inclus configure déjà la réécriture SPA (toutes les routes pointent vers `index.html`, indispensable pour que `/cnc-2026` fonctionne au rafraîchissement direct).

### Netlify
Le fichier `public/_redirects` est inclus pour le même besoin.

### Autre hébergeur statique
Toute plateforme de hosting statique nécessite une règle de fallback SPA : `/* → /index.html (200)`. Sans cette règle, un rafraîchissement sur `/methodologie` renverra une 404 côté serveur.

## Personnalisation

### Numéro WhatsApp
`src/components/layout/Layout.tsx` → remplacer `212600000000`.

### Date du compte à rebours / timeline
`src/components/home/CNCDashboard.tsx` (countdown) et `src/components/home/InteractiveTimeline.tsx` (dates des phases, tableau `EVENTS`).

### Ajouter une nouvelle page
1. Créer `src/pages/MaPage.tsx`
2. L'ajouter à `src/lib/routes.ts` (génère breadcrumb + SEO automatiquement)
3. L'enregistrer dans `src/App.tsx` (lazy import + `<Route>`)
4. L'ajouter au menu voulu dans `src/components/home/Navbar.tsx`

## Structure
```
src/
├── App.tsx                          ← Router (wouter) + lazy loading
├── lib/
│   ├── routes.ts                    ← Registre des routes (SEO, breadcrumbs, groupes nav)
│   └── useSEO.ts                    ← Hook : titre + meta description par route
├── components/
│   ├── layout/
│   │   ├── Layout.tsx               ← Wrapper commun (Navbar, Footer, WhatsApp)
│   │   ├── Breadcrumbs.tsx
│   │   ├── PageTransition.tsx       ← Animation de transition + scroll-to-hash
│   │   └── QuickLinks.tsx           ← Bandeau de liens internes réutilisable
│   ├── home/
│   │   ├── Navbar.tsx               ← Routing réel, 2 dropdowns, indicateurs actifs
│   │   ├── Hero.tsx / Features.tsx / Services.tsx / Pricing.tsx / Testimonials.tsx
│   │   ├── CNCDashboard.tsx         ← Countdown + InteractiveTimeline + alertes
│   │   ├── InteractiveTimeline.tsx  ← Timeline horizontale temps réel
│   │   ├── CNCCalendar.tsx / CNCRegistrationGuide.tsx / CNCCalculator.tsx
│   │   ├── SchoolsExplorer.tsx / StatsDashboard.tsx
│   │   ├── TIPEMethodology.tsx / TIPEThemesExplorer.tsx / TIPETips.tsx
│   │   ├── Contact.tsx / About.tsx / Social.tsx / FAQSimple.tsx / Footer.tsx
│   └── ui/
└── pages/
    ├── Home.tsx, CNC2026.tsx, Filieres.tsx, Ecoles.tsx, Concours.tsx
    ├── Calculateur.tsx, Methodologie.tsx, Ressources.tsx, EtudesDeCas.tsx
    ├── FAQPage.tsx, ContactPage.tsx, NotFound.tsx
```

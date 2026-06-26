export interface RouteMeta {
  path: string;
  label: string;
  title: string;
  description: string;
  group: "main" | "cnc" | "tipe";
}

export const ROUTES: RouteMeta[] = [
  { path: "/", label: "Accueil", title: "TIPE CPGE — Accompagnement TIPE & Concours au Maroc", description: "Plateforme N°1 d'accompagnement TIPE, préparation CNC 2026 et coaching pour les CPGE au Maroc.", group: "main" },
  { path: "/cnc-2026", label: "Dashboard CNC 2026", title: "Dashboard CNC 2026 — Calendrier & Échéances", description: "Suivez en temps réel le calendrier officiel du Concours National Commun 2026 : inscriptions, phases TIPE, écrits, oral.", group: "cnc" },
  { path: "/filieres", label: "Filières", title: "Filières MP, PSI, TSI — CNC 2026", description: "Comprendre les filières MP, PSI et TSI : coefficients, épreuves, débouchés et écoles accessibles.", group: "cnc" },
  { path: "/ecoles", label: "Écoles", title: "Écoles d'Ingénieurs — CNC 2026", description: "Explorez les 19 établissements du CNC 2026 : places disponibles, spécialités, frais de scolarité.", group: "cnc" },
  { path: "/concours", label: "Concours", title: "Concours National Commun 2026 — Vue d'ensemble", description: "Tout savoir sur le CNC 2026 : nature des épreuves, admissibilité, admission et affectation.", group: "cnc" },
  { path: "/calculateur", label: "Calculateur", title: "Calculateur de Notes CNC 2026", description: "Calculez votre moyenne pondérée et votre note finale selon les coefficients officiels CNC 2026.", group: "cnc" },
  { path: "/methodologie", label: "Méthodologie TIPE", title: "Méthodologie TIPE — Notre méthode en 6 étapes", description: "Découvrez notre méthodologie complète pour réussir votre TIPE, de l'analyse du sujet à la préparation de l'oral.", group: "tipe" },
  { path: "/ressources", label: "Ressources", title: "Ressources TIPE — Thèmes officiels & outils", description: "Explorez les 24 positionnements thématiques officiels du TIPE et nos ressources pédagogiques.", group: "tipe" },
  { path: "/etudes-de-cas", label: "Études de Cas", title: "Études de Cas — Réussites TIPE CPGE", description: "Découvrez des exemples concrets d'étudiants accompagnés : contexte, problème, solution, résultats.", group: "tipe" },
  { path: "/faq", label: "FAQ", title: "FAQ — Questions Fréquentes", description: "Réponses aux questions les plus fréquentes sur le TIPE, le CNC 2026 et notre accompagnement.", group: "main" },
  { path: "/contact", label: "Contact", title: "Contact — TIPE CPGE", description: "Contactez-nous pour démarrer votre accompagnement TIPE et concours dès aujourd'hui.", group: "main" },
];

export const getRouteMeta = (path: string): RouteMeta =>
  ROUTES.find((r) => r.path === path) ?? ROUTES[0];

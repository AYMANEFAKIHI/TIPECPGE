// Contenu éditorial des guides — source unique, rédigé à la main (people-first).
// Chaque guide vise une vraie requête d'étudiant CPGE et s'appuie sur des faits
// concrets du CNC / TIPE (phases, structure de l'oral, coefficients).

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string };

export interface GuideSection {
  h2: string;
  blocks: GuideBlock[];
}

export interface GuideLink {
  label: string;
  href: string;
}

export interface Guide {
  slug: string;
  category: string;
  readMinutes: number;
  /** Titre court — carte & navigation */
  label: string;
  /** Titre de la page (H1) */
  h1: string;
  /** Meta description + résumé de carte */
  description: string;
  intro: string;
  sections: GuideSection[];
  related: GuideLink[];
}

export const GUIDES: Guide[] = [
  {
    slug: "choisir-sujet-tipe-2026-2027",
    category: "Sujet",
    readMinutes: 8,
    label: "Choisir un sujet TIPE (2026-2027)",
    h1: "Comment choisir un sujet TIPE faisable pour le thème « Sobriété, efficacité et optimisation »",
    description:
      "Méthode concrète pour trouver un sujet TIPE original ET réalisable sur le thème 2026-2027, avec des exemples par filière (MP, PSI, TSI) et les pièges à éviter.",
    intro:
      "Le choix du sujet décide de 80 % de la réussite d'un TIPE. Un sujet trop ambitieux devient infaisable en quelques semaines ; un sujet trop vague ne tient pas 15 minutes devant le jury. Voici la méthode que nous utilisons avec nos étudiants pour trouver, en une ou deux séances, un sujet à la fois personnel, ancré au thème de l'année et réellement réalisable avec les moyens d'une CPGE.",
    sections: [
      {
        h2: "Ce que le jury attend vraiment d'un sujet",
        blocks: [
          {
            type: "p",
            text: "Le TIPE n'est pas un exposé : c'est une démarche de recherche personnelle. Le jury cherche à vérifier que vous avez posé une problématique, construit un protocole (expérimental ou numérique), obtenu des résultats et su les analyser de façon critique. Un « beau » sujet mal exploité vaut moins qu'un sujet modeste mené jusqu'au bout.",
          },
          {
            type: "list",
            items: [
              "Une problématique claire, formulée comme une question à laquelle vous pouvez répondre.",
              "Un ancrage explicite au thème de l'année — ici « Sobriété, efficacité et optimisation ».",
              "Une part personnelle vérifiable : mesures, code, simulation, montage. Pas seulement de la bibliographie.",
              "Des résultats, même partiels, que vous savez commenter (ordre de grandeur, incertitudes, limites).",
            ],
          },
          {
            type: "callout",
            text: "Règle d'or : si vous ne pouvez pas produire un premier résultat chiffré en trois semaines avec le matériel dont vous disposez, le sujet est trop gros. Réduisez le périmètre.",
          },
        ],
      },
      {
        h2: "Décrypter le thème 2026-2027",
        blocks: [
          {
            type: "p",
            text: "« Sobriété, efficacité et optimisation » tourne autour d'une idée centrale : faire mieux avec moins. Trois angles reviennent presque partout et vous aident à raccrocher n'importe quel sujet au thème :",
          },
          {
            type: "list",
            items: [
              "Rendement : quelle fraction de l'énergie / de la ressource est réellement utile ? (moteurs, panneaux, isolation, algorithmes).",
              "Optimisation : trouver le meilleur compromis sous contrainte (minimiser un coût, maximiser un rendement, réduire une consommation).",
              "Économie de ressources : faire la même chose avec moins de matière, d'énergie, de données ou de temps.",
            ],
          },
        ],
      },
      {
        h2: "Exemples de pistes par filière",
        blocks: [
          { type: "h3", text: "MP — plutôt maths / informatique / physique théorique" },
          {
            type: "list",
            items: [
              "Comparaison expérimentale d'algorithmes d'optimisation (descente de gradient vs recuit simulé) sur un problème réel.",
              "Compression de données sans perte : mesurer le compromis taux de compression / temps de calcul.",
              "Recherche du chemin de coût minimal dans un réseau (Dijkstra, A*) appliqué à un cas concret.",
            ],
          },
          { type: "h3", text: "PSI — plutôt physique / sciences de l'ingénieur" },
          {
            type: "list",
            items: [
              "Rendement d'un petit moteur thermique ou d'un moteur Stirling construit / mesuré.",
              "Optimisation de la forme d'une structure pour un rapport rigidité/masse maximal.",
              "Efficacité énergétique d'un échangeur thermique ou d'une isolation, avec mesures.",
            ],
          },
          { type: "h3", text: "TSI — plutôt sciences industrielles / procédés" },
          {
            type: "list",
            items: [
              "Régulation d'un système pour minimiser la consommation tout en gardant la performance.",
              "Optimisation d'un procédé (temps de cycle, matière première, énergie) sur un banc ou en simulation.",
              "Gestion intelligente de l'énergie d'un petit système alimenté par batterie/panneau.",
            ],
          },
          {
            type: "callout",
            text: "Ces pistes sont des points de départ, pas des sujets clés en main : le jury sanctionne les sujets recopiés. Le travail consiste à les rendre personnels et faisables selon votre matériel et votre niveau.",
          },
        ],
      },
      {
        h2: "Les 5 erreurs qui coûtent le plus cher",
        blocks: [
          {
            type: "list",
            items: [
              "Choisir un sujet « impressionnant » impossible à mesurer avec vos moyens.",
              "Rester descriptif (« comment fonctionne X ») au lieu de poser une vraie question.",
              "Oublier l'ancrage au thème — le jury le teste presque toujours.",
              "Attendre janvier pour commencer : la Phase 1 se clôt tôt, le temps expérimental manque.",
              "Négliger les incertitudes : un résultat sans barre d'erreur ni ordre de grandeur est fragile à l'oral.",
            ],
          },
        ],
      },
      {
        h2: "Comment valider votre sujet en pratique",
        blocks: [
          {
            type: "p",
            text: "Avant de vous lancer, faites le test de faisabilité : écrivez la question, la grandeur que vous allez mesurer ou calculer, le protocole, et le premier résultat attendu. Si l'une de ces cases reste vide, le sujet n'est pas encore prêt. C'est exactement l'objet de notre étude de faisabilité : vérifier, avant que vous n'investissiez des semaines, que le sujet tiendra la route jusqu'à l'oral.",
          },
        ],
      },
    ],
    related: [
      { label: "Notre méthodologie TIPE en 6 étapes", href: "/methodologie" },
      { label: "Explorer les 24 thèmes officiels", href: "/ressources" },
      { label: "Faire valider mon sujet (nous contacter)", href: "/contact" },
    ],
  },
  {
    slug: "rediger-mcot-tipe",
    category: "MCOT",
    readMinutes: 7,
    label: "Rédiger une MCOT solide",
    h1: "Rédiger une MCOT solide : structure, erreurs fréquentes et checklist",
    description:
      "La MCOT (Mise en Cohérence des Objectifs du TIPE) est le premier document noté de votre parcours. Voici sa structure attendue, les erreurs qui pénalisent, et une checklist avant soumission.",
    intro:
      "La MCOT — Mise en Cohérence des Objectifs du TIPE — est le document officiel qui verrouille votre sujet avant les écrits. Mal rédigée, elle affaiblit tout le reste du dossier ; bien construite, elle donne au jury une raison de vous faire confiance dès l'oral. Voici ce qu'elle doit contenir et comment éviter les pièges les plus courants.",
    sections: [
      {
        h2: "À quoi sert la MCOT",
        blocks: [
          {
            type: "p",
            text: "La MCOT démontre que votre projet est cohérent : que votre problématique découle d'un ancrage réel, que vos objectifs sont atteignables, et que votre bibliographie est sérieuse. Elle se saisit pendant la Phase 2 et se clôt à une date stricte — après quoi aucune modification n'est possible. Anticipez : une MCOT écrite dans l'urgence se voit.",
          },
        ],
      },
      {
        h2: "La structure attendue",
        blocks: [
          {
            type: "list",
            items: [
              "Positionnement thématique : les disciplines et mots-clés qui situent votre sujet (jusqu'à 3, par ordre de priorité).",
              "Mots-clés : cinq en français et cinq en anglais, précis et réellement liés au sujet.",
              "Bibliographie commentée : des sources fiables, datées, que vous avez vraiment lues et pouvez discuter.",
              "Problématique : une question claire, ni trop large ni triviale.",
              "Objectifs : ce que vous cherchez à établir, mesurer ou comparer — de façon vérifiable.",
              "Ancrage au thème de l'année : le lien explicite avec « Sobriété, efficacité et optimisation ».",
            ],
          },
        ],
      },
      {
        h2: "Les erreurs qui pénalisent",
        blocks: [
          {
            type: "list",
            items: [
              "Une bibliographie « décorative » : des références jamais lues que le jury peut vous demander d'expliquer.",
              "Des objectifs flous (« étudier », « comprendre ») au lieu d'objectifs mesurables (« mesurer », « comparer », « quantifier »).",
              "Une problématique déconnectée du protocole que vous pourrez réellement mener.",
              "Des mots-clés génériques qui ne renvoient à rien de spécifique.",
              "Un ancrage au thème plaqué à la fin, au lieu d'être le fil directeur.",
            ],
          },
          {
            type: "callout",
            text: "Test simple : pour chaque objectif, demandez-vous « quelle courbe, quel tableau ou quel chiffre vais-je montrer au jury ? ». Si la réponse n'existe pas, reformulez l'objectif.",
          },
        ],
      },
      {
        h2: "Checklist avant soumission",
        blocks: [
          {
            type: "list",
            items: [
              "Ma problématique tient en une phrase et se termine par un point d'interrogation implicite.",
              "Chaque objectif est associé à une grandeur mesurable ou calculable.",
              "J'ai lu chaque référence de ma bibliographie et je peux la résumer.",
              "Le lien avec le thème apparaît dès l'introduction.",
              "Mes mots-clés FR/EN sont spécifiques et cohérents entre eux.",
              "Un tiers extérieur comprend mon sujet en lisant la MCOT seule.",
            ],
          },
          {
            type: "p",
            text: "Ce dernier point est le plus révélateur : faites relire votre MCOT par quelqu'un qui ne connaît pas votre sujet. S'il ne comprend pas ce que vous cherchez, le jury non plus. C'est précisément le rôle d'une relecture encadrée — vérifier la cohérence et l'optimiser avant la date de clôture.",
          },
        ],
      },
    ],
    related: [
      { label: "Comment choisir un sujet faisable", href: "/guides/choisir-sujet-tipe-2026-2027" },
      { label: "Le calendrier et les phases (Dashboard CNC)", href: "/cnc-2026" },
      { label: "Faire relire ma MCOT (nous contacter)", href: "/contact" },
    ],
  },
  {
    slug: "reussir-oral-tipe",
    category: "Oral",
    readMinutes: 9,
    label: "Réussir l'oral du TIPE",
    h1: "Réussir l'oral du TIPE : les 40 minutes décryptées et les questions du jury",
    description:
      "L'oral TIPE vaut coefficient 8. Découvrez le déroulé précis des 40 minutes, comment construire vos slides, et les questions types du jury — avec la préparation qui fait la différence.",
    intro:
      "L'oral du TIPE compte pour le coefficient 8 dans la note finale du CNC (sur 52). C'est une épreuve où la préparation se voit immédiatement : un candidat qui a répété tient ses 15 minutes et rebondit sur les questions ; un candidat qui découvre son propre exposé se fait piéger. Voici le déroulé réel de l'épreuve et comment s'y préparer méthodiquement.",
    sections: [
      {
        h2: "Le déroulé des 40 minutes",
        blocks: [
          {
            type: "p",
            text: "L'épreuve est cadrée. Connaître son minutage évite les mauvaises surprises et vous aide à calibrer votre présentation :",
          },
          {
            type: "list",
            items: [
              "5 minutes — le jury lit votre fiche en silence. Vous ne parlez pas : préparez-vous mentalement.",
              "15 minutes — votre présentation, appuyée sur vos slides (vidéoprojecteur) et le tableau.",
              "15 minutes — les questions du jury : méthode, résultats, limites, bibliographie.",
              "5 minutes — délibération. La note sur 20 est ensuite affectée du coefficient 8.",
            ],
          },
          {
            type: "callout",
            text: "15 minutes, c'est court. Chronométrez-vous : la plupart des candidats préparent 25 minutes de contenu et se font couper. Mieux vaut moins de slides, mieux maîtrisées.",
          },
        ],
      },
      {
        h2: "Construire des slides qui servent la démarche",
        blocks: [
          {
            type: "list",
            items: [
              "Une slide = une idée. Pas de paragraphes : le jury vous écoute, il ne lit pas.",
              "Montrez la démarche, pas seulement le résultat : problématique → protocole → résultats → analyse critique.",
              "Vos courbes doivent être lisibles à distance : axes légendés, unités, barres d'incertitude.",
              "Gardez une slide de secours (annexe) pour les calculs détaillés que le jury pourrait demander.",
              "Terminez sur les limites et les perspectives : cela montre du recul et oriente les questions vers votre terrain.",
            ],
          },
        ],
      },
      {
        h2: "Les questions types du jury",
        blocks: [
          {
            type: "p",
            text: "Le jury cherche à tester votre compréhension, pas à vous piéger gratuitement. Les questions reviennent par familles :",
          },
          {
            type: "list",
            items: [
              "Méthode : « Pourquoi ce protocole plutôt qu'un autre ? », « Qu'avez-vous fait varier ? »",
              "Résultats : « Cet ordre de grandeur est-il cohérent ? », « D'où vient cet écart ? »",
              "Incertitudes : « Quelle est la précision de votre mesure ? », « Comment l'avez-vous estimée ? »",
              "Recul : « Quelles sont les limites ? », « Que feriez-vous avec plus de temps ? »",
              "Ancrage : « En quoi votre sujet illustre-t-il le thème de l'année ? »",
            ],
          },
          {
            type: "callout",
            text: "Préparez une réponse honnête au « je ne sais pas » : reconnaître une limite et proposer une piste vaut mieux qu'un bluff que le jury démonte en deux questions.",
          },
        ],
      },
      {
        h2: "La préparation qui fait la différence",
        blocks: [
          {
            type: "p",
            text: "Le meilleur entraînement est la simulation d'oral dans les conditions réelles : présentation chronométrée, puis un jury qui vous questionne sans complaisance. C'est là qu'on repère les slides faibles, les trous dans le raisonnement et les questions auxquelles vous n'aviez pas pensé. Deux ou trois simulations transforment un oral hésitant en une présentation solide — c'est l'objet de notre préparation orale, jusqu'à la simulation devant jury.",
          },
        ],
      },
    ],
    related: [
      { label: "Rédiger une MCOT solide", href: "/guides/rediger-mcot-tipe" },
      { label: "Nos études de cas d'étudiants accompagnés", href: "/etudes-de-cas" },
      { label: "Préparer mon oral (nous contacter)", href: "/contact" },
    ],
  },
];

export const getGuide = (slug: string): Guide | undefined =>
  GUIDES.find((g) => g.slug === slug);

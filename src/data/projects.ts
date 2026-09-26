export const projects = [
  {
    slug: "ecotrack",

    title: "EcoTrack",

    subtitle:
      "Plateforme mobile de signalement et de suivi des incidents environnementaux.",

    category: "Application Web & Mobile",

    status: "Projet phare",

    year: "2026",

    featured: true,

    description:
      "EcoTrack est une solution numérique pensée pour faciliter le signalement, la gestion et le suivi des incidents environnementaux au Bénin.",

    longDescription:
      "La plateforme permet aux citoyens de signaler des incidents environnementaux avec leur localisation et des photos. Les agents environnementaux peuvent ensuite consulter les signalements qui leur sont attribués, suivre leur traitement et mettre à jour leur statut. Une interface d'administration permet également de gérer les utilisateurs, les organisations et les statistiques.",

    problem:
      "Les incidents environnementaux tels que la pollution, les dépôts sauvages, les déversements toxiques, la déforestation ou les feux de brousse nécessitent un mécanisme de signalement et de suivi plus structuré.",

    solution:
      "EcoTrack propose une plateforme centralisée permettant de collecter les signalements, de les géolocaliser, de suivre leur évolution et de fournir aux responsables des outils de gestion et de statistiques.",

    technologies: [
      "Flutter",
      "Dart",
      "PHP",
      "MySQL",
      "REST API",
      "JWT",
      "HTML",
      "CSS",
      "Git",
    ],

    features: [
      "Création de compte et authentification",
      "Signalement d'incidents environnementaux",
      "Ajout de photos",
      "Géolocalisation GPS",
      "Carte interactive",
      "Suivi du statut des incidents",
      "Commentaires",
      "Système de points",
      "Gestion des profils",
      "Tableau de bord agent",
      "Gestion administrative",
      "Statistiques",
      "Gestion des organisations",
      "Notifications",
    ],

    roles: [
      {
        name: "Citoyen",
        description:
          "Signale des incidents, ajoute des photos, consulte la carte et suit l'évolution de ses signalements.",
      },
      {
        name: "Agent environnemental",
        description:
          "Consulte les incidents qui lui sont attribués et met à jour leur état de traitement.",
      },
      {
        name: "Administrateur",
        description:
          "Gère les utilisateurs, les incidents, les organisations et les statistiques.",
      },
      {
        name: "Organisation",
        description:
          "Intervient comme acteur partenaire dans l'écosystème environnemental.",
      },
    ],

    architecture: [
      "Application mobile Flutter",
      "API REST PHP",
      "Authentification JWT",
      "Base de données MySQL",
      "Stockage des médias",
      "Interface d'administration",
    ],

    screenshots: [
      {
        src: "/images/projects/ecotrack/dashboard.png",
        alt: "Tableau de bord EcoTrack avec les actions principales et l'activité récente",
        caption: "Tableau de bord et accès rapide aux fonctions principales",
      },
      {
        src: "/images/projects/ecotrack/mobile-home.png",
        alt: "Écran de bienvenue EcoTrack avec les options d'inscription et de connexion",
        caption: "Écran de bienvenue et accès à l'application",
      },
      {
        src: "/images/projects/ecotrack/incident.png",
        alt: "Liste des incidents environnementaux avec filtres et statuts de suivi",
        caption: "Consultation et suivi des incidents signalés",
      },
      {
        src: "/images/projects/ecotrack/map.png",
        alt: "Étape de signalement EcoTrack pour choisir le type d'incident",
        caption: "Parcours de signalement et sélection du type d'incident",
      },
    ],

    links: {
      github: "https://github.com/AVJ-DEV/EcoTrack",
      demo: "",
    },
  },
];
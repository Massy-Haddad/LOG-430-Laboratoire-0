# Laboratoire 0 — Application CLI Node.js

## 📄 Description
Application JavaScript en ligne de commande qui permet d'afficher un message de bienvenue, avec possibilité de personnalisation via un argument (le nom).

## Exécution locale
```bash
# Installer les dépendances
npm install

# Lancer l’application
npm start [nom]
```
---
## Exécution avec Docker
```bash
# Construire l’image Docker
docker build -t laboratoire-0-image .

# Lancer le conteneur
docker run --rm laboratoire-0-image [nom]
```

## Exécution avec Docker Compose
```bash
docker compose up --build
```

# Structure du projet
```md
LOG430-Laboratoire-0/
├── src/
│   └── index.js            # Fichier principal de l'application
├── tests/
│   └── utils.test.js       # Tests unitaires avec Jest
├── .github/
│   └── workflows/
│       └── ci.yml          # Pipeline GitHub Actions (CI/CD)
├── .dockerignore           # Fichiers ignorés lors du build Docker
├── .eslintrc.js            # Configuration ESLint (lint)
├── docker-compose.yml      # Orchestration Docker Compose
├── Dockerfile              # Image Docker de l'application
├── package.json            # Dépendances et scripts
└── README.md               # Documentation du projet
```


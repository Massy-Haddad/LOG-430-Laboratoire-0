# (LOG430) Lab 0 - Infrastructure - Docker, Kubernets, Version Control, CD/CI

Application minimaliste en ligne de commande développée en NodeJS/JavaScript.

---

## Structure du projet
```
LOG430-Laboratoire-0/
├── src/                    # Code source de l’application
│   ├── index.js            # Entrée principale (message de bienvenue)
│   └── utils.js            # Fonction utilitaire testée
├── tests/                  # Tests unitaires avec Jest
│   └── utils.test.js
├── .github/
│   └── workflows/
│       └── ci.yml          # Pipeline CI/CD GitHub Actions
├── .dockerignore           # Exclusions pour le build Docker
├── .eslintrc.js            # Configuration ESLint
├── docker-compose.yml      # Orchestration de l'application
├── Dockerfile              # Image Docker de l’application
├── package.json            # Dépendances et scripts
└── README.md               # Documentation du projet
```

---

## Étapes pour exécuter le projet

### 1. Cloner le dépôt
```bash
git clone https://github.com/votre-utilisateur/LOG430-Laboratoire-0.git
cd LOG430-Laboratoire-0
```

### 2. Exécution locale
```bash
npm install
npm start [nom]
```

### 3. Construire l’image Docker
```bash
docker build -t laboratoire-0-image .
docker run --rm laboratoire-0-image
```

### 4. Orchestration avec Docker Compose
```bash
docker compose up --build
```

---

## Fonctionnalités

- **Application CLI** simple qui affiche un message de bienvenue.
- **Tests unitaires** automatisés avec Jest (`npm test`).
- **Analyse statique** avec ESLint (`npm run lint`).
- **Image Docker** construite à partir du fichier `Dockerfile`.
- **Orchestration** avec Docker Compose.
- **Pipeline CI/CD** automatisée avec GitHub Actions : Lint, Tests, Build de l'image Docker, Publication sur Docker Hub.

---

## Exemple de pipeline réussie

[Success](https://github.com/Massy-Haddad/LOG-430-Laboratoire-0/actions/runs/15000400328)

[Lien vers les workflows](https://github.com/Massy-Haddad/LOG-430-Laboratoire-0/actions)

---

## Image publiée sur Docker Hub

L’image finale est disponible ici :  
`https://hub.docker.com/repository/docker/massyhaddad/laboratoire-0-image`

---

## Ressources utilisées

- [Docker – Getting Started](https://docs.docker.com/get-started/)
- [GitHub Actions – Quickstart](https://docs.github.com/en/actions/quickstart)
- [Jest – Unit Testing Guide](https://jestjs.io/)
- [ESLint – Guide](https://eslint.org/)

# 1. Utilise une image de base Node officielle
FROM node:20

# 2. Crée un dossier de travail dans le conteneur
WORKDIR /app

# 3. Copie les fichiers de dépendances
COPY package*.json ./

# 4. Installe les dépendances
RUN npm install

# 5. Copie le reste du projet
COPY . .

# 6. Spécifie la commande par défaut à exécuter dans le conteneur
CMD ["npm", "start"]
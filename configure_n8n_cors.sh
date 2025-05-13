#!/bin/bash

# Chemin du dossier contenant docker-compose.yml
PROJECT_DIR="/opt/n8n"

echo "🔧 Accès au dossier $PROJECT_DIR"
cd "$PROJECT_DIR" || { echo "❌ Dossier introuvable : $PROJECT_DIR"; exit 1; }

# Ajout de la variable d'environnement N8N_ALLOW_CORS
if grep -q "N8N_ALLOW_CORS" .env; then
    echo "🔁 Mise à jour de N8N_ALLOW_CORS dans .env"
    sed -i 's/^N8N_ALLOW_CORS=.*/N8N_ALLOW_CORS=www.locod-ai.com,www.locod-ai.fr,locod-ai.com,locod-ai.fr/' .env
else
    echo "➕ Ajout de N8N_ALLOW_CORS dans .env"
    echo 'N8N_ALLOW_CORS=www.locod-ai.com,www.locod-ai.fr,locod-ai.com,locod-ai.fr' >> .env
fi

# Redémarrage du conteneur Docker
echo "♻️ Redémarrage de n8n..."
docker compose down
docker compose up -d

echo "✅ n8n redémarré avec les bons CORS"

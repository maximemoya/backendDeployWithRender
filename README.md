# Backend Express TypeScript

Backend Express avec TypeScript prêt pour le déploiement sur **Vercel** ou **Render**.

## Structure du projet

```
backendDeployWithRender/
├── api/
│   └── index.ts              # Point d'entrée Vercel
├── src/
│   ├── index.ts              # Point d'entrée Render/local
│   ├── app.ts                # Configuration Express
│   ├── routes/
│   │   └── index.ts          # Routes API
│   └── middleware/
│       └── errorHandler.ts   # Gestion des erreurs
├── vercel.json               # Configuration Vercel
├── render.yaml               # Configuration Render
└── package.json
```

## Installation

```bash
npm install
```

## Développement local

```bash
# Mode développement standard
npm run dev

# Tester avec Vercel localement (nécessite Vercel CLI)
npm run dev:vercel
```

## Déploiement sur Vercel

### Option 1 : Via le dashboard Vercel (recommandé)

1. Poussez votre code sur GitHub
2. Allez sur [vercel.com](https://vercel.com)
3. Cliquez sur "Import Project"
4. Sélectionnez votre repository
5. Cliquez sur "Deploy"

Vercel détectera automatiquement la configuration dans `vercel.json`.

### Option 2 : Via la CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

## Déploiement sur Render

1. Poussez votre code sur GitHub
2. Allez sur [render.com](https://render.com)
3. Créez un nouveau "Web Service"
4. Connectez votre repository GitHub
5. Render détectera automatiquement le `render.yaml`
6. Cliquez sur "Create Web Service"

### Configuration manuelle (si nécessaire)

- **Build Command** : `npm install && npm run build`
- **Start Command** : `npm start`
- **Health Check Path** : `/health`

## Routes disponibles

- `GET /` - Informations de l'API
- `GET /health` - Health check
- `GET /api/` - Liste des routes disponibles
- `GET /api/example` - Route d'exemple GET
- `POST /api/example` - Route d'exemple POST

## Variables d'environnement

Créez un fichier `.env` pour le développement local :

```bash
cp .env.example .env
```

Pour la production, configurez les variables sur Vercel ou Render :
- `NODE_ENV=production` (optionnel)
- `PORT` (géré automatiquement par les plateformes)

## Différences Vercel vs Render

**Vercel** :
- Serverless (fonctions à la demande)
- Démarrage à froid possible
- Gratuit avec limites généreuses
- Idéal pour les API stateless

**Render** :
- Serveur persistant
- Pas de démarrage à froid
- Service s'endort après 15min d'inactivité (plan gratuit)
- Meilleur pour WebSockets, connexions persistantes

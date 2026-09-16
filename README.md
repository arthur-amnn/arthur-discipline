# Arthur · Machine de Discipline

App de suivi quotidien — piliers, routines, progression, heatmap de régularité, graphiques de tendance et revue hebdo auto-générée. 100% hors ligne : tes données restent sur ton téléphone (localStorage). Export JSON pour sauvegarde / transfert vers PC.

## Installer sur téléphone (PWA)

### Android (Chrome)
1. Ouvre l'URL de l'app dans Chrome.
2. Menu ⋮ → **Installer l'application** (ou la bannière « Installer l'app » apparaît automatiquement).
3. L'icône apparaît sur l'écran d'accueil. Elle fonctionne hors ligne.

### iPhone (Safari) — obligatoire pour iOS
1. Ouvre l'URL dans **Safari** (pas Chrome).
2. Appuie sur **Partager** → **Sur l'écran d'accueil**.
3. L'icône apparaît. Mode plein écran, hors ligne.

## Hébergement gratuit via GitHub Pages

1. Crée un dépôt GitHub (ex: `arthur-discipline`).
2. Glisse-dépose dans le dépôt **tous les fichiers de ce dossier** :
   - `index.html`, `manifest.json`, `sw.js`
   - le dossier `icons/` (avec les 4 PNG)
3. **Settings** → **Pages** → Source: **Deploy from a branch** → branche `main` / dossier `/root` → **Save**.
4. Attends ~1 min. Ton app est en ligne à `https://ton-pseudo.github.io/arthur-discipline/`.
5. Ouvre cette URL sur ton téléphone et installe-la (voir ci-dessus).

## Sauvegarder / transférer vers le PC

Dans l'app : page **Vision** → **Exporter (JSON)**. Le fichier `arthur_discipline_AAAA-MM-JJ.json` se télécharge. Envoie-le-toi (mail, cloud…) et garde-le sur le PC. Pour restaurer : **Importer** et sélectionne le JSON.

> Tes données ne quittent jamais ton téléphone sauf export manuel. Aucun compte, aucun cloud, aucun tracker.

## Mise à jour

Pour mettre à jour l'app : remplace les fichiers dans le dépôt GitHub et pousse. Le navigateur récupère la nouvelle version au prochain lancement (le service worker gère le cache).

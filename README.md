# DWNmap

> **Une application personnelle pour consulter et annoter des plans hors ligne.**

DWNmap est une application web installable conçue pour mon usage personnel. Elle me permet de garder mes plans accessibles sur mon appareil, même sans connexion, et d’y ajouter des repères utiles.

## À propos du projet

DWNmap a été entièrement développée avec l’aide de ChatGPT, à partir de mes besoins et de mes essais sur l’application.

Ce projet est avant tout un outil personnel : il n’a pas été conçu à l’origine comme un produit à distribuer ou à maintenir pour d’autres personnes. Le dépôt est public pour permettre son hébergement avec GitHub Pages. Chacun est libre de consulter le code ou d’essayer l’application, mais **je ne promets aucun support, aucune correction, aucune mise à jour ni aucun suivi**. Si l’application répond à mes besoins, c’est l’essentiel pour moi.

## Fonctions

- Importer et consulter des plans aux formats **JPG, PNG, TIFF et PDF**.
- Parcourir les plans avec le zoom et le déplacement, y compris sur les grands documents.
- Ajouter des marqueurs avec un type, un nom et une description : puits, salles, escaliers, cavages, chatières, eau, informations, véhicules et dangers.
- Rechercher et parcourir les marqueurs d’un plan par catégorie.
- Ajuster la taille des marqueurs plan par plan.
- Personnaliser le réticule, garder l’écran allumé si le navigateur le permet, et mémoriser les vues.
- Convertir automatiquement les grands plans raster en tuiles pour faciliter leur consultation.
- Créer une sauvegarde légère des marqueurs et réglages, ou une sauvegarde complète contenant aussi les plans et leurs tuiles.
- Partager un plan avec ses annotations et ses réglages propres au plan sous forme d’archive à importer dans DWNmap.

Les plans, annotations et réglages sont stockés localement dans le navigateur. Après le premier chargement, les fonctions et données déjà enregistrées sont conçues pour rester accessibles hors ligne. La disponibilité du stockage dépend toutefois du navigateur, de l’appareil et de l’espace disponible. **Les sauvegardes exportées restent le meilleur moyen de conserver une copie indépendante.**

## Utilisation avec GitHub Pages

DWNmap est une application web progressive (PWA). Pour l’utiliser sur iPhone ou iPad :

1. Publier le contenu de `dist/` avec GitHub Pages.
2. Ouvrir l’adresse du site dans Safari.
3. Choisir **Partager → Sur l’écran d’accueil**.
4. Ouvrir ensuite DWNmap depuis l’icône créée.

Pour un dépôt publié dans un sous-répertoire, définir `VITE_BASE_PATH` avant la compilation. Par exemple :

```powershell
$env:VITE_BASE_PATH = '/DWNmap/'
pnpm build
```

Pour un hébergement à la racine du domaine, la configuration par défaut convient :

```powershell
pnpm install
pnpm build
```

## Limites connues

- Les quotas de stockage et les performances varient selon l’appareil et le navigateur. Les grands plans et archives peuvent demander beaucoup de mémoire.
- Les sauvegardes complètes sont limitées à **512 Mo** par archive dans l’application ; un appareil peut atteindre ses limites avant ce plafond.
- L’application web ne peut pas appeler directement le scanner natif de documents d’Apple. Un document scanné avec Notes ou Fichiers peut être importé ensuite comme PDF.
- Une webapp ne peut pas garantir que le navigateur conservera indéfiniment les données locales. Exporter régulièrement une sauvegarde est recommandé.

## Développement

Prérequis : Node.js 20 ou plus récent et pnpm.

```sh
pnpm install
pnpm dev
```

Vérifier la compilation de production :

```sh
pnpm build
```

## Licence

Aucune licence de réutilisation n’est définie pour le moment. Le dépôt est public pour l’hébergement et la consultation ; sa publication ne constitue pas une promesse de support ou de maintenance.

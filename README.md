# DWNmap

> **Une application personnelle pour consulter et annoter des plans hors ligne.**

DWNmap est une application web installable conçue pour mon usage personnel. Elle me permet de garder mes plans accessibles sur mon appareil, même sans connexion, et d’y ajouter des repères.

## À propos du projet

DWNmap a été entièrement développée avec l’aide de ChatGPT.

Ce projet est un outil personnel : il n’a pas été conçu à comme un produit à distribuer ou à maintenir pour d’autres personnes. Le dépôt est public pour permettre son hébergement avec GitHub Pages. Chacun est libre de consulter le code ou d’essayer l’application, mais **je ne promets aucun support, aucune correction, aucune mise à jour ni aucun suivi**. Si l’application répond à mes besoins, c’est l’essentiel.

## Fonctions

- Importer et consulter des plans aux formats **JPG, PNG, TIFF et PDF**.
- Parcourir les plans avec le zoom et le déplacement, y compris sur les grands documents.
- Ajouter des marqueurs avec un type, un nom et une description : puits, salles, escaliers, cavages, chatières, informations, véhicules et dangers.
- Rechercher et parcourir les marqueurs d’un plan par catégorie.
- Ajuster la taille des marqueurs plan par plan.
- Personnaliser le réticule et garder l’écran allumé si le navigateur le permet.
- Convertir automatiquement les grands plans en tuiles pour faciliter leur consultation.
- Créer une sauvegarde légère des marqueurs et réglages, ou une sauvegarde complète contenant aussi les plans et leurs tuiles.
- Partager un plan avec ses annotations et ses réglages sous forme d’archive à importer dans DWNmap.

Les plans, annotations et réglages sont stockés localement. Après le premier chargement, les fonctions et données déjà enregistrées sont conçues pour rester accessibles hors ligne. La disponibilité du stockage dépend toutefois de l’appareil et de l’espace disponible. **Les sauvegardes exportées restent le meilleur moyen de conserver une copie indépendante.**

## Installer DWNmap sur iPhone ou iPad

DWNmap est une application web progressive (PWA).

1. Ouvrez dans Safari la GitHub Page du projet.
2. Dans Safari, touchez le bouton **Partager**.
3. Choisissez **Sur l’écran d’accueil**. Si l’option n’apparaît pas, faites défiler la liste des actions vers le bas.
4. Touchez **Ajouter** pour confirmer.
5. Lancez DWNmap depuis la nouvelle icône sur l’écran d’accueil.
   
## Limites connues

- Les quotas de stockage et les performances varient selon l’appareil. Les grands plans et archives peuvent demander beaucoup de mémoire.
- Les sauvegardes complètes sont limitées à **512 Mo** par archive dans l’application ; un appareil peut atteindre ses limites avant ce plafond.
- Une webapp ne peut pas garantir que le navigateur conservera indéfiniment les données locales. Exporter régulièrement une sauvegarde est recommandé.

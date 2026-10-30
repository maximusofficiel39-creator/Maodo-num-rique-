import { db, formationsTable, modulesTable, lessonsTable, quizzesTable, quizOptionsTable } from "@workspace/db";
import { eq } from "drizzle-orm";

const SLUG = "informatique-bureautique";

function lesson(
  title: string,
  theory: string,
  quizzes: Array<{ question: string; options: Array<{ text: string; correct: boolean }> }> = []
) {
  return { title, theory, quizzes };
}

const FORMATION = {
  slug: SLUG,
  title: "Informatique & Bureautique — De Débutant à Professionnel",
  description: "Maîtrisez l'informatique de base et les outils bureautiques essentiels : Word, Excel, PowerPoint, Internet et email professionnel. Formation pratique et progressive pour être efficace au bureau.",
  category: "bureautique",
  modules: [

    /* ══════════════════════════════════════════
       MODULE 1 : Introduction à l'informatique
    ══════════════════════════════════════════ */
    {
      title: "Module 1 — Introduction à l'informatique",
      lessons: [
        lesson("Qu'est-ce qu'un ordinateur ?", `
## Qu'est-ce qu'un ordinateur ?

Un **ordinateur** est une machine électronique capable de recevoir, stocker, traiter et restituer des informations. C'est l'outil de travail indispensable du monde moderne.

### Les deux grandes familles

**1. Les ordinateurs de bureau (desktop)**
- Unité centrale + écran séparés
- Plus puissants et moins chers
- Idéaux pour un usage fixe au bureau

**2. Les ordinateurs portables (laptop)**
- Tout-en-un : écran, clavier, batterie intégrés
- Pratiques pour travailler partout
- Exemples : Dell, HP, Lenovo, MacBook

### Les autres appareils informatiques
- **Tablette** : écran tactile, idéale pour lire et naviguer
- **Smartphone** : mini-ordinateur dans la poche
- **Serveur** : ordinateur très puissant qui stocke des données pour plusieurs utilisateurs

### Pourquoi apprendre l'informatique ?

✅ Trouver un emploi plus facilement  
✅ Travailler plus vite et plus efficacement  
✅ Communiquer professionnellement par email  
✅ Créer des documents de qualité  
✅ Accéder à l'information partout dans le monde  

> 💡 **Le saviez-vous ?** Aujourd'hui, plus de 90% des emplois de bureau nécessitent des compétences informatiques de base.
`, [
          {
            question: "Qu'est-ce qu'un ordinateur ?",
            options: [
              { text: "Un appareil uniquement pour jouer aux jeux vidéo", correct: false },
              { text: "Une machine électronique capable de recevoir, stocker, traiter et restituer des informations", correct: true },
              { text: "Un téléphone amélioré", correct: false },
              { text: "Un appareil qui remplace uniquement les imprimantes", correct: false },
            ]
          },
          {
            question: "Quel type d'ordinateur est le plus adapté pour travailler en déplacement ?",
            options: [
              { text: "L'ordinateur de bureau", correct: false },
              { text: "Le serveur", correct: false },
              { text: "L'ordinateur portable (laptop)", correct: true },
              { text: "La tablette graphique", correct: false },
            ]
          }
        ]),

        lesson("Les composants d'un ordinateur", `
## Les composants d'un ordinateur

Pour bien utiliser un ordinateur, il faut connaître ses pièces principales.

### Les composants internes

**Le processeur (CPU)**
- Le « cerveau » de l'ordinateur
- Effectue tous les calculs
- Exemples : Intel Core i5, AMD Ryzen 5
- Plus le chiffre est élevé, plus c'est puissant

**La mémoire vive (RAM)**
- Stockage temporaire pendant que l'ordinateur fonctionne
- Se vide quand on éteint l'ordinateur
- Plus de RAM = plus de programmes ouverts simultanément
- Recommandé : minimum 8 Go pour le bureautique

**Le disque dur (HDD/SSD)**
- Stockage permanent de vos fichiers
- Les données restent même quand on éteint l'ordinateur
- SSD = plus rapide que HDD
- Recommandé : 256 Go minimum

**La carte mère**
- Relie tous les composants entre eux
- C'est le "squelette" de l'ordinateur

### Les composants externes (périphériques)

| Périphérique | Rôle | Type |
|---|---|---|
| Écran (moniteur) | Afficher les images | Sortie |
| Clavier | Saisir du texte | Entrée |
| Souris | Pointer et cliquer | Entrée |
| Imprimante | Imprimer des documents | Sortie |
| Webcam | Capturer des images/vidéos | Entrée |
| Haut-parleurs | Émettre du son | Sortie |
| Microphone | Capter la voix | Entrée |

### La connectique

- **Port USB** : brancher clés USB, souris, chargeurs
- **Port HDMI** : connecter un second écran ou un projecteur
- **Prise jack 3.5mm** : connecter des écouteurs
- **Port Ethernet** : connexion internet filaire (plus stable)

> 💡 **Astuce pratique** : Si votre ordinateur est lent, c'est souvent un problème de RAM (pas assez) ou de disque dur (trop plein).
`, [
          {
            question: "Qu'est-ce que la RAM ?",
            options: [
              { text: "Un type de disque dur permanent", correct: false },
              { text: "La mémoire vive temporaire qui se vide à l'extinction", correct: true },
              { text: "Le processeur de l'ordinateur", correct: false },
              { text: "Un périphérique d'entrée", correct: false },
            ]
          },
          {
            question: "Quel port utilise-t-on pour brancher une clé USB ?",
            options: [
              { text: "Port HDMI", correct: false },
              { text: "Port Ethernet", correct: false },
              { text: "Prise jack 3.5mm", correct: false },
              { text: "Port USB", correct: true },
            ]
          }
        ]),

        lesson("Le système d'exploitation Windows", `
## Le système d'exploitation Windows

Le **système d'exploitation (OS)** est le logiciel de base qui fait fonctionner votre ordinateur. Windows, développé par Microsoft, est le plus utilisé au monde dans les entreprises.

### Le Bureau Windows

Quand vous démarrez Windows, vous voyez le **Bureau** (Desktop). Voici ses éléments :

**La Barre des tâches** (en bas)
- Bouton **Démarrer** (logo Windows) : accès à tous les programmes
- **Programmes épinglés** : vos apps favorites
- **Zone de notification** (en bas à droite) : heure, WiFi, son, batterie

**Les icônes du bureau**
- **Ce PC** (ou Poste de travail) : accès à vos fichiers et disques
- **Corbeille** : fichiers supprimés temporairement
- Raccourcis vers vos logiciels

### Manipulations essentielles

**Ouvrir un programme**
1. Double-cliquez sur son icône sur le bureau, OU
2. Cliquez sur Démarrer → cherchez le nom du programme

**Fermer une fenêtre**
- Cliquez sur le **X rouge** en haut à droite

**Agrandir / Réduire une fenêtre**
- □ = agrandir en plein écran
- — = réduire dans la barre des tâches (le programme continue de tourner)

**Les raccourcis clavier essentiels**

| Raccourci | Action |
|---|---|
| **Ctrl + C** | Copier |
| **Ctrl + X** | Couper |
| **Ctrl + V** | Coller |
| **Ctrl + Z** | Annuler la dernière action |
| **Ctrl + S** | Enregistrer |
| **Alt + F4** | Fermer le programme actif |
| **Windows + D** | Afficher le bureau |
| **Windows + L** | Verrouiller l'écran |

### Gérer les fichiers et dossiers

**Créer un dossier**
1. Cliquez droit sur le bureau ou dans l'Explorateur
2. Nouveau → Dossier
3. Donnez-lui un nom

**Renommer un fichier/dossier**
1. Cliquez droit dessus
2. Renommer
3. Tapez le nouveau nom + Entrée

**Déplacer un fichier**
- Glissez-déposez avec la souris, OU
- Coupez (Ctrl+X) puis Collez (Ctrl+V) au bon endroit

> ⚠️ **Attention** : Ne supprimez jamais un fichier dont vous ne connaissez pas l'utilité. En cas de doute, mettez-le dans un dossier "À vérifier".
`, [
          {
            question: "Quel raccourci clavier permet d'annuler la dernière action ?",
            options: [
              { text: "Ctrl + S", correct: false },
              { text: "Ctrl + C", correct: false },
              { text: "Ctrl + Z", correct: true },
              { text: "Alt + F4", correct: false },
            ]
          },
          {
            question: "Que se passe-t-il quand on clique sur le — (tiret) d'une fenêtre ?",
            options: [
              { text: "Le programme se ferme définitivement", correct: false },
              { text: "La fenêtre se réduit dans la barre des tâches mais le programme continue", correct: true },
              { text: "Le programme s'agrandit en plein écran", correct: false },
              { text: "La fenêtre est envoyée à la corbeille", correct: false },
            ]
          }
        ]),

        lesson("Gérer les fichiers et la sécurité", `
## Gérer ses fichiers efficacement

### Organiser ses documents

Une bonne organisation de fichiers vous fait gagner du temps chaque jour.

**Règle d'or : 1 projet = 1 dossier**

Structure recommandée :
\`\`\`
📁 Documents
├── 📁 Travail
│   ├── 📁 2025
│   │   ├── 📁 Rapports
│   │   ├── 📁 Factures
│   │   └── 📁 Présentations
│   └── 📁 Clients
├── 📁 Personnel
│   ├── 📁 CV et lettres
│   └── 📁 Formation
└── 📁 Archives
\`\`\`

### Nommer ses fichiers correctement

❌ **Mauvais noms** : document1.docx, sans titre.xlsx, fichier final VRAI.pdf  
✅ **Bons noms** : Rapport_Mensuel_Janvier2025.docx, Facture_Client_Diallo_001.pdf

**Bonnes pratiques :**
- Pas d'espaces → utilisez _ ou - 
- Pas de caractères spéciaux (é, à, ç)
- Date en format AAAAMMJJ pour bien trier (20250115)
- Soyez descriptif mais concis

### La corbeille

Quand vous supprimez un fichier, il va dans la **Corbeille** — il n'est pas encore perdu !

- **Restaurer** : cliquez droit → Restaurer
- **Supprimer définitivement** : Vider la corbeille (irréversible !)

### Sécurité informatique de base

**Les mots de passe**
- Minimum 8 caractères
- Mélangez : majuscules, minuscules, chiffres, symboles
- Un mot de passe différent par compte important
- Ne partagez jamais votre mot de passe

**Les virus et malwares**
- N'ouvrez pas les pièces jointes d'expéditeurs inconnus
- Ne cliquez pas sur des liens suspects dans les emails
- Maintenez Windows Update activé
- Utilisez un antivirus (Windows Defender est gratuit et suffisant)

**Sauvegarder ses données**
- Règle 3-2-1 : 3 copies, sur 2 supports différents, dont 1 hors site
- Utilisez une clé USB ou un disque externe pour sauvegarder
- Google Drive, OneDrive ou Dropbox pour la sauvegarde en ligne (gratuit)

> 💡 **Rappel important** : Un fichier supprimé de la corbeille est définitivement perdu. Réfléchissez avant de vider la corbeille !
`, [
          {
            question: "Que faut-il faire avant de supprimer définitivement un fichier de la corbeille ?",
            options: [
              { text: "Rien, on peut vider la corbeille sans hésitation", correct: false },
              { text: "S'assurer qu'on n'a plus besoin de ce fichier, car la suppression est irréversible", correct: true },
              { text: "Copier le fichier dans un autre dossier automatiquement", correct: false },
              { text: "Attendre 24h avant de le supprimer", correct: false },
            ]
          },
          {
            question: "Quel est un bon exemple de nom de fichier professionnel ?",
            options: [
              { text: "document final VRAI2.docx", correct: false },
              { text: "fichier.docx", correct: false },
              { text: "Rapport_Ventes_Mars2025.docx", correct: true },
              { text: "Sans titre (1).docx", correct: false },
            ]
          }
        ]),
      ]
    },

    /* ══════════════════════════════════════════
       MODULE 2 : Microsoft Word
    ══════════════════════════════════════════ */
    {
      title: "Module 2 — Microsoft Word",
      lessons: [
        lesson("Découvrir l'interface Word", `
## Microsoft Word : L'interface

Microsoft Word est le logiciel de traitement de texte le plus utilisé au monde. Il permet de créer des lettres, CV, rapports, contrats et bien plus encore.

### Ouvrir Word

1. Cliquez sur **Démarrer**
2. Tapez « Word » dans la barre de recherche
3. Cliquez sur Microsoft Word
4. Choisissez **Document vierge** pour commencer

### L'interface Word

**La barre de titre** (tout en haut)
- Affiche le nom du document
- Les boutons Réduire, Agrandir, Fermer

**Le Ruban** (barre d'outils principale)
Divisé en onglets :
- **Accueil** : police, taille, gras, couleurs, alignement
- **Insertion** : images, tableaux, en-têtes
- **Mise en page** : marges, orientation, taille papier
- **Révision** : correction orthographique, suivi des modifications

**La zone de saisie**
- C'est la feuille blanche où vous tapez
- Le curseur clignote à l'endroit où vous allez écrire

**La barre d'état** (tout en bas)
- Nombre de mots, de pages
- Zoom (agrandissement de l'affichage)

### Créer, ouvrir et enregistrer

**Créer un nouveau document**
- Ctrl + N

**Ouvrir un document existant**
- Ctrl + O → naviguer vers votre fichier

**Enregistrer**
- Ctrl + S → enregistre dans le même fichier
- Ctrl + Maj + S → Enregistrer sous (pour choisir l'emplacement et le nom)

**Formats de fichier**
- **.docx** : format Word standard (recommandé)
- **.pdf** : pour partager sans que quelqu'un modifie
- **.odt** : format libre compatible LibreOffice

> 💡 **Enregistrez régulièrement** (Ctrl + S) pour ne pas perdre votre travail en cas de panne de courant !
`, [
          {
            question: "Quel raccourci permet d'enregistrer rapidement un document Word ?",
            options: [
              { text: "Ctrl + N", correct: false },
              { text: "Ctrl + O", correct: false },
              { text: "Ctrl + S", correct: true },
              { text: "Ctrl + P", correct: false },
            ]
          },
          {
            question: "Dans quel format enregistrer un document Word pour qu'il ne puisse pas être modifié ?",
            options: [
              { text: ".docx", correct: false },
              { text: ".odt", correct: false },
              { text: ".txt", correct: false },
              { text: ".pdf", correct: true },
            ]
          }
        ]),

        lesson("Mettre en forme du texte", `
## Mettre en forme du texte dans Word

La mise en forme rend vos documents plus lisibles et professionnels.

### Sélectionner du texte

Avant de mettre en forme, vous devez **sélectionner** le texte :
- Cliquer + glisser la souris sur le texte
- **Ctrl + A** = sélectionner tout le document
- Double-clic = sélectionner un mot
- Triple-clic = sélectionner un paragraphe

### La police et la taille

Dans l'onglet **Accueil** :
- **Police** : choisir la police (Arial, Times New Roman, Calibri...)
- **Taille** : choisir la taille (12 = standard, 14 = titre, 10 = notes)

**Conseils professionnels :**
- Corps du texte : Times New Roman 12 ou Calibri 11
- Titres : taille 14-16, en gras
- Ne mélangez pas plus de 2 polices différentes dans un document

### Les attributs de base

| Bouton | Raccourci | Effet |
|---|---|---|
| **G** (Gras) | Ctrl + G | **Texte en gras** |
| *I* (Italique) | Ctrl + I | *Texte en italique* |
| U (Souligné) | Ctrl + U | Texte souligné |
| S barré | — | ~~Texte barré~~ |

### La couleur et le surlignage

- **Couleur du texte** : bouton A avec une couleur → choisir une couleur
- **Surlignage** : bouton surligneur → mettre en évidence comme un marqueur jaune

### L'alignement

| Bouton | Raccourci | Résultat |
|---|---|---|
| Aligner à gauche | Ctrl + Maj + G | Texte aligné à gauche (défaut) |
| Centrer | Ctrl + E | Texte centré |
| Aligner à droite | Ctrl + Maj + D | Texte aligné à droite |
| Justifier | Ctrl + J | Texte aligné des deux côtés (idéal pour les documents pro) |

### Les listes

**Liste à puces** (pour des éléments sans ordre précis)
- Cliquez sur le bouton • dans le Ruban
- Appuyez sur Entrée pour un nouvel élément
- Appuyez 2 fois sur Entrée pour terminer la liste

**Liste numérotée** (pour des étapes dans un ordre précis)
- Cliquez sur le bouton 1. dans le Ruban

> 💡 **Conseil pro** : Pour un document professionnel, utilisez la justification (Ctrl+J) pour le corps du texte. Cela donne un aspect soigné et aéré.
`, [
          {
            question: "Quel raccourci clavier met le texte en gras dans Word ?",
            options: [
              { text: "Ctrl + I", correct: false },
              { text: "Ctrl + G", correct: true },
              { text: "Ctrl + U", correct: false },
              { text: "Ctrl + B", correct: false },
            ]
          },
          {
            question: "Quel alignement est recommandé pour le corps d'un document professionnel ?",
            options: [
              { text: "Aligné à gauche", correct: false },
              { text: "Centré", correct: false },
              { text: "Aligné à droite", correct: false },
              { text: "Justifié", correct: true },
            ]
          }
        ]),

        lesson("Mise en page et styles", `
## Mise en page professionnelle dans Word

### Configurer la page

Onglet **Mise en page** :

**Les marges**
- Standard : 2,5 cm de chaque côté
- Étroites : 1,27 cm (pour faire tenir plus de contenu)
- Marges personnalisées : choisissez vous-même

**L'orientation**
- **Portrait** (vertical) : pour lettres, rapports, CV
- **Paysage** (horizontal) : pour tableaux larges, présentations

**La taille du papier**
- **A4** (21 × 29,7 cm) : standard en Afrique et Europe
- **Letter** : standard aux États-Unis

### L'interligne

L'interligne = l'espace entre les lignes de texte.

1. Sélectionnez le texte
2. Onglet Accueil → Interligne (icône avec des flèches)
3. Choisissez : 1,0 (serré), 1,5 (standard), 2,0 (aéré)

### Les styles Word

Les **styles** permettent de formater rapidement les titres et le texte de façon cohérente.

Dans l'onglet Accueil, vous voyez des styles prédéfinis :
- **Normal** : texte courant
- **Titre 1** : grand titre de section
- **Titre 2** : sous-titre
- **Titre 3** : sous-sous-titre

**Avantage** : si vous changez un style, tous les textes avec ce style se mettent à jour automatiquement !

### En-tête et pied de page

**En-tête** : zone en haut de chaque page (nom de l'entreprise, logo)  
**Pied de page** : zone en bas de chaque page (numéro de page, date)

Pour insérer :
1. Onglet **Insertion** → En-tête ou Pied de page
2. Choisissez un modèle
3. Tapez votre texte

**Numérotation des pages :**
Insertion → Numéro de page → choisissez la position

### Imprimer un document

Ctrl + P → aperçu avant impression → ajustez si nécessaire → Imprimer

> 💡 **Astuce** : Vérifiez toujours l'aperçu avant impression (Ctrl+P) pour éviter de gaspiller du papier.
`, [
          {
            question: "Quelle orientation de page utilise-t-on pour un CV ou une lettre ?",
            options: [
              { text: "Paysage (horizontal)", correct: false },
              { text: "Portrait (vertical)", correct: true },
              { text: "Carré", correct: false },
              { text: "Panoramique", correct: false },
            ]
          },
          {
            question: "Quel est l'avantage principal d'utiliser les Styles Word ?",
            options: [
              { text: "Ils rendent le document plus coloré automatiquement", correct: false },
              { text: "Ils permettent de formater le texte de façon cohérente, et une modification du style se répercute partout", correct: true },
              { text: "Ils réduisent la taille du fichier", correct: false },
              { text: "Ils corrigent automatiquement les fautes d'orthographe", correct: false },
            ]
          }
        ]),

        lesson("Tableaux et images dans Word", `
## Insérer des tableaux et des images

### Créer un tableau

Les tableaux permettent d'organiser des informations en lignes et colonnes.

**Méthode 1 : Insertion rapide**
1. Onglet **Insertion** → Tableau
2. Survolez la grille pour choisir le nombre de lignes et colonnes
3. Cliquez pour insérer

**Méthode 2 : Tableau personnalisé**
1. Insertion → Tableau → Insérer un tableau
2. Entrez le nombre exact de colonnes et de lignes

### Manipuler un tableau

**Ajouter une ligne**
- Cliquez dans la dernière cellule + appuyez sur Tab, OU
- Cliquez droit → Insérer → Lignes en dessous

**Supprimer des lignes/colonnes**
- Sélectionnez → Cliquez droit → Supprimer les lignes

**Fusionner des cellules** (pour faire un grand titre)
- Sélectionnez plusieurs cellules → Cliquez droit → Fusionner les cellules

**Mettre en forme le tableau**
- Cliquez dans le tableau → onglet **Création de tableau** → choisissez un style

### Exemple de tableau professionnel

| Mois | Ventes | Dépenses | Bénéfice |
|---|---|---|---|
| Janvier | 500 000 F | 300 000 F | 200 000 F |
| Février | 650 000 F | 350 000 F | 300 000 F |
| Mars | 420 000 F | 280 000 F | 140 000 F |

### Insérer une image

**Image depuis votre ordinateur**
1. Onglet Insertion → Images → Ce périphérique
2. Naviguez vers l'image → Insérer

**Image depuis Internet**
1. Insertion → Images → Images en ligne
2. Recherchez une image (vérifiez les droits d'utilisation)

**Redimensionner une image**
- Cliquez sur l'image → des poignées apparaissent aux coins
- Glissez un **coin** (pour conserver les proportions)
- Ne glissez jamais les bords du milieu (déformerait l'image)

**Habillage du texte**
- Cliquez sur l'image → icône de mise en page → choisissez :
  - **Aligné sur le texte** : l'image se comporte comme un caractère
  - **Carré** : le texte contourne l'image
  - **Devant le texte** : l'image recouvre le texte

> ⚠️ **Conseil** : Pour un document professionnel, utilisez des images de haute qualité et évitez les images floues ou pixelisées.
`, [
          {
            question: "Comment ajouter une ligne à la fin d'un tableau Word rapidement ?",
            options: [
              { text: "Appuyer sur Entrée dans la dernière cellule", correct: false },
              { text: "Cliquer dans la dernière cellule et appuyer sur Tab", correct: true },
              { text: "Faire Ctrl + Entrée", correct: false },
              { text: "Double-cliquer sur le bas du tableau", correct: false },
            ]
          },
          {
            question: "Comment redimensionner une image sans la déformer ?",
            options: [
              { text: "En glissant les bords du milieu", correct: false },
              { text: "En glissant les coins de l'image", correct: true },
              { text: "En changeant la taille dans la police", correct: false },
              { text: "En faisant clic droit → Propriétés", correct: false },
            ]
          }
        ]),

        lesson("Créer un CV professionnel avec Word", `
## Créer un CV professionnel avec Word

### La structure d'un bon CV

Un CV doit tenir sur **1 page maximum** pour les débutants (2 pages maximum après 5 ans d'expérience).

**Les sections essentielles :**

**1. En-tête (vos coordonnées)**
\`\`\`
PRÉNOM NOM
Adresse | Téléphone | Email | LinkedIn (facultatif)
\`\`\`

**2. Profil / Résumé** (3-4 lignes)
Qui vous êtes et ce que vous cherchez.

**3. Expériences professionnelles** (de la plus récente à la plus ancienne)
\`\`\`
Titre du poste | Nom de l'entreprise | Ville | Date
• Responsabilité 1
• Responsabilité 2
\`\`\`

**4. Formation / Diplômes**
\`\`\`
Diplôme | Établissement | Année
\`\`\`

**5. Compétences**
- Informatique : Word, Excel, PowerPoint...
- Langues : Français (bilingue), Anglais (intermédiaire)
- Autres : permis B, conduite de projet...

### Mise en forme du CV

**Polices recommandées :**
- Calibri, Arial ou Garamond
- Taille 11-12 pour le texte, 14-16 pour le nom

**Mise en page :**
- Marges : 1,5 à 2 cm
- Interligne : 1,15

**Utiliser des colonnes pour un CV moderne :**
1. Mise en page → Colonnes → Deux colonnes
2. Colonne gauche : coordonnées, photo, compétences
3. Colonne droite : expériences, formations

### Conseils clés pour un CV réussi

✅ Adaptez votre CV à chaque offre d'emploi  
✅ Utilisez des verbes d'action : géré, créé, développé, organisé...  
✅ Quantifiez vos résultats : "augmenté les ventes de 20%"  
✅ Vérifiez l'orthographe (F7 dans Word)  
✅ Enregistrez en PDF avant d'envoyer  
✅ Nommez le fichier : CV_PrenomNom.pdf  

❌ Pas de photo obligatoire (selon les pays)  
❌ Évitez les couleurs trop vives  
❌ Pas de fautes d'orthographe  

> 💡 **Modèles gratuits** : Word propose des modèles de CV prêts à l'emploi. Fichier → Nouveau → tapez "CV" dans la recherche.
`, [
          {
            question: "Quelle longueur maximale est recommandée pour un CV de débutant ?",
            options: [
              { text: "3 pages", correct: false },
              { text: "2 pages", correct: false },
              { text: "1 page", correct: true },
              { text: "Il n'y a pas de limite", correct: false },
            ]
          },
          {
            question: "Dans quel format doit-on enregistrer son CV avant de l'envoyer ?",
            options: [
              { text: ".docx", correct: false },
              { text: ".txt", correct: false },
              { text: ".pdf", correct: true },
              { text: ".odt", correct: false },
            ]
          }
        ]),
      ]
    },

    /* ══════════════════════════════════════════
       MODULE 3 : Microsoft Excel
    ══════════════════════════════════════════ */
    {
      title: "Module 3 — Microsoft Excel",
      lessons: [
        lesson("L'interface Excel et les bases", `
## Microsoft Excel : Les bases

Microsoft Excel est un **tableur** : un logiciel pour organiser des données, faire des calculs et créer des graphiques. C'est un outil indispensable dans tous les secteurs professionnels.

### L'interface Excel

**Le classeur** : le fichier Excel (.xlsx)  
**Les feuilles** (onglets en bas) : un classeur contient plusieurs feuilles (Feuil1, Feuil2...)  
**Les cellules** : les cases du tableau  

**Les colonnes** : nommées par des lettres (A, B, C... Z, AA, AB...)  
**Les lignes** : numérotées (1, 2, 3...)  
**La référence de cellule** : combinaison colonne + ligne (ex: A1, B3, C10)

**La barre de formule** (au-dessus du tableau)
- Affiche le contenu de la cellule sélectionnée
- C'est là qu'on voit et modifie les formules

**La zone Nom** (à gauche de la barre de formule)
- Affiche la référence de la cellule active (ex: A1)
- Permet de naviguer rapidement vers une cellule

### Saisir des données

1. Cliquez sur une cellule
2. Tapez votre texte ou chiffre
3. Appuyez sur **Entrée** pour confirmer et aller en bas
4. Ou appuyez sur **Tab** pour confirmer et aller à droite

**Types de données :**
- **Texte** : noms, descriptions (aligné à gauche)
- **Nombres** : valeurs numériques (aligné à droite)
- **Dates** : Excel reconnaît les formats de date
- **Formules** : commencent toujours par = 

### Navigation dans Excel

| Raccourci | Action |
|---|---|
| Ctrl + Fin | Aller à la dernière cellule utilisée |
| Ctrl + Début | Retour à la cellule A1 |
| Ctrl + → | Aller à la fin de la ligne de données |
| Ctrl + ↓ | Aller au bas de la colonne de données |
| F5 | Aller à une cellule spécifique |

### Ajuster les colonnes et lignes

**Ajuster la largeur d'une colonne**
- Double-cliquez sur le bord droit de l'en-tête de colonne (ajustement automatique)
- Ou glissez le bord pour la redimensionner manuellement

**Figer les volets** (pour garder les en-têtes visibles)
1. Cliquez sur la cellule sous les en-têtes
2. Affichage → Figer les volets → Figer les volets

> 💡 **Conseil** : Utilisez Ctrl+Z pour annuler une erreur dans Excel, comme dans Word !
`, [
          {
            question: "Comment commence toujours une formule dans Excel ?",
            options: [
              { text: "Par le signe +", correct: false },
              { text: "Par le signe =", correct: true },
              { text: "Par le mot 'formule'", correct: false },
              { text: "Par une majuscule", correct: false },
            ]
          },
          {
            question: "Quelle est la référence de la cellule qui se trouve en colonne B, ligne 5 ?",
            options: [
              { text: "5B", correct: false },
              { text: "B-5", correct: false },
              { text: "B5", correct: true },
              { text: "Colonne B Ligne 5", correct: false },
            ]
          }
        ]),

        lesson("Les formules et fonctions essentielles", `
## Les formules et fonctions dans Excel

### Les opérations de base

Toutes les formules commencent par **=**

| Opération | Symbole | Exemple | Résultat |
|---|---|---|---|
| Addition | + | =A1+B1 | Somme de A1 et B1 |
| Soustraction | - | =A1-B1 | Différence |
| Multiplication | * | =A1*B1 | Produit |
| Division | / | =A1/B1 | Quotient |
| Puissance | ^ | =A1^2 | A1 au carré |

### Les fonctions essentielles

**SOMME** — Additionner une plage de cellules
\`\`\`excel
=SOMME(A1:A10)        → somme de A1 à A10
=SOMME(A1:A10;C1:C5)  → somme de deux plages
\`\`\`

**MOYENNE** — Calculer une moyenne
\`\`\`excel
=MOYENNE(B1:B12)    → moyenne des valeurs de B1 à B12
\`\`\`

**MAX et MIN** — Trouver la valeur maximale ou minimale
\`\`\`excel
=MAX(C1:C100)    → plus grande valeur
=MIN(C1:C100)    → plus petite valeur
\`\`\`

**NB** — Compter le nombre de cellules contenant des chiffres
\`\`\`excel
=NB(A1:A50)      → compte les cellules avec des nombres
=NBVAL(A1:A50)   → compte les cellules non vides (texte + nombres)
\`\`\`

**SI** — Condition (si vrai, afficher X, sinon afficher Y)
\`\`\`excel
=SI(A1>10;"Bon";"Insuffisant")
→ Si A1 est supérieur à 10, affiche "Bon", sinon "Insuffisant"
\`\`\`

### Exemple pratique : Calcul de paie

| A | B | C | D |
|---|---|---|---|
| Employé | Salaire brut | Cotisations (10%) | Salaire net |
| Diallo | 200000 | =B2*10% | =B2-C2 |
| Traoré | 175000 | =B3*10% | =B3-C3 |
| **Total** | =SOMME(B2:B3) | =SOMME(C2:C3) | =SOMME(D2:D3) |

### Références absolues et relatives

**Référence relative** (A1) : change quand on copie la formule  
**Référence absolue** ($A$1) : ne change PAS quand on copie (appuyez sur F4)

**Exemple** : Calculer une remise fixe de 15% sur plusieurs prix
\`\`\`excel
Prix en A2, taux de remise en B1 (15%)
=A2*$B$1    ← $B$1 reste fixe quand on copie la formule vers le bas
\`\`\`

> 💡 **Astuce rapide** : Sélectionnez une plage de nombres et regardez en bas à droite d'Excel → la SOMME, MOYENNE et NOMBRE s'affichent instantanément !
`, [
          {
            question: "Quelle formule permet de calculer la somme des cellules A1 à A20 ?",
            options: [
              { text: "=TOTAL(A1:A20)", correct: false },
              { text: "=ADDITION(A1;A20)", correct: false },
              { text: "=SOMME(A1:A20)", correct: true },
              { text: "=A1+A2+...+A20", correct: false },
            ]
          },
          {
            question: "Comment rendre une référence de cellule absolue dans Excel ?",
            options: [
              { text: "En écrivant la référence en majuscules", correct: false },
              { text: "En ajoutant le signe $ devant la lettre et le chiffre ($A$1)", correct: true },
              { text: "En entourant la référence de parenthèses (A1)", correct: false },
              { text: "En doublant la référence AA11", correct: false },
            ]
          }
        ]),

        lesson("Mettre en forme et créer des graphiques", `
## Mise en forme et graphiques dans Excel

### Mise en forme des cellules

**Format des nombres**
- Sélectionnez les cellules → Clic droit → Format de cellule
- **Nombre** : avec décimales (1 234,50)
- **Monétaire** : avec symbole (1 234,50 FCFA)
- **Pourcentage** : (75%)
- **Date** : (15/01/2025)

**Raccourcis rapides (onglet Accueil)**
- % : format pourcentage
- , : séparateur de milliers
- ↑ ↓ : augmenter/diminuer les décimales

### La mise en forme conditionnelle

Elle colore automatiquement les cellules selon leur valeur — très utile pour les tableaux de bord !

1. Sélectionnez les cellules
2. Accueil → Mise en forme conditionnelle
3. Règles de mise en évidence → choisissez votre règle

**Exemple :**
- Cellules rouges si valeur < 0
- Cellules vertes si valeur > 100 000
- Barres de données pour visualiser rapidement les valeurs

### Créer un graphique

Les graphiques permettent de visualiser vos données en un coup d'œil.

**Étapes pour créer un graphique :**
1. Sélectionnez vos données (avec les en-têtes)
2. Onglet **Insertion** → Graphiques
3. Choisissez le type de graphique
4. Le graphique s'insère dans la feuille

**Quel type de graphique choisir ?**

| Type | Utilisation |
|---|---|
| **Histogramme** (barres verticales) | Comparer des valeurs entre catégories |
| **Courbes** | Montrer une évolution dans le temps |
| **Secteurs** (camembert) | Montrer des proportions (%) d'un tout |
| **Barres** (horizontales) | Comparer des catégories avec des noms longs |

### Personnaliser un graphique

Après avoir créé le graphique :
- Cliquez dessus → onglet **Création de graphique**
- Changer le type de graphique
- Ajouter un titre : cliquez sur "Titre du graphique"
- Changer les couleurs : Style de graphique

**Déplacer un graphique sur une nouvelle feuille :**
Création de graphique → Déplacer le graphique → Nouvelle feuille

> 💡 **Conseil pro** : Pour un graphique de ventes mensuel, utilisez le type **Courbes** pour montrer la tendance, et l'**Histogramme** pour comparer les mois entre eux.
`, [
          {
            question: "Quel type de graphique utilise-t-on pour montrer l'évolution des ventes sur 12 mois ?",
            options: [
              { text: "Secteurs (camembert)", correct: false },
              { text: "Courbes", correct: true },
              { text: "Nuage de points", correct: false },
              { text: "Boursier", correct: false },
            ]
          },
          {
            question: "À quoi sert la mise en forme conditionnelle ?",
            options: [
              { text: "À imprimer automatiquement les cellules importantes", correct: false },
              { text: "À colorier automatiquement les cellules selon leurs valeurs", correct: true },
              { text: "À corriger les formules erronées", correct: false },
              { text: "À protéger les cellules contre la modification", correct: false },
            ]
          }
        ]),

        lesson("Trier, filtrer et gérer une liste de données", `
## Gérer une liste de données dans Excel

### Créer un tableau structuré

**Convertir une plage en Tableau Excel :**
1. Cliquez dans vos données
2. Insertion → Tableau (Ctrl + T)
3. Vérifiez que "Mon tableau comporte des en-têtes" est coché
4. OK

**Avantages du tableau Excel :**
- Filtres automatiques sur chaque colonne
- Les formules se copient automatiquement
- Le tableau s'agrandit automatiquement
- Mise en forme automatique alternée

### Trier les données

**Tri simple :**
1. Cliquez sur l'en-tête de la colonne à trier
2. Onglet **Données** → Trier de A à Z (ou Z à A)

**Tri multiple** (trier par plusieurs critères) :
1. Données → Trier
2. Ajouter des niveaux de tri
3. Exemple : Trier par Région PUIS par Nom

### Filtrer les données

Les **filtres** permettent d'afficher uniquement les données qui correspondent à des critères.

**Activer les filtres :**
- Dans un tableau Excel, les filtres sont déjà actifs (petites flèches sur les en-têtes)
- Sinon : Données → Filtrer

**Utiliser un filtre :**
1. Cliquez sur la flèche de l'en-tête d'une colonne
2. Décochez "Sélectionner tout"
3. Cochez les valeurs à afficher
4. OK

**Filtres avancés :**
- Filtres de texte : "Commence par", "Contient"...
- Filtres de nombres : "Supérieur à", "Entre"...
- Filtres de dates : "Cette semaine", "Ce mois"...

### Exemple pratique : Gestion de commandes

| Référence | Client | Montant | Statut | Date |
|---|---|---|---|---|
| CMD-001 | Diallo | 75 000 | Payé | 01/03/2025 |
| CMD-002 | Traoré | 120 000 | En attente | 02/03/2025 |
| CMD-003 | Sow | 45 000 | Payé | 03/03/2025 |

**Filtrer pour voir seulement les commandes "En attente":**
→ Cliquez sur la flèche Statut → décochez tout → cochez "En attente"

**Calculer le total des commandes filtrées :**
\`\`\`excel
=SOUS.TOTAL(9;C2:C100)   ← calcule uniquement les cellules visibles
\`\`\`

> ⚠️ **Attention** : La fonction SOMME additionne toutes les cellules, même les lignes cachées par un filtre. Utilisez SOUS.TOTAL pour n'additionner que les lignes visibles.
`, [
          {
            question: "Quelle fonction utilise-t-on pour calculer la somme uniquement des cellules visibles après un filtre ?",
            options: [
              { text: "=SOMME()", correct: false },
              { text: "=TOTAL()", correct: false },
              { text: "=SOUS.TOTAL(9;...)", correct: true },
              { text: "=SOMME.FILTRE()", correct: false },
            ]
          },
          {
            question: "Quel raccourci clavier permet de créer un tableau structuré dans Excel ?",
            options: [
              { text: "Ctrl + T", correct: true },
              { text: "Ctrl + Tab", correct: false },
              { text: "Ctrl + F", correct: false },
              { text: "Alt + T", correct: false },
            ]
          }
        ]),
      ]
    },

    /* ══════════════════════════════════════════
       MODULE 4 : Microsoft PowerPoint
    ══════════════════════════════════════════ */
    {
      title: "Module 4 — Microsoft PowerPoint",
      lessons: [
        lesson("Créer une présentation PowerPoint", `
## Microsoft PowerPoint : Créer des présentations

Microsoft PowerPoint permet de créer des présentations visuelles pour des réunions, des formations, des soutenances ou des conférences.

### Démarrer une présentation

1. Ouvrez PowerPoint
2. Choisissez un **thème** (modèle de design) ou commencez avec une présentation vierge
3. La première diapositive s'affiche avec des zones de texte pré-définies

**Les éléments de l'interface :**
- **Panneau des diapositives** (à gauche) : vue miniature de toutes les slides
- **Zone de travail** (au centre) : la diapositive en cours d'édition
- **Onglets** (en haut) : Accueil, Insertion, Création, Transitions, Animations...

### Les mises en page de diapositives

Chaque diapositive a une **mise en page** (layout) :
- Diapositive de titre (grande)
- Titre et contenu
- Deux colonnes
- Image avec légende
- Diapositive vierge

**Changer la mise en page :**
Accueil → Mise en page → choisir un modèle

### Ajouter du texte

- Cliquez dans une zone de texte et tapez
- Pour ajouter une nouvelle zone de texte : Insertion → Zone de texte → dessinez-la

### Ajouter des diapositives

- **Ctrl + M** : nouvelle diapositive
- Ou : clic droit dans le panneau → Nouvelle diapositive
- Ou : copiez une diapositive existante (Ctrl+C puis Ctrl+V dans le panneau)

### La règle des 5-5-5

Pour des présentations efficaces :
- Maximum **5 diapositives** par grande idée
- Maximum **5 lignes** de texte par diapositive
- Maximum **5 mots** par ligne

> 💡 **PowerPoint n'est pas un document** : vos diapositives doivent contenir des mots-clés, pas des paragraphes entiers. Le présentateur complète avec sa parole.
`, [
          {
            question: "Quel raccourci clavier ajoute une nouvelle diapositive dans PowerPoint ?",
            options: [
              { text: "Ctrl + N", correct: false },
              { text: "Ctrl + M", correct: true },
              { text: "Ctrl + D", correct: false },
              { text: "Ctrl + Entrée", correct: false },
            ]
          },
          {
            question: "Selon la règle des 5-5-5, combien de mots maximum par ligne dans une diapositive ?",
            options: [
              { text: "10 mots", correct: false },
              { text: "5 mots", correct: true },
              { text: "3 mots", correct: false },
              { text: "Il n'y a pas de limite", correct: false },
            ]
          }
        ]),

        lesson("Animations, transitions et présentation", `
## Animations, transitions et mode présentation

### Les transitions

Les **transitions** sont les effets visuels entre deux diapositives.

**Ajouter une transition :**
1. Sélectionnez une diapositive dans le panneau
2. Onglet **Transitions**
3. Choisissez un effet (Fondu, Glissement, Effacer...)
4. Cliquez sur "Appliquer à toutes" pour uniformiser

**Conseil :** Utilisez une transition douce et uniforme (Fondu est très pro). Évitez de mélanger des effets différents sur chaque slide.

### Les animations

Les **animations** sont les effets appliqués aux éléments **sur une diapositive** (texte, image, forme).

**Ajouter une animation :**
1. Cliquez sur l'élément à animer (texte, image...)
2. Onglet **Animations**
3. Choisissez un effet :
   - **Entrée** : comment l'élément apparaît (Fondu, Envol...)
   - **Accent** : met en valeur un élément présent
   - **Sortie** : comment l'élément disparaît
4. Choisissez le déclencheur : Au clic, Avec le précédent, Après le précédent

**Volet Animation** (pour gérer l'ordre) :
Animations → Volet Animation → réorganisez par glisser-déposer

### Mode présentation (Diaporama)

**Démarrer le diaporama :**
- **F5** : démarrer depuis le début
- **Maj + F5** : démarrer depuis la diapositive actuelle

**Pendant la présentation :**
- **Flèche droite** ou **Espace** : diapositive suivante
- **Flèche gauche** : diapositive précédente
- **B** : écran noir (pour captiver l'attention)
- **Échap** : quitter le mode présentation

**Le mode Présentateur** (si vous avez 2 écrans)
- Votre écran : la diapositive actuelle + vos notes
- L'écran du public : uniquement la diapositive

### Enregistrer et partager

**Formats d'enregistrement :**
- **.pptx** : format PowerPoint modifiable
- **.pdf** : pour partager sans risque de modification
- **.ppsx** : s'ouvre directement en mode présentation
- **Vidéo** : Fichier → Exporter → Créer une vidéo (très utile !)

**Partager via email :**
Fichier → Partager → Envoyer par email → choisissez PDF ou PPTX

> 💡 **Conseil pro** : Préparez vos notes dans la zone "Notes" en bas de chaque diapositive. En mode présentateur, vous verrez vos notes sur votre écran pendant que le public voit la diapositive.
`, [
          {
            question: "Quel raccourci démarre le diaporama depuis le début dans PowerPoint ?",
            options: [
              { text: "Ctrl + P", correct: false },
              { text: "Maj + F5", correct: false },
              { text: "F5", correct: true },
              { text: "Ctrl + D", correct: false },
            ]
          },
          {
            question: "Quelle touche appuyer pendant une présentation pour passer en écran noir ?",
            options: [
              { text: "Espace", correct: false },
              { text: "B", correct: true },
              { text: "N", correct: false },
              { text: "Échap", correct: false },
            ]
          }
        ]),
      ]
    },

    /* ══════════════════════════════════════════
       MODULE 5 : Internet et email professionnel
    ══════════════════════════════════════════ */
    {
      title: "Module 5 — Internet et email professionnel",
      lessons: [
        lesson("Naviguer efficacement sur Internet", `
## Naviguer efficacement sur Internet

### Qu'est-ce qu'Internet ?

**Internet** est un réseau mondial d'ordinateurs connectés entre eux qui permet d'échanger des informations, de communiquer et d'accéder à des ressources.

### Les navigateurs web

Un **navigateur** est le logiciel qui vous permet d'accéder aux sites web :
- **Google Chrome** : le plus populaire, rapide
- **Mozilla Firefox** : respect de la vie privée
- **Microsoft Edge** : intégré à Windows
- **Safari** : sur Mac et iPhone

### L'URL (adresse web)

Une URL ressemble à : **https://www.google.com**
- **https://** : protocole sécurisé (le cadenas 🔒 = site sécurisé)
- **www** : World Wide Web
- **google** : nom du site
- **.com** : domaine (.sn pour Sénégal, .fr pour France, .org pour associations)

### Rechercher efficacement avec Google

**Astuces de recherche :**

| Technique | Exemple | Résultat |
|---|---|---|
| Guillemets | "offre d'emploi Dakar" | Résultats avec la phrase exacte |
| Moins (-) | emploi -Dakar | Exclut le mot Dakar |
| site: | formation site:gov.sn | Recherche sur un site précis |
| filetype: | rapport filetype:pdf | Trouve des fichiers PDF |

### Les raccourcis du navigateur

| Raccourci | Action |
|---|---|
| Ctrl + T | Nouvel onglet |
| Ctrl + W | Fermer l'onglet |
| Ctrl + L | Aller dans la barre d'adresse |
| Ctrl + D | Ajouter aux favoris |
| F5 | Actualiser la page |
| Ctrl + F | Rechercher dans la page |
| Ctrl + + / - | Zoomer / Dézoomer |

### Sécurité sur Internet

🔴 **Signes d'un site dangereux :**
- Pas de cadenas (http:// sans le s)
- Fautes d'orthographe dans l'URL
- Demande d'informations bancaires sans raison claire

✅ **Bonnes pratiques :**
- Ne cliquez jamais sur des publicités qui disent "Vous avez gagné !"
- Ne téléchargez que depuis des sites officiels
- Utilisez un mot de passe unique pour chaque compte important
- Activez la double authentification (2FA) quand c'est possible

> ⚠️ **Phishing** : Des escrocs créent de faux sites (copie de votre banque, de Facebook...) pour voler vos identifiants. Vérifiez toujours l'URL avant de vous connecter.
`, [
          {
            question: "Que signifie le cadenas 🔒 à côté d'une URL dans le navigateur ?",
            options: [
              { text: "Le site est payant", correct: false },
              { text: "La connexion est sécurisée (https)", correct: true },
              { text: "Le site est vérifié par Google", correct: false },
              { text: "Le site est lent", correct: false },
            ]
          },
          {
            question: "Comment rechercher uniquement des fichiers PDF sur Google ?",
            options: [
              { text: "En tapant pdf: avant la recherche", correct: false },
              { text: "En tapant .pdf à la fin de la recherche", correct: false },
              { text: "En utilisant filetype:pdf dans la recherche", correct: true },
              { text: "Ce n'est pas possible avec Google", correct: false },
            ]
          }
        ]),

        lesson("Maîtriser l'email professionnel", `
## L'email professionnel

L'email est le moyen de communication professionnel numéro 1 dans le monde des affaires. Bien l'utiliser vous donnera une image sérieuse et compétente.

### Créer une adresse email professionnelle

**Adresses acceptables au travail :**
✅ prenom.nom@gmail.com  
✅ p.nom@gmail.com  
✅ prenomnom2025@gmail.com  

**Adresses à éviter dans un contexte professionnel :**
❌ fighter007@yahoo.fr  
❌ princesse_dakar@hotmail.com  
❌ loveman95@gmail.com  

### La structure d'un email professionnel

**1. L'objet (sujet)**
- Court et précis (5-10 mots maximum)
- Doit annoncer clairement le contenu
- ✅ "Demande de rendez-vous – Candidature poste assistant comptable"
- ❌ "Bonjour" ou "Question"

**2. La formule d'ouverture**
- "Monsieur/Madame," (si on ne connaît pas le nom)
- "Monsieur Diallo," (si on connaît le nom)
- "Bonjour [Prénom]," (relation moins formelle)

**3. Le corps de l'email**
- 1er paragraphe : présentation et contexte
- 2e paragraphe : le message principal / la demande
- 3e paragraphe : actions à venir / délai

**4. La formule de politesse**
- "Veuillez agréer, Monsieur/Madame, l'expression de mes salutations distinguées." (très formel)
- "Cordialement," (standard professionnel)
- "Bien à vous," (légèrement moins formel)

**5. La signature**
\`\`\`
Prénom NOM
Poste | Entreprise
Téléphone | Email
\`\`\`

### Exemple d'email professionnel complet

\`\`\`
Objet : Candidature – Poste de secrétaire comptable – Réf. SC2025

Madame, Monsieur,

Suite à votre annonce publiée sur LinkedIn le 15 janvier 2025, 
je me permets de vous adresser ma candidature pour le poste de 
secrétaire comptable.

Titulaire d'un BTS en Gestion Comptable et fort de 3 ans 
d'expérience dans ce domaine, je suis convaincu de pouvoir 
apporter une contribution significative à votre équipe.

Vous trouverez en pièce jointe mon CV et ma lettre de motivation. 
Je reste disponible pour un entretien à votre convenance.

Dans l'attente de votre retour, veuillez agréer, Madame, Monsieur,
l'expression de mes salutations distinguées.

Amadou DIALLO
Comptable | Cabinet Fiduciaire ABC
Tél : +221 77 000 00 00
amadou.diallo@email.com
\`\`\`

### Les pièces jointes

- Taille maximale recommandée : **10 Mo** par email
- Pour les fichiers volumineux : utilisez Google Drive ou WeTransfer
- Nommez vos fichiers clairement : **CV_AmadouDiallo.pdf**
- Mentionnez la pièce jointe dans le corps de l'email

> 💡 **Règle d'or** : Relisez votre email **2 fois** avant d'envoyer. Une faute d'orthographe dans un email professionnel peut ruiner une bonne impression.
`, [
          {
            question: "Quelle formule de politesse est standard pour un email professionnel ?",
            options: [
              { text: "À bientôt !", correct: false },
              { text: "Bisous,", correct: false },
              { text: "Cordialement,", correct: true },
              { text: "Ciao,", correct: false },
            ]
          },
          {
            question: "Quelle adresse email est acceptable dans un contexte professionnel ?",
            options: [
              { text: "fighter007@yahoo.fr", correct: false },
              { text: "prenom.nom@gmail.com", correct: true },
              { text: "princesse_dakar@hotmail.com", correct: false },
              { text: "loveman95@gmail.com", correct: false },
            ]
          }
        ]),

        lesson("Les outils collaboratifs et le cloud", `
## Les outils collaboratifs et le stockage cloud

### Qu'est-ce que le cloud ?

Le **cloud** (nuage) désigne le stockage de données sur des serveurs distants accessibles via Internet. Vos fichiers sont disponibles de n'importe quel appareil connecté.

### Les principaux services cloud gratuits

**Google Drive (15 Go gratuits)**
- Accès : drive.google.com
- Créez des documents Google Docs, Sheets, Slides directement en ligne
- Partagez facilement avec un lien
- Synchronisation automatique depuis votre ordinateur

**OneDrive (Microsoft, 5 Go gratuits)**
- Intégré à Windows et Office
- Synchronisation automatique de vos documents Office
- Accès : onedrive.live.com

**Dropbox (2 Go gratuits)**
- Très fiable, disponible sur tous les appareils
- Partage simple par lien

### Travailler en collaboration avec Google Drive

**Partager un fichier :**
1. Clic droit sur le fichier dans Drive
2. Partager → entrez l'email de la personne
3. Choisissez les droits : Lecteur, Commentateur, Éditeur

**Collaborer en temps réel :**
- Dans Google Docs/Sheets, plusieurs personnes peuvent modifier simultanément
- Les modifications de chacun s'affichent en direct avec une couleur différente
- L'historique des versions est conservé automatiquement

### Google Docs vs Microsoft Word

| | Google Docs | Microsoft Word |
|---|---|---|
| Prix | Gratuit | Payant (Office 365) |
| Stockage | Cloud (Google Drive) | Local + OneDrive |
| Collaboration | Temps réel | Avec OneDrive |
| Fonctionnalités | Basiques | Très complètes |
| Hors ligne | Possible (paramétrage) | Oui |

### WhatsApp Business pour les professionnels

WhatsApp Business offre des fonctionnalités utiles pour les petites entreprises :
- **Profil d'entreprise** : horaires, adresse, site web
- **Catalogue** : présentez vos produits
- **Réponses rapides** : messages prédéfinis pour les questions fréquentes
- **Étiquettes** : organisez vos contacts (Nouveau client, En attente, Payé...)

### Les visioconférences

Pour les réunions à distance :
- **Google Meet** : gratuit, intégré à Gmail
- **Zoom** : populaire, réunions de 40 min gratuites
- **Microsoft Teams** : pour les entreprises avec Office 365

**Rejoindre une réunion :**
1. Cliquez sur le lien envoyé par l'organisateur
2. Autorisez l'accès à votre caméra et microphone
3. Entrez votre nom si demandé

> 💡 **Conseil pour les visioconférences** : Activez votre micro seulement quand vous parlez (coupez le son sinon). Choisissez un fond neutre et une bonne lumière de face.
`, [
          {
            question: "Combien d'espace de stockage gratuit offre Google Drive ?",
            options: [
              { text: "5 Go", correct: false },
              { text: "2 Go", correct: false },
              { text: "15 Go", correct: true },
              { text: "50 Go", correct: false },
            ]
          },
          {
            question: "Quel est l'avantage principal de travailler avec Google Docs par rapport à Word ?",
            options: [
              { text: "Google Docs a plus de fonctionnalités que Word", correct: false },
              { text: "La collaboration en temps réel et la gratuité", correct: true },
              { text: "Les fichiers Google Docs sont plus petits", correct: false },
              { text: "Google Docs fonctionne mieux sans Internet", correct: false },
            ]
          }
        ]),
      ]
    },
  ]
};

/* ─────────────────────────────────────────────
   SEED FUNCTION
───────────────────────────────────────────── */
async function main() {
  console.log("🚀 Démarrage du seed — Formation Informatique & Bureautique...\n");

  // Supprimer si existant
  const existing = await db
    .select()
    .from(formationsTable)
    .where(eq(formationsTable.slug, SLUG));

  if (existing.length > 0) {
    console.log(`⚠️  Formation "${SLUG}" déjà existante — suppression et recréation...`);
    const existingId = existing[0].id;

    // Supprimer en cascade
    const modules = await db
      .select()
      .from(modulesTable)
      .where(eq(modulesTable.formationId, existingId));

    for (const mod of modules) {
      const lessons = await db
        .select()
        .from(lessonsTable)
        .where(eq(lessonsTable.moduleId, mod.id));

      for (const les of lessons) {
        const quizzes = await db
          .select()
          .from(quizzesTable)
          .where(eq(quizzesTable.lessonId, les.id));

        for (const quiz of quizzes) {
          await db.delete(quizOptionsTable).where(eq(quizOptionsTable.quizId, quiz.id));
        }
        await db.delete(quizzesTable).where(eq(quizzesTable.lessonId, les.id));
      }
      await db.delete(lessonsTable).where(eq(lessonsTable.moduleId, mod.id));
    }
    await db.delete(modulesTable).where(eq(modulesTable.formationId, existingId));
    await db.delete(formationsTable).where(eq(formationsTable.id, existingId));
    console.log("   ✅ Formation précédente supprimée.\n");
  }

  // Créer la formation
  const [formation] = await db.insert(formationsTable).values({
    slug: FORMATION.slug,
    title: FORMATION.title,
    description: FORMATION.description,
    category: FORMATION.category,
    active: true,
    isPaid: false,
  }).returning();

  console.log(`✅ Formation créée : "${formation.title}" (ID: ${formation.id})`);

  let totalLessons = 0;
  let totalQuizzes = 0;

  for (let mi = 0; mi < FORMATION.modules.length; mi++) {
    const modData = FORMATION.modules[mi];

    const [mod] = await db.insert(modulesTable).values({
      formationId: formation.id,
      title: modData.title,
      order: mi + 1,
    }).returning();

    console.log(`\n  📚 Module ${mi + 1}: ${modData.title} (${modData.lessons.length} leçons)`);

    for (let li = 0; li < modData.lessons.length; li++) {
      const lesData = modData.lessons[li];

      const [les] = await db.insert(lessonsTable).values({
        moduleId: mod.id,
        title: lesData.title,
        theory: lesData.theory,
        mediaType: "none",
        order: li + 1,
      }).returning();

      totalLessons++;

      for (let qi = 0; qi < lesData.quizzes.length; qi++) {
        const qData = lesData.quizzes[qi];

        const [quiz] = await db.insert(quizzesTable).values({
          lessonId: les.id,
          question: qData.question,
          order: qi + 1,
        }).returning();

        totalQuizzes++;

        for (let oi = 0; oi < qData.options.length; oi++) {
          const opt = qData.options[oi];
          await db.insert(quizOptionsTable).values({
            quizId: quiz.id,
            text: opt.text,
            isCorrect: opt.correct,
            order: oi + 1,
          });
        }
      }
    }
    process.stdout.write(`     → ${modData.lessons.length} leçons créées\n`);
  }

  console.log(`\n${"=".repeat(55)}`);
  console.log(`🎉 SEED TERMINÉ AVEC SUCCÈS !`);
  console.log(`${"=".repeat(55)}`);
  console.log(`   Formation : "${formation.title}"`);
  console.log(`   Modules   : ${FORMATION.modules.length}`);
  console.log(`   Leçons    : ${totalLessons}`);
  console.log(`   Quiz      : ${totalQuizzes} questions`);
  console.log(`${"=".repeat(55)}\n`);
}

main().catch((err) => {
  console.error("❌ Erreur de seed :", err);
  process.exit(1);
}).finally(() => process.exit(0));

import {
  db,
  formationsTable,
  modulesTable,
  lessonsTable,
  quizzesTable,
  quizOptionsTable,
} from "@workspace/db";
import { eq } from "drizzle-orm";
import type { Logger } from "pino";

const SLUG = "informatique-bureautique";

type QuizOption = { text: string; correct: boolean };
type Quiz = { question: string; options: QuizOption[] };
type Lesson = { title: string; theory: string; quizzes: Quiz[] };
type Module = { title: string; lessons: Lesson[] };

function lesson(title: string, theory: string, quizzes: Quiz[] = []): Lesson {
  return { title, theory, quizzes };
}

const MODULES: Module[] = [
  /* ── MODULE 1 : Introduction ── */
  {
    title: "Module 1 — Introduction à l'informatique",
    lessons: [
      lesson(
        "Qu'est-ce qu'un ordinateur ?",
        `## Qu'est-ce qu'un ordinateur ?

Un **ordinateur** est une machine électronique capable de recevoir, stocker, traiter et restituer des informations.

### Les deux grandes familles

**1. Les ordinateurs de bureau (desktop)**
- Unité centrale + écran séparés
- Plus puissants et moins chers
- Idéaux pour un usage fixe au bureau

**2. Les ordinateurs portables (laptop)**
- Tout-en-un : écran, clavier, batterie intégrés
- Pratiques pour travailler partout

### Pourquoi apprendre l'informatique ?

✅ Trouver un emploi plus facilement
✅ Travailler plus vite et plus efficacement
✅ Communiquer professionnellement par email
✅ Créer des documents de qualité
✅ Accéder à l'information partout dans le monde

> 💡 **Le saviez-vous ?** Aujourd'hui, plus de 90% des emplois de bureau nécessitent des compétences informatiques de base.`,
        [
          {
            question: "Qu'est-ce qu'un ordinateur ?",
            options: [
              { text: "Un appareil uniquement pour jouer aux jeux vidéo", correct: false },
              { text: "Une machine électronique capable de recevoir, stocker, traiter et restituer des informations", correct: true },
              { text: "Un téléphone amélioré", correct: false },
              { text: "Un appareil qui remplace uniquement les imprimantes", correct: false },
            ],
          },
          {
            question: "Quel type d'ordinateur est le plus adapté pour travailler en déplacement ?",
            options: [
              { text: "L'ordinateur de bureau", correct: false },
              { text: "Le serveur", correct: false },
              { text: "L'ordinateur portable (laptop)", correct: true },
              { text: "La tablette graphique", correct: false },
            ],
          },
        ]
      ),
      lesson(
        "Les composants d'un ordinateur",
        `## Les composants d'un ordinateur

### Les composants internes

**Le processeur (CPU)** — Le « cerveau » de l'ordinateur, effectue tous les calculs.

**La mémoire vive (RAM)** — Stockage temporaire pendant que l'ordinateur fonctionne. Se vide quand on éteint. Recommandé : minimum 8 Go.

**Le disque dur (HDD/SSD)** — Stockage permanent. SSD = plus rapide que HDD. Recommandé : 256 Go minimum.

### Les périphériques

| Périphérique | Rôle | Type |
|---|---|---|
| Écran | Afficher les images | Sortie |
| Clavier | Saisir du texte | Entrée |
| Souris | Pointer et cliquer | Entrée |
| Imprimante | Imprimer des documents | Sortie |

### La connectique

- **Port USB** : brancher clés USB, souris, chargeurs
- **Port HDMI** : connecter un second écran ou un projecteur
- **Prise jack 3.5mm** : connecter des écouteurs

> 💡 **Astuce** : Si votre ordinateur est lent, c'est souvent un problème de RAM (pas assez) ou de disque dur (trop plein).`,
        [
          {
            question: "Qu'est-ce que la RAM ?",
            options: [
              { text: "Un type de disque dur permanent", correct: false },
              { text: "La mémoire vive temporaire qui se vide à l'extinction", correct: true },
              { text: "Le processeur de l'ordinateur", correct: false },
              { text: "Un périphérique d'entrée", correct: false },
            ],
          },
          {
            question: "Quel port utilise-t-on pour brancher une clé USB ?",
            options: [
              { text: "Port HDMI", correct: false },
              { text: "Port Ethernet", correct: false },
              { text: "Prise jack 3.5mm", correct: false },
              { text: "Port USB", correct: true },
            ],
          },
        ]
      ),
      lesson(
        "Le système d'exploitation Windows",
        `## Le système d'exploitation Windows

Le **système d'exploitation (OS)** est le logiciel de base qui fait fonctionner votre ordinateur.

### Le Bureau Windows

- **Barre des tâches** (en bas) : bouton Démarrer, programmes épinglés, heure
- **Icônes du bureau** : Ce PC, Corbeille, raccourcis logiciels

### Les raccourcis clavier essentiels

| Raccourci | Action |
|---|---|
| **Ctrl + C** | Copier |
| **Ctrl + X** | Couper |
| **Ctrl + V** | Coller |
| **Ctrl + Z** | Annuler |
| **Ctrl + S** | Enregistrer |
| **Alt + F4** | Fermer le programme |
| **Windows + L** | Verrouiller l'écran |

### Gérer les fichiers et dossiers

- **Créer un dossier** : Clic droit → Nouveau → Dossier
- **Renommer** : Clic droit → Renommer
- **Déplacer** : Glisser-déposer ou Ctrl+X puis Ctrl+V

> ⚠️ Ne supprimez jamais un fichier dont vous ne connaissez pas l'utilité.`,
        [
          {
            question: "Quel raccourci clavier permet d'annuler la dernière action ?",
            options: [
              { text: "Ctrl + S", correct: false },
              { text: "Ctrl + C", correct: false },
              { text: "Ctrl + Z", correct: true },
              { text: "Alt + F4", correct: false },
            ],
          },
          {
            question: "Que se passe-t-il quand on clique sur le — (tiret) d'une fenêtre ?",
            options: [
              { text: "Le programme se ferme définitivement", correct: false },
              { text: "La fenêtre se réduit dans la barre des tâches mais le programme continue", correct: true },
              { text: "La fenêtre s'agrandit en plein écran", correct: false },
              { text: "La fenêtre est envoyée à la corbeille", correct: false },
            ],
          },
        ]
      ),
      lesson(
        "Gérer les fichiers et la sécurité",
        `## Gérer ses fichiers efficacement

### Organiser ses documents

**Règle d'or : 1 projet = 1 dossier**

\`\`\`
📁 Documents
├── 📁 Travail
│   ├── 📁 Rapports
│   ├── 📁 Factures
│   └── 📁 Présentations
├── 📁 Personnel
│   └── 📁 CV et lettres
└── 📁 Archives
\`\`\`

### Nommer ses fichiers correctement

❌ **Mauvais** : document1.docx, sans titre.xlsx
✅ **Bons** : Rapport_Mensuel_Janvier2025.docx, Facture_Client_001.pdf

### Sécurité informatique de base

- **Mots de passe forts** : minimum 8 caractères, majuscules + chiffres + symboles
- **Ne jamais ouvrir** les pièces jointes d'expéditeurs inconnus
- **Antivirus** : Windows Defender est gratuit et suffisant
- **Sauvegardes** : utilisez une clé USB ou Google Drive

> 💡 Un fichier supprimé de la corbeille est définitivement perdu !`,
        [
          {
            question: "Que faut-il faire avant de supprimer définitivement un fichier ?",
            options: [
              { text: "Rien, on peut vider la corbeille sans hésitation", correct: false },
              { text: "S'assurer qu'on n'a plus besoin de ce fichier, car la suppression est irréversible", correct: true },
              { text: "Copier le fichier automatiquement ailleurs", correct: false },
              { text: "Attendre 24h avant de le supprimer", correct: false },
            ],
          },
          {
            question: "Quel est un bon exemple de nom de fichier professionnel ?",
            options: [
              { text: "document final VRAI2.docx", correct: false },
              { text: "fichier.docx", correct: false },
              { text: "Rapport_Ventes_Mars2025.docx", correct: true },
              { text: "Sans titre (1).docx", correct: false },
            ],
          },
        ]
      ),
    ],
  },

  /* ── MODULE 2 : Microsoft Word ── */
  {
    title: "Module 2 — Microsoft Word",
    lessons: [
      lesson(
        "Découvrir l'interface Word",
        `## Microsoft Word : L'interface

Microsoft Word est le logiciel de traitement de texte le plus utilisé au monde.

### Le Ruban (barre d'outils)

- **Accueil** : police, taille, gras, alignement
- **Insertion** : images, tableaux, en-têtes
- **Mise en page** : marges, orientation, taille papier
- **Révision** : correction orthographique

### Créer, ouvrir et enregistrer

| Action | Raccourci |
|---|---|
| Nouveau document | Ctrl + N |
| Ouvrir un fichier | Ctrl + O |
| Enregistrer | Ctrl + S |
| Enregistrer sous | Ctrl + Maj + S |
| Imprimer | Ctrl + P |

### Formats de fichier

- **.docx** : format Word standard (modifiable)
- **.pdf** : pour partager sans modification possible

> 💡 **Enregistrez régulièrement** (Ctrl+S) pour ne pas perdre votre travail !`,
        [
          {
            question: "Quel raccourci permet d'enregistrer rapidement un document Word ?",
            options: [
              { text: "Ctrl + N", correct: false },
              { text: "Ctrl + O", correct: false },
              { text: "Ctrl + S", correct: true },
              { text: "Ctrl + P", correct: false },
            ],
          },
          {
            question: "Dans quel format enregistrer un document pour qu'il ne puisse pas être modifié ?",
            options: [
              { text: ".docx", correct: false },
              { text: ".odt", correct: false },
              { text: ".txt", correct: false },
              { text: ".pdf", correct: true },
            ],
          },
        ]
      ),
      lesson(
        "Mettre en forme du texte",
        `## Mettre en forme du texte dans Word

### Sélectionner du texte

- Cliquer + glisser la souris
- **Ctrl + A** = tout sélectionner
- Double-clic = sélectionner un mot

### Les attributs de base

| Bouton | Raccourci | Effet |
|---|---|---|
| **G** (Gras) | Ctrl + G | Texte en gras |
| *I* (Italique) | Ctrl + I | Texte en italique |
| U (Souligné) | Ctrl + U | Texte souligné |

### L'alignement

| Raccourci | Résultat |
|---|---|
| Ctrl + Maj + G | Aligné à gauche |
| Ctrl + E | Centré |
| Ctrl + Maj + D | Aligné à droite |
| Ctrl + J | Justifié (idéal pour les docs pro) |

### Les listes

- **Liste à puces** : bouton • dans le Ruban
- **Liste numérotée** : bouton 1. dans le Ruban

> 💡 **Conseil pro** : Utilisez la justification (Ctrl+J) pour le corps du texte — cela donne un aspect soigné.`,
        [
          {
            question: "Quel raccourci clavier met le texte en gras dans Word ?",
            options: [
              { text: "Ctrl + I", correct: false },
              { text: "Ctrl + G", correct: true },
              { text: "Ctrl + U", correct: false },
              { text: "Ctrl + B", correct: false },
            ],
          },
          {
            question: "Quel alignement est recommandé pour le corps d'un document professionnel ?",
            options: [
              { text: "Aligné à gauche", correct: false },
              { text: "Centré", correct: false },
              { text: "Aligné à droite", correct: false },
              { text: "Justifié", correct: true },
            ],
          },
        ]
      ),
      lesson(
        "Mise en page et styles",
        `## Mise en page professionnelle

### Configurer la page (onglet Mise en page)

- **Marges standard** : 2,5 cm de chaque côté
- **Portrait** (vertical) : pour lettres, rapports, CV
- **Paysage** (horizontal) : pour tableaux larges
- **Taille** : A4 (21×29,7 cm) — standard en Afrique et Europe

### L'interligne

1. Sélectionnez le texte
2. Accueil → Interligne
3. Choisissez : 1,0 (serré), 1,5 (standard), 2,0 (aéré)

### Les styles Word

Les styles permettent de formater rapidement les titres :
- **Normal** : texte courant
- **Titre 1** : grand titre de section
- **Titre 2** : sous-titre

**Avantage** : si vous modifiez un style, tous les textes avec ce style se mettent à jour automatiquement !

### En-tête et pied de page

Insertion → En-tête/Pied de page → choisissez un modèle.
Pour numéroter les pages : Insertion → Numéro de page.

> 💡 Vérifiez toujours l'aperçu avant impression (Ctrl+P) pour éviter de gaspiller du papier.`,
        [
          {
            question: "Quelle orientation de page utilise-t-on pour un CV ou une lettre ?",
            options: [
              { text: "Paysage (horizontal)", correct: false },
              { text: "Portrait (vertical)", correct: true },
              { text: "Carré", correct: false },
              { text: "Panoramique", correct: false },
            ],
          },
          {
            question: "Quel est l'avantage principal d'utiliser les Styles Word ?",
            options: [
              { text: "Ils rendent le document plus coloré automatiquement", correct: false },
              { text: "Ils permettent de formater de façon cohérente — une modification se répercute partout", correct: true },
              { text: "Ils réduisent la taille du fichier", correct: false },
              { text: "Ils corrigent automatiquement les fautes", correct: false },
            ],
          },
        ]
      ),
      lesson(
        "Tableaux et images dans Word",
        `## Insérer des tableaux et des images

### Créer un tableau

1. Onglet **Insertion** → Tableau
2. Survolez la grille pour choisir lignes et colonnes
3. Cliquez pour insérer

### Manipuler un tableau

- **Ajouter une ligne** : Tab dans la dernière cellule
- **Supprimer** : sélectionner → clic droit → Supprimer
- **Fusionner des cellules** : sélectionner → clic droit → Fusionner

### Insérer une image

1. Insertion → Images → Ce périphérique
2. Naviguez vers l'image → Insérer
3. **Redimensionner** : glissez les **coins** (pas les bords pour ne pas déformer)

### Habillage du texte

Cliquez sur l'image → icône de mise en page :
- **Aligné sur le texte** : l'image se comporte comme un caractère
- **Carré** : le texte contourne l'image

> ⚠️ Utilisez des images de haute qualité. Évitez les images floues ou pixelisées.`,
        [
          {
            question: "Comment ajouter une ligne à la fin d'un tableau Word rapidement ?",
            options: [
              { text: "Appuyer sur Entrée dans la dernière cellule", correct: false },
              { text: "Cliquer dans la dernière cellule et appuyer sur Tab", correct: true },
              { text: "Faire Ctrl + Entrée", correct: false },
              { text: "Double-cliquer sur le bas du tableau", correct: false },
            ],
          },
          {
            question: "Comment redimensionner une image sans la déformer ?",
            options: [
              { text: "En glissant les bords du milieu", correct: false },
              { text: "En glissant les coins de l'image", correct: true },
              { text: "En changeant la taille dans la police", correct: false },
              { text: "En faisant clic droit → Propriétés", correct: false },
            ],
          },
        ]
      ),
      lesson(
        "Créer un CV professionnel avec Word",
        `## Créer un CV professionnel avec Word

### La structure d'un bon CV

Un CV doit tenir sur **1 page maximum** pour les débutants.

**Les sections essentielles :**

1. **En-tête** : Prénom NOM | Téléphone | Email | Adresse
2. **Profil** : 3-4 lignes — qui vous êtes et ce que vous cherchez
3. **Expériences** : du plus récent au plus ancien
4. **Formation / Diplômes**
5. **Compétences** : informatique, langues, autres

### Mise en forme du CV

- **Police** : Calibri ou Arial, taille 11-12
- **Marges** : 1,5 à 2 cm
- **Interligne** : 1,15

### Conseils clés

✅ Adaptez votre CV à chaque offre d'emploi
✅ Utilisez des verbes d'action : géré, créé, organisé...
✅ Vérifiez l'orthographe (F7 dans Word)
✅ Enregistrez en PDF avant d'envoyer
✅ Nommez le fichier : CV_PrenomNom.pdf

❌ Pas de fautes d'orthographe
❌ Évitez les couleurs trop vives

> 💡 **Modèles gratuits** : Fichier → Nouveau → tapez "CV" dans la recherche.`,
        [
          {
            question: "Quelle longueur maximale est recommandée pour un CV de débutant ?",
            options: [
              { text: "3 pages", correct: false },
              { text: "2 pages", correct: false },
              { text: "1 page", correct: true },
              { text: "Il n'y a pas de limite", correct: false },
            ],
          },
          {
            question: "Dans quel format enregistrer son CV avant de l'envoyer ?",
            options: [
              { text: ".docx", correct: false },
              { text: ".txt", correct: false },
              { text: ".pdf", correct: true },
              { text: ".odt", correct: false },
            ],
          },
        ]
      ),
    ],
  },

  /* ── MODULE 3 : Microsoft Excel ── */
  {
    title: "Module 3 — Microsoft Excel",
    lessons: [
      lesson(
        "L'interface Excel et les bases",
        `## Microsoft Excel : Les bases

Excel est un **tableur** pour organiser des données, faire des calculs et créer des graphiques.

### Concepts clés

- **Classeur** : le fichier Excel (.xlsx)
- **Feuilles** : onglets en bas du classeur
- **Cellules** : les cases du tableau
- **Colonnes** : lettres (A, B, C...)
- **Lignes** : numéros (1, 2, 3...)
- **Référence** : colonne + ligne → ex: A1, B3, C10

### Saisir des données

1. Cliquez sur une cellule
2. Tapez votre texte ou chiffre
3. **Entrée** → confirmer et aller en bas
4. **Tab** → confirmer et aller à droite

**Types de données :**
- Texte → aligné à gauche
- Nombres → aligné à droite
- Formules → commencent toujours par **=**

### Navigation rapide

| Raccourci | Action |
|---|---|
| Ctrl + Fin | Dernière cellule utilisée |
| Ctrl + Début | Retour à A1 |
| Ctrl + T | Créer un tableau structuré |

> 💡 Utilisez Ctrl+Z pour annuler une erreur dans Excel !`,
        [
          {
            question: "Comment commence toujours une formule dans Excel ?",
            options: [
              { text: "Par le signe +", correct: false },
              { text: "Par le signe =", correct: true },
              { text: "Par le mot 'formule'", correct: false },
              { text: "Par une majuscule", correct: false },
            ],
          },
          {
            question: "Quelle est la référence de la cellule en colonne B, ligne 5 ?",
            options: [
              { text: "5B", correct: false },
              { text: "B-5", correct: false },
              { text: "B5", correct: true },
              { text: "Colonne B Ligne 5", correct: false },
            ],
          },
        ]
      ),
      lesson(
        "Les formules et fonctions essentielles",
        `## Les formules et fonctions dans Excel

### Les opérations de base

| Opération | Symbole | Exemple |
|---|---|---|
| Addition | + | =A1+B1 |
| Soustraction | - | =A1-B1 |
| Multiplication | * | =A1*B1 |
| Division | / | =A1/B1 |

### Les fonctions essentielles

**SOMME** — Additionner une plage
\`\`\`
=SOMME(A1:A10)
\`\`\`

**MOYENNE** — Calculer une moyenne
\`\`\`
=MOYENNE(B1:B12)
\`\`\`

**MAX / MIN** — Valeur maximale ou minimale
\`\`\`
=MAX(C1:C100)   =MIN(C1:C100)
\`\`\`

**SI** — Condition
\`\`\`
=SI(A1>10;"Bon";"Insuffisant")
\`\`\`

### Références absolues et relatives

- **A1** (relative) : change quand on copie la formule
- **$A$1** (absolue) : ne change PAS — appuyez sur F4 pour basculer

**Exemple :** Calculer une remise de 15% sur plusieurs prix :
\`\`\`
=A2*$B$1   ← $B$1 reste fixe à la copie
\`\`\`

> 💡 Sélectionnez une plage → la SOMME et MOYENNE s'affichent en bas à droite !`,
        [
          {
            question: "Quelle formule calcule la somme des cellules A1 à A20 ?",
            options: [
              { text: "=TOTAL(A1:A20)", correct: false },
              { text: "=ADDITION(A1;A20)", correct: false },
              { text: "=SOMME(A1:A20)", correct: true },
              { text: "=A1+A2+...+A20", correct: false },
            ],
          },
          {
            question: "Comment rendre une référence de cellule absolue dans Excel ?",
            options: [
              { text: "En écrivant la référence en majuscules", correct: false },
              { text: "En ajoutant le signe $ devant la lettre et le chiffre ($A$1)", correct: true },
              { text: "En entourant la référence de parenthèses", correct: false },
              { text: "En doublant la référence AA11", correct: false },
            ],
          },
        ]
      ),
      lesson(
        "Mise en forme et graphiques",
        `## Mise en forme et graphiques dans Excel

### Format des cellules

Clic droit → Format de cellule :
- **Nombre** : 1 234,50
- **Monétaire** : 1 234,50 FCFA
- **Pourcentage** : 75%
- **Date** : 15/01/2025

### Mise en forme conditionnelle

Colorie automatiquement les cellules selon leur valeur :
1. Sélectionnez les cellules
2. Accueil → Mise en forme conditionnelle
3. Choisissez votre règle (ex : rouge si < 0, vert si > 100 000)

### Créer un graphique

1. Sélectionnez vos données (avec les en-têtes)
2. Insertion → Graphiques → choisissez le type
3. Personnalisez le titre et les couleurs

**Quel type choisir ?**

| Type | Utilisation |
|---|---|
| **Histogramme** | Comparer des valeurs |
| **Courbes** | Montrer une évolution dans le temps |
| **Secteurs** (camembert) | Montrer des proportions (%) |

> 💡 Pour un graphique de ventes mensuel, utilisez les **Courbes** pour la tendance, l'**Histogramme** pour comparer les mois.`,
        [
          {
            question: "Quel type de graphique utilise-t-on pour l'évolution des ventes sur 12 mois ?",
            options: [
              { text: "Secteurs (camembert)", correct: false },
              { text: "Courbes", correct: true },
              { text: "Nuage de points", correct: false },
              { text: "Boursier", correct: false },
            ],
          },
          {
            question: "À quoi sert la mise en forme conditionnelle ?",
            options: [
              { text: "À imprimer automatiquement les cellules importantes", correct: false },
              { text: "À colorier automatiquement les cellules selon leurs valeurs", correct: true },
              { text: "À corriger les formules erronées", correct: false },
              { text: "À protéger les cellules contre la modification", correct: false },
            ],
          },
        ]
      ),
      lesson(
        "Trier, filtrer et gérer une liste de données",
        `## Gérer une liste de données dans Excel

### Créer un tableau structuré

1. Cliquez dans vos données
2. **Ctrl + T** → Tableau Excel
3. Cochez "Mon tableau comporte des en-têtes" → OK

**Avantages :** filtres automatiques, formules qui se copient, mise en forme alternée.

### Trier les données

- **Tri simple** : cliquez sur l'en-tête → Données → Trier de A à Z
- **Tri multiple** : Données → Trier → ajouter des niveaux

### Filtrer les données

1. Cliquez sur la flèche d'un en-tête
2. Décochez "Sélectionner tout"
3. Cochez les valeurs à afficher → OK

**Filtres avancés :**
- Texte : "Commence par", "Contient"
- Nombres : "Supérieur à", "Entre"
- Dates : "Cette semaine", "Ce mois"

### Calcul sur données filtrées

\`\`\`
=SOUS.TOTAL(9;C2:C100)
\`\`\`
Additionne uniquement les cellules **visibles** après filtre.

> ⚠️ La fonction SOMME additionne TOUTES les cellules même cachées. Utilisez SOUS.TOTAL pour les données filtrées.`,
        [
          {
            question: "Quelle fonction calcule la somme uniquement des cellules visibles après un filtre ?",
            options: [
              { text: "=SOMME()", correct: false },
              { text: "=TOTAL()", correct: false },
              { text: "=SOUS.TOTAL(9;...)", correct: true },
              { text: "=SOMME.FILTRE()", correct: false },
            ],
          },
          {
            question: "Quel raccourci crée un tableau structuré dans Excel ?",
            options: [
              { text: "Ctrl + T", correct: true },
              { text: "Ctrl + Tab", correct: false },
              { text: "Ctrl + F", correct: false },
              { text: "Alt + T", correct: false },
            ],
          },
        ]
      ),
    ],
  },

  /* ── MODULE 4 : PowerPoint ── */
  {
    title: "Module 4 — Microsoft PowerPoint",
    lessons: [
      lesson(
        "Créer une présentation PowerPoint",
        `## Microsoft PowerPoint : Créer des présentations

### Démarrer une présentation

1. Ouvrez PowerPoint
2. Choisissez un **thème** ou commencez avec une présentation vierge

### Ajouter des diapositives

- **Ctrl + M** : nouvelle diapositive
- Clic droit dans le panneau → Nouvelle diapositive

### Les mises en page

- Diapositive de titre
- Titre et contenu
- Deux colonnes
- Diapositive vierge

**Changer la mise en page** : Accueil → Mise en page

### La règle des 5-5-5

Pour des présentations efficaces :
- Maximum **5 diapositives** par grande idée
- Maximum **5 lignes** de texte par diapositive
- Maximum **5 mots** par ligne

### Enregistrer et partager

- **.pptx** : format modifiable
- **.pdf** : pour partager sans modification
- **.ppsx** : s'ouvre directement en mode présentation

> 💡 PowerPoint n'est pas un document — vos slides doivent contenir des mots-clés, pas des paragraphes entiers.`,
        [
          {
            question: "Quel raccourci clavier ajoute une nouvelle diapositive dans PowerPoint ?",
            options: [
              { text: "Ctrl + N", correct: false },
              { text: "Ctrl + M", correct: true },
              { text: "Ctrl + D", correct: false },
              { text: "Ctrl + Entrée", correct: false },
            ],
          },
          {
            question: "Selon la règle des 5-5-5, combien de mots maximum par ligne ?",
            options: [
              { text: "10 mots", correct: false },
              { text: "5 mots", correct: true },
              { text: "3 mots", correct: false },
              { text: "Il n'y a pas de limite", correct: false },
            ],
          },
        ]
      ),
      lesson(
        "Animations, transitions et mode présentation",
        `## Animations, transitions et mode présentation

### Les transitions (entre diapositives)

1. Sélectionnez une diapositive
2. Onglet **Transitions**
3. Choisissez un effet (Fondu recommandé)
4. "Appliquer à toutes" pour uniformiser

### Les animations (sur une diapositive)

1. Cliquez sur l'élément à animer
2. Onglet **Animations** → choisissez l'effet
   - **Entrée** : comment l'élément apparaît
   - **Accent** : met en valeur un élément présent
   - **Sortie** : comment l'élément disparaît

### Mode présentation (Diaporama)

| Raccourci | Action |
|---|---|
| **F5** | Démarrer depuis le début |
| **Maj + F5** | Démarrer depuis la slide actuelle |
| **→ ou Espace** | Diapositive suivante |
| **←** | Diapositive précédente |
| **B** | Écran noir |
| **Échap** | Quitter |

### Enregistrer en vidéo

Fichier → Exporter → Créer une vidéo (très utile pour partager !)

> 💡 Préparez vos notes dans la zone "Notes" en bas — en mode présentateur, vous les voyez sur votre écran pendant que le public voit la slide.`,
        [
          {
            question: "Quel raccourci démarre le diaporama depuis le début ?",
            options: [
              { text: "Ctrl + P", correct: false },
              { text: "Maj + F5", correct: false },
              { text: "F5", correct: true },
              { text: "Ctrl + D", correct: false },
            ],
          },
          {
            question: "Quelle touche affiche un écran noir pendant une présentation ?",
            options: [
              { text: "Espace", correct: false },
              { text: "B", correct: true },
              { text: "N", correct: false },
              { text: "Échap", correct: false },
            ],
          },
        ]
      ),
    ],
  },

  /* ── MODULE 5 : Internet et email ── */
  {
    title: "Module 5 — Internet et email professionnel",
    lessons: [
      lesson(
        "Naviguer efficacement sur Internet",
        `## Naviguer efficacement sur Internet

### Les navigateurs web

- **Google Chrome** : le plus populaire
- **Mozilla Firefox** : respect de la vie privée
- **Microsoft Edge** : intégré à Windows

### Rechercher avec Google

| Technique | Exemple | Résultat |
|---|---|---|
| Guillemets | "offre d'emploi Dakar" | Phrase exacte |
| Moins (-) | emploi -Dakar | Exclut le mot |
| filetype: | rapport filetype:pdf | Fichiers PDF |
| site: | formation site:gov.sn | Sur un site précis |

### Raccourcis du navigateur

| Raccourci | Action |
|---|---|
| Ctrl + T | Nouvel onglet |
| Ctrl + W | Fermer l'onglet |
| Ctrl + D | Ajouter aux favoris |
| F5 | Actualiser la page |
| Ctrl + F | Rechercher dans la page |

### Sécurité sur Internet

🔴 **Signes d'un site dangereux :**
- Pas de cadenas (http sans le s)
- Fautes d'orthographe dans l'URL
- Demande d'informations bancaires sans raison

✅ **Bonnes pratiques :**
- Ne cliquez jamais sur "Vous avez gagné !"
- Ne téléchargez que depuis des sites officiels
- Vérifiez toujours l'URL avant de vous connecter

> ⚠️ **Phishing** : Des escrocs créent de faux sites pour voler vos identifiants. Vérifiez toujours l'URL !`,
        [
          {
            question: "Que signifie le cadenas 🔒 à côté d'une URL ?",
            options: [
              { text: "Le site est payant", correct: false },
              { text: "La connexion est sécurisée (https)", correct: true },
              { text: "Le site est vérifié par Google", correct: false },
              { text: "Le site est lent", correct: false },
            ],
          },
          {
            question: "Comment rechercher uniquement des fichiers PDF sur Google ?",
            options: [
              { text: "En tapant pdf: avant la recherche", correct: false },
              { text: "En tapant .pdf à la fin de la recherche", correct: false },
              { text: "En utilisant filetype:pdf dans la recherche", correct: true },
              { text: "Ce n'est pas possible avec Google", correct: false },
            ],
          },
        ]
      ),
      lesson(
        "Maîtriser l'email professionnel",
        `## L'email professionnel

### Créer une adresse professionnelle

✅ Acceptable : prenom.nom@gmail.com, p.nom@gmail.com
❌ À éviter : fighter007@yahoo.fr, princesse_dakar@hotmail.com

### La structure d'un email professionnel

**1. L'objet** : court et précis (5-10 mots)
✅ "Demande de rendez-vous — Candidature poste assistant"
❌ "Bonjour" ou "Question"

**2. La formule d'ouverture**
- "Monsieur/Madame," (formel)
- "Bonjour [Prénom]," (moins formel)

**3. Le corps** : contexte → message principal → actions

**4. La formule de politesse**
- "Cordialement," (standard professionnel)
- "Veuillez agréer..." (très formel)

**5. La signature**
\`\`\`
Prénom NOM | Poste | Entreprise
Téléphone | Email
\`\`\`

### Les pièces jointes

- Taille maximale : **10 Mo** par email
- Fichiers volumineux : utilisez Google Drive ou WeTransfer
- Nommez clairement : **CV_AmadouDiallo.pdf**

> 💡 Relisez votre email **2 fois** avant d'envoyer — une faute d'orthographe peut ruiner une bonne impression.`,
        [
          {
            question: "Quelle formule de politesse est standard pour un email professionnel ?",
            options: [
              { text: "À bientôt !", correct: false },
              { text: "Bisous,", correct: false },
              { text: "Cordialement,", correct: true },
              { text: "Ciao,", correct: false },
            ],
          },
          {
            question: "Quelle adresse email est acceptable dans un contexte professionnel ?",
            options: [
              { text: "fighter007@yahoo.fr", correct: false },
              { text: "prenom.nom@gmail.com", correct: true },
              { text: "princesse_dakar@hotmail.com", correct: false },
              { text: "loveman95@gmail.com", correct: false },
            ],
          },
        ]
      ),
      lesson(
        "Les outils collaboratifs et le cloud",
        `## Les outils collaboratifs et le stockage cloud

### Qu'est-ce que le cloud ?

Le **cloud** désigne le stockage sur des serveurs distants accessibles via Internet — vos fichiers disponibles partout.

### Les principaux services gratuits

| Service | Espace gratuit | Points forts |
|---|---|---|
| **Google Drive** | 15 Go | Collaboration temps réel |
| **OneDrive** | 5 Go | Intégré à Windows et Office |
| **Dropbox** | 2 Go | Très fiable, simple |

### Travailler en collaboration avec Google Drive

**Partager un fichier :**
1. Clic droit sur le fichier → Partager
2. Entrez l'email → choisissez les droits : Lecteur / Commentateur / Éditeur

**Collaboration en temps réel :**
- Plusieurs personnes modifient simultanément
- Les modifications s'affichent en direct
- Historique des versions conservé automatiquement

### Les visioconférences

- **Google Meet** : gratuit, intégré à Gmail
- **Zoom** : populaire, 40 min gratuites
- **Microsoft Teams** : pour les entreprises Office 365

**Bons réflexes en visioconférence :**
- Coupez votre micro quand vous n'êtes pas en train de parler
- Choisissez un fond neutre et une bonne lumière de face
- Testez votre connexion avant la réunion

> 💡 Google Docs permet de collaborer gratuitement en temps réel — idéal pour les équipes !`,
        [
          {
            question: "Combien d'espace de stockage gratuit offre Google Drive ?",
            options: [
              { text: "5 Go", correct: false },
              { text: "2 Go", correct: false },
              { text: "15 Go", correct: true },
              { text: "50 Go", correct: false },
            ],
          },
          {
            question: "Quel est l'avantage principal de Google Docs par rapport à Word ?",
            options: [
              { text: "Google Docs a plus de fonctionnalités que Word", correct: false },
              { text: "La collaboration en temps réel et la gratuité", correct: true },
              { text: "Les fichiers Google Docs sont plus petits", correct: false },
              { text: "Google Docs fonctionne mieux sans Internet", correct: false },
            ],
          },
        ]
      ),
    ],
  },
];

export async function seedBureautique(log: Logger): Promise<void> {
  const existing = await db
    .select()
    .from(formationsTable)
    .where(eq(formationsTable.slug, SLUG))
    .limit(1);

  if (existing.length > 0) {
    log.info({ slug: SLUG }, "Bureautique formation already seeded — skipping");
    return;
  }

  const [formation] = await db
    .insert(formationsTable)
    .values({
      slug: SLUG,
      title: "Informatique & Bureautique — De Débutant à Professionnel",
      description:
        "Maîtrisez l'informatique de base et les outils bureautiques essentiels : Word, Excel, PowerPoint, Internet et email professionnel. Formation pratique et progressive pour être efficace au bureau.",
      category: "bureautique",
      active: true,
      isPaid: false,
    })
    .returning();

  let totalLessons = 0;
  let totalQuizzes = 0;

  for (let mi = 0; mi < MODULES.length; mi++) {
    const modData = MODULES[mi];
    const [mod] = await db
      .insert(modulesTable)
      .values({ formationId: formation.id, title: modData.title, order: mi + 1 })
      .returning();

    for (let li = 0; li < modData.lessons.length; li++) {
      const lesData = modData.lessons[li];
      const [les] = await db
        .insert(lessonsTable)
        .values({
          moduleId: mod.id,
          title: lesData.title,
          theory: lesData.theory,
          mediaType: "none",
          order: li + 1,
        })
        .returning();

      totalLessons++;

      for (let qi = 0; qi < lesData.quizzes.length; qi++) {
        const qData = lesData.quizzes[qi];
        const [quiz] = await db
          .insert(quizzesTable)
          .values({ lessonId: les.id, question: qData.question, order: qi + 1 })
          .returning();

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
  }

  log.info(
    { slug: SLUG, modules: MODULES.length, lessons: totalLessons, quizzes: totalQuizzes },
    "Bureautique formation seeded"
  );
}

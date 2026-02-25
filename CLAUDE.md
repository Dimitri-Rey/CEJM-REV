# CEJM-REV / SIO REV — Guide du projet

## Description
Plateforme de revision interactive **BTS SIO** deployee sur GitHub Pages.
URL : `https://dimitri-rey.github.io/CEJM-REV/`
Repo : `https://github.com/Dimitri-Rey/CEJM-REV.git`

## Stack technique
- HTML/CSS/JS pur (pas de framework)
- PWA (manifest.json + sw.js)
- Quiz engine dans `js/app.js` avec `registerQuiz(chapter, type, data)`
- Donnees quiz dans `js/data-*.js`
- Progression stockee en localStorage

## Architecture des fichiers

```
index.html          — Page unique (SPA) avec 4 matieres
css/style.css       — Styles (variables CSS par matiere)
js/app.js           — Moteur de quiz, navigation, PWA
js/data-ch*.js      — Quiz CEJM (ch1-ch14 + theme1-3)
js/data-maths-m*.js — Quiz Maths (m1-m6)
js/data-francais-f*.js — Quiz Francais (f1-f3)
js/data-anglais-a*.js  — Quiz Anglais (a1-a2)
```

## Matieres et modules

### CEJM (14 chapitres, 3 themes)
- Theme 1 (T1) : L'integration de l'entreprise — ch1 a ch5
- Theme 2 (T2) : La regulation de l'activite — ch6 a ch8
- Theme 3 (T3) : L'organisation de l'activite — ch9 a ch14
- Theme 4 & 5 : Verrouilles (2e annee, pas encore de contenu)

### Maths (6 modules, 178 questions)
| Module | Fichier | Questions | Contenu |
|--------|---------|-----------|---------|
| M1 | data-maths-m1.js | 35 | Bases numeriques + Arithmetique (PGCD, PPCM, nombres premiers, congruences) |
| M2 | data-maths-m2.js | 33 | Logique booleenne + Karnaugh (De Morgan, absorption, NOR, simplification) |
| M3 | data-maths-m3.js | 30 | Subnetting & Masques (VLSM, supernet, wildcard, NAT) |
| M4 | data-maths-m4.js | 25 | Probabilites & Stats (RAID, Bayes, binomiale, SLA) |
| M5 | data-maths-m5.js | 25 | Suites numeriques (arithmetiques, geometriques, Fibonacci, depreciation) |
| M6 | data-maths-m6.js | 30 | Algorithmique + Graphes PERT (fonctions/procedures, C#, chemin critique) |

### Francais (3 modules, 95 questions)
| Module | Fichier | Questions | Contenu |
|--------|---------|-----------|---------|
| F1 | data-francais-f1.js | 25 | Methodologie synthese de documents |
| F2 | data-francais-f2.js | 20 | Methodologie ecriture personnelle |
| F3 | data-francais-f3.js | 50 | Theme 2026 "Les animaux et nous" — toutes les oeuvres, auteurs, concepts |

### Anglais (2 modules)
| Module | Fichier | Contenu |
|--------|---------|---------|
| A1 | data-anglais-a1.js | Vocabulaire IT en anglais |
| A2 | data-anglais-a2.js | Expression professionnelle |

## Format d'un quiz

```javascript
registerQuiz('chapter-id', 'knowledge', [
    {
        question: "...",
        options: ["A", "B", "C", "D"],  // toujours 4 options
        answer: 0,                       // index 0-based
        explanation: "...",
        context: ""                      // optionnel, pour cas pratiques
    }
]);
```

Pour ajouter un quiz :
1. Creer `js/data-{id}.js` avec `registerQuiz()`
2. Ajouter `<script src="js/data-{id}.js"></script>` dans index.html
3. Ajouter la carte HTML dans la section matiere correspondante
4. Ajouter le titre dans `titles` de `app.js` fonction `startQuiz()`

## Conventions
- Les quiz types sont : `knowledge` (connaissances) et `practical` (cas pratiques BTS)
- Les explications incluent des analogies IT/reseau quand c'est pertinent
- Les classes CSS par matiere : `chapter-eco`, `chapter-droit`, `chapter-management`, `chapter-maths`, `chapter-francais`, `chapter-anglais`
- Les couleurs par matiere sont definies en CSS variables

## Cours source de l'etudiant (dans ~/Telechargements/)
- `Arithmetique sio2_eleve16032025.pdf` — Cours arithmetique (divisibilite, PGCD, congruences)
- `Algebre de Boole04122024_eleve.pdf` — Cours algebre de Boole + Karnaugh
- `Cours_Numeration26112025.pdf` — Cours numeration binaire/hexa
- `Aide Memoire Algorithmique 24032025.pdf` — Aide-memoire algo (types, fonctions, C#)
- `complement-theorie des graphes03092025.pdf` — Methode PERT/MPM
- `Cours theorie des graphes eleves.pdf` — Cours complet graphes (21 pages)
- `BTS_SIO_obli_16_mai_2025.pdf` + `Corrige_BTS_SIO_obli_16_mai_2025.pdf` — Annales BTS
- `arithmetique(td).pdf`, `algebre_de_Boole(td).pdf` — TD exercices

## TODO / Ameliorations possibles
- [ ] Quiz "Annales BTS" maths avec les vrais sujets d'exam (PDFs dans Telechargements)
- [ ] Module M7 — Theorie des graphes (Dijkstra, coloration, arbres) depuis le cours 21 pages
- [ ] Enrichir Anglais A1/A2 avec plus de vocabulaire IT
- [ ] Theme 4 CEJM (impact du numerique) et Theme 5 (mutations du travail) si cours fournis
- [ ] Mode "revision erreurs" (quiz uniquement sur les questions ratees)
- [ ] Timer/chrono pour entrainement en conditions d'exam
- [ ] Dark mode

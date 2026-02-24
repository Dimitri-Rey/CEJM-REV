// ========== MATHS M5 — SUITES NUMÉRIQUES ==========
// Suites arithmétiques, géométriques, terme général, applications

registerQuiz('maths-m5', 'knowledge', [
    {
        question: "Dans une suite arithmétique, on passe d'un terme au suivant par :",
        options: [
            "Multiplication par un nombre constant (la raison)",
            "Addition d'un nombre constant (la raison)",
            "Division par un nombre constant",
            "Soustraction d'un exposant"
        ],
        answer: 1,
        explanation: "Suite arithmétique : u(n+1) = u(n) + r, où r est la raison. Ex : 2, 5, 8, 11... raison r=3. Application : amortissement linéaire d'un équipement informatique (-même valeur chaque année).",
        context: ""
    },
    {
        question: "Dans une suite géométrique, on passe d'un terme au suivant par :",
        options: [
            "Addition d'un nombre constant",
            "Multiplication par un nombre constant (la raison)",
            "Soustraction d'un nombre constant",
            "Élévation à une puissance"
        ],
        answer: 1,
        explanation: "Suite géométrique : u(n+1) = u(n) × q, où q est la raison. Ex : 1, 2, 4, 8, 16... raison q=2. Application IT : croissance exponentielle du trafic, du nombre de bots dans une botnet.",
        context: ""
    },
    {
        question: "Quelle est la formule du terme général d'une suite arithmétique ?",
        options: [
            "u(n) = u(0) × qⁿ",
            "u(n) = u(0) + n × r",
            "u(n) = u(0) / n",
            "u(n) = u(0)ⁿ"
        ],
        answer: 1,
        explanation: "u(n) = u(0) + n × r (premier terme + n fois la raison). Ex : u(0)=100, r=5 → u(10) = 100 + 10×5 = 150. Utile pour calculer l'amortissement d'un serveur : valeur(n) = valeur_initiale - n × amortissement_annuel.",
        context: ""
    },
    {
        question: "Quelle est la formule du terme général d'une suite géométrique ?",
        options: [
            "u(n) = u(0) + n × q",
            "u(n) = u(0) / qⁿ",
            "u(n) = u(0) × qⁿ",
            "u(n) = u(0) - n × q"
        ],
        answer: 2,
        explanation: "u(n) = u(0) × qⁿ. Ex : u(0)=1 000 utilisateurs, q=2 → après 5 doublements : u(5) = 1000 × 2⁵ = 32 000 utilisateurs. C'est la croissance exponentielle (DDoS, viralité).",
        context: ""
    },
    {
        question: "Une suite a pour premier terme u(0) = 3 et raison r = 4 (arithmétique). Quel est u(5) ?",
        options: ["19", "23", "20", "15"],
        answer: 1,
        explanation: "u(5) = u(0) + 5 × r = 3 + 5 × 4 = 3 + 20 = 23. Vérification : u(1)=7, u(2)=11, u(3)=15, u(4)=19, u(5)=23. ✓",
        context: ""
    },
    {
        question: "Un botnet commence avec 100 machines infectées. Chaque jour, le nombre double. Combien de machines après 10 jours ?",
        options: ["1 000", "10 240", "102 400", "100 000"],
        answer: 2,
        explanation: "Suite géométrique : u(0)=100, q=2. u(10) = 100 × 2¹⁰ = 100 × 1024 = 102 400 machines. C'est la croissance exponentielle caractéristique d'une cyberattaque virale.",
        context: ""
    },
    {
        question: "Un serveur vaut initialement 5 000€. Il perd 800€ de valeur chaque année (amortissement linéaire). Quelle est sa valeur après 4 ans ?",
        options: ["1 800€", "2 000€", "1 600€", "3 200€"],
        answer: 0,
        explanation: "Amortissement linéaire = suite arithmétique : u(n) = 5000 - n × 800. u(4) = 5000 - 4×800 = 5000 - 3200 = 1800€. Après 6 ans : u(6) = 5000 - 4800 = 200€ (valeur résiduelle).",
        context: ""
    },
    {
        question: "Quelle est la somme des n premiers termes d'une suite arithmétique (de u(1) à u(n)) ?",
        options: [
            "S = n × (u(1) + u(n)) / 2",
            "S = u(1) × qⁿ",
            "S = n × u(1)",
            "S = u(n) - u(1)"
        ],
        answer: 0,
        explanation: "Somme suite arithmétique = n × (premier terme + dernier terme) / 2. Formule de Gauss. Ex : somme de 1 à 100 = 100 × (1+100) / 2 = 5050.",
        context: ""
    },
    {
        question: "Un trafic réseau commence à 1 Mbps et croît de 20% par mois. Quel est le trafic après 3 mois ?",
        options: ["1,44 Mbps", "1,60 Mbps", "1,728 Mbps", "2,00 Mbps"],
        answer: 2,
        explanation: "Suite géométrique q=1,2 : u(3) = 1 × 1,2³ = 1 × 1,728 = 1,728 Mbps. Croissance de 20% par mois → x3 en 7 mois environ. Important pour la capacité planning réseau.",
        context: ""
    },
    {
        question: "Une suite est définie par u(n) = 2n + 1. Quelle est la raison de cette suite arithmétique ?",
        options: ["1", "2", "3", "4"],
        answer: 1,
        explanation: "u(n) = 2n + 1 → u(n+1) = 2(n+1) + 1 = 2n + 3. u(n+1) - u(n) = 2. La raison est 2. u(0)=1, u(1)=3, u(2)=5, u(3)=7... suite des nombres impairs.",
        context: ""
    },
    {
        question: "Qu'est-ce qu'une suite convergente ?",
        options: [
            "Une suite dont les termes augmentent sans limite",
            "Une suite dont les termes tendent vers une valeur limite finie",
            "Une suite dont les termes oscillent",
            "Une suite géométrique uniquement"
        ],
        answer: 1,
        explanation: "Une suite converge si ses termes se rapprochent d'une limite L. Ex : u(n) = 1/n → 0. Divergente si elle tend vers +∞ ou -∞ (ex : suite des puissances de 2). Important pour les algorithmes itératifs.",
        context: ""
    },
    {
        question: "Le prix d'un composant est de 200€ et baisse de 15% par an. Quelle est sa valeur après 2 ans ?",
        options: ["144,50€", "130€", "170€", "160€"],
        answer: 0,
        explanation: "Suite géométrique q=0,85 (baisse de 15% = multiplier par 0,85). u(2) = 200 × 0,85² = 200 × 0,7225 = 144,50€. La valeur des composants IT décroît exponentiellement (loi de Moore inversée côté prix).",
        context: ""
    },
    {
        question: "Quelle est la limite de la suite géométrique u(n) = (0,5)ⁿ quand n → +∞ ?",
        options: ["0", "1", "+∞", "0,5"],
        answer: 0,
        explanation: "Si |q| < 1, la suite géométrique u(n) = u(0) × qⁿ converge vers 0. Ici q=0,5 donc u(n) → 0. Utilisé en algorithmique pour les algorithmes de décroissance exponentielle (backoff exponentiel en TCP).",
        context: ""
    },
    {
        question: "En TCP, le 'backoff exponentiel' double le temps d'attente à chaque tentative. Si t(0) = 1 seconde, quel est le temps après 4 échecs ?",
        options: ["4 secondes", "8 secondes", "16 secondes", "32 secondes"],
        answer: 2,
        explanation: "Suite géométrique q=2 : t(4) = 1 × 2⁴ = 16 secondes. Le backoff exponentiel est utilisé en TCP pour éviter la congestion réseau : plus on échoue, plus on attend longtemps avant de réessayer.",
        context: ""
    },
    {
        question: "Quel est le terme u(0) de la suite arithmétique dont u(3) = 20 et r = 4 ?",
        options: ["8", "10", "6", "12"],
        answer: 0,
        explanation: "u(3) = u(0) + 3r → 20 = u(0) + 3×4 → 20 = u(0) + 12 → u(0) = 8. On remonte la suite : u(2)=16, u(1)=12, u(0)=8.",
        context: ""
    },
    {
        question: "Quelle est la somme des 5 premiers termes de la suite géométrique u(0)=1, q=2 ? (Formule : S = u₀ × (1−qⁿ)/(1−q))",
        options: ["30", "31", "32", "16"],
        answer: 1,
        explanation: "S = 1 × (1 − 2⁵) / (1 − 2) = (1 − 32) / (−1) = 31. Vérification terme à terme : 1 + 2 + 4 + 8 + 16 = 31. La formule de la somme d'une suite géométrique est essentielle pour calculer des cumuls (stockage, coûts récurrents).",
        context: ""
    },
    {
        question: "Une capacité de stockage double tous les 18 mois (loi de Moore). En partant de 1 To, quelle capacité après 6 ans ?",
        options: ["8 To", "12 To", "16 To", "64 To"],
        answer: 2,
        explanation: "6 ans = 72 mois. Nombre de doublements : 72 / 18 = 4. Suite géométrique q=2 : u(4) = 1 × 2⁴ = 16 To. La loi de Moore modélise l'évolution exponentielle des capacités matérielles en informatique.",
        context: ""
    },
    {
        question: "La suite u(n) = (−1)ⁿ est-elle convergente ou divergente ?",
        options: [
            "Convergente vers 0",
            "Convergente vers 1",
            "Divergente (elle oscille entre −1 et 1)",
            "Convergente vers −1"
        ],
        answer: 2,
        explanation: "u(0)=1, u(1)=−1, u(2)=1, u(3)=−1... La suite oscille indéfiniment entre −1 et 1 sans tendre vers une limite unique : elle est donc divergente. Une suite qui ne se stabilise pas ne converge pas.",
        context: ""
    },
    {
        question: "Une suite arithmétique vérifie u(3)=14 et u(7)=30. Quelle est la raison r ?",
        options: ["3", "4", "5", "8"],
        answer: 1,
        explanation: "r = (u(7) − u(3)) / (7 − 3) = (30 − 14) / 4 = 16 / 4 = 4. On utilise la relation u(n) = u(p) + (n−p)×r pour retrouver la raison à partir de deux termes quelconques.",
        context: ""
    },
    {
        question: "Suite géométrique u(0)=500, q=0,9. À partir de quel rang n a-t-on u(n) < 250 ?",
        options: ["n = 5", "n = 6", "n = 7", "n = 8"],
        answer: 2,
        explanation: "u(n) = 500 × 0,9ⁿ < 250 → 0,9ⁿ < 0,5 → n > ln(0,5)/ln(0,9) ≈ 6,58. Le plus petit entier est n = 7. Vérification : u(6) = 500 × 0,9⁶ ≈ 265,7 (> 250) et u(7) = 500 × 0,9⁷ ≈ 239,1 (< 250). ✓",
        context: ""
    },
    {
        question: "Quelle est la somme des 100 premiers entiers naturels (de 1 à 100), selon la formule de Gauss ?",
        options: ["5 000", "5 050", "5 100", "10 000"],
        answer: 1,
        explanation: "Formule de Gauss : S = n × (n+1) / 2 = 100 × 101 / 2 = 5 050. C'est la somme d'une suite arithmétique de raison 1 avec u(1)=1 et u(100)=100. Gauss aurait trouvé cette formule à l'âge de 9 ans !",
        context: ""
    },
    {
        question: "Une suite géométrique vérifie u(2)=12 et u(5)=96. Quelle est la raison q ?",
        options: ["2", "3", "4", "8"],
        answer: 0,
        explanation: "u(5) = u(2) × q³ → q³ = u(5)/u(2) = 96/12 = 8 → q = ∛8 = 2. Vérification : u(2)=12, u(3)=24, u(4)=48, u(5)=96. ✓ On utilise le rapport de deux termes pour retrouver q.",
        context: ""
    },
    {
        question: "Un serveur vaut 10 000€ à l'achat. Sa valeur résiduelle après 5 ans est de 2 000€ (amortissement linéaire). Quel est le montant de l'amortissement annuel ?",
        options: ["1 200€", "1 400€", "1 600€", "2 000€"],
        answer: 2,
        explanation: "Amortissement annuel = (Valeur initiale − Valeur résiduelle) / Durée = (10 000 − 2 000) / 5 = 8 000 / 5 = 1 600€ par an. C'est une suite arithmétique de raison r = −1 600 : la valeur du serveur diminue de 1 600€ chaque année.",
        context: ""
    },
    {
        question: "Que se passe-t-il pour une suite géométrique u(n) = u(0) × qⁿ lorsque |q| > 1 ?",
        options: [
            "La suite converge vers 0",
            "La suite converge vers u(0)",
            "La suite diverge (les termes tendent vers l'infini en valeur absolue)",
            "La suite oscille autour de 0"
        ],
        answer: 2,
        explanation: "Si |q| > 1, les puissances qⁿ croissent sans limite → la suite diverge vers +∞ (si q > 1) ou oscille en divergeant (si q < −1). Seul |q| < 1 assure la convergence vers 0. Cela explique pourquoi une croissance exponentielle non maîtrisée (virus, trafic) est dangereuse.",
        context: ""
    },
    {
        question: "Dans la suite de Fibonacci (1, 1, 2, 3, 5, 8, …), quel est le terme suivant ?",
        options: ["10", "11", "12", "13"],
        answer: 3,
        explanation: "Suite de Fibonacci : chaque terme est la somme des deux précédents. 5 + 8 = 13. La suite continue : 1, 1, 2, 3, 5, 8, 13, 21, 34... Elle est utilisée en informatique dans les algorithmes de recherche, les estimations agiles (story points) et l'analyse de complexité.",
        context: ""
    }
]);

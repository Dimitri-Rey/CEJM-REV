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
    }
]);

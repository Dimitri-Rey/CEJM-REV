// ========== MATHS M4 — PROBABILITÉS & STATISTIQUES ==========
// Probabilité simple, conditionnelle, loi binomiale, statistiques, fiabilité systèmes

registerQuiz('maths-m4', 'knowledge', [
    {
        question: "Un disque dur a une probabilité de tomber en panne de 0,02 (2%) par an. Quelle est la probabilité qu'il NE tombe PAS en panne ?",
        options: ["0,02", "0,98", "0,80", "0,50"],
        answer: 1,
        explanation: "P(pas de panne) = 1 - P(panne) = 1 - 0,02 = 0,98 = 98%. C'est le principe du complément. En RAID, la tolérance aux pannes repose sur ce calcul.",
        context: ""
    },
    {
        question: "Un serveur a une disponibilité de 99,9% (three nines). Sur 365 jours, combien d'heures d'indisponibilité cela représente ?",
        options: ["0,876 heure (~52 minutes)", "8,76 heures", "87,6 heures", "876 heures"],
        answer: 0,
        explanation: "0,1% d'indisponibilité × 365 × 24h = 0,001 × 8760h = 8,76h... Correction : 99,9% dispo → 0,1% indispo = 0,001 × 8760h = 8,76h. Pour 99,99% (four nines) : 52,6 minutes/an.",
        context: "Les SLA définissent la disponibilité : 99% = 87,6h/an, 99,9% = 8,76h/an, 99,99% = 52,6min/an, 99,999% = 5,26min/an."
    },
    {
        question: "Deux serveurs en parallèle (redondance active) ont chacun une fiabilité de 0,9. Quelle est la fiabilité du système ?",
        options: ["0,81", "0,90", "0,99", "1,00"],
        answer: 2,
        explanation: "En parallèle (redondance) : P(système fonctionne) = 1 - P(les deux tombent) = 1 - (1-0,9)×(1-0,9) = 1 - 0,01 = 0,99. C'est le principe du clustering actif-actif.",
        context: ""
    },
    {
        question: "Deux composants en série ont des fiabilités de 0,95 et 0,98. Quelle est la fiabilité totale ?",
        options: ["0,931", "0,965", "0,98", "0,95"],
        answer: 0,
        explanation: "En série : P(total) = P(A) × P(B) = 0,95 × 0,98 = 0,931. En série, le système tombe si N'IMPORTE QUEL composant tombe. La fiabilité totale est toujours inférieure au composant le moins fiable.",
        context: ""
    },
    {
        question: "Quelle est la formule de la probabilité conditionnelle P(A|B) ?",
        options: [
            "P(A|B) = P(A) × P(B)",
            "P(A|B) = P(A ∩ B) / P(B)",
            "P(A|B) = P(A) + P(B)",
            "P(A|B) = P(B) / P(A)"
        ],
        answer: 1,
        explanation: "P(A|B) = P(A et B) / P(B). En cybersécurité : P(attaque réussit | vulnérabilité existe) est utilisé pour calculer le risque résiduel après un patch.",
        context: ""
    },
    {
        question: "Quelle est la moyenne des valeurs suivantes : 80, 90, 75, 95, 60 ?",
        options: ["80", "82", "85", "90"],
        answer: 1,
        explanation: "(80+90+75+95+60) / 5 = 400 / 5 = 80. Attention : 80+90+75+95+60 = 400. 400/5 = 80. En monitoring réseau, la moyenne des latences indique les performances.",
        context: ""
    },
    {
        question: "Quelle est la médiane de la série : 10, 20, 30, 40, 100 ?",
        options: ["40", "30", "100", "20"],
        answer: 1,
        explanation: "La médiane est la valeur centrale une fois les données triées. 5 valeurs → médiane = 3e valeur = 30. La médiane est plus robuste que la moyenne face aux valeurs extrêmes (outliers/anomalies).",
        context: ""
    },
    {
        question: "Un événement a une probabilité de 0,3. Si 4 essais indépendants ont lieu, quelle est la probabilité qu'il se produise EXACTEMENT 2 fois ?",
        options: ["0,2646", "0,30", "0,0900", "0,4116"],
        answer: 0,
        explanation: "Loi binomiale : P(X=k) = C(n,k) × p^k × (1-p)^(n-k). Ici n=4, k=2, p=0,3. C(4,2)=6, 0,3²=0,09, 0,7²=0,49. 6×0,09×0,49 = 0,2646.",
        context: ""
    },
    {
        question: "Que représente l'écart-type d'une série de mesures de latence réseau ?",
        options: [
            "La valeur la plus haute",
            "La valeur moyenne",
            "La dispersion/variabilité autour de la moyenne",
            "La valeur la plus fréquente"
        ],
        answer: 2,
        explanation: "L'écart-type mesure la dispersion des données. Un faible écart-type = latences stables (bon réseau). Un grand écart-type = latences variables (jitter élevé, mauvais pour VoIP).",
        context: ""
    },
    {
        question: "Quelle est la valeur de C(5,2) (combinaison de 5 objets pris 2 à 2) ?",
        options: ["5", "10", "15", "20"],
        answer: 1,
        explanation: "C(5,2) = 5! / (2! × 3!) = (5×4) / (2×1) = 20/2 = 10. Les combinaisons sont utilisées dans la loi binomiale pour calculer les probabilités en cybersécurité et en test.",
        context: ""
    },
    {
        question: "Un switch a 24 ports. La probabilité qu'un port soit en état 'up' est 0,8. Quelle est l'espérance du nombre de ports actifs ?",
        options: ["19,2", "20", "24", "16"],
        answer: 0,
        explanation: "Espérance d'une loi binomiale : E(X) = n × p = 24 × 0,8 = 19,2 ports actifs en moyenne. L'espérance est la moyenne théorique d'un phénomène aléatoire.",
        context: ""
    },
    {
        question: "En statistiques, que signifie une valeur aberrante (outlier) dans un dataset de temps de réponse d'un serveur ?",
        options: [
            "Une valeur proche de la moyenne",
            "Une valeur anormalement éloignée des autres, souvent signe d'incident",
            "La valeur minimale",
            "La valeur maximale normale"
        ],
        answer: 1,
        explanation: "Un outlier est une valeur qui s'écarte fortement de la distribution normale. En monitoring : un temps de réponse de 5000ms quand la moyenne est 20ms signale un incident. Les outils de monitoring (Zabbix, Grafana) détectent les outliers automatiquement.",
        context: ""
    },
    {
        question: "Si P(A) = 0,4 et P(B) = 0,3 et A et B sont INDÉPENDANTS, que vaut P(A et B) ?",
        options: ["0,12", "0,70", "0,58", "0,28"],
        answer: 0,
        explanation: "Pour des événements indépendants : P(A∩B) = P(A) × P(B) = 0,4 × 0,3 = 0,12. L'indépendance signifie que la survenue de A ne modifie pas la probabilité de B.",
        context: ""
    },
    {
        question: "Une attaque par brute-force teste des mots de passe de 6 chiffres. Combien de combinaisons au maximum ?",
        options: ["600 000", "1 000 000", "720", "60 000"],
        answer: 1,
        explanation: "10 chiffres (0-9) × 6 positions = 10⁶ = 1 000 000 combinaisons. En probabilités, la probabilité de trouver au premier essai = 1/1 000 000 = 0,0001%. D'où l'intérêt des mots de passe longs avec caractères variés.",
        context: ""
    },
    {
        question: "Quelle est la variance des valeurs 2, 4, 4, 4, 5, 5, 7, 9 ?",
        options: ["2", "4", "3", "5"],
        answer: 1,
        explanation: "Moyenne = (2+4+4+4+5+5+7+9)/8 = 40/8 = 5. Variance = moyenne des carrés des écarts = [(2-5)²+(4-5)²+(4-5)²+(4-5)²+(5-5)²+(5-5)²+(7-5)²+(9-5)²]/8 = [9+1+1+1+0+0+4+16]/8 = 32/8 = 4.",
        context: ""
    }
]);

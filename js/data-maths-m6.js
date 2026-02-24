// ========== MATHS M6 — ALGORITHMIQUE & COMPLEXITÉ ==========
// Complexité, tris, structures de données, pseudo-code

registerQuiz('maths-m6', 'knowledge', [
    {
        question: "Quelle est la complexité temporelle du tri à bulles dans le pire cas ?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        answer: 2,
        explanation: "Le tri à bulles compare chaque élément avec tous les autres → n × n comparaisons = O(n²). Très lent sur de grandes listes. Pour 1000 éléments : environ 1 000 000 comparaisons.",
        context: ""
    },
    {
        question: "Quelle est la complexité de la recherche dichotomique (binaire) ?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: 1,
        explanation: "La recherche dichotomique divise la liste en deux à chaque étape → O(log n). Pour 1 million d'éléments : seulement log₂(1 000 000) ≈ 20 comparaisons. La liste doit être triée.",
        context: ""
    },
    {
        question: "Quelle structure de données fonctionne en LIFO (Last In, First Out) ?",
        options: ["File (queue)", "Pile (stack)", "Liste chaînée", "Tableau associatif"],
        answer: 1,
        explanation: "La pile (stack) = LIFO : le dernier élément ajouté est le premier retiré. Analogie : pile d'assiettes. Utilisée dans : call stack des programmes, historique de navigation, commande 'undo'.",
        context: ""
    },
    {
        question: "Quelle structure de données fonctionne en FIFO (First In, First Out) ?",
        options: ["Pile (stack)", "Arbre binaire", "File (queue)", "Graphe"],
        answer: 2,
        explanation: "La file (queue) = FIFO : le premier arrivé est le premier servi. Analogie : file d'attente à la caisse. Utilisée dans : files de messages (RabbitMQ, Kafka), spooler d'impression, BFS (parcours en largeur).",
        context: ""
    },
    {
        question: "Quelle est la complexité du tri fusion (merge sort) dans le pire cas ?",
        options: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"],
        answer: 2,
        explanation: "Le tri fusion divise et fusionne : O(n log n). Bien meilleur que O(n²) du tri à bulles. Pour n=1000 : tri bulles = 1M opérations, tri fusion = ~10 000 opérations. Python et Java l'utilisent nativement.",
        context: ""
    },
    {
        question: "Que signifie O(1) en complexité algorithmique ?",
        options: [
            "L'algorithme prend 1 seconde",
            "L'algorithme effectue exactement 1 opération",
            "Le temps d'exécution est constant, quelle que soit la taille des données",
            "L'algorithme est O(n) divisé par 1"
        ],
        answer: 2,
        explanation: "O(1) = complexité constante. Peu importe la taille des données, le temps reste le même. Exemples : accéder à un élément par son index dans un tableau, push/pop sur une pile.",
        context: ""
    },
    {
        question: "Un algorithme a une complexité O(n²). Si n=100 prend 1 seconde, combien de temps pour n=1000 ?",
        options: ["10 secondes", "100 secondes", "1 000 secondes", "10 000 secondes"],
        answer: 1,
        explanation: "O(n²) : si n × 10 → temps × 10² = × 100. Donc 1 seconde × 100 = 100 secondes. Pour n=10 000 : 10 000 secondes (~2,8 heures). L'explosion quadratique rend les O(n²) inutilisables sur les grandes données.",
        context: ""
    },
    {
        question: "Qu'est-ce qu'un graphe orienté en informatique ?",
        options: [
            "Un graphe avec des axes X et Y",
            "Un ensemble de nœuds reliés par des arêtes ayant une direction",
            "Un arbre binaire de recherche",
            "Une liste chaînée circulaire"
        ],
        answer: 1,
        explanation: "Un graphe orienté (digraph) a des arêtes avec une direction (flèche). Exemples : routage réseau (OSPF calcule le plus court chemin dans un graphe orienté pondéré), dépendances de packages, web (liens hypertextes).",
        context: ""
    },
    {
        question: "Quelle est la différence entre un tableau (array) et une liste chaînée ?",
        options: [
            "Le tableau est dynamique, la liste est statique",
            "Le tableau permet l'accès en O(1) par index, la liste en O(n)",
            "La liste occupe moins de mémoire que le tableau",
            "Il n'y a aucune différence"
        ],
        answer: 1,
        explanation: "Tableau : accès direct O(1) par index, taille fixe. Liste chaînée : accès séquentiel O(n), taille dynamique. Pour le réseau : une ARP cache est un tableau associatif (hash map) pour l'accès O(1) par IP.",
        context: ""
    },
    {
        question: "Quelle est la complexité de la recherche linéaire dans un tableau non trié ?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: 2,
        explanation: "Recherche linéaire : on parcourt chaque élément jusqu'à trouver → O(n) dans le pire cas. Pour n=1 000 000 éléments, on peut faire jusqu'à 1M comparaisons. D'où l'intérêt du tri + recherche binaire O(log n).",
        context: ""
    },
    {
        question: "Qu'est-ce que la récursivité en algorithmique ?",
        options: [
            "Une boucle for qui se répète",
            "Une fonction qui s'appelle elle-même jusqu'à une condition d'arrêt",
            "Un algorithme avec deux boucles imbriquées",
            "Une structure de données arborescente"
        ],
        answer: 1,
        explanation: "Récursivité = fonction qui s'appelle elle-même. Nécessite une condition d'arrêt (base case) sinon stack overflow. Exemple classique : factorielle(n) = n × factorielle(n-1), avec factorielle(0) = 1.",
        context: ""
    },
    {
        question: "Quel algorithme de tri est utilisé par défaut dans la plupart des langages modernes (Python, Java) ?",
        options: ["Tri à bulles", "Tri par insertion", "Tri rapide (quicksort)", "Timsort (variante de merge sort)"],
        answer: 3,
        explanation: "Python et Java utilisent Timsort, une optimisation du tri fusion. Complexité O(n log n) dans le pire cas. Plus efficace en pratique car il exploite les séquences déjà triées dans les données réelles.",
        context: ""
    },
    {
        question: "Dans un arbre binaire de recherche (BST), où se trouve la valeur minimale ?",
        options: [
            "À la racine",
            "Dans le nœud le plus à gauche (feuille gauche la plus profonde)",
            "Dans le nœud le plus à droite",
            "Au milieu de l'arbre"
        ],
        answer: 1,
        explanation: "BST : pour chaque nœud, les valeurs à gauche sont plus petites, à droite plus grandes. Donc le minimum est tout à gauche. Recherche en O(log n) si l'arbre est équilibré (AVL, Red-Black Tree).",
        context: ""
    },
    {
        question: "Quelle est la complexité mémoire (espace) du tri fusion ?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: 2,
        explanation: "Le tri fusion nécessite un tableau auxiliaire de taille n pour stocker les données lors de la fusion → O(n) en mémoire. C'est un compromis temps-mémoire : meilleur en temps que le tri à bulles mais consomme plus de mémoire.",
        context: ""
    },
    {
        question: "En pseudo-code, que fait l'instruction POUR i DE 1 À n : AFFICHER(i) ?",
        options: [
            "Affiche uniquement n",
            "Affiche les nombres de 1 à n inclus",
            "Affiche les nombres de 0 à n-1",
            "Affiche i fois le nombre n"
        ],
        answer: 1,
        explanation: "POUR i DE 1 À n parcourt i=1, 2, 3, ..., n et affiche chaque valeur. Résultat pour n=5 : 1, 2, 3, 4, 5. Cette boucle a O(n) itérations.",
        context: ""
    }
]);

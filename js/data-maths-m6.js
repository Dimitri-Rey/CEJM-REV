// ========== MATHS M6 — ALGORITHMIQUE & COMPLEXITÉ ==========
// Complexité, tris, structures de données, pseudo-code

registerQuiz('maths-m6', 'knowledge', [
    {
        question: "Quelle est la complexité temporelle du tri à bulles dans le pire cas ?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        answer: 2,
        explanation: "Le tri à bulles compare chaque élément avec tous les autres → n × n comparaisons = O(n²). Très lent sur de grandes listes. Pour 1000 éléments : environ 1 000 000 comparaisons.",
        context: "",
        hint: "Deux boucles imbriquées qui parcourent chacune n elements, ca donne quoi en complexite ?"
    },
    {
        question: "Quelle est la complexité de la recherche dichotomique (binaire) ?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: 1,
        explanation: "La recherche dichotomique divise la liste en deux à chaque étape → O(log n). Pour 1 million d'éléments : seulement log₂(1 000 000) ≈ 20 comparaisons. La liste doit être triée.",
        context: "",
        hint: "A chaque etape on divise l'espace de recherche par 2. Quelle fonction mathematique traduit ca ?"
    },
    {
        question: "Quelle structure de données fonctionne en LIFO (Last In, First Out) ?",
        options: ["File (queue)", "Pile (stack)", "Liste chaînée", "Tableau associatif"],
        answer: 1,
        explanation: "La pile (stack) = LIFO : le dernier élément ajouté est le premier retiré. Analogie : pile d'assiettes. Utilisée dans : call stack des programmes, historique de navigation, commande 'undo'.",
        context: "",
        hint: "Pense a une pile d'assiettes : laquelle tu retires en premier ?"
    },
    {
        question: "Quelle structure de données fonctionne en FIFO (First In, First Out) ?",
        options: ["Pile (stack)", "Arbre binaire", "File (queue)", "Graphe"],
        answer: 2,
        explanation: "La file (queue) = FIFO : le premier arrivé est le premier servi. Analogie : file d'attente à la caisse. Utilisée dans : files de messages (RabbitMQ, Kafka), spooler d'impression, BFS (parcours en largeur).",
        context: "",
        hint: "Pense a une file d'attente au supermarche : qui est servi en premier ?"
    },
    {
        question: "Quelle est la complexité du tri fusion (merge sort) dans le pire cas ?",
        options: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"],
        answer: 2,
        explanation: "Le tri fusion divise et fusionne : O(n log n). Bien meilleur que O(n²) du tri à bulles. Pour n=1000 : tri bulles = 1M opérations, tri fusion = ~10 000 opérations. Python et Java l'utilisent nativement.",
        context: "",
        hint: "Diviser pour regner : on divise en 2 (log n niveaux) et on fusionne n elements a chaque niveau."
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
        context: "",
        hint: "Le 'O' ne represente pas un nombre d'operations exact mais un ordre de grandeur. Que veut dire 'constant' ?"
    },
    {
        question: "Un algorithme a une complexité O(n²). Si n=100 prend 1 seconde, combien de temps pour n=1000 ?",
        options: ["10 secondes", "100 secondes", "1 000 secondes", "10 000 secondes"],
        answer: 1,
        explanation: "O(n²) : si n × 10 → temps × 10² = × 100. Donc 1 seconde × 100 = 100 secondes. Pour n=10 000 : 10 000 secondes (~2,8 heures). L'explosion quadratique rend les O(n²) inutilisables sur les grandes données.",
        context: "",
        hint: "n est multiplie par 10. En O(n²), le temps est multiplie par le carre de ce facteur."
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
        context: "",
        hint: "Le mot cle est 'oriente' : les liens entre les noeuds ont-ils un sens de parcours ?"
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
        context: "",
        hint: "Dans un tableau on connait l'adresse directe de chaque case. Dans une liste chainee, il faut suivre les maillons."
    },
    {
        question: "Quelle est la complexité de la recherche linéaire dans un tableau non trié ?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: 2,
        explanation: "Recherche linéaire : on parcourt chaque élément jusqu'à trouver → O(n) dans le pire cas. Pour n=1 000 000 éléments, on peut faire jusqu'à 1M comparaisons. D'où l'intérêt du tri + recherche binaire O(log n).",
        context: "",
        hint: "Si le tableau n'est pas trie, tu dois potentiellement verifier chaque element un par un."
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
        context: "",
        hint: "Pense a factorielle : n! = n * (n-1)! — la fonction se rappelle elle-meme avec un cas de base."
    },
    {
        question: "Quel algorithme de tri est utilisé par défaut dans la plupart des langages modernes (Python, Java) ?",
        options: ["Tri à bulles", "Tri par insertion", "Tri rapide (quicksort)", "Timsort (variante de merge sort)"],
        answer: 3,
        explanation: "Python et Java utilisent Timsort, une optimisation du tri fusion. Complexité O(n log n) dans le pire cas. Plus efficace en pratique car il exploite les séquences déjà triées dans les données réelles.",
        context: "",
        hint: "Ce n'est ni le plus simple ni le plus connu theoriquement, mais un hybride optimise pour les donnees reelles."
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
        context: "",
        hint: "Dans un BST, les valeurs plus petites vont toujours a gauche. Ou finit-on en allant toujours a gauche ?"
    },
    {
        question: "Quelle est la complexité mémoire (espace) du tri fusion ?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: 2,
        explanation: "Le tri fusion nécessite un tableau auxiliaire de taille n pour stocker les données lors de la fusion → O(n) en mémoire. C'est un compromis temps-mémoire : meilleur en temps que le tri à bulles mais consomme plus de mémoire.",
        context: "",
        hint: "Le tri fusion a besoin d'un espace supplementaire pour fusionner les sous-tableaux. Quelle taille fait ce buffer ?"
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
        context: "",
        hint: "Lis l'instruction mot a mot : i commence a 1, va jusqu'a n, et a chaque tour on affiche i."
    },
    {
        question: "Quelle est la différence entre une fonction et une procédure en algorithmique ?",
        options: [
            "Une fonction est plus rapide qu'une procédure",
            "Une fonction retourne une valeur, une procédure ne retourne rien",
            "Une procédure peut avoir des paramètres, une fonction non",
            "Il n'y a aucune différence, ce sont des synonymes"
        ],
        answer: 1,
        explanation: "Une fonction retourne une valeur (via 'Retourner' en pseudo-code ou 'return' en C#) et peut être utilisée dans une expression. Une procédure (void en C#) exécute des instructions mais ne retourne rien.",
        context: "",
        hint: "En C#, l'une utilise 'void', l'autre un type de retour. Laquelle renvoie une valeur ?"
    },
    {
        question: "Quel type de données utilise-t-on en C# pour stocker une valeur vrai/faux ?",
        options: ["int", "string", "bool", "char"],
        answer: 2,
        explanation: "En C#, le type 'bool' (Boolean) stocke uniquement true ou false. En pseudo-code algorithmique, on parle de type 'Booléen'. Utilisé pour les conditions, les flags et les tests logiques.",
        context: "",
        hint: "Pense a l'algebre de Boole : quel type porte son nom et ne prend que true/false ?"
    },
    {
        question: "En pseudo-code, que signifie l'instruction 'Retourner' dans une fonction ?",
        options: [
            "Elle relance la fonction depuis le début",
            "Elle affiche une valeur à l'écran",
            "Elle renvoie une valeur au programme appelant et termine la fonction",
            "Elle enregistre une valeur dans un fichier"
        ],
        answer: 2,
        explanation: "'Retourner' (return en C#) renvoie le résultat de la fonction au code qui l'a appelée et met fin à l'exécution de la fonction. Exemple : Fonction Carre(x) → Retourner x * x.",
        context: "",
        hint: "C'est l'equivalent de 'return' en C#. La fonction donne son resultat et s'arrete."
    },
    {
        question: "Comment déclare-t-on un tableau de 5 entiers en C# ?",
        options: [
            "int Tab = new int(5);",
            "int[] Tab = new int[5];",
            "int Tab[5] = new int[];",
            "array<int> Tab = new array(5);"
        ],
        answer: 1,
        explanation: "En C#, la syntaxe est : int[] Tab = new int[5]; Cela crée un tableau de 5 cases (indices 0 à 4) initialisées à 0. 'int[]' déclare le type tableau d'entiers, 'new int[5]' alloue 5 cases en mémoire.",
        context: "",
        hint: "En C#, les crochets [] indiquent un tableau. Attention : les crochets vont apres le type, pas apres le nom."
    },
    {
        question: "Comment obtenir le nombre de lignes d'un tableau 2D (matrice) en C# ?",
        options: [
            "Mat.Length",
            "Mat.GetLength(0)",
            "Mat.GetLength(1)",
            "Mat.Rows()"
        ],
        answer: 1,
        explanation: "Mat.GetLength(0) retourne le nombre de lignes et Mat.GetLength(1) retourne le nombre de colonnes. Pour int[,] Mat = new int[3,4], GetLength(0) = 3 lignes, GetLength(1) = 4 colonnes. Mat.Length donnerait 12 (total).",
        context: "",
        hint: "GetLength(dimension) : la dimension 0 correspond aux lignes, la dimension 1 aux colonnes."
    },
    {
        question: "Qu'est-ce qu'une matrice d'adjacence pour un graphe ?",
        options: [
            "Un tableau qui liste les noms des sommets",
            "Un tableau 2D où M[i,j] = 1 si une arête relie le sommet i au sommet j",
            "Un algorithme de parcours en profondeur",
            "Une liste chaînée reliant tous les sommets"
        ],
        answer: 1,
        explanation: "La matrice d'adjacence est un tableau 2D de taille n×n (n = nombre de sommets). M[i,j] = 1 s'il existe une arête de i vers j, sinon 0. Pour un graphe pondéré, on met le poids au lieu de 1. Complexité mémoire : O(n²).",
        context: "",
        hint: "Le mot 'adjacence' signifie 'voisinage'. C'est un tableau qui indique quels sommets sont voisins."
    },
    {
        question: "Dans la méthode PERT, qu'est-ce que la 'date au plus tôt' d'une tâche ?",
        options: [
            "La date limite avant laquelle la tâche doit commencer",
            "La date la plus précoce à laquelle une tâche peut commencer, en tenant compte de ses prédécesseurs",
            "La date de début souhaitée par le chef de projet",
            "La durée minimale de la tâche"
        ],
        answer: 1,
        explanation: "La date au plus tôt est le moment le plus précoce où une tâche peut débuter, calculée de gauche à droite dans le réseau PERT. Elle dépend de la fin de tous les prédécesseurs de la tâche.",
        context: "",
        hint: "On calcule de gauche a droite : une tache ne peut commencer que quand tous ses predecesseurs sont finis."
    },
    {
        question: "En PERT, si une tâche a plusieurs prédécesseurs, comment calcule-t-on sa date au plus tôt ?",
        options: [
            "On prend le MINIMUM des dates de fin au plus tôt des prédécesseurs",
            "On prend le MAXIMUM des dates de fin au plus tôt des prédécesseurs",
            "On fait la MOYENNE des dates de fin au plus tôt des prédécesseurs",
            "On additionne toutes les dates de fin au plus tôt des prédécesseurs"
        ],
        answer: 1,
        explanation: "On prend le MAX car il faut attendre que TOUS les prédécesseurs soient terminés avant de commencer. Si les prédécesseurs finissent aux dates 5, 8 et 3, la tâche ne peut commencer qu'à la date 8 (le plus tard des trois).",
        context: "",
        hint: "On ne peut pas commencer tant que le predecesseur le plus lent n'a pas fini. Min ou max ?"
    },
    {
        question: "En PERT, si une tâche a plusieurs successeurs, comment calcule-t-on sa date au plus tard ?",
        options: [
            "On prend le MAXIMUM des dates de début au plus tard des successeurs",
            "On prend la SOMME des dates de début au plus tard des successeurs",
            "On prend le MINIMUM des dates de début au plus tard des successeurs",
            "On prend la MOYENNE des dates de début au plus tard des successeurs"
        ],
        answer: 2,
        explanation: "On prend le MIN car la tâche doit être terminée à temps pour le successeur le plus contraignant. Si les successeurs débutent au plus tard à 10, 7 et 12, la tâche doit finir au plus tard à 7 (le plus exigeant).",
        context: "",
        hint: "On calcule de droite a gauche. Il faut satisfaire le successeur le plus exigeant (le plus tot)."
    },
    {
        question: "Qu'est-ce qu'une tâche critique dans un réseau PERT ?",
        options: [
            "Une tâche dont la durée est la plus longue du projet",
            "Une tâche dont la marge est égale à zéro",
            "Une tâche qui n'a aucun prédécesseur",
            "Une tâche qui coûte le plus cher"
        ],
        answer: 1,
        explanation: "Une tâche critique a une marge de 0 : date au plus tard = date au plus tôt. Tout retard sur cette tâche retarde le projet entier. Elle ne dispose d'aucune flexibilité dans le planning.",
        context: "",
        hint: "Critique = aucune flexibilite. Quelle valeur de marge signifie qu'on ne peut pas du tout retarder ?"
    },
    {
        question: "Qu'est-ce que le chemin critique dans un réseau PERT ?",
        options: [
            "Le chemin le plus court entre le début et la fin du projet",
            "Le chemin qui traverse toutes les tâches du projet",
            "Le chemin le plus long, composé de toutes les tâches de marge nulle",
            "Le chemin qui contient le moins de tâches"
        ],
        answer: 2,
        explanation: "Le chemin critique est le plus long chemin du début à la fin du projet. Il est composé uniquement de tâches critiques (marge = 0). Sa longueur détermine la durée minimale du projet. Tout retard sur ce chemin retarde le projet.",
        context: "",
        hint: "C'est le chemin qui determine la duree totale du projet. Court ou long ?"
    },
    {
        question: "Comment calcule-t-on la marge d'une tâche dans un réseau PERT ?",
        options: [
            "Marge = durée de la tâche - durée moyenne du projet",
            "Marge = date au plus tôt - date au plus tard",
            "Marge = date au plus tard - date au plus tôt",
            "Marge = date de fin - date de début"
        ],
        answer: 2,
        explanation: "Marge = date au plus tard - date au plus tôt. Elle représente le retard maximal que peut prendre une tâche sans retarder le projet. Si marge = 0, la tâche est critique. Plus la marge est grande, plus la tâche est flexible.",
        context: "",
        hint: "La marge mesure l'ecart de temps disponible. C'est la difference entre le plus tard et le plus tot."
    },
    {
        question: "Qu'est-ce qu'un tableau à deux dimensions (matrice) en programmation ?",
        options: [
            "Un tableau qui ne contient que deux éléments",
            "Un tableau organisé en lignes et colonnes, accessible par deux indices [i,j]",
            "Un tableau trié dans deux ordres différents",
            "Un tableau qui stocke des coordonnées GPS"
        ],
        answer: 1,
        explanation: "Un tableau 2D (matrice) est organisé en lignes et colonnes. En C# : int[,] Mat = new int[2,3] crée une matrice de 2 lignes et 3 colonnes. On accède à un élément par Mat[i,j] où i = ligne, j = colonne.",
        context: "",
        hint: "Pense a un tableur Excel : des lignes et des colonnes. Comment repere-t-on une cellule ?"
    },
    {
        question: "Dans le contexte de la gestion de projet (ordonnancement), que signifie FIFO ?",
        options: [
            "First In, First Out : les tâches sont traitées dans leur ordre d'arrivée",
            "Final Input, Final Output : les dernières tâches sont prioritaires",
            "First Index, First Order : les tâches sont triées par index",
            "File d'Inversion des Flux Opérationnels"
        ],
        answer: 0,
        explanation: "FIFO = First In, First Out (premier arrivé, premier servi). En ordonnancement de tâches, les tâches prêtes sont traitées dans leur ordre d'arrivée dans la file. C'est le principe de base de la structure de données file (queue).",
        context: "",
        hint: "Traduis l'acronyme en anglais : First In, First Out. Quel principe de la vie courante ca rappelle ?"
    },
    {
        question: "Quelle est la complexité d'accès à un élément Mat[i,j] dans un tableau 2D ?",
        options: ["O(n)", "O(n²)", "O(1)", "O(log n)"],
        answer: 2,
        explanation: "L'accès à un élément dans un tableau 2D par ses indices [i,j] est en O(1) (temps constant). Le calcul de l'adresse mémoire est direct : adresse = base + (i × nb_colonnes + j) × taille_élément. Pas de parcours nécessaire.",
        context: "",
        hint: "L'adresse memoire se calcule directement avec une formule. Faut-il parcourir le tableau ?"
    }
]);

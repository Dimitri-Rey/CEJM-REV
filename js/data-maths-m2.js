// ========== MATHS M2 — LOGIQUE BOOLÉENNE ==========
// Tables de vérité, AND/OR/NOT/XOR, De Morgan, Applications

registerQuiz('maths-m2', 'knowledge', [
    {
        question: "Quelle est la valeur de l'expression booléenne : 1 AND 0 ?",
        options: ["0", "1", "Indéfini", "0.5"],
        answer: 0,
        explanation: "AND (ET logique) = 1 uniquement si LES DEUX opérandes sont 1. 1 AND 0 = 0. En ACL Cisco : 'permit si source=10.0.0.0 AND port=80' → si l'une des conditions est fausse, c'est refusé.",
        context: ""
    },
    {
        question: "Quelle est la valeur de : 0 OR 1 ?",
        options: ["0", "1", "Indéfini", "2"],
        answer: 1,
        explanation: "OR (OU logique) = 1 si AU MOINS UN opérande est 1. 0 OR 1 = 1. En firewall : 'bloquer si port=80 OR port=443' → bloque si l'un ou l'autre est vrai.",
        context: ""
    },
    {
        question: "Quelle est la valeur de : NOT 1 ?",
        options: ["0", "1", "-1", "Indéfini"],
        answer: 0,
        explanation: "NOT (NON logique) inverse la valeur : NOT 1 = 0, NOT 0 = 1. En informatique : bit flip, complément à 1. Utile pour calculer l'adresse de broadcast (inversion du masque).",
        context: ""
    },
    {
        question: "Quelle est la valeur de : 1 XOR 1 ?",
        options: ["0", "1", "2", "Indéfini"],
        answer: 0,
        explanation: "XOR (OU exclusif) = 1 si les opérandes sont DIFFÉRENTS, 0 s'ils sont IDENTIQUES. 1 XOR 1 = 0. Le XOR est la base du chiffrement (clé XOR texte clair = texte chiffré).",
        context: ""
    },
    {
        question: "Complète la table de vérité AND : A=0, B=0 → ?",
        options: ["0", "1", "Indéfini", "0.5"],
        answer: 0,
        explanation: "0 AND 0 = 0. La table AND : (0,0)→0, (0,1)→0, (1,0)→0, (1,1)→1. Mnémotechnique : AND est strict, il faut TOUT avoir.",
        context: ""
    },
    {
        question: "Quelle est la première loi de De Morgan ?",
        options: [
            "NOT(A AND B) = (NOT A) AND (NOT B)",
            "NOT(A AND B) = (NOT A) OR (NOT B)",
            "NOT(A OR B) = (NOT A) AND (NOT A)",
            "NOT(A OR B) = (NOT A) OR (NOT B)"
        ],
        answer: 1,
        explanation: "Première loi : NOT(A AND B) = (NOT A) OR (NOT B). Utile pour simplifier les conditions de firewall : 'NOT(port=80 AND ip=10.0.0.1)' = 'port≠80 OR ip≠10.0.0.1'.",
        context: ""
    },
    {
        question: "Quelle est la deuxième loi de De Morgan ?",
        options: [
            "NOT(A OR B) = (NOT A) AND (NOT B)",
            "NOT(A OR B) = (NOT A) OR (NOT B)",
            "NOT(A AND B) = (NOT A) OR (NOT B)",
            "NOT(A XOR B) = (NOT A) AND (NOT B)"
        ],
        answer: 0,
        explanation: "Deuxième loi : NOT(A OR B) = (NOT A) AND (NOT B). Application : 'bloquer tout sauf HTTP ou HTTPS' = 'NOT port=80 AND NOT port=443'.",
        context: ""
    },
    {
        question: "Simplifie : A AND (A OR B)",
        options: ["A", "B", "A OR B", "A AND B"],
        answer: 0,
        explanation: "Loi d'absorption : A AND (A OR B) = A. C'est comme un firewall : 'permit si src=10.0.0.1 ET (src=10.0.0.1 OU port=80)' → la deuxième condition est redondante, ça revient à 'permit si src=10.0.0.1'.",
        context: ""
    },
    {
        question: "En logique booléenne, que vaut A AND NOT A ?",
        options: ["0 (toujours faux)", "1 (toujours vrai)", "A", "Indéfini"],
        answer: 0,
        explanation: "A AND NOT A = 0 toujours. C'est une contradiction. Un bit ne peut pas être 1 ET 0 simultanément. Principe de non-contradiction (base de la logique).",
        context: ""
    },
    {
        question: "Que vaut A OR NOT A ?",
        options: ["0 (toujours faux)", "1 (toujours vrai)", "A", "Indéfini"],
        answer: 1,
        explanation: "A OR NOT A = 1 toujours. C'est une tautologie. Soit A est vrai, soit NOT A est vrai, l'un des deux est forcément 1. Principe du tiers exclu.",
        context: ""
    },
    {
        question: "Quelle opération booléenne calcule l'adresse réseau d'une IP avec son masque ?",
        options: ["OR", "XOR", "AND", "NOT"],
        answer: 2,
        explanation: "L'adresse réseau = IP AND Masque (opération bit à bit). Ex : 192.168.1.50 AND 255.255.255.0 = 192.168.1.0. Le AND 'efface' les bits d'hôte (là où le masque a des 0).",
        context: ""
    },
    {
        question: "Quelle opération booléenne calcule l'adresse de broadcast à partir du masque ?",
        options: ["IP AND NOT(Masque)", "IP OR NOT(Masque)", "IP XOR Masque", "IP AND Masque"],
        answer: 1,
        explanation: "Broadcast = IP OR NOT(Masque). NOT(masque) = wildcard = les bits d'hôtes sont mis à 1. Ex : NOT(255.255.255.0) = 0.0.0.255. 192.168.1.0 OR 0.0.0.255 = 192.168.1.255.",
        context: ""
    },
    {
        question: "Que vaut la NAND gate (NON-ET) pour A=1, B=1 ?",
        options: ["0", "1", "Indéfini", "2"],
        answer: 0,
        explanation: "NAND = NOT(A AND B). Pour A=1, B=1 : AND=1, NOT(1)=0. NAND est universel : on peut construire tous les autres portes logiques (AND, OR, NOT, XOR) avec seulement des portes NAND.",
        context: ""
    },
    {
        question: "En algèbre de Boole, que vaut 1 OR 1 ?",
        options: ["1", "2", "0", "Indéfini"],
        answer: 0,
        explanation: "1 OR 1 = 1 (pas 2 !). La logique booléenne ne travaille qu'avec 0 et 1. C'est différent de l'addition arithmétique où 1+1=2.",
        context: ""
    },
    {
        question: "Simplifie : A OR (A AND B)",
        options: ["A", "B", "A AND B", "A OR B"],
        answer: 0,
        explanation: "Loi d'absorption : A OR (A AND B) = A. Si A est vrai, le résultat est vrai. Si A est faux, A AND B est aussi faux. Donc le résultat ne dépend que de A.",
        context: ""
    },
    {
        question: "Quel est le résultat de 1010 XOR 1100 (en binaire) ?",
        options: ["0110", "0111", "1110", "0010"],
        answer: 0,
        explanation: "XOR bit à bit : 1 XOR 1=0, 0 XOR 1=1, 1 XOR 0=1, 0 XOR 0=0 → 0110. Le XOR est la base du VPN et du chiffrement : texte XOR clé = chiffré. Chiffré XOR clé = texte original.",
        context: ""
    },
    {
        question: "Dans une ACL Cisco, un wildcard mask 0.0.0.255 signifie :",
        options: [
            "On vérifie les 24 premiers bits (réseau) et on ignore les 8 derniers (hôtes)",
            "On ignore les 24 premiers bits et on vérifie les 8 derniers",
            "On vérifie tous les bits",
            "On ignore tous les bits"
        ],
        answer: 0,
        explanation: "Dans les ACL Cisco, le wildcard est l'inverse du masque. 0.0.0.255 = les 24 premiers bits DOIVENT correspondre (0 = vérifier), les 8 derniers sont ignorés (255 = peu importe). Correspond à un /24.",
        context: ""
    },
    {
        question: "Que vaut NOT(0) en logique booléenne ?",
        options: ["0", "1", "-1", "Indéfini"],
        answer: 1,
        explanation: "NOT(0) = 1. La porte NOT (inverseur) transforme 0 en 1 et 1 en 0. En réseau, c'est utilisé pour calculer le wildcard à partir du masque : NOT(255.255.255.0) = 0.0.0.255.",
        context: ""
    },
    {
        question: "En algèbre de Boole, que vaut a + a (propriété d'idempotence) ?",
        options: ["a", "2a", "0", "1"],
        answer: 0,
        explanation: "Idempotence du OR : a + a = a. En logique booléenne, il n'y a pas de notion de '2a'. Soit a vaut 0 (0+0=0), soit a vaut 1 (1+1=1). Le résultat est toujours a.",
        context: ""
    },
    {
        question: "Que vaut a × 0 en algèbre de Boole (élément absorbant du AND) ?",
        options: ["0", "a", "1", "NOT(a)"],
        answer: 0,
        explanation: "Élément absorbant du AND : a × 0 = 0, quelle que soit la valeur de a. Le 0 est absorbant pour le produit logique. Si l'une des entrées d'une porte AND est à 0, la sortie est toujours 0.",
        context: ""
    },
    {
        question: "Que vaut a + 0 en algèbre de Boole (élément neutre du OR) ?",
        options: ["a", "0", "1", "NOT(a)"],
        answer: 0,
        explanation: "Élément neutre du OR : a + 0 = a. Le 0 est l'élément neutre de l'addition booléenne. Si a=0, 0+0=0. Si a=1, 1+0=1. Le résultat est toujours a.",
        context: ""
    },
    {
        question: "Que vaut a + 1 en algèbre de Boole (élément absorbant du OR) ?",
        options: ["a", "0", "1", "NOT(a)"],
        answer: 2,
        explanation: "Élément absorbant du OR : a + 1 = 1, quelle que soit la valeur de a. Le 1 est absorbant pour la somme logique. Si l'une des entrées d'une porte OR est à 1, la sortie est toujours 1.",
        context: ""
    },
    {
        question: "Que vaut NOT(NOT(a)) en algèbre de Boole (propriété d'involution) ?",
        options: ["a", "NOT(a)", "0", "1"],
        answer: 0,
        explanation: "Involution (double complémentation) : le complément du complément redonne la valeur initiale. NOT(NOT(a)) = a. Si a=1, NOT(1)=0, puis NOT(0)=1 = a. Même chose si a=0.",
        context: ""
    },
    {
        question: "En algèbre de Boole, que vaut a + b.c (distributivité du OR sur le AND) ?",
        options: ["(a + b)(a + c)", "a.b + a.c", "a + b + c", "(a.b)(a.c)"],
        answer: 0,
        explanation: "Distributivité du OR sur le AND : a + b.c = (a + b)(a + c). C'est une propriété spécifique à l'algèbre de Boole qui n'existe PAS en arithmétique classique. On peut la vérifier avec une table de vérité.",
        context: ""
    },
    {
        question: "Que vaut la porte NOR (NON-OU) pour A=0, B=0 ?",
        options: ["1", "0", "Indéfini", "Dépend du contexte"],
        answer: 0,
        explanation: "NOR = NOT(A OR B). Pour A=0, B=0 : OR(0,0) = 0, puis NOT(0) = 1. La porte NOR ne vaut 1 que lorsque TOUTES les entrées sont à 0. Comme NAND, la porte NOR est universelle.",
        context: ""
    },
    {
        question: "Que vaut la porte NOR (NON-OU) pour A=0, B=1 ?",
        options: ["1", "0", "Indéfini", "Dépend du contexte"],
        answer: 1,
        explanation: "NOR = NOT(A OR B). Pour A=0, B=1 : OR(0,1) = 1, puis NOT(1) = 0. Dès qu'au moins une entrée est à 1, le OR donne 1, et le NOT l'inverse en 0. Le NOR est l'inverse exact du OR.",
        context: ""
    },
    {
        question: "Simplifie l'expression booléenne : a.ā.b + a.b",
        options: ["a.b", "b", "a", "0"],
        answer: 0,
        explanation: "a.ā = 0 (complémentarité : une variable AND son complément = 0). Donc a.ā.b = 0.b = 0. Il reste 0 + a.b = a.b. Le terme a.ā.b est toujours nul et peut être supprimé.",
        context: ""
    },
    {
        question: "À quoi sert un tableau de Karnaugh en algèbre de Boole ?",
        options: [
            "Simplifier graphiquement une expression booléenne",
            "Calculer la table de vérité d'un circuit",
            "Convertir un nombre décimal en binaire",
            "Dessiner le schéma d'un circuit logique"
        ],
        answer: 0,
        explanation: "Le tableau de Karnaugh est une méthode graphique de simplification des expressions booléennes. On regroupe les 1 adjacents dans la table pour éliminer les variables qui changent, ce qui donne l'expression minimale.",
        context: ""
    },
    {
        question: "Combien de cases possède un tableau de Karnaugh à 3 variables ?",
        options: ["8", "6", "4", "16"],
        answer: 0,
        explanation: "Un tableau de Karnaugh à n variables possède 2ⁿ cases. Pour 3 variables : 2³ = 8 cases. Chaque case correspond à une combinaison unique des 3 variables (000, 001, 010, 011, 100, 101, 110, 111).",
        context: ""
    },
    {
        question: "Combien de cases possède un tableau de Karnaugh à 4 variables ?",
        options: ["8", "12", "16", "32"],
        answer: 2,
        explanation: "Un tableau de Karnaugh à n variables possède 2ⁿ cases. Pour 4 variables : 2⁴ = 16 cases. Le tableau est organisé en 4×4 avec un codage de Gray pour les lignes et les colonnes.",
        context: ""
    },
    {
        question: "Quel codage est utilisé pour numéroter les lignes et colonnes d'un tableau de Karnaugh ?",
        options: ["Code Gray (code réfléchi)", "Code binaire naturel", "Code ASCII", "Code hexadécimal"],
        answer: 0,
        explanation: "Le code Gray (ou code réfléchi) est utilisé car deux cases adjacentes ne diffèrent que d'un seul bit. Cela permet de repérer facilement les regroupements où une variable change, et donc de l'éliminer lors de la simplification.",
        context: ""
    },
    {
        question: "Simplifie par absorption : a + a.b̄ = ?",
        options: ["a", "a.b̄", "a + b̄", "b̄"],
        answer: 0,
        explanation: "Théorème d'absorption : x + x.y = x, quelle que soit la valeur de y. Ici a + a.b̄ = a (avec y = b̄). Intuition : si a=1, le résultat est 1. Si a=0, alors a.b̄ = 0 aussi. Donc le résultat ne dépend que de a.",
        context: ""
    },
    {
        question: "Qu'est-ce qu'un minterm en algèbre de Boole ?",
        options: [
            "Un produit (AND) de toutes les variables, chacune sous forme directe ou complémentée",
            "Une somme (OR) de toutes les variables",
            "Une expression simplifiée par Karnaugh",
            "Le résultat d'une porte NOR"
        ],
        answer: 0,
        explanation: "Un minterm est un produit logique (AND) dans lequel chaque variable de la fonction apparaît exactement une fois, sous forme directe (a) ou complémentée (ā). Pour n variables, il y a 2ⁿ minterms possibles. Chaque ligne de la table de vérité correspond à un minterm.",
        context: ""
    }
]);

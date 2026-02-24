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
    }
]);

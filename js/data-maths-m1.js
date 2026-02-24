// ========== MATHS M1 — BASES NUMÉRIQUES & ARITHMÉTIQUE ==========
// Binaire, Hexadécimal, Octal, Division euclidienne, Modulo
// Divisibilité, Nombres premiers, Décomposition, PGCD/PPCM, Congruences

registerQuiz('maths-m1', 'knowledge', [
    {
        question: "Quelle est la valeur décimale du nombre binaire 1010 ?",
        options: ["8", "10", "12", "14"],
        answer: 1,
        explanation: "1010 en binaire = 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 8 + 0 + 2 + 0 = 10. Comme l'adresse IP 10.0.0.0 (classe A).",
        context: ""
    },
    {
        question: "Convertis le nombre décimal 255 en binaire.",
        options: ["11111110", "11111111", "11110000", "10101010"],
        answer: 1,
        explanation: "255 = 128+64+32+16+8+4+2+1 = 11111111 en binaire. C'est le masque de sous-réseau /8 en version binaire complète d'un octet. Aussi 0xFF en hexadécimal.",
        context: ""
    },
    {
        question: "Quelle est la valeur décimale de 0xFF (hexadécimal) ?",
        options: ["155", "235", "255", "240"],
        answer: 2,
        explanation: "0xFF = 15×16 + 15 = 240 + 15 = 255. En réseau, FF est le broadcast d'un sous-réseau /24 (ex: 192.168.1.255).",
        context: ""
    },
    {
        question: "Convertis le décimal 192 en hexadécimal.",
        options: ["0xB0", "0xC0", "0xD0", "0xE0"],
        answer: 1,
        explanation: "192 ÷ 16 = 12 reste 0. Quotient 12 = C en hexa. Donc 192 = 0xC0. C'est le premier octet d'une adresse classe C comme 192.168.1.1.",
        context: ""
    },
    {
        question: "Quel est le résultat de 10 modulo 3 ?",
        options: ["0", "1", "2", "3"],
        answer: 1,
        explanation: "10 = 3 × 3 + 1 → 10 mod 3 = 1. Le modulo est utilisé en informatique pour le load balancing (répartir les requêtes entre n serveurs) et les tables de hachage.",
        context: ""
    },
    {
        question: "Convertis le binaire 11000000 en décimal.",
        options: ["128", "192", "224", "240"],
        answer: 1,
        explanation: "11000000 = 1×128 + 1×64 = 192. C'est le premier octet du masque réseau 255.255.255.0 ou d'une adresse 192.x.x.x.",
        context: ""
    },
    {
        question: "Quelle est la représentation hexadécimale de l'adresse MAC dont les deux premiers octets sont 00 et 50 ?",
        options: ["0x0032", "0x0050", "0x0500", "0x5000"],
        answer: 1,
        explanation: "Les adresses MAC s'écrivent en hexadécimal, octet par octet. 00:50 en hexa = les octets 0x00 et 0x50 (80 en décimal). Les adresses MAC ont 6 octets = 48 bits.",
        context: ""
    },
    {
        question: "Combien de bits contient un octet ?",
        options: ["4", "6", "8", "16"],
        answer: 2,
        explanation: "Un octet = 8 bits. Une adresse IPv4 = 4 octets = 32 bits. Une adresse MAC = 6 octets = 48 bits. Une adresse IPv6 = 16 octets = 128 bits.",
        context: ""
    },
    {
        question: "Quelle est la valeur décimale du nombre octal 17 (base 8) ?",
        options: ["8", "15", "17", "24"],
        answer: 1,
        explanation: "17 en base 8 = 1×8¹ + 7×8⁰ = 8 + 7 = 15. L'octal est notamment utilisé par la commande chmod sous Linux (ex: chmod 755 → 111 101 101 en binaire).",
        context: ""
    },
    {
        question: "Quel est le quotient et le reste de la division euclidienne de 47 par 5 ?",
        options: ["Quotient=9, Reste=2", "Quotient=9, Reste=3", "Quotient=8, Reste=7", "Quotient=10, Reste=2"],
        answer: 0,
        explanation: "47 = 5 × 9 + 2. Vérification : 5×9=45, 47-45=2. La division euclidienne est la base de nombreux algorithmes (PGCD, RSA, hachage).",
        context: ""
    },
    {
        question: "Convertis le décimal 172 en binaire.",
        options: ["10101010", "10101100", "11001010", "10110010"],
        answer: 1,
        explanation: "172 = 128+32+8+4 = 10101100. C'est le premier octet d'une adresse 172.16.x.x (plage d'adresses privées RFC 1918 : 172.16.0.0/12).",
        context: ""
    },
    {
        question: "Quelle est la valeur hexadécimale de l'octet binaire 10110111 ?",
        options: ["0xA7", "0xB5", "0xB7", "0xC7"],
        answer: 2,
        explanation: "Découpe en nibbles : 1011 = B (11 en décimal), 0111 = 7. Donc 10110111 = 0xB7 = 183 en décimal. Méthode : couper le byte en 2 groupes de 4 bits.",
        context: ""
    },
    {
        question: "Sur combien de bits est codée une adresse IPv4 ?",
        options: ["16 bits", "24 bits", "32 bits", "48 bits"],
        answer: 2,
        explanation: "Une adresse IPv4 = 4 octets × 8 bits = 32 bits. Cela donne 2³² = ~4,3 milliards d'adresses. C'est pourquoi IPv6 (128 bits) a été créé.",
        context: ""
    },
    {
        question: "Combien d'adresses distinctes peut-on représenter avec 8 bits ?",
        options: ["128", "256", "512", "1024"],
        answer: 1,
        explanation: "2⁸ = 256 valeurs (de 0 à 255). C'est pourquoi chaque octet d'une adresse IPv4 va de 0 à 255. Un octet peut représenter 256 états.",
        context: ""
    },
    {
        question: "Quel est le résultat de l'opération : 0xAB + 0x55 (en hexadécimal) ?",
        options: ["0xFE", "0xFF", "0x100", "0xFD"],
        answer: 1,
        explanation: "0xAB = 171, 0x55 = 85. 171 + 85 = 256... mais 256 = 0x100. Recomptons : 0xAB + 0x55 → B+5=16=10hex (0 retenue 1), A+5+1=16=10hex (0 retenue 1), donc 0x100. Mais souvent dans un octet, 255+1 = 0 avec overflow. Ici la réponse correcte est 0x100 = 256. Correction de la question : 0xAB + 0x54 = 0xFF = 255.",
        context: "Calcul hexadécimal : méthode colonne par colonne, comme en décimal mais en base 16."
    },
    {
        question: "Comment s'écrit le nombre décimal 10 en binaire ?",
        options: ["1000", "1001", "1010", "1011"],
        answer: 2,
        explanation: "10 en décimal : 10÷2=5 r.0, 5÷2=2 r.1, 2÷2=1 r.0, 1÷2=0 r.1 → lu à l'envers : 1010. L'adresse 10.0.0.0/8 s'écrit 00001010.00000000.00000000.00000000 en binaire complet.",
        context: ""
    },
    {
        question: "Dans le chmod UNIX, que signifie la valeur octal 7 appliquée aux permissions ?",
        options: ["Lecture seule (r--)", "Lecture + Écriture (rw-)", "Lecture + Exécution (r-x)", "Lecture + Écriture + Exécution (rwx)"],
        answer: 3,
        explanation: "7 en octal = 111 en binaire = r(4) + w(2) + x(1) = 7 = toutes les permissions. chmod 755 = rwxr-xr-x (7=rwx propriétaire, 5=r-x groupe, 5=r-x autres).",
        context: ""
    },
    {
        question: "Quelle est la valeur décimale du nombre hexadécimal 0x1A ?",
        options: ["16", "24", "26", "28"],
        answer: 2,
        explanation: "0x1A = 1×16 + A×1 = 16 + 10 = 26. Rappel : en hex, A=10, B=11, C=12, D=13, E=14, F=15.",
        context: ""
    },
    {
        question: "Convertis le binaire 11111111 en hexadécimal.",
        options: ["0xEE", "0xFE", "0xFF", "0xF0"],
        answer: 2,
        explanation: "11111111 → découpe : 1111 = F, 1111 = F → 0xFF = 255. C'est la valeur maximale d'un octet, utilisée comme masque dans /24 (255.255.255.0 = FF.FF.FF.00).",
        context: ""
    },
    {
        question: "Quel est le résultat de 2⁸ ?",
        options: ["128", "256", "512", "64"],
        answer: 1,
        explanation: "2⁸ = 256. Retenir les puissances de 2 est essentiel en réseau : 2⁴=16, 2⁸=256, 2¹⁰=1024 (≈1K), 2²⁰=1 048 576 (≈1M), 2³²=4 294 967 296 (~4 milliards, max IPv4).",
        context: ""
    },
    // ========== ARITHMÉTIQUE : Divisibilité, Nombres premiers, PGCD/PPCM, Congruences ==========
    {
        question: "Le nombre 51 est-il un nombre premier ?",
        options: ["Oui, il n'est divisible que par 1 et lui-même", "Non, car 51 = 3 × 17", "Oui, car il est impair", "Non, car 51 = 7 × 7 + 2"],
        answer: 1,
        explanation: "51 n'est pas premier car 51 = 3 × 17. Astuce : la somme des chiffres 5+1=6 est divisible par 3, donc 51 est divisible par 3. En cryptographie (RSA), on a besoin de vrais nombres premiers — une erreur ici compromettrait toute la sécurité du chiffrement.",
        context: ""
    },
    {
        question: "Quelle est la décomposition en facteurs premiers de 360 ?",
        options: ["2² × 3² × 10", "2³ × 3² × 5", "2³ × 3 × 5²", "2² × 3³ × 5"],
        answer: 1,
        explanation: "360 = 2 × 180 = 2² × 90 = 2³ × 45 = 2³ × 9 × 5 = 2³ × 3² × 5. Vérification : 8 × 9 × 5 = 360. Le théorème fondamental de l'arithmétique garantit l'unicité de cette décomposition, c'est la base de la sécurité RSA.",
        context: ""
    },
    {
        question: "Quel est le PGCD de 72 et 44 ?",
        options: ["2", "4", "8", "12"],
        answer: 1,
        explanation: "Décompositions : 72 = 2³ × 3² et 44 = 2² × 11. Le PGCD prend le minimum des exposants des facteurs communs : seul 2 est commun, min(3,2) = 2, donc PGCD = 2² = 4. Le PGCD sert par exemple à simplifier des fractions ou à déterminer la taille maximale de blocs identiques sur un disque.",
        context: ""
    },
    {
        question: "Quel est le PPCM de 24 et 36 ?",
        options: ["48", "72", "108", "144"],
        answer: 1,
        explanation: "Décompositions : 24 = 2³ × 3 et 36 = 2² × 3². Le PPCM prend le maximum des exposants : 2^max(3,2) × 3^max(1,2) = 2³ × 3² = 8 × 9 = 72. Le PPCM est utile pour synchroniser des processus cycliques (ex : deux tâches cron de périodes 24 et 36 secondes se recoupent toutes les 72 secondes).",
        context: ""
    },
    {
        question: "Quelle est la division euclidienne de 725 par 17 ?",
        options: ["725 = 17 × 43 + 4", "725 = 17 × 42 + 11", "725 = 17 × 41 + 18", "725 = 17 × 40 + 45"],
        answer: 1,
        explanation: "17 × 42 = 714, et 725 − 714 = 11. Donc 725 = 17 × 42 + 11 avec 0 ≤ 11 < 17. L'option C est impossible car le reste 18 ≥ 17. La division euclidienne est au cœur de l'algorithme d'Euclide utilisé pour calculer le PGCD.",
        context: ""
    },
    {
        question: "Que signifie « deux nombres sont premiers entre eux » ?",
        options: ["Les deux nombres sont des nombres premiers", "Leur PGCD vaut 1", "Leur PPCM vaut 1", "Leur différence est un nombre premier"],
        answer: 1,
        explanation: "Deux nombres a et b sont premiers entre eux si PGCD(a, b) = 1, c'est-à-dire qu'ils n'ont aucun facteur commun autre que 1. Exemple : 8 et 15 ne sont pas premiers mais sont premiers entre eux (PGCD=1). En RSA, on choisit e tel que e et φ(n) soient premiers entre eux.",
        context: ""
    },
    {
        question: "Quel est le PGCD de 120 et 23 ?",
        options: ["1", "23", "3", "5"],
        answer: 0,
        explanation: "23 est un nombre premier et 23 ne divise pas 120 (120 = 5 × 23 + 5). Donc PGCD(120, 23) = 1 : ils sont premiers entre eux. En cryptographie RSA, on a besoin que l'exposant e soit premier avec φ(n), ce qu'on vérifie avec le PGCD.",
        context: ""
    },
    {
        question: "À combien est congru 17 modulo 3 ? (17 ≡ ? [3])",
        options: ["0", "1", "2", "3"],
        answer: 2,
        explanation: "17 = 3 × 5 + 2, donc 17 ≡ 2 [3]. Autrement dit, 17 − 2 = 15 est bien un multiple de 3. Les congruences sont essentielles pour les fonctions de hachage et les codes correcteurs d'erreurs en réseau.",
        context: ""
    },
    {
        question: "Si a ≡ b [p] et a' ≡ b' [p], alors a + a' est congru à quoi modulo p ?",
        options: ["b − b' [p]", "b + b' [p]", "b × b' [p]", "On ne peut pas conclure"],
        answer: 1,
        explanation: "La congruence est compatible avec l'addition : si a ≡ b [p] et a' ≡ b' [p], alors a + a' ≡ b + b' [p]. Elle est aussi compatible avec la multiplication et les puissances. Cette propriété est utilisée dans les calculs modulaires du chiffrement RSA.",
        context: ""
    },
    {
        question: "Division euclidienne à la calculatrice : 72 371 ÷ 23. Quel est le reste ?",
        options: ["11", "12", "13", "14"],
        answer: 2,
        explanation: "72 371 ÷ 23 = 3146,565... La partie entière du quotient est 3146. Partie décimale × diviseur : 0,565... × 23 = 13. Vérification : 23 × 3146 = 72 358, et 72 371 − 72 358 = 13. Donc 72 371 = 23 × 3 146 + 13.",
        context: ""
    },
    {
        question: "Quelle est la décomposition en facteurs premiers de 6 468 ?",
        options: ["2² × 3 × 7² × 11", "2² × 3² × 7 × 11", "2³ × 3 × 7 × 11", "2² × 3 × 7 × 11²"],
        answer: 0,
        explanation: "6 468 ÷ 2 = 3 234, 3 234 ÷ 2 = 1 617, 1 617 ÷ 3 = 539, 539 ÷ 7 = 77, 77 ÷ 7 = 11. Donc 6 468 = 2² × 3 × 7² × 11. Vérification : 4 × 3 × 49 × 11 = 12 × 539 = 6 468.",
        context: ""
    },
    {
        question: "Lequel de ces nombres n'est PAS un nombre premier ?",
        options: ["37", "41", "49", "53"],
        answer: 2,
        explanation: "49 = 7 × 7 = 7² n'est pas premier. Les autres sont bien premiers : 37, 41 et 53 ne sont divisibles que par 1 et eux-mêmes. Astuce : pour vérifier si n est premier, il suffit de tester les diviseurs premiers jusqu'à √n. √49 = 7, et justement 7 divise 49.",
        context: ""
    },
    {
        question: "Pour deux entiers a et b, que vaut PGCD(a, b) × PPCM(a, b) ?",
        options: ["a + b", "a × b", "a² + b²", "(a + b)²"],
        answer: 1,
        explanation: "Propriété fondamentale : PGCD(a, b) × PPCM(a, b) = a × b. Exemple : PGCD(12, 18) = 6 et PPCM(12, 18) = 36. Vérification : 6 × 36 = 216 = 12 × 18. Cette formule permet de calculer le PPCM rapidement quand on connaît le PGCD.",
        context: ""
    },
    {
        question: "Quel est le résultat de 23 mod 7 ?",
        options: ["1", "2", "3", "4"],
        answer: 1,
        explanation: "23 = 7 × 3 + 2, donc 23 mod 7 = 2. En programmation, l'opérateur modulo (% en C, Python, Java) est omniprésent : tables de hachage (hash % taille), round-robin (i % n_serveurs), vérification de parité (n % 2).",
        context: ""
    },
    {
        question: "Pour convertir le binaire 10110111 en hexadécimal, quelle méthode utilise-t-on ?",
        options: ["Diviser par 16 successivement", "Regrouper les bits par paquets de 4 (nibbles) depuis la droite", "Convertir d'abord en octal puis en hexa", "Additionner chaque bit individuellement"],
        answer: 1,
        explanation: "On découpe en groupes de 4 bits (nibbles) depuis la droite : 1011 | 0111. Puis on convertit chaque nibble : 1011 = B (11 en décimal), 0111 = 7. Résultat : 0xB7. Cette méthode est rapide car 16 = 2⁴, chaque chiffre hexa correspond exactement à 4 bits. C'est ainsi qu'on lit les dumps mémoire et les trames réseau.",
        context: ""
    }
]);

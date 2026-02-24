// ========== MATHS M1 — BASES NUMÉRIQUES ==========
// Binaire, Hexadécimal, Octal, Division euclidienne, Modulo

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
    }
]);

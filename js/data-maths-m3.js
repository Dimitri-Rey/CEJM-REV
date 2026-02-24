// ========== MATHS M3 — SUBNETTING & MASQUES RÉSEAU ==========
// CIDR, adresse réseau, broadcast, nombre d'hôtes, calculs IP

registerQuiz('maths-m3', 'knowledge', [
    {
        question: "Combien d'adresses hôtes utilisables dans un réseau /24 ?",
        options: ["254", "255", "256", "252"],
        answer: 0,
        explanation: "/24 = 8 bits d'hôtes → 2⁸ = 256 adresses total. On retire l'adresse réseau (x.x.x.0) et le broadcast (x.x.x.255). Reste 256 - 2 = 254 hôtes utilisables.",
        context: ""
    },
    {
        question: "Quel est le masque sous-réseau correspondant au CIDR /24 ?",
        options: ["255.255.0.0", "255.255.255.0", "255.0.0.0", "255.255.255.128"],
        answer: 1,
        explanation: "/24 = 24 bits à 1 suivi de 8 bits à 0. En binaire : 11111111.11111111.11111111.00000000 = 255.255.255.0. C'est le masque le plus courant en entreprise.",
        context: ""
    },
    {
        question: "Calculer l'adresse réseau de 192.168.1.50/24",
        options: ["192.168.1.0", "192.168.1.50", "192.168.1.255", "192.168.0.0"],
        answer: 0,
        explanation: "Adresse réseau = IP AND Masque. 192.168.1.50 AND 255.255.255.0 : les 3 premiers octets restent (192.168.1), le dernier octet 50 AND 0 = 0. Résultat : 192.168.1.0",
        context: ""
    },
    {
        question: "Quelle est l'adresse de broadcast du réseau 192.168.1.0/24 ?",
        options: ["192.168.1.0", "192.168.1.1", "192.168.1.254", "192.168.1.255"],
        answer: 3,
        explanation: "Broadcast = dernière adresse du réseau. Pour /24 (8 bits d'hôtes), le dernier octet est 11111111 = 255. Broadcast : 192.168.1.255. C'est l'adresse de diffusion vers tous les hôtes du réseau.",
        context: ""
    },
    {
        question: "Les hôtes 10.0.0.5 et 10.0.0.200 sont-ils dans le même réseau /24 ?",
        options: [
            "Oui, ils partagent le même réseau 10.0.0.0/24",
            "Non, ils sont dans des sous-réseaux différents",
            "Impossible à déterminer sans plus d'informations",
            "Oui mais seulement si le routeur est configuré"
        ],
        answer: 0,
        explanation: "10.0.0.5 AND 255.255.255.0 = 10.0.0.0. 10.0.0.200 AND 255.255.255.0 = 10.0.0.0. Même adresse réseau → même réseau. Ils peuvent communiquer sans routeur.",
        context: ""
    },
    {
        question: "Combien d'hôtes utilisables dans un /30 ?",
        options: ["2", "4", "6", "8"],
        answer: 0,
        explanation: "/30 = 2 bits d'hôtes. 2² = 4 adresses total - 2 (réseau + broadcast) = 2 hôtes utilisables. Le /30 est classiquement utilisé pour les liens point-à-point entre routeurs.",
        context: ""
    },
    {
        question: "Quel est le masque correspondant à /16 ?",
        options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.128"],
        answer: 1,
        explanation: "/16 = 16 bits à 1. En octets : 11111111.11111111.00000000.00000000 = 255.255.0.0. Plage privée 172.16.0.0/12 utilise des masques proches. /16 donne 65534 hôtes.",
        context: ""
    },
    {
        question: "Combien d'hôtes utilisables dans un /16 ?",
        options: ["65 534", "65 536", "65 532", "32 768"],
        answer: 0,
        explanation: "/16 = 16 bits d'hôtes. 2¹⁶ = 65 536 adresses - 2 = 65 534 hôtes. Les 3 plages privées RFC 1918 : 10.0.0.0/8 (~16M), 172.16.0.0/12 (~1M), 192.168.0.0/16 (~65K).",
        context: ""
    },
    {
        question: "Une entreprise a besoin de 50 hôtes par sous-réseau. Quel préfixe CIDR choisir ?",
        options: ["/24", "/26", "/27", "/28"],
        answer: 1,
        explanation: "/26 = 6 bits d'hôtes → 2⁶ - 2 = 62 hôtes utilisables (≥50). /27 = 5 bits → 2⁵ - 2 = 30 (insuffisant). Il faut trouver la plus petite puissance de 2 qui dépasse 50+2=52, soit 2⁶=64.",
        context: ""
    },
    {
        question: "Quelle est la plage d'adresses privées de classe C ?",
        options: ["10.0.0.0 – 10.255.255.255", "172.16.0.0 – 172.31.255.255", "192.168.0.0 – 192.168.255.255", "169.254.0.0 – 169.254.255.255"],
        answer: 2,
        explanation: "Les 3 plages privées RFC 1918 : classe A : 10.0.0.0/8, classe B : 172.16.0.0/12, classe C : 192.168.0.0/16. Les adresses APIPA (169.254.x.x) sont auto-attribuées quand le DHCP échoue.",
        context: ""
    },
    {
        question: "Quel est le masque en notation décimale de /25 ?",
        options: ["255.255.255.0", "255.255.255.128", "255.255.255.192", "255.255.255.224"],
        answer: 1,
        explanation: "/25 = 25 bits à 1. Le dernier octet : 10000000 = 128. Donc masque = 255.255.255.128. Un /25 divise un /24 en 2 sous-réseaux de 126 hôtes chacun.",
        context: ""
    },
    {
        question: "Le masque 255.255.255.192 correspond à quel préfixe CIDR ?",
        options: ["/24", "/25", "/26", "/27"],
        answer: 2,
        explanation: "192 en binaire = 11000000 = 2 bits à 1. Le masque complet a donc 24+2=26 bits à 1 → /26. 255.255.255.192 = /26, donnant 2⁶-2=62 hôtes par sous-réseau.",
        context: ""
    },
    {
        question: "Quelle est l'adresse réseau de 172.16.45.130/26 ?",
        options: ["172.16.45.0", "172.16.45.128", "172.16.45.64", "172.16.45.192"],
        answer: 1,
        explanation: "/26 → masque = 255.255.255.192. Dernier octet : 130 AND 192 = ? 130=10000010, 192=11000000. AND bit à bit = 10000000 = 128. Adresse réseau : 172.16.45.128/26.",
        context: ""
    },
    {
        question: "Combien de sous-réseaux /27 peut-on créer à partir d'un réseau /24 ?",
        options: ["4", "6", "8", "16"],
        answer: 2,
        explanation: "Un /27 emprunte 3 bits au /24 (27-24=3 bits de sous-réseau). 2³ = 8 sous-réseaux /27. Chaque /27 contient 2⁵-2 = 30 hôtes. 8 sous-réseaux × 30 hôtes = 240 hôtes au total.",
        context: ""
    },
    {
        question: "Qu'est-ce qu'une adresse de loopback IPv4 ?",
        options: ["192.168.0.1", "10.0.0.1", "127.0.0.1", "172.16.0.1"],
        answer: 2,
        explanation: "127.0.0.1 est l'adresse de loopback (localhost). Tout le réseau 127.0.0.0/8 est réservé. Ping 127.0.0.1 teste la pile réseau locale sans envoyer de paquet sur le réseau physique.",
        context: ""
    },
    {
        question: "Quelle est la plage d'hôtes utilisables dans 192.168.10.0/28 ?",
        options: [
            "192.168.10.1 à 192.168.10.14",
            "192.168.10.1 à 192.168.10.15",
            "192.168.10.0 à 192.168.10.15",
            "192.168.10.1 à 192.168.10.30"
        ],
        answer: 0,
        explanation: "/28 = 4 bits d'hôtes → 2⁴=16 adresses. Réseau : .0, broadcast : .15. Hôtes utilisables : .1 à .14 = 14 hôtes. Utile pour les petits segments (DMZ avec peu de serveurs).",
        context: ""
    },
    {
        question: "Que signifie la notation 0.0.0.0/0 ?",
        options: [
            "Adresse réseau par défaut, représente tout l'Internet (route par défaut)",
            "Réseau local uniquement",
            "Adresse invalide",
            "Réseau loopback"
        ],
        answer: 0,
        explanation: "0.0.0.0/0 = route par défaut (default route). Elle correspond à toutes les adresses possibles. Sur un routeur : 'ip route 0.0.0.0 0.0.0.0 [next-hop]' envoie tout le trafic inconnu vers la passerelle.",
        context: ""
    },
    {
        question: "Combien d'adresses IPv4 publiques existe-t-il en théorie ?",
        options: ["Environ 2 milliards", "Environ 4,3 milliards", "Environ 8,6 milliards", "Illimité"],
        answer: 1,
        explanation: "2³² = 4 294 967 296 ≈ 4,3 milliards. En pratique moins sont publiquement routables (plages privées, réservées). C'est pour cette raison qu'IPv6 (2¹²⁸ adresses) a été créé.",
        context: ""
    },
    {
        question: "Quel préfixe correspond au masque 255.0.0.0 ?",
        options: ["/8", "/16", "/24", "/32"],
        answer: 0,
        explanation: "255.0.0.0 = 11111111.00000000.00000000.00000000 = 8 bits à 1 → /8. La plage privée 10.0.0.0/8 utilise ce masque. Un /8 contient 2²⁴-2 ≈ 16,7 millions d'hôtes.",
        context: ""
    },
    {
        question: "Que signifie /32 en CIDR ?",
        options: [
            "Réseau avec 32 hôtes",
            "Adresse d'un hôte unique (host route)",
            "Réseau de classe C",
            "Masque invalide"
        ],
        answer: 1,
        explanation: "/32 = 32 bits à 1 = 255.255.255.255. Aucun bit d'hôte → une seule adresse. Utilisé pour les routes hôtes spécifiques (host routes) dans les tables de routage, ou pour les interfaces loopback des routeurs.",
        context: ""
    }
]);

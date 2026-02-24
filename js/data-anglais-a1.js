// ========== ANGLAIS A1 — VOCABULAIRE IT EN ANGLAIS ==========
// Termes techniques IT, réseau, sécurité, cloud, développement

registerQuiz('anglais-a1', 'knowledge', [
    {
        question: "What does 'bandwidth' mean in networking?",
        options: [
            "La largeur physique d'un câble réseau",
            "La quantité maximale de données pouvant être transmises par unité de temps",
            "La distance maximale d'un signal réseau",
            "Le nombre de ports d'un switch"
        ],
        answer: 1,
        explanation: "'Bandwidth' = débit / bande passante. Mesurée en bits/seconde (bps, Mbps, Gbps). Ne pas confondre avec 'latency' (délai). 'Our bandwidth is 1 Gbps' = notre lien peut transmettre 1 milliard de bits par seconde.",
        context: ""
    },
    {
        question: "Que signifie 'to deploy an application' ?",
        options: [
            "Supprimer une application",
            "Mettre en production / déployer une application",
            "Déboguer une application",
            "Documenter une application"
        ],
        answer: 1,
        explanation: "'Deploy' = déployer, mettre en service. 'We deployed the new version to production' = on a mis la nouvelle version en production. Termes liés : 'rollback' (revenir en arrière), 'CI/CD pipeline', 'staging environment'.",
        context: ""
    },
    {
        question: "What is 'latency' in networking?",
        options: [
            "La vitesse de connexion",
            "Le nombre de paquets perdus",
            "Le délai de transmission d'un paquet de sa source à sa destination",
            "La capacité maximale du réseau"
        ],
        answer: 2,
        explanation: "'Latency' = latence / délai. Mesurée en millisecondes (ms). 'High latency' = connexion lente/laggy (mauvais pour gaming, VoIP). 'Low latency' = réseau réactif. Ne pas confondre avec bandwidth (débit).",
        context: ""
    },
    {
        question: "Que signifie 'to patch a system' ?",
        options: [
            "Éteindre un système",
            "Appliquer des mises à jour de sécurité (correctifs)",
            "Sauvegarder un système",
            "Cloner un système"
        ],
        answer: 1,
        explanation: "'Patch' = correctif / mise à jour de sécurité. 'We need to patch the server' = on doit appliquer les correctifs de sécurité. 'Zero-day exploit' = vulnérabilité sans patch disponible. 'Patch management' = gestion des correctifs.",
        context: ""
    },
    {
        question: "What does 'throughput' mean?",
        options: [
            "La latence d'un réseau",
            "Le débit réel mesuré (vs bandwidth = débit théorique max)",
            "Le nombre d'utilisateurs connectés",
            "La sécurité d'un protocole"
        ],
        answer: 1,
        explanation: "'Throughput' = débit effectif réel, ce qui passe vraiment. Différent de 'bandwidth' (capacité théorique max). Ex : 'bandwidth=100Mbps but throughput=60Mbps' = le lien peut porter 100M mais on n'en utilise que 60 en pratique.",
        context: ""
    },
    {
        question: "Que signifie 'to authenticate' ?",
        options: [
            "Chiffrer des données",
            "Vérifier l'identité d'un utilisateur ou système",
            "Autoriser l'accès à une ressource",
            "Journaliser des événements"
        ],
        answer: 1,
        explanation: "'Authenticate' = authentifier (vérifier QUI tu es). Différent de 'authorize' (vérifier CE QUE tu as le droit de faire). AAA = Authentication, Authorization, Accounting. '2FA authentication' = vérification d'identité en 2 étapes.",
        context: ""
    },
    {
        question: "What is a 'gateway' in networking?",
        options: [
            "Un serveur de sauvegarde",
            "Un équipement réseau permettant à un réseau de communiquer avec un autre réseau",
            "Un protocole de chiffrement",
            "Un type de câble réseau"
        ],
        answer: 1,
        explanation: "'Gateway' = passerelle. Équipement (généralement un routeur) qui connecte deux réseaux différents. 'Default gateway' = passerelle par défaut, l'IP du routeur vers lequel on envoie le trafic hors du réseau local.",
        context: ""
    },
    {
        question: "Que signifie 'deprecated' dans la documentation technique ?",
        options: [
            "Nouvelle fonctionnalité récemment ajoutée",
            "Fonctionnalité obsolète, encore disponible mais qui sera supprimée",
            "Fonctionnalité critique et importante",
            "Fonctionnalité expérimentale"
        ],
        answer: 1,
        explanation: "'Deprecated' = déprécié. Encore fonctionnel mais déconseillé car il sera supprimé dans une future version. 'This API endpoint is deprecated, use /v2/users instead.' Contraire de 'deprecated' : 'recommended', 'stable', 'current'.",
        context: ""
    },
    {
        question: "What does 'payload' mean in networking/security?",
        options: [
            "Le coût d'un abonnement réseau",
            "Les données utiles transportées dans un paquet (ou un malware)",
            "La vitesse de transmission",
            "L'adresse IP source"
        ],
        answer: 1,
        explanation: "'Payload' = charge utile. Les données réelles dans un paquet (par opposition aux headers/metadata). En sécurité : 'malware payload' = la partie malveillante d'un malware. 'The exploit delivered a ransomware payload.'",
        context: ""
    },
    {
        question: "Que signifie 'to encrypt data' ?",
        options: [
            "Supprimer des données",
            "Sauvegarder des données",
            "Rendre des données illisibles sans la clé de déchiffrement",
            "Compresser des données"
        ],
        answer: 2,
        explanation: "'Encrypt' = chiffrer. 'Decrypt' = déchiffrer. 'The data is encrypted in transit (TLS) and at rest (AES-256).' = les données sont chiffrées pendant le transport ET lors du stockage. Fondamental pour la protection RGPD.",
        context: ""
    },
    {
        question: "What is a 'subnet' ?",
        options: [
            "Un type de câble réseau sous-marin",
            "Un sous-réseau logique découpé à partir d'un réseau plus grand",
            "Un protocole de routage",
            "Un serveur de noms de domaine"
        ],
        answer: 1,
        explanation: "'Subnet' = sous-réseau. 'The network 192.168.1.0/24 has been subnetted into four /26 subnets.' Subnetting = processus de division d'un réseau en sous-réseaux plus petits. 'Subnet mask' = masque de sous-réseau.",
        context: ""
    },
    {
        question: "Que signifie 'legacy system' ou 'legacy infrastructure' ?",
        options: [
            "Une infrastructure moderne et récente",
            "Un système hérité/vieillissant, souvent difficile à maintenir ou mettre à jour",
            "Une infrastructure en cloud",
            "Un système de sauvegarde"
        ],
        answer: 1,
        explanation: "'Legacy' = patrimoine/héritage. 'Legacy system' = vieux système informatique encore en production, souvent incompatible avec les nouvelles technologies. 'We still have legacy Windows Server 2003 machines in production.' Problème de sécurité majeur.",
        context: ""
    },
    {
        question: "What does 'overhead' mean in computing?",
        options: [
            "L'espace de stockage disponible",
            "La puissance de traitement inutilisée",
            "La charge/surcharge supplémentaire liée à un protocole ou processus (non-productif)",
            "Le coût financier d'une infrastructure"
        ],
        answer: 2,
        explanation: "'Overhead' = surcharge, coûts additionnels. 'TCP has more overhead than UDP' = TCP consomme plus de ressources (headers, ACK, séquençage) qu'UDP. 'Protocol overhead' = octets ajoutés par les headers de chaque couche réseau.",
        context: ""
    },
    {
        question: "Que signifie 'to rollback a deployment' ?",
        options: [
            "Déployer une nouvelle version",
            "Revenir à la version précédente après un problème",
            "Tester une application en staging",
            "Documenter les changements"
        ],
        answer: 1,
        explanation: "'Rollback' = revenir en arrière. 'The deployment caused errors, we had to rollback to v1.2.3.' = le déploiement a causé des erreurs, on est revenu à la version précédente. Essentiel dans les pipelines CI/CD. Opposé de 'roll forward'.",
        context: ""
    },
    {
        question: "What is a 'daemon' in Linux/Unix systems?",
        options: [
            "Un virus informatique",
            "Un processus en arrière-plan qui s'exécute en permanence",
            "Un type de commande shell",
            "Un fichier de configuration système"
        ],
        answer: 1,
        explanation: "'Daemon' (prononcé 'demon') = processus système en arrière-plan. Exemples : sshd (SSH daemon), httpd (Apache), nginx, systemd. 'The SSH daemon is listening on port 22.' Équivalent Windows : service (ex : Windows Service).",
        context: ""
    },
    {
        question: "Que signifie 'to debug' ?",
        options: [
            "Mettre en production un code",
            "Identifier et corriger les erreurs dans un programme",
            "Optimiser les performances d'un code",
            "Documenter un code"
        ],
        answer: 1,
        explanation: "'Debug' = déboguer, corriger les bugs. 'I've been debugging this script for 2 hours.' Un 'bug' est une erreur. Un 'debugger' est un outil. 'Rubber duck debugging' = expliquer son code à un objet inanimé pour trouver les erreurs.",
        context: ""
    },
    {
        question: "What does 'scope' mean in programming?",
        options: [
            "La taille d'un programme",
            "La portée/visibilité d'une variable (local vs global)",
            "Le temps d'exécution d'une fonction",
            "La mémoire allouée à un programme"
        ],
        answer: 1,
        explanation: "'Scope' = portée. 'Local scope' = variable accessible uniquement dans sa fonction. 'Global scope' = accessible partout. 'This variable is out of scope' = la variable n'est pas accessible ici. Concept fondamental en Python, JS, C, etc.",
        context: ""
    },
    {
        question: "What is an 'endpoint' in REST API?",
        options: [
            "Le point de terminaison physique d'un câble réseau",
            "Une URL spécifique permettant d'accéder à une ressource via une API",
            "La dernière ligne de code d'un programme",
            "Un serveur final dans une architecture"
        ],
        answer: 1,
        explanation: "'Endpoint' = point de terminaison d'une API. 'GET /api/users/42' est un endpoint. 'The API has 15 endpoints.' En sécurité, 'endpoint security' = sécurisation des postes clients (antivirus, EDR).",
        context: ""
    },
    {
        question: "Que signifie 'a handshake' en réseau ?",
        options: [
            "La déconnexion d'une session",
            "L'échange initial de messages pour établir une connexion",
            "Le transfert des données principales",
            "La fermeture propre d'une connexion"
        ],
        answer: 1,
        explanation: "'Handshake' = poignée de main, échange d'initialisation. TCP = 3-way handshake (SYN, SYN-ACK, ACK). TLS = TLS handshake (échange de certificats, négociation de chiffrement). 'The TLS handshake failed' = problème de certificat ou de compatibilité.",
        context: ""
    },
    {
        question: "What does 'backup' mean and what is 'restore'?",
        options: [
            "Backup = sauvegarder les données, Restore = récupérer les données depuis la sauvegarde",
            "Backup = chiffrer, Restore = déchiffrer",
            "Backup = compresser, Restore = décompresser",
            "Backup = supprimer, Restore = recréer"
        ],
        answer: 0,
        explanation: "'Backup' = sauvegarde. 'Restore' = restauration. '3-2-1 backup rule' = 3 copies, sur 2 supports différents, 1 hors site. 'Full backup' vs 'incremental backup' vs 'differential backup'. Test de restauration obligatoire pour valider un backup.",
        context: ""
    }
]);

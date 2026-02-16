// ========== CHAPITRE 2 - Le fonctionnement des marches ==========

// ==================== QUIZ CONNAISSANCES (35 questions) ====================
registerQuiz('ch2', 'knowledge', [
    // --- I - Le concept de "marche" ---
    {
        question: "Qu'est-ce qu'un marche en economie ?",
        options: [
            "Un lieu reel ou virtuel ou se rencontrent l'offre et la demande en vue d'un echange",
            "Un magasin physique ou l'on achete des produits alimentaires",
            "Un contrat entre deux entreprises pour fixer un prix",
            "Un document juridique encadrant les echanges commerciaux"
        ],
        answer: 0,
        explanation: "Le marche est defini comme un lieu reel ou virtuel ou se rencontrent l'offre et la demande en vue d'un echange.",
        context: ""
    },
    {
        question: "Qu'est-ce qui definit le type d'un marche ?",
        options: [
            "Le nombre de consommateurs presents",
            "Le bien ou le service echange",
            "La localisation geographique du marche",
            "Le chiffre d'affaires des entreprises"
        ],
        answer: 1,
        explanation: "Le type du marche est defini en fonction du bien ou du service echange (marche des capitaux, du travail, des biens et services).",
        context: ""
    },
    {
        question: "Quels sont les trois grands types de marches ?",
        options: [
            "Marche des capitaux/financier, marche du travail, marche des biens et services",
            "Marche local, marche national, marche international",
            "Marche de gros, marche de detail, marche en ligne",
            "Marche primaire, marche secondaire, marche tertiaire"
        ],
        answer: 0,
        explanation: "Les trois grands types de marches sont : le marche des capitaux/financier, le marche du travail et le marche des biens et services.",
        context: ""
    },
    {
        question: "Qu'est-ce qui definit la structure d'un marche ?",
        options: [
            "La taille geographique du marche",
            "Le nombre d'offreurs et de demandeurs",
            "Le type de produit vendu",
            "Le montant total des transactions"
        ],
        answer: 1,
        explanation: "La structure de marche est definie en fonction du nombre d'offreurs et de demandeurs presents sur le marche.",
        context: ""
    },
    {
        question: "Qu'est-ce qu'un monopole ?",
        options: [
            "Un marche ou quelques offreurs font face a une multitude de demandeurs",
            "Un marche ou une multitude d'offreurs font face a une multitude de demandeurs",
            "Un marche sur lequel un seul offreur fait face a une multitude de demandeurs",
            "Un marche ou un seul demandeur fait face a une multitude d'offreurs"
        ],
        answer: 2,
        explanation: "Le monopole est un marche sur lequel un seul offreur fait face a une multitude de demandeurs.",
        context: ""
    },
    {
        question: "Quels sont les effets d'un monopole sur le marche ?",
        options: [
            "Innovation forte et prix bas",
            "Retard sur l'innovation et prix eleve (price maker)",
            "Grande diversite de l'offre et guerre des prix",
            "Ententes sur les prix et innovation moderee"
        ],
        answer: 1,
        explanation: "Le monopole entraine un retard sur l'innovation et des prix eleves, car l'offreur unique est en position de price maker.",
        context: ""
    },
    {
        question: "Que signifie la notion de 'price maker' dans un monopole ?",
        options: [
            "L'entreprise fixe ses prix librement car elle est le seul offreur",
            "L'Etat impose le prix aux entreprises",
            "Les consommateurs negocient directement le prix",
            "Le prix est fixe par un organisme independant"
        ],
        answer: 0,
        explanation: "En situation de monopole, l'offreur unique est price maker : il fixe librement ses prix car il n'a pas de concurrent.",
        context: ""
    },
    {
        question: "Qu'est-ce qu'un oligopole ?",
        options: [
            "Un marche avec un seul offreur et un seul demandeur",
            "Un marche sur lequel quelques offreurs font face a une multitude de demandeurs",
            "Un marche avec une multitude d'offreurs et quelques demandeurs",
            "Un marche ou tous les offreurs vendent le meme produit au meme prix"
        ],
        answer: 1,
        explanation: "L'oligopole est un marche sur lequel quelques offreurs font face a une multitude de demandeurs.",
        context: ""
    },
    {
        question: "Quel exemple illustre un marche oligopolistique ?",
        options: [
            "Les plateformes e-commerce",
            "Le marche des fruits et legumes au detail",
            "Danone, Nestle, Castel qui representent 90% du marche",
            "Les artisans boulangers d'une ville"
        ],
        answer: 2,
        explanation: "Danone, Nestle et Castel, qui representent 90% du marche, sont un exemple typique d'oligopole.",
        context: ""
    },
    {
        question: "Quels sont les effets d'un oligopole ?",
        options: [
            "Retard sur l'innovation et prix tres eleve",
            "Commencement de l'innovation et amorce d'une baisse des prix, mais risque d'ententes sur les prix",
            "Innovation forte et guerre des prix",
            "Absence totale d'innovation et prix fixes par l'Etat"
        ],
        answer: 1,
        explanation: "L'oligopole entraine un commencement de l'innovation et une amorce de baisse des prix, mais avec un risque d'ententes sur les prix entre les quelques offreurs.",
        context: ""
    },
    {
        question: "Qu'est-ce que la concurrence pure et parfaite (CPP) ?",
        options: [
            "Un marche avec un seul offreur dominant",
            "Un marche ou quelques offreurs se partagent les parts de marche",
            "Un marche sur lequel une multitude d'offreurs font face a une multitude de demandeurs",
            "Un marche controle par l'Etat"
        ],
        answer: 2,
        explanation: "La CPP est un marche sur lequel une multitude d'offreurs font face a une multitude de demandeurs.",
        context: ""
    },
    {
        question: "Quel est un exemple de marche se rapprochant de la CPP ?",
        options: [
            "Le marche de l'electricite en France",
            "Les plateformes e-commerce",
            "Le marche de la telephonie mobile",
            "Le marche de l'aeronautique"
        ],
        answer: 1,
        explanation: "Les plateformes e-commerce sont un exemple de marche se rapprochant de la concurrence pure et parfaite.",
        context: ""
    },
    {
        question: "Quels sont les effets de la CPP sur le marche ?",
        options: [
            "Retard sur l'innovation et prix eleve",
            "Innovation moderee et prix stables",
            "Fort developpement de l'innovation, grande diversite de l'offre et forte baisse des prix (guerre des prix)",
            "Ententes entre offreurs et prix uniformes"
        ],
        answer: 2,
        explanation: "La CPP entraine un fort developpement de l'innovation, une grande diversite de l'offre et une forte baisse des prix (guerre des prix).",
        context: ""
    },
    {
        question: "Que signifie l'atomicite du marche en CPP ?",
        options: [
            "Les produits sont divises en petites unites",
            "Il y a un grand nombre d'offreurs et de demandeurs, aucun n'ayant de pouvoir sur le marche",
            "Le marche est divise en plusieurs sous-marches",
            "Les prix sont fixes atome par atome"
        ],
        answer: 1,
        explanation: "L'atomicite du marche signifie qu'il existe un tres grand nombre d'offreurs et de demandeurs, de sorte qu'aucun agent ne peut influencer le marche a lui seul.",
        context: ""
    },
    {
        question: "Que signifie l'homogeneite du produit en CPP ?",
        options: [
            "Tous les produits ont la meme couleur",
            "Seul le prix differencie les producteurs, les produits etant identiques",
            "Les produits sont fabriques au meme endroit",
            "Tous les producteurs ont les memes couts de production"
        ],
        answer: 1,
        explanation: "L'homogeneite du produit signifie que seul le prix differencie les producteurs, les produits proposes etant consideres comme identiques.",
        context: ""
    },
    {
        question: "Que signifie la libre entree et sortie du marche en CPP ?",
        options: [
            "Les consommateurs peuvent entrer et sortir des magasins librement",
            "L'Etat autorise toutes les entreprises a commercer",
            "Toute entreprise peut entrer sur le marche ou en sortir sans obstacle",
            "Les frontieres sont ouvertes pour l'import-export"
        ],
        answer: 2,
        explanation: "La libre entree et sortie du marche signifie que toute entreprise peut librement entrer sur le marche ou en sortir, sans obstacle ni barriere.",
        context: ""
    },
    {
        question: "Que signifie la transparence de l'information en CPP ?",
        options: [
            "Les entreprises publient leurs comptes annuels",
            "Tous les agents disposent de la meme information sur le marche",
            "Les consommateurs ont acces a Internet",
            "Les prix sont affiches en vitrine"
        ],
        answer: 1,
        explanation: "La transparence de l'information signifie que tous les agents economiques disposent de la meme information complete sur le marche (prix, qualite, quantites).",
        context: ""
    },
    {
        question: "Que signifie la libre circulation des facteurs de production en CPP ?",
        options: [
            "Les produits circulent librement entre les pays",
            "Les facteurs de production (travail, capital) peuvent se deplacer librement d'un marche a un autre",
            "Les usines peuvent etre deplacees geographiquement",
            "Les matieres premieres sont en acces libre"
        ],
        answer: 1,
        explanation: "La libre circulation des facteurs de production signifie que le travail et le capital peuvent se deplacer librement d'un marche ou d'un secteur a un autre.",
        context: ""
    },
    // --- II - Les mecanismes de fixation des prix ---
    {
        question: "Quelle est la portee (le role) du prix sur un marche ?",
        options: [
            "Mesurer la qualite d'un produit",
            "Determiner la disponibilite ou la rarete du produit",
            "Fixer la marge beneficiaire de l'entreprise",
            "Evaluer la satisfaction du consommateur"
        ],
        answer: 1,
        explanation: "La portee du prix est de determiner la disponibilite ou la rarete du produit sur le marche.",
        context: ""
    },
    {
        question: "Sur quel fondement les prix sont-ils fixes ?",
        options: [
            "En fonction des couts de production uniquement",
            "En fonction de l'offre disponible et de la demande exprimee (loi de l'offre et de la demande)",
            "En fonction de la volonte de l'Etat",
            "En fonction du pouvoir d'achat des consommateurs"
        ],
        answer: 1,
        explanation: "Les prix sont fixes en fonction de l'offre disponible et de la demande exprimee, selon la loi de l'offre et de la demande.",
        context: ""
    },
    {
        question: "Que se passe-t-il lorsque l'offre est superieure a la demande (O > D) ?",
        options: [
            "Le prix augmente",
            "Le prix baisse",
            "Le prix reste stable",
            "Le marche se ferme"
        ],
        answer: 1,
        explanation: "Lorsque l'offre est superieure a la demande (O > D), le prix baisse car le produit est disponible en abondance.",
        context: ""
    },
    {
        question: "Que se passe-t-il lorsque l'offre est inferieure a la demande (O < D) ?",
        options: [
            "Le prix baisse",
            "Le prix reste stable",
            "Le prix augmente",
            "L'Etat intervient pour bloquer les prix"
        ],
        answer: 2,
        explanation: "Lorsque l'offre est inferieure a la demande (O < D), le prix augmente car le produit est rare.",
        context: ""
    },
    {
        question: "Quand obtient-on le prix d'equilibre ?",
        options: [
            "Lorsque l'offre est superieure a la demande",
            "Lorsque l'offre est inferieure a la demande",
            "Lorsque l'offre est egale a la demande (O = D)",
            "Lorsque l'Etat fixe le prix"
        ],
        answer: 2,
        explanation: "Le prix d'equilibre est atteint lorsque l'offre est egale a la demande (O = D), sur un marche de CPP.",
        context: ""
    },
    {
        question: "Qu'est-ce que l'autoregulation du marche ?",
        options: [
            "L'Etat controle les prix pour stabiliser le marche",
            "Le prix pousse les agents a changer de comportement, ce qui impacte en retour le prix, jusqu'a obtenir le prix d'equilibre",
            "Les entreprises fixent elles-memes les regles du marche",
            "Les consommateurs s'organisent pour negocier les prix"
        ],
        answer: 1,
        explanation: "L'autoregulation signifie que le prix pousse les agents a changer de comportement, ce qui impacte en retour le prix, entrainant sa variation jusqu'a obtenir le prix d'equilibre.",
        context: ""
    },
    {
        question: "Quelle est la condition necessaire pour obtenir le prix d'equilibre ?",
        options: [
            "Etre sur un marche de monopole",
            "Etre sur un marche d'oligopole",
            "Etre sur un marche de concurrence pure et parfaite (CPP)",
            "Etre sur un marche reglemente par l'Etat"
        ],
        answer: 2,
        explanation: "La condition d'obtention du prix d'equilibre est d'etre sur un marche de concurrence pure et parfaite (CPP).",
        context: ""
    },
    // --- III - La remise en cause de l'autoregulation ---
    {
        question: "Qu'est-ce que l'asymetrie d'information ?",
        options: [
            "Une situation ou tous les agents ont la meme information",
            "Une situation dans laquelle les agents ne detiennent pas les memes informations, ce qui biaise leurs choix",
            "Une situation ou l'information est trop abondante",
            "Un manque total d'information sur le marche"
        ],
        answer: 1,
        explanation: "L'asymetrie d'information est une situation dans laquelle les agents ne detiennent pas les memes informations, ce qui biaise leurs choix.",
        context: ""
    },
    {
        question: "Quels sont les effets de l'asymetrie d'information ?",
        options: [
            "Amelioration de la concurrence et baisse des prix",
            "Influence sur le jeu de la concurrence et/ou prix au detriment d'un agent",
            "Augmentation de la transparence du marche",
            "Renforcement de la confiance entre agents"
        ],
        answer: 1,
        explanation: "L'asymetrie d'information influence le jeu de la concurrence et/ou le prix au detriment d'un agent qui ne dispose pas de la bonne information.",
        context: ""
    },
    {
        question: "Comment lutte-t-on contre l'asymetrie d'information ?",
        options: [
            "Par la suppression des marches concurrentiels",
            "Par le developpement de la legislation pour imposer des modalites d'information",
            "Par l'interdiction de la publicite",
            "Par la creation de monopoles d'Etat"
        ],
        answer: 1,
        explanation: "On lutte contre l'asymetrie d'information par le developpement de la legislation pour imposer des modalites d'information aux agents.",
        context: ""
    },
    {
        question: "Qu'est-ce qu'une barriere a l'entree et a la sortie du marche ?",
        options: [
            "Une reglementation fiscale standard",
            "Un obstacle rendant difficile l'entree et la sortie d'une entreprise sur un marche afin de limiter la concurrence",
            "Un droit de douane sur les importations",
            "Une taxe sur les benefices des entreprises"
        ],
        answer: 1,
        explanation: "Les barrieres a l'entree et a la sortie sont des obstacles rendant difficile l'entree et la sortie d'une entreprise sur un marche afin de limiter la concurrence.",
        context: ""
    },
    {
        question: "Quelle est la difference entre les barrieres naturelles et artificielles ?",
        options: [
            "Les barrieres naturelles sont liees aux caracteristiques du marche et de la legislation, les artificielles aux strategies des entreprises",
            "Les barrieres naturelles sont geographiques, les artificielles sont technologiques",
            "Les barrieres naturelles sont temporaires, les artificielles sont permanentes",
            "Les barrieres naturelles sont legales, les artificielles sont illegales"
        ],
        answer: 0,
        explanation: "Les barrieres naturelles sont liees aux caracteristiques du marche et de la legislation, tandis que les barrieres artificielles sont liees aux strategies developpees par les entreprises.",
        context: ""
    },
    {
        question: "Qu'est-ce qu'une externalite ?",
        options: [
            "Un echange commercial entre deux entreprises",
            "Un effet de l'action d'un agent sur la situation d'un autre agent sans que ce dernier ne paie ou ne recoive une compensation",
            "Une taxe imposee par l'Etat sur les entreprises polluantes",
            "Un contrat entre un fournisseur et un client"
        ],
        answer: 1,
        explanation: "Une externalite est l'effet de l'action d'un agent sur la situation d'un autre agent sans que ce dernier ne paie ou ne recoive une compensation.",
        context: ""
    },
    {
        question: "Quelle est la difference entre une externalite positive et une externalite negative ?",
        options: [
            "Positive = benefice pour l'entreprise, negative = perte pour l'entreprise",
            "Positive = apportant un gain a l'agent la subissant, negative = apportant une perte ou un cout supplementaire",
            "Positive = legale, negative = illegale",
            "Positive = volontaire, negative = involontaire"
        ],
        answer: 1,
        explanation: "Une externalite positive apporte un gain a l'agent qui la subit, tandis qu'une externalite negative lui apporte une perte ou un cout supplementaire.",
        context: ""
    },
    {
        question: "Pourquoi les externalites echappent-elles aux mecanismes du marche ?",
        options: [
            "Parce qu'elles sont trop complexes a mesurer",
            "Parce qu'elles ne font pas l'objet d'echange sur le marche",
            "Parce que l'Etat les interdit",
            "Parce qu'elles ne concernent que les grandes entreprises"
        ],
        answer: 1,
        explanation: "Les externalites echappent aux mecanismes du marche car elles ne font pas l'objet d'echange ; les agents prennent en compte leurs interets prives et excluent les couts sociaux.",
        context: ""
    },
    {
        question: "Comment l'Etat regule-t-il les externalites negatives ?",
        options: [
            "Par des subventions et des deductions fiscales",
            "Par des taxes et de la reglementation",
            "Par la creation de monopoles publics",
            "Par l'interdiction totale des activites concernees"
        ],
        answer: 1,
        explanation: "L'Etat regule les externalites negatives par des taxes et de la reglementation pour limiter les effets negatifs sur les tiers.",
        context: ""
    },
    {
        question: "Comment l'Etat encourage-t-il les externalites positives ?",
        options: [
            "Par des taxes supplementaires",
            "Par des subventions et des deductions fiscales",
            "Par des amendes aux entreprises non vertueuses",
            "Par la nationalisation des entreprises"
        ],
        answer: 1,
        explanation: "L'Etat encourage les externalites positives par des subventions et des deductions fiscales afin de favoriser les actions benefiques pour la collectivite.",
        context: ""
    }
]);

// ==================== QUIZ CAS PRATIQUES / BTS (25 questions) ====================
registerQuiz('ch2', 'practical', [
    {
        question: "Quelle est la structure de ce marche ?",
        options: [
            "Un monopole",
            "Un oligopole",
            "Une concurrence pure et parfaite",
            "Un monopsone"
        ],
        answer: 1,
        explanation: "Trois entreprises dominant 85% du marche correspond a un oligopole : quelques offreurs font face a une multitude de demandeurs.",
        context: "L'entreprise BioNat fabrique des yaourts biologiques. Sur le marche francais des produits laitiers, trois grands groupes (Danone, Lactalis et Nestle) representent 85% des ventes. BioNat souhaite analyser la structure de ce marche."
    },
    {
        question: "Quel effet sur les prix cette structure de marche peut-elle entrainer ?",
        options: [
            "Une forte baisse des prix grace a la concurrence",
            "Une hausse des prix car il y a un seul offreur",
            "Un risque d'ententes sur les prix entre les quelques offreurs dominants",
            "Un prix d'equilibre fixe automatiquement par le marche"
        ],
        answer: 2,
        explanation: "En oligopole, il existe un risque d'ententes sur les prix entre les quelques offreurs dominants, meme si une amorce de baisse des prix est possible.",
        context: "L'Autorite de la concurrence enquete sur le marche de la telephonie mobile en France, domine par trois operateurs principaux (Orange, SFR, Bouygues Telecom) avant l'arrivee de Free."
    },
    {
        question: "Comment le prix du masque FFP2 va-t-il evoluer selon la loi de l'offre et de la demande ?",
        options: [
            "Le prix va baisser car l'offre est abondante",
            "Le prix va augmenter car l'offre est inferieure a la demande (O < D), signe de rarete",
            "Le prix va rester stable grace a l'autoregulation",
            "Le prix va etre fixe par l'Etat automatiquement"
        ],
        answer: 1,
        explanation: "Lorsque la demande est superieure a l'offre (O < D), le prix augmente en raison de la rarete du produit.",
        context: "En periode de crise sanitaire, la demande de masques FFP2 explose alors que les stocks sont limites et la production ne suit pas. Le pharmacien M. Durand constate que ses fournisseurs augmentent leurs tarifs."
    },
    {
        question: "Quel phenomene du marche est ici illustre ?",
        options: [
            "L'asymetrie d'information",
            "Une barriere a l'entree du marche",
            "L'autoregulation du marche par le prix",
            "Une externalite negative"
        ],
        answer: 2,
        explanation: "C'est l'autoregulation : le prix eleve pousse les agents a changer de comportement (les producteurs augmentent l'offre, les consommateurs reduisent la demande), ce qui ramene le prix vers l'equilibre.",
        context: "Suite a une secheresse, le prix des tomates a augmente de 40% sur les marches. Face a cette hausse, des producteurs sous serre ont augmente leur production tandis que certains consommateurs se sont tournes vers d'autres legumes. Progressivement, le prix a commence a redescendre."
    },
    {
        question: "De quel type de defaillance de marche s'agit-il ?",
        options: [
            "Une externalite positive",
            "Une barriere artificielle a l'entree",
            "L'asymetrie d'information",
            "Un monopole naturel"
        ],
        answer: 2,
        explanation: "Le vendeur detient une information que l'acheteur n'a pas (les vices caches du vehicule). C'est une asymetrie d'information qui biaise le choix de l'acheteur.",
        context: "Mme Martin achete une voiture d'occasion a un particulier. Apres l'achat, elle decouvre que le vehicule a subi un grave accident et que le compteur kilometrique a ete trafique. Le vendeur n'avait mentionne aucun de ces elements."
    },
    {
        question: "Quel type de barriere a l'entree est illustre ici ?",
        options: [
            "Une barriere artificielle liee a la strategie des entreprises",
            "Une barriere naturelle liee aux caracteristiques du marche et de la legislation",
            "Une asymetrie d'information",
            "Une externalite negative"
        ],
        answer: 1,
        explanation: "L'obligation d'obtenir un agrement (licence) est une barriere naturelle liee a la legislation et aux caracteristiques du marche.",
        context: "Lucas souhaite ouvrir une pharmacie. Il decouvre qu'il doit obligatoirement detenir un diplome de docteur en pharmacie et obtenir une licence d'exploitation delivree par l'Agence regionale de sante. Le nombre de pharmacies est limite par quota dans chaque zone geographique."
    },
    {
        question: "Quel type de barriere a l'entree les entreprises en place utilisent-elles ?",
        options: [
            "Des barrieres naturelles liees a la legislation",
            "Des barrieres artificielles liees aux strategies developpees par les entreprises",
            "Des externalites positives",
            "De l'asymetrie d'information"
        ],
        answer: 1,
        explanation: "Les pratiques de prix predateurs et les contrats d'exclusivite sont des barrieres artificielles, c'est-a-dire des strategies developpees par les entreprises pour limiter la concurrence.",
        context: "L'entreprise TechSmart, un nouvel acteur sur le marche des smartphones, ne parvient pas a s'implanter. Les leaders du marche pratiquent des prix tres bas temporairement (prix predateurs) et ont signe des contrats d'exclusivite avec les principaux distributeurs."
    },
    {
        question: "De quel type d'externalite s'agit-il pour les riverains ?",
        options: [
            "Une externalite positive",
            "Une externalite negative",
            "Une barriere naturelle",
            "Une asymetrie d'information"
        ],
        answer: 1,
        explanation: "La pollution et les nuisances sonores subies par les riverains constituent une externalite negative : un cout supplementaire subi par des tiers sans compensation.",
        context: "L'usine ChimPro produit des engrais chimiques dans une zone industrielle pres d'un village. Les riverains se plaignent de la pollution de l'air et de la riviere voisine, ainsi que des nuisances sonores. Aucune indemnisation n'est versee aux habitants."
    },
    {
        question: "Quel outil de regulation l'Etat utilise-t-il ici et pour quel type d'externalite ?",
        options: [
            "Une subvention pour encourager une externalite positive",
            "Une taxe pour reguler une externalite negative",
            "Une deduction fiscale pour une externalite positive",
            "Une reglementation pour supprimer l'asymetrie d'information"
        ],
        answer: 1,
        explanation: "La taxe carbone est un outil de regulation des externalites negatives (pollution). L'Etat utilise la taxe pour inciter les entreprises a reduire leurs emissions polluantes.",
        context: "Le gouvernement decide d'instaurer une taxe carbone sur les emissions de CO2 des entreprises industrielles. L'entreprise MetalForge, specialisee dans la siderurgie, voit ses couts de production augmenter de 5% suite a cette mesure."
    },
    {
        question: "De quel type d'externalite beneficie le quartier et comment l'Etat peut-il reagir ?",
        options: [
            "Externalite negative - l'Etat doit taxer l'entreprise",
            "Externalite positive - l'Etat peut accorder des subventions ou deductions fiscales",
            "Asymetrie d'information - l'Etat doit legiferer",
            "Barriere a l'entree - l'Etat doit dereguler"
        ],
        answer: 1,
        explanation: "La valorisation du quartier est une externalite positive : les habitants beneficient d'un gain sans compensation. L'Etat peut encourager ces actions par des subventions ou deductions fiscales.",
        context: "Une entreprise de renovation urbaine rehabilite un ancien quartier industriel en espace vert avec des commerces. Les habitants des immeubles voisins constatent que la valeur de leurs biens immobiliers a augmente de 15% sans aucune action de leur part."
    },
    {
        question: "Cette structure de marche repond-elle aux criteres de la CPP ? Justifiez.",
        options: [
            "Oui, car il y a beaucoup de vendeurs et d'acheteurs",
            "Non, car les produits ne sont pas homogenes (chaque artisan a son style) et l'information n'est pas parfaitement transparente",
            "Oui, car il y a libre entree et sortie du marche",
            "Non, car il s'agit d'un monopole"
        ],
        answer: 1,
        explanation: "Meme avec de nombreux acteurs (atomicite), la CPP n'est pas respectee car les produits ne sont pas homogenes (chaque artisan a un style unique) et l'information n'est pas parfaitement transparente.",
        context: "Sur le marche local de la poterie artisanale, on trouve une cinquantaine de potiers independants et des milliers de clients. Chaque artisan a son propre style et ses techniques. Les clients ne connaissent pas toujours les prix pratiques par tous les potiers."
    },
    {
        question: "Quelle structure de marche est illustree ici ?",
        options: [
            "Un oligopole",
            "Un monopole",
            "Une concurrence pure et parfaite",
            "Un marche reglemente"
        ],
        answer: 1,
        explanation: "SNCF Reseau, seul gestionnaire du reseau ferroviaire, est en situation de monopole : un seul offreur fait face a une multitude de demandeurs.",
        context: "En France, le reseau ferroviaire est gere par SNCF Reseau, seule entreprise habilitee a entretenir et developper les voies ferrees. Toutes les compagnies ferroviaires doivent utiliser son infrastructure pour faire circuler leurs trains."
    },
    {
        question: "Quels effets ce monopole a-t-il probablement sur l'innovation et les prix ?",
        options: [
            "Innovation forte et prix bas",
            "Innovation moderee et prix competitifs",
            "Retard sur l'innovation et prix eleve, car l'operateur est price maker",
            "Grande diversite de l'offre et guerre des prix"
        ],
        answer: 2,
        explanation: "En monopole, l'absence de concurrence entraine un retard sur l'innovation et des prix eleves, car l'offreur unique est en position de price maker.",
        context: "Dans un pays insulaire, une seule entreprise, AquaPure, detient le droit exclusif de distribution d'eau potable. Les habitants se plaignent de tarifs eleves et d'un reseau vieillissant qui n'est pas modernise."
    },
    {
        question: "Comment la loi de l'offre et de la demande explique-t-elle l'evolution du prix ?",
        options: [
            "Le prix augmente car la demande est superieure a l'offre (O < D)",
            "Le prix baisse car l'offre est superieure a la demande (O > D)",
            "Le prix reste stable car l'offre et la demande sont equilibrees",
            "Le prix est fixe par l'Etat independamment de l'offre et de la demande"
        ],
        answer: 1,
        explanation: "Lorsque l'offre est superieure a la demande (O > D), le prix baisse car le produit est disponible en abondance sur le marche.",
        context: "La recolte de pommes en Normandie a ete exceptionnelle cette annee, avec une production deux fois superieure a la normale. Les producteurs peinent a ecouler leurs stocks et les prix au kilo ont chute de 30% en un mois."
    },
    {
        question: "Quelle mesure legislative permet de lutter contre cette asymetrie d'information ?",
        options: [
            "L'interdiction totale des ventes en ligne",
            "L'obligation d'information precontractuelle et le droit de retractation imposes par la legislation",
            "La creation d'un monopole d'Etat sur le e-commerce",
            "La taxation des plateformes en ligne"
        ],
        answer: 1,
        explanation: "Pour lutter contre l'asymetrie d'information, la legislation impose des modalites d'information, comme l'obligation d'information precontractuelle et le droit de retractation.",
        context: "Sophie achete un pull sur un site e-commerce. La photo montrait un tissu de qualite, mais a reception, le pull est d'une matiere tres differente et de moindre qualite. Sophie n'avait pas acces a toutes les informations sur le produit avant l'achat."
    },
    {
        question: "Pourquoi ce marche ne peut-il pas atteindre le prix d'equilibre par autoregulation ?",
        options: [
            "Parce que la demande est trop forte",
            "Parce que l'entente entre les trois operateurs empeche le fonctionnement de la CPP, condition necessaire au prix d'equilibre",
            "Parce que l'Etat fixe les prix",
            "Parce que les consommateurs refusent de payer"
        ],
        answer: 1,
        explanation: "Le prix d'equilibre ne peut etre obtenu que sur un marche de CPP. L'entente entre les operateurs fausse la concurrence et empeche l'autoregulation.",
        context: "Sur le marche des carburants dans une ville, trois stations-service se partagent 95% des ventes. Les consommateurs remarquent que les prix sont etrangement similaires dans les trois stations et n'evoluent pas a la baisse malgre une chute du prix du petrole brut."
    },
    {
        question: "Quelles externalites (positives et/ou negatives) peut-on identifier dans cette situation ?",
        options: [
            "Uniquement des externalites negatives (bruit des avions)",
            "Uniquement des externalites positives (emplois crees)",
            "Externalite positive (activite economique et emplois pour les commerces locaux) et externalite negative (nuisances sonores pour les riverains)",
            "Aucune externalite, tout fait l'objet d'un echange"
        ],
        answer: 2,
        explanation: "On identifie une externalite positive (gain economique pour les commerces locaux sans compensation) et une externalite negative (nuisances sonores pour les riverains sans compensation).",
        context: "L'aeroport regional de Beauville accueille de plus en plus de vols low-cost. Les hotels et restaurants proches de l'aeroport voient leur chiffre d'affaires augmenter. En revanche, les habitants des quartiers residentiels proches subissent des nuisances sonores croissantes."
    },
    {
        question: "Que devrait faire l'Etat pour reguler cette externalite negative ?",
        options: [
            "Accorder des subventions a l'entreprise polluante",
            "Imposer une taxe ou une reglementation pour que l'entreprise assume le cout social de sa pollution",
            "Laisser le marche s'autoreguler",
            "Accorder une deduction fiscale aux habitants"
        ],
        answer: 1,
        explanation: "Face a une externalite negative, l'Etat intervient par la taxe ou la reglementation pour que l'entreprise prenne en compte les couts sociaux de son activite.",
        context: "Une usine de papeterie rejette des eaux usees dans une riviere, affectant les pecheurs et les agriculteurs en aval. Ces derniers subissent des pertes economiques mais ne recoivent aucune compensation de la part de l'usine."
    },
    {
        question: "Quel mecanisme de marche est illustre par la hausse puis la stabilisation des prix ?",
        options: [
            "Un monopole temporaire",
            "Une barriere a l'entree du marche",
            "L'autoregulation du marche : le prix varie jusqu'a obtenir le prix d'equilibre",
            "Une externalite positive"
        ],
        answer: 2,
        explanation: "C'est l'autoregulation : la rarete initiale fait monter les prix, ce qui encourage de nouveaux producteurs a entrer sur le marche, augmentant l'offre jusqu'a atteindre un prix d'equilibre.",
        context: "Lors du lancement d'une nouvelle console de jeux video, la demande depasse largement l'offre et les prix flambent sur le marche de la revente. Apres quelques mois, la production s'intensifie, l'offre augmente et les prix se stabilisent."
    },
    {
        question: "A quel type de marche cette plateforme se rapproche-t-elle ?",
        options: [
            "Un monopole",
            "Un oligopole",
            "Une concurrence pure et parfaite (CPP)",
            "Un marche reglemente"
        ],
        answer: 2,
        explanation: "Ce marche se rapproche de la CPP : multitude d'offreurs et de demandeurs, produits comparables, information accessible, et facilite d'entree et de sortie du marche.",
        context: "Sur la plateforme e-commerce ArtisanMarket, des milliers de vendeurs proposent des bijoux artisanaux a des millions d'acheteurs. Les prix et les avis sont visibles par tous, et n'importe quel artisan peut s'inscrire ou se desinscrire librement."
    },
    {
        question: "Quelle consequence cette situation a-t-elle sur les prix et l'innovation ?",
        options: [
            "Prix eleve et retard sur l'innovation (monopole)",
            "Risque d'ententes sur les prix (oligopole)",
            "Fort developpement de l'innovation, grande diversite de l'offre et forte baisse des prix (guerre des prix)",
            "Aucun effet particulier"
        ],
        answer: 2,
        explanation: "Sur un marche proche de la CPP, on observe un fort developpement de l'innovation, une grande diversite de l'offre et une forte baisse des prix (guerre des prix).",
        context: "Sur le marche du e-commerce de vetements, des centaines de marques se concurrencent en ligne. Les comparateurs de prix sont accessibles a tous, les nouvelles marques apparaissent regulierement et les promotions sont constantes."
    },
    {
        question: "Pourquoi les couts sociaux de la pollution ne sont-ils pas pris en compte par le marche ?",
        options: [
            "Parce que l'Etat les interdit",
            "Parce que les externalites ne font pas l'objet d'echange sur le marche ; les agents prennent en compte leurs interets prives et excluent les couts sociaux",
            "Parce que la pollution n'a pas de cout reel",
            "Parce que les consommateurs ne s'en soucient pas"
        ],
        answer: 1,
        explanation: "Les externalites echappent aux mecanismes du marche car elles ne font pas l'objet d'echange. Les agents prennent en compte leurs interets prives et excluent les couts sociaux.",
        context: "Une entreprise de transport routier maximise ses profits en utilisant de vieux camions diesel, tres polluants. Le cout de la pollution (sante publique, environnement) n'est pas integre dans le prix du transport."
    },
    {
        question: "Quelle caracteristique de la CPP est ici remise en cause ?",
        options: [
            "L'atomicite du marche",
            "L'homogeneite du produit",
            "La transparence de l'information",
            "La libre circulation des facteurs de production"
        ],
        answer: 2,
        explanation: "La transparence de l'information est remise en cause : les algorithmes creent une asymetrie d'information en ne montrant pas les memes prix a tous les consommateurs.",
        context: "Un site de vente en ligne utilise un algorithme qui affiche des prix differents en fonction du profil de l'utilisateur : les clients reguliers voient des prix plus eleves que les nouveaux visiteurs. Deux consommateurs achetant le meme produit au meme moment paient des montants differents."
    },
    {
        question: "Pourquoi les petits agriculteurs ne peuvent-ils pas rivaliser avec cette situation ?",
        options: [
            "A cause de l'asymetrie d'information",
            "A cause d'une externalite negative",
            "A cause de barrieres a l'entree naturelles (investissements massifs) et artificielles (contrats exclusifs) qui limitent la concurrence",
            "A cause de l'autoregulation du marche"
        ],
        answer: 2,
        explanation: "Les petits agriculteurs font face a des barrieres a l'entree : barrieres naturelles (investissements massifs necessaires) et barrieres artificielles (contrats exclusifs entre gros producteurs et distributeurs).",
        context: "Le marche de la grande distribution alimentaire est domine par de grands groupes agroalimentaires. Les investissements necessaires pour produire a grande echelle sont enormes, et les grandes enseignes ont signe des contrats exclusifs avec ces groupes. Les petits agriculteurs locaux peinent a acceder aux rayons des supermarches."
    },
    {
        question: "Comment l'Etat encourage-t-il cette externalite positive ?",
        options: [
            "Par une taxe sur les panneaux solaires",
            "Par une reglementation interdisant les autres energies",
            "Par des subventions et des deductions fiscales pour encourager l'installation de panneaux solaires",
            "En laissant le marche s'autoreguler"
        ],
        answer: 2,
        explanation: "L'Etat encourage les externalites positives par des subventions et des deductions fiscales, ici pour favoriser l'installation de panneaux solaires qui beneficient a la collectivite.",
        context: "La famille Leroy installe des panneaux solaires sur sa maison. En plus de reduire sa facture d'electricite, cette installation reduit les emissions de CO2 du quartier et valorise les proprietes voisines. L'Etat propose un credit d'impot et des aides financieres pour ce type d'installation."
    }
]);

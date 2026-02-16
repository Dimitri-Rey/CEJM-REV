// ========== CHAPITRE 6 - Les fonctions economiques de l'Etat ==========

// -------------------- QUIZ CONNAISSANCES (35 questions) --------------------
registerQuiz('ch6', 'knowledge', [
    {
        question: "Quelles sont les 3 fonctions economiques de l'Etat ?",
        options: [
            "Allocation, redistribution, stabilisation (regulation)",
            "Production, consommation, investissement",
            "Taxation, subvention, nationalisation",
            "Legislation, execution, juridiction"
        ],
        answer: 0,
        explanation: "Les 3 fonctions economiques de l'Etat sont l'allocation, la redistribution et la stabilisation (aussi appelee regulation).",
        context: ""
    },
    {
        question: "Qu'est-ce que la croissance economique ?",
        options: [
            "L'amelioration des conditions de vie de la population",
            "L'augmentation du niveau de production entre deux dates",
            "L'augmentation du nombre d'entreprises sur un territoire",
            "La hausse du pouvoir d'achat des menages"
        ],
        answer: 1,
        explanation: "La croissance economique designe l'augmentation du niveau de production entre deux dates. Elle se mesure par le PIB.",
        context: ""
    },
    {
        question: "Par quel indicateur mesure-t-on la croissance economique ?",
        options: [
            "L'IDH (Indice de Developpement Humain)",
            "Le taux d'inflation",
            "Le PIB (Produit Interieur Brut)",
            "La balance des transactions courantes"
        ],
        answer: 2,
        explanation: "La croissance economique se mesure par le PIB (Produit Interieur Brut), qui correspond a la somme des valeurs ajoutees creees par toutes les entreprises sur le territoire.",
        context: ""
    },
    {
        question: "Qu'est-ce que le developpement durable ?",
        options: [
            "La croissance economique sur le long terme",
            "Satisfaire les besoins actuels sans compromettre la capacite des generations futures a satisfaire les leurs",
            "L'augmentation continue du PIB d'un pays",
            "Le maintien du taux de chomage a un niveau stable"
        ],
        answer: 1,
        explanation: "Le developpement durable vise a satisfaire les besoins actuels sans compromettre la capacite des generations futures a satisfaire les leurs, sur les plans economique, social et ecologique.",
        context: ""
    },
    {
        question: "Sur quels plans le developpement durable repose-t-il ?",
        options: [
            "Economique, financier et technologique",
            "Social, juridique et politique",
            "Economique, social et ecologique",
            "Militaire, diplomatique et commercial"
        ],
        answer: 2,
        explanation: "Le developpement durable repose sur trois plans : economique, social et ecologique.",
        context: ""
    },
    {
        question: "Qu'est-ce que le developpement economique ?",
        options: [
            "L'augmentation du PIB entre deux dates",
            "L'expansion des activites economiques entrainant l'enrichissement d'un Etat et l'amelioration des conditions de vie",
            "La mise en place de politiques de relance par l'Etat",
            "La hausse du taux d'emploi dans un pays"
        ],
        answer: 1,
        explanation: "Le developpement economique designe l'expansion des activites economiques entrainant l'enrichissement d'un Etat et l'amelioration des conditions de vie de la population. Il se mesure par l'IDH.",
        context: ""
    },
    {
        question: "Par quel indicateur mesure-t-on le developpement economique ?",
        options: [
            "Le PIB",
            "Le taux de chomage",
            "L'IDH (Indice de Developpement Humain)",
            "Le taux d'inflation"
        ],
        answer: 2,
        explanation: "Le developpement economique se mesure par l'IDH (Indice de Developpement Humain), contrairement a la croissance economique qui se mesure par le PIB.",
        context: ""
    },
    {
        question: "Comment calcule-t-on la valeur ajoutee (VA) ?",
        options: [
            "VA = Chiffre d'affaires - Charges de personnel",
            "VA = Valeur de production - Consommations intermediaires",
            "VA = Benefice net - Impots",
            "VA = Revenus totaux - Dividendes"
        ],
        answer: 1,
        explanation: "La valeur ajoutee se calcule ainsi : VA = Valeur de production - Consommations intermediaires. Elle constitue la source de la croissance.",
        context: ""
    },
    {
        question: "A qui sont distribues les revenus primaires issus de la valeur ajoutee ?",
        options: [
            "Uniquement aux salaries et aux actionnaires",
            "Aux salaries, apporteurs de capitaux, preteurs, Etat, organismes de securite sociale et a l'entreprise elle-meme",
            "Uniquement a l'Etat et aux organismes de securite sociale",
            "Aux clients, fournisseurs et salaries"
        ],
        answer: 1,
        explanation: "Les revenus primaires sont distribues a 6 beneficiaires : les salaries (salaires), les apporteurs de capitaux (dividendes), les preteurs (interets), l'Etat (taxes/impots), les organismes de securite sociale (cotisations sociales) et l'entreprise elle-meme (EBE).",
        context: ""
    },
    {
        question: "Sous quelle forme les apporteurs de capitaux recoivent-ils leur part de la valeur ajoutee ?",
        options: [
            "Des salaires",
            "Des interets",
            "Des dividendes",
            "Des cotisations sociales"
        ],
        answer: 2,
        explanation: "Les apporteurs de capitaux recoivent leur part de la valeur ajoutee sous forme de dividendes.",
        context: ""
    },
    {
        question: "Comment se calcule le PIB d'un pays ?",
        options: [
            "PIB = somme des chiffres d'affaires de toutes les entreprises",
            "PIB = somme des valeurs ajoutees creees par toutes les entreprises sur le territoire",
            "PIB = somme des benefices nets de toutes les entreprises",
            "PIB = somme des investissements realises par toutes les entreprises"
        ],
        answer: 1,
        explanation: "Le PIB correspond a la somme des valeurs ajoutees creees par toutes les entreprises sur le territoire national.",
        context: ""
    },
    {
        question: "Que se passe-t-il lorsque le PIB augmente ?",
        options: [
            "Le pays est en recession",
            "Le pays connait un ralentissement economique",
            "Le pays connait une croissance economique",
            "Le pays connait une crise economique"
        ],
        answer: 2,
        explanation: "Lorsque le PIB augmente, le pays connait une croissance economique.",
        context: ""
    },
    {
        question: "Que signifie un PIB negatif ?",
        options: [
            "Le pays connait une croissance economique",
            "Le pays connait un ralentissement economique",
            "Le pays est en recession ou crise economique",
            "Le pays connait une stabilite economique"
        ],
        answer: 2,
        explanation: "Un PIB negatif signifie que le pays est en recession ou en crise economique.",
        context: ""
    },
    {
        question: "Dans le cercle vertueux de la croissance, que provoque la hausse des revenus ?",
        options: [
            "Une hausse de l'epargne uniquement",
            "Une hausse du pouvoir d'achat",
            "Une baisse de la consommation",
            "Une hausse du taux de chomage"
        ],
        answer: 1,
        explanation: "Dans le cercle vertueux de la croissance, la hausse des revenus provoque une hausse du pouvoir d'achat, qui entraine ensuite une hausse de la consommation.",
        context: ""
    },
    {
        question: "Qu'est-ce qu'une politique conjoncturelle ?",
        options: [
            "Une politique visant a transformer le systeme economique en profondeur",
            "Une politique visant a reguler l'economie a court terme",
            "Une politique visant a modifier la structure des entreprises",
            "Une politique visant a influencer le comportement des agents a long terme"
        ],
        answer: 1,
        explanation: "Une politique conjoncturelle vise a reguler l'economie a court terme, contrairement aux politiques structurelles qui visent a transformer le systeme economique en profondeur.",
        context: ""
    },
    {
        question: "Qu'est-ce qu'une politique structurelle ?",
        options: [
            "Une politique de regulation de l'economie a court terme",
            "Une politique qui vise a maintenir la stabilite des prix",
            "Une politique qui transforme le systeme economique pour le rendre efficace en influencant le comportement des agents",
            "Une politique qui se concentre uniquement sur le taux de chomage"
        ],
        answer: 2,
        explanation: "Une politique structurelle vise a transformer le systeme economique pour le rendre efficace en influencant le comportement des agents. Sa denomination suit la regle : politique + adjectif du domaine concerne.",
        context: ""
    },
    {
        question: "Quels sont les 4 objectifs de la politique conjoncturelle ?",
        options: [
            "Croissance economique, stabilite des prix, equilibre du commerce exterieur, plein emploi",
            "Reduction de la dette, hausse des exportations, baisse des impots, plein emploi",
            "Innovation, competitivite, productivite, rentabilite",
            "Augmentation du PIB, baisse de la TVA, hausse du SMIC, reduction du deficit"
        ],
        answer: 0,
        explanation: "Les 4 objectifs de la politique conjoncturelle sont : la croissance economique (PIB), la stabilite des prix (taux d'inflation), l'equilibre du commerce exterieur (balance des transactions courantes) et le plein emploi (taux de chomage).",
        context: ""
    },
    {
        question: "Par quel indicateur mesure-t-on l'objectif de stabilite des prix ?",
        options: [
            "Le PIB",
            "Le taux de chomage",
            "Le taux d'inflation",
            "La balance des transactions courantes"
        ],
        answer: 2,
        explanation: "L'objectif de stabilite des prix se mesure par le taux d'inflation.",
        context: ""
    },
    {
        question: "Qu'est-ce que le carre magique ?",
        options: [
            "Un modele economique de croissance a 4 variables",
            "Une representation graphique des 4 objectifs de la politique conjoncturelle sur un repere",
            "Un outil de calcul du PIB base sur 4 indicateurs",
            "Un tableau de bord budgetaire utilise par les gouvernements"
        ],
        answer: 1,
        explanation: "Le carre magique est une representation graphique des 4 objectifs de la politique conjoncturelle sur un repere. Plus la forme est carree et grande, meilleure est la situation economique.",
        context: ""
    },
    {
        question: "Pourquoi le carre magique est-il qualifie de 'magique' ?",
        options: [
            "Parce qu'il permet de resoudre tous les problemes economiques",
            "Parce que les 4 objectifs ne peuvent pas etre poursuivis en meme temps",
            "Parce qu'il a ete invente par un mathematicien celebre",
            "Parce qu'il donne toujours une forme parfaitement carree"
        ],
        answer: 1,
        explanation: "Le carre est qualifie de 'magique' car les 4 objectifs ne peuvent pas etre poursuivis en meme temps. Il est theoriquement impossible d'atteindre simultanement les 4 objectifs.",
        context: ""
    },
    {
        question: "Quel est l'interet du carre magique ?",
        options: [
            "Calculer le PIB d'un pays",
            "Voir graphiquement les principaux desequilibres et developper des politiques pour y remedier",
            "Comparer les systemes fiscaux de differents pays",
            "Mesurer le taux de croissance annuel d'un pays"
        ],
        answer: 1,
        explanation: "L'interet du carre magique est de voir graphiquement les principaux desequilibres economiques et de developper des politiques pour y remedier.",
        context: ""
    },
    {
        question: "Quand met-on en place une politique de relance ?",
        options: [
            "En cas d'inflation importante",
            "En cas de chomage ou de faible croissance",
            "En cas d'excedent budgetaire",
            "En cas d'excedent commercial"
        ],
        answer: 1,
        explanation: "Une politique de relance est mise en place pour stimuler l'activite economique en cas de chomage ou de faible croissance.",
        context: ""
    },
    {
        question: "Quand met-on en place une politique de stabilisation ?",
        options: [
            "En cas de chomage eleve",
            "En cas de faible croissance economique",
            "En cas d'inflation importante",
            "En cas de deficit de la balance commerciale"
        ],
        answer: 2,
        explanation: "Une politique de stabilisation vise a freiner la croissance en cas d'inflation importante.",
        context: ""
    },
    {
        question: "Qu'est-ce que la politique 'stop and go' ?",
        options: [
            "Une politique qui consiste a alterner entre relance et stabilisation",
            "Une politique qui vise a arreter puis relancer la production industrielle",
            "Une politique de gel des prix suivie d'une liberalisation",
            "Une politique d'ouverture puis de fermeture des frontieres commerciales"
        ],
        answer: 0,
        explanation: "La politique 'stop and go' consiste a naviguer entre relance et stabilisation selon les besoins conjoncturels. Elle etait caracteristique des 30 glorieuses.",
        context: ""
    },
    {
        question: "Qu'est-ce que la politique budgetaire ?",
        options: [
            "Une politique menee par la banque centrale sur la quantite de monnaie en circulation",
            "Une politique de regulation par les pouvoirs publics en mobilisant le budget de l'Etat",
            "Une politique de controle des changes internationaux",
            "Une politique de fixation des taux d'interet par le gouvernement"
        ],
        answer: 1,
        explanation: "La politique budgetaire est une politique de regulation par les pouvoirs publics en mobilisant le budget de l'Etat.",
        context: ""
    },
    {
        question: "Qu'est-ce que la politique monetaire ?",
        options: [
            "Une politique de regulation par les pouvoirs publics en mobilisant le budget de l'Etat",
            "Une politique visant a agir sur la quantite de monnaie en circulation et les conditions de financement",
            "Une politique de controle des prix a la consommation",
            "Une politique de redistribution des revenus par les prestations sociales"
        ],
        answer: 1,
        explanation: "La politique monetaire vise a agir sur la quantite de monnaie en circulation et les conditions de financement. Elle est menee par la banque centrale.",
        context: ""
    },
    {
        question: "Quelles sont les 3 mesures de la politique budgetaire expansionniste (relance) ?",
        options: [
            "Hausse des impots, baisse des aides, baisse de la commande publique",
            "Baisse des impots/taxes, augmentation des aides, augmentation de la commande publique",
            "Baisse du taux directeur, augmentation de la masse monetaire, baisse des reserves obligatoires",
            "Augmentation du SMIC, baisse de la TVA, gel des loyers"
        ],
        answer: 1,
        explanation: "Les 3 mesures de la politique budgetaire expansionniste sont : baisse des impots/taxes, augmentation des aides et augmentation de la commande publique. Cela entraine une augmentation du deficit budgetaire.",
        context: ""
    },
    {
        question: "Quel est l'acteur principal de la politique monetaire dans l'Union europeenne ?",
        options: [
            "Le gouvernement francais",
            "La Commission europeenne",
            "La BCE (Banque Centrale Europeenne)",
            "Le Parlement europeen"
        ],
        answer: 2,
        explanation: "La BCE (Banque Centrale Europeenne) est l'acteur principal de la politique monetaire dans l'UE, avec un objectif d'inflation autour de 2%.",
        context: ""
    },
    {
        question: "Quelle mesure de politique monetaire est utilisee en cas de relance ?",
        options: [
            "Augmentation du taux directeur",
            "Baisse du taux directeur",
            "Augmentation des impots",
            "Baisse de la commande publique"
        ],
        answer: 1,
        explanation: "En cas de relance, la banque centrale baisse le taux directeur pour augmenter les demandes de credit et stimuler la demande globale.",
        context: ""
    },
    {
        question: "Quelles sont les 3 mesures de la politique budgetaire de rigueur (stabilisation) ?",
        options: [
            "Baisse des impots, augmentation des aides, augmentation de la commande publique",
            "Baisse du taux directeur, augmentation des credits, baisse des reserves",
            "Augmentation des impots/taxes, baisse des aides, baisse de la commande publique",
            "Augmentation du SMIC, hausse des depenses publiques, baisse de la TVA"
        ],
        answer: 2,
        explanation: "Les 3 mesures de la politique budgetaire de rigueur sont : augmentation des impots/taxes, baisse des aides et baisse de la commande publique. L'objectif est de reduire le deficit budgetaire.",
        context: ""
    },
    {
        question: "Quelles sont les 2 mesures de la politique de l'offre ?",
        options: [
            "Augmentation des aides sociales et augmentation du SMIC",
            "Baisse des prelevements et flexibilite du marche du travail",
            "Augmentation de la commande publique et baisse des impots sur le revenu",
            "Hausse du taux directeur et baisse des credits"
        ],
        answer: 1,
        explanation: "La politique de l'offre vise a ameliorer la competitivite des entreprises par deux mesures : la baisse des prelevements et la flexibilite du marche du travail.",
        context: ""
    },
    {
        question: "Quelles sont les 3 mesures de la politique de la demande ?",
        options: [
            "Baisse des prelevements, flexibilite du travail, baisse du taux directeur",
            "Augmentation des aides sociales et commande publique, baisse des impots, augmentation du SMIC",
            "Hausse des impots, baisse des aides, baisse de la commande publique",
            "Hausse du taux directeur, gel des salaires, reduction des depenses publiques"
        ],
        answer: 1,
        explanation: "La politique de la demande vise a augmenter la demande globale et l'investissement public par 3 mesures : augmentation des aides sociales et de la commande publique, baisse des impots, et augmentation du SMIC.",
        context: ""
    },
    {
        question: "Que signifie GOPE ?",
        options: [
            "Gestion des Operations de Politique Economique",
            "Grandes Orientations des Politiques Economiques",
            "Groupement des Organisations de Planification Europeenne",
            "Gouvernance des Objectifs de Performance Economique"
        ],
        answer: 1,
        explanation: "GOPE signifie Grandes Orientations des Politiques Economiques. Ce mecanisme encadre les politiques structurelles au niveau europeen.",
        context: ""
    },
    {
        question: "Quelles sont les regles du pacte de stabilite europeen ?",
        options: [
            "Deficit public < 5% du PIB et endettement < 80% du PIB",
            "Deficit public < 3% du PIB et endettement < 60% du PIB",
            "Deficit public < 1% du PIB et endettement < 50% du PIB",
            "Deficit public < 10% du PIB et endettement < 100% du PIB"
        ],
        answer: 1,
        explanation: "Le pacte de stabilite europeen impose un deficit public inferieur a 3% du PIB et un endettement inferieur a 60% du PIB.",
        context: ""
    },
    {
        question: "Quels sont les 4 effets pervers des politiques budgetaires expansionnistes ?",
        options: [
            "Inflation, deflation, stagflation, recession",
            "Effet boule de neige, effet d'eviction par le taux d'interet, effet d'eviction par l'exterieur, effet du fardeau de la dette",
            "Hausse du chomage, baisse du PIB, hausse de l'inflation, baisse des exportations",
            "Effet de levier, effet de seuil, effet de substitution, effet de revenu"
        ],
        answer: 1,
        explanation: "Les 4 effets pervers sont : l'effet boule de neige (endettement pour rembourser des dettes), l'effet d'eviction par le taux d'interet, l'effet d'eviction par l'exterieur et l'effet du fardeau de la dette.",
        context: ""
    }
]);

// -------------------- QUIZ CAS PRATIQUES / BTS (25 questions) --------------------
registerQuiz('ch6', 'practical', [
    {
        question: "Quelle fonction de l'Etat est illustree par cette mesure ?",
        options: [
            "La fonction d'allocation",
            "La fonction de redistribution",
            "La fonction de stabilisation",
            "La fonction de production"
        ],
        answer: 1,
        explanation: "Le versement du RSA et des allocations logement aux menages les plus modestes correspond a la fonction de redistribution de l'Etat, qui vise a reduire les inegalites de revenus entre les citoyens.",
        context: "Le gouvernement annonce une revalorisation du RSA de 4% et une augmentation des allocations logement pour les menages les plus modestes afin de reduire les inegalites de revenus."
    },
    {
        question: "De quel type de politique economique s'agit-il ?",
        options: [
            "Une politique structurelle",
            "Une politique conjoncturelle de relance",
            "Une politique conjoncturelle de stabilisation",
            "Une politique monetaire restrictive"
        ],
        answer: 1,
        explanation: "La baisse de la TVA et l'augmentation des investissements publics sont des mesures de politique budgetaire expansionniste (relance) : baisse des impots/taxes et augmentation de la commande publique, visant a stimuler l'activite face au chomage et a la faible croissance.",
        context: "Face a un taux de chomage de 12% et une croissance du PIB quasi nulle, le gouvernement decide de baisser la TVA de 2 points et d'augmenter les investissements publics dans les infrastructures de transport pour un montant de 15 milliards d'euros."
    },
    {
        question: "Quelle est la valeur ajoutee creee par l'entreprise ArtisanBois ?",
        options: [
            "100 000 euros",
            "120 000 euros",
            "150 000 euros",
            "200 000 euros"
        ],
        answer: 2,
        explanation: "La valeur ajoutee se calcule : VA = Valeur de production - Consommations intermediaires = 250 000 - 100 000 = 150 000 euros. Cette VA sera ensuite distribuee sous forme de revenus primaires.",
        context: "L'entreprise ArtisanBois realise une production annuelle d'une valeur de 250 000 euros. Pour produire ses meubles, elle achete du bois, des vis et du vernis pour un montant total de 100 000 euros de consommations intermediaires."
    },
    {
        question: "A quel beneficiaire des revenus primaires correspond cette part de la valeur ajoutee ?",
        options: [
            "Les salaries (salaires)",
            "Les apporteurs de capitaux (dividendes)",
            "Les preteurs (interets)",
            "L'entreprise elle-meme (EBE)"
        ],
        answer: 2,
        explanation: "Le remboursement des interets du pret bancaire correspond a la part de la valeur ajoutee destinee aux preteurs. Les preteurs recoivent leur remuneration sous forme d'interets.",
        context: "L'entreprise MecaPrecision a emprunte 500 000 euros aupres de la Banque Nationale pour financer l'achat d'une nouvelle machine. Chaque mois, elle verse 2 500 euros d'interets a la banque, preleves sur sa valeur ajoutee."
    },
    {
        question: "D'apres le carre magique de ce pays, quel est le principal desequilibre a corriger ?",
        options: [
            "La croissance economique est trop faible",
            "L'inflation est trop elevee",
            "Le taux de chomage est trop eleve",
            "La balance commerciale est trop deficitaire"
        ],
        answer: 2,
        explanation: "Avec un taux de chomage a 11%, c'est le principal desequilibre visible. La croissance est correcte (2,5%), l'inflation maitrisee (1,8%) et la balance commerciale en leger excedent. Le carre magique permet de voir graphiquement ce desequilibre et de developper des politiques pour y remedier.",
        context: "Le carre magique d'un pays europeen affiche les donnees suivantes : croissance du PIB de 2,5%, taux d'inflation de 1,8%, balance commerciale en leger excedent (+0,5% du PIB), mais un taux de chomage de 11%."
    },
    {
        question: "Quelle mesure de politique monetaire la BCE met-elle en oeuvre et dans quel but ?",
        options: [
            "Une hausse du taux directeur pour stimuler la croissance",
            "Une baisse du taux directeur pour augmenter les demandes de credit et stimuler la demande globale",
            "Une hausse du taux directeur pour baisser les demandes de credit et freiner la demande globale",
            "Une baisse du taux directeur pour reduire l'inflation"
        ],
        answer: 1,
        explanation: "Face a une croissance atone et un chomage eleve, la BCE baisse son taux directeur. L'objectif est d'augmenter les demandes de credit pour stimuler la demande globale, ce qui correspond a une politique monetaire de relance.",
        context: "Face a une croissance atone de 0,3% et un chomage en hausse dans la zone euro, la BCE decide d'abaisser son taux directeur de 1,5% a 0,75%. Les banques commerciales peuvent desormais emprunter a moindre cout aupres de la BCE."
    },
    {
        question: "De quel type de politique s'agit-il ?",
        options: [
            "Une politique de la demande",
            "Une politique de l'offre",
            "Une politique monetaire expansionniste",
            "Une politique budgetaire de rigueur"
        ],
        answer: 1,
        explanation: "La reduction des charges patronales (baisse des prelevements) et l'assouplissement des regles de licenciement (flexibilite du marche du travail) sont les deux mesures caracteristiques d'une politique de l'offre, visant a ameliorer la competitivite des entreprises pour relancer l'investissement prive et l'emploi.",
        context: "Le gouvernement annonce une reduction de 6 points des charges patronales pour les entreprises de moins de 250 salaries et un assouplissement des regles de licenciement economique pour favoriser l'embauche. L'objectif affiche est d'ameliorer la competitivite des entreprises francaises."
    },
    {
        question: "A quelle situation economique ce pays fait-il face ?",
        options: [
            "Une croissance economique soutenue",
            "Un ralentissement economique",
            "Une recession ou crise economique",
            "Une situation de plein emploi"
        ],
        answer: 2,
        explanation: "Avec un PIB en recul de 2,1% (PIB negatif), le pays est en recession ou crise economique. Un PIB negatif signifie que le niveau de production a diminue entre les deux dates.",
        context: "Les statistiques economiques du pays Atlantia montrent que le PIB a recule de 2,1% au cours de l'annee ecoulee. Les usines tournent au ralenti, les entreprises reduisent leurs effectifs et la consommation des menages chute fortement."
    },
    {
        question: "Quel effet pervers de la politique budgetaire expansionniste est illustre ici ?",
        options: [
            "L'effet boule de neige",
            "L'effet d'eviction par le taux d'interet",
            "L'effet d'eviction par l'exterieur",
            "L'effet du fardeau de la dette"
        ],
        answer: 0,
        explanation: "Le pays emprunte pour rembourser ses dettes anterieures, ce qui genere de nouvelles dettes : c'est l'effet boule de neige. L'endettement s'auto-alimente car le pays doit s'endetter pour rembourser des dettes precedentes.",
        context: "Le pays Nordland a accumule une dette publique considerable suite a plusieurs plans de relance. Desormais, il doit emprunter chaque annee 50 milliards d'euros supplementaires uniquement pour rembourser les interets de sa dette passee, ce qui augmente encore son niveau d'endettement."
    },
    {
        question: "Quel effet pervers est illustre par cette situation ?",
        options: [
            "L'effet boule de neige",
            "L'effet d'eviction par le taux d'interet",
            "L'effet d'eviction par l'exterieur",
            "L'effet du fardeau de la dette"
        ],
        answer: 1,
        explanation: "L'augmentation des taux d'interet causee par l'emprunt massif de l'Etat decourage les investisseurs prives qui renoncent a leurs projets : c'est l'effet d'eviction par le taux d'interet. L'investissement public se substitue a l'investissement prive au lieu de le stimuler.",
        context: "Suite a un plan de relance massif finance par l'emprunt, l'Etat de Westland a provoque une hausse des taux d'interet sur les marches financiers. Les entreprises privees, confrontees a des couts d'emprunt trop eleves, renoncent a leurs projets d'investissement."
    },
    {
        question: "Quel effet pervers de la politique budgetaire est mis en evidence ?",
        options: [
            "L'effet boule de neige",
            "L'effet d'eviction par le taux d'interet",
            "L'effet d'eviction par l'exterieur",
            "L'effet du fardeau de la dette"
        ],
        answer: 2,
        explanation: "La relance de la demande a ete trop rapide et les consommateurs se sont tournes massivement vers des produits importes. C'est l'effet d'eviction par l'exterieur : le recours massif aux importations est lie a une relance trop rapide de la demande.",
        context: "Le pays Sudland a lance un vaste plan de relance avec des baisses d'impots et des aides aux menages. Cependant, la consommation s'est orientee massivement vers des produits electroniques et des automobiles importes d'Asie, aggravant le deficit de la balance commerciale de 8 milliards d'euros."
    },
    {
        question: "Quel effet pervers est illustre par le comportement des menages ?",
        options: [
            "L'effet boule de neige",
            "L'effet d'eviction par le taux d'interet",
            "L'effet d'eviction par l'exterieur",
            "L'effet du fardeau de la dette"
        ],
        answer: 3,
        explanation: "Les menages anticipent une hausse des impots pour financer la dette publique et augmentent leur epargne au detriment de la consommation. C'est l'effet du fardeau de la dette : l'anticipation d'une hausse de l'imposition pousse a epargner plutot qu'a consommer.",
        context: "Apres un plan de relance ayant creuse le deficit public a 6% du PIB, les menages du pays Eastland anticipent une hausse massive des impots dans les annees a venir. Par precaution, ils augmentent leur taux d'epargne de 5 points, reduisant d'autant leur consommation, ce qui freine la reprise economique."
    },
    {
        question: "De quel type de politique s'agit-il et a quel objectif du carre magique repond-elle ?",
        options: [
            "Politique de relance ; objectif de croissance economique",
            "Politique de stabilisation ; objectif de stabilite des prix",
            "Politique de relance ; objectif de plein emploi",
            "Politique de stabilisation ; objectif d'equilibre du commerce exterieur"
        ],
        answer: 1,
        explanation: "Face a une inflation de 6%, le gouvernement met en oeuvre une politique de stabilisation pour freiner la croissance et ramener l'inflation a un niveau acceptable. Les mesures (hausse d'impots, baisse des aides, baisse de la commande publique) sont celles de la politique budgetaire de rigueur. L'objectif vise est la stabilite des prix.",
        context: "L'inflation atteint 6% dans le pays Centria. Le gouvernement decide d'augmenter l'impot sur le revenu de 2 points, de reduire les aides au logement de 15% et de geler les projets de construction d'autoroutes pour l'annee prochaine."
    },
    {
        question: "A quelle etape de la procedure GOPE ce pays se situe-t-il ?",
        options: [
            "Communication du PNR par l'Etat a la Commission europeenne",
            "Etude du PNR par la Commission europeenne",
            "Application des recommandations europeennes",
            "Suspension du pacte de stabilite"
        ],
        answer: 1,
        explanation: "La Commission europeenne analyse le PNR presente par la France : c'est la deuxieme etape de la procedure GOPE. Apres cette etude, la Commission formulera des recommandations que la France devra appliquer (etape 3).",
        context: "La France a presente son Programme National de Reforme (PNR) a Bruxelles. La Commission europeenne est en train d'analyser les mesures proposees en matiere de politique de l'emploi, de politique industrielle et de politique energetique, et s'apprete a formuler ses recommandations."
    },
    {
        question: "Quelle regle du pacte de stabilite ce pays ne respecte-t-il pas ?",
        options: [
            "Le deficit public est superieur a 3% du PIB",
            "L'endettement est superieur a 60% du PIB",
            "Les deux regles ne sont pas respectees",
            "Le pays respecte les deux regles du pacte de stabilite"
        ],
        answer: 2,
        explanation: "Le deficit public est de 4,8% du PIB (superieur a la limite de 3%) et la dette publique atteint 115% du PIB (superieur a la limite de 60%). Les deux regles du pacte de stabilite ne sont pas respectees.",
        context: "Le pays Iberia affiche un deficit public de 4,8% du PIB et une dette publique atteignant 115% du PIB. La Commission europeenne adresse un avertissement formel au gouvernement et lui demande de prendre des mesures correctives."
    },
    {
        question: "Quelle disposition du pacte de stabilite justifie cette decision ?",
        options: [
            "La regle du deficit public inferieur a 3% du PIB",
            "La regle de l'endettement inferieur a 60% du PIB",
            "La clause de sauvegarde permettant la suspension en cas de circonstances particulieres",
            "Les Grandes Orientations des Politiques Economiques (GOPE)"
        ],
        answer: 2,
        explanation: "Face a une crise sanitaire (circonstance particuliere), l'UE active la clause de sauvegarde qui permet la suspension temporaire des regles du pacte de stabilite. C'est exactement ce qui s'est produit pendant la crise du Covid.",
        context: "Face a une pandemie mondiale paralysant l'economie, l'Union europeenne decide de suspendre temporairement les regles budgetaires du pacte de stabilite pour permettre aux Etats membres de depenser massivement afin de soutenir leurs economies, meme si cela creuse les deficits bien au-dela de 3% du PIB."
    },
    {
        question: "De quel type de politique s'agit-il ?",
        options: [
            "Une politique de l'offre",
            "Une politique de la demande",
            "Une politique monetaire de stabilisation",
            "Une politique budgetaire de rigueur"
        ],
        answer: 1,
        explanation: "La hausse du SMIC, l'augmentation des minima sociaux et l'extension des aides au logement sont des mesures de politique de la demande : augmentation du SMIC, augmentation des aides sociales, avec pour objectif d'augmenter la demande globale des menages.",
        context: "Pour relancer la consommation, le gouvernement decide de revaloriser le SMIC de 5%, d'augmenter les minima sociaux de 3% et d'etendre les aides au logement a 200 000 beneficiaires supplementaires. L'objectif est d'augmenter le pouvoir d'achat des menages les plus modestes."
    },
    {
        question: "Quel objectif de politique monetaire la BCE cherche-t-elle a atteindre ?",
        options: [
            "Stimuler la croissance economique",
            "Maintenir l'inflation autour de 2%",
            "Atteindre le plein emploi",
            "Equilibrer la balance commerciale"
        ],
        answer: 1,
        explanation: "La BCE a pour objectif principal de maintenir l'inflation autour de 2%. En augmentant le taux directeur face a une inflation de 5,2%, elle cherche a baisser les demandes de credit pour freiner la demande globale et ramener l'inflation vers sa cible de 2%.",
        context: "L'inflation dans la zone euro atteint 5,2%, bien au-dessus de la cible. La BCE decide de relever son taux directeur de 0,5 point pour le porter a 4%. Les banques commerciales repercutent cette hausse sur les taux de credit proposes aux menages et aux entreprises."
    },
    {
        question: "A quelle etape du cercle vertueux de la croissance cette situation correspond-elle ?",
        options: [
            "Hausse de la production entrainant une hausse des investissements",
            "Hausse du pouvoir d'achat entrainant une hausse de la consommation",
            "Hausse des investissements entrainant une creation d'emploi",
            "Hausse de la consommation entrainant une hausse de la production"
        ],
        answer: 2,
        explanation: "L'entreprise investit dans de nouvelles usines (hausse des investissements) et recrute 500 salaries (creation d'emploi). Cela correspond a l'etape du cercle vertueux ou la hausse des investissements entraine une creation d'emploi, qui contribue a son tour a la croissance economique.",
        context: "L'entreprise AutoVert, portee par la forte demande de vehicules electriques, decide d'investir 200 millions d'euros dans la construction de deux nouvelles usines en France. Elle prevoit de recruter 500 salaries dans les 18 prochains mois pour faire tourner ces nouvelles lignes de production."
    },
    {
        question: "Quel est le but du pacte de stabilite dans cette situation ?",
        options: [
            "Stimuler la croissance economique des Etats membres",
            "Assurer la soutenabilite des finances publiques pour garantir la solvabilite et maintenir la valeur de la monnaie",
            "Augmenter les depenses publiques pour relancer l'economie",
            "Harmoniser les taux d'imposition entre les Etats membres"
        ],
        answer: 1,
        explanation: "Le pacte de stabilite vise a assurer la soutenabilite des finances publiques pour garantir la solvabilite des Etats et maintenir la valeur de la monnaie (l'euro). Les sanctions envisagees visent a contraindre les Etats a respecter ces regles.",
        context: "La Commission europeenne rappelle a l'ordre plusieurs Etats membres dont les deficits publics depassent 3% du PIB et dont la dette excede 60% du PIB. Elle menace de sanctions financieres si des plans de reduction des deficits ne sont pas presentes dans les 6 mois."
    },
    {
        question: "Quel mecanisme de politique monetaire de stabilisation est illustre ici ?",
        options: [
            "La baisse du taux directeur pour stimuler le credit",
            "L'augmentation du taux directeur pour baisser les demandes de credit et freiner la demande globale",
            "La baisse des impots pour relancer la consommation",
            "L'augmentation de la commande publique pour stimuler l'activite"
        ],
        answer: 1,
        explanation: "La BCE augmente son taux directeur, ce qui rend le credit plus cher pour les banques commerciales, qui repercutent cette hausse sur les taux proposes aux clients. Les demandes de credit baissent, ce qui freine la demande globale. C'est le mecanisme de la politique monetaire de stabilisation.",
        context: "Face a la surchauffe des marches immobiliers dans la zone euro, la BCE releve son taux directeur de 0,75 point. En consequence, les banques commerciales augmentent les taux de leurs credits immobiliers, qui passent de 2% a 3,5%. Le nombre de demandes de prets immobiliers chute de 30% en trois mois."
    },
    {
        question: "Quelle politique le gouvernement met-il en place et quels en seront les effets sur le budget ?",
        options: [
            "Une politique de relance qui augmentera le deficit budgetaire",
            "Une politique de rigueur qui reduira le deficit budgetaire",
            "Une politique de relance qui reduira le deficit budgetaire",
            "Une politique de rigueur qui augmentera le deficit budgetaire"
        ],
        answer: 1,
        explanation: "Le gouvernement met en place une politique budgetaire de rigueur (stabilisation) avec les 3 mesures classiques : augmentation des impots (hausse de 3 points de l'impot sur les societes), baisse des aides (reduction des subventions aux associations) et baisse de la commande publique (report des chantiers publics). L'effet attendu est une reduction du deficit budgetaire.",
        context: "Pour reduire un deficit public de 5,5% du PIB, le gouvernement annonce un plan d'austerite : hausse de l'impot sur les societes de 3 points, reduction de 20% des subventions aux associations et report de deux ans des grands chantiers publics de construction d'hopitaux et d'ecoles."
    },
    {
        question: "Que se passe-t-il si le PIB de ce pays continue a baisser ?",
        options: [
            "Le pays connait une croissance economique ralentie mais positive",
            "Le pays est en situation de plein emploi",
            "Le pays entre en recession ou crise economique car le PIB devient negatif",
            "Le pays connait une inflation importante"
        ],
        answer: 2,
        explanation: "Si le PIB baisse, cela signifie qu'il est negatif, et un PIB negatif correspond a une recession ou une crise economique. Le cercle vertueux de la croissance se transforme alors en cercle vicieux : baisse de la production, baisse des revenus, baisse de la consommation, hausse du chomage.",
        context: "Le pays Nordia enregistre une baisse du PIB de 0,5% au premier trimestre, suivie d'une baisse de 0,8% au deuxieme trimestre. Les analystes economiques s'inquietent de la degradation continue de la situation economique."
    },
    {
        question: "Quel type de politique conjoncturelle a ete applique durant les 30 glorieuses dans cette situation ?",
        options: [
            "Une politique de relance uniquement",
            "Une politique de stabilisation uniquement",
            "Une politique 'stop and go' alternant entre relance et stabilisation",
            "Une politique structurelle uniquement"
        ],
        answer: 2,
        explanation: "L'alternance entre des phases de relance (quand la croissance ralentit) et de stabilisation (quand l'inflation augmente) illustre la politique 'stop and go', caracteristique des 30 glorieuses. Le gouvernement navigue entre relance et stabilisation selon les besoins conjoncturels.",
        context: "Durant les annees 1950-1970, le gouvernement alternait les mesures economiques : en periode de ralentissement, il baissait les impots et augmentait les depenses publiques ; quand l'inflation remontait, il augmentait les impots et reduisait les depenses. Ce cycle se repetait regulierement."
    },
    {
        question: "Comment la valeur ajoutee de cette entreprise contribue-t-elle a la croissance nationale ?",
        options: [
            "Elle contribue au PIB car le PIB est la somme des valeurs ajoutees de toutes les entreprises du territoire",
            "Elle contribue au PIB uniquement si elle est exportee a l'etranger",
            "Elle ne contribue pas au PIB car c'est une petite entreprise",
            "Elle contribue au PIB uniquement par les impots qu'elle verse"
        ],
        answer: 0,
        explanation: "Le PIB se calcule comme la somme des valeurs ajoutees creees par toutes les entreprises sur le territoire, quelle que soit leur taille. La VA de 80 000 euros de cette boulangerie s'ajoute a celles de toutes les autres entreprises pour former le PIB national, qui mesure la croissance economique.",
        context: "La boulangerie 'Au Pain Dore' realise une production annuelle de 180 000 euros et achete pour 100 000 euros de matieres premieres (farine, beurre, levure). Sa valeur ajoutee est donc de 80 000 euros. Cette VA est ensuite repartie entre les salaires des employes, les impots, les cotisations sociales et le benefice du boulanger."
    }
]);

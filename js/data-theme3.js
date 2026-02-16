// ========================================================================
// THEME 3 - L'organisation de l'activite de l'entreprise
// Grand Quiz de Connaissances - 100 Questions
// ========================================================================

registerQuiz('theme3', 'knowledge', [

    // ====================================================================
    // CHAPITRE 9 - LES CHOIX DE PRODUCTION (Questions 1-17)
    // ====================================================================

    // Q1
    {
        question: "Quels sont les deux principaux facteurs de production ?",
        options: [
            "Le travail et le capital",
            "La terre et la technologie",
            "Le capital et l\'information",
            "Le travail et l\'energie"
        ],
        answer: 0,
        explanation: "Les deux principaux facteurs de production sont le travail (main-d\'oeuvre humaine) et le capital (ensemble des biens utilises pour produire). Ce sont les ressources combinees par l\'entreprise pour realiser sa production.",
        context: ""
    },
    // Q2
    {
        question: "Quelle est la difference entre le capital fixe et le capital circulant ?",
        options: [
            "Le capital fixe est immateriel, le capital circulant est materiel",
            "Le capital fixe est utilise durablement sans etre detruit, le capital circulant est consomme ou transforme lors de la production",
            "Le capital fixe est finance par emprunt, le capital circulant par autofinancement",
            "Le capital fixe concerne les salaires, le capital circulant les matieres premieres"
        ],
        answer: 1,
        explanation: "Le capital fixe (machines, batiments) est utilise durablement dans le processus de production sans etre detruit. Le capital circulant (matieres premieres, energie) est consomme ou transforme au cours de la production.",
        context: ""
    },
    // Q3
    {
        question: "Qu\'est-ce que l\'intensite capitalistique d\'une combinaison productive ?",
        options: [
            "Le rapport entre le chiffre d\'affaires et le nombre de salaries",
            "Le rapport entre le capital utilise et le travail employe",
            "Le rapport entre les couts fixes et les couts variables",
            "Le rapport entre la production et les matieres premieres"
        ],
        answer: 1,
        explanation: "L\'intensite capitalistique mesure le rapport capital/travail dans la combinaison productive. Une forte intensite capitalistique signifie que l\'entreprise utilise davantage de capital (machines) que de travail humain.",
        context: ""
    },
    // Q4
    {
        question: "Comment qualifie-t-on une combinaison productive qui utilise davantage de travail que de capital ?",
        options: [
            "A forte intensite capitalistique",
            "A forte composition organique du capital",
            "A faible intensite capitalistique (forte intensite en travail)",
            "A forte productivite marginale"
        ],
        answer: 2,
        explanation: "Lorsqu\'une combinaison productive privilegient le facteur travail par rapport au capital, on dit qu\'elle a une faible intensite capitalistique, ou qu\'elle est a forte intensite en travail (labour intensive).",
        context: ""
    },
    // Q5
    {
        question: "Comment calcule-t-on la productivite du travail ?",
        options: [
            "Quantite de capital / Nombre de salaries",
            "Quantite produite / Quantite de facteurs utilises (travail)",
            "Chiffre d\'affaires / Capital investi",
            "Couts totaux / Nombre d\'heures travaillees"
        ],
        answer: 1,
        explanation: "La productivite du travail mesure l\'efficacite du facteur travail. Elle se calcule en rapportant la quantite produite (ou la valeur ajoutee) a la quantite de travail utilisee (nombre de salaries ou nombre d\'heures travaillees).",
        context: ""
    },
    // Q6
    {
        question: "Quels sont les effets attendus des gains de productivite pour une entreprise ?",
        options: [
            "Uniquement une augmentation des salaires",
            "Baisse des couts unitaires, amelioration de la competitivite, possibilite de baisser les prix ou d\'augmenter les marges",
            "Augmentation systematique du nombre de salaries",
            "Diminution de la qualite des produits"
        ],
        answer: 1,
        explanation: "Les gains de productivite permettent de produire plus avec autant ou moins de facteurs. Ils entrainent une baisse des couts unitaires, ameliorent la competitivite-prix, et peuvent etre repartis entre baisse des prix, hausse des salaires, hausse des profits ou investissements.",
        context: ""
    },
    // Q7
    {
        question: "Quelle est la caracteristique des couts fixes ?",
        options: [
            "Ils varient proportionnellement au volume de production",
            "Ils restent constants quel que soit le volume de production",
            "Ils diminuent systematiquement quand la production augmente",
            "Ils ne concernent que les matieres premieres"
        ],
        answer: 1,
        explanation: "Les couts fixes (loyer, amortissement des machines, salaires des cadres permanents) restent constants quel que soit le niveau de production. Ils existent meme si l\'entreprise ne produit rien. A l\'inverse, les couts variables evoluent avec le volume produit.",
        context: ""
    },
    // Q8
    {
        question: "Lequel de ces elements est un cout variable ?",
        options: [
            "Le loyer de l\'usine",
            "L\'amortissement d\'une machine",
            "Les matieres premieres consommees",
            "Le salaire du directeur general"
        ],
        answer: 2,
        explanation: "Les matieres premieres sont un cout variable car leur consommation augmente proportionnellement au volume de production. Plus on produit, plus on consomme de matieres premieres.",
        context: ""
    },
    // Q9
    {
        question: "Quel est l\'impact d\'une hausse du taux d\'interet sur les decisions de production de l\'entreprise ?",
        options: [
            "Elle encourage l\'investissement car le rendement attendu augmente",
            "Elle rend le financement par emprunt plus couteux et peut freiner l\'investissement",
            "Elle n\'a aucun impact sur les choix de production",
            "Elle reduit automatiquement les couts fixes"
        ],
        answer: 1,
        explanation: "Quand le taux d\'interet augmente, le cout du credit s\'eleve, ce qui rend l\'emprunt plus cher pour l\'entreprise. Cela peut la dissuader d\'investir dans de nouveaux equipements et donc influencer ses choix de production.",
        context: ""
    },
    // Q10
    {
        question: "Dans le modele de la chaine de valeur de Porter, quelles sont les activites principales ?",
        options: [
            "Comptabilite, ressources humaines, recherche et developpement",
            "Logistique interne, production, logistique externe, marketing et vente, services",
            "Direction generale, communication, gestion financiere",
            "Approvisionnement, infrastructure, technologie"
        ],
        answer: 1,
        explanation: "Selon Michael Porter, les activites principales (ou primaires) de la chaine de valeur sont : la logistique interne (reception, stockage), la production, la logistique externe (distribution), le marketing et la vente, et les services (SAV).",
        context: ""
    },
    // Q11
    {
        question: "Dans la chaine de valeur de Porter, quelles sont les activites de soutien ?",
        options: [
            "Production, logistique, marketing",
            "Infrastructure de l\'entreprise, GRH, developpement technologique, approvisionnements",
            "Vente, distribution, service apres-vente",
            "Fabrication, assemblage, controle qualite"
        ],
        answer: 1,
        explanation: "Les activites de soutien (ou de support) dans la chaine de valeur de Porter sont : l\'infrastructure de l\'entreprise (direction, comptabilite), la gestion des ressources humaines, le developpement technologique (R&D), et les approvisionnements.",
        context: ""
    },
    // Q12
    {
        question: "Qu\'est-ce que l\'impartition ?",
        options: [
            "La decision de tout produire en interne",
            "La strategie consistant a confier a des partenaires exterieurs certaines activites de l\'entreprise",
            "La fusion de deux entreprises concurrentes",
            "La creation d\'une filiale a l\'etranger"
        ],
        answer: 1,
        explanation: "L\'impartition est la strategie par laquelle une entreprise confie a des partenaires exterieurs la realisation de certaines activites qu\'elle pourrait realiser elle-meme. C\'est le contraire de l\'integration verticale (faire soi-meme).",
        context: ""
    },
    // Q13
    {
        question: "Parmi les formes d\'impartition suivantes, laquelle permet a un commercant independant d\'exploiter une marque et un savoir-faire en echange de redevances ?",
        options: [
            "La sous-traitance",
            "Le GIE (Groupement d\'Interet Economique)",
            "La franchise",
            "L\'externalisation"
        ],
        answer: 2,
        explanation: "La franchise est un contrat par lequel le franchiseur accorde au franchise le droit d\'exploiter sa marque, son enseigne et son savoir-faire, en echange d\'une redevance (royalties) et du respect d\'un cahier des charges.",
        context: ""
    },
    // Q14
    {
        question: "Qu\'est-ce qu\'un GIE (Groupement d\'Interet Economique) ?",
        options: [
            "Une fusion entre deux entreprises",
            "Un regroupement d\'entreprises pour mettre en commun certains moyens tout en conservant leur independance juridique",
            "Un contrat de sous-traitance entre donneur d\'ordre et sous-traitant",
            "Une societe de capital-risque"
        ],
        answer: 1,
        explanation: "Le GIE est une structure juridique permettant a plusieurs entreprises de mettre en commun certaines activites (recherche, achats, logistique) pour reduire les couts, tout en conservant chacune leur independance juridique et leur autonomie.",
        context: ""
    },
    // Q15
    {
        question: "Quelle forme d\'impartition consiste a confier a un prestataire exterieur une fonction complete de l\'entreprise (ex : la paie, l\'informatique) ?",
        options: [
            "La sous-traitance",
            "La concession",
            "L\'externalisation",
            "La filiale commune"
        ],
        answer: 2,
        explanation: "L\'externalisation consiste a confier durablement a un prestataire exterieur specialise la gestion d\'une fonction ou d\'un service entier de l\'entreprise (informatique, comptabilite, logistique), a la difference de la sous-traitance qui porte sur une tache de production.",
        context: ""
    },
    // Q16
    {
        question: "Parmi les effets de l\'externalisation, lequel est un risque majeur pour l\'entreprise ?",
        options: [
            "La reduction des couts fixes",
            "Le recentrage sur le coeur de metier",
            "La perte de competences internes et la dependance vis-a-vis du prestataire",
            "L\'amelioration de la flexibilite"
        ],
        answer: 2,
        explanation: "L\'externalisation comporte des risques : perte de competences et de savoir-faire en interne, dependance vis-a-vis du prestataire, risque de perte de confidentialite, difficulte de controle de la qualite, et problemes sociaux lies aux transferts de personnel.",
        context: ""
    },
    // Q17
    {
        question: "Comment le developpement durable et la RSE influencent-ils les choix de production ?",
        options: [
            "Ils n\'ont aucune influence sur la production",
            "Ils imposent uniquement des contraintes financieres sans benefice",
            "Ils incitent les entreprises a integrer des criteres environnementaux, sociaux et ethiques dans leurs decisions de production",
            "Ils ne concernent que les grandes entreprises cotees en bourse"
        ],
        answer: 2,
        explanation: "La RSE (Responsabilite Societale des Entreprises) et le developpement durable amenent les entreprises a prendre en compte les impacts environnementaux et sociaux de leur production : choix de matieres premieres durables, reduction des dechets, conditions de travail, commerce equitable.",
        context: ""
    },

    // ====================================================================
    // CHAPITRE 10 - LES CHOIX DE STRUCTURE JURIDIQUE (Questions 18-34)
    // ====================================================================

    // Q18
    {
        question: "Quelle est la caracteristique principale de l\'entreprise individuelle ?",
        options: [
            "Elle possede la personnalite morale distincte de l\'entrepreneur",
            "L\'entrepreneur exerce en son nom propre, sans creation de personne morale",
            "Elle necessite obligatoirement un capital social minimum",
            "Elle impose la presence d\'au moins deux associes"
        ],
        answer: 1,
        explanation: "L\'entreprise individuelle est exploitee par une personne physique en son nom propre. Il n\'y a pas de creation de personne morale distincte. L\'entreprise et l\'entrepreneur ne forment qu\'une seule et meme entite juridique.",
        context: ""
    },
    // Q19
    {
        question: "Depuis la reforme du 15 mai 2022, quel changement majeur concerne le statut de l\'entrepreneur individuel ?",
        options: [
            "L\'entrepreneur individuel doit obligatoirement creer une societe",
            "Le patrimoine personnel de l\'entrepreneur est automatiquement protege (separation des patrimoines personnel et professionnel)",
            "L\'entreprise individuelle est supprimee",
            "L\'entrepreneur individuel doit avoir un capital social minimum de 1 euro"
        ],
        answer: 1,
        explanation: "Depuis le 15 mai 2022, le patrimoine personnel de l\'entrepreneur individuel est automatiquement protege. Seul le patrimoine professionnel peut etre saisi par les creanciers professionnels, sans qu\'il soit necessaire de creer une EIRL.",
        context: ""
    },
    // Q20
    {
        question: "Qu\'est-ce que le regime de la micro-entreprise ?",
        options: [
            "Un type de societe commerciale avec un seul associe",
            "Un regime fiscal et social simplifie applicable aux entreprises individuelles sous certains seuils de chiffre d\'affaires",
            "Une forme juridique distincte de l\'entreprise individuelle",
            "Un regime reserve aux societes de moins de 10 salaries"
        ],
        answer: 1,
        explanation: "La micro-entreprise n\'est pas une forme juridique mais un regime fiscal et social simplifie. Il s\'applique aux entrepreneurs individuels dont le chiffre d\'affaires ne depasse pas certains seuils. Il offre des obligations comptables et fiscales allegees.",
        context: ""
    },
    // Q21
    {
        question: "Qu\'est-ce que la personnalite juridique d\'une societe (personne morale) ?",
        options: [
            "Le fait que la societe appartienne a une seule personne",
            "L\'aptitude de la societe a etre titulaire de droits et d\'obligations, distincte de ses membres",
            "Le droit de l\'entrepreneur a exercer une activite commerciale",
            "L\'obligation de publier ses comptes annuels"
        ],
        answer: 1,
        explanation: "La personnalite juridique (ou personnalite morale) confere a la societe une existence juridique propre, distincte de celle de ses associes. Elle dispose de son propre patrimoine, peut contracter, agir en justice, et est responsable de ses actes.",
        context: ""
    },
    // Q22
    {
        question: "Quel est l\'avantage principal de la creation d\'une societe (personne morale) par rapport a l\'entreprise individuelle ?",
        options: [
            "L\'absence totale de formalites de creation",
            "La separation entre le patrimoine de la societe et celui des associes (selon la forme juridique)",
            "L\'absence d\'imposition sur les benefices",
            "La possibilite de ne pas avoir de dirigeant"
        ],
        answer: 1,
        explanation: "La societe, en tant que personne morale, possede un patrimoine propre distinct de celui de ses associes. Dans les societes a responsabilite limitee (SARL, SAS), les associes ne risquent que leur apport, leur patrimoine personnel etant protege.",
        context: ""
    },
    // Q23
    {
        question: "Sous le regime de la communaute legale (regime matrimonial par defaut), que se passe-t-il pour les biens acquis pendant le mariage ?",
        options: [
            "Ils appartiennent a celui qui les a achetes uniquement",
            "Ils sont communs aux deux epoux",
            "Ils appartiennent a l\'Etat",
            "Ils sont automatiquement separes"
        ],
        answer: 1,
        explanation: "Sous le regime de la communaute legale (communaute reduite aux acquets), les biens acquis pendant le mariage sont communs aux deux epoux, sauf les biens recus par donation ou succession qui restent des biens propres.",
        context: ""
    },
    // Q24
    {
        question: "Qu\'est-ce qu\'un bien propre dans le cadre des regimes matrimoniaux ?",
        options: [
            "Un bien achete pendant le mariage avec les revenus du couple",
            "Un bien possede avant le mariage ou recu par donation/succession pendant le mariage",
            "Un bien immobilier uniquement",
            "Un bien detenu par la societe de l\'un des epoux"
        ],
        answer: 1,
        explanation: "Un bien propre est un bien qui appartient en propre a l\'un des epoux : soit un bien possede avant le mariage, soit un bien recu par donation ou succession pendant le mariage. Il ne tombe pas dans la communaute.",
        context: ""
    },
    // Q25
    {
        question: "Quel regime matrimonial est le plus protecteur pour le conjoint d\'un entrepreneur ?",
        options: [
            "La communaute universelle",
            "La communaute legale reduite aux acquets",
            "La separation de biens",
            "La participation aux acquets"
        ],
        answer: 2,
        explanation: "La separation de biens est le regime le plus protecteur car chaque epoux conserve la propriete et la gestion de ses biens personnels. En cas de difficultes de l\'entreprise, les biens du conjoint non entrepreneur sont proteges des creanciers.",
        context: ""
    },
    // Q26
    {
        question: "Parmi les criteres de choix d\'une structure juridique, lequel concerne le nombre minimum et maximum de personnes pouvant s\'associer ?",
        options: [
            "Le regime fiscal",
            "Le nombre d\'associes",
            "La responsabilite des associes",
            "Le capital social minimum"
        ],
        answer: 1,
        explanation: "Le nombre d\'associes est un critere essentiel : une EURL ou SASU a un seul associe, une SARL de 2 a 100 associes, une SA au moins 2 (ou 7 si cotee). Ce critere determine les formes juridiques accessibles selon le nombre de porteurs de projet.",
        context: ""
    },
    // Q27
    {
        question: "Quels sont les 7 criteres principaux de choix d\'une forme societaire ?",
        options: [
            "Taille, secteur, age du dirigeant, localisation, marque, concurrence, fiscalite",
            "Nombre d\'associes, capital social, responsabilite, pouvoir de direction, regime fiscal, regime social du dirigeant, transmissibilite des parts",
            "Chiffre d\'affaires, benefice, effectif, anciennete, forme juridique, regime fiscal, nationalite",
            "Siege social, objet social, denomination, duree, capital, associes, dirigeants"
        ],
        answer: 1,
        explanation: "Les 7 criteres de choix sont : le nombre d\'associes, le montant du capital social, l\'etendue de la responsabilite des associes, la repartition du pouvoir de direction, le regime fiscal (IR ou IS), le regime social du dirigeant, et la transmissibilite des parts ou actions.",
        context: ""
    },
    // Q28
    {
        question: "Dans une SARL, quelle est l\'etendue de la responsabilite des associes ?",
        options: [
            "Responsabilite illimitee et solidaire",
            "Responsabilite limitee aux apports",
            "Responsabilite illimitee mais non solidaire",
            "Aucune responsabilite"
        ],
        answer: 1,
        explanation: "Dans une SARL (Societe a Responsabilite Limitee), la responsabilite des associes est limitee au montant de leurs apports. Leur patrimoine personnel est donc protege en cas de difficultes financieres de la societe.",
        context: ""
    },
    // Q29
    {
        question: "Qu\'est-ce que l\'Economie Sociale et Solidaire (ESS) ?",
        options: [
            "Un secteur economique regroupant uniquement les entreprises publiques",
            "Un ensemble de structures (associations, cooperatives, mutuelles, fondations, entreprises sociales) qui poursuivent une utilite sociale et reinvestissent majoritairement leurs benefices",
            "Un regime fiscal particulier pour les PME",
            "Un programme d\'aide de l\'Etat aux entreprises en difficulte"
        ],
        answer: 1,
        explanation: "L\'ESS regroupe des organisations (associations, cooperatives, mutuelles, fondations, entreprises sociales agreees) qui poursuivent un but d\'utilite sociale, avec une gouvernance democratique et une lucrativite limitee (reinvestissement des benefices).",
        context: ""
    },
    // Q30
    {
        question: "Dans une SCOP, quelle est la part minimale du capital qui doit etre detenue par les salaries ?",
        options: [
            "25%",
            "33%",
            "51%",
            "75%"
        ],
        answer: 2,
        explanation: "Dans une SCOP (Societe Cooperative et Participative), les salaries doivent detenir au minimum 51% du capital social. Cela garantit que les salaries sont majoritaires et maitrisent les decisions strategiques de l\'entreprise.",
        context: ""
    },
    // Q31
    {
        question: "Quel principe de vote s\'applique dans une SCOP ?",
        options: [
            "Le vote est proportionnel au capital detenu",
            "Seul le gerant a le droit de vote",
            "Une personne = une voix, quel que soit le capital detenu",
            "Le vote est reserve aux associes exterieurs"
        ],
        answer: 2,
        explanation: "Dans une SCOP, le principe democratique prevaut : chaque associe dispose d\'une voix, independamment du montant de son apport au capital. C\'est le principe une personne = une voix, caracteristique des cooperatives.",
        context: ""
    },
    // Q32
    {
        question: "Quel est le role principal d\'une mutuelle ?",
        options: [
            "Realiser des benefices pour ses actionnaires",
            "Assurer une couverture complementaire en sante et prevoyance a ses adherents, sans but lucratif",
            "Produire des biens industriels",
            "Financer des start-up innovantes"
        ],
        answer: 1,
        explanation: "Les mutuelles sont des organismes a but non lucratif de l\'ESS. Elles offrent a leurs adherents une couverture complementaire sante et prevoyance, selon le principe de solidarite entre les membres. Les cotisations des uns financent les prestations des autres.",
        context: ""
    },
    // Q33
    {
        question: "Quelle forme juridique permet a un entrepreneur de creer seul une societe a responsabilite limitee ?",
        options: [
            "La SNC (Societe en Nom Collectif)",
            "La SA (Societe Anonyme)",
            "L\'EURL (Entreprise Unipersonnelle a Responsabilite Limitee) ou la SASU",
            "La SCS (Societe en Commandite Simple)"
        ],
        answer: 2,
        explanation: "L\'EURL (SARL a associe unique) et la SASU (SAS a associe unique) permettent a un entrepreneur seul de creer une societe dotee de la personnalite morale, avec une responsabilite limitee a ses apports.",
        context: ""
    },
    // Q34
    {
        question: "Dans une SNC (Societe en Nom Collectif), quelle est la responsabilite des associes ?",
        options: [
            "Limitee aux apports",
            "Illimitee et solidaire",
            "Limitee au double des apports",
            "Nulle car la societe est seule responsable"
        ],
        answer: 1,
        explanation: "Dans une SNC, les associes sont indefiniment et solidairement responsables des dettes sociales. Cela signifie que chaque associe peut etre poursuivi pour la totalite des dettes de la societe, meme sur son patrimoine personnel.",
        context: ""
    },

    // ====================================================================
    // CHAPITRE 11 - LES RISQUES ET LA RESPONSABILITE (Questions 35-51)
    // ====================================================================

    // Q35
    {
        question: "Quelles sont les 5 categories de risques auxquels une entreprise peut etre confrontee ?",
        options: [
            "Financier, commercial, social, fiscal, juridique",
            "Materiel, technologique, environnemental, numerique, professionnel",
            "Interne, externe, strategique, operationnel, reputationnel",
            "Economique, politique, climatique, sanitaire, geopolitique"
        ],
        answer: 1,
        explanation: "Les 5 categories de risques sont : materiel (incendie, vol), technologique (panne, explosion industrielle), environnemental (pollution, catastrophe naturelle), numerique (cyberattaque, perte de donnees), et professionnel (accident du travail, maladie professionnelle).",
        context: ""
    },
    // Q36
    {
        question: "Quels sont les 3 grands types de responsabilite juridique ?",
        options: [
            "Responsabilite morale, ethique et financiere",
            "Responsabilite civile, penale et administrative",
            "Responsabilite directe, indirecte et subsidiaire",
            "Responsabilite individuelle, collective et societale"
        ],
        answer: 1,
        explanation: "Les 3 types de responsabilite juridique sont : la responsabilite civile (reparer un dommage cause a autrui), la responsabilite penale (sanctionner une infraction a la loi penale), et la responsabilite administrative (sanctionner le non-respect de reglementations administratives).",
        context: ""
    },
    // Q37
    {
        question: "Quelles sont les trois categories d\'infractions en droit penal, de la moins grave a la plus grave ?",
        options: [
            "Faute, delit, felonie",
            "Contravention, delit, crime",
            "Infraction mineure, infraction majeure, infraction capitale",
            "Amende, emprisonnement, reclusion"
        ],
        answer: 1,
        explanation: "Les trois categories d\'infractions penales sont : la contravention (la moins grave, jugee par le tribunal de police), le delit (gravite intermediaire, juge par le tribunal correctionnel), et le crime (la plus grave, juge par la cour d\'assises).",
        context: ""
    },
    // Q38
    {
        question: "Quelle est la difference entre la responsabilite civile contractuelle et la responsabilite civile extracontractuelle ?",
        options: [
            "Il n\'y a aucune difference, ce sont des synonymes",
            "La contractuelle nait de l\'inexecution d\'un contrat, l\'extracontractuelle (delictuelle) nait d\'un fait dommageable en dehors de tout contrat",
            "La contractuelle est penale, l\'extracontractuelle est administrative",
            "La contractuelle concerne les entreprises, l\'extracontractuelle concerne les particuliers"
        ],
        answer: 1,
        explanation: "La responsabilite civile contractuelle est engagee en cas d\'inexecution ou de mauvaise execution d\'une obligation contractuelle. La responsabilite civile extracontractuelle (ou delictuelle) est engagee lorsqu\'un dommage est cause en dehors de tout lien contractuel.",
        context: ""
    },
    // Q39
    {
        question: "Quels sont les 3 elements que la victime doit demontrer pour engager la responsabilite civile ?",
        options: [
            "L\'intention, la premeditaion et le prejudice",
            "Un fait generateur (faute), un dommage (prejudice) et un lien de causalite entre les deux",
            "Le contrat, la facture et le paiement",
            "L\'identite du responsable, le montant du dommage et le tribunal competent"
        ],
        answer: 1,
        explanation: "Pour engager la responsabilite civile, la victime doit prouver trois elements cumulatifs : un fait generateur (faute, fait d\'une chose, fait d\'autrui), un dommage (prejudice subi), et un lien de causalite direct entre le fait generateur et le dommage.",
        context: ""
    },
    // Q40
    {
        question: "Combien de types de dommages peuvent etre indemnises en responsabilite civile ?",
        options: [
            "3 types : materiel, corporel, moral",
            "5 types : patrimonial, extrapatrimonial, direct, indirect, eventuel",
            "7 types, incluant notamment le prejudice corporel, materiel, moral, d\'agrement, esthetique, economique et d\'anxiete",
            "2 types : physique et financier"
        ],
        answer: 2,
        explanation: "La jurisprudence reconnait 7 categories de dommages indemnisables : corporel (atteinte physique), materiel (perte de biens), moral (souffrance psychologique), d\'agrement (perte de loisirs), esthetique (alteration de l\'apparence), economique (perte de revenus) et d\'anxiete.",
        context: ""
    },
    // Q41
    {
        question: "Quelles sont les causes d\'exoneration de responsabilite civile ?",
        options: [
            "L\'ignorance de la loi et la bonne foi",
            "La force majeure, le fait d\'un tiers, le fait de la victime, et le cas fortuit",
            "Le paiement d\'une amende et la presentation d\'excuses",
            "L\'assurance et la garantie bancaire"
        ],
        answer: 1,
        explanation: "Les 4 causes d\'exoneration de responsabilite civile sont : la force majeure (evenement imprevisible, irresistible et exterieur), le fait d\'un tiers, le fait de la victime (qui a contribue a son propre dommage), et le cas fortuit.",
        context: ""
    },
    // Q42
    {
        question: "Que prevoit l\'article 1242 du Code civil concernant la responsabilite du fait des choses ?",
        options: [
            "Que seul le proprietaire d\'une chose est responsable",
            "Que l\'on est responsable du dommage cause par les choses que l\'on a sous sa garde",
            "Que les choses ne peuvent jamais engager la responsabilite de leur proprietaire",
            "Que seul l\'Etat est responsable des dommages causes par les choses"
        ],
        answer: 1,
        explanation: "L\'article 1242 du Code civil prevoit que l\'on est responsable non seulement du dommage que l\'on cause par son propre fait, mais encore de celui qui est cause par le fait des choses que l\'on a sous sa garde. Le gardien de la chose est presume responsable.",
        context: ""
    },
    // Q43
    {
        question: "Selon l\'article 1242 du Code civil, qui est responsable des dommages causes par un enfant mineur ?",
        options: [
            "L\'enfant lui-meme exclusivement",
            "L\'Etat",
            "Les parents exercant l\'autorite parentale (responsabilite des parents du fait de leurs enfants mineurs)",
            "L\'etablissement scolaire uniquement"
        ],
        answer: 2,
        explanation: "L\'article 1242 prevoit la responsabilite des parents du fait de leurs enfants mineurs. Les parents exercant l\'autorite parentale sont presumes responsables des dommages causes par leur enfant mineur habitant avec eux. C\'est une responsabilite de plein droit.",
        context: ""
    },
    // Q44
    {
        question: "Qu\'est-ce que la responsabilite du commettant du fait de ses preposes ?",
        options: [
            "La responsabilite d\'un fournisseur envers son client",
            "La responsabilite de l\'employeur pour les dommages causes par ses salaries dans le cadre de leurs fonctions",
            "La responsabilite du locataire envers le proprietaire",
            "La responsabilite d\'un associe envers la societe"
        ],
        answer: 1,
        explanation: "L\'article 1242 prevoit la responsabilite du commettant (employeur) du fait de ses preposes (salaries). L\'employeur est responsable des dommages causes par ses salaries dans l\'exercice de leurs fonctions, meme sans faute de sa part.",
        context: ""
    },
    // Q45
    {
        question: "Quel est le delai de prescription pour agir en responsabilite du fait des produits defectueux a compter de la mise en circulation du produit ?",
        options: [
            "5 ans",
            "10 ans",
            "20 ans",
            "30 ans"
        ],
        answer: 1,
        explanation: "Le producteur est responsable des defauts de ses produits pendant 10 ans a compter de la mise en circulation du produit. Passe ce delai, sa responsabilite ne peut plus etre engagee sur le fondement des produits defectueux.",
        context: ""
    },
    // Q46
    {
        question: "Quel est le delai de prescription pour la victime d\'un produit defectueux pour agir en justice a compter de la connaissance du dommage ?",
        options: [
            "1 an",
            "3 ans",
            "5 ans",
            "10 ans"
        ],
        answer: 1,
        explanation: "La victime d\'un produit defectueux dispose d\'un delai de 3 ans a compter de la date a laquelle elle a eu ou aurait du avoir connaissance du dommage, du defaut et de l\'identite du producteur pour agir en justice.",
        context: ""
    },
    // Q47
    {
        question: "En matiere de produits defectueux, les clauses limitatives ou exoneratoires de responsabilite sont-elles valables ?",
        options: [
            "Oui, si elles sont acceptees par le consommateur",
            "Oui, mais uniquement entre professionnels",
            "Non, elles sont interdites et reputees non ecrites",
            "Oui, si elles sont ecrites en gras dans le contrat"
        ],
        answer: 2,
        explanation: "En matiere de responsabilite du fait des produits defectueux, les clauses limitatives ou exoneratoires de responsabilite sont interdites et reputees non ecrites. Le producteur ne peut pas limiter contractuellement sa responsabilite envers la victime.",
        context: ""
    },
    // Q48
    {
        question: "Parmi les causes d\'exoneration en matiere de produits defectueux, laquelle permet au producteur de s\'exonerer ?",
        options: [
            "Le fait que le produit ait ete vendu a bas prix",
            "Le risque de developpement (le defaut ne pouvait etre connu selon l\'etat des connaissances scientifiques au moment de la mise en circulation)",
            "Le fait que le produit ait ete fabrique a l\'etranger",
            "Le fait que le consommateur n\'ait pas lu la notice"
        ],
        answer: 1,
        explanation: "Le risque de developpement est une cause d\'exoneration : le producteur peut s\'exonerer s\'il prouve que l\'etat des connaissances scientifiques et techniques au moment de la mise en circulation du produit ne permettait pas de deceler le defaut.",
        context: ""
    },
    // Q49
    {
        question: "Qu\'est-ce qu\'un risque numerique pour une entreprise ?",
        options: [
            "Un risque lie a la fluctuation des cours de bourse",
            "Un risque lie a la cybersecurite : cyberattaque, vol de donnees, piratage, panne informatique",
            "Un risque lie aux catastrophes naturelles",
            "Un risque lie aux conflits sociaux"
        ],
        answer: 1,
        explanation: "Les risques numeriques englobent toutes les menaces liees au systeme d\'information : cyberattaques (ransomware, phishing), vol ou fuite de donnees personnelles, piratage, pannes informatiques, ou encore non-respect du RGPD.",
        context: ""
    },
    // Q50
    {
        question: "Quelle juridiction juge les contraventions ?",
        options: [
            "Le tribunal correctionnel",
            "La cour d\'assises",
            "Le tribunal de police",
            "Le conseil de prud\'hommes"
        ],
        answer: 2,
        explanation: "Les contraventions, infractions les moins graves du droit penal, sont jugees par le tribunal de police. Les peines encourues sont principalement des amendes. Les delits sont juges par le tribunal correctionnel et les crimes par la cour d\'assises.",
        context: ""
    },
    // Q51
    {
        question: "Qu\'est-ce qu\'un risque professionnel ?",
        options: [
            "Un risque lie a la concurrence sur le marche",
            "Un risque d\'accident du travail ou de maladie professionnelle auquel le salarie est expose dans le cadre de son activite",
            "Un risque de perte de clientele",
            "Un risque de changement de reglementation fiscale"
        ],
        answer: 1,
        explanation: "Le risque professionnel est le risque d\'accident du travail ou de maladie professionnelle auquel un salarie est expose dans l\'exercice de ses fonctions. L\'employeur a une obligation de securite et de prevention envers ses salaries.",
        context: ""
    },

    // ====================================================================
    // CHAPITRE 12 - L'ORGANISATION DES RESSOURCES (Questions 52-67)
    // ====================================================================

    // Q52
    {
        question: "Selon la norme AFNOR, quels sont les trois types de processus dans une organisation ?",
        options: [
            "Processus strategique, processus tactique, processus operationnel",
            "Processus de realisation (productif), processus de support, processus de pilotage (management)",
            "Processus interne, processus externe, processus mixte",
            "Processus primaire, processus secondaire, processus tertiaire"
        ],
        answer: 1,
        explanation: "La norme AFNOR distingue 3 types de processus : le processus de realisation (ou productif, qui cree directement de la valeur pour le client), le processus de support (qui fournit les ressources necessaires), et le processus de pilotage (qui oriente et controle les autres processus).",
        context: ""
    },
    // Q53
    {
        question: "Quels sont les 3 objectifs principaux d\'un processus ?",
        options: [
            "Augmenter les salaires, reduire le temps de travail, ameliorer le confort",
            "Satisfaire le client (qualite), maitriser les couts (efficience), respecter les delais",
            "Maximiser le chiffre d\'affaires, minimiser les impots, augmenter le capital",
            "Recruter, former, licencier"
        ],
        answer: 1,
        explanation: "Les 3 objectifs d\'un processus sont : la satisfaction du client par la qualite du produit ou service, la maitrise des couts pour garantir l\'efficience, et le respect des delais pour assurer la fiabilite des livraisons.",
        context: ""
    },
    // Q54
    {
        question: "Qu\'est-ce qu\'une partie prenante (stakeholder) ?",
        options: [
            "Uniquement les actionnaires de l\'entreprise",
            "Tout individu ou groupe qui affecte ou est affecte par les decisions et activites de l\'entreprise",
            "Uniquement les clients de l\'entreprise",
            "Les concurrents de l\'entreprise exclusivement"
        ],
        answer: 1,
        explanation: "Les parties prenantes (stakeholders) sont tous les acteurs internes (salaries, dirigeants, actionnaires) ou externes (clients, fournisseurs, Etat, associations, riverains) qui influencent ou sont influences par les activites de l\'entreprise.",
        context: ""
    },
    // Q55
    {
        question: "Qu\'est-ce qu\'un contre-pouvoir dans une organisation ?",
        options: [
            "Le pouvoir du dirigeant sur les salaries",
            "Une force qui s\'oppose au pouvoir dominant pour le limiter ou l\'equilibrer",
            "Le pouvoir des actionnaires en assemblee generale",
            "Le pouvoir de l\'Etat sur les entreprises"
        ],
        answer: 1,
        explanation: "Un contre-pouvoir est une force qui s\'oppose au pouvoir en place pour le limiter, le controler ou l\'equilibrer. Dans l\'entreprise, les syndicats, le CSE, les associations de consommateurs ou les ONG peuvent exercer un contre-pouvoir face a la direction.",
        context: ""
    },
    // Q56
    {
        question: "Qu\'est-ce qu\'une coalition dans le cadre de l\'analyse des jeux de pouvoir ?",
        options: [
            "Une fusion entre deux entreprises",
            "Une alliance temporaire ou durable entre acteurs partageant des interets communs pour peser sur les decisions",
            "Un accord commercial entre concurrents",
            "Un contrat de sous-traitance"
        ],
        answer: 1,
        explanation: "Une coalition est une alliance formelle ou informelle entre plusieurs acteurs (salaries, managers, actionnaires) qui partagent des interets communs et unissent leurs forces pour influencer les decisions de l\'organisation.",
        context: ""
    },
    // Q57
    {
        question: "Selon Crozier, qu\'est-ce qu\'une zone d\'incertitude ?",
        options: [
            "Un risque financier non couvert par l\'assurance",
            "Un domaine ou un acteur maitrise une information ou une competence rare, lui conferant du pouvoir dans l\'organisation",
            "Une zone geographique ou l\'entreprise ne peut pas s\'implanter",
            "Un secteur d\'activite en declin"
        ],
        answer: 1,
        explanation: "Selon Michel Crozier, une zone d\'incertitude est un domaine non regule ou un acteur possede une maitrise particuliere (information, competence, reseau). Cette maitrise lui confere un pouvoir informel dans l\'organisation, car les autres dependent de lui.",
        context: ""
    },
    // Q58
    {
        question: "Quelle est la difference entre les ressources tangibles et intangibles ?",
        options: [
            "Les tangibles sont couteuses, les intangibles sont gratuites",
            "Les tangibles sont materielles et physiquement identifiables (equipements, tresorerie), les intangibles sont immaterielles (brevets, reputation, savoir-faire)",
            "Les tangibles appartiennent a l\'entreprise, les intangibles sont louees",
            "Il n\'y a aucune difference significative"
        ],
        answer: 1,
        explanation: "Les ressources tangibles sont materielles et physiques : equipements, batiments, stocks, tresorerie. Les ressources intangibles sont immaterielles : brevets, marques, reputation, image de marque, savoir-faire, capital humain, systeme d\'information.",
        context: ""
    },
    // Q59
    {
        question: "Quelle est la difference entre une competence individuelle et une competence collective ?",
        options: [
            "Les competences individuelles sont innees, les collectives sont acquises",
            "La competence individuelle est detenue par une personne, la competence collective emerge de la collaboration et de la combinaison des competences de plusieurs personnes",
            "Les competences individuelles sont juridiques, les collectives sont techniques",
            "Il n\'y a pas de difference, ce sont des synonymes"
        ],
        answer: 1,
        explanation: "La competence individuelle est le savoir, savoir-faire et savoir-etre d\'une personne. La competence collective nait de la cooperation entre individus : elle est superieure a la somme des competences individuelles grace a la synergie du travail en equipe.",
        context: ""
    },
    // Q60
    {
        question: "Quelles sont les 4 caracteristiques d\'une competence fondamentale (ou competence cle) selon Prahalad et Hamel ?",
        options: [
            "Visible, copiable, substituable, temporaire",
            "Elle offre un acces a de nombreux marches, contribue a la valeur percue par le client, est difficilement imitable par les concurrents, et est rare",
            "Elle est bon marche, facile a acquerir, commune a tous les concurrents, et temporaire",
            "Elle concerne uniquement la technologie, est brevetable, est exclusive et est financiere"
        ],
        answer: 1,
        explanation: "Selon Prahalad et Hamel, une competence fondamentale repond a 4 criteres : elle donne acces a de nombreux marches, elle contribue significativement a la valeur percue par le client, elle est difficilement imitable par les concurrents, et elle est rare.",
        context: ""
    },
    // Q61
    {
        question: "Qu\'est-ce que le diagnostic interne d\'une entreprise ?",
        options: [
            "L\'analyse de l\'environnement concurrentiel de l\'entreprise",
            "L\'analyse des forces et faiblesses de l\'entreprise en termes de ressources et competences",
            "L\'etude des tendances du marche",
            "L\'analyse de la reglementation applicable au secteur"
        ],
        answer: 1,
        explanation: "Le diagnostic interne consiste a analyser les forces et faiblesses de l\'entreprise en evaluant ses ressources (tangibles et intangibles) et ses competences (individuelles, collectives, fondamentales). Il permet d\'identifier les avantages concurrentiels et les axes d\'amelioration.",
        context: ""
    },
    // Q62
    {
        question: "Qu\'est-ce qu\'un processus de support (ou de soutien) ?",
        options: [
            "Un processus qui cree directement de la valeur pour le client",
            "Un processus qui fournit les ressources necessaires au bon fonctionnement des processus de realisation (RH, informatique, comptabilite)",
            "Un processus qui definit la strategie de l\'entreprise",
            "Un processus qui ne concerne que le service apres-vente"
        ],
        answer: 1,
        explanation: "Le processus de support fournit les ressources et moyens necessaires au fonctionnement des autres processus : gestion des ressources humaines, gestion du systeme d\'information, gestion financiere et comptable, maintenance des equipements.",
        context: ""
    },
    // Q63
    {
        question: "Qu\'est-ce qu\'un processus de pilotage (ou de management) ?",
        options: [
            "Un processus de fabrication des produits",
            "Un processus qui definit les orientations strategiques, fixe les objectifs et controle les resultats",
            "Un processus de livraison aux clients",
            "Un processus de recrutement du personnel"
        ],
        answer: 1,
        explanation: "Le processus de pilotage (ou de management) oriente et controle les autres processus. Il comprend la planification strategique, la fixation des objectifs, le suivi des indicateurs de performance et la prise de decisions correctives.",
        context: ""
    },
    // Q64
    {
        question: "Dans le cadre du diagnostic interne, qu\'est-ce qu\'une force de l\'entreprise ?",
        options: [
            "Une opportunite du marche",
            "Une ressource ou competence que l\'entreprise maitrise mieux que ses concurrents et qui lui procure un avantage",
            "Une menace concurrentielle",
            "Un facteur macroeconomique favorable"
        ],
        answer: 1,
        explanation: "Une force est une ressource ou une competence que l\'entreprise possede et qui lui confere un avantage sur ses concurrents. Par exemple, une marque forte, un brevet, un savoir-faire unique ou une equipe hautement qualifiee.",
        context: ""
    },
    // Q65
    {
        question: "Un brevet detenu par une entreprise est-il une ressource tangible ou intangible ?",
        options: [
            "Tangible car il est enregistre sur un document officiel",
            "Intangible car c\'est un actif immateriel de propriete intellectuelle",
            "Ni l\'un ni l\'autre, c\'est une competence",
            "Tangible car il a une valeur monetaire"
        ],
        answer: 1,
        explanation: "Un brevet est une ressource intangible (immaterielle). Bien qu\'il ait une valeur economique et soit enregistre physiquement, il releve de la propriete intellectuelle, au meme titre que les marques, les licences ou le savoir-faire.",
        context: ""
    },
    // Q66
    {
        question: "Quel outil d\'analyse strategique permet d\'identifier les forces et faiblesses en interne et les opportunites et menaces en externe ?",
        options: [
            "La chaine de valeur de Porter",
            "Le modele SWOT",
            "Les 5 forces de Porter",
            "La matrice BCG"
        ],
        answer: 1,
        explanation: "La matrice SWOT (Strengths, Weaknesses, Opportunities, Threats) permet de synthetiser le diagnostic strategique en croisant le diagnostic interne (forces et faiblesses) avec le diagnostic externe (opportunites et menaces).",
        context: ""
    },
    // Q67
    {
        question: "Les parties prenantes internes incluent-elles les actionnaires ?",
        options: [
            "Non, les actionnaires sont toujours des parties prenantes externes",
            "Oui, les actionnaires sont consideres comme des parties prenantes internes car ils detiennent une part du capital de l\'entreprise",
            "Les actionnaires ne sont pas des parties prenantes",
            "Cela depend de la forme juridique de l\'entreprise"
        ],
        answer: 1,
        explanation: "Les actionnaires (ou associes) sont des parties prenantes internes car ils detiennent le capital de la societe, participent aux assemblees generales et influencent directement les decisions strategiques. Ils sont au coeur du fonctionnement de l\'entreprise.",
        context: ""
    },

    // ====================================================================
    // CHAPITRE 13 - L'ORGANISATION INTERNE (Questions 68-84)
    // ====================================================================

    // Q68
    {
        question: "Quelle est la difference entre le management strategique et le management operationnel ?",
        options: [
            "Il n\'y a pas de difference, ce sont des synonymes",
            "Le management strategique fixe les orientations a long terme de l\'entreprise, le management operationnel met en oeuvre les decisions au quotidien",
            "Le management strategique concerne les salaries, le management operationnel les dirigeants",
            "Le management strategique est financier, le management operationnel est commercial"
        ],
        answer: 1,
        explanation: "Le management strategique concerne les decisions de long terme prises par la direction (choix des marches, investissements majeurs, positionnement). Le management operationnel traduit ces decisions en actions concretes au quotidien (planification, coordination, controle des operations).",
        context: ""
    },
    // Q69
    {
        question: "Selon Likert, quel style de management se caracterise par un dirigeant autoritaire qui prend seul les decisions sans consulter ses collaborateurs ?",
        options: [
            "Le style participatif",
            "Le style consultatif",
            "Le style autoritaire exploiteur (ou directif)",
            "Le style paternaliste"
        ],
        answer: 2,
        explanation: "Le style autoritaire exploiteur (ou directif) selon Likert se caracterise par un dirigeant qui centralise toutes les decisions, communique de maniere descendante, utilise la menace et la sanction comme outils de motivation, sans laisser d\'autonomie aux collaborateurs.",
        context: ""
    },
    // Q70
    {
        question: "Quel style de management Likert implique la participation active des salaries aux decisions ?",
        options: [
            "Le style autoritaire exploiteur",
            "Le style paternaliste (autoritaire bienveillant)",
            "Le style consultatif",
            "Le style participatif"
        ],
        answer: 3,
        explanation: "Le style participatif de Likert repose sur la confiance, la participation active des salaries aux decisions, le travail en equipe et la decentralisation. Les salaries sont impliques dans la fixation des objectifs et la resolution des problemes.",
        context: ""
    },
    // Q71
    {
        question: "Quels sont les 4 styles de management selon Likert ?",
        options: [
            "Directif, persuasif, participatif, delegatif",
            "Autoritaire exploiteur, autoritaire paternaliste (bienveillant), consultatif, participatif",
            "Autocratique, democratique, liberal, bureaucratique",
            "Transactionnel, transformationnel, situationnel, charismatique"
        ],
        answer: 1,
        explanation: "Likert identifie 4 styles de management : l\'autoritaire exploiteur (decisions centralisees, sanctions), l\'autoritaire paternaliste ou bienveillant (decisions centralisees mais avec recompenses), le consultatif (consultation avant decision), et le participatif (implication des salaries).",
        context: ""
    },
    // Q72
    {
        question: "Qu\'est-ce qu\'une structure hierarchique (ou lineaire) ?",
        options: [
            "Une structure ou chaque salarie a plusieurs superieurs",
            "Une structure fondee sur le principe d\'unicite de commandement ou chaque subordonne ne depend que d\'un seul superieur",
            "Une structure sans aucun lien de subordination",
            "Une structure ou les decisions sont prises collectivement"
        ],
        answer: 1,
        explanation: "La structure hierarchique (ou lineaire) repose sur le principe d\'unicite de commandement de Fayol : chaque salarie ne recoit d\'ordres que d\'un seul superieur hierarchique. L\'autorite circule de haut en bas de maniere lineaire.",
        context: ""
    },
    // Q73
    {
        question: "Qu\'est-ce qu\'une structure fonctionnelle ?",
        options: [
            "Une structure ou chaque salarie a un seul chef",
            "Une structure ou l\'autorite est repartie entre des responsables specialises par fonction, et un salarie peut recevoir des ordres de plusieurs superieurs specialises",
            "Une structure par zone geographique",
            "Une structure par projet temporaire"
        ],
        answer: 1,
        explanation: "La structure fonctionnelle (Taylor) est basee sur la specialisation : l\'autorite est exercee par des responsables specialises dans un domaine (production, marketing, finance). Un salarie peut donc avoir plusieurs superieurs fonctionnels, ce qui contredit le principe d\'unicite de commandement.",
        context: ""
    },
    // Q74
    {
        question: "Qu\'est-ce qu\'une structure staff and line (hierarchico-fonctionnelle) ?",
        options: [
            "Une structure purement hierarchique",
            "Une structure combinant une ligne hierarchique (autorite, commandement) et des conseillers specialises (etat-major/staff) qui n\'ont pas de pouvoir de decision",
            "Une structure par projet",
            "Une structure en reseau"
        ],
        answer: 1,
        explanation: "La structure staff and line combine le principe hierarchique (ligne de commandement unique) avec des experts fonctionnels (staff/etat-major) qui conseillent les decideurs sans avoir eux-memes de pouvoir de commandement sur les operationnels.",
        context: ""
    },
    // Q75
    {
        question: "Qu\'est-ce qu\'une structure divisionnelle ?",
        options: [
            "Une structure organisee par fonctions (marketing, finance, production)",
            "Une structure decoupee en divisions autonomes par produit, marche ou zone geographique, chacune disposant de ses propres fonctions",
            "Une structure sans aucune hierarchie",
            "Une structure ou tous les salaries sont au meme niveau"
        ],
        answer: 1,
        explanation: "La structure divisionnelle organise l\'entreprise en divisions autonomes, chacune correspondant a un produit, un marche ou une zone geographique. Chaque division dispose de ses propres services fonctionnels (production, marketing, RH) et fonctionne comme une quasi-entreprise.",
        context: ""
    },
    // Q76
    {
        question: "Qu\'est-ce qu\'une structure matricielle ?",
        options: [
            "Une structure purement hierarchique a un seul niveau",
            "Une structure qui croise deux criteres de departementalisation (ex : fonctions et projets), impliquant une double autorite pour certains salaries",
            "Une structure sans aucune hierarchie",
            "Une structure reservee aux micro-entreprises"
        ],
        answer: 1,
        explanation: "La structure matricielle croise deux logiques d\'organisation, par exemple fonctions et projets (ou produits et zones geographiques). Un salarie depend alors de deux superieurs (un responsable fonctionnel et un chef de projet), ce qui peut creer des conflits d\'autorite.",
        context: ""
    },
    // Q77
    {
        question: "Qu\'est-ce qu\'une structure en reseau ?",
        options: [
            "Une structure hierarchique traditionnelle",
            "Une organisation flexible ou l\'entreprise confie certaines activites a des partenaires exterieurs relies par des relations contractuelles et des TIC",
            "Une structure divisionnelle classique",
            "Une structure fonctionnelle avec un seul dirigeant"
        ],
        answer: 1,
        explanation: "La structure en reseau repose sur des partenariats et des alliances entre entites (internes ou externes) reliees par les technologies de l\'information. L\'entreprise se concentre sur son coeur de metier et collabore avec un reseau de partenaires specialises.",
        context: ""
    },
    // Q78
    {
        question: "Qu\'est-ce qu\'une structure par projet ?",
        options: [
            "Une structure permanente et figee",
            "Une structure temporaire mise en place pour realiser un projet specifique, avec une equipe pluridisciplinaire",
            "Une structure organisee par zone geographique",
            "Une structure ou seul le dirigeant travaille sur les projets"
        ],
        answer: 1,
        explanation: "La structure par projet est une organisation temporaire ou une equipe pluridisciplinaire est constituee pour mener a bien un projet specifique avec des objectifs, un budget et un calendrier definis. L\'equipe est dissoute a la fin du projet.",
        context: ""
    },
    // Q79
    {
        question: "Selon Mintzberg, combien de mecanismes de coordination existe-t-il dans une organisation ?",
        options: [
            "3",
            "4",
            "5",
            "6"
        ],
        answer: 3,
        explanation: "Henry Mintzberg identifie 6 mecanismes de coordination : l\'ajustement mutuel, la supervision directe, la standardisation des procedes, la standardisation des resultats, la standardisation des qualifications, et la standardisation des normes (valeurs).",
        context: ""
    },
    // Q80
    {
        question: "Qu\'est-ce que l\'ajustement mutuel selon Mintzberg ?",
        options: [
            "La coordination par un superieur qui donne des ordres",
            "La coordination par la communication informelle directe entre les acteurs",
            "La coordination par des procedures ecrites",
            "La coordination par la formation des employes"
        ],
        answer: 1,
        explanation: "L\'ajustement mutuel est le mecanisme de coordination le plus simple : les individus se coordonnent par la communication informelle directe (echanges verbaux, discussion). Il est utilise dans les petites structures ou les equipes projet innovantes.",
        context: ""
    },
    // Q81
    {
        question: "Qu\'est-ce que la supervision directe selon Mintzberg ?",
        options: [
            "La coordination par des normes ecrites",
            "La coordination par un responsable qui donne des instructions et controle le travail de ses subordonnes",
            "La coordination par la formation des salaries",
            "La coordination par les resultats attendus"
        ],
        answer: 1,
        explanation: "La supervision directe est un mecanisme de coordination ou une personne (le superieur hierarchique) prend la responsabilite du travail des autres, donne des instructions et controle leur execution. C\'est le mecanisme typique de la structure hierarchique.",
        context: ""
    },
    // Q82
    {
        question: "Qu\'est-ce que la standardisation des procedes selon Mintzberg ?",
        options: [
            "Chaque employe fixe librement ses propres methodes",
            "Le contenu du travail est programme et specifie par des procedures, des modes operatoires ou des regles a suivre",
            "Les salaries sont coordonnes par leurs qualifications",
            "Les objectifs de performance sont fixes a l\'avance"
        ],
        answer: 1,
        explanation: "La standardisation des procedes signifie que le contenu du travail est specifie a l\'avance par des procedures, des modes operatoires, des gammes de fabrication ou des manuels de procedures. Le travail est programme et chaque employe suit les etapes definies.",
        context: ""
    },
    // Q83
    {
        question: "Qu\'est-ce que la standardisation des qualifications selon Mintzberg ?",
        options: [
            "Les diplomes et formations des employes sont specifies pour garantir une coordination par les competences acquises",
            "Les procedures de travail sont ecrites dans un manuel",
            "Les objectifs chiffres sont communiques a chaque service",
            "Les employes communiquent de maniere informelle"
        ],
        answer: 0,
        explanation: "La standardisation des qualifications coordonne le travail en specifiant la formation et les competences requises pour occuper un poste. Ainsi, un chirurgien et un anesthesiste se coordonnent naturellement grace a leur formation commune, sans supervision directe.",
        context: ""
    },
    // Q84
    {
        question: "Qu\'est-ce que la standardisation des resultats selon Mintzberg ?",
        options: [
            "On specifie les procedures de travail a suivre",
            "On coordonne par la communication informelle",
            "On specifie les resultats attendus (objectifs, performances) sans imposer la methode pour les atteindre",
            "On recrute des personnes ayant la meme formation"
        ],
        answer: 2,
        explanation: "La standardisation des resultats consiste a fixer les resultats attendus (objectifs de chiffre d\'affaires, de qualite, de production) sans imposer la maniere de les atteindre. Chaque unite est libre de sa methode, mais doit atteindre les objectifs definis.",
        context: ""
    },

    // ====================================================================
    // CHAPITRE 14 - LE FINANCEMENT (Questions 85-100)
    // ====================================================================

    // Q85
    {
        question: "Qu\'est-ce que le cycle d\'exploitation d\'une entreprise ?",
        options: [
            "La duree de vie de l\'entreprise depuis sa creation",
            "L\'ensemble des operations recurrentes liees a l\'activite courante : achat, production, stockage, vente et encaissement",
            "Le cycle d\'investissement a long terme",
            "La duree de remboursement d\'un emprunt"
        ],
        answer: 1,
        explanation: "Le cycle d\'exploitation est le cycle court et recurrent de l\'activite courante de l\'entreprise : achat de matieres premieres, production (transformation), stockage, vente et encaissement. Il genere un besoin de financement a court terme (BFR).",
        context: ""
    },
    // Q86
    {
        question: "Qu\'est-ce que le fonds de roulement ?",
        options: [
            "Le montant des dettes a court terme",
            "L\'excedent des ressources stables (capitaux propres + dettes long terme) sur les emplois stables (immobilisations), qui permet de financer le cycle d\'exploitation",
            "Le montant total du chiffre d\'affaires annuel",
            "Le solde du compte bancaire de l\'entreprise"
        ],
        answer: 1,
        explanation: "Le fonds de roulement (FR) est la difference entre les ressources stables (capitaux propres + emprunts a long terme) et les emplois stables (immobilisations nettes). Un FR positif signifie que les ressources stables financent les immobilisations et qu\'un excedent est disponible pour le cycle d\'exploitation.",
        context: ""
    },
    // Q87
    {
        question: "Quel est le delai maximum de paiement entre professionnels (B2B) selon la loi ?",
        options: [
            "30 jours a compter de la reception des marchandises sans accord specifique, ou 60 jours a compter de la facturation (avec accord)",
            "90 jours dans tous les cas",
            "120 jours pour les grandes entreprises",
            "Il n\'y a aucune limite legale"
        ],
        answer: 0,
        explanation: "La loi encadre les delais de paiement entre professionnels : 30 jours a compter de la reception des marchandises ou de l\'execution de la prestation (delai par defaut), ou 60 jours a compter de la date de facturation si un accord contractuel le prevoit.",
        context: ""
    },
    // Q88
    {
        question: "Qu\'est-ce que la tresorerie d\'une entreprise ?",
        options: [
            "Le montant total de ses dettes",
            "La difference entre le fonds de roulement et le besoin en fonds de roulement, representant les liquidites disponibles",
            "Le montant de son capital social",
            "Le total de ses immobilisations"
        ],
        answer: 1,
        explanation: "La tresorerie correspond aux liquidites disponibles de l\'entreprise. Elle se calcule : Tresorerie = Fonds de Roulement - Besoin en Fonds de Roulement. Une tresorerie positive signifie que l\'entreprise dispose de liquidites suffisantes pour faire face a ses echeances.",
        context: ""
    },
    // Q89
    {
        question: "Quels sont les trois grands types d\'investissements ?",
        options: [
            "Investissements publics, prives et mixtes",
            "Investissements materiels (corporels), investissements immateriels (incorporels) et investissements financiers",
            "Investissements a court terme, moyen terme et long terme",
            "Investissements de capacite, de remplacement et de productivite uniquement"
        ],
        answer: 1,
        explanation: "Les 3 types d\'investissements sont : materiels/corporels (machines, batiments, vehicules), immateriels/incorporels (brevets, logiciels, R&D, formation), et financiers (prise de participation, achat de titres, prets accordes).",
        context: ""
    },
    // Q90
    {
        question: "Qu\'est-ce que l\'amortissement d\'un investissement ?",
        options: [
            "Le remboursement d\'un emprunt bancaire",
            "La constatation comptable de la depreciation d\'un actif due a l\'usure ou a l\'obsolescence, repartie sur sa duree d\'utilisation",
            "Le paiement des interets d\'un credit",
            "La revente d\'un equipement d\'occasion"
        ],
        answer: 1,
        explanation: "L\'amortissement est la constatation comptable de la perte de valeur d\'un actif immobilise (machine, vehicule, batiment) due a l\'usure, au temps ou a l\'obsolescence. Il est reparti sur la duree d\'utilisation prevue de l\'actif et constitue une charge deductible.",
        context: ""
    },
    // Q91
    {
        question: "Qu\'est-ce que l\'autofinancement ?",
        options: [
            "Un emprunt accorde par les associes a l\'entreprise",
            "Le financement des investissements par les ressources propres generees par l\'activite de l\'entreprise (benefices non distribues, amortissements)",
            "Un credit bancaire a taux zero",
            "Une subvention de l\'Etat"
        ],
        answer: 1,
        explanation: "L\'autofinancement correspond a la capacite de l\'entreprise a financer ses investissements et son cycle d\'exploitation grace aux ressources generees par sa propre activite : benefices non distribues (mis en reserve) et dotations aux amortissements.",
        context: ""
    },
    // Q92
    {
        question: "Qu\'est-ce que l\'affacturage (factoring) ?",
        options: [
            "Un pret bancaire a long terme",
            "La cession de creances clients a un organisme specialise (le factor) qui en assure le recouvrement en echange d\'une commission",
            "Un contrat de location de materiel",
            "Une augmentation de capital"
        ],
        answer: 1,
        explanation: "L\'affacturage consiste pour l\'entreprise a ceder ses creances clients a un factor (societe d\'affacturage) qui lui verse immediatement le montant des factures (moins une commission) et se charge du recouvrement. Cela ameliore la tresorerie a court terme.",
        context: ""
    },
    // Q93
    {
        question: "Qu\'est-ce qu\'un encours bancaire (ou facilite de caisse / decouvert autorise) ?",
        options: [
            "Un placement financier a long terme",
            "Une autorisation temporaire accordee par la banque de presenter un solde debiteur sur le compte courant, pour faire face a des decalages de tresorerie",
            "Un apport en capital des actionnaires",
            "Une subvention publique"
        ],
        answer: 1,
        explanation: "L\'encours bancaire (facilite de caisse ou decouvert autorise) est un credit a court terme accorde par la banque. L\'entreprise est autorisee a avoir un solde debiteur sur son compte pendant une duree limitee pour couvrir des decalages temporaires de tresorerie.",
        context: ""
    },
    // Q94
    {
        question: "Qu\'est-ce que le credit fournisseur ?",
        options: [
            "Un emprunt accorde par une banque pour payer les fournisseurs",
            "Le delai de paiement accorde par un fournisseur a l\'entreprise, qui constitue une source de financement gratuite a court terme",
            "Un credit accorde par l\'entreprise a ses clients",
            "Un pret entre deux entreprises concurrentes"
        ],
        answer: 1,
        explanation: "Le credit fournisseur est le delai de paiement accorde par les fournisseurs a l\'entreprise (30, 60 jours). Pendant ce delai, l\'entreprise dispose des marchandises sans les avoir payees, ce qui constitue une source de financement gratuite du cycle d\'exploitation.",
        context: ""
    },
    // Q95
    {
        question: "Quelle est la difference entre financement interne et financement externe ?",
        options: [
            "Le financement interne vient de l\'interieur du pays, l\'externe de l\'etranger",
            "Le financement interne provient des ressources propres de l\'entreprise (autofinancement, apports des associes), l\'externe de tiers (banques, marches financiers, subventions)",
            "Le financement interne est a court terme, l\'externe a long terme",
            "Il n\'y a aucune difference"
        ],
        answer: 1,
        explanation: "Le financement interne provient des ressources propres de l\'entreprise : autofinancement (benefices reinvestis) et apports en capital des associes. Le financement externe provient de tiers : emprunts bancaires, emissions d\'obligations, subventions, credit-bail, crowdfunding.",
        context: ""
    },
    // Q96
    {
        question: "Qu\'est-ce qu\'une obligation en matiere de financement ?",
        options: [
            "Une contrainte legale imposee par l\'Etat",
            "Un titre de creance emis par une entreprise sur les marches financiers, representant un emprunt aupres des investisseurs, remunere par un interet",
            "Une action donnant droit de vote en assemblee generale",
            "Un contrat d\'assurance"
        ],
        answer: 1,
        explanation: "Une obligation est un titre de creance negociable emis par une entreprise (ou un Etat) pour emprunter des fonds aupres d\'investisseurs. L\'emetteur s\'engage a rembourser le capital a l\'echeance et a verser des interets (coupons) periodiquement.",
        context: ""
    },
    // Q97
    {
        question: "Qu\'est-ce que le credit-bail (leasing) ?",
        options: [
            "Un pret bancaire classique pour acheter un equipement",
            "Un contrat de location d\'un bien avec option d\'achat a l\'echeance, permettant a l\'entreprise d\'utiliser un bien sans l\'acheter immediatement",
            "Une vente a credit entre deux entreprises",
            "Un placement financier a long terme"
        ],
        answer: 1,
        explanation: "Le credit-bail (leasing) est un contrat par lequel une societe de credit-bail achete un bien et le loue a l\'entreprise moyennant des loyers. A la fin du contrat, l\'entreprise peut acheter le bien (lever l\'option d\'achat), le restituer ou renouveler la location.",
        context: ""
    },
    // Q98
    {
        question: "Qu\'est-ce que le crowdfunding ?",
        options: [
            "Un emprunt bancaire collectif accorde a plusieurs entreprises",
            "Un mode de financement participatif qui permet de collecter des fonds aupres d\'un grand nombre de personnes, generalement via une plateforme en ligne",
            "Un fonds d\'investissement reserve aux grandes entreprises",
            "Une cotisation obligatoire versee a l\'Etat"
        ],
        answer: 1,
        explanation: "Le crowdfunding (financement participatif) permet de collecter des fonds aupres du grand public via des plateformes en ligne. Il peut prendre la forme de dons, de prets (crowdlending) ou d\'investissement en capital (crowdequity).",
        context: ""
    },
    // Q99
    {
        question: "Quels sont les modes de financement interne des investissements ?",
        options: [
            "L\'emprunt bancaire et le credit-bail",
            "L\'autofinancement et l\'apport en capital des associes",
            "Les subventions et les obligations",
            "L\'affacturage et le decouvert bancaire"
        ],
        answer: 1,
        explanation: "Les financements internes des investissements sont : l\'autofinancement (benefices reinvestis, dotations aux amortissements) et les apports en capital des associes (apports initiaux ou augmentations de capital). Ils ne font pas appel a des financeurs exterieurs.",
        context: ""
    },
    // Q100
    {
        question: "Quels sont les principaux modes de financement externe des investissements ?",
        options: [
            "Uniquement l\'autofinancement et les reserves",
            "L\'apport en capital/actions par de nouveaux investisseurs, l\'emprunt bancaire, les obligations, les subventions, le credit-bail et le crowdfunding",
            "Uniquement les dons et le mecenat",
            "Uniquement l\'emprunt bancaire"
        ],
        answer: 1,
        explanation: "Les financements externes des investissements comprennent : l\'apport en capital par de nouveaux associes (actions), l\'emission d\'obligations, l\'emprunt bancaire, les subventions publiques, le credit-bail (leasing) et le crowdfunding (financement participatif). Ils permettent de completer les ressources internes.",
        context: ""
    }

]);

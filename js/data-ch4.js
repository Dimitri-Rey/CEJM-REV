// ========== CHAPITRE 4 - La mise en oeuvre du contrat ==========

// ===== QUIZ CONNAISSANCES (35 questions) =====
registerQuiz('ch4', 'knowledge', [
    // --- I. Les clauses du contrat ---
    {
        question: "Qu'est-ce qu'une clause dans un contrat ?",
        options: [
            "Une stipulation a l'interieur d'un contrat qui precise certains elements, obligations ou modalites d'execution",
            "Un document annexe obligatoire joint au contrat",
            "Une signature supplementaire apposee par un temoin",
            "Un resume des droits du consommateur"
        ],
        answer: 0,
        explanation: "Une clause est une stipulation a l'interieur d'un contrat, qui precise certains elements, obligations ou modalites d'execution du contrat.",
        context: ""
    },
    {
        question: "Quelle est la difference entre 'la loi dispose' et 'un contrat stipule' ?",
        options: [
            "Il n'y a aucune difference, les deux expressions sont synonymes",
            "La loi dispose fait reference aux dispositions legales, tandis qu'un contrat stipule fait reference aux stipulations contractuelles",
            "La loi stipule et un contrat dispose",
            "Les deux expressions signifient que le contrat a force de loi"
        ],
        answer: 1,
        explanation: "On dit que la loi dispose (dispositions legales) et qu'un contrat stipule (stipulations contractuelles). Ce sont deux vocabulaires juridiques distincts.",
        context: ""
    },
    {
        question: "Que prevoit la clause de dedit ?",
        options: [
            "Le transfert automatique du contrat a un tiers",
            "L'obligation pour celui qui ne souhaite plus executer le contrat de dedommager son cocontractant avant un certain delai",
            "L'interdiction totale de rompre le contrat",
            "La possibilite de modifier le prix librement"
        ],
        answer: 1,
        explanation: "La clause de dedit oblige celui qui ne souhaite plus executer le contrat a dedommager son cocontractant avant un certain delai.",
        context: ""
    },
    {
        question: "Quel est le role de la clause de reserve de propriete ?",
        options: [
            "Elle interdit la revente du bien achete",
            "Elle permet au creancier de conserver la propriete du bien vendu jusqu'a complet paiement",
            "Elle oblige l'acheteur a payer comptant",
            "Elle transfere la propriete au moment de la signature du contrat"
        ],
        answer: 1,
        explanation: "La clause de reserve de propriete permet au creancier de conserver la propriete du bien vendu jusqu'a complet paiement par l'acheteur.",
        context: ""
    },
    {
        question: "Que prevoit une clause d'indexation ?",
        options: [
            "Que le contrat sera automatiquement renouvele chaque annee",
            "Que le prix evoluera automatiquement en fonction de l'evolution d'une autre donnee",
            "Que les parties doivent se rencontrer chaque mois",
            "Que le prix est fixe et ne peut jamais changer"
        ],
        answer: 1,
        explanation: "La clause d'indexation prevoit que le prix evoluera automatiquement en fonction de l'evolution d'une autre donnee (un indice, par exemple).",
        context: ""
    },
    {
        question: "Dans quelle situation la clause de renegociation s'applique-t-elle ?",
        options: [
            "Lorsque l'une des parties souhaite changer de fournisseur",
            "Lorsque des donnees essentielles a l'equilibre du contrat viennent a changer",
            "Lorsque le contrat arrive a son terme normal",
            "Lorsque le juge l'ordonne systematiquement"
        ],
        answer: 1,
        explanation: "La clause de renegociation prevoit l'obligation de renegocier le contrat si des donnees essentielles a son equilibre viennent a changer.",
        context: ""
    },
    {
        question: "Qu'est-ce qu'une clause limitative ou exclusive de responsabilite ?",
        options: [
            "Une clause qui augmente la responsabilite du debiteur",
            "Une clause par laquelle le debiteur limite ou exclut par avance sa responsabilite en cas de mauvaise execution ou d'inexecution",
            "Une clause qui rend le creancier seul responsable",
            "Une clause qui supprime toutes les obligations du contrat"
        ],
        answer: 1,
        explanation: "La clause limitative ou exclusive de responsabilite permet au debiteur de limiter ou d'exclure par avance sa responsabilite en cas de mauvaise execution ou d'inexecution du contrat.",
        context: ""
    },
    {
        question: "A quelle condition une clause limitative de responsabilite est-elle valable ?",
        options: [
            "Elle doit etre redigee en lettres majuscules",
            "Elle doit avoir ete librement negociee et ne pas vider de substance l'obligation essentielle",
            "Elle doit etre signee devant notaire",
            "Elle doit etre approuvee par le juge avant la signature du contrat"
        ],
        answer: 1,
        explanation: "Une clause limitative de responsabilite est valable si elle a ete librement negociee et si elle ne vide pas de substance l'obligation essentielle du contrat.",
        context: ""
    },
    {
        question: "Quel est l'effet d'une clause resolutoire ?",
        options: [
            "Elle permet de renvoyer l'affaire devant un tribunal",
            "En cas de manquement a une obligation contractuelle, le contrat sera resilie de plein droit, sans recours a la justice",
            "Elle oblige les parties a recourir a un mediateur",
            "Elle suspend le contrat pendant un an"
        ],
        answer: 1,
        explanation: "La clause resolutoire prevoit qu'en cas de manquement a une obligation contractuelle, le contrat sera resilie de plein droit, ce qui evite le recours a la justice.",
        context: ""
    },
    {
        question: "Que determine la clause penale ?",
        options: [
            "Le tribunal competent en cas de litige",
            "A l'avance, la sanction pecuniaire applicable si une partie n'execute pas ses obligations",
            "La duree maximale du contrat",
            "Les conditions de renouvellement automatique"
        ],
        answer: 1,
        explanation: "La clause penale determine a l'avance la sanction pecuniaire (montant en argent) applicable si une partie n'execute pas ses obligations contractuelles.",
        context: ""
    },
    {
        question: "Comment definit-on une clause abusive ?",
        options: [
            "Une clause redigee dans une langue etrangere",
            "Une clause qui cree, au detriment du consommateur ou non-professionnel, un desequilibre significatif entre les droits et obligations des parties",
            "Une clause qui prevoit un prix trop eleve",
            "Une clause qui impose un delai de livraison superieur a 30 jours"
        ],
        answer: 1,
        explanation: "Une clause abusive est une clause qui cree, au detriment du consommateur (ou non-professionnel), un desequilibre significatif entre les droits et obligations des parties au contrat.",
        context: ""
    },
    {
        question: "Quelle est la sanction d'une clause abusive dans un contrat de consommation ?",
        options: [
            "Le contrat est entierement annule",
            "La clause est reputee comme non ecrite",
            "Le professionnel est condamne a une peine de prison",
            "Le consommateur doit payer une amende"
        ],
        answer: 1,
        explanation: "La sanction d'une clause abusive est qu'elle est reputee comme non ecrite : elle est supprimee du contrat, mais le reste du contrat continue de s'appliquer.",
        context: ""
    },
    {
        question: "Quelle est la sanction d'une clause abusive entre professionnels (code de commerce) ?",
        options: [
            "La clause est reputee non ecrite",
            "La responsabilite contractuelle du professionnel est engagee",
            "Le contrat est automatiquement resilie",
            "Le professionnel est radie du registre du commerce"
        ],
        answer: 1,
        explanation: "Entre professionnels, la sanction d'une clause creant un desequilibre significatif est la responsabilite contractuelle du professionnel qui l'a imposee.",
        context: ""
    },
    // --- II. L'execution du contrat ---
    {
        question: "Qu'est-ce qu'une obligation contractuelle ?",
        options: [
            "Un lien juridique entre deux personnes en vertu duquel l'une est tenue envers l'autre d'executer une prestation definie dans le contrat",
            "Un document administratif obligatoire",
            "Une taxe supplementaire a payer lors de la signature",
            "Un engagement moral sans valeur juridique"
        ],
        answer: 0,
        explanation: "L'obligation contractuelle est un lien juridique entre deux personnes en vertu duquel l'une (le debiteur) est tenue envers l'autre (le creancier) d'executer une prestation definie dans le contrat.",
        context: ""
    },
    {
        question: "Comment appelle-t-on la personne qui s'engage a realiser une obligation au profit d'une autre ?",
        options: [
            "Le creancier",
            "Le garant",
            "Le debiteur",
            "Le mandataire"
        ],
        answer: 2,
        explanation: "Le debiteur est la personne qui s'engage a realiser une obligation au profit d'un creancier. Il a une dette envers le creancier.",
        context: ""
    },
    {
        question: "Combien y a-t-il de debiteurs et de creanciers dans un contrat ?",
        options: [
            "Toujours un seul debiteur et un seul creancier",
            "Autant de debiteurs et de creanciers que d'obligations dans le contrat",
            "Toujours deux debiteurs et deux creanciers",
            "Le nombre est fixe par la loi a trois maximum"
        ],
        answer: 1,
        explanation: "Il y a autant de debiteurs et de creanciers que d'obligations dans le contrat. Chaque obligation fait naitre un debiteur et un creancier.",
        context: ""
    },
    {
        question: "Que signifie la force obligatoire du contrat ?",
        options: [
            "Le contrat doit etre signe devant un juge",
            "Le contrat ne peut etre modifie ou revoque sans le consentement mutuel des parties, sauf exceptions legales",
            "Le contrat est obligatoirement redige par un avocat",
            "Le contrat est valable uniquement pendant un an"
        ],
        answer: 1,
        explanation: "La force obligatoire signifie que le contrat ne peut etre modifie ou revoque sans le consentement mutuel des parties (sauf exceptions prevues par la loi).",
        context: ""
    },
    {
        question: "Que signifie l'effet relatif du contrat ?",
        options: [
            "Le contrat n'a qu'un effet temporaire",
            "Le contrat ne peut etre execute que par les parties et a leur profit, sauf exceptions",
            "Le contrat ne produit ses effets qu'apres approbation du juge",
            "Le contrat produit des effets envers tous les citoyens"
        ],
        answer: 1,
        explanation: "L'effet relatif signifie que le contrat ne peut etre execute que par les parties et a leur profit. Les exceptions sont les heritiers, le tiers beneficiaire et la representation.",
        context: ""
    },
    {
        question: "Quelles sont les exceptions a l'effet relatif du contrat ?",
        options: [
            "Les fournisseurs, les clients et les concurrents",
            "Les heritiers, le tiers beneficiaire et la representation",
            "Les administrations publiques uniquement",
            "Il n'existe aucune exception"
        ],
        answer: 1,
        explanation: "Les exceptions a l'effet relatif du contrat sont : les heritiers, le tiers beneficiaire et la representation.",
        context: ""
    },
    {
        question: "Qu'est-ce qu'une chaine de contrats ?",
        options: [
            "Un ensemble de contrats signes le meme jour",
            "Plusieurs contrats qui se succedent dans le temps et portent sur le meme objet",
            "Un contrat signe par plus de deux parties",
            "Un contrat renouvele automatiquement chaque annee"
        ],
        answer: 1,
        explanation: "Une chaine de contrats designe plusieurs contrats qui se succedent dans le temps et portent sur le meme objet.",
        context: ""
    },
    {
        question: "Dans une chaine de contrats, contre qui peut-on engager la responsabilite en cas de contestation ?",
        options: [
            "Contre n'importe quel maillon de la chaine",
            "Uniquement contre la partie avec laquelle on est contractuellement lie",
            "Contre tous les fournisseurs en meme temps",
            "Contre le fabricant initial uniquement"
        ],
        answer: 1,
        explanation: "En cas de contestation dans une chaine de contrats, on ne peut engager la responsabilite que de la partie avec laquelle on est contractuellement lie.",
        context: ""
    },
    {
        question: "Qu'est-ce que la theorie de l'imprevision ?",
        options: [
            "La possibilite d'annuler un contrat a tout moment sans justification",
            "Lorsque des circonstances imprevisibles changent et provoquent une execution excessivement onereuse, la partie peut demander la renegociation",
            "L'obligation de prevoir toutes les clauses possibles dans un contrat",
            "Le droit du juge de modifier unilateralement le contrat"
        ],
        answer: 1,
        explanation: "La theorie de l'imprevision prevoit que lorsque des circonstances imprevisibles changent et provoquent une execution excessivement onereuse, la partie concernee peut demander la renegociation du contrat.",
        context: ""
    },
    {
        question: "Que se passe-t-il pendant la renegociation liee a l'imprevision ?",
        options: [
            "Le contrat est suspendu automatiquement",
            "Le contrat continue a etre execute",
            "Le contrat est annule de plein droit",
            "Les parties cessent toute relation commerciale"
        ],
        answer: 1,
        explanation: "Pendant la renegociation liee a l'imprevision, le contrat continue a etre execute par les parties.",
        context: ""
    },
    {
        question: "Que se passe-t-il si la renegociation pour imprevision echoue ?",
        options: [
            "Le contrat continue sans modification possible",
            "Les parties peuvent rompre le contrat ou saisir le juge pour revision ou fin du contrat",
            "Le contrat est automatiquement prolonge de 5 ans",
            "L'Etat intervient pour imposer de nouvelles conditions"
        ],
        answer: 1,
        explanation: "Si aucun accord amiable n'est trouve, les parties ont deux possibilites : rompre le contrat ou saisir le juge pour revision ou fin du contrat.",
        context: ""
    },
    // --- III. Sanction de l'inexecution ---
    {
        question: "Combien de sanctions sont prevues par l'article 1217 du code civil en cas d'inexecution du contrat ?",
        options: [
            "3 sanctions",
            "4 sanctions",
            "5 sanctions",
            "7 sanctions"
        ],
        answer: 2,
        explanation: "L'article 1217 du code civil prevoit 5 sanctions en cas d'inexecution du contrat.",
        context: ""
    },
    {
        question: "Laquelle de ces sanctions N'EST PAS prevue par l'article 1217 du code civil ?",
        options: [
            "Refuser d'executer ou suspendre l'execution de sa propre obligation",
            "Poursuivre l'execution forcee en nature de l'obligation",
            "Demander l'emprisonnement du debiteur defaillant",
            "Provoquer la resolution du contrat"
        ],
        answer: 2,
        explanation: "L'emprisonnement du debiteur n'est pas une sanction prevue par l'article 1217. Les 5 sanctions sont : exception d'inexecution, execution forcee, reduction du prix, resolution du contrat, reparation des consequences.",
        context: ""
    },
    {
        question: "Qu'est-ce qu'une mise en demeure ?",
        options: [
            "Une assignation en justice",
            "Une lettre permettant de demander a un debiteur d'executer une obligation suite a l'inexecution",
            "Un proces-verbal dresse par un huissier",
            "Une decision de justice executoire"
        ],
        answer: 1,
        explanation: "La mise en demeure est une lettre permettant de demander a un debiteur d'executer une obligation suite a l'inexecution. Elle doit rappeler l'obligation, accorder un nouveau delai et annoncer la sanction.",
        context: ""
    },
    {
        question: "Que doit contenir la mise en demeure ?",
        options: [
            "Uniquement le montant de la dette",
            "Un ecrit rappelant l'obligation, accordant un nouveau delai et annoncant la sanction",
            "La signature d'un juge et d'un avocat",
            "Le numero de securite sociale du debiteur"
        ],
        answer: 1,
        explanation: "La mise en demeure prend la forme d'un ecrit rappelant l'obligation, accordant un nouveau delai au debiteur et annoncant la sanction en cas de persistance de l'inexecution.",
        context: ""
    },
    {
        question: "Dans quel cas la mise en demeure n'est-elle PAS obligatoire ?",
        options: [
            "Lorsqu'on demande la resolution du contrat",
            "Lorsqu'on invoque l'exception d'inexecution (refus ou suspension d'executer sa propre obligation)",
            "Lorsqu'on demande l'execution forcee",
            "Lorsqu'on demande la reparation des consequences"
        ],
        answer: 1,
        explanation: "La mise en demeure est obligatoire dans tous les cas sauf pour l'exception d'inexecution, c'est-a-dire le refus ou la suspension d'executer sa propre obligation.",
        context: ""
    },
    {
        question: "Quels sont les 3 elements a demontrer au juge pour engager la responsabilite civile contractuelle ?",
        options: [
            "La faute contractuelle, l'existence d'un prejudice et le lien de causalite",
            "La bonne foi, la capacite juridique et le consentement",
            "L'objet du contrat, le prix et la duree",
            "Le dol, la violence et l'erreur"
        ],
        answer: 0,
        explanation: "Pour engager la responsabilite civile contractuelle, il faut demontrer 3 elements au juge : la faute contractuelle, l'existence d'un prejudice et le lien de causalite entre la faute et le prejudice.",
        context: ""
    },
    {
        question: "Qu'est-ce qu'une obligation de resultat ?",
        options: [
            "Une obligation ou le debiteur s'engage a tout mettre en oeuvre sans garantir le resultat",
            "Une obligation ou l'absence de resultat constitue automatiquement une faute, car le debiteur s'engage a realiser ce qui a ete promis quels que soient les aleas",
            "Une obligation imposee uniquement par le juge",
            "Une obligation qui ne produit des effets qu'apres validation par un expert"
        ],
        answer: 1,
        explanation: "Dans une obligation de resultat, l'absence de resultat constitue automatiquement une faute. Le debiteur s'engage a realiser ce qui a ete promis quels que soient les aleas.",
        context: ""
    },
    {
        question: "Qu'est-ce qu'une obligation de moyens ?",
        options: [
            "Une obligation ou le debiteur doit absolument atteindre le resultat promis",
            "Une obligation ou le debiteur s'engage a tout mettre en oeuvre, au risque de ne pas atteindre ce qui a ete promis",
            "Une obligation financiere de payer une somme forfaitaire",
            "Une obligation de fournir du materiel au creancier"
        ],
        answer: 1,
        explanation: "Dans une obligation de moyens, le debiteur s'engage a tout mettre en oeuvre au risque de ne pas atteindre ce qui a ete promis. C'est l'absence de moyens mis en oeuvre qui constitue la faute.",
        context: ""
    },
    {
        question: "Quelles sont les 3 causes d'exoneration communes aux obligations de resultat et de moyens ?",
        options: [
            "Le dol, la violence et l'erreur",
            "La force majeure, le fait d'un tiers et le fait de la victime",
            "La bonne foi, l'imprevision et la prescription",
            "La nullite, la rescision et la resolution"
        ],
        answer: 1,
        explanation: "Les 3 causes d'exoneration communes sont : la force majeure (imprevisible, irresistible, exterieure), le fait d'un tiers (imprevisible, irresistible, exterieur) et le fait de la victime.",
        context: ""
    },
    {
        question: "Quels sont les 3 criteres de la force majeure ?",
        options: [
            "Previsible, resistible, interieur",
            "Imprevisible, irresistible, exterieur",
            "Volontaire, intentionnel, reparable",
            "Temporaire, partiel, reversible"
        ],
        answer: 1,
        explanation: "La force majeure doit reunir 3 criteres : l'evenement doit etre imprevisible, irresistible et exterieur aux parties.",
        context: ""
    },
    {
        question: "Quelle cause d'exoneration est propre a l'obligation de moyens ?",
        options: [
            "La force majeure",
            "Le fait de la victime",
            "Le fait que tous les moyens ont ete mis en place par le debiteur",
            "Le fait d'un tiers"
        ],
        answer: 2,
        explanation: "La cause d'exoneration propre a l'obligation de moyens est la demonstration que tous les moyens ont ete mis en place par le debiteur pour tenter d'atteindre le resultat.",
        context: ""
    }
]);

// ===== QUIZ CAS PRATIQUES / BTS (25 questions) =====
registerQuiz('ch4', 'practical', [
    {
        question: "Quelle clause est presente dans le contrat entre Biofrais et TransFroid ?",
        options: [
            "Une clause de dedit",
            "Une clause de reserve de propriete",
            "Une clause d'indexation",
            "Une clause penale"
        ],
        answer: 2,
        explanation: "Le contrat prevoit que le tarif de transport evoluera automatiquement en fonction de l'indice du cout du carburant : c'est une clause d'indexation, qui lie le prix a l'evolution d'une donnee exterieure.",
        context: "Biofrais, producteur de legumes bio, a signe un contrat de transport avec TransFroid SARL. Le contrat prevoit que le tarif de transport evoluera automatiquement en fonction de l'indice du cout du carburant publie chaque trimestre."
    },
    {
        question: "La clause inseree par MegaElectro est-elle valable ?",
        options: [
            "Oui, car elle figure dans les conditions generales de vente",
            "Non, car c'est une clause abusive qui cree un desequilibre significatif au detriment du consommateur",
            "Oui, car le consommateur a signe le contrat",
            "Non, car le contrat aurait du etre signe devant notaire"
        ],
        answer: 1,
        explanation: "Cette clause est abusive car elle cree un desequilibre significatif au detriment du consommateur : seul le professionnel peut modifier les conditions du contrat unilateralement. Elle sera reputee non ecrite.",
        context: "MegaElectro, grande enseigne d'electromenager, insere dans ses conditions generales de vente la clause suivante : 'MegaElectro se reserve le droit de modifier a tout moment les conditions de garantie sans en informer le client.' Mme Dupont, consommatrice, conteste cette clause."
    },
    {
        question: "Quelle sanction s'applique a la clause contestee par Mme Dupont ?",
        options: [
            "L'annulation totale du contrat de vente",
            "La clause est reputee comme non ecrite",
            "MegaElectro est condamne a une peine d'amende penale",
            "Mme Dupont doit rembourser le produit"
        ],
        answer: 1,
        explanation: "En droit de la consommation, une clause abusive est reputee comme non ecrite. Le reste du contrat continue de s'appliquer normalement.",
        context: "MegaElectro, grande enseigne d'electromenager, insere dans ses conditions generales de vente la clause suivante : 'MegaElectro se reserve le droit de modifier a tout moment les conditions de garantie sans en informer le client.' Mme Dupont, consommatrice, conteste cette clause."
    },
    {
        question: "De quel type de clause s'agit-il dans le contrat entre l'entreprise Duval et son fournisseur Acier Plus ?",
        options: [
            "Une clause d'indexation",
            "Une clause de reserve de propriete",
            "Une clause de renegociation",
            "Une clause resolutoire"
        ],
        answer: 1,
        explanation: "La clause prevoit qu'Acier Plus reste proprietaire des materiaux jusqu'au paiement integral : c'est une clause de reserve de propriete, qui protege le vendeur en cas de non-paiement.",
        context: "L'entreprise Duval a commande des materiaux de construction a son fournisseur Acier Plus. Le contrat prevoit que les materiaux resteront la propriete d'Acier Plus jusqu'au paiement integral de la facture par l'entreprise Duval."
    },
    {
        question: "L'entreprise Duval n'a pas paye la totalite de la facture. Que peut faire Acier Plus ?",
        options: [
            "Rien, car les materiaux ont ete livres",
            "Recuperer les materiaux car elle en est toujours proprietaire grace a la clause de reserve de propriete",
            "Demander le double du prix initial",
            "Saisir le tribunal de commerce pour obtenir la dissolution de l'entreprise Duval"
        ],
        answer: 1,
        explanation: "Grace a la clause de reserve de propriete, Acier Plus est toujours proprietaire des materiaux tant que le paiement integral n'a pas ete effectue. Elle peut donc les recuperer.",
        context: "L'entreprise Duval a commande des materiaux de construction a Acier Plus. Le contrat comporte une clause de reserve de propriete. L'entreprise Duval n'a regle que 40 % de la facture et se trouve en difficulte financiere."
    },
    {
        question: "Quelle clause s'applique dans cette situation entre NetPro et son client ?",
        options: [
            "Une clause de dedit",
            "Une clause penale",
            "Une clause resolutoire",
            "Une clause d'indexation"
        ],
        answer: 2,
        explanation: "Le contrat prevoit une resiliation de plein droit en cas de retard de paiement superieur a 30 jours : c'est une clause resolutoire, qui permet de mettre fin au contrat automatiquement sans recourir a la justice.",
        context: "NetPro, entreprise de services informatiques, a conclu un contrat de maintenance avec la societe Compta+. Le contrat stipule : 'En cas de retard de paiement superieur a 30 jours, le contrat sera resilie de plein droit.' Compta+ n'a pas paye depuis 45 jours."
    },
    {
        question: "Quel type de clause est en jeu dans le contrat entre FormaPro et M. Martin ?",
        options: [
            "Une clause resolutoire",
            "Une clause de dedit",
            "Une clause de reserve de propriete",
            "Une clause d'indexation"
        ],
        answer: 1,
        explanation: "M. Martin peut se desengager a condition de payer une indemnite : c'est une clause de dedit, qui oblige celui qui ne souhaite plus executer le contrat a dedommager son cocontractant.",
        context: "M. Martin a signe un contrat de formation avec l'organisme FormaPro pour une formation de 3 mois. Le contrat prevoit que s'il souhaite annuler sa formation, il devra verser une indemnite de 500 euros a condition de le notifier au moins 15 jours avant le debut de la formation."
    },
    {
        question: "Qui est le debiteur et qui est le creancier de l'obligation de livraison dans ce contrat ?",
        options: [
            "Le creancier est BoisNat et le debiteur est l'Atelier du Meuble",
            "Le debiteur est BoisNat (obligation de livrer) et le creancier est l'Atelier du Meuble (droit a la livraison)",
            "Les deux parties sont simultanement debiteurs et creanciers de la meme obligation",
            "Il n'y a pas de debiteur ni de creancier dans un contrat de vente"
        ],
        answer: 1,
        explanation: "Pour l'obligation de livraison, BoisNat est le debiteur (il doit livrer le bois) et l'Atelier du Meuble est le creancier (il a le droit de recevoir la livraison). Pour l'obligation de paiement, les roles s'inversent.",
        context: "L'Atelier du Meuble a commande 50 m3 de bois a BoisNat. Le contrat prevoit une livraison sous 10 jours et un paiement a 30 jours. On s'interroge sur l'obligation de livraison."
    },
    {
        question: "Paul peut-il refuser de livrer la commande tant que la facture precedente n'est pas payee ?",
        options: [
            "Non, car le contrat de livraison est independant du contrat precedent",
            "Oui, il peut invoquer l'exception d'inexecution et suspendre sa propre obligation",
            "Non, car cela constituerait une faute contractuelle grave",
            "Oui, mais uniquement apres une mise en demeure"
        ],
        answer: 1,
        explanation: "Paul peut invoquer l'exception d'inexecution (article 1217 du code civil) : il peut refuser ou suspendre l'execution de sa propre obligation tant que l'autre partie n'a pas execute la sienne. Cette sanction ne necessite pas de mise en demeure.",
        context: "Paul, artisan boulanger, fournit chaque semaine des viennoiseries au restaurant 'Le Gourmet'. Le restaurateur n'a pas paye les deux dernieres factures. Paul souhaite cesser de livrer tant qu'il n'aura pas ete paye."
    },
    {
        question: "Quelle action Mme Leclerc peut-elle engager contre le peintre ?",
        options: [
            "Demander une reduction du prix en raison de la mauvaise execution",
            "Rien, car elle a accepte les travaux",
            "Demander l'emprisonnement du peintre",
            "Saisir le tribunal administratif"
        ],
        answer: 0,
        explanation: "Parmi les 5 sanctions de l'article 1217, Mme Leclerc peut demander une reduction du prix proportionnelle a la mauvaise execution des travaux. Elle pourrait aussi demander reparation des consequences de l'inexecution.",
        context: "Mme Leclerc a fait appel a un peintre professionnel pour repeindre son salon. Les travaux ont ete realises mais la qualite est tres mediocre : traces de pinceau visibles, couleur inegale, salissures sur les plinthes. Le peintre a facture la totalite du prix convenu."
    },
    {
        question: "Quels elements le restaurant devra-t-il prouver pour engager la responsabilite civile contractuelle du traiteur ?",
        options: [
            "Uniquement l'existence du contrat",
            "La faute contractuelle, l'existence d'un prejudice et le lien de causalite",
            "Seulement le montant du prejudice financier",
            "La mauvaise foi du traiteur et son intention de nuire"
        ],
        answer: 1,
        explanation: "Pour engager la responsabilite civile contractuelle, le restaurant doit demontrer les 3 elements : la faute contractuelle (livraison non conforme), le prejudice (perte de clients, atteinte a la reputation) et le lien de causalite entre la faute et le prejudice.",
        context: "Le restaurant 'La Belle Assiette' a commande 200 repas a un traiteur pour un banquet. Le traiteur a livre seulement 120 repas et certains plats etaient avaries. Le restaurant a du annuler une partie du banquet et a perdu des clients."
    },
    {
        question: "S'agit-il d'une obligation de resultat ou de moyens pour le transporteur ?",
        options: [
            "Une obligation de moyens, car le transport comporte des aleas",
            "Une obligation de resultat, car le transporteur s'est engage a livrer les marchandises en bon etat a destination",
            "Ni l'un ni l'autre, car il s'agit d'un contrat de service",
            "Une obligation de moyens renforcee"
        ],
        answer: 1,
        explanation: "Le transporteur a une obligation de resultat : il s'est engage a livrer les marchandises en bon etat a destination. L'absence de resultat (marchandises endommagees) constitue automatiquement une faute contractuelle.",
        context: "La societe TransExpress s'est engagee a transporter 500 colis de produits electroniques de Lyon a Marseille. A l'arrivee, 80 colis sont endommages. La societe destinataire souhaite engager la responsabilite du transporteur."
    },
    {
        question: "Le medecin a-t-il commis une faute contractuelle ?",
        options: [
            "Oui, car le patient n'est pas gueri",
            "Non, car le medecin a une obligation de moyens et il a mis en oeuvre tous les moyens disponibles",
            "Oui, car le medecin a une obligation de resultat",
            "Non, car la responsabilite medicale n'existe pas"
        ],
        answer: 1,
        explanation: "Le medecin a une obligation de moyens : il s'engage a tout mettre en oeuvre pour soigner le patient, mais ne garantit pas la guerison. Puisqu'il a utilise tous les moyens disponibles et respecte les protocoles, il n'a pas commis de faute.",
        context: "Le Dr Bernard, medecin generaliste, a suivi un patient souffrant d'une infection. Il a prescrit le traitement recommande par les protocoles medicaux et a effectue un suivi regulier. Malgre cela, le patient n'a pas gueri et souhaite engager la responsabilite du medecin."
    },
    {
        question: "Le fournisseur peut-il s'exonerer de sa responsabilite ?",
        options: [
            "Non, car aucune cause d'exoneration ne s'applique",
            "Oui, il peut invoquer la force majeure car l'inondation est imprevisible, irresistible et exterieure",
            "Oui, il peut invoquer le fait de la victime",
            "Non, car la force majeure ne s'applique jamais aux contrats commerciaux"
        ],
        answer: 1,
        explanation: "L'inondation exceptionnelle constitue un cas de force majeure car elle reunit les 3 criteres : imprevisible, irresistible et exterieure aux parties. Le fournisseur peut donc s'exonerer de sa responsabilite.",
        context: "La societe AgroSud devait livrer 10 tonnes de cereales a un client. Une inondation exceptionnelle et soudaine a detruit l'entrepot et la totalite du stock. AgroSud n'a pas pu honorer sa livraison."
    },
    {
        question: "GreenTech peut-elle invoquer la theorie de l'imprevision ?",
        options: [
            "Non, car elle aurait du anticiper cette hausse des prix",
            "Non, car le contrat a force obligatoire et ne peut jamais etre modifie",
            "Oui, car des circonstances imprevisibles ont rendu l'execution du contrat excessivement onereuse",
            "Oui, mais seulement si elle cesse immediatement d'executer le contrat"
        ],
        answer: 2,
        explanation: "GreenTech peut invoquer la theorie de l'imprevision : une hausse brutale et imprevisible de 300 % du prix des matieres premieres rend l'execution du contrat excessivement onereuse. Elle peut demander la renegociation, tout en continuant d'executer le contrat.",
        context: "GreenTech, fabricant de panneaux solaires, a signe un contrat de fourniture de 2 ans avec un promoteur immobilier a prix fixe. Six mois apres, une crise internationale provoque une hausse de 300 % du prix des matieres premieres. GreenTech perd de l'argent a chaque livraison."
    },
    {
        question: "Que doit faire GreenTech pendant la phase de renegociation ?",
        options: [
            "Cesser immediatement les livraisons",
            "Continuer a executer le contrat normalement",
            "Augmenter ses prix unilateralement",
            "Saisir directement le juge sans negocier"
        ],
        answer: 1,
        explanation: "Pendant la renegociation liee a l'imprevision, le contrat continue a etre execute. GreenTech doit donc continuer ses livraisons aux conditions initiales tant qu'un accord n'a pas ete trouve.",
        context: "GreenTech a invoque la theorie de l'imprevision et demande la renegociation du contrat au promoteur immobilier. Les negociations sont en cours mais n'ont pas encore abouti."
    },
    {
        question: "Quelle premiere demarche TechServ doit-elle effectuer avant de sanctionner l'inexecution ?",
        options: [
            "Saisir directement le tribunal de commerce",
            "Envoyer une mise en demeure rappelant l'obligation, accordant un nouveau delai et annoncant la sanction",
            "Rompre immediatement le contrat par telephone",
            "Publier un avis negatif sur Internet"
        ],
        answer: 1,
        explanation: "Avant d'engager une sanction (sauf l'exception d'inexecution), TechServ doit adresser une mise en demeure au client. Celle-ci doit rappeler l'obligation (payer les factures), accorder un nouveau delai et annoncer la sanction envisagee.",
        context: "TechServ, societe de maintenance informatique, a un contrat avec la societe ModeChic. ModeChic ne paye plus ses factures depuis 3 mois malgre plusieurs relances telephoniques. TechServ souhaite agir juridiquement."
    },
    {
        question: "La clause limitative de responsabilite inseree par LogiPlus est-elle valable ?",
        options: [
            "Oui, car elle a ete librement negociee entre professionnels et ne vide pas de substance l'obligation essentielle",
            "Non, car une clause limitative de responsabilite est toujours interdite",
            "Oui, car il suffit qu'elle figure dans le contrat",
            "Non, car seul le juge peut limiter la responsabilite"
        ],
        answer: 0,
        explanation: "Une clause limitative de responsabilite est valable si elle a ete librement negociee (ici entre deux professionnels) et si elle ne vide pas de substance l'obligation essentielle du contrat. Le plafond de 10 000 euros ne supprime pas l'obligation de reparer.",
        context: "LogiPlus, editeur de logiciels, a conclu un contrat avec la societe FinancePro. Le contrat contient la clause suivante : 'En cas de dysfonctionnement du logiciel, la responsabilite de LogiPlus est limitee a un plafond de 10 000 euros.' Les deux entreprises ont negocie cette clause ensemble."
    },
    {
        question: "Quel type de clause cette stipulation represente-t-elle ?",
        options: [
            "Une clause de dedit",
            "Une clause penale",
            "Une clause resolutoire",
            "Une clause d'indexation"
        ],
        answer: 1,
        explanation: "Le contrat prevoit a l'avance une sanction pecuniaire (200 euros par jour de retard) en cas d'inexecution de l'obligation de livraison dans les delais : c'est une clause penale.",
        context: "Le contrat entre le fournisseur ExpressLivr et la societe BatiMax stipule : 'En cas de retard de livraison, ExpressLivr devra verser une penalite de 200 euros par jour de retard.' ExpressLivr a livre avec 10 jours de retard."
    },
    {
        question: "Quel montant BatiMax peut-elle reclamer a ExpressLivr en vertu de la clause penale ?",
        options: [
            "200 euros au total",
            "2 000 euros (200 euros x 10 jours)",
            "Le montant du prejudice reel subi, quel qu'il soit",
            "Aucun montant car la clause est illegale"
        ],
        answer: 1,
        explanation: "La clause penale fixe a l'avance la sanction pecuniaire : 200 euros par jour de retard. Avec 10 jours de retard, BatiMax peut reclamer 2 000 euros (200 x 10), quel que soit le prejudice reel subi.",
        context: "Le contrat entre ExpressLivr et BatiMax comporte une clause penale de 200 euros par jour de retard. ExpressLivr a livre avec 10 jours de retard."
    },
    {
        question: "M. Girard peut-il agir directement contre le fabricant des pneus ?",
        options: [
            "Oui, car tout consommateur peut agir contre n'importe quel professionnel",
            "Non, en vertu de l'effet relatif, il ne peut engager la responsabilite que du garagiste avec lequel il est contractuellement lie",
            "Oui, car le fabricant est le responsable ultime",
            "Non, mais il peut agir contre le transporteur qui a achemine les pneus"
        ],
        answer: 1,
        explanation: "En vertu de l'effet relatif du contrat et du principe de la chaine de contrats, M. Girard ne peut engager la responsabilite que de la partie avec laquelle il est contractuellement lie, c'est-a-dire le garagiste, et non le fabricant des pneus.",
        context: "M. Girard a fait poser des pneus neufs chez son garagiste. Trois semaines plus tard, un pneu eclate a cause d'un defaut de fabrication. M. Girard souhaite agir contre le fabricant des pneus, mais il n'a de contrat qu'avec le garagiste."
    },
    {
        question: "La clause imposee par SuperMarche+ est-elle abusive au sens du code de commerce ?",
        options: [
            "Non, car les deux parties sont des professionnels et les clauses abusives n'existent qu'en droit de la consommation",
            "Oui, car depuis 2019, le code de commerce interdit les clauses creant un desequilibre significatif entre professionnels",
            "Non, car le fournisseur a signe le contrat librement",
            "Oui, mais uniquement si le fournisseur est une microentreprise"
        ],
        answer: 1,
        explanation: "Depuis 2019, le code de commerce interdit de soumettre l'autre partie a des obligations creant un desequilibre significatif, meme entre professionnels. La clause imposant au fournisseur de supporter seul tous les risques cree un tel desequilibre.",
        context: "SuperMarche+, grande enseigne de distribution, impose a un petit fournisseur de produits laitiers la clause suivante : 'En cas d'invendus, le fournisseur reprendra l'integralite des marchandises a ses frais et remboursera le prix d'achat.' Le fournisseur conteste cette clause."
    },
    {
        question: "La societe TransRapide peut-elle invoquer le fait d'un tiers pour s'exonerer de sa responsabilite ?",
        options: [
            "Non, car le fait d'un tiers n'est jamais une cause d'exoneration",
            "Oui, car l'accident cause par un autre vehicule est un fait d'un tiers imprevisible, irresistible et exterieur",
            "Non, car le transporteur a toujours une obligation de moyens",
            "Oui, mais uniquement si le chauffeur du camion n'a pas ete blesse"
        ],
        answer: 1,
        explanation: "TransRapide peut invoquer le fait d'un tiers comme cause d'exoneration. L'accident cause par un chauffard ivre est imprevisible, irresistible et exterieur a TransRapide, ce qui remplit les criteres pour cette cause d'exoneration.",
        context: "La societe TransRapide devait livrer des marchandises fragiles. Le camion de livraison a ete percute par un chauffard ivre sur l'autoroute, detruisant la totalite de la cargaison. Le client reclame une indemnisation a TransRapide."
    },
    {
        question: "L'entreprise BatiBeton peut-elle poursuivre l'execution forcee en nature de l'obligation du fournisseur ?",
        options: [
            "Non, car le contrat est automatiquement resilie",
            "Oui, c'est l'une des 5 sanctions prevues par l'article 1217 du code civil, mais une mise en demeure prealable est necessaire",
            "Non, car seul le juge peut decider de l'execution forcee",
            "Oui, sans aucune condition prealable"
        ],
        answer: 1,
        explanation: "L'execution forcee en nature est bien l'une des 5 sanctions de l'article 1217 du code civil. BatiBeton peut contraindre le fournisseur a livrer le beton, mais elle doit d'abord lui adresser une mise en demeure.",
        context: "BatiBeton a commande 100 tonnes de beton a un fournisseur pour un chantier urgent. Le fournisseur refuse de livrer pretextant une hausse de ses couts. BatiBeton souhaite le contraindre a executer le contrat."
    },
    {
        question: "Mme Fabre peut-elle demander la resolution du contrat et des dommages-interets ?",
        options: [
            "Non, car elle doit choisir entre la resolution et les dommages-interets",
            "Oui, car l'article 1217 du code civil permet de cumuler la resolution du contrat et la demande de reparation des consequences de l'inexecution",
            "Non, car seul le professionnel peut demander la resolution",
            "Oui, mais uniquement si le prejudice depasse 10 000 euros"
        ],
        answer: 1,
        explanation: "L'article 1217 du code civil prevoit que les sanctions peuvent se cumuler si elles ne sont pas incompatibles. Mme Fabre peut donc provoquer la resolution du contrat et egalement demander reparation des consequences de l'inexecution (dommages-interets).",
        context: "Mme Fabre a commande une cuisine equipee sur mesure aupres de la societe CuisinePro pour un montant de 15 000 euros. Apres plusieurs mois de retard et une installation defectueuse (meubles mal fixes, plan de travail fissure), elle souhaite annuler le contrat et obtenir des dommages-interets pour le prejudice subi."
    }
]);

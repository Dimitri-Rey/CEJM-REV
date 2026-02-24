// ========== ANGLAIS A2 — EXPRESSION PROFESSIONNELLE ==========
// Incident reports, emails pros, présentations, compréhension documents IT

registerQuiz('anglais-a2', 'knowledge', [
    {
        question: "Dans un incident report en anglais, que doit contenir la section 'Root Cause Analysis' ?",
        options: [
            "La liste des personnes responsables de l'incident",
            "L'identification de la cause profonde qui a déclenché l'incident",
            "Les dommages financiers causés par l'incident",
            "Le plan de communication vers les clients"
        ],
        answer: 1,
        explanation: "'Root Cause Analysis' (RCA) = analyse des causes profondes. On cherche POURQUOI, pas juste QUOI. Ex : 'Root cause: misconfigured firewall rule allowed unauthorized access.' C'est le cœur d'un post-mortem (blameless).",
        context: ""
    },
    {
        question: "Comment formule-t-on poliment une demande urgente dans un email professionnel en anglais ?",
        options: [
            "'Do it now!'",
            "'I need this ASAP!'",
            "'Could you please prioritize this request? It is time-sensitive.'",
            "'This is urgent! Fix it!'"
        ],
        answer: 2,
        explanation: "'Could you please...' = formule polie de demande. 'Time-sensitive' = urgent de façon professionnelle. En IT pro : éviter 'ASAP' seul (perçu comme agressif). Préférer : 'by end of day' ou 'by [date]' avec une justification.",
        context: ""
    },
    {
        question: "Que signifie 'ETA' dans un contexte IT professionnel ?",
        options: [
            "Error Tracking Application",
            "Estimated Time of Arrival (délai estimé de résolution)",
            "Emergency Technical Alert",
            "External Technical Audit"
        ],
        answer: 1,
        explanation: "'ETA' = Estimated Time of Arrival = délai estimé. 'What's the ETA on the fix?' = Quand sera résolu le problème ? Utilisé dans les tickets de support, les réunions de crise, les communications client pendant un incident.",
        context: ""
    },
    {
        question: "Quelle structure suit un 'post-mortem' (ou 'retrospective') en anglais ?",
        options: [
            "Blame → Punishment → Prevention",
            "What happened → Timeline → Root cause → Impact → Action items",
            "Problem → Solution → Implementation",
            "Summary → Details → Conclusion"
        ],
        answer: 1,
        explanation: "Post-mortem structure : What happened (résumé) → Timeline (chronologie) → Root Cause → Impact → Action items (mesures correctives). Principe 'blameless' : pas de blame individuel, focus sur l'amélioration systémique.",
        context: ""
    },
    {
        question: "Comment dit-on 'mise en production' en anglais ?",
        options: [
            "Go to work", "Release to production / Deploy to production", "Product launch", "System activation"
        ],
        answer: 1,
        explanation: "'Deploy to production' ou 'release to production' = mise en production. 'We're releasing v2.1 to production tonight at 2AM.' Le mot 'release' est aussi utilisé pour les versions logicielles : 'release notes' = notes de version.",
        context: ""
    },
    {
        question: "Dans un README.md GitHub, que contient traditionnellement la section 'Getting Started' ?",
        options: [
            "La liste des contributeurs du projet",
            "Les instructions pour installer et lancer le projet rapidement",
            "L'historique des versions du projet",
            "Les bugs connus du projet"
        ],
        answer: 1,
        explanation: "'Getting Started' = démarrage rapide. Contient : pré-requis (Prerequisites), installation (Installation), premier lancement (Quick Start). Structure README typique : Description → Getting Started → Usage → Contributing → License.",
        context: ""
    },
    {
        question: "Comment rédige-t-on un titre d'email professionnel IT efficace ?",
        options: [
            "[URGENT] Please read",
            "[ACTION REQUIRED] Server outage — Production DB down — ETA 30min",
            "Problem with the server",
            "Hi team"
        ],
        answer: 1,
        explanation: "Bon objet email IT : [ACTION/INFO] + Sujet précis + Impact + ETA si possible. '[ACTION REQUIRED]' = action attendue. 'Server outage' = précis. 'Production DB' = scope. 'ETA 30min' = temporel. Éviter les sujets vagues.",
        context: ""
    },
    {
        question: "Que signifie 'I'll loop in [person]' dans une communication d'équipe ?",
        options: [
            "Je vais remplacer cette personne",
            "J'ajoute cette personne en copie/dans la conversation",
            "Je vais présenter cette personne à l'équipe",
            "Je vais supprimer cette personne du projet"
        ],
        answer: 1,
        explanation: "'Loop in' = inclure, mettre dans la boucle. 'I'll loop in Sarah, she's the SME (Subject Matter Expert) on this.' En email : mettre en CC. 'SME' = expert du domaine. 'FYI' (For Your Information) = pour info, sans action requise.",
        context: ""
    },
    {
        question: "Comment formule-t-on un 'action item' dans un compte-rendu de réunion ?",
        options: [
            "Someone should do something about X",
            "[Owner: John] [Deadline: 2026-03-01] Review firewall logs and report findings",
            "We talked about X and decided to fix it",
            "Action: fix the issue"
        ],
        answer: 1,
        explanation: "Action item efficace = [Owner] + [Deadline] + Description précise + Deliverable. 'We decided to fix it' = trop vague. 'John will review firewall logs by March 1st and share findings with the team' = actionnable, mesurable.",
        context: ""
    },
    {
        question: "Dans le contexte d'un changelog (notes de version), que signifie 'BREAKING CHANGE' ?",
        options: [
            "Une fonctionnalité cassée qui sera corrigée",
            "Un changement incompatible avec les versions précédentes",
            "Un changement de performance sans impact",
            "Une nouvelle fonctionnalité ajoutée"
        ],
        answer: 1,
        explanation: "'BREAKING CHANGE' = changement qui casse la compatibilité ascendante. Les clients qui utilisent l'ancienne version devront adapter leur code. Dans le versioning sémantique (SemVer), un breaking change = incrément de version majeure (v1.x → v2.0).",
        context: ""
    },
    {
        question: "Que signifie 'SLA' dans un contexte professionnel IT ?",
        options: [
            "Security Level Architecture",
            "Service Level Agreement (accord sur le niveau de service)",
            "System Log Analysis",
            "Software License Agreement"
        ],
        answer: 1,
        explanation: "'SLA' = Service Level Agreement = accord sur le niveau de service. Définit les engagements du prestataire : disponibilité (uptime), temps de réponse aux incidents, pénalités en cas de non-respect. 'Our SLA guarantees 99.9% uptime.'",
        context: ""
    },
    {
        question: "Comment dit-on 'journalisation' (logs) en anglais dans un contexte professionnel ?",
        options: [
            "Journaling", "Logging", "Recording", "Tracking"
        ],
        answer: 1,
        explanation: "'Logging' = journalisation. 'Log file' = fichier de journalisation. 'Enable logging' = activer les logs. 'Log rotation' = rotation des fichiers de log. 'Centralized logging' = centraliser les logs (ex : ELK Stack = Elasticsearch + Logstash + Kibana).",
        context: ""
    },
    {
        question: "Dans un oral professionnel en anglais, comment structurer une présentation technique ?",
        options: [
            "Plonger directement dans les détails techniques",
            "Hook → Context → Problem → Solution → Demo → Q&A",
            "Lire ses slides mot à mot",
            "Commencer par les conclusions"
        ],
        answer: 1,
        explanation: "Structure pitch/présentation IT : Hook (accroche) → Context (pourquoi c'est important) → Problem (le problème) → Solution (notre approche) → Demo (montrer, pas juste dire) → Q&A. Règle du 10-20-30 de Guy Kawasaki : 10 slides, 20 minutes, 30pt font.",
        context: ""
    },
    {
        question: "Que veut dire 'EOD' dans un email professionnel ?",
        options: [
            "Error on Disk", "End of Day (fin de journée)", "End of Discussion", "Estimated On Delivery"
        ],
        answer: 1,
        explanation: "'EOD' = End of Day. 'Please send me the report by EOD Friday' = envoie-moi le rapport avant la fin de journée vendredi. Autres acronymes courants : COB (Close of Business), EOM (End of Month), EOW (End of Week), FYI, ASAP, TL;DR.",
        context: ""
    },
    {
        question: "Quelle phrase décrit le mieux un 'workaround' ?",
        options: [
            "La solution définitive et correcte à un problème",
            "Une solution temporaire permettant de contourner un problème en attendant le vrai fix",
            "Un outil de monitoring réseau",
            "Un script d'automatisation"
        ],
        answer: 1,
        explanation: "'Workaround' = contournement temporaire. 'There's no fix yet, but here's a workaround...' = pas de solution permanente mais voici comment contourner. Différent de 'fix' (correction permanente) ou 'patch' (correction de sécurité).",
        context: ""
    }
]);

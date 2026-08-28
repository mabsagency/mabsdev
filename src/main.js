import './style.css'

// Système de traduction complet
const translations = {
  fr: {
    nav_projects: 'Projets',
    nav_expertise: 'Expertise',
    nav_contact: 'Contact',
    nav_certifications: 'Certifications',
    nav_stack: 'Stack',
    nav_cv: 'CV',
    skip_to_content: 'Aller au contenu',
    nav_label: 'Navigation principale',
    menu_open: 'Ouvrir le menu',
    menu_close: 'Fermer le menu',
    header_cta: 'Parlons projet',
    hero_eyebrow: 'Développeur créatif · CAMEROUN / Remote',
    hero_h1_part1: 'Je donne',
    hero_h1_part2: 'du caractère',
    hero_h1_part3: 'au digital.',
    hero_text: 'Je suis <strong>Mabou Yanis</strong>, alias Mabs Dev. Je conçois des expériences web singulières, rapides et pensées pour marquer les esprits.',
    hero_btn_projects: 'Découvrir mes projets',
    hero_btn_contact: 'Me contacter',
    work_eyebrow: '03 / Sélection',
    work_h2_part1: 'Des idées qui',
    work_h2_part2: 'prennent vie.',
    work_intro: 'Quelques projets où stratégie, design et code avancent dans la même direction.',
    work_more: 'Voir les autres projets',
    work_less: 'Masquer les autres projets',
    contribution_eyebrow: '04 / Contributions',
    contribution_h2_part1: 'Créer à plusieurs,',
    contribution_h2_part2: 'aller plus loin.',
    contribution_intro: 'Un projet d’équipe où chaque compétence contribue à une expérience plus forte.',
    about_eyebrow: '01 / À propos de Mabs Dev',
    about_h2_part1: 'Le beau, c\'est bien.',
    about_h2_part2: 'Le juste, c\'est mieux.',
    about_text: 'J\'aime les interfaces qui ont une voix. Mon approche mélange curiosité, précision et une obsession pour les détails qui font la différence.',
    certif_eyebrow: '05 / Certifications',
    certif_h2_part1: 'Des preuves',
    certif_h2_part2: 'qui comptent.',
    certif_intro: 'Un espace pour présenter tes formations, diplômes et certifications design.',
    cv_eyebrow: '06 / Parcours',
    cv_h2_part1: 'Mon parcours,',
    cv_h2_part2: 'en un document.',
    cv_text: 'Découvre mon expérience, mes compétences et les projets qui construisent mon profil.',
    cv_btn: 'Télécharger mon CV',
    stack_eyebrow: '02 / Stack',
    stack_h2_part1: 'Mes outils',
    stack_h2_part2: 'pour créer.',
    stack_text: 'Une boîte à outils pensée pour passer d\'une idée claire à une expérience qui fonctionne vraiment.',
    stack_signature: 'MABS DEV / TOOLKIT 2026',
    stack_metric_tools: '09 outils',
    stack_metric_domains: '04 domaines',
    stack_metric_focus: '100% curiosité',
    skill_desc_figma: 'Outil de conception d\'interfaces : créer des maquettes, des prototypes interactifs et des composants réutilisables en équipe.',
    skill_desc_flutter: 'Framework Google basé sur Dart : développer une même interface pour Android, iOS, le web et le desktop avec un rendu natif.',
    skill_desc_html: 'Langage de structure : organiser le contenu avec une sémantique accessible, des formulaires compréhensibles et une base solide pour le SEO.',
    skill_desc_css: 'Langage de présentation : contrôler la mise en page, les couleurs, la typographie, les animations et l\'adaptation à chaque écran.',
    skill_desc_javascript: 'Langage d\'interaction du web : gérer les événements, manipuler le DOM, appeler des APIs et créer des interfaces dynamiques.',
    skill_desc_python: 'Langage polyvalent : automatiser des tâches, construire des APIs, traiter des données et développer des applications côté serveur.',
    skill_desc_dart: 'Langage optimisé pour Flutter : écrire une base de code typée et performante pour des applications multiplateformes.',
    skill_desc_laravel: 'Framework PHP serveur : structurer des applications avec routage, authentification, base de données, validation et APIs.',
    skill_desc_flask: 'Micro-framework Python : créer rapidement des APIs et des services web modulaires en gardant le contrôle sur l\'architecture.',
    skill_desc_php: 'Langage serveur : générer des pages dynamiques, traiter les données et connecter une application web à une base de données.',
    'skill_desc_next.js': 'Framework React orienté production : créer des applications web rapides avec routage, rendu serveur, génération statique et optimisation des images.',
    skill_desc_react: 'Bibliothèque JavaScript d\'interface : composer des écrans réutilisables avec des composants, gérer leur état et construire des expériences interactives.',
    contact_eyebrow: '07 / On commence ?',
    contact_h2_part1: 'Un projet en tête ?',
    contact_h2_part2: 'Faisons-le exister.',
    contact_footer_copyright: '© 2026 MABS DEV',
    contact_footer_social: 'Instagram&nbsp; / &nbsp;LinkedIn&nbsp; / &nbsp;GitHub',
    contact_footer_motto: 'Fait avec intention.',
    legal_eyebrow: 'Mentions légales',
    legal_title: 'Informations légales.',
    legal_editor_title: 'Éditeur du site',
    legal_editor_text: 'Mabs Dev, portfolio de Mabou Yanis. Contact : mabsdevfullstack@gmail.com',
    legal_host_title: 'Hébergement',
    legal_host_text: 'Hébergement : Vercel Inc. Le site est déployé et distribué via la plateforme Vercel. Adresse de l’éditeur à compléter si nécessaire.',
    legal_ip_title: 'Propriété intellectuelle',
    legal_ip_text: 'Les textes, visuels et éléments graphiques de ce site sont protégés. Toute reproduction non autorisée est interdite.',
    legal_data_title: 'Données personnelles',
    legal_data_text: 'Ce site n’utilise pas de formulaire ni de cookies publicitaires. Le choix de langue est enregistré localement dans votre navigateur.',
    project_desc_burger: 'Burgers premium · Site officiel',
    project_desc_bronuts: 'Brownies et donuts artisanaux · E-commerce',
    project_desc_mused: 'Moodboards par IA · Produit pour designers',
    project_desc_secel: 'Expérience digitale · Site vitrine',
    project_desc_fos: 'Conseil · Site institutionnel',
    project_desc_afri_flow: 'Expérience digitale · Plateforme web',
    project_desc_docu_ai: 'Documents intelligents · Application web',
    project_label_burger: 'Burger premium / 2026',
    project_label_bronuts: 'Desserts artisanaux / Douala',
    project_label_mused: 'AI moodboards / 2024',
    project_label_secel: 'Site vitrine / 2026',
    project_label_fos: 'Consulting / 2026',
    project_label_afri_flow: 'Plateforme web / 2026',
    project_label_docu_ai: 'AI document tools / 2026',
    contribution_type_mused: 'Projet d’équipe · Produit digital',
    contribution_desc_mused: 'Recherche, direction UI et expérience moodboard assistée par IA.',
    contribution_type_secel: 'Projet d’équipe · Site vitrine',
    contribution_desc_secel: 'Conception d’une présence digitale claire, structurée et accessible.',
    contribution_team_product: 'Projet d’équipe · Produit digital',
    contribution_mused_desc: 'Recherche, direction UI et expérience moodboard assistée par IA.',
    contribution_team_showcase: 'Projet d’équipe · Site vitrine',
    contribution_secel_desc: 'Conception d’une présence digitale claire, structurée et accessible.',
    certification_verified: 'Vérifiée',
    certification_type: 'Certification professionnelle',
    certification_name: 'Certification Mabs Dev',
    certification_open: 'Afficher la certification',
    certification_hint: 'Cliquer sur la flèche pour agrandir',
  },
  en: {
    nav_projects: 'Projects',
    nav_expertise: 'Expertise',
    nav_contact: 'Contact',
    nav_certifications: 'Certifications',
    nav_stack: 'Stack',
    nav_cv: 'CV',
    skip_to_content: 'Skip to content',
    nav_label: 'Main navigation',
    menu_open: 'Open menu',
    menu_close: 'Close menu',
    header_cta: 'Let\'s discuss your project',
    hero_eyebrow: 'Creative Developer · CAMEROON / Remote',
    hero_h1_part1: 'I give',
    hero_h1_part2: 'character',
    hero_h1_part3: 'to digital.',
    hero_text: 'I\'m <strong>Mabou Yanis</strong>, aka Mabs Dev. I design singular web experiences, fast and designed to leave an impression.',
    hero_btn_projects: 'Discover my projects',
    hero_btn_contact: 'Contact me',
    work_eyebrow: '03 / Selection',
    work_h2_part1: 'Ideas that',
    work_h2_part2: 'come to life.',
    work_intro: 'A few projects where strategy, design and code move in the same direction.',
    work_more: 'See more projects',
    work_less: 'Hide extra projects',
    contribution_eyebrow: '04 / Contributions',
    contribution_h2_part1: 'Create together,',
    contribution_h2_part2: 'go further.',
    contribution_intro: 'A team project where every skill contributes to a stronger experience.',
    about_eyebrow: '01 / About Mabs Dev',
    about_h2_part1: 'Beauty is good.',
    about_h2_part2: 'Justice is better.',
    about_text: 'I love interfaces that have a voice. My approach blends curiosity, precision and an obsession with details that make the difference.',
    certif_eyebrow: '05 / Certifications',
    certif_h2_part1: 'Proofs',
    certif_h2_part2: 'that matter.',
    certif_intro: 'A space to showcase your training, diplomas and design certifications.',
    cv_eyebrow: '06 / Journey',
    cv_h2_part1: 'My journey,',
    cv_h2_part2: 'in one document.',
    cv_text: 'Discover my experience, skills and projects that build my profile.',
    cv_btn: 'Download my CV',
    stack_eyebrow: '02 / Stack',
    stack_h2_part1: 'My tools',
    stack_h2_part2: 'to create.',
    stack_text: 'A toolkit designed to go from a clear idea to an experience that really works.',
    stack_signature: 'MABS DEV / TOOLKIT 2026',
    stack_metric_tools: '09 tools',
    stack_metric_domains: '04 domains',
    stack_metric_focus: '100% curiosity',
    skill_desc_figma: 'Interface design tool: create mockups, interactive prototypes and reusable components collaboratively.',
    skill_desc_flutter: 'Google framework built on Dart: ship one interface for Android, iOS, web and desktop with a native-rendered UI.',
    skill_desc_html: 'Structure language: organize content with accessible semantics, clear forms and a strong foundation for SEO.',
    skill_desc_css: 'Presentation language: control layout, colors, typography, animation and the way an interface adapts to every screen.',
    skill_desc_javascript: 'The web interaction language: handle events, manipulate the DOM, call APIs and build dynamic interfaces.',
    skill_desc_python: 'General-purpose language: automate tasks, build APIs, process data and develop server-side applications.',
    skill_desc_dart: 'Language optimized for Flutter: write typed, performant codebases for cross-platform applications.',
    skill_desc_laravel: 'PHP server framework: structure applications with routing, authentication, databases, validation and APIs.',
    skill_desc_flask: 'Python micro-framework: build lightweight, modular APIs and web services while keeping architectural control.',
    skill_desc_php: 'Server-side language: render dynamic pages, process data and connect web applications to databases.',
    'skill_desc_next.js': 'Production-ready React framework: build fast web applications with routing, server rendering, static generation and image optimization.',
    skill_desc_react: 'JavaScript UI library: compose reusable screens with components, manage their state and build interactive experiences.',
    contact_eyebrow: '07 / Ready to start?',
    contact_h2_part1: 'Got a project in mind?',
    contact_h2_part2: 'Let\'s make it happen.',
    contact_footer_copyright: '© 2026 MABS DEV',
    contact_footer_social: 'Instagram&nbsp; / &nbsp;LinkedIn&nbsp; / &nbsp;GitHub',
    contact_footer_motto: 'Made with intention.',
    legal_eyebrow: 'Legal information',
    legal_title: 'Legal information.',
    legal_editor_title: 'Website publisher',
    legal_editor_text: 'Mabs Dev, portfolio of Mabou Yanis. Contact: mabsdevfullstack@gmail.com',
    legal_host_title: 'Hosting',
    legal_host_text: 'Hosting: Vercel Inc. The website is deployed and delivered through the Vercel platform. Publisher address to be completed if required.',
    legal_ip_title: 'Intellectual property',
    legal_ip_text: 'The texts, visuals and graphic elements on this website are protected. Any unauthorized reproduction is prohibited.',
    legal_data_title: 'Personal data',
    legal_data_text: 'This site uses no form or advertising cookies. The language choice is stored locally in your browser.',
    project_desc_burger: 'Premium burgers · Official website',
    project_desc_bronuts: 'Artisan brownies and donuts · E-commerce',
    project_desc_mused: 'AI moodboards · Product for designers',
    project_desc_secel: 'Digital experience · Showcase website',
    project_desc_fos: 'Consulting · Institutional website',
    project_desc_afri_flow: 'Digital experience · Web platform',
    project_desc_docu_ai: 'Smart documents · Web application',
    project_label_burger: 'Premium burger / 2026',
    project_label_bronuts: 'Artisan desserts / Douala',
    project_label_mused: 'AI moodboards / 2024',
    project_label_secel: 'Showcase website / 2026',
    project_label_fos: 'Consulting / 2026',
    project_label_afri_flow: 'Web platform / 2026',
    project_label_docu_ai: 'AI document tools / 2026',
    contribution_type_mused: 'Team project · Digital product',
    contribution_desc_mused: 'Research, UI direction and AI-assisted moodboard experience.',
    contribution_type_secel: 'Team project · Showcase website',
    contribution_desc_secel: 'Designing a clear, structured and accessible digital presence.',
    contribution_team_product: 'Team project · Digital product',
    contribution_mused_desc: 'Research, UI direction and AI-assisted moodboard experience.',
    contribution_team_showcase: 'Team project · Showcase website',
    contribution_secel_desc: 'Designing a clear, structured and accessible digital presence.',
    certification_verified: 'Verified',
    certification_type: 'Professional certification',
    certification_name: 'Mabs Dev certification',
    certification_open: 'View certification',
    certification_hint: 'Click the arrow to enlarge',
  }
}

let currentLang = localStorage.getItem('language') || 'fr'
const t = (key) => translations[currentLang][key] || key

function renderContent() {
  document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#work">${t('skip_to_content')}</a>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Mabs Dev, accueil"><img class="brand-mark" src="/image/mabou2.webp" alt="Mabs Dev" width="40" height="40"><strong>&lt;MABS<span> DEV/&gt;</span></strong></a>
    <nav class="desktop-nav" id="site-nav" aria-label="${t('nav_label')}"><a href="#about">${t('nav_expertise')}</a><a href="#stack">${t('nav_stack')}</a><a href="#work">${t('nav_projects')}</a><a href="#certifications">${t('nav_certifications')}</a><a href="#cv">${t('nav_cv')}</a><a href="#contact">${t('nav_contact')}</a></nav>
    <div class="header-actions">
      <a class="header-cta" href="#contact">${t('header_cta')} <span>↗</span></a>
      <button class="lang-toggle" aria-label="Toggle language">${currentLang === 'fr' ? 'EN' : 'FR'}</button>
    </div>
    <button class="menu-toggle" aria-label="${t('menu_open')}" aria-controls="site-nav" aria-expanded="false"><span></span><span></span></button>
  </header>
  <main id="top">
    <section class="hero section-pad"><div class="hero-copy reveal"><p class="eyebrow"><span class="eyebrow-dot"></span> ${t('hero_eyebrow')}</p><h1>${t('hero_h1_part1')}<br><em>${t('hero_h1_part2')}</em><br>${t('hero_h1_part3')}</h1><p class="hero-text">${t('hero_text')}</p><div class="hero-actions"><a class="button button-dark" href="#work">${t('hero_btn_projects')} <span>↘</span></a><a class="text-link" href="#contact">${t('hero_btn_contact')} <span>↗</span></a></div><div class="hero-socials"><a href="https://instagram.com" aria-label="Instagram" class="social-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a><a href="https://linkedin.com" aria-label="LinkedIn" class="social-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 8.8H2.8V21h2.4V8.8ZM4 3a1.9 1.9 0 1 0 0 3.8A1.9 1.9 0 0 0 4 3ZM8.6 8.8H11v1.7h.1c.3-.7 1.3-2 3.7-2 3 0 3.5 2 3.5 4.7V21h-2.4v-6.9c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V21H8.6V8.8Z" fill="currentColor"/></svg></a><a href="https://github.com" aria-label="GitHub" class="social-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.4.7 1 .7 2v2.7c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z" fill="currentColor"/></svg></a></div></div><div class="hero-art reveal reveal-delay" aria-label="Portrait abstrait de Mabs Dev"><div class="art-grid"></div><div class="art-circle"></div></div></section>
    <div class="ticker" aria-hidden="true"><div>DESIGN &nbsp;✦&nbsp; DEVELOPMENT &nbsp;✦&nbsp; DIGITAL CRAFT &nbsp;✦&nbsp; FIGMA &nbsp;✦&nbsp; FLUTTER &nbsp;✦&nbsp; HTML &nbsp;✦&nbsp; CSS &nbsp;✦&nbsp; JAVASCRIPT &nbsp;✦&nbsp; PYTHON &nbsp;✦&nbsp; DART &nbsp;✦&nbsp; LARAVEL &nbsp;✦&nbsp; FLASK &nbsp;✦&nbsp; DESIGN &nbsp;✦&nbsp; DEVELOPMENT &nbsp;✦&nbsp; DIGITAL CRAFT &nbsp;✦&nbsp; FIGMA &nbsp;✦&nbsp; FLUTTER &nbsp;✦&nbsp; HTML &nbsp;✦&nbsp; CSS &nbsp;✦&nbsp; JAVASCRIPT &nbsp;✦&nbsp; PYTHON &nbsp;✦&nbsp; DART &nbsp;✦&nbsp; LARAVEL &nbsp;✦&nbsp; FLASK &nbsp;✦&nbsp;</div></div>
      <div class="ticker" aria-hidden="true"><div>DESIGN &nbsp;✦&nbsp; DEVELOPMENT &nbsp;✦&nbsp; DIGITAL CRAFT &nbsp;✦&nbsp; FIGMA &nbsp;✦&nbsp; FLUTTER &nbsp;✦&nbsp; HTML &nbsp;✦&nbsp; CSS &nbsp;✦&nbsp; JAVASCRIPT &nbsp;✦&nbsp; PYTHON &nbsp;✦&nbsp; DART &nbsp;✦&nbsp; LARAVEL &nbsp;✦&nbsp; FLASK &nbsp;✦&nbsp; PHP &nbsp;✦&nbsp; DESIGN &nbsp;✦&nbsp; DEVELOPMENT &nbsp;✦&nbsp; DIGITAL CRAFT &nbsp;✦&nbsp; FIGMA &nbsp;✦&nbsp; FLUTTER &nbsp;✦&nbsp; HTML &nbsp;✦&nbsp; CSS &nbsp;✦&nbsp; JAVASCRIPT &nbsp;✦&nbsp; PYTHON &nbsp;✦&nbsp; DART &nbsp;✦&nbsp; LARAVEL &nbsp;✦&nbsp; FLASK &nbsp;✦&nbsp; PHP &nbsp;✦&nbsp;</div></div>
    <section class="work section-pad" id="work"><div class="section-heading reveal"><p class="eyebrow">${t('work_eyebrow')}</p><h2>${t('work_h2_part1')}<br><em>${t('work_h2_part2')}</em></h2><p class="section-intro">${t('work_intro')}</p></div><div class="project-carousel"><div class="project-viewport"><div class="project-pages"><div class="project-page"><div class="project-grid"><article class="project project-large reveal"><div class="project-visual visual-one"><span class="visual-word">BURGER</span><span class="visual-caption">Burger premium / 2026</span></div><div class="project-meta"><div><h3>BURGER</h3><p>Burgers premium · Site officiel</p></div><a class="round-arrow" href="#contact" aria-label="Voir le projet Burger">↗</a></div></article><article class="project reveal reveal-delay-2"><div class="project-visual visual-two"><span class="visual-word">BRONUTS</span><span class="visual-caption">Desserts artisanaux / Douala</span></div><div class="project-meta"><div><h3>Bronuts</h3><p>Brownies et donuts artisanaux · E-commerce</p></div><a class="round-arrow" href="#contact" aria-label="Voir le projet Bronuts">↗</a></div></article><article class="project reveal reveal-delay-2"><div class="project-visual visual-three"><span class="visual-word">MUSED</span><span class="visual-caption">AI moodboards / 2024</span></div><div class="project-meta"><div><h3>Mused</h3><p>Moodboards par IA · Produit pour designers</p></div><a class="round-arrow" href="#contact" aria-label="Voir le projet Mused">↗</a></div></article></div></div><div class="project-page"><div class="project-grid"><article class="project reveal"><div class="project-visual visual-two"><span class="visual-word">SECEL</span><span class="visual-caption">Site vitrine / 2026</span></div><div class="project-meta"><div><h3>SECEL</h3><p>Expérience digitale · Site vitrine</p></div><a class="round-arrow" href="#contact" aria-label="Voir le projet SECEL">↗</a></div></article><article class="project reveal reveal-delay-2"><div class="project-visual visual-three"><span class="visual-word">FOS</span><span class="visual-caption">Consulting / 2026</span></div><div class="project-meta"><div><h3>FOS Consulting</h3><p>Conseil · Site institutionnel</p></div><a class="round-arrow" href="#contact" aria-label="Voir le projet FOS Consulting">↗</a></div></article></div></div></div></div><div class="project-controls"><button class="carousel-arrow carousel-previous" type="button" aria-label="Projets précédents">←</button><span class="carousel-status" aria-live="polite">01 / 02</span><button class="carousel-arrow carousel-next" type="button" aria-label="Projets suivants">→</button></div></div></section>
    <section class="contributions section-pad" id="contributions"><div class="section-heading reveal"><p class="eyebrow">${t('contribution_eyebrow')}</p><h2>${t('contribution_h2_part1')}<br><em>${t('contribution_h2_part2')}</em></h2><p class="section-intro">${t('contribution_intro')}</p></div><div class="contribution-grid"><article class="contribution-card reveal"><span class="contribution-index">01</span><div><p class="contribution-type">${t('contribution_team_product')}</p><h3>Mused</h3><p>${t('contribution_mused_desc')}</p></div><a class="round-arrow" href="https://mused-tau.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="${t('contribution_mused_desc')}">↗</a></article><article class="contribution-card reveal reveal-delay"><span class="contribution-index">02</span><div><p class="contribution-type">${t('contribution_team_showcase')}</p><h3>SECEL</h3><p>${t('contribution_secel_desc')}</p></div><a class="round-arrow" href="https://secel.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="${t('contribution_secel_desc')}">↗</a></article></div></section>
    <section class="about section-pad" id="about"><div class="about-number reveal">02</div><div class="about-content reveal"><p class="eyebrow">${t('about_eyebrow')}</p><h2>${t('about_h2_part1')}<br><em>${t('about_h2_part2')}</em></h2><p>${t('about_text')}</p><div class="skill-list" aria-label="Technologies apprises"><button class="key key-orange" type="button" data-title="FIGMA" data-description="Concevoir des maquettes, des prototypes et des systèmes d'interface collaboratifs.">FIGMA</button><button class="key" type="button" data-title="FLUTTER" data-description="Créer des applications mobiles et web multiplateformes avec une interface unique.">FLUTTER</button><button class="key" type="button" data-title="HTML" data-description="Structurer le contenu d'une page web pour le rendre clair, accessible et sémantique.">HTML</button><button class="key" type="button" data-title="CSS" data-description="Donner vie aux interfaces avec la mise en page, les couleurs, les animations et le responsive.">CSS</button><button class="key" type="button" data-title="JAVASCRIPT" data-description="Ajouter de l'interactivité et des comportements dynamiques aux expériences web.">JAVASCRIPT</button><button class="key" type="button" data-title="PYTHON" data-description="Développer des scripts, des outils, des APIs et des applications avec une syntaxe expressive.">PYTHON</button><button class="key" type="button" data-title="DART" data-description="Programmer des applications performantes, notamment avec l'écosystème Flutter.">DART</button><button class="key" type="button" data-title="LARAVEL" data-description="Construire des applications web robustes côté serveur avec l'écosystème PHP.">LARAVEL</button><button class="key" type="button" data-title="FLASK" data-description="Créer des APIs et des applications web Python légères et flexibles.">FLASK</button></div><div class="skill-description"><span class="skill-description-title">FIGMA</span><p class="skill-description-text">Concevoir des maquettes, des prototypes et des systèmes d'interface collaboratifs.</p></div></div></section>
      <section class="about section-pad" id="about"><div class="about-number reveal">02</div><div class="about-content reveal"><p class="eyebrow">${t('about_eyebrow')}</p><h2>${t('about_h2_part1')}<br><em>${t('about_h2_part2')}</em></h2><p>${t('about_text')}</p><div class="skill-list" aria-label="Technologies apprises"><button class="key key-orange" type="button" data-title="FIGMA" data-description="Concevoir des maquettes, des prototypes et des systèmes d'interface collaboratifs.">FIGMA</button><button class="key" type="button" data-title="FLUTTER" data-description="Créer des applications mobiles et web multiplateformes avec une interface unique.">FLUTTER</button><button class="key" type="button" data-title="HTML" data-description="Structurer le contenu d'une page web pour le rendre clair, accessible et sémantique.">HTML</button><button class="key" type="button" data-title="CSS" data-description="Donner vie aux interfaces avec la mise en page, les couleurs, les animations et le responsive.">CSS</button><button class="key" type="button" data-title="JAVASCRIPT" data-description="Ajouter de l'interactivité et des comportements dynamiques aux expériences web.">JAVASCRIPT</button><button class="key" type="button" data-title="PYTHON" data-description="Développer des scripts, des outils, des APIs et des applications avec une syntaxe expressive.">PYTHON</button><button class="key" type="button" data-title="DART" data-description="Programmer des applications performantes, notamment avec l'écosystème Flutter.">DART</button><button class="key" type="button" data-title="LARAVEL" data-description="Construire des applications web robustes côté serveur avec l'écosystème PHP.">LARAVEL</button><button class="key" type="button" data-title="FLASK" data-description="Créer des APIs et des applications web Python légères et flexibles.">FLASK</button><button class="key" type="button" data-title="PHP" data-description="Développer des applications web dynamiques et robustes côté serveur.">PHP</button></div><div class="skill-description"><span class="skill-description-title">FIGMA</span><p class="skill-description-text">Concevoir des maquettes, des prototypes et des systèmes d'interface collaboratifs.</p></div></div></section>
    <section class="certifications section-pad" id="certifications"><div class="section-heading reveal"><p class="eyebrow">${t('certif_eyebrow')}</p><h2>${t('certif_h2_part1')}<br><em>${t('certif_h2_part2')}</em></h2><p class="section-intro">${t('certif_intro')}</p></div><div class="certification-grid"><article class="certification-card reveal"><div class="certification-card-top"><span class="certification-index">01</span><span class="certification-status">${t('certification_verified')}</span></div><div class="certification-preview"><span>DOCUMENT<br>AUTHENTIQUE</span></div><div class="certification-card-content"><p class="certification-type">${t('certification_type')}</p><h3>${t('certification_name')}</h3><p class="certification-meta">Mabs Dev · 2026</p></div><button class="round-arrow certification-preview-button" type="button" aria-label="${t('certification_open')}" title="${t('certification_open')}">↗</button></article></div></section>
    <section class="cv-section section-pad" id="cv"><div class="cv-copy reveal"><p class="eyebrow">${t('cv_eyebrow')}</p><h2>${t('cv_h2_part1')}<br><em>${t('cv_h2_part2')}</em></h2><p>${t('cv_text')}</p></div><a class="cv-download reveal" href="/mabscv.pdf" download="Mabou-Yanis-CV.pdf"><span class="cv-download-label">${t('cv_btn')}</span><span class="cv-download-icon">↓</span></a></section>
    <section class="stack-section section-pad" id="stack"><div class="stack-heading reveal"><p class="eyebrow">${t('stack_eyebrow')}</p><h2>${t('stack_h2_part1')}<br><em>${t('stack_h2_part2')}</em></h2><p>${t('stack_text')}</p><span class="stack-signature">${t('stack_signature')}</span><div class="stack-metrics"><div><strong>09</strong><span>${t('stack_metric_tools')}</span></div><div><strong>04</strong><span>${t('stack_metric_domains')}</span></div><div><strong>∞</strong><span>${t('stack_metric_focus')}</span></div></div></div></section>
    <section class="contact section-pad" id="contact"><p class="eyebrow reveal">${t('contact_eyebrow')}</p><h2 class="reveal">${t('contact_h2_part1')}<br><em>${t('contact_h2_part2')}</em></h2><a class="contact-mail reveal" href="mailto:mabsdevfullstack@gmail.com">mabsdevfullstack@gmail.com <span>↗</span></a><div class="contact-footer"><span>${t('contact_footer_copyright')}</span><span>${t('contact_footer_social')}</span><span>${t('contact_footer_motto')}</span><a href="#legal">${t('legal_eyebrow')}</a></div></section>
    <section class="legal section-pad" id="legal"><div class="legal-heading"><p class="eyebrow">${t('legal_eyebrow')}</p><h2>${t('legal_title')}</h2></div><div class="legal-grid"><article><h3>${t('legal_editor_title')}</h3><p>${t('legal_editor_text')}</p></article><article><h3>${t('legal_host_title')}</h3><p>${t('legal_host_text')}</p></article><article><h3>${t('legal_ip_title')}</h3><p>${t('legal_ip_text')}</p></article><article><h3>${t('legal_data_title')}</h3><p>${t('legal_data_text')}</p></article></div></section>
  </main>
`
  document.querySelectorAll('#about').forEach((section, index) => {
    if (index < document.querySelectorAll('#about').length - 1) section.remove()
  })
  document.querySelectorAll('.ticker').forEach((ticker, index) => {
    if (index < document.querySelectorAll('.ticker').length - 1) ticker.remove()
  })
  const seenNavLinks = new Set()
  document.querySelectorAll('.desktop-nav a').forEach((link) => {
    if (seenNavLinks.has(link.getAttribute('href'))) link.remove()
    else seenNavLinks.add(link.getAttribute('href'))
  })
  setupDOMListeners()
}

function setupDOMListeners() {
  document.querySelectorAll('.contribution-card').forEach((card) => {
    if (card.querySelector('h3')?.textContent.trim() !== 'SECEL') card.remove()
  })
  const contributionIndex = document.querySelector('.contribution-card .contribution-index')
  if (contributionIndex) contributionIndex.textContent = '01'

  document.querySelectorAll('.certification-card').forEach((card) => {
    const preview = card.querySelector('.certification-preview')
    preview.innerHTML = `<img class="certification-image" src="/image/certif1.png" alt="${t('certification_name')}" loading="lazy" decoding="async"><span class="certification-preview-label">${t('certification_hint')}</span>`
  })

  document.querySelector('#certification-dialog')?.remove()
  const certificationDialog = document.createElement('dialog')
  certificationDialog.id = 'certification-dialog'
  certificationDialog.className = 'certification-dialog'
  certificationDialog.innerHTML = `<div class="certification-dialog-content"><button class="certification-dialog-close" type="button" aria-label="${t('menu_close')}">×</button><p class="eyebrow">${t('certification_type')}</p><h2>${t('certification_name')}</h2><img src="/image/certif1.png" alt="${t('certification_name')}"></div>`
  document.body.appendChild(certificationDialog)

  const closeCertificationDialog = () => certificationDialog.close()
  certificationDialog.querySelector('.certification-dialog-close').addEventListener('click', closeCertificationDialog)
  certificationDialog.addEventListener('click', (event) => {
    if (event.target === certificationDialog) closeCertificationDialog()
  })
  document.querySelectorAll('.certification-preview-button').forEach((button) => {
    button.setAttribute('aria-label', t('certification_open'))
    button.addEventListener('click', () => {
      if (!certificationDialog.open) certificationDialog.showModal()
    })
  })

  const projectDetails = [
    { title: 'BURGER', description: t('project_desc_burger'), detail: currentLang === 'fr' ? 'Direction UI et intégration · Parcours de commande clair.' : 'UI direction and integration · Clear ordering journey.', tech: 'HTML · CSS · JavaScript · React', label: t('project_label_burger'), image: '/image/burger.jpg', alt: 'Burger premium avec fromage et garniture fraîche', url: 'https://burgerlab-premium.vercel.app/' },
    { title: 'Bronuts', description: t('project_desc_bronuts'), detail: currentLang === 'fr' ? 'Conception e-commerce · Mise en valeur des produits artisanaux.' : 'E-commerce design · Bringing artisan products forward.', tech: 'HTML · CSS · JavaScript · React', label: t('project_label_bronuts'), image: '/image/bronuts.jpg', alt: 'Brownies et donuts artisanaux Bronuts', url: 'https://bronuts-tan.vercel.app' },
    { title: 'Mused', description: t('project_desc_mused'), detail: currentLang === 'fr' ? 'Recherche et expérience UI · Accélérer la création de moodboards.' : 'Research and UI experience · Speeding up moodboard creation.', tech: 'Next.js · HTML · CSS · JavaScript · SQL', label: t('project_label_mused'), image: '/image/mused.jpg', alt: 'Moodboard minimaliste créé avec Mused', url: 'https://mused-tau.vercel.app' },
    { title: 'SECEL', description: t('project_desc_secel'), detail: currentLang === 'fr' ? 'Conception et développement · Clarifier la présence digitale.' : 'Design and development · Clarifying the digital presence.', tech: 'Next.js · HTML · CSS · JavaScript · SQL', label: t('project_label_secel'), image: '/image/secel.png', alt: 'Interface du site vitrine SECEL', url: 'https://secel.vercel.app/' },
    { title: 'FOS Consulting', description: t('project_desc_fos'), detail: currentLang === 'fr' ? 'Structure de contenu et UI · Renforcer la crédibilité du cabinet.' : 'Content structure and UI · Strengthening the consultancy\'s credibility.', tech: 'Next.js · HTML · CSS · JavaScript · SQL', label: t('project_label_fos'), image: '/image/fos.jpg', alt: 'Bureau avec documents pour FOS Consulting', url: 'https://fos-consulting.vercel.app/' },
    { title: 'Afri Flow', description: t('project_desc_afri_flow'), detail: currentLang === 'fr' ? 'Architecture produit et interface · Simplifier l’accès à la plateforme.' : 'Product architecture and interface · Simplifying platform access.', tech: 'Next.js · HTML · CSS · JavaScript · SQL', label: t('project_label_afri_flow'), image: '/image/afriflow.png', alt: 'Interface de la plateforme digitale Afri Flow', url: 'https://afri-flow-t1hz.vercel.app/' },
    { title: 'Docu AI', description: t('project_desc_docu_ai'), detail: currentLang === 'fr' ? 'Conception d’outil web · Automatiser la gestion documentaire.' : 'Web tool design · Automating document management.', tech: 'Next.js · HTML · CSS · JavaScript · SQL', label: t('project_label_docu_ai'), image: '/image/docu.jpg', alt: 'Documents professionnels et ordinateur pour le projet Docu AI', url: 'https://docu-ai-ten.vercel.app/' },
  ]

  const secondProjectPage = document.querySelectorAll('.project-page')[1]
  const secondProjectGrid = secondProjectPage?.querySelector('.project-grid')
  if (secondProjectGrid && !secondProjectGrid.querySelector('[data-project="afri-flow"]')) {
    secondProjectGrid.insertAdjacentHTML('beforeend', '<article class="project reveal" data-project="afri-flow"><div class="project-visual visual-two"><span class="visual-word">AFRI FLOW</span><span class="visual-caption">Plateforme web / 2026</span></div><div class="project-meta"><div><h3>Afri Flow</h3><p>Expérience digitale · Plateforme web</p></div><a class="round-arrow" href="https://afri-flow-t1hz.vercel.app/" aria-label="Voir le projet Afri Flow">↗</a></div></article>')
  }
  if (secondProjectGrid && !secondProjectGrid.querySelector('[data-project="docu-ai"]')) {
    secondProjectGrid.insertAdjacentHTML('beforeend', '<article class="project reveal" data-project="docu-ai"><div class="project-visual visual-three"><span class="visual-word">DOCU AI</span><span class="visual-caption">AI document tools / 2026</span></div><div class="project-meta"><div><h3>Docu AI</h3><p>Documents intelligents · Application web</p></div><a class="round-arrow" href="https://docu-ai-ten.vercel.app/" aria-label="Voir le projet Docu AI">↗</a></div></article>')
  }

  document.querySelectorAll('.project').forEach((project, index) => {
    const details = projectDetails[index]
    project.dataset.number = String(index + 1).padStart(2, '0')
    project.classList.toggle('project-fos', details.title === 'FOS Consulting')
    const visual = project.querySelector('.project-visual')
    const title = project.querySelector('.project-meta h3')
    const description = project.querySelector('.project-meta p')
    const arrow = project.querySelector('.round-arrow')
    visual.insertAdjacentHTML('afterbegin', `<img class="project-cover" src="${details.image}" alt="${details.alt}" loading="lazy" decoding="async">`)
    visual.querySelector('.visual-word').textContent = details.title.toUpperCase()
    visual.querySelector('.visual-caption').textContent = details.label
    title.textContent = details.title
    description.textContent = details.description
    description.insertAdjacentHTML('afterend', `<span class="project-tech">${details.tech}</span>`)
    description.insertAdjacentHTML('afterend', `<span class="project-detail">${details.detail}</span>`)
    arrow.href = details.url
    arrow.target = '_blank'
    arrow.rel = 'noopener noreferrer'
    arrow.setAttribute('aria-label', `Voir le projet ${details.title}`)
  })

  const menuToggle = document.querySelector('.menu-toggle')
  const nav = document.querySelector('.desktop-nav')
  
  const heroImg = document.createElement('img')
  heroImg.className = 'hero-image'
  heroImg.src = '/image/mabs.webp'
  heroImg.alt = 'Mabs Dev, développeur créatif avec son ordinateur'
  document.querySelector('.hero-art').appendChild(heroImg)
  
  const aboutImage = document.createElement('img')
  aboutImage.className = 'about-portrait'
    aboutImage.src = '/image/mabou.jpg'
  aboutImage.alt = 'Mabou Yanis, créateur de Mabs Dev'
  document.querySelector('.about-content').insertBefore(aboutImage, document.querySelector('.about h2'))
  
  const aboutContent = document.querySelector('.about-content')
  const aboutText = aboutContent.querySelector('p:not(.eyebrow)')
  aboutText.insertAdjacentHTML('afterend', '<div class="about-facts"><div><strong>01</strong><span>Design sensible</span></div><div><strong>02</strong><span>Code précis</span></div><div><strong>03</strong><span>Esprit curieux</span></div></div>')
  

  const main = document.querySelector('main')
  ;['about', 'stack', 'work', 'contributions', 'certifications', 'cv', 'contact', 'legal'].forEach((sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) main.appendChild(section)
  })

  const aboutNumber = document.querySelector('.about-number')
  if (aboutNumber) aboutNumber.textContent = '01'

  const socialLinks = {
    Instagram: 'https://www.instagram.com/mab.sdev/',
    LinkedIn: 'https://www.linkedin.com/in/yanis-mabou-2b616a414/',
    GitHub: 'https://github.com/mabs-dev',
  }
  document.querySelectorAll('.social-icon').forEach((link) => {
    link.href = socialLinks[link.getAttribute('aria-label')]
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
  })
  const footerSocials = document.querySelector('.contact-footer span:nth-child(2)')
  if (footerSocials) {
    footerSocials.innerHTML = Object.entries(socialLinks)
      .map(([name, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${name}</a>`)
      .join('&nbsp; / &nbsp;')
  }
  
  const skillList = document.querySelector('.skill-list')
  const stackHeading = document.querySelector('.stack-heading')
  const stackSection = document.querySelector('.stack-section')
  if (stackHeading && stackSection && skillList) {
    stackSection.appendChild(skillList)
    skillList.insertAdjacentHTML('beforeend', '<button class="key" type="button" data-title="NEXT.JS" data-description="">NEXT.JS</button><button class="key" type="button" data-title="REACT" data-description="">REACT</button>')
    const skillDescription = document.querySelector('.skill-description')
    if (skillDescription) stackSection.appendChild(skillDescription)
  }

  const setMenuOpen = (open) => {
    menuToggle.setAttribute('aria-expanded', String(open))
    menuToggle.setAttribute('aria-label', open ? t('menu_close') : t('menu_open'))
    nav.classList.toggle('is-open', open)
  }
  menuToggle.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true')
  })
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setMenuOpen(false)
      menuToggle.focus()
    }
  })

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenuOpen(false)))

  const projectPages = document.querySelector('.project-pages')
  const projectGroups = document.querySelectorAll('.project-page')
  const previousProject = document.querySelector('.carousel-previous')
  const nextProject = document.querySelector('.carousel-next')
  const carouselStatus = document.querySelector('.carousel-status')
  let currentProjectPage = 1
  const updateProjectControls = () => {
    previousProject.disabled = currentProjectPage === 1
    nextProject.disabled = currentProjectPage === projectGroups.length
    carouselStatus.textContent = `0${currentProjectPage} / 0${projectGroups.length}`
  }
  const moveProjects = (direction) => {
    const nextPage = currentProjectPage + direction
    if (nextPage < 1 || nextPage > projectGroups.length) return
    currentProjectPage = nextPage
    projectPages.style.transform = `translateX(-${(currentProjectPage - 1) * 50}%)`
    updateProjectControls()
  }
  previousProject.addEventListener('click', () => moveProjects(-1))
  nextProject.addEventListener('click', () => moveProjects(1))
  updateProjectControls()

  const skillButtons = document.querySelectorAll('.skill-list .key')
  const skillTitle = document.querySelector('.skill-description-title')
  const skillText = document.querySelector('.skill-description-text')
  const skillLevels = {
    FIGMA: 'expert', FLUTTER: 'advanced', HTML: 'expert', CSS: 'expert',
    JAVASCRIPT: 'advanced', PYTHON: 'advanced', DART: 'intermediate',
    LARAVEL: 'intermediate', FLASK: 'intermediate', PHP: 'intermediate',
    'NEXT.JS': 'advanced', REACT: 'advanced',
  }
  skillButtons.forEach((button) => {
    const skillKey = button.dataset.title.toLowerCase()
    button.dataset.description = t(`skill_desc_${skillKey}`)
    button.dataset.level = skillLevels[button.dataset.title]
  })
  skillText.textContent = t('skill_desc_figma')
  skillButtons.forEach((button) => button.addEventListener('click', () => {
    skillButtons.forEach((item) => item.classList.remove('is-selected'))
    button.classList.add('is-selected')
    skillTitle.textContent = button.dataset.title
    skillText.textContent = button.dataset.description
  }))

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }
  }), { threshold: 0.12 })
  
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

  // Language toggle
  const langToggle = document.querySelector('.lang-toggle')
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'en' : 'fr'
    localStorage.setItem('language', currentLang)
    renderContent()
  })
}

renderContent()

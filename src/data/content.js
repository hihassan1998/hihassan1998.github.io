export const personal = {
  name: 'Hassan Hussain',
  email: 'hassanihussain1998@gmail.com',
  phone: '+46 76 583 4699',
  location: 'Luleå, Norrbotten, Sweden',
  github: 'https://github.com/hihassan1998',
  linkedin: 'https://www.linkedin.com/in/hassan-hussain-3b840429a/',
  cvEn: '/cv/Hassan_Hussain_CV___ENG.pdf',
  cvSv: '/cv/Hassan_Hussain_CV___SWE.pdf',
  image: '/profile.jpeg',
};

export const content = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      roles: [
        'Full-Stack Developer',
        'Frontend Engineer',
        'AI Integration Specialist',
        'SaaS Builder',
      ],
      tagline:
        'I design and ship scalable web applications — from React frontends to cloud-native backends and AI-powered products.',
      cta: 'View Projects',
      cv: 'Download CV',
      hire: 'Hire Me',
    },
    about: {
      title: 'About Me',
      subtitle: 'Problem solver with a builder mindset',
      paragraphs: [
        'Curious, solution-oriented developer with a degree in Web Programming from Blekinge Institute of Technology. My path into software started at Hitachi Energy working on network migration — that experience sparked a deep interest in how systems work behind the UI.',
        'Since then I have built production frontends at QUH Dock, completed IBM\'s Full Stack Software Developer certification, and founded anotherAI — an AI-powered SaaS platform for legal websites. I thrive in roles where problem-solving, continuous learning, and collaboration are central.',
        'I am actively seeking opportunities in web and full-stack development where I can contribute with modern JavaScript ecosystems, API design, DevOps practices, and AI integrations.',
      ],
      highlights: [
        { label: 'Experience', value: '3+ years' },
        { label: 'Projects', value: '15+' },
        { label: 'Certifications', value: '10+' },
        { label: 'Languages', value: '4 fluent' },
      ],
    },
    experience: {
      title: 'Experience',
      subtitle: 'Where I have applied my skills',
      showOther: 'Other experience',
      hideOther: 'Hide other experience',
      items: [
        {
          role: 'Founder & Developer',
          company: 'anotherAI',
          period: 'Apr 2026 – Present',
          type: 'Part-time',
          description:
            'Building an AI-based SaaS for legal websites with an embeddable AI assistant and admin dashboard. Full product lifecycle: architecture, AI integrations, customer interaction, and external developer coordination.',
          tags: ['React', 'AI/LLM', 'SaaS', 'REST API', 'Product'],
        },
        {
          role: 'Frontend Web Developer',
          company: 'QUH Dock',
          period: 'Jun 2023 – Jun 2026',
          type: 'Part-time · Remote',
          description:
            'Developed frontend solutions with React and Vue, integrated REST/GraphQL APIs, and delivered responsive, accessible interfaces with CI/CD in distributed teams.',
          tags: ['React', 'Vue', 'GraphQL', 'CI/CD', 'WCAG'],
        },
        {
          role: 'Junior Network Engineer',
          company: 'Hitachi Energy',
          period: 'Dec 2022 – Feb 2023',
          type: 'Contract',
          description:
            'Contributed to network migration projects through infrastructure assessment, troubleshooting, documentation, and cross-team collaboration.',
          tags: ['Networking', 'Migration', 'Documentation'],
        },
        {
          role: 'Production Operator',
          company: 'Badger Meter',
          period: 'Jun 2023 – Present',
          type: 'Full-time',
          description:
            'Manufacturing role with quality assurance and ABB IRC5 robotic systems support — demonstrates discipline, precision, and technical aptitude outside software.',
          tags: ['Robotics', 'Quality'],
          minimal: true,
        },
      ],
    },
    skills: {
      title: 'Skills & Tools',
      subtitle: 'Technologies I work with',
      categories: [
        {
          name: 'Frontend',
          items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'SASS', 'Bootstrap', 'React Native', 'HTML5', 'WCAG', 'SEO'],
        },
        {
          name: 'Backend',
          items: ['Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'PHP', 'C#', 'GraphQL', 'REST APIs', 'OAuth 2.0'],
        },
        {
          name: 'Databases',
          items: ['MongoDB', 'MySQL', 'MariaDB', 'PostgreSQL', 'SQLite'],
        },
        {
          name: 'DevOps & Cloud',
          items: ['Docker', 'Kubernetes', 'GitHub Actions', 'IBM Cloud', 'OpenShift', 'AWS', 'Azure', 'Linux', 'Microservices', 'CI/CD'],
        },
        {
          name: 'AI & Practices',
          items: ['OpenAI API', 'AI Agents', 'Specs-driven Development', 'Agile/Scrum', 'Architecture', 'Git/GitHub', 'Postman', 'Swagger'],
        },
      ],
    },
    projects: {
      title: 'Selected Work',
      subtitle: 'Products and applications I have designed and shipped.',
      viewLive: 'Live',
      viewCode: 'Code',
      showMore: 'Show more projects',
      showLess: 'Show fewer',
    },
    moreProjects: {
      title: 'More Projects',
      subtitle: 'Additional builds and experiments',
    },
    education: {
      title: 'Education',
      subtitle: 'Formal training behind the work.',
      showCerts: 'View certifications',
      hideCerts: 'Hide certifications',
      items: [
        {
          degree: 'Web Programming (120 ECTS)',
          school: 'Blekinge Institute of Technology',
          period: 'Aug 2024 – Jun 2026',
          location: 'Karlskrona, Sweden',
        },
        {
          degree: 'Full-Stack Software Development',
          school: 'IBM via Coursera',
          period: 'Jun 2023 – May 2024',
          location: 'Luleå, Sweden',
        },
        {
          degree: 'Software Engineering - Web Development focused',
          school: 'Luleå University of Technology',
          period: 'Aug 2019 – Jun 2025',
          location: 'Luleå, Sweden',
        },
      ],
      certs: [
        'IBM — Introduction to Containers (Docker, Kubernetes, OpenShift)',
        'IBM — Django Application Development with SQL and Databases',
        'IBM — Developing AI Applications with Python and Flask',
        'IBM — Python for Data Science, AI & Development',
        'IBM — Developing Back-End Apps with Node.js and Express',
        'IBM — Developing Front-End Apps with React',
        'IBM — Getting Started with Git and GitHub',
        'IBM — Introduction to Web Development (HTML, CSS, JavaScript)',
        'IBM — Introduction to Cloud Computing',
        'GitHub Copilot — Microsoft Learning',
        'Docker Essentials — CognitiveClass',
      ],
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Open to full-time and remote web development roles',
      description:
        'Whether you are hiring for a frontend, full-stack, or AI-integrated product role — reach out directly.',
      cta: "Let's build something —",
    },
    footer: {
      built: 'Built with React, Vite & Framer Motion',
      rights: 'All rights reserved.',
    },
  },
  sv: {
    nav: {
      about: 'Om mig',
      experience: 'Erfarenhet',
      skills: 'Kompetens',
      projects: 'Projekt',
      education: 'Utbildning',
      contact: 'Kontakt',
    },
    hero: {
      greeting: 'Hej, jag är',
      roles: [
        'Fullstackutvecklare',
        'Frontendutvecklare',
        'AI-integrationsspecialist',
        'SaaS-byggare',
      ],
      tagline:
        'Jag designar och levererar skalbara webbapplikationer — från React-frontends till molnbaserade backends och AI-drivna produkter.',
      cta: 'Se projekt',
      cv: 'Ladda ner CV',
      hire: 'Anställ mig',
    },
    about: {
      title: 'Om mig',
      subtitle: 'Problemlösare med en byggarmentalitet',
      paragraphs: [
        'Nyfiken och lösningsorienterad utvecklare med examen i Webbprogrammering från Blekinge Tekniska Högskola. Min väg in i mjukvara började hos Hitachi Energy med nätverksmigrering — den erfarenheten väckte ett djupt intresse för hur system fungerar bakom användargränssnittet.',
        'Sedan dess har jag byggt produktionsfrontends hos QUH Dock, genomfört IBMs Full Stack Software Developer-certifiering och grundat anotherAI — en AI-driven SaaS-plattform för juridiska webbplatser. Jag trivs i roller där problemlösning, kontinuerligt lärande och samarbete står i centrum.',
        'Jag söker aktivt möjligheter inom webb- och fullstackutveckling där jag kan bidra med moderna JavaScript-ekosystem, API-design, DevOps-praxis och AI-integrationer.',
      ],
      highlights: [
        { label: 'Erfarenhet', value: '3+ år' },
        { label: 'Projekt', value: '15+' },
        { label: 'Certifieringar', value: '10+' },
        { label: 'Språk', value: '4 flytande' },
      ],
    },
    experience: {
      title: 'Erfarenhet',
      subtitle: 'Var jag har tillämpat mina färdigheter',
      showOther: 'Övrig erfarenhet',
      hideOther: 'Dölj övrig erfarenhet',
      items: [
        {
          role: 'Grundare & Utvecklare',
          company: 'anotherAI',
          period: 'Apr 2026 – Nu',
          type: 'Deltid',
          description:
            'Bygger en AI-baserad SaaS för juridiska webbplatser med integrerbar AI-assistent och admin-dashboard. Hela produktlivscykeln: arkitektur, AI-integrationer, kundkontakt och samordning av externa utvecklare.',
          tags: ['React', 'AI/LLM', 'SaaS', 'REST API', 'Produkt'],
        },
        {
          role: 'Frontendutvecklare',
          company: 'QUH Dock',
          period: 'Jun 2023 – Jun 2026',
          type: 'Deltid · Distans',
          description:
            'Utvecklade frontendlösningar med React och Vue, integrerade REST/GraphQL-API:er och levererade responsiva, tillgängliga gränssnitt med CI/CD i distribuerade team.',
          tags: ['React', 'Vue', 'GraphQL', 'CI/CD', 'WCAG'],
        },
        {
          role: 'Junior Nätverksingenjör',
          company: 'Hitachi Energy',
          period: 'Dec 2022 – Feb 2023',
          type: 'Konsult',
          description:
            'Bidrog till nätverksmigreringsprojekt genom infrastrukturanalys, felsökning, dokumentation och tvärfunktionellt samarbete.',
          tags: ['Nätverk', 'Migrering', 'Dokumentation'],
        },
        {
          role: 'Produktionsoperatör',
          company: 'Badger Meter',
          period: 'Jun 2023 – Nu',
          type: 'Heltid',
          description:
            'Tillverkningsroll med kvalitetssäkring och stöd för ABB IRC5-robotar — visar disciplin, precision och teknisk förmåga utanför mjukvara.',
          tags: ['Robotik', 'Kvalitet'],
          minimal: true,
        },
      ],
    },
    skills: {
      title: 'Kompetens & Verktyg',
      subtitle: 'Teknologier jag arbetar med',
      categories: [
        {
          name: 'Frontend',
          items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'SASS', 'Bootstrap', 'React Native', 'HTML5', 'WCAG', 'SEO'],
        },
        {
          name: 'Backend',
          items: ['Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'PHP', 'C#', 'GraphQL', 'REST API:er', 'OAuth 2.0'],
        },
        {
          name: 'Databaser',
          items: ['MongoDB', 'MySQL', 'MariaDB', 'PostgreSQL', 'SQLite'],
        },
        {
          name: 'DevOps & Moln',
          items: ['Docker', 'Kubernetes', 'GitHub Actions', 'IBM Cloud', 'OpenShift', 'AWS', 'Azure', 'Linux', 'Mikrotjänster', 'CI/CD'],
        },
        {
          name: 'AI & Metoder',
          items: ['OpenAI API', 'AI-agenter', 'Specifikationsdriven utveckling', 'Agile/Scrum', 'Arkitektur', 'Git/GitHub', 'Postman', 'Swagger'],
        },
      ],
    },
    projects: {
      title: 'Utvalt arbete',
      subtitle: 'Produkter och applikationer jag designat och levererat.',
      viewLive: 'Live',
      viewCode: 'Kod',
      showMore: 'Visa fler projekt',
      showLess: 'Visa färre',
    },
    moreProjects: {
      title: 'Fler projekt',
      subtitle: 'Ytterligare byggen och experiment',
    },
    education: {
      title: 'Utbildning',
      subtitle: 'Formell utbildning bakom arbetet.',
      showCerts: 'Visa certifieringar',
      hideCerts: 'Dölj certifieringar',
      items: [
        {
          degree: 'Webbprogrammering (120 hp)',
          school: 'Blekinge Tekniska Högskola',
          period: 'Aug 2024 – Jun 2026',
          location: 'Karlskrona, Sverige',
        },
        {
          degree: 'Fullstack mjukvaruutveckling',
          school: 'IBM via Coursera',
          period: 'Jun 2023 – Maj 2024',
          location: 'Luleå, Sverige',
        },
        {
          degree: 'Programvaruteknik — webbutvecklingsinriktning',
          school: 'Luleå Tekniska Universitet',
          period: 'Aug 2019 – Jun 2025',
          location: 'Luleå, Sverige',
        },
      ],
      certs: [
        'IBM — Introduktion till Containers (Docker, Kubernetes, OpenShift)',
        'IBM — Django-applikationsutveckling med SQL och databaser',
        'IBM — AI-applikationer med Python och Flask',
        'IBM — Python för data science, AI & utveckling',
        'IBM — Backend-appar med Node.js och Express',
        'IBM — Frontend-appar med React',
        'IBM — Git och GitHub',
        'IBM — Webbutveckling (HTML, CSS, JavaScript)',
        'IBM — Introduktion till molntjänster',
        'GitHub Copilot — Microsoft Learning',
        'Docker Essentials — CognitiveClass',
      ],
    },
    contact: {
      title: 'Kontakta mig',
      subtitle: 'Öppen för heltids- och distansroller inom webbutveckling',
      description:
        'Oavsett om du söker frontend-, fullstack- eller AI-integrerad produktutveckling — hör av dig direkt.',
      cta: 'Låt oss bygga något —',
    },
    footer: {
      built: 'Byggd med React, Vite & Framer Motion',
      rights: 'Alla rättigheter förbehållna.',
    },
  },
};

export const featuredProjects = [
  {
    id: 'anotherai',
    title: 'anotherAI',
    subtitle: { en: 'AI Legal Tech SaaS', sv: 'AI Legal Tech SaaS' },
    description: {
      en: 'Embeddable AI assistant for legal websites with admin dashboard, case intake, and automated client communication. Full product lifecycle from architecture to launch.',
      sv: 'Inbäddad AI-assistent för juridiska webbplatser med administratörspanel, ärendehantering och automatiserad kundkommunikation. Hela produktlivscykeln från arkitektur till lansering.'
    },
    tags: ['React', 'AI/LLM', 'SaaS', 'REST API', 'OpenAI'],
    live: 'https://anotheraiplatform.com/',
    github: 'https://github.com/hihassan1998',
  },
  {
    id: 'legal-widget',
    title: 'Legal AI Intake Agent',
    subtitle: { en: 'Embeddable Widget', sv: 'Inbäddad widget' },
    description: {
      en: 'Script-based widget for law firms — captures inquiries, generates AI summaries, and automates email workflows in English and Swedish.',
      sv: 'Skriptbaserad widget för advokatbyråer — samlar in förfrågningar, genererar AI-sammanfattningar och automatiserar e-postflöden på engelska och svenska.'
    },
    tags: ['JavaScript', 'AI', 'Widget', 'Multilingual'],
    live: 'https://anotheraiplatform.com/',
    github: 'https://github.com/hihassan1998',
  },
  {
    id: 'ai-business-discovery',
    title: 'AI Business Discovery Assistant',
    subtitle: { en: 'Generative AI Discovery Tool', sv: 'Generativt AI-upptäcktsverktyg' },
    description: {
      en: 'Generative AI discovery tool — interactive chat that gathers stakeholder requirements, produces multilingual structured reports, and visualizes effort estimates.',
      sv: 'Generativt AI-upptäcktsverktyg — interaktiv chatt som samlar intressentkrav, producerar flerspråkiga strukturerade rapporter och visar tidsuppskattningar.'
    },
    tags: ['TypeScript', 'React', 'Next.js', 'Multilingual'],
    live: 'https://ai-business-discovery-assistant.vercel.app/',
    github: 'https://github.com/hihassan1998/ai-business-discovery-assistant',
  },
  {
    id: 'anotool',
    title: 'AnoTool',
    subtitle: { en: 'Utility Toolkit', sv: 'Verktygslåda' },
    description: {
      en: 'Privacy-focused online utility toolkit featuring conversion, calculation, and formatting tools. Processes data entirely locally in the client browser.',
      sv: 'Integritetsfokuserad verktygslåda online med konverterings-, beräknings- och formateringsverktyg. Behandlar all data helt lokalt i webbläsaren.'
    },
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO'],
    live: 'https://anotool.com',
    github: 'https://github.com/hihassan1998',
  },
  {
    id: 'technotes',
    title: 'TechNotes',
    subtitle: { en: 'MERN Notes App', sv: 'MERN anteckningsapp' },
    description: {
      en: 'Full-stack note-taking with authentication, user roles, and CRUD — built to replace sticky notes at a tech retail business.',
      sv: 'Fullstack-applikation för anteckningar med autentisering, användarroller och CRUD — byggd för att ersätta papperslappar hos en teknikbutik.'
    },
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Auth'],
    live: 'https://technotes-99q4.onrender.com/',
    github: 'https://github.com/hihassan1998',
  },
  {
    id: 'bilhub',
    title: 'BilHub',
    subtitle: { en: 'Car Showcase · Next.js', sv: 'Bilsajt · Next.js' },
    description: {
      en: 'SSR car exploration platform with filtering, pagination, TypeScript, and SEO-optimized metadata.',
      sv: 'SSR-plattform för bilsökning med filtrering, paginering, TypeScript och SEO-optimerad metadata.'
    },
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'SSR', 'SEO'],
    live: 'https://bilhub.onrender.com/',
    github: 'https://github.com/hihassan1998',
  },
  {
    id: 'collabwrite',
    title: 'CollabWrite',
    subtitle: { en: 'Cloud Document Editor', sv: 'Molndokumentredigerare' },
    description: {
      en: 'Google Docs-inspired editor with cloud persistence, rich text formatting, and real-time collaborative sessions.',
      sv: 'Google Docs-inspirerad redigerare med molnlagring, rik textformatering och samarbete i realtid.'
    },
    tags: ['React', 'Node.js', 'WebSockets', 'Cloud'],
    live: null,
    github: 'https://github.com/group-mh/ssr-editor-frontend',
  },
  {
    id: 'swestate',
    title: 'SwEstate',
    subtitle: { en: 'Real Estate · MERN', sv: 'Fastighetssajt · MERN' },
    description: {
      en: 'Property listings with user auth, live chat, image galleries, and map integration for location services.',
      sv: 'Fastighetsannonser med användarautentisering, livechatt, bildgallerier och kartintegration för platstjänster.'
    },
    tags: ['React', 'Node.js', 'MongoDB', 'Maps'],
    live: null,
    github: 'https://github.com/hihassan1998',
  },
  {
    id: 'elspark',
    title: 'ElSpark',
    subtitle: { en: 'E-bike Rental', sv: 'Elsparkcykeluthyrning' },
    description: {
      en: 'Full-stack rental platform with real-time availability, booking management, and responsive UI.',
      sv: 'Fullstack-uthyrningsplattform för elsparkcyklar med tillgänglighet i realtid, bokningshantering och responsivt gränssnitt.'
    },
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    live: null,
    github: 'https://github.com/hihassan1998',
  },
  {
    id: 'car-dealership',
    title: 'Car Dealership App',
    subtitle: { en: 'Full-Stack · Docker', sv: 'Fullstack · Docker' },
    description: {
      en: 'Containerized dealership platform with dealer listings, reviews, user management, and CI/CD pipeline.',
      sv: 'Containeriserad bilhandelsplattform med återförsäljarlistor, recensioner, användarhantering och CI/CD-pipeline.'
    },
    tags: ['Node.js', 'Docker', 'MongoDB', 'React'],
    live: null,
    github: 'https://github.com/hihassan1998',
  },
  {
    id: 'ai-summarizer',
    title: 'AI Summarizer',
    subtitle: { en: 'Article Processing', sv: 'Artikelbearbetning' },
    description: {
      en: 'Paste a URL, get an AI-generated summary — clean UX for content processing and API integration.',
      sv: 'Klistra in en URL och få en AI-genererad sammanfattning — rent gränssnitt för innehållsbearbetning och API-integration.'
    },
    tags: ['React', 'AI API', 'JavaScript'],
    live: 'https://ai-summarizer-5v1r.onrender.com/',
    github: 'https://github.com/hihassan1998',
  },
  {
    id: 'ludviga',
    title: 'Ludviga & Co',
    subtitle: { en: 'Law Firm · Pico CMS', sv: 'Juristbyrå · Pico CMS' },
    description: {
      en: 'Flat-file CMS site for legal advisors — lightweight, WCAG-compliant, and SEO-optimized.',
      sv: 'Flat-file CMS-webbplats för juridiska rådgivare — lättviktig, WCAG-kompatibel och SEO-optimerad.'
    },
    tags: ['Pico CMS', 'PHP', 'WCAG', 'SEO'],
    live: 'https://ludvigaandco.onrender.com/',
    github: 'https://github.com/hihassan1998',
  },
  {
    id: 'bmo',
    title: 'BMO Museum',
    subtitle: { en: 'Online Museum', sv: 'Webbmuseum' },
    description: {
      en: 'Museum web app for burial ritual artifacts with gallery navigation and accessible UX.',
      sv: 'Museum-webbapp för begravningsritualer och artefakter med gallerinavigering och tillgänglig design.'
    },
    tags: ['PHP', 'SQLite', 'Responsive'],
    live: 'https://online-bmo.onrender.com/',
    github: 'https://github.com/hihassan1998',
  },
];

export const moreProjects = [
  {
    title: 'J-Hunt',
    description: {
      en: 'React Native job search app aggregating listings from LinkedIn, Indeed, and more.',
      sv: 'React Native-app för jobbsökning som samlar annonser från LinkedIn, Indeed med flera.'
    },
    tags: ['React Native', 'Expo', 'API'],
    github: 'https://github.com/hihassan1998/react_native_jobs',
  },
  {
    title: '8 Fingers 2 Thumbs',
    description: {
      en: 'Python CLI typing test game with difficulty levels and progress tracking.',
      sv: 'Python CLI-skrivtestspel med svårighetsgrader och framstegsspårning.'
    },
    tags: ['Python', 'CLI'],
    github: 'https://github.com/hihassan1998',
  },
  {
    title: 'SeMash Restaurant',
    description: {
      en: 'Online restaurant web app with PHP backend and SQLite database.',
      sv: 'Restaurangwebbapp med PHP-backend och SQLite-databas.'
    },
    tags: ['PHP', 'SQLite'],
    live: 'https://swemash-pakspice.onrender.com/public/pages/home.php',
  },
  {
    title: 'NLP Emotion Detector',
    description: {
      en: 'IBM Watson-powered emotion detection using natural language processing.',
      sv: 'Känslodetektering driven av IBM Watson med naturlig språkbearbetning.'
    },
    tags: ['Python', 'IBM Watson', 'NLP'],
    github: 'https://github.com/hihassan1998/watson_ai',
  },
];

export const navLinks = [
  { id: 'about', href: '#about' },
  { id: 'experience', href: '#experience' },
  { id: 'skills', href: '#skills' },
  { id: 'projects', href: '#projects' },
  { id: 'education', href: '#education' },
  { id: 'contact', href: '#contact' },
];

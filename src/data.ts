import { Project, BlogPost, Service, Experience } from "./types";

export const SabbirProfile = {
  name: "Sabbir Shohan",
  title: "UI/UX Designer & Digital Experience Creator",
  tagline: "Crafting High-Converting SaaS Dashboards & Immersive Digital Experiences since 2021.",
  experienceSince: 2021,
  aboutSummary: "A passionate UI/UX Designer dedicated to sculpting high-performance digital products that seamlessly bridge the gap between human intuition and sophisticated digital systems. Specialized in complex SaaS architectures, high-fidelity design systems, and sleek dashboard ecosystems.",
  aboutLong: "Based on user-centric research and pixel-perfect execution, I help high-growth startups and established enterprises turn complex software requirements into smooth, intuitive, and high-converting visual journeys. Since starting my professional journey in 2021, I have designed versatile dashboards, complex web applications, and visually arresting mobile apps that focus on elevating user engagement and driving tangible business outcomes. Each design is backed by clean layouts, solid typography, and high-end interactive systems.",
  skills: [
    "UI/UX Design",
    "SaaS Dashboard Architecture",
    "Design System Engineering",
    "High-Fidelity Prototyping",
    "Mobile App (iOS/Android)",
    "Wireframing & User Flows",
    "Interaction Design",
    "Conversion Rate Optimization (CRO)",
    "HTML/CSS & React Integration"
  ],
  stats: [
    { label: "Years of Experience", value: "5+", suffix: "" },
    { label: "Successful Projects", value: "48", suffix: "+" },
    { label: "Satisfied Clients", value: "100", suffix: "%" },
    { label: "Interactive Components", value: "2", suffix: "K+" }
  ],
  contact: {
    email: "sbrshohan@gmail.com",
    address: "Dhaka, Bangladesh",
    socials: {
      dribbble: "https://dribbble.com/SabbirShohan",
      linkedin: "https://linkedin.com/in/SabbirShohan",
      behance: "https://behance.net/SabbirShohan",
      instagram: "https://instagram.com/SabbirShohan",
      twitter: "https://twitter.com/SabbirShohan"
    }
  },
  portraitImage: "/src/assets/images/sabbir_portrait_1779543786495.png"
};

export const ServicesData: Service[] = [
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "Creating highly intuitive, visually compelling, and accessible digital products tailored specifically to your users' habits.",
    iconName: "Layers",
    features: ["User Research & Personas", "Wireframes & Information Architecture", "High-Fidelity Visual Mockups", "Interactive Prototypes"]
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard Design",
    description: "Turning complex data structures and analytic databases into beautiful, easy-to-use control panels that boost productivity.",
    iconName: "LayoutGrid",
    features: ["Data Visualizations & Widgets", "Multi-Tenant Navigation Systems", "Customizable Workspace Layouts", "Dense-Information UI Patterns"]
  },
  {
    id: "mobile-app",
    title: "Mobile App Design",
    description: "Designing responsive, smooth-scrolling, and gesture-driven mobile experiences for iOS & Android devices.",
    iconName: "Smartphone",
    features: ["Human Interface Guidelines", "Android Material Design", "Interactive Gesture Systems", "Micro-Interactions"]
  },
  {
    id: "landing-page",
    title: "Conversion Landing Pages",
    description: "Crafting visual-heavy storytelling landers that visually separate your brand and organically guide users to sign up.",
    iconName: "Award",
    features: ["A/B Tested Component Structures", "Sensory Visual Storytelling", "Speed-Optimized Asset Layout", "Responsive Interactive Forms"]
  },
  {
    id: "design-systems",
    title: "Design System Creation",
    description: "Architecting atomic, scalable theme components, typography charts, and visual tokens that synchronize across cross-functional teams.",
    iconName: "Cpu",
    features: ["Component Libraries", "Spacing & Typography Tokens", "Interactive State Rules", "Figma-to-Code Developer handoff"]
  },
  {
    id: "web-design",
    title: "Premium Web Experiences",
    description: "Creating high-contrast, artistic web compositions that prioritize luxury-level presentation, depth, and fluid animations.",
    iconName: "Sparkles",
    features: ["Awwwards-style Visual Direction", "Custom Smooth Motion Curves", "3D-like Layering & Glassmorphism", "Premium Color Palettes"]
  }
];

export const ProjectsData: Project[] = [
  {
    id: "solusy",
    title: "Solusy",
    subtitle: "Business Management SaaS Platform Design",
    category: "SaaS Dashboard",
    description: "An ultra-modern, glassmorphic CRM & business management platform designed to help companies track clients, pipeline metrics, and team collaboration in a multi-tenant cloud environment.",
    longDescription: "Solusy represents a pinnacle of dense data architecture integrated with a fluid, eye-safe, and highly engaging user interface. The primary objective of the redesign was to convert complex cloud-based multi-tier business metrics into simplified visual cards. By leveraging deep charcoal shades, vibrant cyan accent lines, customizable analytic grid systems, and smooth Glassmorphism transitions, we enabled team members to run and coordinate large enterprise operations without experiencing cognitive overload or interface fatigue.",
    image: "/src/assets/images/solusy_dashboard_1779543807635.png",
    tags: ["SaaS Platform", "CRM Dashboard", "Interaction Design", "Figma", "Design System"],
    links: {
      live: "https://www.mysolusy.com",
      dribbble: "https://dribbble.com/SabbirShohan"
    },
    metrics: [
      { label: "User Task Efficiency", value: "+42%" },
      { label: "Cognitive Load Score", value: "-35%" },
      { label: "Platform Adoption", value: "+180%" },
      { label: "Active Enterprise Users", value: "25K+" }
    ],
    keyFeatures: [
      "Customizable bento-grid modular analytics suite",
      "Unified multi-tiered timeline controls for live operations",
      "Consistent responsive screen designs across widescreen and mobile views",
      "Dynamic data-dense reporting metrics with customizable filter presets"
    ],
    role: "Lead Product Designer",
    year: "2023 - 2024"
  },
  {
    id: "fintech-pro",
    title: "ZenFinance Portal",
    subtitle: "Next-Gen Crypto & Asset Portfolio",
    category: "Web & Mobile App",
    description: "A dark-themed investment and digital asset tracking dashboard showing real-time ledger records, smart currency tracking, and instant secure transaction gates.",
    longDescription: "ZenFinance solves the problem of disparate asset tracking. Users demanded a dashboard that felt premium, secure, and instantaneous. Built around deep-embedded neon colors, micro-animations, and subtle high-gloss card structures, the visual style targets high-net-worth modern retail investors who appreciate typographic clarity and 3D hovering chart interfaces.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1000&auto=format&fit=crop",
    tags: ["FinTech", "Ledger App", "Data Visualization", "Framer Motion"],
    links: {
      live: "https://dribbble.com/SabbirShohan",
      dribbble: "https://dribbble.com/SabbirShohan"
    },
    metrics: [
      { label: "Daily Active Retention", value: "+54%" },
      { label: "Settle Transaction Time", value: "<1.2s" },
      { label: "Visual Desirability Rating", value: "98%" }
    ],
    keyFeatures: [
      "Instant portfolio value breakdown charts with real-time updates",
      "Secure biometric touch interaction gates",
      "Dynamic high-contrast visual ledger feed"
    ],
    role: "Senior UI/UX Consultant",
    year: "2023"
  },
  {
    id: "ai-nexus",
    title: "Nexus AI Studio",
    subtitle: "Cloud AI Prompt Engineering Workspace",
    category: "Product Design",
    description: "Visual design for a developers workspace tailored to fine-tuning large language models, running comparative parallel agents, and tracking latency logs.",
    longDescription: "Architected a dense developer playground environment where code parameters, active prompt feeds, and agentic tokens needed to reside on a single screen without vertical scrolling. Designed a multi-layered terminal framework, rich system performance sliders, and clear hierarchical alert panels to guide operations.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    tags: ["A.I. Workspace", "Developer Tooling", "Grid System", "Interactive Canvas"],
    links: {
      live: "https://dribbble.com/SabbirShohan",
      dribbble: "https://dribbble.com/SabbirShohan"
    },
    metrics: [
      { label: "Workspace Task Output", value: "+60%" },
      { label: "Average Setup Onboard", value: "4 mins" },
      { label: "System Error Prevention", value: "-22%" }
    ],
    keyFeatures: [
      "Side-by-side comparative model generation logs",
      "Interactive node-based multi-agent workflow creator",
      "High-contrast code visualization themes"
    ],
    role: "Sole Designer (Concept to Launch)",
    year: "2024"
  }
];

export const DribbbleWorks = [
  {
    id: "dw-1",
    title: "Crypto Wallet Mobile App Interaction",
    likes: "154",
    views: "3.2k",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=600&auto=format&fit=crop",
    category: "Mobile UI",
    url: "https://dribbble.com/SabbirShohan"
  },
  {
    id: "dw-2",
    title: "CRM Kanban Board Dark Interface",
    likes: "213",
    views: "4.8k",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop",
    category: "Dashboard Design",
    url: "https://dribbble.com/SabbirShohan"
  },
  {
    id: "dw-3",
    title: "Smart Smartwatch Companion App Concept",
    likes: "198",
    views: "2.9k",
    image: "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=600&auto=format&fit=crop",
    category: "Mobile Design",
    url: "https://dribbble.com/SabbirShohan"
  },
  {
    id: "dw-4",
    title: "Cyberpunk Digital Workspace Hero Header",
    likes: "289",
    views: "5.1k",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
    category: "Art Direction",
    url: "https://dribbble.com/SabbirShohan"
  },
  {
    id: "dw-5",
    title: "SaaS Analytics & Funnel Setup Interface",
    likes: "182",
    views: "3.5k",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    category: "Web App UI",
    url: "https://dribbble.com/SabbirShohan"
  },
  {
    id: "dw-6",
    title: "Medical Diagnostic Tablet UX Dashboard",
    likes: "245",
    views: "4.2k",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop",
    category: "Healthcare SaaS",
    url: "https://dribbble.com/SabbirShohan"
  }
];

export const ExperienceData: Experience[] = [
  {
    id: "exp-4",
    year: "2024 - Present",
    role: "Lead UI/UX Architect",
    company: "Solis Tech Labs",
    description: "Designing the complete next-generation, high-performance web suite of dashboards, client reporting modules, and mobile platform frameworks. Restructured their core platform into an scalable design system utilized across engineering groups.",
    skills: ["Design Systems", "SaaS Redesign", "Figma Tokens", "Enterprise Analytics"]
  },
  {
    id: "exp-3",
    year: "2023 - 2024",
    role: "Senior Product Designer",
    company: "PixelCrafters Agency",
    description: "Redesigned Solusy CRM Business Management platform, reducing setup times by 35%. Spearheaded client client acquisition by delivering Awwwards-featured landing page designs and heavy-converting digital portals for rapid scale startups.",
    skills: ["SaaS Design", "Information Architecture", "conversion optimization", "Interaction Design"]
  },
  {
    id: "exp-2",
    year: "2022 - 2023",
    role: "UI/UX Designer",
    company: "Apex Tech Inc",
    description: "Designed core product iterations for an array of smart fintech applications, focusing primarily on clean user ledger lists, transaction progress graphics, and adaptive dark mode web views.",
    skills: ["FinTech UI", "Responsive Web Design", "User Research", "Wireframing"]
  },
  {
    id: "exp-1",
    year: "2021 - 2022",
    role: "Junior Interface Designer",
    company: "IdeaFlow Solutions",
    description: "Began professional design journey, developing clean, responsive promotional layouts, vector branding books, interactive email templates, and high-quality dashboard asset libraries under senior supervision.",
    skills: ["Visual Design", "Typography Layouts", "Invision", "Asset Creation"]
  }
];

export const BlogPostsData: BlogPost[] = [
  {
    id: "blog-1",
    title: "The Golden Rules of SaaS Dashboard Design: Managing Cognitive Load",
    slug: "saas-dashboard-cognitive-load",
    excerpt: "SaaS dashboards handle huge amounts of metrics, numbers, and databases. Learn how UI/UX practices can simplify large flows into highly aesthetic interfaces.",
    content: `Dashboards can quickly become absolute cognitive nightmares if not treated with structural rigor. Here is our strategic approach:

### 1. The Rule of Visual Chunking
Large databases should never be dumped on a single screen without spacing hierarchies. Visual Chunking is the sorting of related performance indicators into dedicated grids or "glass cards" with a strong visual perimeter.
- Use **soft dark backgrounds** with subtle shadows to help the eye outline blocks.
- Keep border weights around \`1px\` using semi-transparent colors (\`border-white/10\`).

### 2. Prioritize Micro-Indicators
Every chart does not require a large spatial width. Start with a simplified summary indicator (such as a simple percent delta metric like **+24%**) and then hover-expand to reveal the full complex historical trends.

### 3. Establish Progressive Disclosure
Only display details that are immediately actionable. Hide tertiary logs and secondary tables in slide-out panel sheets rather than polluting the core operational view.
`,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    category: "SaaS Design",
    date: "May 12, 2026",
    readTime: "5 min read",
    tags: ["SaaS", "Dashboard", "UX Rules", "Figma"],
    author: {
      name: "Sabbir Shohan",
      avatar: "/src/assets/images/sabbir_portrait_1779543786495.png"
    },
    featured: true
  },
  {
    id: "blog-2",
    title: "Designing for Touch: Modern Gestures in Mobile App UX",
    slug: "designing-for-touch-mobile-gestures",
    excerpt: "With mobile screen sizes increasing, thumb zone layouts and gesture indicators have become crucial components for premium mobile app flows.",
    content: `Modern mobile viewports are increasingly hard to navigate with standard one-handed thumb arcs. Let's explore modern solutions to ease touch layout strain:

### 1. Bottom-Sheet Centrist Navigation
Key menu drawers, search fields, and transaction validation buttons should be clustered in the lower 40% of the display. Top-aligned navigation lists are prime areas for visual strain.

### 2. Micro-Indicators of Swipe Motions
Use elegant bounce animations when a screen loads, indicating to the user that horizontal swiping motions are supported. These details are both interactive and highly satisfying to use.

### 3. Haptic Integration Anchors
Combine structural touch points with tactile haptic guidelines so each user click returns a gentle physical confirmations!
`,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
    category: "Mobile Design",
    date: "April 28, 2026",
    readTime: "4 min read",
    tags: ["Mobile", "UX Design", "iOS Guidelines", "Gestures"],
    author: {
      name: "Sabbir Shohan",
      avatar: "/src/assets/images/sabbir_portrait_1779543786495.png"
    }
  },
  {
    id: "blog-3",
    title: "Mastering Scale and Contrast in Design Systems for Clean Typography",
    slug: "scale-contrast-design-systems-typography",
    excerpt: "A deep dive into setting up mathematical font scalers, tracking offsets, and ensuring high accessibility compliance across dark themed portfolios.",
    content: `Typography is the architecture of language. When selecting font scale arrays, a solid mathematical coefficient secures fluid, predictable typography:

### 1. The Power of Major Third Scale
Use the \`1.25\` scaling ratio (Major Third) for modern portfolio structures.
For example:
- \`16px\` for base body text.
- \`20px\` for key subheaders.
- \`25px\` for section titles.
- \`31px\` and \`39px\` for outstanding display headings.

### 2. Dark-Theme Legibility Tweaks
Avoid full absolute white text (\`#FFFFFF\`) on complete black backgrounds (\`#000000\`). This creates optical glare and causes severe eye strain. Instead, use soft off-white text (\`text-white/80\`) on deep obsidian slates for crisp, warm readability.
`,
    image: "https://images.unsplash.com/photo-1561070791-26c113006238?q=80&w=1000&auto=format&fit=crop",
    category: "Design System",
    date: "March 15, 2026",
    readTime: "6 min read",
    tags: ["Typography", "Design Systems", "Web Standards", "Contrast"],
    author: {
      name: "Sabbir Shohan",
      avatar: "/src/assets/images/sabbir_portrait_1779543786495.png"
    }
  }
];

export const projects = [
  {
    slug: "acerctl",
    title: "AcerCtl",
    description:
      "A Linux hardware control and monitoring suite for Acer laptops, built with Rust and native system integrations",
    tags: ["Rust", "Linux", "Systems Programming", "Hardware"],

    image: "/assets/acerctl/acerctl-cover.png",

    metrics: [
      "Modular daemon, GUI, and kernel driver architecture",
      "Native Linux hardware integration",
      "Integrated hardware control and monitoring",
    ],

    problem:
      "Acer laptop users on Linux often lack access to the hardware controls and device integrations available through manufacturer-specific software on other operating systems.",

    approach:
      "Developing a native Linux control suite that bridges hardware interfaces, kernel-level functionality, and a desktop application. AcerCtl uses a modular Rust architecture with a dedicated daemon, graphical interface, and DKMS kernel driver.",

    features: [
      "Hardware control and monitoring",
      "Dedicated background daemon",
      "Native desktop GUI built with Iced",
      "Kernel driver integration through DKMS",
      "Keyboard and RGB hardware integration",
      "System tray and desktop integration",
      "Modular hardware abstraction through libacercontrol",
    ],

    stack: ["Rust", "Linux", "Iced", "DKMS", "Linux Kernel"],

    github: "https://github.com/stanlysilas/acer-control-center",
    status: "Live",

    images: [
      "/assets/acerctl/acerctl-1.png",
      "/assets/acerctl/acerctl-2.png",
      "/assets/acerctl/acerctl-3.png",
      "/assets/acerctl/acerctl-4.png",
    ],
  },

  {
    slug: "chronicle",
    title: "Chronicle",
    description:
      "A project-centric platform for publishing development updates and documenting the evolution of software projects",
    tags: ["Next.js", "TypeScript", "Supabase", "Platform"],

    image: "/assets/chronicle/chronicle-cover.png",

    metrics: [
      "Project-centric publishing and development history",
      "Public and private project visibility",
      "Structured project updates with persistent URLs",
    ],

    problem:
      "Software projects are often scattered across repositories, social platforms, and development logs, making it difficult to follow their progress and understand how they evolve over time.",

    approach:
      "Building a centralized, project-centric platform where developers can publish projects, document development milestones, and maintain a structured history of their work. Chronicle combines project discovery with persistent project pages and development records.",

    features: [
      "Project creation and management",
      "Public and private project visibility",
      "Development updates and project history",
      "Active and archived project states",
      "Project verification workflow",
      "Persistent project and entry URLs",
    ],

    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"],

    status: "In progress",
    github: "https://github.com/chronicleproject",
    link: "https://chronicleproject.dpdns.org",

    images: [
      "/assets/chronicle/chronicle-1.png",
      "/assets/chronicle/chronicle-2.png",
      "/assets/chronicle/chronicle-3.png",
    ],
  },

  {
    slug: "bloomos",
    title: "BloomOS",
    description:
      "A privacy-focused Android operating system built from source with an emphasis on security, transparency, and long-term maintainability.",
    tags: ["Android", "AOSP", "LineageOS", "Linux", "C++", "Security"],

    image: "/assets/bloomos/bloomos-cover.png",

    metrics: [
      "Custom Android OS built from source",
      "Device bring-up and hardware enablement",
      "Framework customization and system rebranding",
    ],

    problem:
      "Many Android devices lose software support quickly while modern operating systems increasingly prioritize data collection over user privacy. Existing custom ROMs often target enthusiasts without providing a cohesive privacy-first ecosystem.",

    approach:
      "Building BloomOS as a privacy and security focused Android distribution based on LineageOS. The project involves device bring-up, framework customization, hardware abstraction debugging, vendor integration, and long-term platform architecture while preserving compatibility with existing Android applications.",

    features: [
      "Privacy-first Android experience",
      "Custom operating system branding and framework",
      "Hardware bring-up for unsupported devices",
      "OTA update infrastructure",
      "Security-focused system configuration",
      "Modular architecture for future device support",
      "Open-source development workflow",
    ],

    stack: [
      "AOSP",
      "LineageOS",
      "Android",
      "Linux",
      "Git",
      "Java",
      "C++",
      "Shell",
      "XML",
    ],

    github: "https://github.com/BloomOSLabs",
    link: "https://bloomoslabs.github.io/",

    status: "Archived",

    images: [
      "/assets/bloomos/bloomos-1.png",
      "/assets/bloomos/bloomos-2.png",
      "/assets/bloomos/bloomos-3.png",
      "/assets/bloomos/bloomos-4.png",
      "/assets/bloomos/bloomos-5.png",
    ],
  },

  {
    slug: "bloom",
    title: "Bloom",
    description:
      "A gamified productivity system that visualizes progress as growth",
    tags: ["Flutter", "Firebase", "Productivity"],
    image: "/assets/bloom/bloom-cover.png",

    metrics: [
      "Garden-based progression system",
      "Real-time sync with Firebase",
      "Multi-object productivity architecture",
    ],

    problem:
      "Traditional task managers fail to sustain user motivation and lack meaningful feedback loops.",

    approach:
      "Designed a system-driven productivity experience where completing tasks grows a virtual garden, reinforcing consistency through visual progress and rewards.",

    features: [
      "Task → reward loop system",
      "Unlockable regions and progression",
      "Integrated notes, events, and task objects",
      "Cloud-synced persistent state",
    ],

    stack: ["Flutter", "Firebase"],

    github: "https://github.com/stanlysilas/Bloom",
    // live: "https://bloom-da824.web.app/",
    // link: "https://bloomproductive.framer.website/",
    status: "Archived",

    images: [
      "/assets/bloom/bloom-1.png",
      "/assets/bloom/bloom-2.png",
      "/assets/bloom/bloom-3.png",
      "/assets/bloom/bloom-4.png",
    ],
  },

  {
    slug: "block_editor",
    title: "Block Editor",
    description:
      "A fully custom Notion-style editor built from scratch in Flutter",
    tags: ["Flutter", "Dart", "Editor"],
    image: "/assets/block-editor/block-editor-cover.png",

    metrics: [
      "Fully custom block architecture",
      "Slash command system",
      "Extensible architecture for future plugins",
    ],

    problem:
      "Existing rich text editors lack flexibility, extensibility, and full control over structure and behavior.",

    approach:
      "Built a block-based editor from scratch without external dependencies, enabling complete control over content structure and extensibility.",

    features: [
      "Block-based editing system",
      "Slash command menu",
      "Support for media and structured content",
      "Extensible plugin architecture (planned)",
    ],

    stack: ["Flutter", "Dart"],

    github: "https://github.com/stanlysilas/block_editor",
    // live: "https://stanworks.dpdns.org/block_editor/",
    link: "https://pub.dev/packages/block_editor",
    status: "Archived",

    images: [
      "/assets/block-editor/block-editor-1.png",
      "/assets/block-editor/block-editor-2.png",
      "/assets/block-editor/block-editor-3.png",
      "/assets/block-editor/block-editor-4.png",
    ],
  },

  {
    slug: "aetheros",
    title: "AetherOS",
    description:
      "A lightweight Fedora-based OS focused on performance and control",
    tags: ["Linux", "System", "UI"],
    image: "",

    metrics: [
      "Custom GNOME configuration",
      "Lightweight optimized system",
      "Custom control center concept",
    ],

    problem:
      "Modern desktop environments are often bloated and lack fine-grained control over system behavior.",

    approach:
      "Developed a stripped-down Fedora-based OS with a customized GNOME environment and a unified control system for enhanced performance and usability.",

    features: [
      "Minimal GNOME setup",
      "Preconfigured extensions and tools",
      "Custom control center (Tweaks + extensions)",
      "Performance-focused optimizations",
    ],

    stack: ["Linux", "Fedora", "GNOME"],

    github: "https://github.com/stanlysilas/AetherOS",
    // live: "",
    status: "Archived",

    images: [],
  },

  {
    slug: "usverse",
    title: "Usverse",
    description: "A shared digital space designed for couples",
    tags: ["Flutter", "Firebase", "Social"],
    image: "/assets/usverse/usverse-cover.png",

    metrics: [
      "Shared space architecture",
      "Real-time interaction",
      "Relationship-focused UX",
    ],

    problem:
      "There are limited platforms focused on meaningful shared experiences for couples.",

    approach:
      "Designed a shared digital environment where couples can interact, store memories, and collaborate within a unified space.",

    features: [
      "Shared notes and memories",
      "Real-time syncing",
      "Private collaborative environment",
    ],

    stack: ["Flutter", "Firebase"],

    github: "https://github.com/stanlysilas/Usverse",
    live: "https://usverse-platform.web.app/",
    status: "Live",

    images: [
      "/assets/usverse/usverse-1.png",
      "/assets/usverse/usverse-2.png",
      "/assets/usverse/usverse-3.png",
    ],
  },

  {
    slug: "flow_launcher",
    title: "Flow Launcher",
    description:
      "A lightweight, customizable Android launcher built with Flutter",
    tags: ["Flutter", "Android", "UI"],
    // image: '/assets/flow-launcher-cover.png',

    metrics: [
      "Material-based UI system",
      "Customization-first approach",
      "Lightweight performance focus",
    ],

    problem:
      "Existing Android launchers are either bloated or lack deep customization.",

    approach:
      "Started building a Flutter-based launcher focused on performance, flexibility, and modern design.",

    features: [
      "Custom home screen layout",
      "Planned deep customization",
      "Lightweight architecture",
    ],

    stack: ["Flutter"],

    github: "https://github.com/stanlysilas/Flow-Launcher",
    // live: "",
    status: "Archived",

    images: [],
  },
];

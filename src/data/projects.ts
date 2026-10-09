export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  detailHeading: string;
  approach: string;
  highlights: string[];
  technologies: string[];
  image: string;
  imageAlt: string;
  imageFit: "cover" | "contain";
  mediaTone: "ink" | "paper" | "sand" | "slate" | "forest";
  repositoryUrl: string;
  liveUrl?: string;
  resourceUrl?: string;
  resourceLabel?: string;
};

export const projects: Project[] = [
  {
    slug: "shiftingfront",
    number: "01",
    name: "Shifting Front",
    category: "Seeded RTS campaign",
    summary:
      "One four-digit seed grows into a replayable, six-operation campaign.",
    description:
      "Choose a seed and Shifting Front writes the conflict around it: rival factions, named commanders, briefings, objectives, and a battlefield shaped by its biome. Then play six linked operations—build your economy, position a combined-arms force, and adapt when the enemy changes its plan.",
    detailHeading: "A code you can replay, share, and fight over.",
    approach:
      "Enter any four digits and the same code rebuilds the same war, so a friend can face the campaign you just played. Each operation changes the job—hold an HQ, destroy a command site, escort a convoy, rescue units, or sabotage a target—while terrain and resource lines shape your route.",
    highlights: [
      "Replay or share a seed to revisit the same factions, story, and maps",
      "Build an economy and combine infantry, vehicles, support, and repairs",
      "Take on six operations, from classic RTS goals to rescue, escort, and sabotage",
      "Campaigns autosave on your device; no account is required",
    ],
    technologies: ["Next.js", "TypeScript", "Canvas 2D"],
    image: "/projects/shiftingfront.png",
    imageAlt:
      "Shifting Front strategy battle with a resource economy, isometric map, and mission directives",
    imageFit: "cover",
    mediaTone: "ink",
    repositoryUrl: "https://github.com/zakaihamilton/shiftingfront",
    liveUrl: "https://shiftingfront.com",
  },
  {
    slug: "visitoring",
    number: "02",
    name: "Visitoring",
    category: "Privacy-first website analytics",
    summary:
      "Understand your site’s traffic without cookies or stored IP addresses.",
    description:
      "Visitoring turns page views and custom events into readable reports on visitors, sessions, popular pages, and referrers. It keeps useful context—like broad device and region trends—while leaving raw IP addresses, cookies, and URL query details out of stored analytics.",
    detailHeading: "Measure the visit, not the person.",
    approach:
      "Visitoring answers the questions a site owner needs—what pages get traction, where visits come from, and which actions complete—without keeping a personal trail. It never saves raw IP addresses or cookies; paths and referring site names omit query details, and browser details are reduced to broad categories.",
    highlights: [
      "Read page views, visitors, sessions, top pages, and traffic sources",
      "Track the actions that matter, such as a signup or checkout completion",
      "Keep raw IPs, cookies, query details, and fine-grained browser data out of reports",
      "Respect Do Not Track and use location only for broad region trends",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/projects/visitoring-dashboard.svg",
    imageAlt:
      "Sample Visitoring dashboard with page views, visitors, activity, traffic sources, and privacy indicators",
    imageFit: "contain",
    mediaTone: "forest",
    repositoryUrl: "https://github.com/zakaihamilton/visitoring",
    resourceUrl: "https://visitoring.vercel.app/developers",
    resourceLabel: "Developer guide",
  },
  {
    slug: "postparticle",
    number: "03",
    name: "PostParticle",
    category: "Editorial publishing workspace",
    summary: "Take an article from private draft to a stable public snapshot.",
    description:
      "PostParticle is an open-source publishing workspace for articles, media, and named JSON documents. It stores content in S3-compatible object storage instead of a traditional database. Drafts stay private until you publish a stable snapshot; revisions can be restored, and private media originals become public delivery copies for your site.",
    detailHeading: "Publish when it’s ready. Roll back when it isn’t.",
    approach:
      "PostParticle separates the working draft from the public snapshot, so edits do not reach your site before you publish. Keep a revision trail to restore earlier work, manage original media privately, and serve public copies through a typed API and Next.js client.",
    highlights: [
      "Write Markdown with previews, tags, covers, article dates, and SEO fields",
      "Publish or unpublish stable snapshots and restore earlier revisions",
      "Keep uploaded media originals private while serving public image and video copies",
      "Fetch published-only content through a typed Next.js client",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "CSS Modules",
      "S3-compatible storage",
    ],
    image: "/projects/postparticle-workspace.svg",
    imageAlt:
      "Illustrative PostParticle workspace with a private draft, publishing status, revision history, and media controls",
    imageFit: "contain",
    mediaTone: "sand",
    repositoryUrl: "https://github.com/zakaihamilton/postparticle",
  },
  {
    slug: "perminister",
    number: "04",
    name: "Perminister",
    category: "Multi-product identity platform",
    summary: "Shared identity and scoped access for a connected product suite.",
    description:
      "Perminister is the identity layer for teams building more than one app. It handles accounts, organizations, invitations, memberships, and scoped grants while each product keeps its brand, domain data, and resource checks.",
    detailHeading: "One team. The right access in every product.",
    approach:
      "People use a shared account across products, then receive app-bound sessions and product, project, or workspace permissions. Each app stays in charge of its own experience and data while server-side authorization follows one consistent contract; service keys can be scoped and revoked.",
    highlights: [
      "Manage shared email and password accounts, verification, and recovery",
      "Invite organization members and grant product, project, or workspace access",
      "Let apps authorize access to their own data on the server",
      "Issue scoped, revocable user keys and service integrations",
    ],
    technologies: ["Next.js", "TypeScript", "Object storage"],
    image: "/projects/perminister-map.svg",
    imageAlt:
      "Perminister access model connecting shared accounts and organization membership to Visitoring and PostParticle",
    imageFit: "contain",
    mediaTone: "paper",
    repositoryUrl: "https://github.com/zakaihamilton/perminister",
  },
  {
    slug: "repnix",
    number: "05",
    name: "RepNix",
    category: "Repository health CLI",
    summary: "Find missing repository checks before adding another dependency.",
    description:
      "RepNix audits JavaScript and TypeScript repositories locally to map the checks already in place and spot gaps without duplicating existing tools. Choose only the recommendations that fit, review every package, script, configuration, and CI change, then run selected checks through one command.",
    detailHeading: "A stronger baseline, without the tool pile.",
    approach:
      "RepNix starts with a read-only audit of your repository’s lockfile, scripts, configuration, and CI. Setup prepares a reviewable plan; adopt the checks that fit, then run your chosen providers together locally or in CI.",
    highlights: [
      "Audit current guardrails without changing files",
      "Find gaps across tests, documentation, supply chain, releases, and frontend performance",
      "Preview dependency, script, configuration, and CI changes before applying them",
      "Run the checks you choose through one health command",
    ],
    technologies: ["Node.js", "TypeScript", "CLI"],
    image: "/projects/repnix.svg",
    imageAlt:
      "RepNix audit preview showing existing repository checks beside recommendations for missing guardrails",
    imageFit: "contain",
    mediaTone: "slate",
    repositoryUrl: "https://github.com/zakaihamilton/repnix",
    resourceUrl: "https://www.npmjs.com/package/repnix",
    resourceLabel: "npm package",
  },
  {
    slug: "hostpresent",
    number: "06",
    name: "Host Present",
    category: "Presenter-led browser meetings",
    summary: "A meeting room where the host keeps the stage and sets the pace.",
    description:
      "Host Present keeps a live session focused: the presenter owns the main stage, guests join listening first, and speaking requests go to the host. Share a camera or screen, manage who can publish, chat with the room, and save a local recording when the session ends.",
    detailHeading: "Put the presenter in focus. Keep the room in reach.",
    approach:
      "Made for demos, workshops, and talks with a small audience, Host Present puts host controls at the center of the room. Attendees can listen, request the floor, and follow along in room or private chat; the host decides which guest feeds go live.",
    highlights: [
      "Share a camera, screen, window, or browser tab, with audio when supported",
      "Let guests listen first and request a speaking slot",
      "Manage room media, chat, invitations, and reconnects from the host view",
      "Record in the browser and save the file locally",
      "Carry camera, screen, and room data over WebRTC relay trees without an SFU",
    ],
    technologies: ["Next.js", "WebRTC", "PeerJS"],
    imageAlt:
      "Illustrative Host Present room with presenter-led stage, listening attendees, speaking request, and host controls",
    image: "/projects/hostpresent-room.svg",
    imageFit: "contain",
    mediaTone: "paper",
    repositoryUrl: "https://github.com/zakaihamilton/hostpresent",
    liveUrl: "https://hostpresent.com",
  },
  {
    slug: "zakamurai",
    number: "07",
    name: "Zakamurai",
    category: "Local-first browser IDE",
    summary:
      "Write, review, build, and preview web projects without leaving the browser.",
    description:
      "Zakamurai puts a file tree, editor, local AI assistant, browser-based builds, runtime logs, and live preview in one workspace. AI suggestions arrive as structured diffs you can inspect before approving; then build and preview the proposed code without a local toolchain.",
    detailHeading: "Code, ask, inspect, run—in the same browser.",
    approach:
      "Local AI uses WebLLM and WebGPU on supported devices; editing and builds still work when AI is unavailable. Projects persist in browser storage and export as ZIP files, while configured production previews run on a separate origin from the IDE.",
    highlights: [
      "Use local model assistance on compatible devices, or keep building without AI",
      "Review structured changes and build proposed code before approving it",
      "Inspect build output and runtime logs beside a live preview",
      "Keep projects in browser storage and export a portable ZIP",
    ],
    technologies: ["Next.js", "TypeScript", "WebLLM", "WebGPU", "esbuild-wasm"],
    image: "/projects/zakamurai-workspace.svg",
    imageAlt:
      "Illustrative Zakamurai browser IDE with project files, code editor, build controls, reviewable AI changes, and live preview",
    imageFit: "contain",
    mediaTone: "slate",
    repositoryUrl: "https://github.com/zakaihamilton/zakamurai",
    liveUrl: "https://zakamurai.com",
  },
  {
    slug: "peerovo",
    number: "08",
    name: "Peerovo",
    category: "WebRTC connection service",
    summary:
      "Connect browser peers with session-bound tickets, PeerJS signaling, and short-lived TURN credentials.",
    description:
      "Peerovo gives browser apps one shared WebRTC connection service. Your backend authenticates people and decides who may join; it exchanges its server-only project key for a peer ticket bound to one project, session, and peer ID. Browsers use that ticket for PeerJS signaling and request ICE settings, including temporary TURN credentials when a direct route is unavailable.",
    detailHeading: "Your app decides who. Peerovo connects the peers.",
    approach:
      "Keep identity, room membership, and peer naming in your app. Peerovo checks each ticket against the exact project, session, and peer ID, manages signaling admission and capacity, and issues short-lived coturn credentials. Project keys stay on the server, while usage summaries leave out session IDs, peer IDs, and credentials.",
    highlights: [
      "Issue signed tickets for an authorized project, session, and exact peer ID",
      "Keep project API keys on your server while browsers use short-lived peer tickets",
      "Handle PeerJS signaling and return STUN settings with temporary TURN credentials",
      "Track service usage without logging session IDs, peer IDs, or credentials",
    ],
    technologies: ["Node.js", "Express", "PeerJS", "WebRTC", "coturn"],
    image: "/projects/peerovo.svg",
    imageAlt:
      "Peerovo connection flow from app authorization through session-bound tickets to PeerJS signaling and browser WebRTC connections",
    imageFit: "contain",
    mediaTone: "paper",
    repositoryUrl: "https://github.com/zakaihamilton/peerovo",
    resourceUrl:
      "https://github.com/zakaihamilton/peerovo/blob/main/docs/adding-projects.md",
    resourceLabel: "Integration guide",
  },
];

export const projectCount = projects.length;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectNeighbors(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);

  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next:
      index >= 0 && index < projects.length - 1
        ? projects[index + 1]
        : undefined,
  };
}

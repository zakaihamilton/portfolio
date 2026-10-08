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
    category: "Strategy game",
    summary: "A whole campaign, written by a four-digit code.",
    description:
      "A browser-based real-time strategy game where every seed creates a complete campaign: factions, commanders, stories, maps, and objectives. The same code always returns the same world, ready to play or share.",
    detailHeading: "A world written from a seed.",
    approach:
      "The four-digit seed deterministically creates factions, commanders, story, maps, and objectives, so the same code produces the same campaign. Players can save without an account and share a code to share the universe.",
    highlights: [
      "Deterministic campaigns built from a four-digit seed",
      "Six-operation stories with changing objectives and battlefields",
      "Economy, production, combat, and adaptive enemy forces",
    ],
    technologies: ["Next.js", "TypeScript", "Canvas 2D"],
    image: "/projects/shiftingfront.png",
    imageAlt:
      "An isometric Shifting Front battlefield with a mission directive panel",
    imageFit: "cover",
    mediaTone: "ink",
    repositoryUrl: "https://github.com/zakaihamilton/shiftingfront",
    liveUrl: "https://shiftingfront.com",
  },
  {
    slug: "visitoring",
    number: "02",
    name: "Visitoring",
    category: "Privacy-minded analytics",
    summary: "Know your traffic. Keep it simple.",
    description:
      "Lightweight analytics for the websites you run. Visitoring brings page views, sessions, traffic sources, and custom events into one dashboard while avoiding raw IP storage, cookies, and full URL details.",
    detailHeading: "Useful insight, with a lighter footprint.",
    approach:
      "Records are tied to a project and site, with page paths and referring site names stored instead of full URLs. The dashboard surfaces visits, sessions, events, sources, devices, and regions without retaining raw IP addresses.",
    highlights: [
      "Page views, sessions, popular pages, and custom events",
      "Privacy-conscious collection without raw IP or cookie storage",
      "A collector that understands Sentry8 event formats",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/projects/visitoring.png",
    imageAlt:
      "Visitoring product graphic highlighting page views, traffic sources, and custom events",
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
    category: "Publishing workspace",
    summary: "A calm workspace for articles, media, and JSON.",
    description:
      "An open-source content workspace for writing articles, managing media, and working with dynamic JSON documents. It keeps publishing deliberate, with drafts, public snapshots, and recoverable revisions.",
    detailHeading: "Content that moves from draft to public.",
    approach:
      "Articles keep drafts separate from published snapshots, with revisions available for recovery. Media can move from private originals to public delivery copies, while the API exposes published content.",
    highlights: [
      "Markdown articles with previews, tags, covers, and SEO fields",
      "Private media originals with public delivery copies",
      "Published-only content APIs and a typed Next.js fetch client",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "CSS Modules",
      "S3-compatible storage",
    ],
    image: "/projects/postparticle.webp",
    imageAlt: "A warm, sunlit writing studio representing PostParticle",
    imageFit: "cover",
    mediaTone: "sand",
    repositoryUrl: "https://github.com/zakaihamilton/postparticle",
  },
  {
    slug: "perminister",
    number: "04",
    name: "Perminister",
    category: "Identity and access",
    summary: "One access layer for a family of products.",
    description:
      "A shared identity and access platform for organizations and product teams. Consumer applications keep their own branded experiences and domain data while using common accounts, memberships, and scoped permissions.",
    detailHeading: "Shared access. Product-specific experiences.",
    approach:
      "Identity, app-bound sessions, and authorization are managed centrally. Each consumer product keeps its own branded interface and domain data while using shared organizations, invitations, memberships, and scoped grants.",
    highlights: [
      "Shared identity, app-bound sessions, and account recovery",
      "Organizations, invitations, team membership, and permission grants",
      "Scoped user API keys and service integrations",
    ],
    technologies: ["Next.js", "TypeScript", "Object storage"],
    image: "/projects/perminister.png",
    imageAlt:
      "An illustration connecting organization members to applications, data, and services",
    imageFit: "contain",
    mediaTone: "paper",
    repositoryUrl: "https://github.com/zakaihamilton/perminister",
  },
  {
    slug: "repnix",
    number: "05",
    name: "RepNix",
    category: "Developer tooling",
    summary: "The guardrails you meant to add, in one clear workflow.",
    description:
      "A local-first CLI that audits the checks already protecting a repository, finds useful gaps, and helps add a focused set of complementary tools without duplicating existing workflows.",
    detailHeading: "Start with the guardrails already in place.",
    approach:
      "An audit inventories active checks and recommends relevant gaps. Setup previews the planned packages, scripts, and configuration for review, then one health command brings the selected providers together locally or in CI.",
    highlights: [
      "Read-only audits that map active repository checks",
      "Reviewed setup plans for packages, scripts, and configuration",
      "Unified health checks with actionable findings and baselines",
    ],
    technologies: ["Node.js", "TypeScript", "CLI"],
    image: "/projects/repnix.svg",
    imageAlt:
      "A RepNix repository health audit showing existing checks and recommendations",
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
    category: "Browser meetings",
    summary: "Focused meetings that keep the presenter at the center.",
    description:
      "A browser meeting room built for one presenter and a small audience. Participants can join quickly while the host manages the stage, room controls, recording, and who gets to speak.",
    detailHeading: "The presenter stays at the center.",
    approach:
      "Attendees can join listening-only and request to speak, while the host decides who can publish video. WebRTC carries live media and room chat, and recording stays in the browser until the host saves it.",
    highlights: [
      "Presenter-first camera and screen-share stage",
      "Host-managed participant media and speaking requests",
      "Peer-to-peer WebRTC media, chat, and local recording",
    ],
    technologies: ["Next.js", "WebRTC", "PeerJS"],
    image: "/projects/hostpresent.png",
    imageAlt:
      "An illustration of a presenter in a browser meeting with participant tiles and controls",
    imageFit: "cover",
    mediaTone: "paper",
    repositoryUrl: "https://github.com/zakaihamilton/hostpresent",
    liveUrl: "https://hostpresent.com",
  },
];

export const projectCount = projects.length;
export const formattedProjectCount = String(projectCount).padStart(2, "0");

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

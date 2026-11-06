export type ArchetypeKey = "investigator" | "builder" | "strategist" | "visionary" | "diplomat" | "operator";
export type Dna = Record<ArchetypeKey, number>;
export type Decision = { game: string; choice: string; timestamp: string };

export type GameState = {
  gameIndex: number;
  phase: "briefing" | "play" | "result" | "kryptonite" | "complete";
  mysteryCards: string[];
  mvpFeatures: string[];
  allocations: Record<string, number>;
  rapidIndex: number;
  escapeClues: string[];
  dna: Dna;
  decisions: Decision[];
  priorProfiles: Dna[];
};

export const dnaKeys: ArchetypeKey[] = ["investigator", "builder", "strategist", "visionary", "diplomat", "operator"];
export const blankDna = (): Dna => ({ investigator: 0, builder: 0, strategist: 0, visionary: 0, diplomat: 0, operator: 0 });
export const initialGameState = (): GameState => ({ gameIndex: 0, phase: "briefing", mysteryCards: [], mvpFeatures: [], allocations: { sso: 20, dashboard: 20, debt: 20, onboarding: 20, search: 20 }, rapidIndex: 0, escapeClues: [], dna: blankDna(), decisions: [], priorProfiles: [] });

export const archetypes: Record<ArchetypeKey, { name: string; character: string; icon: string; eyebrow: string; instinct: string; power: string; blindSpot: string; color: string }> = {
  investigator: { name: "Investigator", character: "The Detective", icon: "🕵️", eyebrow: "DISCOVERY & ANALYSIS", instinct: "Understand → Validate → Decide", power: "You prevent teams from solving the wrong problem.", blindSpot: "You may keep looking for certainty when the team needs a decision.", color: "violet" },
  builder: { name: "Builder", character: "The Experimenter", icon: "🧨", eyebrow: "SPEED & EXPERIMENTATION", instinct: "Try → Learn → Iterate", power: "You turn ambiguous ideas into real customer learning.", blindSpot: "Momentum can outrun your confidence in the problem.", color: "orange" },
  strategist: { name: "Strategist", character: "The Navigator", icon: "🧭", eyebrow: "VISION & DIRECTION", instinct: "Frame → Focus → Align", power: "You connect noisy signals to a useful direction.", blindSpot: "The elegant strategic answer can miss the urgent detail.", color: "blue" },
  visionary: { name: "Visionary", character: "The Pathfinder", icon: "🔭", eyebrow: "OPPORTUNITY & CONTEXT", instinct: "Imagine → Position → Move", power: "You spot options beyond the obvious brief.", blindSpot: "A compelling future can distract from today’s constraint.", color: "pink" },
  diplomat: { name: "Diplomat", character: "The Storyteller", icon: "🎙️", eyebrow: "ALIGNMENT & INFLUENCE", instinct: "Listen → Translate → Mobilize", power: "You turn competing perspectives into shared momentum.", blindSpot: "Seeking alignment can delay a necessary trade-off.", color: "green" },
  operator: { name: "Operator", character: "The Fixer", icon: "🔧", eyebrow: "EXECUTION & DELIVERY", instinct: "Structure → Unblock → Ship", power: "You bring order and momentum to messy execution.", blindSpot: "You may optimize the mechanism before revisiting the outcome.", color: "yellow" }
};

export const mysteryEvidence = [
  { id: "analytics", icon: "📊", type: "PRODUCT DATA", title: "Checkout conversion", body: "42% → 31% since Friday", clue: "The drop begins immediately after checkout opens." },
  { id: "customers", icon: "💬", type: "SUPPORT QUEUE", title: "New complaint cluster", body: "“It looked like my card was charged twice.”", clue: "31 tickets mention delayed payment confirmation." },
  { id: "deploy", icon: "⚡", type: "DEPLOY LOG", title: "Friday, 18:42", body: "Payment SDK v4.2 deployed", clue: "The new retry flow changed the confirmation state." },
  { id: "competitor", icon: "🛰️", type: "MARKET WATCH", title: "Competitor activity", body: "No competitor launched this weekend", clue: "External context is quiet; the signal is likely internal." },
  { id: "sales", icon: "🤝", type: "REVENUE SIGNAL", title: "Sales feedback", body: "No change in lead quality or discounting", clue: "High-intent accounts are abandoning too." },
  { id: "interviews", icon: "🎧", type: "USER CLIPS", title: "Call #14", body: "“I tapped pay again because nothing happened.”", clue: "The customer cannot tell whether the transaction succeeded." }
];

export const mysteryMoves = [
  { id: "rollback", title: "Roll back the latest release", caption: "Protect customers now; learn later.", score: { builder: 2, operator: 3 } },
  { id: "users", title: "Talk to affected users", caption: "Get closer to the experience behind the metric.", score: { investigator: 3, diplomat: 1 } },
  { id: "segment", title: "Segment the funnel data", caption: "Find the shape of the decline before acting.", score: { investigator: 3, strategist: 2 } },
  { id: "engineering", title: "Ask Engineering to investigate", caption: "Trace the technical dependency.", score: { operator: 3, investigator: 1 } },
  { id: "competitor-move", title: "Check competitor activity", caption: "Test an external explanation.", score: { visionary: 3, strategist: 1 } }
];

export const mvpFeatures = [
  { id: "google", icon: "G", title: "Google login", cost: 6, note: "Fast path", score: { builder: 2 } },
  { id: "progress", icon: "◌", title: "Progress indicator", cost: 3, note: "Set expectations", score: { investigator: 1, operator: 1 } },
  { id: "skip", icon: "→", title: "Skip onboarding", cost: 2, note: "Reduce friction", score: { builder: 2, strategist: 1 } },
  { id: "personal", icon: "✦", title: "Personalization", cost: 9, note: "Higher relevance", score: { visionary: 3 } },
  { id: "video", icon: "▷", title: "Video tutorial", cost: 5, note: "Explain the value", score: { diplomat: 2 } },
  { id: "forms", icon: "−", title: "Reduce form fields", cost: 4, note: "Lower effort", score: { investigator: 2, builder: 1 } },
  { id: "assistant", icon: "✳", title: "AI assistant", cost: 12, note: "High ambition", score: { visionary: 2 } },
  { id: "email", icon: "✉", title: "Welcome email", cost: 3, note: "Bring them back", score: { operator: 2, diplomat: 1 } }
];

export const stakeholderOptions = [
  { id: "sso", icon: "♛", owner: "CEO", title: "Enterprise SSO", subtitle: "Big revenue opportunity", score: { strategist: 3 } },
  { id: "dashboard", icon: "↗", owner: "Sales", title: "Customer dashboard", subtitle: "A deal is at risk", score: { diplomat: 3, strategist: 1 } },
  { id: "debt", icon: "⚙", owner: "Engineering", title: "Technical debt", subtitle: "Two weeks of repair", score: { operator: 3 } },
  { id: "onboarding", icon: "◉", owner: "Design", title: "Onboarding clarity", subtitle: "Users are struggling", score: { investigator: 3, builder: 1 } },
  { id: "search", icon: "⌕", owner: "Users", title: "Improve search", subtitle: "The repeated request", score: { visionary: 3, diplomat: 1 } }
];

export const rapidScenarios = [
  { prompt: "Engineering says: “This feature will take 6 weeks.”", choices: [
    { id: "small", text: "Can we break it into a smaller MVP?", score: { builder: 3 } }, { id: "why", text: "Why does it take 6 weeks?", score: { investigator: 3 } }, { id: "impact", text: "What’s the business impact of delaying it?", score: { strategist: 3 } }, { id: "dependencies", text: "Okay, let’s map the dependencies.", score: { operator: 3 } }, { id: "alternate", text: "Is there another way to solve this?", score: { visionary: 3 } }
  ] },
  { prompt: "Design says: “I don’t think users will understand this.”", choices: [
    { id: "test", text: "Run a usability test.", score: { investigator: 3 } }, { id: "five", text: "Ship it to 5% of users.", score: { builder: 3 } }, { id: "data", text: "Look at existing behavior data.", score: { strategist: 2, investigator: 1 } }, { id: "concept", text: "Explore a different concept.", score: { visionary: 3 } }, { id: "talk", text: "Discuss the concern with the team.", score: { diplomat: 3 } }
  ] },
  { prompt: "Your CEO asks for a feature that no customer has requested.", choices: [
    { id: "why-ceo", text: "Ask what outcome they’re trying to create.", score: { investigator: 2, diplomat: 1 } }, { id: "prototype", text: "Create a quick prototype to learn.", score: { builder: 3 } }, { id: "tradeoff", text: "Show what this displaces on the roadmap.", score: { strategist: 3 } }, { id: "market", text: "Explore the market signal behind it.", score: { visionary: 3 } }, { id: "brief", text: "Turn it into a clear delivery brief.", score: { operator: 3 } }
  ] },
  { prompt: "A launch metric misses its target on day one.", choices: [
    { id: "slice", text: "Break the data down before reacting.", score: { investigator: 3 } }, { id: "test-now", text: "Ship a small adjustment today.", score: { builder: 3 } }, { id: "northstar", text: "Revisit the metric’s strategic role.", score: { strategist: 3 } }, { id: "coordinate", text: "Align the launch team on a response.", score: { diplomat: 3 } }, { id: "runbook", text: "Open the incident runbook.", score: { operator: 3 } }
  ] },
  { prompt: "A competitor announces a new AI feature.", choices: [
    { id: "customer-need", text: "Check if it changes a customer job.", score: { investigator: 2 } }, { id: "fast-test", text: "Find the smallest comparable test.", score: { builder: 3 } }, { id: "position", text: "Decide whether this changes our position.", score: { strategist: 2, visionary: 1 } }, { id: "possibility", text: "Explore the new opportunity space.", score: { visionary: 3 } }, { id: "capacity", text: "Assess delivery capacity first.", score: { operator: 3 } }
  ] }
];

export const escapeClues = [
  { id: "orders", icon: "📉", title: "Orders dashboard", detail: "Orders fell 18%. The decline starts Friday evening." },
  { id: "logs", icon: "🧩", title: "Engineering logs", detail: "Payment confirmation retries rose 4× after v4.2." },
  { id: "reviews", icon: "⭐", title: "App reviews", detail: "“Charged, but no order showed up for a minute.”" },
  { id: "pricing", icon: "💸", title: "Pricing history", detail: "No fee or delivery-price change this month." },
  { id: "screens", icon: "📱", title: "App screenshots", detail: "The confirmation screen now waits on a gateway callback." },
  { id: "competitor-data", icon: "🛰️", title: "Competitor data", detail: "No local promotions or app changes detected." }
];

export const escapeCauses = [
  { id: "payment", title: "Payment confirmation failure", score: { investigator: 3, operator: 1 } },
  { id: "pricing", title: "Higher delivery prices", score: { strategist: 2 } },
  { id: "competition", title: "Competitor promotion", score: { visionary: 2 } }
];
export const escapeMetrics = [
  { id: "success", title: "Payment success rate", score: { operator: 2, investigator: 1 } },
  { id: "orders", title: "Daily order volume", score: { strategist: 2 } },
  { id: "reviews", title: "App-store rating", score: { diplomat: 2 } },
  { id: "time", title: "Time to first order", score: { builder: 2 } }
];

export const addScore = (dna: Dna, score: Partial<Dna>) => dnaKeys.reduce((next, key) => ({ ...next, [key]: next[key] + (score[key] || 0) }), dna);
export const orderedArchetypes = (dna: Dna) => [...dnaKeys].sort((a, b) => dna[b] - dna[a]);

export type Project = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  year: string;
  role: string;
  status: string;
  problem: string;
  solution: string;
  architecture: string[];
  challenges: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  accent: "primary" | "accent";
};

export const PROJECTS: Project[] = [
  {
    id: "ai-calling-platform",
    index: "01",
    name: "AI Calling Platform",
    tagline:
      "A production outbound calling system that runs 500 AI-driven conversations a day and writes every result back to Salesforce.",
    year: "2025",
    role: "Sole engineer",
    status: "In production",
    accent: "primary",
    problem:
      "A sales org was manually dialing lists of leads, losing hours to voicemail and disconnected numbers, with no reliable way to capture what was said or follow up at scale.",
    solution:
      "A queued calling backend on FastAPI + Celery that dials leads through ElevenLabs voices, transcribes with Deepgram, reasons with OpenAI, and syncs outcomes to Salesforce and Google Sheets — with retries, voicemail detection, and a dashboard for the team.",
    architecture: [
      "FastAPI service exposes call intents; Celery workers pick jobs off Redis and drive each conversation.",
      "Deepgram streams live transcription while ElevenLabs synthesizes replies from an OpenAI reasoning loop.",
      "Voicemail classifier short-circuits dead calls; retry policy backs off with jitter across 24h windows.",
      "Post-call pipeline scores sentiment, extracts intents, and pushes structured records into Salesforce + Sheets.",
      "Deployed on Railway with a Postgres primary and worker autoscaling tied to queue depth.",
    ],
    challenges: [
      "Keeping latency under a second across STT → LLM → TTS while streaming.",
      "Detecting voicemail reliably without wasting minutes on dead lines.",
      "Idempotent Salesforce writes when workers retry mid-call.",
    ],
    outcome:
      "Runs unattended at ~500 calls/day. Reps stopped dialing cold lists and now work only warm, scored, transcribed conversations.",
    metrics: [
      { label: "Calls / day", value: "500" },
      { label: "APIs orchestrated", value: "10+" },
      { label: "Median STT→TTS", value: "< 1s" },
      { label: "Uptime", value: "99.7%" },
    ],
    stack: [
      "FastAPI",
      "Celery",
      "PostgreSQL",
      "Redis",
      "OpenAI",
      "Deepgram",
      "ElevenLabs",
      "Salesforce",
      "Google Sheets",
      "Railway",
      "Docker",
    ],
  },
  {
    id: "ai-calling-assistant",
    index: "02",
    name: "AI Calling Assistant",
    tagline:
      "A desktop copilot that listens to a live sales call, pulls the right Salesforce record, and whispers the next line to the rep.",
    year: "2025",
    role: "Sole engineer",
    status: "Shipped",
    accent: "accent",
    problem:
      "Reps taking inbound calls were juggling a CRM tab, a notes doc, and a script — missing details and losing the thread of the conversation.",
    solution:
      "An Electron app that captures the call audio, streams it to Deepgram, matches the caller against Salesforce, and surfaces objection-handling suggestions from OpenAI in real time.",
    architecture: [
      "Electron main process taps the system audio device and streams PCM frames to Deepgram.",
      "Renderer displays live transcription with role diarization and a rolling context window.",
      "Caller ID + fuzzy match against Salesforce opens the right account and history within 300ms.",
      "OpenAI runs a lightweight suggestion agent seeded with product docs and past-call summaries.",
    ],
    challenges: [
      "Cross-platform audio capture without breaking the OS mixer.",
      "Rendering streaming tokens without jank at 60fps.",
      "Keeping suggestions actually useful — filtering noise so the rep can trust the panel.",
    ],
    outcome:
      "Reps close notes faster and stop tab-switching mid-call. Every conversation ends with a structured summary already in the CRM.",
    metrics: [
      { label: "Live transcription", value: "Real-time" },
      { label: "Suggestion latency", value: "< 800ms" },
      { label: "Platforms", value: "macOS / Win" },
      { label: "CRM sync", value: "Salesforce" },
    ],
    stack: ["Electron", "TypeScript", "Deepgram", "OpenAI", "Salesforce API"],
  },
  {
    id: "lead-enrichment",
    index: "03",
    name: "Lead Enrichment System",
    tagline:
      "An n8n workflow that turns a raw ZIP code into a scored list of local businesses, cold-call scripts, and SMS outreach — no humans in the loop.",
    year: "2025",
    role: "Automation engineer",
    status: "In production",
    accent: "primary",
    problem:
      "Sourcing local leads meant hours in Google Maps, spreadsheets, and manual scripting — and the output was inconsistent from rep to rep.",
    solution:
      "A branching n8n graph that pulls candidates from Google Places, enriches them via OpenAI, scores them against an ICP, generates a tailored cold-call script, and fires SMS through Twilio — writing everything to Salesforce.",
    architecture: [
      "Trigger accepts a ZIP + vertical, fans out Google Places queries with pagination.",
      "OpenAI classifies each business against ICP fit + intent signals.",
      "Scoring node ranks the batch; top-N flow into script generation and outreach.",
      "Twilio SMS + Salesforce lead creation branches run in parallel with dedupe.",
    ],
    challenges: [
      "Handling Google Places rate limits without dropping runs.",
      "Making generated scripts sound like a human, not a template.",
      "Deduping against existing Salesforce records on messy business names.",
    ],
    outcome:
      "100–200 qualified, scored, script-ready leads per run — a full afternoon of sourcing collapsed into a single trigger.",
    metrics: [
      { label: "Leads / run", value: "100–200" },
      { label: "Human touches", value: "0" },
      { label: "Sources joined", value: "5" },
      { label: "Runtime", value: "~4 min" },
    ],
    stack: ["n8n", "Google Places", "OpenAI", "Twilio", "Salesforce"],
  },
  {
    id: "video-automation",
    index: "04",
    name: "Video Automation Pipeline",
    tagline:
      "Long-form content in, short-form clips out — captioned, titled, and posted to three platforms without touching a keyboard.",
    year: "2024",
    role: "Automation engineer",
    status: "Shipped",
    accent: "accent",
    problem:
      "A creator was spending an entire day per long-form video cutting clips, writing hooks, and posting to Instagram, Facebook, and YouTube.",
    solution:
      "A Zapier pipeline that hands raw uploads to OpusClip, feeds the clips into ChatGPT for titles + hooks, then schedules to three platforms with per-channel formatting.",
    architecture: [
      "Drive upload → Zapier trigger → OpusClip clip generation.",
      "ChatGPT generates platform-specific titles, hooks, and hashtag sets.",
      "Publishing branches for Instagram, Facebook, and YouTube with correct aspect + copy.",
    ],
    challenges: [
      "Keeping the tone consistent across platforms without generic AI copy.",
      "Handling OpusClip processing async without blocking the Zap.",
    ],
    outcome:
      "A full day of editing and posting reduced to a single upload. Publishing cadence roughly tripled.",
    metrics: [
      { label: "Platforms", value: "3" },
      { label: "Manual steps", value: "0" },
      { label: "Cadence", value: "3× faster" },
    ],
    stack: ["Zapier", "OpusClip", "ChatGPT", "Instagram", "Facebook", "YouTube"],
  },
  {
    id: "sign-language",
    index: "05",
    name: "Real-Time Sign Language Translation",
    tagline:
      "A computer-vision system that reads hand shapes from a webcam and translates them into text in real time.",
    year: "2023",
    role: "Research + engineering",
    status: "Research project",
    accent: "primary",
    problem:
      "Communication tools for sign language rarely work in real time and rarely on commodity hardware.",
    solution:
      "A MediaPipe + TensorFlow pipeline that extracts hand landmarks per frame, feeds sequences into a classifier, and streams predictions to a live caption UI.",
    architecture: [
      "OpenCV captures webcam frames; MediaPipe extracts 21-point hand landmarks.",
      "Landmark sequences windowed and passed to a TensorFlow classifier.",
      "Debounced prediction stream renders as live captions.",
    ],
    challenges: [
      "Frame-rate on CPU-only laptops.",
      "Distinguishing similar hand shapes with limited training data.",
    ],
    outcome:
      "A working prototype that runs in real time on a normal laptop, translating a defined vocabulary of signs into readable text.",
    metrics: [
      { label: "Runtime", value: "Real-time" },
      { label: "Hardware", value: "CPU only" },
      { label: "Pipeline", value: "End-to-end" },
    ],
    stack: ["Python", "MediaPipe", "TensorFlow", "OpenCV"],
  },
];

export const SKILL_GROUPS: {
  category: string;
  caption: string;
  items: string[];
}[] = [
  {
    category: "AI",
    caption: "Reasoning, voice, and vision — used in production, not demos.",
    items: ["OpenAI", "ElevenLabs", "Deepgram", "AI Agents", "Voice Agents", "Prompt Engineering"],
  },
  {
    category: "Automation",
    caption: "Wiring systems that would otherwise be jobs.",
    items: ["n8n", "Zapier", "Celery Workflows", "Event-driven Pipelines", "Retry & Idempotency"],
  },
  {
    category: "Backend",
    caption: "APIs and services that stay up under real traffic.",
    items: ["Python", "FastAPI", "REST APIs", "PostgreSQL", "Redis", "Async I/O"],
  },
  {
    category: "Integrations",
    caption: "The unglamorous glue that makes automations useful.",
    items: ["Salesforce", "Twilio", "Google Sheets", "Google Places", "OpusClip", "Webhooks"],
  },
  {
    category: "Infrastructure",
    caption: "Shipping, running, and observing systems in the wild.",
    items: ["Docker", "Railway", "GitHub Actions", "Linux", "Logging & Alerts"],
  },
  {
    category: "Client & Desktop",
    caption: "Interfaces where they actually help the operator.",
    items: ["Electron", "TypeScript", "React", "Realtime UIs"],
  },
];

export const TIMELINE: {
  year: string;
  title: string;
  place: string;
  body: string;
  tag: string;
}[] = [
  {
    year: "2026 —",
    title: "AI Automation Engineer",
    place: "Independent",
    tag: "Now",
    body: "Building production AI systems for sales and operations teams — outbound calling platforms, live call copilots, lead enrichment pipelines, and the backends behind them.",
  },
  {
    year: "2024 – 2025",
    title: "Software Engineering Intern",
    place: "Axioware",
    tag: "Internship",
    body: "Shipped backend services and automation glue in a production codebase. First real exposure to running systems that other people depend on.",
  },
  {
    year: "2023 – 2024",
    title: "Lead — AI Student Club",
    place: "University",
    tag: "Community",
    body: "Ran workshops on applied ML, agents, and backend engineering. Mentored juniors through their first end-to-end projects.",
  },
  {
    year: "2021 – 2025",
    title: "B.S. Computer Science",
    place: "Pakistan",
    tag: "Education",
    body: "Focused on machine learning, distributed systems, and everything the syllabus wouldn't teach — production APIs, integrations, infrastructure.",
  },
];
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
  flow?: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "ulcer-classification",
    index: "01",
    name: "AI-Based Ulcer Classification System",
    tagline:
      "A full-stack endoscopic diagnostic support tool that classifies GI tissue into 8 categories in real time — with Grad-CAM overlays so clinicians see why the model decided what it did.",
    year: "2025 – 2026",
    role: "Final Year Project · Lead engineer",
    status: "Clinically validated",
    accent: "accent",
    problem:
      "Endoscopic ulcer diagnosis is manual and time-intensive — GI specialists review hundreds of images per patient, and many clinics don't have experienced gastroenterologists on staff at all.",
    solution:
      "A fine-tuned DenseNet121 served behind a Flask API classifies each frame into 8 GI categories in ~2 seconds, with Grad-CAM heatmaps rendered alongside every prediction so doctors verify reasoning instead of trusting a black box.",
    architecture: [
      "DenseNet121 fine-tuned from ImageNet weights; model loaded once at Flask startup as a singleton for fast inference.",
      "Grad-CAM layer produces a heatmap overlay per prediction, returned to the client next to the confidence score.",
      "MySQL stores patients, doctors, and prediction history with role-based access across Admin and Doctor portals.",
      "JWT auth, BCrypt password hashing, and parameterized queries throughout the API surface.",
      "n8n workflow fires after each prediction: generates a PDF report, emails it to the patient, and logs the result to Google Sheets.",
    ],
    challenges: [
      "Balancing accuracy against inference latency for near-real-time clinical use.",
      "Preventing overfitting on a moderate medical dataset — transfer learning, augmentation, and early stopping.",
      "Making output trustworthy to non-technical clinicians, not just accurate — solved with Grad-CAM + confidence scoring.",
    ],
    outcome:
      "Validated with 14 medical professionals: 92%+ test accuracy across 8 classes, 2.1s average inference, and an 82.8 SUS usability score.",
    metrics: [
      { label: "Test accuracy", value: "92%+" },
      { label: "Inference time", value: "2.1s" },
      { label: "SUS score", value: "82.8" },
      { label: "Classes", value: "8" },
    ],
    stack: [
      "TensorFlow/Keras",
      "DenseNet121",
      "Grad-CAM",
      "Flask",
      "MySQL",
      "n8n",
      "JavaScript",
      "Chart.js",
      "JWT",
    ],
    flow: [
      "Image Upload",
      "Preprocessing",
      "DenseNet121",
      "Grad-CAM",
      "MySQL Log",
      "n8n · PDF + Email + Sheets",
    ],
  },
  {
    id: "ai-calling-platform",
    index: "02",
    name: "AI Calling Platform",
    tagline:
      "A production outbound calling system that runs 500 AI-driven conversations a day and writes every result back to Salesforce.",
    year: "2025",
    role: "Sole engineer",
    status: "Shipped",
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
    index: "03",
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
      "An Electron app that captures the call audio, streams it to Deepgram, matches the caller against Salesforce, and surfaces objection-handling suggestions from Claude in real time.",
    architecture: [
      "Electron main process taps the system audio device and streams PCM frames to Deepgram.",
      "Renderer displays live transcription with role diarization and a rolling context window.",
      "Caller ID + fuzzy match against Salesforce opens the right account and history within 300ms.",
      "Claude runs a lightweight suggestion agent seeded with product docs and past-call summaries.",
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
      { label: "Suggestion trigger", value: "300ms silence detection" },
      { label: "Platforms", value: "macOS / Win" },
      { label: "CRM sync", value: "Salesforce" },
    ],
    stack: ["Electron", "JavaScript", "Deepgram", "Anthropic Claude", "Salesforce API"],
  },
  {
    id: "lead-enrichment",
    index: "04",
    name: "Lead Enrichment System",
    tagline:
      "An n8n workflow that turns a raw ZIP code into a scored list of local businesses, cold-call scripts, and SMS outreach — no humans in the loop.",
    year: "2025",
    role: "Automation engineer",
    status: "Shipped",
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
    index: "05",
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
    index: "06",
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
    items: ["OpenAI", "Anthropic Claude", "ElevenLabs", "Deepgram", "TensorFlow/Keras", "DenseNet121", "Grad-CAM", "AI Agents", "Voice Agents", "Prompt Engineering"],
  },
  {
    category: "Automation",
    caption: "Wiring systems that would otherwise be jobs.",
    items: ["n8n", "Zapier", "Celery Workflows", "Event-driven Pipelines", "Retry & Idempotency"],
  },
  {
    category: "Backend",
    caption: "APIs and services that stay up under real traffic.",
    items: ["Python", "FastAPI", "Flask", "REST APIs", "PostgreSQL", "MySQL", "Redis", "Async I/O"],
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
    place: "Axioware",
    tag: "Now",
    body: "Building production AI systems for sales and operations teams at Axioware — outbound calling platforms, live call copilots, lead enrichment pipelines, and the backends behind them.",
  },
  {
    year: "2025 – 2026",
    title: "Final Year Project — AI Ulcer Classification",
    place: "University",
    tag: "Capstone",
    body: "Designed and shipped a full-stack endoscopic diagnostic tool: fine-tuned DenseNet121 behind a Flask API, Grad-CAM explainability, MySQL + role-based portals, and an n8n reporting workflow. Validated with 14 clinicians.",
  },
  {
    year: "2024 – 2025",
    title: "Software Engineering Intern",
    place: "Gul Ahmed Textile Mills Limited",
    tag: "Internship",
    body: "Interned in the IT department at one of Pakistan's largest textile manufacturers. Supported and built internal software systems that teams relied on day-to-day.",
  },
  {
    year: "2023 – 2024",
    title: "Lead — AI Student Club",
    place: "University",
    tag: "Community",
    body: "Ran workshops on applied ML, agents, and backend engineering. Mentored juniors through their first end-to-end projects.",
  },
  {
    year: "2022 – 2026",
    title: "B.S. Artificial Intelligence",
    place: "Pakistan",
    tag: "Education",
    body: "Focused on machine learning, neural networks, and applied AI — plus the engineering the syllabus wouldn't teach: production APIs, integrations, and infrastructure.",
  },
];
// Central source of truth for the Projects section and the case-study modal.
// Each project carries a `caseStudy` block so the modal can tell the full story:
// the problem, the architecture, the hardest bug, and what I'd do differently.

export const projects = [
  {
    id: "contextos-ai",
    title: "ContextOS AI – AI Project Workspace",
    tagline: "A project manager whose AI actually understands your project.",
    description:
      "AI-powered project management workspace with a context-aware assistant (Gemini + RAG over project memory), agentic task creation, document-to-task extraction (PDF/DOCX), Kanban, calendar & timeline views, and a rule-based insights engine — with SSE-streamed AI responses.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=70",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Express 5",
      "PostgreSQL",
      "Prisma",
      "Gemini AI",
      "RAG",
      "Clerk",
    ],
    category: "AI",
    demoLink: "https://contextos-ai.vercel.app",
    githubLink: "https://github.com/JiteshJain123/contextos-ai",
    featured: true,
    accent: "from-violet-500 to-fuchsia-500",
    caseStudy: {
      metrics: [
        { value: "RAG", label: "Grounded answers" },
        { value: "SSE", label: "Real-time streaming" },
        { value: "21", label: "Insight types" },
      ],
      problem:
        "Most task trackers bolt a generic chatbot onto a board — it can't see your tasks, docs, or history, so its advice is guesswork. I wanted an assistant that answers from your actual project: your tasks, your uploaded documents, your milestones — and can act on them, not just talk.",
      architecture: [
        { label: "Next.js 16 UI", sub: "App Router · React 19 · TanStack Query", color: "from-blue-500 to-cyan-500" },
        { label: "Express 5 API", sub: "controller → service → repository", color: "from-emerald-500 to-teal-500" },
        { label: "RAG Engine", sub: "embeddings + cosine similarity search", color: "from-violet-500 to-fuchsia-500" },
        { label: "Gemini", sub: "streaming chat · planning · breakdown", color: "from-amber-500 to-orange-500" },
        { label: "PostgreSQL", sub: "Prisma · project memory store", color: "from-sky-500 to-indigo-500" },
      ],
      features: [
        "Context-aware assistant that answers grounded in your own tasks & documents via RAG",
        "Agentic actions — the assistant can create and update tasks after a confirm step",
        "Document understanding: upload PDF/DOCX/TXT → extracted, suggested tasks in one click",
        "Insights engine flags overdue work, bottlenecks and per-project health scores",
        "Kanban board, calendar, and Gantt-style timeline with milestones",
      ],
      hardestBug: {
        title: "Streaming answers that referenced stale project memory",
        body: "Answers sometimes cited tasks that had just been renamed or deleted. The embeddings powering retrieval were written once and never invalidated, so the cosine-similarity search surfaced outdated vectors. I moved embedding writes into the task/document mutation path and re-embedded on change, then layered a freshness check before injecting context into the prompt. Debugging it meant tracing a single question through embed → retrieve → prompt-assemble → SSE stream and logging what actually got injected at each hop.",
      },
      learnings: [
        "Swap the in-process cosine search for a real vector store (pgvector or Pinecone) so retrieval scales past a single project's memory.",
        "Add an evaluation harness for the RAG layer — golden Q&A pairs scored on retrieval hit-rate, so prompt/embedding changes are measurable instead of vibes.",
        "Introduce a job queue for embedding + document parsing so large uploads don't block the request path.",
      ],
    },
  },
  {
    id: "creatr",
    title: "Creatr – AI Content Platform",
    tagline: "Generate on-brand content with a streaming AI studio.",
    description:
      "Full-stack Generative AI platform on Next.js App Router integrating LLM APIs for AI-driven content generation with streaming responses (SSE), prompt templating, and event-driven analytics via Convex.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&auto=format&fit=crop&q=70",
    technologies: ["Next.js", "Convex", "Clerk", "LLM APIs", "Tailwind CSS"],
    category: "AI",
    demoLink: "https://ai-creator-platform-suu7.vercel.app/",
    githubLink: "https://github.com/JiteshJain123/ai-creator-platform",
    featured: true,
    accent: "from-blue-500 to-cyan-500",
    caseStudy: {
      metrics: [
        { value: "3×", label: "Faster drafting" },
        { value: "SSE", label: "Token streaming" },
        { value: "OAuth", label: "Clerk auth" },
      ],
      problem:
        "Creating content from scratch is slow and repetitive. I wanted a platform where a user describes what they need and watches AI compose it live — with reusable prompt templates and analytics on what's actually being generated.",
      architecture: [
        { label: "Next.js App Router", sub: "server components + streaming UI", color: "from-blue-500 to-cyan-500" },
        { label: "Clerk", sub: "OAuth + session management", color: "from-violet-500 to-purple-500" },
        { label: "LLM APIs", sub: "prompt templating · token-aware", color: "from-amber-500 to-orange-500" },
        { label: "Convex", sub: "reactive backend + analytics events", color: "from-emerald-500 to-teal-500" },
      ],
      features: [
        "AI-driven text/media generation with server-sent-event streaming",
        "Prompt templating so common tasks are one click, not a blank box",
        "Token-aware request handling to stay within model limits",
        "Event-driven analytics pipeline on Convex with live state propagation",
      ],
      hardestBug: {
        title: "Streamed tokens racing Convex's reactive updates",
        body: "SSE tokens arrived faster than Convex could reconcile the persisted document, so the UI flickered between the streaming buffer and the synced state. I separated the ephemeral streaming buffer from the source-of-truth Convex record and only committed the final message once the stream closed, using the buffer purely for optimistic display.",
      },
      learnings: [
        "Add response caching for identical prompt+template pairs to cut redundant LLM spend.",
        "Introduce per-user rate limiting and a token budget meter surfaced in the UI.",
        "Abstract the LLM behind a provider interface so models are swappable without touching the UI.",
      ],
    },
  },
  {
    id: "viewvault",
    title: "ViewVault – Entertainment Dashboard",
    tagline: "A fast, filterable movie-discovery dashboard.",
    description:
      "High-performance movie discovery platform with infinite scroll pagination, multi-parameter advanced filters, and real-time TMDB REST API integration. Achieved 40% faster UI rendering via memoized Redux Toolkit state slices.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=70",
    technologies: ["React.js", "Redux Toolkit", "TMDB API", "JavaScript (ES6+)"],
    category: "React",
    demoLink: "https://view-vault-beige.vercel.app",
    githubLink: "https://github.com/JiteshJain123/ViewVault",
    featured: true,
    accent: "from-rose-500 to-pink-500",
    caseStudy: {
      metrics: [
        { value: "40%", label: "Faster rendering" },
        { value: "∞", label: "Infinite scroll" },
        { value: "Live", label: "TMDB data" },
      ],
      problem:
        "Browsing movies should feel instant, but naive list rendering with live API data janks hard once you add filters and infinite scroll. I wanted smooth discovery that stays fast as the list grows into the hundreds.",
      architecture: [
        { label: "React UI", sub: "infinite scroll + filter panel", color: "from-rose-500 to-pink-500" },
        { label: "Redux Toolkit", sub: "normalized slices + memoized selectors", color: "from-violet-500 to-purple-500" },
        { label: "TMDB REST API", sub: "paginated, multi-param queries", color: "from-amber-500 to-orange-500" },
      ],
      features: [
        "Infinite scroll pagination that appends without re-rendering the world",
        "Multi-parameter advanced filters (genre, year, rating) composed into API queries",
        "Real-time TMDB integration with normalized client-side caching",
        "Memoized selectors that cut redundant re-renders by ~40%",
      ],
      hardestBug: {
        title: "Every filter change re-rendered the entire grid",
        body: "Changing one filter caused the full card grid to re-render because selectors returned new array references each time. I normalized the store and introduced memoized selectors so unchanged cards kept their references, and moved derived filtering into the selector layer rather than the component body — cutting rendering time roughly 40%.",
      },
      learnings: [
        "Migrate data fetching to RTK Query for automatic caching and request dedup.",
        "Add list virtualization so only visible cards mount, regardless of list size.",
        "Persist filter state to the URL so a search is shareable and survives refresh.",
      ],
    },
  },
];

export const projectFilters = ["All", "AI", "React"];

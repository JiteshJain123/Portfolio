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
    id: "smartio",
    title: "SmartIO – AI Personal Finance Tracker",
    tagline: "An event-driven finance tracker with a data-aware AI advisor.",
    description:
      "Full-stack AI-powered finance tracker with JWT auth, budgets, and 6 analytics endpoints built on PostgreSQL window functions & CTEs, plus a Google Gemini advisor for personalized insights, transaction auto-categorization, and a data-aware AI chat — re-architected into an event-driven Celery + Redis system and shipped to AWS ECS Fargate via GitHub Actions & Terraform.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&auto=format&fit=crop&q=70",
    technologies: [
      "React",
      "FastAPI (Python)",
      "PostgreSQL",
      "Celery",
      "Redis",
      "Docker",
      "GitHub Actions",
      "Terraform (AWS)",
      "Gemini AI",
    ],
    category: "AI",
    demoLink: "https://spend-wise-ten-rosy.vercel.app/",
    githubLink: "https://github.com/JiteshJain123/SpendWise",
    featured: true,
    accent: "from-emerald-500 to-teal-500",
    caseStudy: {
      metrics: [
        { value: "6", label: "Analytics endpoints" },
        { value: "AWS", label: "ECS Fargate deploy" },
        { value: "CI/CD", label: "GitHub Actions" },
      ],
      problem:
        "Personal finance apps show you numbers but rarely tell you what they mean. I wanted a tracker that not only records transactions and budgets but understands them — surfacing personalized insights, auto-categorizing spend, and answering questions about your own data — while running as a resilient, event-driven system.",
      architecture: [
        { label: "React UI", sub: "budgets · analytics dashboards", color: "from-rose-500 to-pink-500" },
        { label: "FastAPI", sub: "JWT auth · 6 analytics endpoints", color: "from-emerald-500 to-teal-500" },
        { label: "PostgreSQL", sub: "window functions + CTEs", color: "from-sky-500 to-indigo-500" },
        { label: "Celery + Redis", sub: "recurring txns · cached analytics", color: "from-amber-500 to-orange-500" },
        { label: "Gemini", sub: "advisor · auto-categorization · chat", color: "from-violet-500 to-fuchsia-500" },
        { label: "AWS ECS Fargate", sub: "Docker · Terraform · GitHub Actions", color: "from-blue-500 to-cyan-500" },
      ],
      features: [
        "JWT auth, budgets, and 6 analytics endpoints powered by PostgreSQL window functions & CTEs",
        "Google Gemini advisor for personalized insights and automatic transaction categorization",
        "Data-aware AI chat that answers questions grounded in your own financial data",
        "Decoupled Celery worker + Redis broker for scheduled recurring transactions and cached analytics",
        "Dockerized stack with a GitHub Actions CI pipeline and Terraform IaC deploying to AWS (ECR, RDS, ALB, EventBridge)",
      ],
      hardestBug: {
        title: "Recurring transactions firing twice under the Celery/EventBridge schedule",
        body: "Scheduled recurring transactions occasionally posted twice when a worker retried after a transient failure, corrupting analytics that were then cached in Redis. The root cause was non-idempotent task execution combined with an at-least-once delivery guarantee. I made the recurring-transaction task idempotent with a deterministic key per (schedule, period), added a uniqueness guard at the database layer, and invalidated the cached analytics on write so stale aggregates couldn't linger.",
      },
      learnings: [
        "Add a proper migration/seed strategy and integration tests around the analytics SQL so window-function changes are verifiable.",
        "Introduce structured observability (metrics + tracing) across the Celery workers to catch duplicate/lagging tasks earlier.",
        "Layer per-user rate limiting and a token budget on the Gemini calls to keep AI spend predictable at scale.",
      ],
    },
  },
  {
    id: "viewvault",
    title: "ViewVault – Full-Stack Entertainment Dashboard",
    tagline: "A fast movie-discovery platform with an AI-powered picks page.",
    description:
      "Full-stack movie discovery platform with a Node.js/Express API gateway that proxies TMDB — keeping the API token server-side and bypassing regional blocks — backed by Redis caching, plus an AI Picks page where Google Gemini turns a natural-language mood prompt into real recommendations. Normalized Redux Toolkit state with memoized selectors and infinite scroll delivered a 40% rendering improvement.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=70",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "Redis",
      "Google Gemini",
      "Docker",
      "TMDB API",
    ],
    category: "React",
    demoLink: "https://view-vault-beige.vercel.app",
    githubLink: "https://github.com/JiteshJain123/ViewVault",
    featured: true,
    accent: "from-rose-500 to-pink-500",
    caseStudy: {
      metrics: [
        { value: "40%", label: "Faster rendering" },
        { value: "AI", label: "Gemini picks" },
        { value: "∞", label: "Infinite scroll" },
      ],
      problem:
        "Browsing movies should feel instant, but calling TMDB straight from the client leaks the API token, breaks under regional blocks, and janks hard once you add filters and infinite scroll. I wanted smooth discovery that stays fast at scale — plus a way to find something to watch from a plain-English mood, not just filters.",
      architecture: [
        { label: "React UI", sub: "infinite scroll + AI Picks page", color: "from-rose-500 to-pink-500" },
        { label: "Redux Toolkit", sub: "normalized slices + memoized selectors", color: "from-violet-500 to-purple-500" },
        { label: "Node.js/Express Gateway", sub: "server-side TMDB proxy + Redis cache", color: "from-emerald-500 to-teal-500" },
        { label: "Google Gemini", sub: "mood prompt → recommendations", color: "from-amber-500 to-orange-500" },
      ],
      features: [
        "Node.js/Express API gateway that proxies TMDB, keeping the token server-side and bypassing regional blocks",
        "Redis caching layer in front of TMDB to cut latency and redundant upstream calls",
        "AI Picks page where Google Gemini converts a natural-language mood into real recommendations",
        "Normalized Redux Toolkit store with memoized selectors and infinite scroll — ~40% faster rendering",
        "Containerized end-to-end with Docker Compose",
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

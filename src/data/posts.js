// Blog posts. `content` is a list of typed blocks so the reader can render
// headings, paragraphs, lists and code without a markdown dependency.

export const posts = [
  {
    id: "rag-in-contextos",
    title: "How I Built RAG into ContextOS AI",
    excerpt:
      "Bolting a chatbot onto a task board gives you a confident liar. Here's how I made the assistant answer from your actual project — embeddings, cosine search, and streaming.",
    date: "2026-06-20",
    readTime: "6 min read",
    tags: ["RAG", "Gemini", "Architecture"],
    accent: "from-violet-500 to-fuchsia-500",
    content: [
      { type: "p", text: "A generic chatbot on a project tool is worse than no chatbot — it answers with total confidence about tasks it has never seen. The whole point of ContextOS AI was an assistant that answers from your project: your tasks, your uploaded documents, your history. That means Retrieval-Augmented Generation (RAG), not raw prompting." },
      { type: "h", text: "1. Turn the project into vectors" },
      { type: "p", text: "Every meaningful piece of a project — a task, a note, a parsed document — gets converted into an embedding using Gemini's text-embedding-004 model. An embedding is just a list of numbers that captures meaning, so two related pieces of text end up close together in vector space. These vectors become the project's persistent memory." },
      { type: "h", text: "2. Retrieve what's relevant" },
      { type: "p", text: "When you ask a question, I embed the question too, then run a cosine-similarity search against the stored vectors to find the handful of pieces most related to what you asked. Cosine similarity measures the angle between two vectors — small angle, similar meaning." },
      { type: "code", text: "const score = dot(queryVec, docVec) /\n  (magnitude(queryVec) * magnitude(docVec));\n// higher score → more relevant chunk" },
      { type: "h", text: "3. Ground the answer" },
      { type: "p", text: "The top matches are injected into the prompt as context before the model answers. So instead of guessing, the assistant reasons over your real tasks and documents. Responses stream back token-by-token over Server-Sent Events, so you watch the answer form instead of staring at a spinner." },
      { type: "h", text: "The lesson" },
      { type: "p", text: "The hard part of RAG isn't the model call — it's keeping the memory fresh and retrieving the right context. Get retrieval wrong and a smarter model just gives you a more articulate wrong answer. Next step is swapping the in-process cosine search for pgvector and adding an eval harness so I can measure retrieval quality instead of guessing at it." },
    ],
  },
  {
    id: "why-i-stream-sse",
    title: "Why I Stream AI Responses with SSE (not WebSockets)",
    excerpt:
      "Both Creatr and ContextOS AI stream AI output live. I reached for Server-Sent Events over WebSockets — here's the reasoning and the one bug it caused.",
    date: "2026-05-30",
    readTime: "4 min read",
    tags: ["SSE", "Next.js", "Performance"],
    accent: "from-blue-500 to-cyan-500",
    content: [
      { type: "p", text: "AI responses take seconds to generate. Making a user wait for the full answer feels broken, so both Creatr and ContextOS AI stream tokens as the model produces them. The question was how to push that stream to the browser." },
      { type: "h", text: "SSE vs WebSockets" },
      { type: "p", text: "WebSockets give you a full-duplex channel — great when both sides talk constantly. But AI streaming is one-directional: the server sends tokens, the client just listens. Server-Sent Events are built exactly for that. They run over plain HTTP, reconnect automatically, and need almost no plumbing." },
      { type: "list", items: [
        "One-way server → client, which is all token streaming needs",
        "Works over standard HTTP — no protocol upgrade, friendlier to proxies",
        "Automatic reconnection built into the browser's EventSource",
        "Dramatically less code than managing a socket lifecycle",
      ] },
      { type: "h", text: "The bug it caused" },
      { type: "p", text: "In Creatr, streamed tokens arrived faster than the reactive backend could persist the final message, so the UI flickered between the live buffer and the synced record. The fix was to treat the streaming buffer as purely ephemeral display state and only commit to the source-of-truth store once the stream closed." },
      { type: "h", text: "Takeaway" },
      { type: "p", text: "Pick the transport that matches the shape of your data flow. Reaching for WebSockets by default would have meant more moving parts to solve a problem SSE already solves. Match the tool to the traffic pattern, not to what sounds impressive." },
    ],
  },
];

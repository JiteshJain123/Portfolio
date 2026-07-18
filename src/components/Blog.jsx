import React, { useState } from "react";
import { PenLine, Clock, ArrowUpRight, Calendar } from "lucide-react";
import { posts } from "../data/posts";
import Modal from "./Modal";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

const PostBody = ({ blocks }) => (
  <div className="space-y-4">
    {blocks.map((b, i) => {
      if (b.type === "h")
        return (
          <h4 key={i} className="text-lg font-bold text-white pt-2">
            {b.text}
          </h4>
        );
      if (b.type === "code")
        return (
          <pre key={i} className="overflow-x-auto rounded-xl border border-slate-700/70 bg-slate-950/70 p-4 text-[13px] leading-relaxed text-cyan-300 font-mono">
            <code>{b.text}</code>
          </pre>
        );
      if (b.type === "list")
        return (
          <ul key={i} className="space-y-2">
            {b.items.map((it, j) => (
              <li key={j} className="flex items-start gap-2.5 text-[15px] text-gray-300 leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {it}
              </li>
            ))}
          </ul>
        );
      return (
        <p key={i} className="text-[15px] text-gray-300 leading-relaxed">
          {b.text}
        </p>
      );
    })}
  </div>
);

const Blog = () => {
  const [activePost, setActivePost] = useState(null);

  return (
    <section id="writing" className="py-20 px-4 bg-slate-800/40">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div data-reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-5">
            <PenLine size={15} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-semibold">From the Blog</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Writing &{" "}
            <span className="animated-gradient-text">Deep Dives</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Notes on the engineering decisions behind my projects — the why, not just the what.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-5 rounded-full bar-glow" />
        </div>

        {/* Post cards */}
        <div data-reveal className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <button
              key={post.id}
              type="button"
              onClick={() => setActivePost(post)}
              className="group text-left relative bg-slate-800/60 border border-slate-700 rounded-2xl p-6 overflow-hidden hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
            >
              <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${post.accent} opacity-50 group-hover:opacity-90 transition-opacity`} />

              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1"><Calendar size={12} /> {formatDate(post.date)}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-blue-300 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{post.excerpt}</p>

              <div className="flex flex-wrap items-center gap-2">
                {post.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-700/70 border border-slate-600 text-gray-300">
                    {t}
                  </span>
                ))}
                <span className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-blue-400">
                  Read <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Reader modal */}
      <Modal open={Boolean(activePost)} onClose={() => setActivePost(null)} labelledBy="post-title" maxWidth="max-w-2xl">
        {activePost && (
          <article className="p-6 sm:p-9">
            <div className={`inline-block mb-4 h-1 w-16 rounded-full bg-gradient-to-r ${activePost.accent}`} />
            <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
              <span className="flex items-center gap-1"><Calendar size={12} /> {formatDate(activePost.date)}</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {activePost.readTime}</span>
            </div>
            <h3 id="post-title" className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3 pr-8">
              {activePost.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-7">
              {activePost.tags.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-800 border border-slate-700 text-gray-300">
                  {t}
                </span>
              ))}
            </div>
            <PostBody blocks={activePost.content} />
          </article>
        )}
      </Modal>
    </section>
  );
};

export default Blog;

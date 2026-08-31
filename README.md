<div align="center">

# 💼 Jitesh Jain — Developer Portfolio

A **modern, responsive, animation-rich portfolio** built with **React 19**, **Vite**, and **Tailwind CSS** — showcasing full-stack & AI projects, each with an in-depth case study of how it's architected.

[![Live Demo](https://img.shields.io/badge/Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://jitesh-jain-portfolio.vercel.app/)
[![Repo](https://img.shields.io/badge/Source_Code-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JiteshJain123/Portfolio)

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=greensock&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

</div>

---

## 📖 Overview

This is my personal developer portfolio — the single place that tells the full story of what I build and *how*. Instead of static project cards, every project opens a **case-study modal** walking through the problem, the architecture, the metrics, the hardest bug I hit, and what I'd do differently. It's designed to feel fast, polished, and intentional.

---

## 🛠️ Tech Stack

| Category | Technologies |
| --- | --- |
| **Framework** | React 19, Vite 6 |
| **Styling** | Tailwind CSS 4 |
| **Animation** | GSAP, Locomotive Scroll (smooth scrolling) |
| **Icons** | Lucide, React Icons |
| **Contact** | EmailJS |
| **Deployment** | Vercel |

---

## ✨ Features

- 🧩 **Case-study project modals** — problem → architecture diagram → key metrics → hardest bug → learnings, for every project.
- ⌨️ **Command palette** — `Ctrl` / `Cmd + K` for fuzzy search and full keyboard navigation.
- 🎛️ **Dynamic project filtering** — filter by category (All · AI · React).
- 🌌 **Aurora UI** — animated gradient background, scroll-progress bar, and scroll-spy nav that highlights the active section.
- 📄 **Inline résumé viewer** — read the PDF résumé in a modal without leaving the page.
- ✍️ **Blog / Writing** — space for technical posts.
- 📱 **Fully responsive** — desktop, tablet, and mobile.
- ⚡ **Production-optimized** — code-split, lazy-loaded, ~88 kB gzipped JS.

---

## 🚀 Featured Projects

| Project | Description | Stack | Links |
| --- | --- | --- | --- |
| **ContextOS AI** | AI project-management workspace with a context-aware Gemini assistant and a RAG pipeline over project memory, agentic task actions, and PDF/DOCX-to-task extraction. | Next.js · TypeScript · Express · PostgreSQL · Prisma · Gemini · RAG | [Live](https://contextos-ai.vercel.app) · [Code](https://github.com/JiteshJain123/contextos-ai) |
| **SmartIO (SpendWise)** | AI-powered personal finance tracker with JWT auth, 6 analytics endpoints (PostgreSQL window functions & CTEs), a Gemini advisor, and an event-driven Celery + Redis backend deployed to AWS ECS Fargate via GitHub Actions & Terraform. | React · FastAPI · PostgreSQL · Celery · Redis · Docker · AWS | [Live](https://spend-wise-ten-rosy.vercel.app/) · [Code](https://github.com/JiteshJain123/SpendWise) |
| **ViewVault** | Full-stack movie-discovery platform with a Node.js/Express TMDB gateway (server-side token + Redis caching) and a Gemini-powered AI Picks page that turns a mood prompt into recommendations. | React · Redux Toolkit · Node · Express · Redis · Gemini · Docker | [Live](https://view-vault-beige.vercel.app) · [Code](https://github.com/JiteshJain123/ViewVault) |

---

## 🖼️ Sections

- **Home** — hero with a rotating role headline and quick stats.
- **About** — professional summary, education, and current focus.
- **Skills** — grouped into Languages · Frontend · Backend · AI / GenAI · Databases · DevOps & Cloud.
- **Projects** — featured builds, each with a full case study.
- **Experience** — professional internship plus leadership & community roles.
- **Achievements** — national-level competition milestones.
- **Contact** — get in touch directly from the site.

---

## 🧑‍💻 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/JiteshJain123/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server  →  http://localhost:5173
npm run dev

# 4. Build for production
npm run build

# 5. Preview the production build
npm run preview
```

> **Note:** the contact form uses EmailJS. To enable it, add your EmailJS service, template, and public keys where the form is configured (`src/components/Contacts.jsx`).

---

## 📁 Project Structure

```
Portfolio/
├── public/            # static assets + résumé PDF
├── src/
│   ├── components/    # Home, About, Skills, Projects, Experience,
│   │                  # Achievements, Blog, Contact, CommandPalette, modals…
│   ├── context/       # global UI context (theme, palette, modals)
│   ├── data/          # projects.js — single source of truth for project data
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── tailwind.config / postcss.config
```

---

## ☁️ Deployment

Deployed on **[Vercel](https://vercel.com)** with automatic deploys on every push to `main`.

```bash
npm i -g vercel
vercel        # preview deployment
vercel --prod # production deployment
```

---

## 📬 Contact

- **Email:** jainjitesh2004@gmail.com
- **GitHub:** [JiteshJain123](https://github.com/JiteshJain123)
- **LinkedIn:** [jitesh-jain22](https://linkedin.com/in/jitesh-jain22)

---

<div align="center">

⭐ If you like this portfolio, consider giving it a star!

</div>

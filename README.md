# Vivyn Bhavani Raaman - Engineering Portfolio Website

Personal portfolio website for **Vivyn Bhavani Raaman**, Mechanical & Aerospace Engineering student at the University of Connecticut (UConn).

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **shadcn/ui**, **Prisma (SQLite)**, and **Socket.IO**.

---

## 🎨 Design System & Theme Snapshot

- **Default Theme**: Dark Mode (`<html className="dark smooth-scroll">`)
- **Color Format**: OKLCH Color Space (Aerospace cyan/slate hue `220`)
  - **Background**: `oklch(0.08 0.01 220)` (Deep slate-black)
  - **Foreground**: `oklch(0.95 0.01 220)` (High-contrast platinum)
  - **Primary**: `oklch(0.85 0.02 220)` (Aerospace cyan highlight)
  - **Border**: `oklch(0.95 0.01 220 / 15%)` (Subtle translucent divider)
- **Typography**:
  - **Headings**: `Space Grotesk` (Geometric sans-serif)
  - **Body**: `Inter` (Neutral, highly legible sans)
  - **Code**: `JetBrains Mono` (Precision monospace)
- **Badges**: Unified symmetrical badges, technology pills, and degree status chips.

---

## 🚀 Quick Start (Windows)

To start the website locally with zero setup:
1. Double-click **`start_website.bat`** in this folder.
2. The script will check prerequisites, install packages (if not already installed), launch the web server on `http://localhost:3000`, and automatically open your default browser.

---

## 💻 Manual CLI Start

```bash
# 1. Install dependencies
pnpm install
# (or: npm install)

# 2. Generate Prisma Client
npx prisma generate

# 3. Start the application server
npx tsx server.ts
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📖 Comprehensive Documentation

For a full technical breakdown of the entire codebase architecture, directory structure, page routes, complete design tokens, color tables, and badge patterns, please see:
👉 **[`CODEBASE_OVERVIEW.md`](./CODEBASE_OVERVIEW.md)**

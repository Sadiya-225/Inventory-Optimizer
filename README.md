# 🧠 AI Companion - Custom Voice AI Assistants for Inventory Optimization

Create specialized voice AI companions (Inventory Optimization AI for retail management). Powered by **Next.js**, **Clerk** (auth+billing), **Supabase** (realtime DB), **Vapi** (voice), **OpenAI GPT-4** backend, **Sentry**.

## 🎓 Features

- 🔐 **Auth & Tiered Billing** with Clerk (3/10/Unlimited companions)
- 💾 **Realtime Supabase** DB (companions, session_history)
- 🗣️ **Voice AI** with Vapi + 11Labs voices (male/female, casual/formal), Deepgram transcriber, GPT-4 model
- 📚 **Library** search/filter by subject/topic
- ➕ **Create Companions**: name, topic, voice/style, duration
- 📜 **Session History** & recent sessions
- 💳 **Pricing Table** (/subscription)
- 🛡 **Sentry**
- 🎨 **Tailwind/shadcn**

## 🧪 Plans & Pricing

### 🆓 Basic - `$0/mo` (via Clerk)

- Up to **3 Companions**
- Basic access

### 🔵 Core - `$19/mo`

- Up to **10 Companions**
- Session history

### 🔴 Pro - `$39/mo`

- **Unlimited Companions**
- Full features

## 🛠️ Tech Stack

- ⚡️ Next.js 15 (App Router)
- 🔐 Clerk (Auth + Pricing)
- 💽 Supabase Realtime
- 🗣️ Vapi + ElevenLabs + Deepgram + OpenAI GPT-4
- 🛡 Sentry
- 🎨 Tailwind + shadcn/ui
- 📊 React Hook Form + Zod

## ⚙️ Local Setup

```bash
npm install
npm run dev
```

Visit: http://localhost:3000

**Required Env:**

- Clerk publishable/secret keys
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_VAPI_WEB_TOKEN`
- OpenAI key (for GPT-4)

# Sabbir Shohan — Premium portfolio UI/UX Designer Web Portal

An ultra-modern, elite, glassmorphic portfolio designed specifically for professional UI/UX Designer Sabbir Shohan. This application is engineered using React 18+, Vite, Tailwind CSS v4, and Framer Motion (`motion/react`) for fluid, cinematic transitions and scroll-driven interactivity.

---

## ✨ Outstanding Design Highlights

- **Aesthetic Glassmorphism & Glossy UI**: Soft blurred panels overlaid on rich, custom color leaks.
- **Micro-Particle Canvas Engine**: High-performance, low-cost custom particle grid that drifts across backgrounds dynamically.
- **Dark & Light Interface**: Immersive neon and dark slate views that instantly swap color systems at a single toggle.
- **Entry Loading Screen**: A professional initial text reveal loader that establishes brand seriousness the moment clients click.
- **Spring-Physics Cursor Trail**: Sleek custom cursor consisting of a central dot and trailing magnetic spring ring that scales on hover.
- **Modal Case Analysis**: Full-width overlays detailing Solusy SaaS metrics (+180% platform adoption) and milestones.
- **Insights Blog System**: Includes searching text inputs, category filter tags, custom article readouts, and an active reading progress tracker.

---

## 🗄️ Folder Architecture

```yaml
/src
  /assets/images     # Stores portfolio visuals (portrait, dashboard previews)
  /components        # Modular page modules
    - CustomCursor.tsx       # Soft-trailing interactive dot/ring cursor
    - ParticleBackground.tsx # High-performance vector canvas connector dots
    - Navbar.tsx             # FROSTED sticky navigation and color systems toggle
    - Hero.tsx               # Cinematic greetings slide and portrait containers
    - About.tsx              # Core values bento grid and stats badges
    - Services.tsx           # Deliverable checklists mapped to vector SVG icons
    - Projects.tsx           # Solusy front-center metrics and case study overlays
    - DribbbleShowcase.tsx   # Glassmorphic grid tracking concept works
    - Blog.tsx               # Searching/filtering widgets and top progress timers
    - Experience.tsx         // Chronological milestone timeline track and skills
    - Contact.tsx            # Validated secure email input transaction gate
    - Footer.tsx             # Dynamic copyrights and back-to-top assistance
  - data.ts                  # MASTER DATA STORE (Configure your site here!)
  - types.ts                 # Strong TypeScript shape definitions
  - App.tsx                  # Coordinates intersection tracking & system effects
  - index.css                # Configures custom Google fonts and visual utilities
  - main.tsx                 # Core bundle engine entry point
```

---

## ✍️ How to Customize Your Content

All visible text, metrics, links, and assets are separated from logical structures inside a clean data store: **`/src/data.ts`**. To update or append elements, you only need to edit this single file!

### 1. Updating your personal contact profiles
Open `/src/data.ts` and modify properties within the `SabbirProfile` object:
```typescript
export const SabbirProfile = {
  name: "Sabbir Shohan",
  title: "UI/UX Designer & Digital Experience Creator",
  tagline: "...",
  experienceSince: 2021,
  contact: {
    email: "your-email@gmail.com", // Change email here
    socials: {
      dribbble: "https://dribbble.com/your-id", // Change social links
      // ...
    }
  }
};
```

### 2. Appending a New Project case study
Simply add a new object to the `ProjectsData` array. It will dynamically compile onto your page, including within case-study overlays!
```typescript
{
  id: "your-project-id",
  title: "Project Name",
  subtitle: "Short Tagline",
  category: "Mobile Design",
  description: "Introductory details shown on the thumbnail.",
  longDescription: "Detailed paragraphs shown when opening the analysis.",
  image: "https://images.unsplash.com/...", // Image URL or asset path
  tags: ["Figma", "SaaS", "UX"],
  links: {
    live: "https://example.com"
  },
  metrics: [
    { label: "Completion Time", value: "3 Weeks" },
    { label: "Satisfaction score", value: "100%" }
  ],
  keyFeatures: [
    "Feature item A",
    "Feature item B"
  ],
  role: "Lead UI Designer",
  year: "2026"
}
```

### 3. Adding a New Blog Insight Article
Add a new object to the `BlogPostsData` array inside `/src/data.ts`. The search bar and filters will automatically compile, read, and index it on the spot:
```typescript
{
  id: "unique-blog-id",
  title: "My New Article Title",
  slug: "my-article-url-slug",
  excerpt: "Short 2-sentence excerpt displayed in the listing thumbnail card.",
  content: `### 1. Section Title
Your paragraph text goes here. Use markdown tags easily.

- List deliverable dot A
- List deliverable dot B

### 2. Next Section Card
Write more detailed analysis here. Spacer lines are parsed automatically!
`,
  image: "https://images.unsplash.com/your-image-url",
  category: "SaaS Design", // Can be customized
  date: "May 25, 2026",
  readTime: "3 min read",
  tags: ["UX", "SaaS", "Responsive"],
  author: {
    name: "Sabbir Shohan",
    avatar: "/src/assets/images/sabbir_portrait_1779543786495.png"
  }
}
```

---

## 🚀 Step-by-Step Vercel Deployment Instructions

Follow these simple steps to deploy your portfolio on Vercel for free in under two minutes:

1. **Upload your code to GitHub**: Create a repository on your GitHub account and push this portfolio codebase:
   ```bash
   git init
   git add .
   git commit -m "feat: launch premium portfolio"
   git remote add origin https://github.com/your-username/your-portfolio-repo.git
   git branch -M main
   git push -u origin main
   ```
2. **Import into Vercel**:
   - Go to [Vercel](https://vercel.com) and sign up with your GitHub account.
   - Click the **"Add New"** button and select **"Project"**.
   - Find your portfolio repository in the dropdown and click **"Import"**.
3. **Configure Project Settings** (Vercel automatically detects Vite configurations):
   - **Framework Preset**: Choose **"Vite"** (or let Vercel auto-detect it).
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. **Deploy**:
   - Click **"Deploy"**. Vercel will build and publish your portfolio under a fast, secure SSL custom URL (`something.vercel.app`) in under 45 seconds!

You are ready to share your majestic portfolio with world-class clients! 🎨🚀

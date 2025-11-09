# Stephen D. Phillips, CPA Website

A modern, professional website for Stephen D. Phillips, CPA built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect Next.js and deploy
5. Your site will be live at `your-project.vercel.app`

Or use the Vercel CLI:

```bash
npm i -g vercel
cd "Stove CPA"
vercel
```

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign up/login
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy!

### Other Options

- **AWS Amplify**: Connect GitHub repo and auto-deploy
- **Railway**: Connect GitHub repo and auto-deploy
- **Render**: Connect GitHub repo and auto-deploy



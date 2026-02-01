# Insurance Quiz App - Setup Guide

## Quick Start (3 Steps)

### Step 1: Install Dependencies
Open terminal in the `quiz-app` folder and run:
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to: http://localhost:3000

---

## Detailed Setup Instructions

### Prerequisites
- **Node.js**: Version 18.0.0 or higher
  - Download from: https://nodejs.org/
  - Check version: `node --version`
- **Package Manager**: npm (comes with Node.js), yarn, or pnpm

### Installation Steps

1. **Navigate to Project Directory**
   ```bash
   cd quiz-app
   ```

2. **Install All Dependencies**
   ```bash
   npm install
   ```
   
   This will install:
   - Next.js 14
   - React 18
   - TypeScript
   - Tailwind CSS
   - All required dev dependencies

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   
   You should see:
   ```
   ▲ Next.js 14.0.4
   - Local:        http://localhost:3000
   - Network:      http://192.168.x.x:3000
   ```

4. **Open Your Browser**
   - Visit http://localhost:3000
   - You should see the Quiz Start Screen

---

## Available Scripts

### Development
```bash
npm run dev
```
Starts development server on http://localhost:3000 with hot-reload

### Production Build
```bash
npm run build
```
Creates optimized production build

### Start Production Server
```bash
npm start
```
Runs the production build (run `npm run build` first)

### Linting
```bash
npm run lint
```
Checks code for errors and style issues

---

## Folder Structure Explained

```
quiz-app/
│
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles, animations, theme
│   ├── layout.tsx           # Root layout (wraps all pages)
│   └── page.tsx             # Home page (main entry point)
│
├── components/              # React Components
│   ├── Quiz.tsx            # Main quiz logic and state
│   ├── QuizCard.tsx        # Displays questions and options
│   ├── ProgressBar.tsx     # Shows progress and stats
│   ├── FinalScore.tsx      # Results screen
│   └── StartScreen.tsx     # Welcome screen
│
├── data/                   # Application Data
│   └── quizData.ts        # All 50 quiz questions
│
├── public/                # Static Files (images, etc.)
│
├── Configuration Files:
│   ├── package.json       # Dependencies and scripts
│   ├── tsconfig.json      # TypeScript settings
│   ├── tailwind.config.js # Tailwind CSS configuration
│   ├── next.config.js     # Next.js configuration
│   └── postcss.config.js  # PostCSS for Tailwind
│
└── README.md              # Project documentation
```

---

## How the App Works

### 1. Start Screen (`StartScreen.tsx`)
- Shows quiz information
- Displays features
- "Start Quiz" button begins the quiz

### 2. Quiz Flow (`Quiz.tsx`)
Main component that manages:
- Current question index
- Selected answers
- Score tracking
- Quiz state (start/quiz/finished)

### 3. Question Display (`QuizCard.tsx`)
- Shows question text
- Renders 5 answer options
- Highlights correct (green) and wrong (red) answers
- Displays explanation after answering

### 4. Progress Tracking (`ProgressBar.tsx`)
- Current question number
- Correct/wrong/remaining counts
- Accuracy percentage
- Visual progress bar

### 5. Results Screen (`FinalScore.tsx`)
- Final score and grade
- Performance statistics
- "Take Quiz Again" button

---

## Customization Guide

### Change Colors/Theme
Edit `app/globals.css`:
```css
:root {
  --bg-primary: #0a0e17;        /* Background color */
  --accent-primary: #00d9ff;    /* Cyan accent */
  --accent-secondary: #7c3aed;  /* Purple accent */
  --success: #10b981;            /* Green for correct */
  --error: #ef4444;              /* Red for wrong */
}
```

### Add/Edit Questions
Edit `data/quizData.ts`:
```typescript
{
  id: 51,
  question: "Your question?",
  options: ["A", "B", "C", "D", "E"],
  correctAnswer: "A",
  explanation: "Explanation here..."
}
```

### Change Fonts
Edit `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont');

body {
  font-family: 'YourFont', sans-serif;
}
```

---

## Troubleshooting

### Issue: `npm install` fails
**Solution**: 
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Port 3000 already in use
**Solution**: Use a different port
```bash
npm run dev -- -p 3001
```

### Issue: TypeScript errors
**Solution**: 
```bash
# Ensure TypeScript is installed
npm install --save-dev typescript @types/react @types/node

# Restart dev server
npm run dev
```

### Issue: Styles not applying
**Solution**: 
```bash
# Rebuild Tailwind
npm run build

# Restart dev server
npm run dev
```

---

## Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Import project on https://vercel.com
3. Vercel auto-detects Next.js
4. Click "Deploy"

### Deploy to Netlify
1. Push code to GitHub
2. Create new site on https://netlify.com
3. Build command: `npm run build`
4. Publish directory: `.next`

### Deploy to Any Host
```bash
# Build production version
npm run build

# Start production server
npm start
```

---

## Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Tips

1. **Production Build**: Always use `npm run build` for deployment
2. **Image Optimization**: Use Next.js Image component for images
3. **Code Splitting**: Next.js automatically splits code
4. **Caching**: Static files are cached automatically

---

## Need Help?

1. Check console for errors (F12 in browser)
2. Review error messages carefully
3. Ensure all dependencies are installed
4. Try restarting the dev server
5. Clear browser cache

---

## License & Credits

- Built with Next.js, React, TypeScript, and Tailwind CSS
- Open source for educational purposes
- Feel free to modify and extend

---

**Happy Quizzing! 🎯**

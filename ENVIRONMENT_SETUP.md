# Environment Setup Guide

## System Requirements

- **Node.js**: v16.0 or higher
- **npm**: v7.0 or higher (or yarn)
- **OS**: Windows, macOS, or Linux

## Verify Installation

```bash
# Check Node.js version
node --version
# Should output v16.0 or higher

# Check npm version
npm --version
# Should output v7.0 or higher
```

## First-Time Setup

### 1. Navigate to Project Directory
```bash
cd d:\port_re
```

### 2. Install Dependencies
```bash
npm install
```

This will:
- Install Next.js
- Install React
- Install Tailwind CSS
- Install other required packages
- Create `node_modules` folder (~400MB)

### 3. Start Development Server
```bash
npm run dev
```

Output will show:
```
> ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

### 4. Open in Browser
Visit: `http://localhost:3000`

## Development Workflow

### Hot Reload Enabled
- Edit any file and save (Ctrl+S)
- Browser automatically refreshes
- Changes visible instantly

### Watch for Changes
```bash
# Terminal shows file changes
event - compiled client and server successfully
```

### Stop Development Server
```
Ctrl + C (then press Y to confirm)
```

## Build & Production

### Build for Production
```bash
npm run build
```

This will:
- Optimize all code
- Create `.next` folder with compiled output
- Show file sizes

### Test Production Build
```bash
npm start
```

### Run Both Commands Together
```bash
npm run build && npm start
```

## Directory Setup

### Your Project Structure
```
d:\port_re\                    # Project root
├── node_modules/             # Dependencies (created by npm install)
├── .next/                     # Build output (created by npm build)
├── pages/                     # React pages
├── components/                # Reusable components
├── data/                      # Content data
├── styles/                    # CSS files
├── public/                    # Static files
├── tailwind.config.js         # Tailwind config
├── next.config.js             # Next.js config
├── package.json               # Project config
├── package-lock.json          # Dependency lock file
└── README.md                  # Documentation
```

## Important Files to Keep

**Never delete:**
- `package.json` - Project dependencies
- `package-lock.json` - Locked versions
- `.gitignore` - Git configuration

**Safe to recreate:**
- `node_modules/` - Delete and run `npm install` to recreate
- `.next/` - Delete and run `npm run build` to recreate

## Environment Variables (Optional)

Create `.env.local` for environment-specific settings:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=https://api.example.com
```

Access in code:
```javascript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

## Debugging

### Enable Debug Mode
```bash
# Windows (PowerShell)
$env:DEBUG="*"
npm run dev

# Windows (CMD)
set DEBUG=*
npm run dev

# macOS/Linux
DEBUG=* npm run dev
```

### View Network Activity
- Open DevTools (F12)
- Check Network tab
- Check Console for errors

### Check for TypeScript Errors
```bash
# If you add TypeScript later
npm run build
```

## Common Issues

### Issue: Port 3000 Already in Use
**Solution:**
```bash
npm run dev -- -p 3001
```

### Issue: node_modules Missing
**Solution:**
```bash
npm install
```

### Issue: Changes Not Showing
**Solution:**
- Save file (Ctrl+S)
- Hard refresh browser (Ctrl+Shift+R)
- Restart dev server

### Issue: "npm is not recognized"
**Solution:**
- Reinstall Node.js from nodejs.org
- Restart terminal/PowerShell
- Run `npm --version`

## Performance Tips

### Faster Installation
```bash
npm install --prefer-offline
```

### Faster Development
```bash
npm run dev -- --turbo  # If using experimental Turbo mode
```

## Cleanup

### Remove Dependencies
```bash
rm -rf node_modules
```

### Clear Cache
```bash
npm cache clean --force
```

### Reset Everything
```bash
rm -rf node_modules .next package-lock.json
npm install
npm run build
```

## Next Steps

1. ✓ Install Node.js if needed
2. ✓ Run `npm install`
3. ✓ Run `npm run dev`
4. ✓ Open http://localhost:3000
5. ✓ Make changes to `data/resumeData.js`
6. ✓ See portfolio update in real-time

## Need Help?

- **Next.js Docs**: https://nextjs.org/docs
- **npm Documentation**: https://docs.npmjs.com/
- **Node.js Documentation**: https://nodejs.org/docs/

---

**You're all set! Happy coding! 🚀**

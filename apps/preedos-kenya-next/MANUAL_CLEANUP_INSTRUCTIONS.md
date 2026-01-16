# Manual Cleanup Instructions

The old `preedos-kenya` folder is currently locked by Windows and cannot be deleted automatically. Follow these steps to safely remove it.

---

## ✅ What Has Already Been Done

1. **HSFTECH PDF Preserved:**
   - Copied from `preedos-kenya/public/HSFTECH Presentation.pdf`
   - To: `preedos-kenya-next/public/docs/HSFTECH Presentation.pdf`
   - ✅ 14 MB file safely backed up

2. **All Code Migrated:**
   - All functionality from Vanilla JS version reimplemented in Next.js
   - All data preserved in new structure

---

## 📋 Steps to Delete Old Folder

### Option 1: Windows Explorer (Easiest)
1. Close VSCode or any editors that might have files open
2. Close any terminals running in that directory
3. Open Windows Explorer
4. Navigate to: `F:\Projects\palak\apps\`
5. You'll see two folders:
   - ✅ `preedos-kenya-next` - **KEEP THIS** (current project)
   - ❌ `preedos-kenya` - **DELETE THIS** (old version)
6. Right-click on `preedos-kenya` folder
7. Click "Delete" or press Delete key
8. Confirm deletion

### Option 2: PowerShell (If Explorer Fails)
```powershell
# Open PowerShell as Administrator
cd F:\Projects\palak\apps\
Remove-Item -Path "preedos-kenya" -Recurse -Force
```

### Option 3: CMD (Alternative)
```cmd
cd F:\Projects\palak\apps\
rmdir /s /q preedos-kenya
```

### Option 4: If Still Locked
If the folder is still locked, try:

1. **Restart your computer** - This will release all file locks
2. Then use Option 1 (Windows Explorer)

Or use **Unlocker** tool:
1. Download Unlocker (free tool)
2. Right-click the `preedos-kenya` folder
3. Select "Unlocker"
4. Click "Delete"

---

## 🔍 What to Verify After Deletion

### Check Your Project Structure:
```
F:\Projects\palak\apps\
├── palak-developers/     (Keep)
├── palak-steel/          (Keep)
└── preedos-kenya-next/   (Keep - YOUR ACTIVE PROJECT)
    └── public/
        └── docs/
            └── HSFTECH Presentation.pdf ✅ (14 MB)
```

### Verify HSFTECH PDF Exists:
```bash
# From project root
ls -lh public/docs/
# Should show: HSFTECH Presentation.pdf (14M)
```

---

## ⚠️ Important Notes

### DO NOT DELETE:
- ✅ `preedos-kenya-next` - This is your current, active project
- ✅ `public/docs/HSFTECH Presentation.pdf` - Critical reference document

### SAFE TO DELETE:
- ❌ `preedos-kenya` - Old Vanilla JS version (19 MB)
  - All HTML files
  - Old vite.config.js
  - Old node_modules
  - Old src/ folder
  - Old package.json

---

## 📊 Project Port Information

### Current Next.js Project:
```bash
cd F:\Projects\palak\apps\preedos-kenya-next
pnpm dev
```
**Runs on:** `http://localhost:3000`

### To Use a Different Port:
Edit `package.json`:
```json
{
  "scripts": {
    "dev": "next dev -p 3001"  // Any port you want
  }
}
```

Or run directly:
```bash
pnpm dev -- -p 3001
```

---

## 🎯 Current Project Status

After cleanup, you'll have:

### Active Project: `preedos-kenya-next`
- **Technology:** Next.js 14 + TypeScript + Tailwind
- **Size:** ~30 MB
- **Status:** 75% Phase A Complete
- **Port:** 3000 (default)

### Completed Features:
- ✅ 8 marketing pages
- ✅ Interactive estimate calculator
- ✅ PDF quote generation
- ✅ Formspree integration
- ✅ Local storage
- ✅ Mobile responsive
- ✅ SEO optimized

### Files:
- 8 pages
- 50+ components
- 8 data files (1,615 lines)
- 4 lib utilities
- Complete documentation

---

## 🚀 Next Steps After Cleanup

Once the old folder is deleted:

1. **Test Development Server:**
   ```bash
   cd F:\Projects\palak\apps\preedos-kenya-next
   pnpm dev
   ```
   Visit: `http://localhost:3000`

2. **Test Estimate Calculator:**
   Visit: `http://localhost:3000/estimate`

3. **Verify PDF is Accessible:**
   Visit: `http://localhost:3000/docs/HSFTECH Presentation.pdf`

4. **Continue Development:**
   - Option A: Complete Phase 3 features
   - Option B: Build Phase 5 (FAQ, Blog)
   - Option C: Launch prep (optimization, deployment)

---

## ✅ Cleanup Checklist

- [ ] Close all editors with files from `preedos-kenya` folder
- [ ] Close any terminal windows in that directory
- [ ] Delete `F:\Projects\palak\apps\preedos-kenya` folder
- [ ] Verify only `preedos-kenya-next` remains
- [ ] Verify HSFTECH PDF exists in `preedos-kenya-next/public/docs/`
- [ ] Test `pnpm dev` works
- [ ] Test `/estimate` page works
- [ ] Mark as complete! 🎉

---

**Created:** January 16, 2026
**Status:** Ready for manual cleanup

#!/bin/bash

# ============================
# AUTOMATICKÝ DEPLOY NA GITHUB PAGES
# ============================

# Natvrdo nastavený tvoj GitHub repozitár
GIT_URL="https://github.com/MarioFolk/idletap.git"
BRANCH="main"

echo "🚀 Deploy IdleTap na GitHub Pages"

# 1️⃣ Inicializácia git repozitára (ak ešte neexistuje)
if [ ! -d ".git" ]; then
  echo "📂 Git repozitár neexistuje, inicializujem..."
  git init
  git branch -M $BRANCH
fi

# 2️⃣ Pridanie všetkých súborov
git add .

# 3️⃣ Commit
git commit -m "🚀 Final IdleTap release" || echo "ℹ️ Žiadne nové zmeny na commit"

# 4️⃣ Nastavenie vzdialeného repozitára
git remote remove origin 2>/dev/null
git remote add origin $GIT_URL

# 5️⃣ Push na GitHub
echo "🔄 Pushujem na GitHub..."
git push -u origin $BRANCH

echo "✅ Hotovo! Skontroluj GitHub Pages Settings pre live link:"
echo "Settings → Pages → Branch: main → Folder: /root"
echo "URL bude: https://MarioFolk.github.io/idletap/"

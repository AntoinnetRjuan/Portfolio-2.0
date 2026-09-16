# 🧪 Tests & Vérification - Landing Page

## ✅ Checklist de Vérification

### Visuel
- [ ] Logo s'affiche correctement en haut à gauche
- [ ] Titre principal "CREATE" est visible et bien stylisé
- [ ] Image portrait s'affiche avec bon aspect ratio
- [ ] Dégradé orange est visible sur toute la page
- [ ] Coins arrondis de la carte sont présents
- [ ] Ombre de la carte est visible

### Bloc Gauche
- [ ] Logo/marque en haut à gauche
- [ ] Image portrait centrée
- [ ] Titre en blanc, grand format
- [ ] Sous-titre visible
- [ ] Bouton CTA blanc avec flèche
- [ ] Avatars superposés en bas
- [ ] Badge +12 visible
- [ ] Texte confiance lisible

### Bloc Droit  
- [ ] Navigation WORK/ABOUT/SERVICES/CONTACT visible
- [ ] Bouton menu rond en gradient orange
- [ ] Dot coloré animé au-dessus du badge
- [ ] Badge "AVAILABLE FOR" + "Freelance Projects"
- [ ] Testimonial card avec guillemets
- [ ] Citation de testimonial lisible
- [ ] Photo profil ronde du client
- [ ] Nom et titre du client lisibles

### Animations
- [ ] La carte fade-in au chargement
- [ ] Les éléments apparaissent en cascade
- [ ] Hover sur le bouton CTA fonctionne
- [ ] Hover sur le bouton menu fonctionne
- [ ] Le dot du badge pulse continuellement
- [ ] Image portrait scale légèrement au hover

### Responsive (Si implémenté)
- [ ] Desktop (1440px+): 2 colonnes côte à côte
- [ ] Tablet (768-1024px): Adaptation graduelle
- [ ] Mobile (< 768px): Stack vertical

### Performance
- [ ] Page charge en < 2s
- [ ] Pas de lag lors des animations
- [ ] Images optimisées
- [ ] CSS minimisé

## 🔍 Comment Tester Localement

### 1. Démarrer le serveur
```bash
cd /home/msi/Portfolio-2.0
npm run dev
```

Ouvrez: `http://localhost:5174/`

### 2. Tester les animations
Ouvrez les DevTools (F12) → Performance → Enregistrez et regardez les animations

### 3. Tester la responsivité
DevTools → Appuyez sur `Ctrl + Shift + M` (ou Cmd + Shift + M) pour le mode responsive

### 4. Vérifier les performances
DevTools → Performance → Cliquez sur record et interagissez avec la page

### 5. Vérifier les erreurs
DevTools → Console → Vérifie qu'il n'y a aucune erreur rouge

## 🎨 Tests de Personnalisation

### Test 1: Changer la Couleur
```javascript
// src/config/landingConfig.js
// Changez les couleurs:
colors: {
  gradientFrom: 'from-blue-400',
  gradientVia: 'via-blue-500',
  gradientTo: 'to-blue-700',
}
```

Expected: Le gradient fond devient bleu ✅

### Test 2: Changer le Titre
```javascript
// src/config/landingConfig.js
hero: {
  mainTitle: 'BUILD',  // Changé de CREATE
}
```

Expected: Le titre affiche "BUILD" ✅

### Test 3: Changer l'Image
```javascript
// src/config/landingConfig.js
images: {
  portrait: 'https://different-image.com/photo.jpg'
}
```

Expected: L'image change ✅

### Test 4: Désactiver la Disponibilité
```javascript
// src/config/landingConfig.js
availability: {
  isAvailable: false,
}
```

Expected: Le badge "AVAILABLE FOR" disparaît ✅

## 🐛 Dépannage

### Problème: Images floues ou pixelisées
**Solution:**
- Vérifiez la taille d'image (300x400px minimum)
- Utilisez des images de qualité (72+ DPI)
- Optimisez avec un outil comme TinyPNG

### Problème: Animations saccadées
**Solution:**
- Réduisez `animations.containerDelay`
- Baissez `animations.itemStagger`
- Vérifiez que votre GPU est activé (F12 → Rendering)

### Problème: Couleurs ne changent pas
**Solution:**
- Effacez le cache (Ctrl + Shift + Delete)
- Redémarrez le serveur dev: `npm run dev`
- Vérifiez que Tailwind génère les classes

### Problème: Menu s'affiche toujours
**Solution:**
- Vérifiez que vous êtes sur la route "/" (accueil)
- Vérifiez `App.jsx` ligne: `const showMenu = location.pathname !== '/'`

### Problème: Les fonts ne s'affichent pas
**Solution:**
- Assurez-vous que Tailwind CSS est chargé
- Vérifiez `index.css` contient `@import "tailwindcss";`
- Redémarrez le serveur

## 📊 Tests de Performance

### Lighthouse Report
1. Ouvrez DevTools (F12)
2. Allez à "Lighthouse"
3. Cliquez "Analyze page load"
4. Vérifiez les scores

**Objectifs:**
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

### Bundle Size
```bash
npm run build
# Vérifiez la taille du build dans dist/
```

**Cible:** < 500KB total

## 🔗 URLs pour Tester

| Route | Description |
|-------|-------------|
| `/` | Landing page (accueil) |
| `/about` | Page à propos (affiche menu) |
| `/projects` | Page projets (affiche menu) |
| `/contact` | Page contact (affiche menu) |

## 🎯 Scénarios de Test Utilisateur

### Scénario 1: Visiteur Première Fois
1. Accède à la page d'accueil
2. Lit le titre "CREATE"
3. Regarde la photo
4. Clique sur "VIEW WORK"
5. Lire le témoignage

**Vérifier:** Tous les éléments sont visibles et cliquables ✅

### Scénario 2: Navigation
1. Arrive sur la landing
2. Clique sur "ABOUT" dans la navigation
3. Vérifie que le Menu global s'affiche maintenant
4. Clique sur "CONTACT"

**Vérifier:** La navigation fonctionne et le menu apparaît ✅

### Scénario 3: Mobile
1. Ouvre DevTools (F12)
2. Active le mode responsive (Ctrl+Shift+M)
3. Teste en iPhone 12 (390x844)
4. Teste en iPad (768x1024)

**Vérifier:** La page est lisible sur tous les appareils (si responsive) ✅

## 📝 Checklist de Production

Avant de déployer:

- [ ] Toutes les images sont optimisées
- [ ] Pas d'erreurs dans la console
- [ ] Pas de warnings ESLint
- [ ] Les animations ne saccadent pas
- [ ] Les liens fonctionnent
- [ ] Les couleurs sont correctes
- [ ] Responsive fonctionne (si implémenté)
- [ ] Bundle est < 500KB
- [ ] Lighthouse score > 90
- [ ] SEO meta tags présents (si implémenté)
- [ ] Pas de contenu statique en dur

## 🚀 Déploiement

### Build Production
```bash
npm run build
```

Cela crée un dossier `dist/` avec les fichiers optimisés.

### Preview Before Deploy
```bash
npm run preview
```

Cela lance le build en local pour tester.

### Deploy sur Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Deploy sur Netlify
1. Connectez votre repo GitHub
2. Branch: `main`
3. Build command: `npm run build`
4. Publish directory: `dist`

## 📈 Suivi Après Déploiement

- [ ] Vérifier que la page se charge en < 2s
- [ ] Monitorer les erreurs JavaScript
- [ ] Tracker les conversions (clics sur CTA)
- [ ] Tester les liens régulièrement
- [ ] Mettre à jour les images/contenus

---

**Tips Pro:** 
💡 Utilisez Chrome DevTools comme outil principal
💡 Testez sur au moins 2-3 appareils réels
💡 Vérifiez en mode avion pour tester la performance

**Questions?** Consultez `LANDING_PAGE_GUIDE.md` pour les solutions

# ❓ FAQ & Dépannage - Landing Page Portfolio

## 🚀 DÉMARRAGE & INSTALLATION

### Q: La landing page ne s'affiche pas
**R:** Vérifiez que vous êtes sur `http://localhost:5174/` (la route `/`)

### Q: Le serveur de développement ne démarre pas
**R:**
```bash
# Assurez-vous d'être dans le bon dossier
cd /home/msi/Portfolio-2.0

# Installez les dépendances si première fois
npm install

# Puis démarrez
npm run dev
```

### Q: Port 5174 est déjà utilisé
**R:** Vite utilisera automatiquement le port suivant (5175, 5176, etc.)

### Q: J'ai une erreur npm
**R:**
```bash
# Supprimez node_modules et réinstallez
rm -rf node_modules
npm install
npm run dev
```

---

## 🎨 PERSONNALISATION

### Q: Où je change le titre "CREATE"?
**R:** Ouvrez `src/config/landingConfig.js` et modifiez:
```javascript
hero: {
  mainTitle: 'VOTRE_TITRE',  // Changez ici
}
```

### Q: Comment je change la couleur?
**R:** Ouvrez `src/config/landingConfig.js` et modifiez:
```javascript
colors: {
  gradientFrom: 'from-blue-400',    // Changez "orange" en "blue"
  gradientVia: 'via-blue-500',
  gradientTo: 'to-blue-700',
}
```

**Ou** - Importer une couleur prédéfinie:
```javascript
import { colorBlue } from './colorVariants'
export const landingConfig = {
  colors: colorBlue,  // ✨ Change immédiatement
}
```

### Q: Comment je change l'image portrait?
**R:** Ouvrez `src/config/landingConfig.js`:
```javascript
images: {
  portrait: 'https://my-website.com/my-photo.jpg',  // Votre URL
  // OU chemin local:
  // portrait: '/images/portrait.jpg',
}
```

### Q: Je veux une autre palette de couleurs
**R:** Ouvrez `src/config/colorVariants.js`:
```javascript
// Vous trouverez:
colorBlue, colorPurple, colorGreen, colorPink, 
colorRed, colorIndigo, colorCyan, colorYellow, 
colorRainbow, colorGrayscale, colorNeon
```

Choisissez celle-ci et copiez dans `landingConfig.js`:
```javascript
import { colorPurple } from './colorVariants'
colors: colorPurple,
```

### Q: Où je change le nom/logo "Semaan"?
**R:** Ouvrez `src/config/landingConfig.js`:
```javascript
brand: {
  initial: 'D',       // Changez de 'S'
  name: 'DesignCo',   // Changez de 'Semaan'
}
```

### Q: Comment j'ajoute plus d'avatars?
**R:** Ouvrez `src/config/landingConfig.js`:
```javascript
trust: {
  avatars: [
    { id: 1, initials: '1' },
    { id: 2, initials: '2' },
    { id: 3, initials: '3' },
    { id: 4, initials: '4' },
    { id: 5, initials: '5' },  // ← Ajoutez ici
  ],
}
```

### Q: Comment je change le testimonial?
**R:** Ouvrez `src/config/landingConfig.js`:
```javascript
testimonial: {
  quote: 'Votre nouvelle citation ici.',
  author: {
    name: 'NOM AUTEUR',
    title: 'Son titre',
    image: 'https://image-url.jpg',
  },
}
```

### Q: Où je change "AVAILABLE FOR"?
**R:** Ouvrez `src/config/landingConfig.js`:
```javascript
availability: {
  status: 'AVAILABLE FOR',        // Changez le label
  type: 'Freelance Projects',     // Changez le type
  isAvailable: true,               // false pour masquer
}
```

---

## 🎭 ANIMATIONS

### Q: Les animations ne fonctionnent pas
**R:** 
1. Assurez-vous que Framer Motion est installé: `npm ls framer-motion`
2. Vérifiez que vous êtes sur la bonne route (`/`)
3. Videz le cache du navigateur (Ctrl+Shift+Delete)

### Q: Les animations sont saccadées
**R:** Réduisez les durées dans `src/config/landingConfig.js`:
```javascript
animations: {
  containerDelay: 200,   // Moins long = plus rapide
  itemStagger: 50,       // Moins long = transition plus courte
  cardDuration: 600,     // Moins long = plus rapide
}
```

### Q: Je veux des animations plus lentes
**R:** Augmentez les durées dans `src/config/landingConfig.js`:
```javascript
animations: {
  containerDelay: 500,   // Plus long = plus lent
  itemStagger: 200,
  cardDuration: 1200,
}
```

### Q: Où sont les animations définis?
**R:** Dans `src/components/HeroLanding.jsx`, cherchez:
- `containerVariants` - Animation du conteneur
- `itemVariants` - Animation des éléments
- `whileHover` - Effets hover
- `animate={{ scale }}` - Animations de pulse

---

## 📱 RESPONSIVE

### Q: Comment je teste sur mobile?
**R:** 
1. Ouvrez DevTools (F12)
2. Appuyez sur Ctrl+Shift+M (ou Cmd+Shift+M)
3. Choisissez "iPhone 12", "iPad", etc.

### Q: La landing page n'est pas responsive
**R:** C'est normal! Le design actuel est optimisé pour desktop. 
Pour ajouter mobile, ouvrez `src/components/HeroLanding.jsx` et cherchez:
```jsx
className="w-3/5"  // 60% sur desktop
// Changez en:
className="w-full md:w-3/5"  // 100% sur mobile, 60% sur desktop+
```

---

## 🖼️ IMAGES

### Q: L'image portrait est floue
**R:**
1. Vérifiez la taille (300-400px large minimum)
2. Optimisez avec TinyPNG
3. Assurez-vous que c'est en bon format (JPG/PNG)

### Q: L'image ne s'affiche pas
**R:** Vérifiez que l'URL est valide:
```javascript
images: {
  portrait: 'https://example.com/image.jpg',  // Doit être une URL valide
}
```

### Q: Je veux utiliser une image locale
**R:** Placez l'image dans `public/images/`:
```javascript
images: {
  portrait: '/images/my-portrait.jpg',  // Chemin relatif
}
```

---

## 🔗 NAVIGATION & LIENS

### Q: Les liens ne fonctionnent pas
**R:** Assurez-vous que les routes existent dans `src/App.jsx`

### Q: Où je change les liens de navigation?
**R:** Ouvrez `src/config/landingConfig.js`:
```javascript
navigation: {
  links: [
    { label: 'WORK', href: '/projects' },
    { label: 'ABOUT', href: '/about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'CONTACT', href: '/contact' },
  ],
}
```

### Q: Je veux ajouter un lien vers une URL externe
**R:** Vous pouvez utiliser une URL complète:
```javascript
{ label: 'GITHUB', href: 'https://github.com/...' }
```

---

## 🖥️ MENU GLOBAL

### Q: Pourquoi le Menu ne s'affiche pas sur la landing?
**R:** C'est intentionnel! Le Menu est caché sur la route `/`. 
Vérifiez `src/App.jsx`:
```jsx
const showMenu = location.pathname !== '/'  // Landing = pas de menu
```

### Q: Je veux le Menu sur la landing aussi
**R:** Changez dans `src/App.jsx`:
```jsx
const showMenu = location.pathname !== '/xxx'  // Cachez-le ailleurs
// OU
const showMenu = true  // Affichage partout
```

---

## ❌ ERREURS COURANTES

### Erreur: "landingConfig is not defined"
**R:** Vérifiez que vous avez importé:
```javascript
import landingConfig from '../config/landingConfig'
```

### Erreur: "colorVariants" introuvable
**R:** Assurez-vous que le fichier existe:
`src/config/colorVariants.js`

### Erreur: Tailwind classes ne s'appliquent pas
**R:** 
1. Assurez-vous que `@import "tailwindcss";` est dans `src/index.css`
2. Redémarrez le serveur: `npm run dev`

### Erreur: Images CORS
**R:** Les URLs d'Unsplash peuvent avoir des problèmes CORS. 
Utilisez votre propre serveur d'images.

---

## 🎨 DESIGN & STYLE

### Q: Comment j'ajoute une ombre custom?
**R:** Modifiez les Tailwind classes dans `HeroLanding.jsx`:
```jsx
className="shadow-2xl"  // Actuellement
className="shadow-2xl hover:shadow-3xl"  // Ajouter effet
```

### Q: Comment je change les coins arrondis?
**R:** Cherchez `rounded-3xl` ou `rounded-2xl` et changez:
```jsx
className="rounded-3xl"      // Très arrondis (24px)
className="rounded-2xl"      // Arrondis (16px)
className="rounded-xl"       // Modérément arrondis (12px)
className="rounded-lg"       // Léger arrondi (8px)
```

### Q: Comment je change la taille du texte?
**R:** Cherchez les classes Tailwind size et modifiez:
```jsx
className="text-7xl"   // Très grand (56px)
className="text-5xl"   // Grand (48px)
className="text-base"  // Normal (16px)
```

---

## 📦 PRODUCTION & DÉPLOIEMENT

### Q: Comment je fais un build production?
**R:**
```bash
npm run build
# Cela crée un dossier "dist/" avec les fichiers optimisés
```

### Q: Comment je teste le build avant de déployer?
**R:**
```bash
npm run preview
# Ouvre un serveur local avec le build
```

### Q: Comment je déploie sur Vercel?
**R:**
```bash
npm install -g vercel
vercel
# Suivez les instructions
```

### Q: Comment je déploie sur Netlify?
**R:**
1. Push votre code sur GitHub
2. Connectez le repo à Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Q: Le build est trop gros
**R:**
1. Vérifiez que vous optimisez les images
2. Utilisez `npm run build` avec minification
3. Vérifiez les dépendances inutiles

---

## 🔧 MODIFICATION AVANCÉE

### Q: Comment je crée une variante de couleur custom?
**R:** Ouvrez `src/config/colorVariants.js` et ajoutez:
```javascript
export const colorMyCustom = {
  gradientFrom: 'from-teal-400',
  gradientVia: 'via-teal-500',
  gradientTo: 'to-teal-700',
  accentLight: 'teal-400',
  accentDark: 'teal-600',
  textPrimary: 'gray-900',
  textSecondary: 'gray-500',
  bgCard: 'gray-50',
};
```

### Q: Comment je crée une animation custom?
**R:** Modifiez dans `src/components/HeroLanding.jsx`:
```jsx
const customVariants = {
  hidden: { opacity: 0, y: 50 },  // État initial
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },  // Durée
  },
};
```

### Q: Comment j'améliore les performances?
**R:**
1. Optimisez les images (TinyPNG)
2. Utilisez lazy loading pour les images
3. Minifiez le CSS/JS
4. Utilisez un CDN pour les images

---

## 📞 SUPPORT

Si vous ne trouvez pas la réponse ici:
1. Consultez [LANDING_PAGE_DOCS.md](LANDING_PAGE_DOCS.md)
2. Consultez [LANDING_PAGE_GUIDE.md](LANDING_PAGE_GUIDE.md)
3. Consultez [CHEATSHEET.md](CHEATSHEET.md)
4. Vérifiez la console (F12 → Console)

---

## 🎯 TL;DR - Réponses Rapides

| Question | Réponse Rapide |
|----------|---|
| Où je change le titre? | `src/config/landingConfig.js` - `hero.mainTitle` |
| Où je change la couleur? | `src/config/landingConfig.js` - `colors` |
| Où je change l'image? | `src/config/landingConfig.js` - `images.portrait` |
| Où je change le logo? | `src/config/landingConfig.js` - `brand` |
| Où est le code principal? | `src/components/HeroLanding.jsx` |
| Comment je teste? | `npm run dev` → `http://localhost:5174/` |
| Comment je déploie? | `npm run build` puis Vercel/Netlify |

---

**Dernière mise à jour**: 15/09/2026  
**Version**: 1.0  
**Status**: ✅ Complète et fonctionnelle

# ⚡ Cheat Sheet - Landing Page Portfolio

## 🚀 Commandes Essentielles

```bash
# Démarrer le serveur développement
npm run dev

# Build production
npm run build

# Preview du build
npm run preview

# Linter
npm run lint
```

## 📝 Modifications Rapides

### Changer le Titre Principal
**Fichier**: `src/config/landingConfig.js`
```javascript
hero: {
  mainTitle: 'YOUR_TITLE_HERE',  // Changez de "CREATE"
}
```

### Changer la Couleur Principale
**Fichier**: `src/config/landingConfig.js`
```javascript
colors: {
  gradientFrom: 'from-blue-400',    // Orange → Bleu
  gradientVia: 'via-blue-500',
  gradientTo: 'to-blue-700',
}
```

**OU** - Importer une palette prédéfinie:
```javascript
import { colorBlue } from './colorVariants'
colors: colorBlue,
```

### Changer l'Image Portrait
**Fichier**: `src/config/landingConfig.js`
```javascript
images: {
  portrait: 'https://your-image-url.jpg',
}
```

### Changer le Nom/Logo
**Fichier**: `src/config/landingConfig.js`
```javascript
brand: {
  initial: 'D',      // Changez de 'S'
  name: 'DesignCo',  // Changez de 'Semaan'
}
```

### Masquer la Disponibilité
**Fichier**: `src/config/landingConfig.js`
```javascript
availability: {
  isAvailable: false,  // Masquer le badge
}
```

## 🎨 Palettes de Couleurs Rapides

```javascript
// Importer depuis colorVariants.js
import { 
  colorBlue,      // Professionnel
  colorPurple,    // Créatif
  colorOrange,    // Chaleureux (défaut)
  colorGreen,     // Naturel
  colorPink,      // Mode
  colorRed,       // Bold
  colorIndigo,    // Corporate
  colorCyan,      // Moderne
} from './colorVariants'

// Puis utiliser:
colors: colorBlue,  // ✨ Change immédiatement
```

## 🔧 Fichiers à Modifier Pour Personnaliser

| Besoin | Fichier | Propriété |
|--------|---------|-----------|
| Titre | `landingConfig.js` | `hero.mainTitle` |
| Couleur | `landingConfig.js` | `colors.*` |
| Image | `landingConfig.js` | `images.portrait` |
| Nom/Logo | `landingConfig.js` | `brand.*` |
| Navigation | `landingConfig.js` | `navigation.links` |
| Testimonial | `landingConfig.js` | `testimonial.*` |

## 📍 Routes

| Route | Affichage |
|-------|-----------|
| `/` | Landing page (sans Menu) |
| `/about` | À propos (avec Menu) |
| `/projects` | Projets (avec Menu) |
| `/contact` | Contact (avec Menu) |

## 🎯 Palettes par Industrie

```javascript
import { industryPalettes } from './colorVariants'

// Sélectionnez par profession:
industryPalettes.developer    // Bleu (Tech)
industryPalettes.designer     // Violet (Créatif)
industryPalettes.photographer // Orange (Chaleur)
industryPalettes.marketer     // Rouge (Bold)
industryPalettes.coach        // Vert (Naturel)
```

## 🔍 Fichiers à Consulter

| Besoin | Fichier |
|--------|---------|
| Comprendre l'architecture | `LANDING_PAGE_DOCS.md` |
| Guide étape-à-étape | `LANDING_PAGE_GUIDE.md` |
| Tester & déboguer | `TESTING_GUIDE.md` |
| Vue d'ensemble | `README_LANDING_PAGE.md` |

## ⚙️ Configuration Structure

```
landingConfig.js
├── brand (logo, nom)
├── hero (titre, sous-titre, CTA)
├── trust (avatars, badge)
├── navigation (liens)
├── availability (badge disponibilité)
├── testimonial (citation, auteur)
├── images (URLs images)
├── colors (palette)
└── animations (durées)
```

## 🎭 Animations Réglables

**Fichier**: `src/config/landingConfig.js`

```javascript
animations: {
  containerDelay: 300,    // Délai initial (ms)
  itemStagger: 100,       // Délai entre éléments (ms)
  cardDuration: 800,      // Durée animation (ms)
}
```

**Presets:**
- **Rapide**: `300, 50, 600`
- **Normal**: `300, 100, 800` (défaut)
- **Lent**: `500, 150, 1000`

## 🎯 Cas d'Usage Courants

### Cas 1: Je suis développeur
```javascript
import { industryPalettes } from './colorVariants'

colors: industryPalettes.developer,
hero.mainTitle: 'BUILD',
availability.type: 'Full Stack Projects',
```

### Cas 2: Je suis photographe
```javascript
colors: industryPalettes.photographer,
hero.mainTitle: 'CAPTURE',
availability.type: 'Editorial & Commercial',
```

### Cas 3: Je veux du minimaliste (noir/blanc)
```javascript
import { colorGrayscale } from './colorVariants'

colors: colorGrayscale,
```

## 🔗 Navigation

Pour changer les liens:
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

## 🖼️ Images

Dimensions recommandées:
- Portrait: 300-400px large × 400-500px haut (ratio 3:4)
- Qualité: 72 DPI minimum
- Format: JPG (50-100KB)
- Profile (testimonial): 48×48px minimum

## 📱 Responsive (À Implémenter)

Pour ajouter mobile support, cherchez dans `HeroLanding.jsx`:
```jsx
// Changez:
className="w-3/5"  // Desktop uniquement

// En:
className="w-full md:w-3/5"  // Mobile + Desktop
```

## 💡 Tips Productivité

1. **Utilisez VSCode Search & Replace** (Ctrl+H) pour changer les valeurs en masse
2. **Créez des fichiers config séparés** pour différents projets
3. **Testez en DevTools Responsive** (Ctrl+Shift+M)
4. **Sauvegardez les configurations** que vous aimez

## 🐛 Problèmes Courants

| Problème | Solution |
|----------|----------|
| Couleurs ne changent pas | Redémarrez `npm run dev` + videz cache |
| Animations saccadées | Baissez `containerDelay` et `itemStagger` |
| Image floue | Vérifiez taille (300x400px min) |
| Menu toujours visible | Vérifiez que vous êtes sur route "/" |
| Fonts bizarres | Assurez-vous Tailwind est chargé (`@import "tailwindcss"`) |

## 🎓 Ressources

- **Tailwind Colors**: https://tailwindcss.com/docs/customizing-colors
- **Framer Motion**: https://www.framer.com/motion/
- **React Icons**: https://react-icons.github.io/react-icons/fa6
- **Unsplash Images**: https://unsplash.com/

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
vercel
```

### Netlify
Push GitHub → Netlify détecte automatiquement

### Build command
```bash
npm run build
```

### Directory to deploy
```
dist/
```

## 📊 Fichiers Importants

```
src/
├── components/
│   ├── HeroLanding.jsx ⭐
│   └── HeroLandingConfigurable.jsx
├── config/
│   ├── landingConfig.js ⭐
│   └── colorVariants.js
└── App.jsx ⭐

Docs/
├── LANDING_PAGE_DOCS.md
├── LANDING_PAGE_GUIDE.md
├── README_LANDING_PAGE.md
└── TESTING_GUIDE.md
```

⭐ = Commencer par ces fichiers

## 🎬 Quick Start (5 min)

1. **Ouvrir**: `src/config/landingConfig.js`
2. **Changer**: `brand.name` et `hero.mainTitle`
3. **Sauvegarder**: Ctrl+S
4. **Voir**: Le site se rafraîchit automatiquement ✨

---

**Créé le**: 15/09/2026  
**Dernière maj**: 15/09/2026  
**Version**: 1.0 - Complète et fonctionnelle

# Guide d'Utilisation - Landing Page Portfolio

## 🚀 Démarrage Rapide

### Affichage de la Landing Page

La landing page s'affiche par défaut sur la route racine (`/`) en remplaçant le contenu du composant `Home`.

```jsx
// src/App.jsx - La landing page s'affiche automatiquement
<Route path="/" element={<Home />} />  // ← Affiche HeroLanding
```

## 🎨 Personnalisation Simple

### Option 1: Modifier HeroLanding.jsx directement

Éditez les valeurs dans le composant `HeroLanding.jsx` :

```jsx
// src/components/HeroLanding.jsx - ligne 20

// Logo/Brand - Changez ces valeurs
<span className="text-orange-600 font-black text-lg">S</span>  // Changez "S"
<span className="text-white font-bold text-sm tracking-widest">Semaan</span>  // Changez "Semaan"

// Titre principal
<h1 className="text-7xl font-black text-white...">CREATE</h1>  // Changez "CREATE"

// Sous-titre
<p className="text-white/90...">
  Designs that inspire.<br />Ideas that connect.  // Changez le sous-titre
</p>

// Bouton
<button className="...">VIEW WORK</button>  // Changez le texte

// Texte confiance
<p className="text-white text-xs...">Trusted by forward-thinking<br />brands worldwide</p>
```

### Option 2: Utiliser la Configuration (Recommandé)

Modifiez `src/config/landingConfig.js` pour une personnalisation centralisée :

```javascript
// src/config/landingConfig.js

export const landingConfig = {
  brand: {
    initial: 'D',           // Changez de 'S' à 'D'
    name: 'DesignStudio',   // Changez le nom
    role: 'Designer',
  },

  hero: {
    mainTitle: 'DESIGN',    // Changez le titre principal
    subtitle: [
      'Concepts that transform.',
      'Visions that inspire.',
    ],
    ctaText: 'EXPLORE WORK',
    ctaLink: '/projects',
  },

  availability: {
    status: 'AVAILABLE FOR',
    type: 'UI/UX Projects',  // Changez le type de projet
    isAvailable: true,
  },

  testimonial: {
    quote: 'Exceptional work, delivered on time, every time.',
    author: {
      name: 'SARAH WILSON',
      title: 'CEO, Creative Co',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop',
    },
  },
};
```

Puis mettez à jour `Home.jsx` pour utiliser la version configurable :

```jsx
// src/components/Home.jsx
import HeroLandingConfigurable from './HeroLandingConfigurable'

function Home() {
  return (
    <HeroLandingConfigurable />
  )
}

export default Home
```

## 🎨 Exemples de Personnalisation

### Pour un Développeur

```javascript
const landingConfig = {
  brand: {
    initial: 'D',
    name: 'DevStudio',
  },
  hero: {
    mainTitle: 'BUILD',
    subtitle: [
      'Code that scales.',
      'Performance that shines.',
    ],
  },
  availability: {
    type: 'Development & API Projects',
  },
};
```

### Pour un Photographe

```javascript
const landingConfig = {
  brand: {
    initial: 'P',
    name: 'PhotoWorks',
  },
  hero: {
    mainTitle: 'CAPTURE',
    subtitle: [
      'Moments frozen in time.',
      'Stories that last forever.',
    ],
  },
  availability: {
    type: 'Commercial Photography',
  },
};
```

### Pour un Marketer

```javascript
const landingConfig = {
  brand: {
    initial: 'M',
    name: 'MarketLab',
  },
  hero: {
    mainTitle: 'MARKET',
    subtitle: [
      'Growth that converts.',
      'Brands that dominate.',
    ],
  },
  availability: {
    type: 'Growth & Strategy Projects',
  },
};
```

## 🖼️ Remplacer l'Image Portrait

### Utilisez votre propre image

```javascript
// src/config/landingConfig.js

images: {
  portrait: '/path/to/your/portrait.jpg',  // Chemin local
  // OU
  portrait: 'https://your-domain.com/portrait.jpg',  // URL
}
```

**Recommandations:**
- Format: JPG ou PNG
- Dimensions: 300x400px minimum (aspect ratio 3:4)
- Qualité: 72 DPI pour web
- Taille: < 200KB
- Format: Portrait (vertical)

## 🎨 Changer les Couleurs

### Modifier la Palette Orange

```javascript
// src/config/landingConfig.js

colors: {
  gradientFrom: 'from-purple-400',    // Violet clair
  gradientVia: 'via-purple-500',      // Violet moyen
  gradientTo: 'to-purple-700',        // Violet foncé
  accentLight: 'purple-400',
  accentDark: 'purple-600',
}
```

**Autres palettes prédéfinies Tailwind:**

- **Bleu**: `from-blue-400 via-blue-500 to-blue-700`
- **Vert**: `from-green-400 via-green-500 to-green-700`
- **Rose**: `from-pink-400 via-pink-500 to-pink-700`
- **Indigo**: `from-indigo-400 via-indigo-500 to-indigo-700`
- **Teal**: `from-teal-400 via-teal-500 to-teal-700`

## 🔗 Modifier les Liens de Navigation

```javascript
// src/config/landingConfig.js

navigation: {
  links: [
    { label: 'PORTFOLIO', href: '/portfolio' },
    { label: 'ABOUT ME', href: '/about' },
    { label: 'SKILLS', href: '/skills' },
    { label: 'CONTACT', href: '/contact' },
  ],
}
```

## ✏️ Ajouter des Avatars Supplémentaires

```javascript
// src/config/landingConfig.js

trust: {
  text: 'Trusted by 50+ global brands',
  badge: '+50',
  avatars: [
    { id: 1, initials: 'A' },  // Ajouter plus d'avatars
    { id: 2, initials: 'B' },
    { id: 3, initials: 'C' },
    { id: 4, initials: 'D' },
    { id: 5, initials: 'E' },
    { id: 6, initials: 'F' },
  ],
}
```

## ⏱️ Ajuster les Animations

```javascript
// src/config/landingConfig.js

animations: {
  containerDelay: 200,      // Délai avant de commencer (ms)
  itemStagger: 50,          // Délai entre éléments (ms)
  cardDuration: 600,        // Durée animation carte (ms)
}
```

**Valeurs suggérées:**
- **Rapide**: `containerDelay: 200, itemStagger: 50, cardDuration: 600`
- **Moyen**: `containerDelay: 300, itemStagger: 100, cardDuration: 800`
- **Lent**: `containerDelay: 500, itemStagger: 150, cardDuration: 1000`

## 🔧 Ajouter/Retirer la Disponibilité

```javascript
// Pour masquer le badge disponibilité

availability: {
  isAvailable: false,  // Changez à false
}
```

## 📱 Responsive Design

Pour ajouter le support mobile, modifiez `HeroLanding.jsx`:

```jsx
// Actuellement: flex h-screen max-h-[85vh]

// Pour mobile: stack vertical
className={`flex flex-col ${isDesktop ? 'flex-row h-screen' : ''}`}

// Ajouter des breakpoints Tailwind
className="w-full md:w-3/5 lg:w-3/5"
```

## 🧪 Tester les Modifications

### Mode développement
```bash
npm run dev
```
Les modifications se rechargeront automatiquement.

### Build production
```bash
npm run build
npm run preview
```

## 📚 Ressources Utiles

- **Tailwind Colors**: https://tailwindcss.com/docs/customizing-colors
- **Framer Motion**: https://www.framer.com/motion/
- **React Icons**: https://react-icons.github.io/react-icons/
- **Unsplash Images**: https://unsplash.com/

## 🎯 Checklist de Personnalisation

- [ ] Changer le logo (initial + nom)
- [ ] Modifier le titre principal
- [ ] Mettre à jour le sous-titre
- [ ] Remplacer l'image portrait
- [ ] Ajuster la palette de couleurs
- [ ] Mettre à jour les liens de navigation
- [ ] Ajouter un témoignage personnalisé
- [ ] Configurer la disponibilité
- [ ] Tester le responsive
- [ ] Vérifier les animations
- [ ] Optimiser les images
- [ ] Tester en production

---

**Besoin d'aide?** Consultez la documentation complète dans `LANDING_PAGE_DOCS.md`

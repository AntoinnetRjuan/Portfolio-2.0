/**
 * Configuration de la Landing Page
 * Modifiez les valeurs ci-dessous pour personnaliser votre landing page
 */

export const landingConfig = {
  // Informations de la marque
  brand: {
    initial: 'S',        // Lettre affichée dans le logo
    name: 'Semaan',      // Nom complet de la marque
    role: 'Designer',    // Rôle professionnel
  },

  // Bloc gauche (image et contenu)
  hero: {
    mainTitle: 'CREATE',  // Titre principal en grands caractères
    subtitle: [
      'Designs that inspire.',
      'Ideas that connect.',
    ], // Sous-titre sur 2 lignes
    ctaText: 'VIEW WORK',  // Texte du bouton CTA
    ctaLink: '/projects',  // Lien du bouton
  },

  // Information de confiance (avatars)
  trust: {
    text: 'Trusted by forward-thinking brands worldwide',
    badge: '+12',  // Badge nombre de clients
    avatars: [
      { id: 1, initials: '1' },
      { id: 2, initials: '2' },
      { id: 3, initials: '3' },
      { id: 4, initials: '4' },
    ], // Liste des avatars
  },

  // Bloc droit (navigation et testimonial)
  navigation: {
    links: [
      { label: 'WORK', href: '/projects' },
      { label: 'ABOUT', href: '/about' },
      { label: 'SERVICES', href: '/#services' },
      { label: 'CONTACT', href: '/contact' },
    ],
  },

  // Badge disponibilité
  availability: {
    status: 'AVAILABLE FOR',
    type: 'Freelance Projects',
    isAvailable: true,  // Contrôle si le badge s'affiche
  },

  // Témoignage client
  testimonial: {
    quote: 'Always delivered outstanding work that exceeded our expectations.',
    author: {
      name: 'JAMES CARTER',
      title: 'Founder, Mind',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop',
    },
  },

  // Images
  images: {
    portrait: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    // Remplacez l'URL par votre propre image
    // Format recommandé: aspect ratio 3:4 (300x400px minimum)
  },

  // Couleurs (Tailwind classes)
  colors: {
    gradientFrom: 'from-orange-400',     // Couleur début gradient fond
    gradientVia: 'via-orange-500',       // Couleur milieu gradient
    gradientTo: 'to-orange-700',         // Couleur fin gradient
    accentLight: 'orange-400',           // Accent clair (bouttons, éléments)
    accentDark: 'orange-600',            // Accent foncé
    textPrimary: 'gray-900',             // Texte principal
    textSecondary: 'gray-500',           // Texte secondaire
    bgCard: 'gray-50',                   // Fond card secondaire
  },

  // Animation (durées en ms)
  animations: {
    containerDelay: 300,     // Délai avant animations
    itemStagger: 100,        // Délai entre items
    cardDuration: 800,       // Durée animation principale
  },

  // Responsive (si vous ajoutez support mobile)
  responsive: {
    columnRatioDesktop: { left: '60%', right: '40%' },  // Desktop
    columnRatioTablet: { left: '50%', right: '50%' },   // Tablet
    isMobileFullStack: true,                             // Mobile: une colonne (stack)
  },
};

/**
 * EXEMPLES DE PERSONNALISATION
 * 
 * Pour un développeur:
 * mainTitle: 'BUILD'
 * subtitle: ['Code that scales.', 'Ideas that perform.']
 * role: 'Full Stack Developer'
 * 
 * Pour un photographe:
 * mainTitle: 'CAPTURE'
 * subtitle: ['Moments that matter.', 'Stories that last.']
 * role: 'Photographer'
 * 
 * Pour un marketer:
 * mainTitle: 'MARKET'
 * subtitle: ['Growth that converts.', 'Brands that shine.']
 * role: 'Marketing Strategist'
 */

export default landingConfig;

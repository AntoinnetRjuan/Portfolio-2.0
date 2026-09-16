/**
 * VARIANTS DE COULEURS - Landing Page
 * Copiez-collez une configuration complète pour changer le thème
 */

// ========================================
// 🟠 ORANGE (Défaut - Design actuel)
// ========================================
export const colorOrange = {
  gradientFrom: 'from-orange-400',
  gradientVia: 'via-orange-500',
  gradientTo: 'to-orange-700',
  accentLight: 'orange-400',
  accentDark: 'orange-600',
  textPrimary: 'gray-900',
  textSecondary: 'gray-500',
  bgCard: 'gray-50',
};

// ========================================
// 🔵 BLEU (Professionnel & Tech)
// ========================================
export const colorBlue = {
  gradientFrom: 'from-blue-400',
  gradientVia: 'via-blue-500',
  gradientTo: 'to-blue-700',
  accentLight: 'blue-400',
  accentDark: 'blue-600',
  textPrimary: 'gray-900',
  textSecondary: 'gray-600',
  bgCard: 'slate-50',
};

// ========================================
// 💜 VIOLET (Créatif & Premium)
// ========================================
export const colorPurple = {
  gradientFrom: 'from-purple-400',
  gradientVia: 'via-purple-500',
  gradientTo: 'to-purple-700',
  accentLight: 'purple-400',
  accentDark: 'purple-600',
  textPrimary: 'gray-900',
  textSecondary: 'gray-600',
  bgCard: 'purple-50',
};

// ========================================
// 🌿 VERT (Éco & Naturel)
// ========================================
export const colorGreen = {
  gradientFrom: 'from-emerald-400',
  gradientVia: 'via-emerald-500',
  gradientTo: 'to-emerald-700',
  accentLight: 'emerald-400',
  accentDark: 'emerald-600',
  textPrimary: 'gray-900',
  textSecondary: 'gray-700',
  bgCard: 'emerald-50',
};

// ========================================
// ❤️ ROSE (Créatif & Fashion)
// ========================================
export const colorPink = {
  gradientFrom: 'from-pink-400',
  gradientVia: 'via-pink-500',
  gradientTo: 'to-pink-700',
  accentLight: 'pink-400',
  accentDark: 'pink-600',
  textPrimary: 'gray-900',
  textSecondary: 'gray-600',
  bgCard: 'pink-50',
};

// ========================================
// 🔴 ROUGE (Bold & Énergique)
// ========================================
export const colorRed = {
  gradientFrom: 'from-red-400',
  gradientVia: 'via-red-500',
  gradientTo: 'to-red-700',
  accentLight: 'red-400',
  accentDark: 'red-600',
  textPrimary: 'gray-900',
  textSecondary: 'gray-600',
  bgCard: 'red-50',
};

// ========================================
// ⛓️ INDIGO (Corporate & Tech)
// ========================================
export const colorIndigo = {
  gradientFrom: 'from-indigo-400',
  gradientVia: 'via-indigo-500',
  gradientTo: 'to-indigo-700',
  accentLight: 'indigo-400',
  accentDark: 'indigo-600',
  textPrimary: 'gray-900',
  textSecondary: 'gray-700',
  bgCard: 'indigo-50',
};

// ========================================
// 🌊 CYAN (Moderne & Futuriste)
// ========================================
export const colorCyan = {
  gradientFrom: 'from-cyan-400',
  gradientVia: 'via-cyan-500',
  gradientTo: 'to-cyan-700',
  accentLight: 'cyan-400',
  accentDark: 'cyan-600',
  textPrimary: 'gray-900',
  textSecondary: 'gray-700',
  bgCard: 'cyan-50',
};

// ========================================
// 💛 JAUNE (Chaleureux & Accueillant)
// ========================================
export const colorYellow = {
  gradientFrom: 'from-amber-300',
  gradientVia: 'via-amber-400',
  gradientTo: 'to-amber-600',
  accentLight: 'amber-400',
  accentDark: 'amber-600',
  textPrimary: 'gray-900',
  textSecondary: 'gray-700',
  bgCard: 'amber-50',
};

// ========================================
// 🎨 DÉGRADÉ MULTI (Arc-en-ciel)
// ========================================
export const colorRainbow = {
  gradientFrom: 'from-pink-400',
  gradientVia: 'via-purple-500',
  gradientTo: 'to-indigo-700',
  accentLight: 'purple-400',
  accentDark: 'purple-600',
  textPrimary: 'gray-900',
  textSecondary: 'gray-600',
  bgCard: 'purple-50',
};

// ========================================
// 🖤 NOIR & BLANC (Minimaliste)
// ========================================
export const colorGrayscale = {
  gradientFrom: 'from-gray-700',
  gradientVia: 'via-gray-600',
  gradientTo: 'to-gray-900',
  accentLight: 'gray-400',
  accentDark: 'gray-700',
  textPrimary: 'gray-900',
  textSecondary: 'gray-500',
  bgCard: 'gray-50',
};

// ========================================
// 🔥 NÉON (Vibrant & Moderne)
// ========================================
export const colorNeon = {
  gradientFrom: 'from-lime-300',
  gradientVia: 'via-green-500',
  gradientTo: 'to-teal-700',
  accentLight: 'lime-300',
  accentDark: 'green-600',
  textPrimary: 'gray-900',
  textSecondary: 'gray-700',
  bgCard: 'lime-50',
};

// ========================================
// 📋 PALETTES PRÉDÉFINIES PAR INDUSTRIE
// ========================================

export const industryPalettes = {
  developer: colorBlue,
  designer: colorPurple,
  photographer: colorOrange,
  marketer: colorRed,
  founder: colorIndigo,
  artist: colorPink,
  coach: colorGreen,
  consultant: colorCyan,
};

// ========================================
// 📝 COMMENT UTILISER
// ========================================

/*

OPTION 1: Importer et utiliser dans landingConfig.js
─────────────────────────────────────────────────────

import { colorBlue } from './colorVariants'

export const landingConfig = {
  // ... autres propriétés
  colors: colorBlue,  // ✨ Applique le thème bleu
}


OPTION 2: Importer plusieurs palettes et sélectionner
──────────────────────────────────────────────────────

import { colorOrange, colorPurple, colorGreen } from './colorVariants'

// Sélectionnez la palette selon les besoins
const currentTheme = colorPurple  // Changez ici

export const landingConfig = {
  colors: currentTheme,
}


OPTION 3: Utiliser une palette par industrie
───────────────────────────────────────────

import { industryPalettes } from './colorVariants'

const profession = 'designer'  // Ou 'developer', 'photographer', etc.
const colors = industryPalettes[profession]

export const landingConfig = {
  colors: colors,
}


OPTION 4: Mélanger et personnaliser
───────────────────────────────────

import { colorBlue } from './colorVariants'

export const landingConfig = {
  colors: {
    ...colorBlue,  // Utiliser bleu comme base
    accentLight: 'cyan-400',  // Mais changer l'accent
  },
}

*/

// ========================================
// 🎨 APERÇU DES COULEURS
// ========================================

/*

Orange (Défaut)        → Chaleureux, créatif, accueillant
Bleu                   → Professionnel, confiance, corporate
Violet                 → Premium, créatif, luxe
Vert                   → Naturel, éco, santé
Rose                   → Mode, créatif, féminin
Rouge                  → Bold, énergique, passion
Indigo                 → Tech, professionnel, sérieux
Cyan                   → Moderne, futuriste, tech
Jaune/Amber            → Chaleur, convivialité
Noir/Gris              → Minimaliste, épuré, professionnel
Arc-en-ciel            → Fun, créatif, diversité
Néon                   → Moderne, vibrant, edgy

*/

// ========================================
// 📚 RECOMMANDATIONS PAR INDUSTRIE
// ========================================

/*

👨‍💻 Développeur/Ingénieur    → Bleu, Indigo, Cyan
👨‍🎨 Designer/Créatif          → Violet, Rose, Arc-en-ciel
📸 Photographe               → Orange, Gris, Noir
📊 Marketer/Stratégiste      → Rouge, Indigo, Bleu
🏢 Consultant/Coach          → Bleu, Indigo, Cyan
🎭 Artiste/Musicien          → Violet, Rose, Néon
🌱 Eco/Sustainable           → Vert, Cyan, Naturel
👗 Mode/Beauté               → Rose, Violet, Noir
🏋️ Sport/Fitness             → Rouge, Orange, Bleu
💼 Avocat/Finance            → Indigo, Gris, Bleu

*/

export default {
  colorOrange,
  colorBlue,
  colorPurple,
  colorGreen,
  colorPink,
  colorRed,
  colorIndigo,
  colorCyan,
  colorYellow,
  colorRainbow,
  colorGrayscale,
  colorNeon,
  industryPalettes,
};

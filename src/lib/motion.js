export const spring = {
  snappy: { type: 'spring', stiffness: 400, damping: 30 },
  smooth: { type: 'spring', stiffness: 120, damping: 20, mass: 0.8 },
  bouncy: { type: 'spring', stiffness: 260, damping: 18 },
  gentle: { type: 'spring', stiffness: 80, damping: 22 },
};

export const ease = {
  outExpo: [0.16, 1, 0.3, 1],
  inOutCirc: [0.85, 0, 0.15, 1],
};

export const fadeUp = {
  hidden: { opacity: 0, y: 48, filter: 'blur(8px)' },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { ...spring.smooth, delay: i * 0.08 },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: ease.outExpo } },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: spring.smooth,
  },
};

export const slideFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: spring.smooth },
};

export const lineReveal = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: ease.outExpo },
  },
};

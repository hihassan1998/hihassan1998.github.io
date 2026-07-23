import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { personal } from '../../data/content';
import Magnetic from '../ui/Magnetic';
import { spring } from '../../lib/motion';

export default function Hero() {
  const { t } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);

  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, 80]);
  const textY = useTransform(scrollY, [0, 500], [0, 40]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  const roles = t.hero.roles;
  const currentRole = roles[roleIndex];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2200);
          }
        } else if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      },
      isDeleting ? 35 : 70
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles.length]);

  useEffect(() => {
    if (!cvDropdownOpen) return;
    const close = () => setCvDropdownOpen(false);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, [cvDropdownOpen]);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <motion.div style={{ opacity }} className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <motion.div style={{ y: textY }}>
            <motion.p
              className="font-mono text-accent text-xs mb-8 tracking-widest uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, ...spring.smooth }}
            >
              {t.hero.greeting}
            </motion.p>

            <motion.h1
              className="font-display text-[3rem] sm:text-6xl lg:text-[4.5rem] font-bold leading-[1.02] tracking-[-0.04em] mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-white">Hassan</span>
              <br />
              <span className="gradient-text">Hussain</span>
            </motion.h1>

            <motion.div
              className="h-9 mb-8 font-mono text-base sm:text-lg text-accent-soft"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {displayText}
              <motion.span
                className="inline-block w-[3px] h-[1.1em] bg-accent ml-1 align-middle"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity }}
              />
            </motion.div>

            <motion.p
              className="text-fg-muted text-lg sm:text-xl leading-relaxed max-w-lg mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              {t.hero.tagline}
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              <Magnetic strength={0.15}>
                <a href="#projects" className="btn-primary">
                  {t.hero.cta}
                  <ArrowDown size={16} />
                </a>
              </Magnetic>
              <div className="relative">
                <Magnetic strength={0.12}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCvDropdownOpen(!cvDropdownOpen);
                    }}
                    className="btn-ghost flex items-center gap-2 cursor-pointer"
                  >
                    <Download size={16} />
                    {t.hero.cv}
                  </button>
                </Magnetic>
                <AnimatePresence>
                  {cvDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 rounded-xl border border-border bg-bg/95 backdrop-blur-xl p-1.5 shadow-xl z-20"
                    >
                      <a
                        href={personal.cvEn}
                        download
                        onClick={() => setCvDropdownOpen(false)}
                        className="flex items-center gap-2 w-full px-3 py-2 text-xs text-left font-mono rounded-lg text-fg-muted hover:text-white hover:bg-white/5 transition-colors"
                      >
                        English Version (EN)
                      </a>
                      <a
                        href={personal.cvSv}
                        download
                        onClick={() => setCvDropdownOpen(false)}
                        className="flex items-center gap-2 w-full px-3 py-2 text-xs text-left font-mono rounded-lg text-fg-muted hover:text-white hover:bg-white/5 transition-colors"
                      >
                        Swedish Version (SV)
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="flex gap-3 ml-2">
                <a href={personal.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl border border-border text-fg-muted hover:text-accent hover:border-accent/40 transition-all">
                  <FaGithub size={18} />
                </a>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl border border-border text-fg-muted hover:text-accent hover:border-accent/40 transition-all">
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex justify-center lg:justify-end"
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.25, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-[260px] sm:w-[300px] lg:w-[340px]">
              <motion.div
                className="absolute -inset-4 rounded-3xl opacity-60"
                style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.2), rgba(129,140,248,0.15), rgba(56,189,248,0.1))',
                }}
                animate={{ rotate: [0, 3, 0, -3, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative panel rounded-3xl p-1.5">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <motion.img
                    src={personal.image}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top"
                    whileHover={{ scale: 1.04 }}
                    transition={spring.smooth}
                  />
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 left-6 right-6 panel px-4 py-3 flex justify-between text-[11px] font-mono"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, ...spring.bouncy }}
              >
                <span className="text-fg-muted">Luleå, SE</span>
                <span className="flex items-center gap-2 text-accent">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>
                  open to work
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] font-mono text-fg-muted uppercase tracking-widest">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}

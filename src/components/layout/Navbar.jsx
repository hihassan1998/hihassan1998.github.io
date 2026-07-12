import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { navLinks } from '../../data/content';

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-sky-glow to-violet-glow origin-left z-[60]"
        style={{ scaleX }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-border/50 py-0' : 'bg-transparent py-1'
        }`}
      >
        <nav className="section-container flex items-center justify-between h-16">
          <motion.a
            href="#"
            className="font-display font-bold text-xl text-white tracking-tight"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            H<span className="text-accent">.</span>H
          </motion.a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.id}
                href={link.href}
                className="relative text-xs font-mono text-fg-muted hover:text-white transition-colors uppercase tracking-wider group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                {t.nav[link.id]}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <motion.button
              type="button"
              onClick={toggleLang}
              className="text-xs font-mono text-fg-muted hover:text-accent transition-colors px-2 py-1 rounded border border-transparent hover:border-border"
              whileTap={{ scale: 0.95 }}
            >
              {lang === 'en' ? 'SV' : 'EN'}
            </motion.button>
            <motion.a
              href="#contact"
              className="btn-primary text-xs !py-2.5 !px-5"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {t.nav.contact}
            </motion.a>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button type="button" onClick={toggleLang} className="text-xs font-mono text-fg-muted">
              {lang === 'en' ? 'SV' : 'EN'}
            </button>
            <button type="button" onClick={() => setMobileOpen(!mobileOpen)} className="text-white">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border bg-bg/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="section-container py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-mono text-sm text-fg-muted hover:text-accent transition-colors"
                  >
                    {t.nav[link.id]}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

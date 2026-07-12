import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import SectionHeader from '../ui/SectionHeader';
import { spring } from '../../lib/motion';

export default function Skills() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const categories = t.skills.categories;

  return (
    <section className="py-32 border-t border-border/50">
      <div className="section-container">
        <SectionHeader
          id="skills"
          index={3}
          label={t.nav.skills}
          title={t.skills.title}
          lead={t.skills.subtitle}
        />

        <div className="mt-12 flex flex-wrap gap-2 relative">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => setActive(i)}
              className={`relative px-4 py-2 text-xs font-mono rounded-full border transition-colors duration-300 cursor-pointer ${
                active === i
                  ? 'border-accent/50 text-accent'
                  : 'border-border text-fg-muted hover:text-white hover:border-border/80'
              }`}
            >
              {active === i && (
                <motion.span
                  layoutId="skill-tab"
                  className="absolute inset-0 rounded-full bg-accent/10 border border-accent/30"
                  transition={spring.smooth}
                />
              )}
              <span className="relative z-10">{cat.name}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="mt-10 flex flex-wrap gap-2.5"
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {categories[active].items.map((skill, i) => (
              <motion.span
                key={skill}
                className="chip text-xs py-2 px-4 hover:border-accent/40 hover:text-accent-soft transition-colors cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03, ...spring.snappy }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

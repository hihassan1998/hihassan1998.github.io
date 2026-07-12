import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import SectionHeader from '../ui/SectionHeader';
import { fadeUp, spring } from '../../lib/motion';

export default function Experience() {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  const primary = t.experience.items.filter((item) => !item.minimal);
  const secondary = t.experience.items.filter((item) => item.minimal);

  return (
    <section className="py-32 border-t border-border/50">
      <div className="section-container">
        <SectionHeader
          id="experience"
          index={2}
          label={t.nav.experience}
          title={t.experience.title}
          lead={t.experience.subtitle}
        />

        <div className="relative mt-4">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent hidden sm:block" />

          <div className="space-y-2">
            {primary.map((item, i) => (
              <motion.article
                key={`${item.company}-${item.role}`}
                className="relative sm:pl-10 py-8 group"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, ...spring.smooth }}
              >
                <motion.div
                  className="absolute left-0 top-10 w-2 h-2 rounded-full bg-accent hidden sm:block"
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.2, ...spring.bouncy }}
                />

                <div className="panel-hover p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white group-hover:text-accent-soft transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-accent text-sm font-medium mt-0.5">{item.company}</p>
                    </div>
                    <p className="font-mono text-xs text-fg-muted shrink-0">
                      {item.period} · {item.type}
                    </p>
                  </div>
                  <p className="text-fg-muted text-sm leading-relaxed max-w-2xl mb-5">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="chip">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {secondary.length > 0 && (
          <div className="mt-6 sm:pl-10">
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-xs font-mono text-fg-muted hover:text-accent transition-colors py-3"
            >
              <ChevronDown size={14} className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
              {expanded ? t.experience.hideOther : t.experience.showOther}
            </button>
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  {secondary.map((item) => (
                    <article key={item.company} className="py-5 opacity-70 border-t border-border/50">
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
                        <h3 className="text-sm font-medium text-white">{item.role} — {item.company}</h3>
                        <span className="font-mono text-xs text-fg-muted">{item.period}</span>
                      </div>
                      <p className="text-xs text-fg-muted leading-relaxed">{item.description}</p>
                    </article>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}

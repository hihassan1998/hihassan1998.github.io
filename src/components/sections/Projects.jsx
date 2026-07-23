import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { featuredProjects, moreProjects } from '../../data/content';
import SectionHeader from '../ui/SectionHeader';
import { spring } from '../../lib/motion';

function ProjectCard({ project, spotlight = false, labels }) {
  const { lang } = useLanguage();
  const primaryUrl = project.live || project.github;
  const subtitle = typeof project.subtitle === 'object' ? project.subtitle[lang] : project.subtitle;
  const description = typeof project.description === 'object' ? project.description[lang] : project.description;

  return (
    <motion.article
      layout
      className={`panel-hover p-7 sm:p-9 ${spotlight ? 'lg:p-10' : ''}`}
      whileHover={{ y: -6 }}
      transition={spring.smooth}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <p className="font-mono text-[10px] text-accent/80 mb-2 uppercase tracking-widest">{subtitle}</p>
          {primaryUrl ? (
            <a
              href={primaryUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 font-display text-2xl sm:text-3xl font-bold text-white hover:text-accent-soft transition-colors"
            >
              {project.title}
              <ArrowUpRight
                size={22}
                className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              />
            </a>
          ) : (
            <h3 className="font-display text-2xl font-bold text-white">{project.title}</h3>
          )}
        </div>
        {spotlight && (
          <motion.span
            className="hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl border border-accent/30 bg-accent/10 text-accent font-mono text-xs font-bold"
            animate={{ rotate: [0, 3, 0, -3, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            AI
          </motion.span>
        )}
      </div>

      <p className={`text-fg-muted leading-relaxed mb-6 ${spotlight ? 'text-base max-w-2xl' : 'text-sm max-w-lg'}`}>
        {description}
      </p>

      <div className="flex flex-wrap items-center gap-2">
        {project.tags.slice(0, spotlight ? 5 : 4).map((tag) => (
          <span key={tag} className="chip">{tag}</span>
        ))}
        <div className="ml-auto flex gap-4 text-[11px] font-mono">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="text-accent hover:text-accent-soft transition-colors">
              {labels.viewLive} ↗
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="text-fg-muted hover:text-white inline-flex items-center gap-1 transition-colors">
              <FaGithub size={12} /> {labels.viewCode}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

const cardEnter = {
  initial: { opacity: 0, y: 28, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -12, scale: 0.98 },
};

export default function Projects() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const labels = t.projects;

  const spotlight = featuredProjects[0];
  const rest = featuredProjects.slice(1);
  const initialCount = 4;
  const hiddenCount = rest.length - initialCount;
  const visible = showAll ? rest : rest.slice(0, initialCount);

  return (
    <section className="py-32 border-t border-border/50">
      <div className="section-container">
        <SectionHeader
          id="projects"
          index={4}
          label={t.nav.projects}
          title={t.projects.title}
          lead={t.projects.subtitle}
        />

        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <ProjectCard project={spotlight} spotlight labels={labels} />
        </motion.div>

        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.id}
                layout
                {...cardEnter}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={project} labels={labels} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hiddenCount > 0 && (
          <motion.button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="mt-10 font-mono text-xs text-fg-muted hover:text-accent transition-colors border-b border-transparent hover:border-accent/40 pb-0.5"
            whileTap={{ scale: 0.98 }}
            aria-expanded={showAll}
          >
            {showAll ? labels.showLess : `${labels.showMore} (${hiddenCount})`}
          </motion.button>
        )}

        <motion.div
          className="mt-24 pt-12 border-t border-border/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-[11px] uppercase tracking-widest text-fg-muted mb-8">
            {t.moreProjects.title}
          </p>
          <ul className="space-y-1">
            {moreProjects.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <a
                  href={p.live || p.github || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-4 py-4 border-b border-border/30 text-sm text-fg-muted hover:text-white transition-colors group"
                >
                  <span>
                    <span className="text-white font-medium font-display">{p.title}</span>
                    <span className="hidden sm:inline text-fg-muted"> — {typeof p.description === 'object' ? p.description[lang] : p.description}</span>
                  </span>
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 text-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

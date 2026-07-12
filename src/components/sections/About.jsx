import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import SectionHeader from '../ui/SectionHeader';
import { staggerContainer, fadeUp } from '../../lib/motion';

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="py-32 border-t border-border/50">
      <div className="section-container">
        <SectionHeader
          id="about"
          index={1}
          label={t.nav.about}
          title={t.about.title}
          lead={t.about.subtitle}
        />

        <motion.div
          className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-end"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div className="space-y-6 text-fg-muted text-lg leading-[1.8]" variants={fadeUp}>
            {t.about.paragraphs.slice(0, 2).map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </motion.div>

          <motion.dl className="grid grid-cols-2 gap-8" variants={fadeUp} custom={2}>
            {t.about.highlights.map((item, i) => (
              <motion.div
                key={item.label}
                className="panel p-5"
                whileHover={{ y: -4, borderColor: 'rgba(34,197,94,0.3)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <dt className="font-mono text-[10px] uppercase tracking-widest text-fg-muted mb-2">
                  {item.label}
                </dt>
                <dd className="font-display text-3xl font-bold gradient-text">{item.value}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}

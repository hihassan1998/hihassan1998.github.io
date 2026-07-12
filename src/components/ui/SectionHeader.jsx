import { motion } from 'framer-motion';
import { lineReveal } from '../../lib/motion';

function SectionLabel({ index, label }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <motion.span
        className="section-label mb-0"
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {String(index).padStart(2, '0')} — {label}
      </motion.span>
      <motion.div
        className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-accent/60 to-transparent origin-left"
        variants={lineReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
    </div>
  );
}

export default function SectionHeader({ index, label, title, lead, id }) {
  return (
    <div id={id} className="mb-16">
      <SectionLabel index={index} label={label} />
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 32, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {title}
      </motion.h2>
      {lead && (
        <motion.p
          className="section-lead"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {lead}
        </motion.p>
      )}
    </div>
  );
}

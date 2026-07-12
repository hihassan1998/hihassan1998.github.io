import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { personal } from '../../data/content';
import SectionHeader from '../ui/SectionHeader';
import Magnetic from '../ui/Magnetic';
import { staggerContainer, fadeUp, spring } from '../../lib/motion';

const links = [
  {
    key: 'email',
    href: `mailto:${personal.email}`,
    icon: Mail,
    label: 'Email',
    value: personal.email,
    external: false,
  },
  {
    key: 'linkedin',
    href: personal.linkedin,
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    external: true,
  },
  {
    key: 'github',
    href: personal.github,
    icon: FaGithub,
    label: 'GitHub',
    value: 'View repositories',
    external: true,
  },
  {
    key: 'phone',
    href: `tel:${personal.phone.replace(/\s/g, '')}`,
    icon: Phone,
    label: 'Phone',
    value: personal.phone,
    external: false,
  },
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="py-32 border-t border-border/50 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(34,197,94,0.08), transparent)',
        }}
      />

      <div className="section-container relative">
        <SectionHeader
          id="contact"
          index={6}
          label={t.nav.contact}
          title={t.contact.title}
          lead={t.contact.subtitle}
        />

        <motion.div
          className="grid sm:grid-cols-2 gap-4 mt-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.div key={link.key} variants={fadeUp} custom={i}>
                <Magnetic strength={0.12}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer' : undefined}
                    className="link-card h-full group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="p-2.5 rounded-xl border border-border bg-bg/50 text-accent">
                        <Icon size={20} />
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="text-fg-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-fg-muted mb-1">
                        {link.label}
                      </p>
                      <p className="font-display text-lg font-medium text-white group-hover:text-accent-soft transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </a>
                </Magnetic>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-8 flex items-center gap-3 text-sm text-fg-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <MapPin size={16} className="text-accent shrink-0" />
          {personal.location}
        </motion.div>

        <motion.p
          className="mt-12 text-center font-display text-2xl sm:text-3xl font-semibold text-white/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring.smooth}
        >
          {t.contact.cta}{' '}
          <a href={`mailto:${personal.email}`} className="gradient-text hover:opacity-80 transition-opacity">
            {personal.email}
          </a>
        </motion.p>
      </div>
    </section>
  );
}

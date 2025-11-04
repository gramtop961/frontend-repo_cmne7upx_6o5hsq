import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Minimal Dashboard',
    description: 'Veri yoğun arayüzler için net tipografi ve siyah-beyaz kontrast.',
    tags: ['UI', 'Design System', 'Dark/Light'],
  },
  {
    title: '3B Deneyim',
    description: 'Etkileşimli 3D sahnelerle modern ürün anlatımı.',
    tags: ['Three/Spline', 'Interaction', 'Motion'],
  },
  {
    title: 'Hızlı Portfolyo',
    description: 'Performans odaklı, erişilebilir ve SEO dostu altyapı.',
    tags: ['React', 'Tailwind', 'Best Practices'],
  },
];

const Card = ({ title, description, tags }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(600px 200px at var(--x) var(--y), rgba(255,255,255,0.12), transparent 40%)' }} />
      <div className="relative">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-zinc-300">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-200">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  // gradient spotlight follows cursor on cards
  const handleMouseMove = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty('--x', `${x}px`);
    target.style.setProperty('--y', `${y}px`);
  };

  return (
    <section id="work" className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight"
        >
          Seçili Çalışmalar
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} onMouseMove={handleMouseMove}>
              <Card {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

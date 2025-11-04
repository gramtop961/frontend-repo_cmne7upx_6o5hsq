import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight"
        >
          Hakkımda
        </motion.h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-200 leading-relaxed"
          >
            Tasarım ve teknolojiyi bir araya getirerek yalın ama karakter sahibi arayüzler
            üretiyorum. Net hiyerarşi, kontrollü kontrast ve kusursuz boşluk kullanımı;
            hazırladığım her deneyimin temelinde yer alıyor.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <ul className="grid grid-cols-2 gap-4 text-sm text-zinc-200">
              <li className="rounded-lg border border-white/10 bg-black/30 p-4">
                • Arayüz Tasarımı
              </li>
              <li className="rounded-lg border border-white/10 bg-black/30 p-4">
                • Web Uygulamaları
              </li>
              <li className="rounded-lg border border-white/10 bg-black/30 p-4">
                • 3B Etkileşimler
              </li>
              <li className="rounded-lg border border-white/10 bg-black/30 p-4">
                • Performans & Erişilebilirlik
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

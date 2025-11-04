import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight"
        >
          İletişim
        </motion.h2>

        <p className="mt-4 max-w-2xl text-zinc-300">
          Bir proje, işbirliği ya da sadece merhaba demek için ulaşın. Yanıtlar genellikle 24 saat içinde.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white text-black px-5 py-3 text-sm font-medium transition hover:bg-zinc-100"
          >
            <Mail className="h-4 w-4" /> E-posta Gönder
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} Tüm hakları saklıdır.
      </footer>
    </section>
  );
};

export default Contact;

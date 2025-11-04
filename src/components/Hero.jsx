import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full bg-black text-white overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient vignette that doesn't block interactions */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
              Net, modern ve etkileyici portfolyo deneyimi
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-zinc-200 max-w-2xl">
              Siyah-beyaz palet, etkileşimli 3D dokular ve temiz tipografi ile
              çalışmalarınızı çerçeveleyen minimalist bir sahne.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white text-black px-5 py-3 text-sm font-medium shadow/50 shadow-white/10 transition hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                Projeleri Gör
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition"
              >
                Hakkımda
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

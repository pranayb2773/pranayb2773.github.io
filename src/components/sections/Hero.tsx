import { motion } from 'framer-motion';
import { personalInfo } from '@/data/personal';
import { ArrowRightIcon, DownloadIcon } from '@/components/Icons';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center py-16 sm:py-20 md:py-24">
      <div className="relative">
        {/* Decorative line */}
        <motion.div
          className="absolute -left-8 top-0 w-px h-32 hidden sm:block"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--line-color, rgba(100, 255, 218, 0.5)), transparent)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />

        <motion.p
          className="text-accent font-mono mb-4 sm:mb-6 text-base sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {personalInfo.heroIntro}
        </motion.p>

        <motion.h1
          className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-lightest-slate tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {personalInfo.name}<span className="text-accent">.</span>
        </motion.h1>

        <motion.h2
          className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mt-3 sm:mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="gradient-text">{personalInfo.heroTitle}</span>
          <br className="hidden sm:block" />
          <span className="text-slate">{personalInfo.heroSubtitle}</span>
        </motion.h2>

        <motion.p
          className="text-light-slate max-w-2xl mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          I'm a Senior Full-Stack Developer with <span className="text-accent font-semibold">{personalInfo.yearsExperience} years of experience</span>
          {' '}specializing in PHP and Python. My focus is on building scalable,
          high-performance web applications and robust RESTful APIs using modern
          frameworks like <span className="text-lightest-slate">Laravel</span> and <span className="text-lightest-slate">Django</span>.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#work"
            className="magnetic-btn group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-accent text-accent rounded-lg font-mono text-xs sm:text-sm overflow-hidden text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Check Out My Work
              <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href={personalInfo.cvPath}
            download
            className="magnetic-btn group relative px-6 sm:px-8 py-3 sm:py-4 bg-accent/10 border border-accent/30 text-accent rounded-lg font-mono text-xs sm:text-sm hover:border-accent transition-colors text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <DownloadIcon className="w-4 h-4" />
              Download CV
            </span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-lightest-navy/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {personalInfo.stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-accent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

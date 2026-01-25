import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '@/data/personal';
import { CalendarIcon } from '@/components/Icons';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-32" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="flex flex-col sm:flex-row sm:items-center text-xl sm:text-2xl font-display font-bold text-lightest-slate mb-8 sm:mb-12">
          <span className="flex items-center mb-2 sm:mb-0">
            <span className="text-accent font-mono text-base sm:text-lg me-3">02.</span> Where I've Worked
          </span>
          <span className="block h-px flex-1 max-w-xs bg-gradient-to-r from-lightest-navy to-transparent sm:ms-6"></span>
        </h2>
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Tab Buttons */}
        <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 lg:min-w-[180px] scrollbar-hide">
          {experience.map((exp, index) => (
            <button
              key={exp.id}
              onClick={() => setActiveTab(index)}
              className={`text-left px-4 sm:px-5 py-3 sm:py-4 whitespace-nowrap font-mono text-xs sm:text-sm rounded-lg transition-all duration-300 flex-shrink-0 ${
                activeTab === index
                  ? 'glass-card border-l-2 border-accent text-accent'
                  : 'hover:bg-light-navy/50 text-slate hover:text-accent border-l-2 border-transparent hover:border-accent/50'
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 ${
                activeTab === index ? 'block' : 'hidden'
              }`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-base sm:text-lg lg:text-xl font-display font-semibold text-lightest-slate">
                {exp.role} <span className="text-accent">@ {exp.company}</span>
              </h3>
              <p className="font-mono text-xs sm:text-sm text-slate mt-2 mb-4 sm:mb-6 flex flex-wrap items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{exp.period}</span>
                <span className="hidden sm:inline">|</span>
                <span className="text-accent">{exp.location}</span>
              </p>
              <ul className="space-y-3 sm:space-y-4 text-light-slate text-sm sm:text-base">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-2 sm:gap-3">
                    <span className="text-accent mt-1 sm:mt-1.5 flex-shrink-0">▹</span>
                    <span dangerouslySetInnerHTML={{
                      __html: achievement
                        .replace(/\$2,000\/month \(\$24K annual savings\)/g, '<span class="text-accent font-semibold">$2,000/month ($24K annual savings)</span>')
                        .replace(/60% \(from 3\.5s to 1\.4s\)/g, '<span class="text-accent font-semibold">60% (from 3.5s to 1.4s)</span>')
                        .replace(/\(85% improvement\)/g, '<span class="text-accent font-semibold">(85% improvement)</span>')
                    }} />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

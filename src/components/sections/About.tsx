import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo, techStack } from '@/data/personal';
import { BoltIcon, ShieldIcon, UsersIcon, CodeIcon } from '@/components/Icons';

const highlightIcons: Record<string, React.FC<{ className?: string }>> = {
  performance: BoltIcon,
  quality: ShieldIcon,
  enterprise: UsersIcon,
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="flex flex-col sm:flex-row sm:items-center text-xl sm:text-2xl font-display font-bold text-lightest-slate mb-8 sm:mb-12">
          <span className="flex items-center mb-2 sm:mb-0">
            <span className="text-accent font-mono text-base sm:text-lg me-3">01.</span> About Me
          </span>
          <span className="block h-px flex-1 max-w-xs bg-gradient-to-r from-lightest-navy to-transparent sm:ms-6"></span>
        </h2>
      </motion.div>

      {/* Introduction Card */}
      <motion.div
        className="glass-card rounded-2xl p-6 sm:p-8 mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p className="text-light-slate text-base sm:text-lg leading-relaxed">
          Hello! I'm <span className="text-accent font-semibold">Pranay</span>, a Senior Full-Stack Developer with 7+ years of
          experience building scalable web applications for <span className="text-accent">SaaS</span>, <span className="text-accent">fintech</span>,
          and <span className="text-accent">healthcare</span> industries. Currently based in <span className="text-lightest-slate">{personalInfo.location}</span>.
        </p>
      </motion.div>

      {/* Key Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {personalInfo.highlights.map((highlight, index) => {
          const Icon = highlightIcons[highlight.icon] || BoltIcon;
          return (
            <motion.div
              key={highlight.title}
              className="glass-card rounded-xl p-5 sm:p-6 hover-lift"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="text-lightest-slate font-display font-semibold mb-2 text-sm sm:text-base">
                {highlight.title}
              </h3>
              <p className="text-slate text-xs sm:text-sm leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: highlight.description
                    .replace(/\$24K annual AWS savings/g, '<span class="text-accent font-semibold">$24K annual AWS savings</span>')
                    .replace(/80%\+ code coverage/g, '<span class="text-accent font-semibold">80%+ code coverage</span>')
                    .replace(/1M\+ daily requests/g, '<span class="text-accent font-semibold">1M+ daily requests</span>')
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h3 className="text-lightest-slate font-display font-semibold mb-6 text-base sm:text-lg flex items-center gap-2">
          <CodeIcon className="w-5 h-5 text-accent" />
          Tech Stack
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Object.entries({
            'Languages': techStack.languages,
            'Frameworks': techStack.frameworks,
            'Databases': techStack.databases,
            'DevOps & Cloud': techStack.devops,
            'Testing': techStack.testing,
            'Tools & More': techStack.tools,
          }).map(([category, skills]) => (
            <div key={category} className="glass-card rounded-xl p-4 sm:p-5">
              <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                {category}
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-mono text-[10px] sm:text-xs border border-accent/30 text-accent hover:bg-accent/10 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

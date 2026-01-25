import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { featuredProjects } from '@/data/projects';
import { ExternalLinkIcon, projectIcons } from '@/components/Icons';

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-16 sm:py-24 md:py-32" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="flex flex-col md:flex-row md:items-center text-xl sm:text-2xl font-display font-bold text-lightest-slate mb-8 sm:mb-12">
          <span className="flex items-center mb-2 md:mb-0">
            <span className="text-accent font-mono text-base sm:text-lg me-2 sm:me-3">03.</span> Some Things I've Built
          </span>
          <span className="block h-px flex-1 max-w-xs bg-gradient-to-r from-lightest-navy to-transparent md:ms-6"></span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {featuredProjects.map((project, index) => {
          const Icon = projectIcons[project.icon] || projectIcons.folder;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/projects/${project.id}`}
                className="project-card-enhanced glass-card p-5 sm:p-8 rounded-xl sm:rounded-2xl flex flex-col justify-between group h-full block"
              >
                <div>
                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="size-6 sm:size-8 text-accent" />
                    </div>
                    <ExternalLinkIcon className="size-5 sm:size-6 text-slate group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-lightest-slate mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate text-sm sm:text-base leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

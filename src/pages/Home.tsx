import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { personalInfo, techStack, experience } from '@/data/personal';
import { featuredProjects } from '@/data/projects';
import {
  GithubIcon,
  LinkedInIcon,
  EmailIcon,
  ExternalLinkIcon,
  ArrowRightIcon,
  CalendarIcon,
  LocationIcon,
  DownloadIcon,
  projectIcons
} from '@/components/Icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10">
      <motion.div
        className="bento-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Card - Large */}
        <motion.div
          variants={itemVariants}
          className="bento-card bento-card-lg col-span-12 md:col-span-6 lg:col-span-4 row-span-2"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-start justify-between mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-3xl sm:text-4xl font-display font-bold text-accent border border-accent/20">
                {personalInfo.shortName}
              </div>
              <div className="flex gap-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 rounded-xl bg-light-navy/50 flex items-center justify-center text-slate hover:text-accent hover:bg-accent/10 transition-all"
                >
                  <EmailIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-light-navy/50 flex items-center justify-center text-slate hover:text-accent hover:bg-accent/10 transition-all"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-display font-bold text-lightest-slate mb-2">
              {personalInfo.name}
            </h1>
            <p className="text-accent font-medium mb-4">{personalInfo.title}</p>
            <p className="text-slate text-sm leading-relaxed flex-1">
              {personalInfo.heroDescription}
            </p>

            <div className="flex items-center gap-2 mt-6 pt-4 border-t border-lightest-navy/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm text-slate">Open to new opportunities</span>
            </div>
          </div>
        </motion.div>

        {/* Location Card */}
        <motion.div
          variants={itemVariants}
          className="bento-card col-span-12 md:col-span-6 lg:col-span-4"
        >
          <div className="relative h-full min-h-[180px] overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy/90 to-transparent">
              <div className="flex items-center gap-2 text-accent mb-1">
                <LocationIcon className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-wider">Based in</span>
              </div>
              <h3 className="text-xl font-display font-bold text-lightest-slate">
                {personalInfo.location}
              </h3>
              <p className="text-xs text-slate mt-1">{personalInfo.locationNote}</p>
            </div>
            {/* Decorative Map Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-accent/30 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-accent/20 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Years Experience Card */}
        <motion.div
          variants={itemVariants}
          className="bento-card col-span-6 lg:col-span-2"
        >
          <div className="flex flex-col items-center justify-center h-full text-center py-4">
            <span className="text-5xl sm:text-6xl font-display font-bold text-accent mb-2">
              {personalInfo.yearsExperience}
            </span>
            <span className="text-sm text-slate uppercase tracking-wider">Years Experience</span>
          </div>
        </motion.div>

        {/* Download CV Card */}
        <motion.div
          variants={itemVariants}
          className="bento-card col-span-6 lg:col-span-2"
        >
          <a
            href={personalInfo.cvPath}
            download
            className="flex flex-col items-center justify-center h-full text-center py-4 group"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
              <DownloadIcon className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm text-lightest-slate font-medium">Download CV</span>
            <span className="text-xs text-slate mt-1">PDF Format</span>
          </a>
        </motion.div>

        {/* Tech Stack Card */}
        <motion.div
          variants={itemVariants}
          className="bento-card col-span-12 md:col-span-6 lg:col-span-4 row-span-2"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-accent font-mono">&lt;/&gt;</span>
            <h3 className="text-lg font-display font-semibold text-lightest-slate">Tech Stack</h3>
          </div>

          <div className="space-y-4">
            {Object.entries({
              'Languages': techStack.languages,
              'Frameworks': techStack.frameworks,
              'Databases': techStack.databases,
              'DevOps': techStack.devops,
            }).map(([category, skills]) => (
              <div key={category}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span className="text-xs font-mono text-accent uppercase tracking-wider">{category}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-light-navy/50 text-light-slate border border-lightest-navy/30 hover:border-accent/50 hover:text-accent transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section Header */}
        <motion.div
          variants={itemVariants}
          className="col-span-12 lg:col-span-8 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">💼</span>
            <h2 className="text-xl font-display font-bold text-lightest-slate">Experience</h2>
          </div>
          <a
            href={personalInfo.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent text-sm font-mono hover:underline flex items-center gap-1"
          >
            View Resume <ArrowRightIcon className="w-3 h-3" />
          </a>
        </motion.div>

        {/* Experience Cards */}
        {experience.slice(0, 2).map((exp, index) => (
          <motion.div
            key={exp.id}
            variants={itemVariants}
            className="bento-card col-span-12 md:col-span-6 lg:col-span-4"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <span className="text-accent font-mono text-sm">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lightest-slate">{exp.role}</h3>
                <p className="text-accent text-sm">{exp.company}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate mb-3">
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>{exp.period}</span>
            </div>
            <p className="text-slate text-sm line-clamp-3">
              {exp.achievements[0]}
            </p>
          </motion.div>
        ))}

        {/* Projects Section Header */}
        <motion.div
          variants={itemVariants}
          className="col-span-12 flex items-center justify-between mt-4"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🚀</span>
            <h2 className="text-xl font-display font-bold text-lightest-slate">Featured Projects</h2>
          </div>
        </motion.div>

        {/* Project Cards */}
        {featuredProjects.slice(0, 3).map((project) => {
          const Icon = projectIcons[project.icon] || projectIcons.folder;
          return (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bento-card col-span-12 sm:col-span-6 lg:col-span-4 group"
            >
              <Link to={`/projects/${project.id}`} className="block h-full">
                <div className="relative h-32 sm:h-40 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-light-navy to-lightest-navy/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-accent/30 group-hover:text-accent/50 transition-colors" />
                  </div>
                  <div className="absolute top-3 right-3">
                    <ExternalLinkIcon className="w-5 h-5 text-slate group-hover:text-accent transition-colors" />
                  </div>
                </div>
                <h3 className="font-display font-semibold text-lightest-slate mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate text-sm line-clamp-2 mb-3">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-accent/10 text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          );
        })}

        {/* Contact Card */}
        <motion.div
          variants={itemVariants}
          className="bento-card bento-card-accent col-span-12 sm:col-span-6 lg:col-span-4"
        >
          <div className="flex flex-col h-full">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
              <EmailIcon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-display font-bold text-lightest-slate mb-2">Get in touch</h3>
            <p className="text-slate text-sm mb-6 flex-1">Have a project in mind? Let's build something amazing together.</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-accent font-mono text-sm hover:underline flex items-center gap-2"
            >
              {personalInfo.email}
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Social Links Card */}
        <motion.div
          variants={itemVariants}
          className="bento-card col-span-12 sm:col-span-6 lg:col-span-4"
        >
          <h3 className="text-sm font-mono text-accent uppercase tracking-wider mb-4">Connect</h3>
          <div className="flex gap-3">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-light-navy/50 text-slate hover:text-accent hover:bg-accent/10 transition-all"
            >
              <GithubIcon className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-light-navy/50 text-slate hover:text-accent hover:bg-accent/10 transition-all"
            >
              <LinkedInIcon className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          variants={itemVariants}
          className="bento-card col-span-12 lg:col-span-4"
        >
          <div className="grid grid-cols-3 gap-4 h-full">
            {personalInfo.stats.map((stat) => (
              <div key={stat.label} className="text-center flex flex-col justify-center">
                <span className="text-2xl sm:text-3xl font-display font-bold text-accent">{stat.value}</span>
                <span className="text-xs text-slate mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

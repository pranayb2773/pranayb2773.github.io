import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { personalInfo, techStack, experience } from '@/data/personal';
import { featuredProjects } from '@/data/projects';
import {
  GithubIcon,
  LinkedInIcon,
  ExternalLinkIcon,
  ArrowRightIcon,
  CalendarIcon,
  LocationIcon,
  DownloadIcon,
  BoltIcon,
  ShieldIcon,
  projectIcons
} from '@/components/Icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  const [activeExpTab, setActiveExpTab] = useState(0);

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 relative z-10">
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ===== HERO SECTION ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
          {/* Hero Card - Main */}
          <motion.div
            variants={itemVariants}
            className="bento-card bento-card-lg lg:col-span-2 lg:row-span-2"
          >
            <p className="text-slate font-mono text-sm mb-4">Hi, my name is</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-lightest-slate mb-2">
              {personalInfo.name}.
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-6">
              <span className="text-slate">I build </span>
              <span className="text-accent">high-quality</span>
              <span className="text-slate"> web applications.</span>
            </h2>
            <p className="text-slate text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              I'm a Senior Full-Stack Developer with <span className="text-accent font-semibold">{personalInfo.yearsExperience} years of experience</span> specializing in PHP and Python. My focus is on building scalable, high-performance web applications and robust RESTful APIs.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 border border-accent text-accent rounded-lg font-mono text-sm hover:bg-accent/20 transition-colors"
              >
                Check Out My Work <ArrowRightIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.cvPath}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-light-navy/50 border border-lightest-navy/30 text-lightest-slate rounded-lg font-mono text-sm hover:border-accent/50 transition-colors"
              >
                <DownloadIcon className="w-4 h-4" /> Download CV
              </a>
            </div>
          </motion.div>

          {/* Years Experience Card */}
          <motion.div
            variants={itemVariants}
            className="bento-card flex flex-col justify-center items-center text-center"
          >
            <span className="text-5xl sm:text-6xl font-display font-bold text-accent">{personalInfo.yearsExperience}</span>
            <span className="text-xs text-slate uppercase tracking-widest mt-2">Years Experience</span>
          </motion.div>

          {/* Location Card */}
          <motion.div
            variants={itemVariants}
            className="bento-card"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <LocationIcon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lightest-slate">Edinburgh</h3>
                <p className="text-sm text-slate">Scotland, <span className="text-accent">UK</span></p>
              </div>
            </div>
            <p className="text-xs text-slate mt-4 pt-4 border-t border-lightest-navy/20">
              Open to remote & hybrid opportunities worldwide.
            </p>
          </motion.div>
        </div>

        {/* ===== ABOUT ME SECTION ===== */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
          {/* About Content */}
          <div className="bento-card lg:col-span-2">
            <h2 className="flex items-center gap-2 text-lg font-display font-semibold text-lightest-slate mb-4">
              <span className="text-accent font-mono text-sm">01.</span> About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-slate text-sm leading-relaxed mb-4">
                  Hello! I'm <span className="text-accent font-semibold">Pranay</span>, a Senior Full-Stack Developer with a passion for building robust digital products. I enjoy bridging the gap between engineering and design.
                </p>
                <p className="text-slate text-sm leading-relaxed">
                  Specializing in scalable web applications for <span className="text-accent">SaaS</span>, <span className="text-accent">fintech</span>, and <span className="text-accent">healthcare</span> industries.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <BoltIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-lightest-slate">Performance Expert</h4>
                    <p className="text-xs text-slate">Delivered <span className="text-accent">$24K annual savings</span> through Redis optimization.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-lightest-slate">Quality Focused</h4>
                    <p className="text-xs text-slate">Achieved <span className="text-accent">80%+ coverage</span> through TDD practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="bento-card flex items-center justify-center overflow-hidden">
            <div className="w-full h-48 lg:h-full rounded-xl bg-gradient-to-br from-accent/10 to-light-navy flex items-center justify-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center text-4xl font-display font-bold text-accent border border-accent/30">
                {personalInfo.shortName}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== TECH STACK SECTION ===== */}
        <motion.div variants={itemVariants} className="bento-card">
          <h2 className="flex items-center gap-2 text-lg font-display font-semibold text-lightest-slate mb-6">
            <span className="text-accent font-mono">&lt;/&gt;</span> Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              { title: 'Languages', items: techStack.languages },
              { title: 'Frameworks', items: techStack.frameworks },
              { title: 'DevOps & Cloud', items: techStack.devops },
              { title: 'Databases & Tools', items: [...techStack.databases, ...techStack.testing.slice(0, 2)] },
            ].map((category) => (
              <div key={category.title}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span className="text-xs font-mono text-accent uppercase tracking-wider">{category.title}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-light-navy/60 text-light-slate border border-lightest-navy/30 hover:border-accent/40 hover:text-accent transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ===== EXPERIENCE SECTION ===== */}
        <motion.div variants={itemVariants} className="bento-card" id="experience">
          <h2 className="flex items-center gap-2 text-lg font-display font-semibold text-lightest-slate mb-6">
            <span className="text-accent font-mono text-sm">02.</span> Where I've Worked
          </h2>

          {/* Tabs */}
          <div className="flex gap-4 mb-6 border-b border-lightest-navy/20 overflow-x-auto">
            {experience.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => setActiveExpTab(index)}
                className={`pb-3 px-1 text-sm font-mono whitespace-nowrap border-b-2 transition-colors ${
                  activeExpTab === index
                    ? 'text-accent border-accent'
                    : 'text-slate border-transparent hover:text-lightest-slate'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[280px]">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className={activeExpTab === index ? 'block' : 'hidden'}
              >
                <h3 className="text-lg font-display font-semibold text-lightest-slate mb-1">
                  {exp.role} <span className="text-accent">@ {exp.company}</span>
                </h3>
                <p className="text-sm font-mono text-slate mb-4 flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  {exp.period} | <LocationIcon className="w-4 h-4" /> {exp.location}
                </p>
                <ul className="space-y-3">
                  {exp.achievements.slice(0, 4).map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate">
                      <span className="text-accent mt-1">▹</span>
                      <span dangerouslySetInnerHTML={{
                        __html: achievement
                          .replace(/\$[\d,]+\/month|\$[\d,]+K?/g, '<span class="text-accent font-semibold">$&</span>')
                          .replace(/\d+%/g, '<span class="text-accent font-semibold">$&</span>')
                      }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ===== PROJECTS SECTION ===== */}
        <motion.div variants={itemVariants} id="work">
          <h2 className="flex items-center gap-2 text-lg font-display font-semibold text-lightest-slate mb-6">
            <span className="text-accent font-mono text-sm">03.</span> Some Things I've Built
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {featuredProjects.map((project) => {
              const Icon = projectIcons[project.icon] || projectIcons.folder;
              return (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="bento-card group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <ExternalLinkIcon className="w-5 h-5 text-slate group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-lightest-slate mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate text-sm line-clamp-2 mb-4">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-accent/10 text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* ===== CONTACT SECTION ===== */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5" id="contact">
          {/* Contact Card */}
          <div className="bento-card bento-card-accent">
            <h2 className="flex items-center gap-2 text-lg font-display font-semibold text-lightest-slate mb-4">
              <span className="text-accent font-mono text-sm">04.</span> Get In Touch
            </h2>
            <p className="text-slate text-sm mb-6">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-navy rounded-lg font-mono text-sm font-semibold hover:bg-accent/90 transition-colors"
            >
              Say Hello <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Social Links Card */}
          <div className="bento-card flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-mono text-accent uppercase tracking-wider mb-4">Connect With Me</h3>
              <div className="flex gap-3">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-light-navy/50 border border-lightest-navy/30 text-slate hover:text-accent hover:border-accent/50 transition-all"
                >
                  <GithubIcon className="w-5 h-5" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-light-navy/50 border border-lightest-navy/30 text-slate hover:text-accent hover:border-accent/50 transition-all"
                >
                  <LinkedInIcon className="w-5 h-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-6 pt-4 border-t border-lightest-navy/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm text-slate">{personalInfo.availability}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

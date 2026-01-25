import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { ArrowLeftIcon, GithubIcon, ExternalLinkIcon, projectIcons, BoltIcon } from '@/components/Icons';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-32 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-lightest-slate mb-4">Project Not Found</h1>
          <Link to="/" className="text-accent hover:underline">
            Go back home
          </Link>
        </div>
      </main>
    );
  }

  const Icon = projectIcons[project.icon] || projectIcons.folder;

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-32 relative z-10">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/#work" className="back-button mb-8 inline-flex">
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
              <Icon className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-lightest-slate">
                {project.title}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                aria-label="View on GitHub"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                aria-label="View live site"
              >
                <ExternalLinkIcon className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>

        <p className="text-light-slate text-lg leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 text-sm font-mono text-accent bg-accent/10 rounded-full border border-accent/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Features Section */}
      {project.features && project.features.length > 0 && (
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-display font-bold text-lightest-slate mb-6 flex items-center gap-3">
            <span className="text-accent font-mono text-lg">01.</span>
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feature) => (
              <div
                key={feature.title}
                className="feature-card glass-card p-6 rounded-xl"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <BoltIcon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lightest-slate font-display font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* API Endpoints Section */}
      {project.apiEndpoints && project.apiEndpoints.length > 0 && (
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-display font-bold text-lightest-slate mb-6 flex items-center gap-3">
            <span className="text-accent font-mono text-lg">02.</span>
            API Endpoints
          </h2>
          <div className="space-y-3">
            {project.apiEndpoints.map((endpoint) => (
              <div
                key={`${endpoint.method}-${endpoint.path}`}
                className="api-endpoint glass-card p-4 rounded-lg flex items-center gap-4"
              >
                <span
                  className={`px-3 py-1 rounded text-xs font-mono font-semibold method-${endpoint.method.toLowerCase()}`}
                >
                  {endpoint.method}
                </span>
                <code className="font-mono text-sm text-accent flex-shrink-0">
                  {endpoint.path}
                </code>
                <span className="text-slate text-sm">
                  {endpoint.description}
                </span>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Usage Section */}
      {project.usage && project.usage.length > 0 && (
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-display font-bold text-lightest-slate mb-6 flex items-center gap-3">
            <span className="text-accent font-mono text-lg">02.</span>
            Usage
          </h2>
          <div className="space-y-6">
            {project.usage.map((section) => (
              <div key={section.title}>
                <h3 className="text-lightest-slate font-semibold mb-3">{section.title}</h3>
                <div className="glass-card rounded-lg overflow-hidden">
                  <pre className="p-4 overflow-x-auto">
                    <code className="font-mono text-sm text-accent">
                      {section.code}
                    </code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Tech Details Section */}
      {project.techDetails && project.techDetails.length > 0 && (
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-display font-bold text-lightest-slate mb-6 flex items-center gap-3">
            <span className="text-accent font-mono text-lg">03.</span>
            Tech Stack Details
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.techDetails.map((detail) => (
              <div key={detail.category} className="glass-card p-4 rounded-xl">
                <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
                  {detail.category}
                </h4>
                <ul className="space-y-1">
                  {detail.items.map((item) => (
                    <li key={item} className="text-slate text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* CTA Section */}
      <motion.div
        className="text-center pt-8 border-t border-lightest-navy/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-slate mb-6">Interested in this project or have questions?</p>
        <div className="flex justify-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent rounded-lg font-mono text-sm"
            >
              <GithubIcon className="w-5 h-5" />
              View on GitHub
            </a>
          )}
          <Link
            to="/#contact"
            className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 bg-accent text-navy rounded-lg font-mono text-sm font-semibold"
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>
    </main>
  );
}

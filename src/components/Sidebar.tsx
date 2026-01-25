import { motion } from 'framer-motion';
import { personalInfo } from '@/data/personal';
import { GithubIcon, LinkedInIcon, TwitterIcon, PhoneIcon } from './Icons';

export function LeftSidebar() {
  return (
    <div className="hidden md:block fixed bottom-0 start-12 z-10">
      <div className="flex flex-col items-center space-y-6">
        <motion.a
          href={personalInfo.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate hover:text-accent transform hover:-translate-y-2 hover:scale-110 duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <GithubIcon className="size-6" />
        </motion.a>
        <motion.a
          href={personalInfo.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate hover:text-accent transform hover:-translate-y-2 hover:scale-110 duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <LinkedInIcon className="size-6" />
        </motion.a>
        <motion.a
          href={personalInfo.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate hover:text-accent transform hover:-translate-y-2 hover:scale-110 duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <TwitterIcon className="size-6" />
        </motion.a>
        <motion.a
          href={`tel:${personalInfo.phone}`}
          className="text-slate hover:text-accent transform hover:-translate-y-2 hover:scale-110 duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <PhoneIcon className="size-6" />
        </motion.a>
        <motion.div
          className="h-24 w-px mt-6"
          style={{ background: 'linear-gradient(to bottom, var(--line-color, rgba(100, 255, 218, 0.5)), transparent)' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
      </div>
    </div>
  );
}

export function RightSidebar() {
  return (
    <div className="hidden md:block fixed bottom-0 end-12 z-10">
      <div className="flex flex-col items-center">
        <motion.a
          href={`mailto:${personalInfo.email}`}
          className="text-slate hover:text-accent font-mono text-sm tracking-widest transform hover:-translate-y-1 duration-300"
          style={{ writingMode: 'vertical-rl' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {personalInfo.email}
        </motion.a>
        <motion.div
          className="h-24 w-px mt-6"
          style={{ background: 'linear-gradient(to bottom, var(--line-color, rgba(100, 255, 218, 0.5)), transparent)' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        />
      </div>
    </div>
  );
}

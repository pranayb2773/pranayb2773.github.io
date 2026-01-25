import { personalInfo } from '@/data/personal';
import { GithubIcon, LinkedInIcon, TwitterIcon, PhoneIcon, EmailIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="text-center py-8 sm:py-12 relative z-10 px-4">
      <div className="md:hidden flex justify-center items-center gap-5 sm:gap-8 mb-6 sm:mb-8">
        <a
          href={personalInfo.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate hover:text-accent transform hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <GithubIcon className="size-5 sm:size-6" />
        </a>
        <a
          href={personalInfo.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate hover:text-accent transform hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <LinkedInIcon className="size-5 sm:size-6" />
        </a>
        <a
          href={personalInfo.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate hover:text-accent transform hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <TwitterIcon className="size-5 sm:size-6" />
        </a>
        <a
          href={`tel:${personalInfo.phone}`}
          className="text-slate hover:text-accent transform hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <PhoneIcon className="size-5 sm:size-6" />
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-slate hover:text-accent transform hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <EmailIcon className="size-5 sm:size-6" />
        </a>
      </div>
      <p className="text-slate text-xs sm:text-sm font-mono">
        Designed & Built by <span className="text-accent">Pranay Teja Baddam</span>
      </p>
    </footer>
  );
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo } from '@/data/personal';
import { EmailIcon, LinkedInIcon, PhoneIcon, LocationIcon, ArrowRightIcon } from '@/components/Icons';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-mono text-base sm:text-lg mb-3 sm:mb-4">04. What's Next?</p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-lightest-slate">
            Let's Work Together
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-light-slate text-base sm:text-lg mt-4 sm:mt-6 leading-relaxed text-center max-w-2xl mx-auto px-2">
            I'm currently open to new opportunities where I can contribute, learn, and grow.
            If you have a project that needs a dedicated developer or a position that matches my skills,
            I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {/* Email Card */}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="group contact-card glass-card p-5 sm:p-6 rounded-xl sm:rounded-2xl text-center hover-lift"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <EmailIcon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
            </div>
            <h4 className="font-display font-semibold text-lightest-slate mb-1 sm:mb-2 text-sm sm:text-base">Email Me</h4>
            <p className="text-xs sm:text-sm text-slate mb-2 sm:mb-3">For job opportunities & collaborations</p>
            <span className="text-accent font-mono text-xs sm:text-sm group-hover:underline break-all">{personalInfo.email}</span>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group contact-card glass-card p-5 sm:p-6 rounded-xl sm:rounded-2xl text-center hover-lift"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <LinkedInIcon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
            </div>
            <h4 className="font-display font-semibold text-lightest-slate mb-1 sm:mb-2 text-sm sm:text-base">Connect on LinkedIn</h4>
            <p className="text-xs sm:text-sm text-slate mb-2 sm:mb-3">Let's expand our professional network</p>
            <span className="text-accent font-mono text-xs sm:text-sm group-hover:underline">@pranay-teja-baddam</span>
          </motion.a>

          {/* Phone Card */}
          <motion.a
            href={`tel:${personalInfo.phone}`}
            className="group contact-card glass-card p-5 sm:p-6 rounded-xl sm:rounded-2xl text-center hover-lift sm:col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <PhoneIcon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
            </div>
            <h4 className="font-display font-semibold text-lightest-slate mb-1 sm:mb-2 text-sm sm:text-base">Call Me</h4>
            <p className="text-xs sm:text-sm text-slate mb-2 sm:mb-3">For urgent discussions</p>
            <span className="text-accent font-mono text-xs sm:text-sm group-hover:underline">{personalInfo.phone}</span>
          </motion.a>
        </div>

        {/* Availability Status */}
        <motion.div
          className="mt-8 sm:mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full glass-card">
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-green-500"></span>
            </span>
            <span className="text-light-slate text-xs sm:text-sm">{personalInfo.availability}</span>
          </div>
        </motion.div>

        {/* Location Info */}
        <motion.div
          className="mt-6 sm:mt-8 text-center px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-slate text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
            <span className="flex items-center gap-1 sm:gap-2">
              <LocationIcon className="w-4 h-4 text-accent" />
              Based in {personalInfo.location}
            </span>
            <span className="hidden sm:inline">|</span>
            <span>{personalInfo.locationNote}</span>
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-8 sm:mt-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href={`mailto:${personalInfo.email}?subject=Job%20Opportunity%20-%20Let's%20Connect&body=Hi%20Pranay,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity.%0A%0A`}
            className="magnetic-btn group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-accent text-navy rounded-lg sm:rounded-xl font-mono font-semibold text-sm sm:text-base hover:bg-accent/90 transition-colors"
          >
            <span>Start a Conversation</span>
            <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

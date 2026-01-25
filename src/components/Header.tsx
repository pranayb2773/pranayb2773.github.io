import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from './Icons';

const navItems = [
  { number: '01', label: 'About', href: '#about' },
  { number: '02', label: 'Experience', href: '#experience' },
  { number: '03', label: 'Work', href: '#work' },
  { number: '04', label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (!isHomePage && href.startsWith('#')) {
      window.location.href = '/' + href;
    }
  };

  return (
    <>
      <header className="fixed top-0 z-[100] w-full">
        <nav className="glass mx-2 sm:mx-4 mt-2 sm:mt-4 rounded-xl sm:rounded-2xl">
          <div className="flex items-center justify-between max-w-6xl px-4 sm:px-6 py-3 sm:py-4 mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-accent text-xl sm:text-2xl font-mono font-bold"
            >
              <Link to="/" className="relative group">
                <span className="relative z-10">PB</span>
                <span className="absolute inset-0 bg-accent/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={isHomePage ? item.href : `/${item.href}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  className="text-lightest-slate hover:text-accent duration-300 group"
                  onClick={() => handleNavClick(item.href)}
                >
                  <span className="text-accent font-mono">{item.number}.</span>
                  <span className="relative">
                    {' '}{item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
                  </span>
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={toggleTheme}
                className="theme-toggle text-accent focus:outline-none ms-2 hover:rotate-180 transition-transform duration-500"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="theme-toggle text-accent focus:outline-none"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-accent focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-navy/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center space-y-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={isHomePage ? item.href : `/${item.href}`}
                  onClick={() => handleNavClick(item.href)}
                  className="text-2xl text-lightest-slate hover:text-accent duration-300"
                >
                  <span className="text-accent font-mono me-2">{item.number}.</span>
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

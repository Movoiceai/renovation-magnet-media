import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#problem', label: 'Problem' },
    { href: '#solution', label: 'Solution' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#proof', label: 'Results' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'glass dark:bg-gray-900/80 shadow-sm border-b border-white/20 dark:border-gray-700/50'
          : 'bg-transparent'
        }`}
    >
      <nav className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-teal flex items-center justify-center">
              <span className="text-white font-bold text-lg lg:text-xl">RM</span>
            </div>
            <span className={`font-bold text-lg lg:text-xl transition-colors ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'
              }`}>
              Renovation Magnet Media
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:text-teal ${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-gray-700 dark:text-gray-300'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="tel:+18001234567"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-teal transition-colors"
            >
              <Phone className="w-4 h-4" />
              (800) 123-4567
            </a>
            <Button
              onClick={() => scrollToSection('#cta')}
              className="bg-teal hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-full btn-shine"
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
            }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-gray-700 dark:text-gray-300 font-medium hover:text-teal transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#cta')}
              className="bg-teal hover:bg-teal-600 text-white font-semibold w-full mt-2 rounded-full"
            >
              Book a Call
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

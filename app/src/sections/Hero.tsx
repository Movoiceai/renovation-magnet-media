import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, TrendingUp, Shield, Play } from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 20;
      const y = (e.clientY - rect.top - rect.height / 2) / 20;
      imageRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Badge */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Badge className="bg-teal/10 text-teal border-teal/20 px-4 py-2 text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                100% Human-Powered AI
              </Badge>
            </div>

            {/* Headline */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                The{' '}
                <span className="text-teal">#1 AI Growth System</span>{' '}
                for Kitchen & Bath Remodelers
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                Never miss another estimate. Close more projects. Automate your growth with 24/7 AI answering, smart CRM, and done-for-you lead generation.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 lg:gap-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">24/7</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">AI Answering</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">+2-3</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Extra Projects/Month</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                  <Play className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">DFY</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Automation</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Button
                onClick={() => scrollToSection('#cta')}
                size="lg"
                className="bg-teal hover:bg-teal-600 text-white font-semibold px-8 py-6 text-lg rounded-full btn-shine shadow-teal-lg"
              >
                Book Your Strategy Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('#how-it-works')}
                className="border-2 border-gray-300 dark:border-gray-600 hover:border-teal text-gray-700 dark:text-gray-300 hover:text-teal font-semibold px-8 py-6 text-lg rounded-full"
              >
                See How It Works
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&q=80'
                ].map((url, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm"
                  >
                    <img src={url} alt={`Client ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">50+ contractors</span> already growing with us
              </p>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="order-1 lg:order-2 relative">
            <div
              ref={imageRef}
              className="relative animate-fade-in-up"
              style={{ animationDelay: '0.3s', transition: 'transform 0.3s ease-out' }}
            >
              {/* Main Image */}
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero-contractor.jpg"
                  alt="Professional kitchen designer using AI growth system"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating Card - Response Time */}
              <div className="absolute -left-4 lg:-left-8 bottom-20 lg:bottom-24 bg-white dark:bg-gray-800 rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-card animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">2 min</p>
                    <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400">Avg Response</p>
                  </div>
                </div>
              </div>

              {/* Floating Card - Booked */}
              <div className="absolute -right-4 lg:-right-8 top-8 lg:top-12 bg-white dark:bg-gray-800 rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-card animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-teal/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-teal" />
                  </div>
                  <div>
                    <p className="text-2xl lg:text-3xl font-bold text-teal">+50%</p>
                    <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400">Higher Close Rate</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-teal/20 rounded-full blur-2xl" />
              <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 bg-yellow/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

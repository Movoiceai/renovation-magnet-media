import { useEffect, useRef, useState } from 'react';
import { Check, Star, ArrowRight, Sparkles, Phone, Zap, Crown, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const tiers = [
    {
      name: "Tier 1",
      title: "AI Receptionist Only",
      price: 697,
      description: "Perfect for strong organic leads (referrals, SEO)",
      features: [
        "24/7 AI answering & lead booking",
        "Basic follow-up (3 touches over 7 days)",
        "SMS/email notifications",
        "Email support (24-48 hours)"
      ],
      result: "+2-3 projects/month",
      icon: Phone,
      popular: false
    },
    {
      name: "Tier 2",
      title: "Full AI Growth System",
      price: 1397,
      description: "Best for 10-20+ leads/month, ready to scale",
      features: [
        "Everything in Tier 1 plus:",
        "Full CRM (unlimited contacts, team)",
        "14-day automated follow-up sequences",
        "Project portal for clients",
        "One-thread communication",
        "Review generation",
        "3 hours/month support"
      ],
      result: "+3-5 projects/month",
      icon: Zap,
      popular: true
    },
    {
      name: "Tier 3",
      title: "Done-For-You Growth",
      price: 2197,
      description: "For aggressive scaling ($1M+ ARR goal)",
      features: [
        "Everything in Tier 2 plus:",
        "Done-For-You lead generation",
        "Facebook & Google ad campaigns",
        "Landing pages & A/B testing",
        "Monthly ad optimization & reporting",
        "Dedicated account manager",
        "Weekly strategy calls"
      ],
      result: "+8-15 leads/mo + 12-20 projects",
      icon: Crown,
      popular: false
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="pricing"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-gray-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-teal" />
              <span className="text-sm font-medium text-teal">Choose Your Growth Level</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Start at any tier. Upgrade anytime. Month-to-month. No contracts.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  isYearly ? 'bg-teal' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                    isYearly ? 'left-8' : 'left-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
                Yearly
              </span>
              {isYearly && (
                <span className="px-3 py-1 bg-yellow/20 text-yellow-800 text-xs font-semibold rounded-full">
                  Save 20%
                </span>
              )}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {tiers.map((tier, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 transition-all duration-1000 ${
                  tier.popular 
                    ? 'shadow-teal-lg border-2 border-teal scale-105 z-10' 
                    : 'shadow-card hover:shadow-teal-lg'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 px-4 py-2 bg-teal text-white rounded-full text-sm font-semibold shadow-lg">
                      <Star className="w-4 h-4 fill-current" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Tier Info */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      tier.popular ? 'bg-teal' : 'bg-teal/10'
                    }`}>
                      <tier.icon className={`w-5 h-5 ${tier.popular ? 'text-white' : 'text-teal'}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">{tier.name}</p>
                      <h3 className="text-xl font-bold text-gray-900">{tier.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                      ${isYearly ? Math.round(tier.price * 0.8) : tier.price}
                    </span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-green-600 mt-1">
                      Save ${(tier.price * 0.2 * 12).toLocaleString()}/year
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={() => scrollToSection('#cta')}
                  className={`w-full mb-6 py-6 rounded-full font-semibold ${
                    tier.popular 
                      ? 'bg-teal hover:bg-teal-600 text-white btn-shine' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                {/* Features */}
                <div className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        tier.popular ? 'bg-teal/10' : 'bg-gray-100'
                      }`}>
                        <Check className={`w-3 h-3 ${tier.popular ? 'text-teal' : 'text-gray-600'}`} />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Expected Result */}
                <div className={`mt-6 pt-6 border-t ${
                  tier.popular ? 'border-teal/20' : 'border-gray-100'
                }`}>
                  <p className="text-sm text-gray-600 mb-2">Expected result:</p>
                  <p className={`font-semibold ${tier.popular ? 'text-teal' : 'text-gray-900'}`}>
                    {tier.result}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className={`mt-12 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-gray-600 mb-4">
              All plans include a <span className="font-semibold text-teal">90-day money-back guarantee</span>
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <Clock className="w-4 h-4 text-teal" />
              <span className="text-sm text-gray-700">
                ROI in <span className="font-semibold text-teal">30 days</span> or your money back
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

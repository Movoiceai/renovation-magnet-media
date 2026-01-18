import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Phone, CheckCircle, Sparkles, Clock, TrendingUp } from 'lucide-react';

export function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    leads: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const questions = [
    "If I could book 2-3 extra projects per month without hiring, would that change my business?",
    "What's 2-3 extra projects per month worth? ($80K-150K for most of you)",
    "What's the cost of NOT doing this? (continuing to lose leads and waste time)"
  ];

  return (
    <section 
      id="cta"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-teal overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <Sparkles className="w-5 h-5 text-yellow" />
                <span className="text-sm font-medium text-white">Ready to Never Miss Another Estimate?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
                Ask Yourself:
              </h2>

              <div className="space-y-4 mb-10">
                {questions.map((question, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl"
                  >
                    <div className="w-8 h-8 rounded-full bg-yellow/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold text-yellow">{index + 1}</span>
                    </div>
                    <p className="text-white leading-relaxed">{question}</p>
                  </div>
                ))}
              </div>

              {/* Value Props */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">24/7</p>
                    <p className="text-sm text-teal-200">AI Answering</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">+2-3</p>
                    <p className="text-sm text-teal-200">Extra Projects/Month</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">90-Day</p>
                    <p className="text-sm text-teal-200">Guarantee</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">ROI in</p>
                    <p className="text-sm text-teal-200">30 days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-10 shadow-2xl">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Thank You!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      We've received your information. Our team will contact you within 24 hours to schedule your strategy call.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full">
                      <Calendar className="w-4 h-4 text-teal" />
                      <span className="text-sm text-teal font-medium">Strategy call within 24h</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Book Your Strategy Call
                      </h3>
                      <p className="text-gray-600">
                        20-minute deep-dive on YOUR numbers
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors"
                            placeholder="Smith Kitchen Remodeling"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors"
                            placeholder="john@company.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          How many leads do you get per month? *
                        </label>
                        <select
                          required
                          value={formData.leads}
                          onChange={(e) => setFormData({...formData, leads: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors bg-white"
                        >
                          <option value="">Select an option</option>
                          <option value="0-5">0-5 leads per month</option>
                          <option value="6-15">6-15 leads per month</option>
                          <option value="16-30">16-30 leads per month</option>
                          <option value="30+">30+ leads per month</option>
                        </select>
                      </div>

                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-teal hover:bg-teal-600 text-white font-semibold py-6 rounded-xl btn-shine"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Submitting...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Book My Strategy Call
                            <ArrowRight className="w-5 h-5" />
                          </span>
                        )}
                      </Button>

                      <p className="text-center text-sm text-gray-500">
                        By submitting, you agree to our{' '}
                        <a href="#" className="text-teal hover:underline">Privacy Policy</a>
                        {' '}and{' '}
                        <a href="#" className="text-teal hover:underline">Terms of Service</a>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

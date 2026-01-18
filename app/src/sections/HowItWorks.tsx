import { useEffect, useRef, useState } from 'react';
import { Phone, MessageCircle, Calendar, Bell, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Homeowner Calls",
      description: "You're on a job site. Phone rings. Instead of voicemail, AI answers instantly with a professional greeting.",
      highlight: "Instant answer"
    },
    {
      number: "02",
      icon: MessageCircle,
      title: "AI Qualifies Lead",
      description: "Professional conversation qualifies for project type, budget range, timeline, and location.",
      highlight: "+50% close rate"
    },
    {
      number: "03",
      icon: Calendar,
      title: "Books Appointment",
      description: "AI books them directly into your calendar. Homeowner gets instant confirmation.",
      highlight: "Auto-scheduled"
    },
    {
      number: "04",
      icon: Bell,
      title: "You Get Notified",
      description: "SMS alert with full lead details. Call them back—qualified and ready to close.",
      highlight: "Hot lead ready"
    }
  ];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-teal" />
              <span className="text-sm font-medium text-teal">Your 24/7 AI Receptionist</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From first call to booked appointment in under 2 minutes—fully automated
            </p>
          </div>

          {/* Timeline Steps */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            {/* Connecting Line - Desktop */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-teal/20 via-teal to-teal/20 mx-20" />

            {/* Steps Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative group transition-all duration-500`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  {/* Step Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-card hover:shadow-teal-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                    {/* Step Number Circle */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-teal flex items-center justify-center mx-auto lg:mx-0 group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      {/* Step Number Badge */}
                      <div className="absolute -top-2 -right-2 lg:right-auto lg:-left-2 w-8 h-8 rounded-full bg-yellow flex items-center justify-center text-sm font-bold text-gray-900 shadow-lg">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center lg:text-left">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-center lg:text-left">
                      {step.description}
                    </p>

                    {/* Highlight Badge */}
                    <div className="flex justify-center lg:justify-start">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-teal/10 text-teal text-sm font-medium rounded-full">
                        <CheckCircle className="w-4 h-4" />
                        {step.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Arrow between cards - Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-24 -right-4 z-10 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-2 border-teal items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-teal" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Why This Works */}
          <div className={`mt-16 lg:mt-20 bg-teal rounded-2xl lg:rounded-3xl p-8 lg:p-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Why This Works
                </h3>
                <p className="text-teal-100 mb-6 leading-relaxed">
                  Homeowner perception: They think they're talking to your receptionist.
                  Better than a human—available 24/7, qualifies leads, books appointments.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                    <CheckCircle className="w-5 h-5 text-yellow" />
                    <span className="text-white text-sm">Available 24/7</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                    <CheckCircle className="w-5 h-5 text-yellow" />
                    <span className="text-white text-sm">Qualifies Leads</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                    <CheckCircle className="w-5 h-5 text-yellow" />
                    <span className="text-white text-sm">Books Appointments</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600">Customer Satisfaction</p>
                    <p className="text-2xl font-bold text-gray-900">Think it's human</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

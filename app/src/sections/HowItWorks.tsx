import { useEffect, useRef, useState } from 'react';
import { Phone, MessageCircle, Calendar, Bell, CheckCircle, ArrowRight, Clock, Sparkles } from 'lucide-react';

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

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
      description: "Monday, 2:15 PM. You're on a job site. Phone rings. Instead of voicemail, AI answers instantly with a professional greeting.",
      image: "/images/process-1.jpg",
      stats: [
        { label: "Homeowners expect instant response", value: "98%" },
        { label: "Will call competitor if >2 hours", value: "70%" }
      ]
    },
    {
      number: "02",
      icon: MessageCircle,
      title: "AI Qualifies Lead",
      description: "Professional conversation qualifies for project type, budget range, timeline, location, and even collects photos.",
      image: "/images/process-2.jpg",
      stats: [
        { label: "Higher close rate (answer in 2 min)", value: "+50%" }
      ]
    },
    {
      number: "03",
      icon: Calendar,
      title: "Books Appointment",
      description: "Perfect! AI books them for Tuesday at 2 PM. A team member will confirm tomorrow. Homeowner gets instant confirmation.",
      image: "/images/process-3.jpg",
      stats: []
    },
    {
      number: "04",
      icon: Bell,
      title: "You Get Notified",
      description: "SMS alert with full lead details. When you're back in cell service, you call them back—qualified and ready to close.",
      image: "/images/feature-1.jpg",
      stats: []
    }
  ];

  return (
    <section 
      id="how-it-works"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-teal" />
              <span className="text-sm font-medium text-teal">Your 24/7 AI Receptionist</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From first call to booked appointment in under 2 minutes—fully automated
            </p>
          </div>

          {/* Step Indicators */}
          <div className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center gap-2 lg:gap-4">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-teal text-white shadow-teal' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-sm font-semibold">{step.number}</span>
                  <span className="hidden sm:inline text-sm font-medium">{step.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile: Step Selector */}
          <div className={`lg:hidden mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <select 
              value={activeStep}
              onChange={(e) => setActiveStep(Number(e.target.value))}
              className="w-full p-4 rounded-xl border border-gray-200 bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-teal/20"
            >
              {steps.map((step, index) => (
                <option key={index} value={index}>
                  {step.number}. {step.title}
                </option>
              ))}
            </select>
          </div>

          {/* Active Step Content */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`${activeStep === index ? 'block' : 'hidden'} lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center`}
              >
                {/* Content */}
                <div className="mb-8 lg:mb-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-teal flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-teal">Step {step.number}</span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Stats */}
                  {step.stats.length > 0 && (
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {step.stats.map((stat, i) => (
                        <div key={i} className="p-4 bg-teal/5 rounded-xl border border-teal/10">
                          <p className="text-2xl font-bold text-teal">{stat.value}</p>
                          <p className="text-sm text-gray-600">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex items-center gap-4">
                    {index > 0 && (
                      <button
                        onClick={() => setActiveStep(index - 1)}
                        className="px-6 py-3 rounded-full border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                      >
                        Previous
                      </button>
                    )}
                    {index < steps.length - 1 && (
                      <button
                        onClick={() => setActiveStep(index + 1)}
                        className="px-6 py-3 rounded-full bg-teal text-white font-medium hover:bg-teal-600 transition-colors flex items-center gap-2"
                      >
                        Next Step
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                    {index === steps.length - 1 && (
                      <div className="flex items-center gap-2 text-green-600 font-medium">
                        <CheckCircle className="w-5 h-5" />
                        Process Complete
                      </div>
                    )}
                  </div>
                </div>

                {/* Image */}
                <div className="relative">
                  <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Floating Badge */}
                  {index === 0 && (
                    <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white rounded-xl p-4 shadow-card animate-float">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-teal" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">Response Time</p>
                          <p className="text-lg font-bold text-teal">Under 2 min</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Why This Works */}
          <div className={`mt-16 lg:mt-20 bg-teal rounded-2xl lg:rounded-3xl p-8 lg:p-12 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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

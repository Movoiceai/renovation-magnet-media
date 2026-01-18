import { useEffect, useRef, useState } from 'react';
import { Phone, Bot, Calendar, MessageSquare, Users, Target, BarChart3, Zap } from 'lucide-react';

export function Solution() {
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

  const features = [
    {
      icon: Bot,
      title: "AI Front Desk",
      description: "24/7 intelligent answering that qualifies and books leads instantly",
      benefits: [
        "Answers calls, texts, and forms",
        "Qualifies by budget & timeline",
        "Books into calendar automatically"
      ],
      color: "teal"
    },
    {
      icon: Calendar,
      title: "Smart CRM + Automation",
      description: "Automated follow-up sequences over 14 days via SMS, email, and voice",
      benefits: [
        "14-day nurture sequences",
        "Project portal for clients",
        "One-thread communication"
      ],
      color: "blue"
    },
    {
      icon: Target,
      title: "Optional Lead Generation",
      description: "Done-for-you ad campaigns on Facebook, Google, and Instagram",
      benefits: [
        "High-intent homeowner targeting",
        "Landing pages that convert",
        "Monthly optimization & reporting"
      ],
      color: "purple"
    }
  ];

  const results = [
    { icon: Zap, value: "40-50%", label: "Faster Response" },
    { icon: BarChart3, value: "30-40%", label: "Higher Conversion" },
    { icon: Calendar, value: "+2-3", label: "Extra Projects/Month" },
    { icon: Users, value: "20-25%", label: "Less Admin Time" },
    { icon: Phone, value: "Zero", label: "Missed Opportunities" }
  ];

  return (
    <section
      id="solution"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-gray-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full mb-6">
              <Zap className="w-5 h-5 text-teal" />
              <span className="text-sm font-medium text-teal">The Complete Solution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Renovation Magnet Media's Complete Growth System
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combined the best of AI technology + proven marketing strategies—made affordable for remodelers
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-card hover:shadow-teal-lg transition-all duration-500 card-hover ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-${feature.color}-50 flex items-center justify-center mb-6 group-hover:bg-${feature.color}-100 transition-colors`}>
                  <feature.icon className={`w-7 h-7 lg:w-8 lg:h-8 text-${feature.color}-500`} />
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-teal" />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Results Grid */}
          <div className={`bg-white rounded-2xl lg:rounded-3xl p-8 lg:p-12 shadow-card transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <div className="text-center mb-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                The Transformation
              </h3>
              <p className="text-gray-600">
                What you can expect after implementing our system
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="text-center p-4 lg:p-6 rounded-xl bg-gray-50 hover:bg-teal/5 transition-colors"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                    <result.icon className="w-6 h-6 text-teal" />
                  </div>
                  <p className="text-2xl lg:text-3xl font-bold text-teal mb-1">{result.value}</p>
                  <p className="text-sm text-gray-600">{result.label}</p>
                </div>
              ))}
            </div>

            {/* Key Insight */}
            <div className="mt-10 p-6 bg-teal/5 rounded-xl border border-teal/10">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <MessageSquare className="w-4 h-4 text-teal" />
                </div>
                <div>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-teal">Key insight:</span> We combined the best of AI answering + done-for-you marketing + CRM automation—made affordable for remodelers. Our system starts at just <span className="font-bold text-teal">$697/month</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

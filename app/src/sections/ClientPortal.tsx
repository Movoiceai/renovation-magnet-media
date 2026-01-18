import { useEffect, useRef, useState } from 'react';
import { Users, Image, FileText, MessageSquare, CreditCard, Clock, CheckCircle, Eye } from 'lucide-react';

export function ClientPortal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

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
      icon: Clock,
      title: "Project Timeline",
      description: "Complete visibility into project phases with automatic progress updates",
      details: ["Estimated start date", "Demo day", "Install day", "Milestone moments", "Completion", "Final reveal"],
      image: "/images/feature-1.jpg"
    },
    {
      icon: Image,
      title: "Photo Gallery",
      description: "Before, during, and after photos with daily progress updates",
      details: ["Before & after shots", "Daily progress photos", "Milestone moments", "Final reveal gallery"],
      image: "/images/feature-2.jpg"
    },
    {
      icon: FileText,
      title: "Documents",
      description: "All paperwork organized in one secure location",
      details: ["Contracts", "Permits", "Insurance docs", "Warranties"],
      image: "/images/feature-3.jpg"
    },
    {
      icon: MessageSquare,
      title: "Message Thread",
      description: "One organized conversation with your entire history",
      details: ["All SMS in one thread", "Email history", "Call notes", "No more chaos"],
      image: "/images/process-1.jpg"
    },
    {
      icon: CreditCard,
      title: "Payment Portal",
      description: "See invoices and make secure online payments",
      details: ["View all invoices", "Secure online payments", "Payment history"],
      image: "/images/process-2.jpg"
    }
  ];

  const results = [
    { value: "60%", label: "Fewer 'what's going on?' calls" },
    { value: "10 hrs/mo", label: "Less client service time" },
    { value: "24/7", label: "Happier clients" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-gray-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full mb-6">
              <Users className="w-5 h-5 text-teal" />
              <span className="text-sm font-medium text-teal">Your Clients Live Here</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              (Not In Your Phone)
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Give your clients a professional portal to track their project, view photos, and communicate—all in one place
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Feature Tabs */}
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-4 lg:p-6 rounded-xl lg:rounded-2xl transition-all duration-300 ${
                      activeTab === index 
                        ? 'bg-white shadow-card border-l-4 border-teal' 
                        : 'bg-white/50 hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        activeTab === index ? 'bg-teal' : 'bg-gray-100'
                      }`}>
                        <feature.icon className={`w-6 h-6 ${
                          activeTab === index ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {feature.description}
                        </p>
                        
                        {/* Expandable Details */}
                        <div className={`mt-4 space-y-2 overflow-hidden transition-all duration-300 ${
                          activeTab === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          {feature.details.map((detail, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                      <Eye className={`w-5 h-5 flex-shrink-0 transition-colors ${
                        activeTab === index ? 'text-teal' : 'text-gray-400'
                      }`} />
                    </div>
                  </button>
                ))}
              </div>

              {/* Results */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {results.map((result, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <p className="text-xl lg:text-2xl font-bold text-teal">{result.value}</p>
                    <p className="text-xs text-gray-600">{result.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual */}
            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={features[activeTab].image}
                    alt={features[activeTab].title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
                  {/* Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                        {(() => {
                          const IconComponent = features[activeTab].icon;
                          return <IconComponent className="w-5 h-5 text-teal" />;
                        })()}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{features[activeTab].title}</p>
                        <p className="text-sm text-gray-600">Active Now</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow/20 rounded-full blur-xl" />

                {/* Client Perception Quote */}
                <div className="mt-6 p-6 bg-teal-dark rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-yellow/20 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-yellow" />
                    </div>
                    <div>
                      <p className="text-white font-medium mb-2">Client Perception</p>
                      <p className="text-teal-100 text-sm leading-relaxed">
                        Professional, transparent, organized. You're the contractor who "has their act together."
                      </p>
                    </div>
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

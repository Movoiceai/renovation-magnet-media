import { useEffect, useRef, useState } from 'react';
import { Calendar, CheckCircle, Settings, Rocket, MessageSquare, Zap } from 'lucide-react';

export function Implementation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeWeek, setActiveWeek] = useState(0);

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

  const weeks = [
    {
      number: "1-2",
      title: "Setup",
      icon: Settings,
      description: "Initial consultation and system configuration",
      tasks: [
        "Initial consultation",
        "AI trained on your services",
        "Intake form customized",
        "Phone number switched"
      ],
      result: "AI ready to answer",
      image: "/images/process-1.jpg"
    },
    {
      number: "3-4",
      title: "Integration",
      icon: Zap,
      description: "CRM database built and follow-up sequences created",
      tasks: [
        "CRM database built",
        "Follow-up sequences created",
        "Calendar sync tested",
        "Team access setup"
      ],
      result: "Automation flows ready",
      image: "/images/process-2.jpg"
    },
    {
      number: "5-6",
      title: "Testing",
      icon: MessageSquare,
      description: "Full workflow testing and optimization",
      tasks: [
        "Mock leads run through",
        "Full workflow tested",
        "Client portal tested",
        "Integrations verified"
      ],
      result: "System fully optimized",
      image: "/images/process-3.jpg"
    },
    {
      number: "7-8",
      title: "Go-Live",
      icon: Rocket,
      description: "System goes live with full support",
      tasks: [
        "System goes live",
        "First real leads flowing",
        "24/7 support (2 weeks)",
        "Optimization calls"
      ],
      result: "Closing projects from system",
      image: "/images/hero-contractor.jpg"
    }
  ];

  const milestones = [
    { week: "Week 3", milestone: "Getting AI leads" },
    { week: "Week 6", milestone: "Follow-up automation working" },
    { week: "Week 8", milestone: "Closing projects from system" }
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
          <div className={`text-center mb-16 lg:mb-20 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transition: 'all 1s ease-out' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full mb-6">
              <Calendar className="w-5 h-5 text-teal" />
              <span className="text-sm font-medium text-teal">From Signup to Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Implementation in 8 Weeks
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Speed matters: We are typically up and running in 7 weeks. Results visible in real-time.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Timeline */}
            <div className={`${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transition: 'all 1s ease-out 0.2s' }}>
              <div className="space-y-4">
                {weeks.map((week, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveWeek(index)}
                    className={`w-full text-left p-4 lg:p-6 rounded-xl lg:rounded-2xl transition-all duration-300 ${
                      activeWeek === index 
                        ? 'bg-white shadow-card border-l-4 border-teal' 
                        : 'bg-white/50 hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Week Number */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        activeWeek === index ? 'bg-teal' : 'bg-gray-100'
                      }`}>
                        <span className={`font-bold ${
                          activeWeek === index ? 'text-white' : 'text-gray-600'
                        }`}>{week.number}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <week.icon className={`w-5 h-5 ${
                            activeWeek === index ? 'text-teal' : 'text-gray-400'
                          }`} />
                          <h3 className="text-lg font-bold text-gray-900">{week.title}</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{week.description}</p>

                        {/* Expandable Tasks */}
                        <div className={`space-y-2 overflow-hidden transition-all duration-300 ${
                          activeWeek === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          {week.tasks.map((task, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                              {task}
                            </div>
                          ))}
                        </div>

                        {/* Result */}
                        <div className={`mt-4 p-3 bg-teal/5 rounded-lg transition-all duration-300 ${
                          activeWeek === index ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <p className="text-sm font-medium text-teal">{week.result}</p>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right - Visual & Milestones */}
            <div className={`${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transition: 'all 1s ease-out 0.4s' }}>
              {/* Active Week Visual */}
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl mb-8">
                <img
                  src={weeks[activeWeek].image}
                  alt={weeks[activeWeek].title}
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-teal flex items-center justify-center">
                      {(() => {
                        const IconComponent = weeks[activeWeek].icon;
                        return <IconComponent className="w-5 h-5 text-white" />;
                      })()}
                    </div>
                    <div>
                      <p className="text-sm text-white/80">Week {weeks[activeWeek].number}</p>
                      <h4 className="text-xl font-bold text-white">{weeks[activeWeek].title}</h4>
                    </div>
                  </div>
                  <p className="text-white/90">{weeks[activeWeek].result}</p>
                </div>
              </div>

              {/* Milestones */}
              <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-card">
                <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-teal" />
                  Key Milestones
                </h4>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-teal/5 rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-teal" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{milestone.week}</p>
                        <p className="text-sm text-gray-600">{milestone.milestone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

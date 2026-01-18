import { useEffect, useRef, useState } from 'react';
import { PhoneMissed, Clock, MessageCircleX, AlertTriangle, DollarSign, TrendingDown } from 'lucide-react';

export function Problem() {
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

  const problems = [
    {
      icon: PhoneMissed,
      title: "Missed Calls = Missed Revenue",
      description: "You're on a job site. Phone rings. Can't answer. Homeowner calls your competitor instead.",
      stat: "$40K",
      statLabel: "Average kitchen remodel lost"
    },
    {
      icon: Clock,
      title: "Slow Response Kills Deals",
      description: "4-6 hour delay. Homeowner already has 2-3 quotes. You're now the 4th choice.",
      stat: "50%",
      statLabel: "Of leads go to first responder"
    },
    {
      icon: MessageCircleX,
      title: "Follow-Up Failure",
      description: "70% of leads need 5-7 touches. You do 1-2. They call your competitor.",
      stat: "70%",
      statLabel: "Need 5-7 touches before booking"
    }
  ];

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #007A7A 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-6">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium text-red-600">The $120B Problem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Losing 2-3 Projects Per Month?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The US remodelling market is worth $120 billion, but contractors are losing
              $80K-120K annually just from being unavailable for 2-4 hours.
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-card hover:shadow-teal-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                  <problem.icon className="w-7 h-7 lg:w-8 lg:h-8 text-red-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  {problem.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {problem.description}
                </p>

                {/* Stat */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <p className="text-3xl lg:text-4xl font-bold text-red-500">{problem.stat}</p>
                    <p className="text-sm text-gray-500">{problem.statLabel}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-teal/10 transition-colors">
                    <TrendingDown className="w-6 h-6 text-gray-400 group-hover:text-teal transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats Bar */}
          <div className={`mt-16 lg:mt-20 bg-teal-dark rounded-2xl lg:rounded-3xl p-8 lg:p-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center mb-4">
                  <DollarSign className="w-10 h-10 text-yellow" />
                </div>
                <p className="text-4xl lg:text-5xl font-bold text-white mb-2">$120B</p>
                <p className="text-teal-200">US Remodelling Market</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-4">
                  <TrendingDown className="w-10 h-10 text-red-400" />
                </div>
                <p className="text-4xl lg:text-5xl font-bold text-white mb-2">$80K-120K</p>
                <p className="text-teal-200">Lost Annually Per Contractor</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-10 h-10 text-yellow" />
                </div>
                <p className="text-4xl lg:text-5xl font-bold text-white mb-2">2-4hrs</p>
                <p className="text-teal-200">Of Unavailability Costs You</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

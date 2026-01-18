import { useEffect, useRef, useState } from 'react';
import { Check, X, Crown, Star, Phone, Target, Award } from 'lucide-react';

export function Comparison() {
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

  const competitors = [
    { name: "AI Answering", icon: null },
    { name: "Lead Gen Agencies", icon: null },
    { name: "Remodeling CRMs", icon: null },
    { name: "Us", icon: Crown, highlighted: true }
  ];

  const features = [
    { name: "AI Answering", wahi: true, growth: false, more: false, us: true },
    { name: "24/7 Coverage", wahi: true, growth: false, more: true, us: true },
    { name: "CRM Included", wahi: false, growth: false, more: true, us: true },
    { name: "Follow-Up Automation", wahi: false, growth: "limited", more: true, us: true },
    { name: "Remodeling Focus", wahi: false, growth: false, more: true, us: true },
    { name: "Lead Generation", wahi: false, growth: true, more: false, us: true },
    { name: "Personal Strategy", wahi: false, growth: "limited", more: false, us: true },
    { name: "Monthly Cost", wahi: "$97-497", growth: "$5-10K setup", more: "$1-3K/mo", us: "$697-2,197" }
  ];

  const comparisons = [
    {
      competitor: "AI Answering Services",
      quote: "They answer the phone. We answer the phone AND make sure you close the deal.",
      icon: Phone
    },
    {
      competitor: "Lead Gen Agencies",
      quote: "Built for kitchen & bath—not solar. More affordable with better control.",
      icon: Target
    },
    {
      competitor: "Remodeling CRMs",
      quote: "Same proven model, but flat pricing + unlimited territories.",
      icon: Award
    }
  ];

  const renderCheck = (value: boolean | string) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-green-500 mx-auto" />;
    } else if (value === "limited") {
      return <span className="text-xs text-yellow-600 font-medium">Limited</span>;
    } else {
      return <X className="w-5 h-5 text-gray-300 mx-auto" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-white dark:bg-gray-900 overflow-hidden"
    >
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full mb-6">
              <Star className="w-5 h-5 text-teal" />
              <span className="text-sm font-medium text-teal">Why We're Different</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              The Complete Growth Partner
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how we stack up against the competition
            </p>
          </div>

          {/* Comparison Table */}
          <div className={`mb-16 lg:mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow-card rounded-2xl lg:rounded-3xl border border-gray-100 dark:border-gray-700">
                  <table className="min-w-full divide-y divide-gray-100 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                          Feature
                        </th>
                        {competitors.map((comp, index) => (
                          <th
                            key={index}
                            className={`px-6 py-4 text-center text-sm font-semibold ${comp.highlighted ? 'bg-teal text-white' : 'text-gray-900 dark:text-white'
                              }`}
                          >
                            <div className="flex items-center justify-center gap-2">
                              {comp.icon && <comp.icon className="w-4 h-4" />}
                              {comp.name}
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700 bg-white dark:bg-gray-900">
                      {features.map((feature, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50/50 dark:bg-gray-800/50' : ''}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                            {feature.name}
                          </td>
                          <td className="px-6 py-4">
                            {typeof feature.wahi === 'string' ? (
                              <span className="text-sm text-gray-700 dark:text-gray-300 text-center block">{feature.wahi}</span>
                            ) : renderCheck(feature.wahi)}
                          </td>
                          <td className="px-6 py-4">
                            {typeof feature.growth === 'string' ? (
                              <span className="text-sm text-gray-700 dark:text-gray-300 text-center block">{feature.growth}</span>
                            ) : renderCheck(feature.growth)}
                          </td>
                          <td className="px-6 py-4">
                            {typeof feature.more === 'string' ? (
                              <span className="text-sm text-gray-700 dark:text-gray-300 text-center block">{feature.more}</span>
                            ) : renderCheck(feature.more)}
                          </td>
                          <td className="px-6 py-4 bg-teal/5">
                            {typeof feature.us === 'string' ? (
                              <span className="text-sm font-semibold text-teal text-center block">{feature.us}</span>
                            ) : (
                              <div className="flex justify-center">
                                <Check className="w-5 h-5 text-teal" />
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Quotes */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {comparisons.map((comp, index) => (
              <div
                key={index}
                className={`bg-gray-50 dark:bg-gray-800 rounded-2xl lg:rounded-3xl p-6 lg:p-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${(index + 3) * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
                    <comp.icon className="w-5 h-5 text-teal" />
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">vs {comp.competitor}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                  "{comp.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

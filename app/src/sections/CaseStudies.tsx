import { useEffect, useRef, useState } from 'react';
import { TrendingUp, MapPin, User, Calendar, DollarSign, ArrowUpRight, CheckCircle } from 'lucide-react';

export function CaseStudies() {
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

  const caseStudies = [
    {
      type: "Solo Contractor",
      location: "Austin, TX",
      tier: "Tier 1 System",
      image: "/images/case-study-1.jpg",
      before: {
        leads: 15,
        conversion: 30,
        projects: 4.5
      },
      after: {
        leads: 15,
        conversion: 40,
        projects: 6
      },
      result: "+$60K/year",
      increase: 1.5,
      timeline: "Month 1"
    },
    {
      type: "3-Person Crew",
      location: "Denver, CO",
      tier: "Tier 2 System",
      image: "/images/case-study-2.jpg",
      before: {
        leads: 25,
        conversion: 35,
        projects: 8.75
      },
      after: {
        leads: 25,
        conversion: 50,
        projects: 12.5
      },
      result: "+$150K/year",
      increase: 3.75,
      timeline: "Month 3"
    },
    {
      type: "Growing Firm",
      location: "Phoenix, AZ",
      tier: "Tier 3 System",
      image: "/images/case-study-3.jpg",
      before: {
        leads: 15,
        conversion: 40,
        projects: 6
      },
      after: {
        leads: 25,
        conversion: 50,
        projects: 12.5
      },
      result: "+$260K/year",
      increase: 6.5,
      timeline: "Month 6"
    }
  ];

  return (
    <section 
      id="proof"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-white overflow-hidden"
    >
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full mb-6">
              <TrendingUp className="w-5 h-5 text-teal" />
              <span className="text-sm font-medium text-teal">Real Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              3 Case Studies. Real Contractors. Real ROI.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how contractors just like you are adding $60K-260K annually with our system
            </p>
          </div>

          {/* Case Study Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-card hover:shadow-teal-lg transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <img
                    src={study.image}
                    alt={`${study.type} case study`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-white/80" />
                      <span className="text-white text-sm">{study.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-white/80" />
                      <span className="text-white text-sm font-medium">{study.type}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  {/* Tier Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-teal/10 text-teal text-xs font-semibold rounded-full">
                      {study.tier}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {study.timeline}
                    </span>
                  </div>

                  {/* Before/After */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Before</p>
                      <p className="text-2xl font-bold text-gray-900">{study.before.projects}</p>
                      <p className="text-xs text-gray-600">Projects/month</p>
                    </div>
                    <div className="text-center p-3 bg-teal/10 rounded-lg">
                      <p className="text-xs text-teal mb-1">After</p>
                      <p className="text-2xl font-bold text-teal">{study.after.projects}</p>
                      <p className="text-xs text-teal">Projects/month</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Conversion Rate</span>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">{study.before.conversion}%</span>
                        <ArrowUpRight className="w-4 h-4 text-teal" />
                        <span className="font-semibold text-teal">{study.after.conversion}%</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Monthly Leads</span>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">{study.before.leads}</span>
                        <ArrowUpRight className="w-4 h-4 text-teal" />
                        <span className="font-semibold text-teal">{study.after.leads}</span>
                      </div>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="p-4 bg-teal rounded-xl text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <DollarSign className="w-5 h-5 text-yellow" />
                      <span className="text-2xl font-bold text-white">{study.result}</span>
                    </div>
                    <p className="text-sm text-teal-100">
                      +{study.increase} projects/month at $40K avg
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ROI Comparison Chart */}
          <div className={`bg-teal-dark rounded-2xl lg:rounded-3xl p-8 lg:p-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center mb-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                ROI Comparison Across Tiers
              </h3>
              <p className="text-teal-100">
                Your investment vs. your returns in the first year
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <p className="text-sm text-teal-200 mb-2">{study.tier}</p>
                  <p className="text-3xl font-bold text-white mb-1">{study.result}</p>
                  <p className="text-sm text-teal-200 mb-4">Annual Revenue</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-teal-200">Investment</span>
                      <span className="text-white">
                        ${(study.tier === "Tier 1 System" ? 697 : study.tier === "Tier 2 System" ? 1397 : 2197) * 12}
/year
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-teal-200">ROI</span>
                      <span className="text-yellow font-semibold">
                        {Math.round((
                          (study.tier === "Tier 1 System" ? 60000 : study.tier === "Tier 2 System" ? 150000 : 260000) / 
                          ((study.tier === "Tier 1 System" ? 697 : study.tier === "Tier 2 System" ? 1397 : 2197) * 12)
                        ) * 100)}%
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-sm text-teal-100">Verified Result</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

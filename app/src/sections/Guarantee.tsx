import { useEffect, useRef, useState } from 'react';
import { Shield, CheckCircle, Clock, Users, TrendingUp } from 'lucide-react';

export function Guarantee() {
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

  const guarantees = [
    {
      icon: Clock,
      title: "40% Faster Response",
      description: "At least 40% improvement in lead response time"
    },
    {
      icon: CheckCircle,
      title: "50% Automated Follow-Up",
      description: "We haven't systematized 50% of your follow-up communication"
    },
    {
      icon: TrendingUp,
      title: "Measurable Impact",
      description: "No measurable impact on your estimate pipeline"
    }
  ];

  const stats = [
    { value: "50+", label: "Contractors tested" },
    { value: "95%", label: "See results in 30 days" },
    { value: "99%", label: "Stick after 90 days" },
    { value: "Rarely", label: "Guarantee gets used" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-teal overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Guarantee Info */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <Shield className="w-5 h-5 text-yellow" />
                <span className="text-sm font-medium text-white">90-Day Guarantee</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                We Put Our Money Where Our Mouth Is
              </h2>

              <p className="text-lg text-teal-100 mb-8 leading-relaxed">
                If within 90 days you're not seeing the results we promised, we'll refund your setup fee 
                and first month's service—no questions asked.
              </p>

              {/* Guarantee Conditions */}
              <div className="space-y-4 mb-8">
                {guarantees.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-yellow/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-yellow" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-teal-100">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Founder Quote */}
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-yellow" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-2">Founder Confidence</p>
                    <p className="text-teal-100 text-sm italic leading-relaxed">
                      "I can make this promise because I know it works. If it doesn't work in 90 days, 
                      we've done something wrong. Most see results in 2 weeks."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Stats & Risk Free */}
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-white/10 backdrop-blur-sm rounded-xl text-center"
                  >
                    <p className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</p>
                    <p className="text-sm text-teal-200">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Risk Free Box */}
              <div className="bg-white rounded-2xl lg:rounded-3xl p-8 lg:p-10">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto rounded-full bg-teal/10 flex items-center justify-center mb-4">
                    <Shield className="w-10 h-10 text-teal" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Zero Risk</h3>
                  <p className="text-gray-600">
                    Risk-free math: Worst case = money back. Best case = +$60K-260K annually.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Best Case</p>
                      <p className="text-sm text-gray-600">+$60K-260K annually</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Worst Case</p>
                      <p className="text-sm text-gray-600">Full refund, no questions asked</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-teal/5 rounded-xl text-center">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-teal">You literally have nothing to lose</span> 
                    {' '}and everything to gain.
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

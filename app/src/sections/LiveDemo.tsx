import { useEffect, useRef, useState } from 'react';
import { Phone, Bot, Sparkles, Mic2, Play, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function LiveDemo() {
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

    return (
        <section
            id="live-demo"
            ref={sectionRef}
            className="relative w-full py-20 lg:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden"
        >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-teal/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-yellow/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Left Content - AI Experience */}
                        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                            }`}>
                            <div className="space-y-4">
                                <Badge className="bg-teal/10 text-teal border-teal/20 px-4 py-2 text-sm font-medium">
                                    <Sparkles className="w-4 h-4 mr-2" />
                                    Experience the Future
                                </Badge>

                                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                                    Meet <span className="text-teal">Rachel</span>—Your New Top Front-Desk Rep
                                </h2>

                                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Rachel is a discovery-first Voice AI that shows how your business can convert more calls into booked opportunities—without sounding robotic or rushing customers.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                                    <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <Mic2 className="w-5 h-5 text-teal" />
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        She asks the right questions, qualifies leads like a pro, and only moves to booking when the customer is ready.
                                    </p>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                                    <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle2 className="w-5 h-5 text-teal" />
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        In a quick live demo, you'll see exactly how AI can help you stop missing calls and start capturing more revenue.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4">
                                <div className="inline-block p-1 bg-gradient-to-r from-teal to-yellow rounded-[2.5rem]">
                                    <a
                                        href="tel:+19453936614"
                                        className="flex items-center gap-4 px-8 py-5 bg-white dark:bg-gray-900 rounded-[2.25rem] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-teal flex items-center justify-center text-white animate-bounce-subtle">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Call for Live Demo</p>
                                            <p className="text-2xl font-bold text-gray-900 dark:text-white">+1 (945) 393 6614</p>
                                        </div>
                                    </a>
                                </div>
                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                    <Play className="w-4 h-4" />
                                    Call now to experience the voice AI agent demo in real time
                                </p>
                            </div>
                        </div>

                        {/* Right Content - Visual Representation */}
                        <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                            }`}>
                            <div className="relative aspect-square max-w-[500px] mx-auto">
                                {/* AI Visualizer Effect */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-full h-full bg-teal/10 rounded-full animate-ping-slow absolute" />
                                    <div className="w-3/4 h-3/4 bg-teal/15 rounded-full animate-ping-slow absolute" style={{ animationDelay: '1s' }} />
                                    <div className="w-1/2 h-1/2 bg-teal/20 rounded-full animate-ping-slow absolute" style={{ animationDelay: '2s' }} />
                                </div>

                                {/* Center Avatar/Icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-white dark:bg-gray-800 shadow-2xl flex items-center justify-center border-4 border-teal/20 relative z-10 glassmorphism overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
                                            alt="Rachel AI Representative"
                                            className="w-full h-full object-cover opacity-80"
                                        />
                                        <div className="absolute inset-0 bg-teal/10 mix-blend-overlay" />
                                        <div className="absolute bottom-0 left-0 right-0 py-4 bg-teal/90 backdrop-blur-md text-center">
                                            <p className="text-white font-bold tracking-tight">RACHEL AI</p>
                                            <p className="text-teal-50 text-[10px] uppercase font-semibold">Active Listening...</p>
                                        </div>
                                    </div>

                                    {/* Floating Tags */}
                                    <div className="absolute -top-4 -right-4 lg:-right-8 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-float">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-sm font-semibold text-gray-900 dark:text-white">Qualifying Lead</span>
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-8 -left-4 lg:-left-8 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-float" style={{ animationDelay: '1.5s' }}>
                                        <div className="flex items-center gap-3">
                                            <Bot className="w-5 h-5 text-teal" />
                                            <span className="text-sm font-semibold text-gray-900 dark:text-white">Discovery Mode</span>
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

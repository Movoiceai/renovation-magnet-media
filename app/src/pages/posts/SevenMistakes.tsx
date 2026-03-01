import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SevenMistakes = () => {
    return (
        <main className="pt-24 pb-16 min-h-screen">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back link */}
                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                </div>

                {/* Header content */}
                <header className="mb-10 text-center">
                    <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                        <span className="inline-flex items-center"><Calendar className="mr-1 h-3 w-3" /> Mar 01, 2026</span>
                        <span>•</span>
                        <span className="inline-flex items-center"><User className="mr-1 h-3 w-3" /> Renovation Magnet Media</span>
                        <span>•</span>
                        <span className="inline-flex items-center"><Clock className="mr-1 h-3 w-3" /> 6 min read</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
                        7 Mistakes You’re Making with Kitchen & Bath Leads (and How AI Qualification Fixes Them)
                    </h1>
                </header>

                {/* Hero Image */}
                <figure className="mb-12 rounded-2xl overflow-hidden shadow-xl border border-border">
                    <img
                        src="https://cdn.marblism.com/91HjoSlwqum.webp"
                        alt="Hero: 7 Mistakes You’re Making with Kitchen & Bath Leads (and How AI Qualification Fixes Them)"
                        className="w-full h-auto object-cover max-h-[500px]"
                    />
                </figure>

                {/* Article Body */}
                <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl">
                    <p className="lead text-xl text-muted-foreground font-medium mb-8">
                        You’re on a job site. The miter saw is screaming, your lead carpenter is asking about the crown molding transition, and your pocket starts buzzing. It’s a new lead. You can’t answer it. By the time you wipe the sawdust off your hands and step into the trailer two hours later to return the call, that homeowner has already spoken to three of your competitors.
                    </p>

                    <p>That $85,000 kitchen remodel? It just vanished.</p>

                    <p>In the remodeling world, your "leaky bucket" isn't the plumbing: it's your lead management. You are likely spending thousands on marketing or lead services, only to let the best opportunities slip through the cracks.</p>

                    <p>At <strong>Renovation Magnet Media</strong>, we see the same seven mistakes killing profit margins for high-end remodelers every single day. Here is why your current system is failing and how our "Digital Foreman" AI system plugs the leaks.</p>

                    <hr className="my-8" />

                    <h3>01. The "5-Minute Death Clock" (Slow Response Time)</h3>

                    <p>The industry standard is brutal: if you don’t respond to a lead within five minutes, your chances of qualifying them drop by <strong>80%</strong>. Most kitchen and bath contractors take 4 to 24 hours to call a lead back. In that window, the lead has already Googled three other guys and booked an estimate with the one who picked up the phone.</p>

                    <figure className="my-10 border border-border rounded-xl overflow-hidden">
                        <img src="https://cdn.marblism.com/qkndnNGahRA.jpeg" alt="The 5-Minute Death Clock" className="w-full h-auto" />
                        <figcaption className="text-sm text-center text-muted-foreground p-3 bg-muted/30">The 5-Minute Death Clock</figcaption>
                    </figure>

                    <p><strong>The AI Fix:</strong> Our <strong>Instant Response Engine</strong> sends a personalized text back to every inbound lead within 60 seconds. Whether you’re on a ladder or asleep, the AI starts a conversation immediately, ensuring you are the first professional they engage with.</p>

                    <hr className="my-8" />

                    <h3>02. The "Ladder Problem" (Missed Calls)</h3>

                    <p>You can't be a master craftsman and a full-time receptionist at the same time. Every missed call is a missed opportunity. Many contractors think "I'll just call them back later," but in 2026, homeowners don't leave voicemails: they move to the next listing on Google.</p>

                    <figure className="my-10 border border-border rounded-xl overflow-hidden">
                        <img src="https://cdn.marblism.com/d60jb-FUw-i.jpeg" alt="The ‘Ladder’ Problem" className="w-full h-auto" />
                        <figcaption className="text-sm text-center text-muted-foreground p-3 bg-muted/30">The ‘Ladder’ Problem</figcaption>
                    </figure>

                    <p><strong>The AI Fix:</strong> Our <strong>AI Answering Service for Contractors</strong> acts as your 24/7 front desk. If you can't pick up, the AI handles the call, answers basic questions about your service area, and begins the qualification process via SMS. You never "miss" a lead again; you just see them pop up in your CRM, already vetted.</p>

                    <hr className="my-8" />

                    <h3>03. Zero Qualification (Wasting Time on Tire-Kickers)</h3>

                    <p>Not every lead is a good lead. We’ve all spent two hours driving across town to look at a "full kitchen gut" only to find out the homeowner has a $5,000 budget and wants it done by next Tuesday. That’s a massive drain on your most valuable resource: your time.</p>

                    <figure className="my-10 border border-border rounded-xl overflow-hidden">
                        <img src="https://cdn.marblism.com/RGINKVLyusM.webp" alt="AI logic tree qualifying remodeling leads by budget and project scope over a professional blueprint." className="w-full h-auto" />
                        <figcaption className="text-sm text-center text-muted-foreground p-3 bg-muted/30">Visual: A "Digital Foreman" blueprint showing an AI logic tree filtering leads by budget and project type.</figcaption>
                    </figure>

                    <p><strong>The AI Fix:</strong> Our system doesn’t just capture names; it qualifies them. The AI asks about <strong>budget, timeline, and project scope</strong> before the lead ever hits your calendar. If they don't meet your minimum project size (e.g., $30k+ for a bath, $60k+ for a kitchen), the AI politely nurtures them with resources instead of booking an estimate on your busy schedule.</p>

                    <hr className="my-8" />

                    <h3>04. Buying Low-Quality Leads from Aggregators</h3>

                    <p>Relying on Angi or HomeAdvisor is like playing a rigged game. You pay for a lead that is simultaneously sold to four other hungry contractors. It becomes a "race to the bottom" on price. You aren't building a brand; you're buying a commodity.</p>

                    <figure className="my-10 border border-border rounded-xl overflow-hidden">
                        <img src="https://cdn.marblism.com/obykiGdxd69.jpeg" alt="Comparison chart: Agency vs. Renovation Magnet" className="w-full h-auto" />
                        <figcaption className="text-sm text-center text-muted-foreground p-3 bg-muted/30">Comparison chart: Agency vs. Renovation Magnet</figcaption>
                    </figure>

                    <p><strong>The AI Fix:</strong> We help you generate <strong>organic, high-intent leads</strong> through your own branded assets. Instead of competing for the same "cheap" leads, we position you as the authority. Our system focuses on attracting clients who value quality over a "quick fix," allowing you to maintain your margins.</p>

                    <hr className="my-8" />

                    <h3>05. The "Black Hole" of Follow-Up</h3>

                    <p>Most remodeling leads die because of a lack of persistence. Research shows it takes an average of <strong>5 to 7 touchpoints</strong> to actually book an appointment. Most contractors call once, maybe twice, and then give up.</p>

                    <p><strong>The AI Fix:</strong> Our <strong>SMS follow-up automation</strong> is relentless but professional. If a lead goes cold after the initial inquiry, the AI follows up at strategic intervals: Day 1, Day 3, Day 7: keeping your brand top-of-mind. It feels human, but it’s 100% automated lead management.</p>

                    <hr className="my-8" />

                    <h3>06. No Centralized CRM (The "Yellow Pad" Method)</h3>

                    <p>If your lead list is scattered across sticky notes, your Gmail inbox, and a yellow legal pad, you are losing money. Chaos is the enemy of scaling. When you don't have a <strong>CRM for remodeling contractors</strong>, you can't track which marketing channels are actually producing $100k projects.</p>

                    <figure className="my-10 border border-border rounded-xl overflow-hidden">
                        <img src="https://cdn.marblism.com/KtPKJavCZU4.jpeg" alt="Renovation Magnet Media CRM Promotion" className="w-full h-auto" />
                        <figcaption className="text-sm text-center text-muted-foreground p-3 bg-muted/30">Renovation Magnet Media CRM</figcaption>
                    </figure>

                    <p><strong>The AI Fix:</strong> We install a high-performance CRM tailored for the home remodeling industry. Every text, every call, and every qualified budget is logged in one place. You can see your entire sales pipeline at a glance: from "New Lead" to "Estimate Scheduled" to "Contract Signed."</p>

                    <hr className="my-8" />

                    <h3>07. The "Closed for the Weekend" Mentality</h3>

                    <p>Homeowners do their research on nights and weekends. If they find your website at 9:00 PM on a Saturday and find a static "Contact Us" form, they might fill it out... or they might keep looking for someone who offers an immediate chat or booking option.</p>

                    <p><strong>The AI Fix:</strong> Your AI doesn't sleep. It doesn't take vacations. It qualifies leads and books estimates 24/7/365. While you’re out with your family, your <strong>AI scheduling assistant</strong> is filling your Monday morning with high-value consultations.</p>

                    <hr className="my-8" />

                    <h3>The Result: High-Budget Projects, Zero Negotiation</h3>

                    <p>When you fix these seven mistakes, the nature of your business changes. You stop chasing "leads" and start managing "projects."</p>

                    <p>By using AI to handle the grunt work: the answering, the texting, the qualifying: you position yourself as a premium firm. Clients who see a professional, instant, and automated system are far more likely to trust you with a $120,000 marble kitchen renovation.</p>

                    <figure className="my-10 border border-border rounded-xl overflow-hidden">
                        <img src="https://cdn.marblism.com/kddeG9PTsW7.jpeg" alt="High-end kitchen remodel" className="w-full h-auto" />
                        <figcaption className="text-sm text-center text-muted-foreground p-3 bg-muted/30">High-end kitchen remodel</figcaption>
                    </figure>

                    <h3>How to Install Your "Digital Foreman"</h3>

                    <p>Scaling a remodeling business shouldn't mean spending more time on your phone. It should mean installing systems that do the heavy lifting for you.</p>

                    <p>At <strong>Renovation Magnet Media</strong>, we provide the end-to-end system that handles:</p>
                    <ul>
                        <li><strong>24/7 AI Receptionist & Text Back</strong></li>
                        <li><strong>Automated Lead Qualification (Budget/Timeline)</strong></li>
                        <li><strong>Direct CRM Integration</strong></li>
                        <li><strong>Automated Estimate Scheduling</strong></li>
                    </ul>

                    <h4><strong>Transparent Pricing & No-Risk Guarantee</strong></h4>
                    <p>We believe in results, not "brand awareness" fluff.</p>
                    <ul>
                        <li><strong>Starting at $697/month.</strong></li>
                        <li><strong>90-Day Money-Back Guarantee:</strong> If we don't help you book more qualified estimates in your first 90 days, we give you your money back. Period.</li>
                    </ul>

                    <p>Stop letting your hard-earned leads go to waste. It’s time to move from the "Chaos" phase to the "Automated Growth" phase.</p>

                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mt-12 text-center">
                        <h3 className="text-2xl font-bold mb-4 mt-0">Ready to see the system in action?</h3>
                        <p className="mb-6">
                            Let’s build something better than just a kitchen. Let’s build a business that runs itself.
                        </p>
                        <a
                            href="https://www.renovationmagnetmedia.com"
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary !text-white shadow hover:bg-primary/90 h-11 px-8 py-2 no-underline"
                        >
                            Book Your "Digital Foreman" Strategy Call Here
                        </a>
                    </div>

                </div>
            </article>
        </main>
    );
};

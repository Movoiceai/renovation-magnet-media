import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LeadFollowUpSecrets = () => {
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
                        <span className="inline-flex items-center"><Calendar className="mr-1 h-3 w-3" /> Mar 04, 2026</span>
                        <span>•</span>
                        <span className="inline-flex items-center"><User className="mr-1 h-3 w-3" /> Renovation Magnet Media</span>
                        <span>•</span>
                        <span className="inline-flex items-center"><Clock className="mr-1 h-3 w-3" /> 5 min read</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
                        Lead Follow-Up Automation Secrets Revealed: How to Book $60k+ in Jobs While You’re on the Job Site
                    </h1>
                </header>

                {/* Hero Image */}
                <figure className="mb-12 rounded-2xl overflow-hidden shadow-xl border border-border">
                    <img
                        src="https://cdn.marblism.com/BSvt-hXdWPT.webp"
                        alt="Hero: Lead Follow-Up Automation Secrets Revealed"
                        className="w-full h-auto object-cover max-h-[500px]"
                    />
                </figure>

                {/* Article Body */}
                <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl">
                    <p className="lead text-xl text-muted-foreground font-medium mb-8">
                        Meet Dave. Dave is one of the best kitchen and bath guys in the county. His tile work is surgical. His cabinets are dead-level every single time. He’s the kind of contractor who takes pride in every miter joint and every bead of caulk.
                    </p>

                    <p>
                        But Dave has a problem. Right now, he’s in the middle of a $40,000 kitchen remodel. He’s got his head under a sink, he’s covered in sawdust, and his phone is buzzing in his pocket. It’s a new lead, someone looking for a full master suite renovation. That’s a $60,000 project.
                    </p>

                    <p>
                        Dave can’t answer. He’s busy doing the work that pays the bills. By the time he crawls out from under that sink, cleans his hands, and checks his voicemail at 6:30 PM, that homeowner has already called three other guys. Two didn't answer either, but the third guy had a system that texted them back instantly.
                    </p>

                    <p>
                        Dave just lost $60,000 because he was too busy working to pick up the phone.
                    </p>

                    <p>
                        If this sounds like your daily life, you aren't alone. Most remodelers are tradesmen first and "salespeople" second. But in 2026, the homeowner doesn't care how good your crown molding is if you don't answer the damn phone. They want speed.
                    </p>

                    <p>
                        At Renovation Magnet Media, we built a system to stop this bleeding. It’s called the Instant Response Engine, and it’s basically your "Digital Foreman" that handles the office while you handle the job site.
                    </p>

                    <hr className="my-8" />

                    <h2>The Financial Leak You’re Ignoring</h2>

                    <p>
                        Let’s be real about the math. If you miss just two qualified leads a month because you were busy on a job site, you are flushing six figures down the toilet every year.
                    </p>

                    <p>
                        Most contractors we talk to tell us they "get enough word of mouth." That’s great until it isn’t. Word of mouth is slow. It’s inconsistent. And even a referral will call someone else if you take eight hours to call them back.
                    </p>

                    <figure className="my-10 border border-border rounded-xl overflow-hidden">
                        <img src="https://cdn.marblism.com/d60jb-FUw-i.jpeg" alt="The ‘Ladder’ Problem" className="w-full h-auto" />
                        <figcaption className="text-sm text-center text-muted-foreground p-3 bg-muted/30">The ‘Ladder’ Problem: When you're working, you're losing leads.</figcaption>
                    </figure>

                    <p>
                        Our system starts at <strong>$697 a month</strong>. Think about that. For less than the cost of a single high-end vanity, you get a system that never sleeps, never takes a lunch break, and never misses a call. Most of our clients add 2 to 3 extra projects a year just by being the first person to respond. In the remodeling world, that’s an extra $60,000 to $260,000 in top-line revenue.
                    </p>

                    <p>
                        And look, we know you’ve been burned by marketing "gurus" before. That’s why we have a <strong>90-day money-back guarantee</strong>. If the system doesn't perform, you don't pay. We’re not here to sell you "brand awareness." We’re here to book estimates.
                    </p>

                    <hr className="my-8" />

                    <h2>Secret #1: The 24/7 AI Answering & Qualification</h2>

                    <p>
                        The biggest mistake remodelers make is thinking they need a human receptionist. Humans are expensive, they need benefits, and they go home at 5:00 PM. Most homeowners do their browsing for contractors at 8:00 PM after the kids are in bed.
                    </p>

                    <p>
                        Our AI doesn't just "take a message." It qualifies.
                    </p>

                    <p>
                        When a lead calls or texts, the AI engages immediately. It asks the questions you’d ask if you weren't busy:
                    </p>
                    <ol>
                        <li>What’s the scope of the project?</li>
                        <li>What’s your realistic budget range?</li>
                        <li>What’s your target start date?</li>
                        <li>Do you already have architectural drawings?</li>
                    </ol>

                    <figure className="my-10 border border-border rounded-xl overflow-hidden">
                        <img src="https://cdn.marblism.com/qkndnNGahRA.jpeg" alt="The 5-Minute Death Clock" className="w-full h-auto" />
                        <figcaption className="text-sm text-center text-muted-foreground p-3 bg-muted/30">The 5-Minute Death Clock: You have 60 seconds to win the lead.</figcaption>
                    </figure>

                    <p>
                        If they say their budget is $2,000 for a full kitchen, the AI knows they aren't for you. It filters out the tire-kickers so your calendar only fills up with people who can actually afford your work.
                    </p>

                    <hr className="my-8" />

                    <h2>Secret #2: The 14-Day Relentless Follow-Up</h2>

                    <p>
                        You’ve heard the saying "the fortune is in the follow-up." It’s true, but it’s also a pain in the neck. You call a lead once, they don't answer, and you forget about them because you have a sub-contractor screaming about a backordered part.
                    </p>

                    <p>
                        Our "Digital Foreman" doesn't forget.
                    </p>

                    <p>
                        When a lead comes in, we launch a 14-day automated sequence that includes SMS, email, and even ringless voicemails. It looks and feels 100% human.
                    </p>
                    <ul>
                        <li><strong>Day 1:</strong> Instant text back and intro email.</li>
                        <li><strong>Day 2:</strong> A quick check-in to see if they’ve had a chance to look at your portfolio.</li>
                        <li><strong>Day 4:</strong> A value-add text (e.g., "Hey, just finished a kitchen similar to yours, wanted to show you the layout...").</li>
                        <li><strong>Day 7:</strong> A follow-up to schedule the site visit.</li>
                    </ul>

                    <p>
                        This sequence keeps you top-of-mind without you ever having to touch your phone. By the time you actually talk to the homeowner, they already feel like they know you. They feel like you’re the most professional contractor they’ve ever dealt with because you actually followed up.
                    </p>

                    <hr className="my-8" />

                    <h2>Stop Being a Slave to the Ringing Phone</h2>

                    <p>
                        You didn't start your remodeling business to spend all day chasing leads and arguing with people who have $500 budgets. You started it to build beautiful spaces and make a high-profit margin.
                    </p>

                    <figure className="my-10 border border-border rounded-xl overflow-hidden">
                        <img src="https://cdn.marblism.com/kddeG9PTsW7.jpeg" alt="High-end kitchen remodel" className="w-full h-auto" />
                        <figcaption className="text-sm text-center text-muted-foreground p-3 bg-muted/30">High-end kitchen remodel: Let the tech handle the intake while you build the vision.</figcaption>
                    </figure>

                    <p>
                        Our system is designed to give you your life back. When you’re using the <a href="https://www.renovationmagnetmedia.com">Renovation Magnet Media</a> platform, you can go to a job site, put your phone in the truck, and focus on the craftsmanship. You can take your family out to dinner without checking your email every five minutes.
                    </p>

                    <p>
                        While you’re living your life, the AI is:
                    </p>
                    <ul>
                        <li>Texting back new leads instantly.</li>
                        <li>Asking for project photos.</li>
                        <li>Checking budgets.</li>
                        <li>Booking the estimate directly onto your Google Calendar.</li>
                    </ul>

                    <hr className="my-8" />

                    <h2>The Math Doesn't Lie</h2>

                    <p>
                        A typical agency will charge you $2,000 a month just to run ads. They send you a spreadsheet of "leads" that are basically just names and numbers. You have to call them. You have to qualify them. You have to chase them.
                    </p>

                    <p>
                        We do the opposite.
                    </p>

                    <figure className="my-10 border border-border rounded-xl overflow-hidden">
                        <img src="https://cdn.marblism.com/28CCoXFtI_L.jpeg" alt="Comparison chart: Agency vs. Renovation Magnet" className="w-full h-auto" />
                        <figcaption className="text-sm text-center text-muted-foreground p-3 bg-muted/30">Comparison: Traditional agency vs. Renovation Magnet AI System.</figcaption>
                    </figure>

                    <p>
                        For <strong>$697/month</strong>, we give you the tech that does the work for you. We aren't just sending you "clicks." We are sending you booked appointments.
                    </p>

                    <p>
                        If our system helps you land just one extra $30,000 bathroom project this year, you’ve paid for the system four times over. But our goal isn't "one extra project." Our goal is to transform your business from a "one-man-show" hustle into an automated machine that adds $60k to $260k in yearly revenue.
                    </p>

                    <hr className="my-8" />

                    <h2>The 90-Day "No Bull" Guarantee</h2>

                    <p>
                        We know the remodeling industry. We know you’ve heard it all before. That’s why we make this a no-brainer.
                    </p>

                    <p>
                        If you install our system and it doesn't pay for itself within 90 days, we give you your money back. Period. No fine print, no "administrative fees," no excuses. We only want to work with contractors who are actually seeing their calendars fill up.
                    </p>

                    <p>
                        You have two choices right now.
                        <strong>Choice A:</strong> Keep doing what you’re doing. Keep missing calls while you’re on the ladder. Keep letting the "fastest responder" in your town steal your $50k kitchen leads.
                        <strong>Choice B:</strong> Put a "Digital Foreman" to work. Automate your office for $697/month and start booking jobs while you’re actually working on-site.
                    </p>

                    <p>
                        Stop losing money because you’re busy. You’ve earned the right to have a professional system that reflects the quality of your work.
                    </p>

                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mt-12 text-center">
                        <h3 className="text-2xl font-bold mb-4 mt-0">Ready to see how the "Digital Foreman" can fill your calendar?</h3>
                        <p className="mb-6">
                            Let’s get you off the phone and back to building.
                        </p>
                        <a
                            href="https://www.renovationmagnetmedia.com"
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary !text-white shadow hover:bg-primary/90 h-11 px-8 py-2 no-underline"
                        >
                            See the system in action at Renovation Magnet Media
                        </a>
                    </div>

                </div>
            </article>
        </main>
    );
};

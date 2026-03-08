import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GhostingResurrection = () => {
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
                        <span className="inline-flex items-center"><Calendar className="mr-1 h-3 w-3" /> Mar 08, 2026</span>
                        <span>•</span>
                        <span className="inline-flex items-center"><User className="mr-1 h-3 w-3" /> Renovation Magnet Media</span>
                        <span>•</span>
                        <span className="inline-flex items-center"><Clock className="mr-1 h-3 w-3" /> 7 min read</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
                        The "Ghosting" Resurrection: Why Your Leads Aren't Dead, They Just Need a Heartbeat
                    </h1>
                </header>

                {/* Hero Image */}
                <figure className="mb-12 rounded-2xl overflow-hidden shadow-xl border border-border">
                    <img
                        src="https://cdn.marblism.com/pEsaoeyotKP.webp"
                        alt="Hero: The Ghosting Resurrection"
                        className="w-full h-auto object-cover max-h-[500px]"
                    />
                </figure>

                {/* Article Body */}
                <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl">
                    <p className="lead text-xl text-muted-foreground font-medium mb-8">
                        Dave sat in his truck. It was 6:00 PM. Dust from the day's drywall sanding covered the dashboard. He was staring at his CRM, or what he called his "graveyard."
                    </p>

                    <p>
                        Sixteen names. All "leads" from the last two weeks. He called them once. Maybe twice. They didn't pick up. He sent one generic email. No reply.
                    </p>

                    <p>
                        "Trash," Dave muttered. "These leads are garbage. People just want to waste my time."
                    </p>

                    <p><strong>Dave is wrong.</strong></p>

                    <p>
                        Those leads aren't trash. They aren't even dead. They're just waiting for a heartbeat.
                    </p>

                    <p>
                        In the remodeling world, we call this "ghosting." You think they've moved on. You think they hired the guy down the street. The truth? They just got busy. Their kid got sick. Their boss called a meeting. Life happened, and because you didn't have a system to stay in their face, you became invisible.
                    </p>

                    <p className="bg-muted/50 p-6 rounded-xl border border-border italic mb-8">
                        Invisible equals non-existent in this business.
                    </p>

                    <figure className="my-10 border border-border rounded-xl overflow-hidden">
                        <img src="https://cdn.marblism.com/rP-Gus8W-PC.jpeg" alt="Invisible = Non-existent" className="w-full h-auto" />
                        <figcaption className="text-sm text-center text-muted-foreground p-3 bg-muted/30">Invisible = Non-existent: If you're not following up, you don't exist to your leads.</figcaption>
                    </figure>

                    <h3>The 5-Minute Death Clock</h3>

                    <p>
                        If you don't talk to a lead within five minutes, your chances of closing that job drop by 80%.
                    </p>

                    <p>That's not a guess. That's math.</p>

                    <p>
                        Most contractors are on a ladder when the phone rings. You can't answer. You figure you'll call them back when you get home. By then, it's 7:30 PM. You're tired. You want a beer and a shower. You wait until tomorrow morning.
                    </p>

                    <p>
                        By tomorrow morning, that homeowner has already talked to two other guys. They've already seen a gallery of someone else's kitchen remodels. You're already late to the party.
                    </p>

                    <figure className="my-10 border border-border rounded-xl overflow-hidden">
                        <img src="https://cdn.marblism.com/qkndnNGahRA.jpeg" alt="The 5-Minute Death Clock" className="w-full h-auto" />
                        <figcaption className="text-sm text-center text-muted-foreground p-3 bg-muted/30">The 5-Minute Death Clock: Every minute you wait, your close rate drops dramatically.</figcaption>
                    </figure>

                    <p>
                        We call this the "Ladder Problem." You can't be a craftsman and a full-time receptionist at the same time. Trying to do both is how you leave $100k on the table every single year.
                    </p>

                    <hr className="my-8" />

                    <h3>The $697 Investment vs. The $260,000 Loss</h3>

                    <p>Let's talk numbers. No fluff.</p>

                    <p>
                        The average kitchen or bath remodel is worth $20k to $80k. If our system helps you land just two extra projects a month, projects you would have lost because you were too busy to follow up, that's an extra $40k to $160k in monthly revenue.
                    </p>

                    <p>Over a year? That's $480k to $1.9M in top-line growth.</p>

                    <p>Our "Digital Foreman" system starts at <strong>$697 a month</strong>.</p>

                    <p>
                        Compare that to hiring an office manager. You'd pay them $4,000 a month plus benefits. They'll take lunch breaks. They'll get sick. They'll sleep at night.
                    </p>

                    <p>
                        Our AI doesn't sleep. It doesn't take lunch. It responds in 60 seconds. Every single time.
                    </p>

                    <p>
                        If you don't see results, we don't want your money. We offer a <strong>90-day money-back guarantee</strong>. If the system doesn't pay for itself and then some within three months, you get every cent back. No hoops. No excuses.
                    </p>

                    <figure className="my-10 border border-border rounded-xl overflow-hidden">
                        <img src="https://cdn.marblism.com/INKYplP1WQw.jpeg" alt="Automate or Lose" className="w-full h-auto" />
                        <figcaption className="text-sm text-center text-muted-foreground p-3 bg-muted/30">Automate or Lose: The cost of inaction far exceeds the investment.</figcaption>
                    </figure>

                    <hr className="my-8" />

                    <h3>The 14-Day "Heartbeat" Sequence</h3>

                    <p>So, how do we bring these "ghosts" back to life? We give your business a digital heartbeat.</p>

                    <p>Most contractors give up after two attempts. Our system follows a strict 14-day automated sequence that uses SMS, email, and ringless voicemail. It looks like this:</p>

                    <p>
                        <strong>Day 0: The Instant Strike</strong><br />
                        Within 60 seconds of them filling out a form, they get a text. "Hey [Name], saw you're looking at a kitchen remodel. Do you have 2 minutes for a quick chat now or should I call you at 4 PM?"
                    </p>

                    <p>
                        <strong>Day 1: The Value Drop</strong><br />
                        They didn't reply? No problem. The system sends an email with a link to your best portfolio work. "Thought you'd like to see the marble waterfall island we just finished in [Town Name]."
                    </p>

                    <p>
                        <strong>Day 3: The "Quick Question" Text</strong><br />
                        "Hey, just checking in, are you still looking to get started before summer, or is this a fall project?"
                    </p>

                    <p>
                        <strong>Day 7: The Direct Approach</strong><br />
                        A short email. No "pivotal" nonsense. Just: "I haven't heard back, so I assume you've either moved on or you're just swamped. Should I keep your file open or take you off the list?"
                    </p>

                    <p>
                        <strong>Day 14: The Resurrection</strong><br />
                        The "Permission to Close" message. This is where 20% of ghosted leads suddenly wake up and apologize for being busy.
                    </p>

                    <p>
                        This sequence runs in the background while you're pouring concrete or hanging cabinets. You don't touch your phone until the lead says, "Yes, I'm ready for an estimate."
                    </p>

                    <hr className="my-8" />

                    <h3>Why Manual Follow-Up is Killing Your Profit</h3>

                    <p>You might think you can do this yourself. You can't.</p>

                    <p>
                        You'll forget. You'll get a call from a sub-contractor who messed up an order. You'll get stuck in traffic. One missed day of follow-up is enough for a lead to go cold.
                    </p>

                    <p>
                        When you use Renovation Magnet Media, you aren't just buying software. You're installing an "Instant Response Engine."
                    </p>

                    <figure className="my-10 border border-border rounded-xl overflow-hidden">
                        <img src="https://cdn.marblism.com/d60jb-FUw-i.jpeg" alt="The Ladder Problem" className="w-full h-auto" />
                        <figcaption className="text-sm text-center text-muted-foreground p-3 bg-muted/30">The Ladder Problem: You can't be on a ladder and on the phone at the same time.</figcaption>
                    </figure>

                    <p>
                        The difference between a "trash lead" and a $60,000 contract is often just three extra text messages sent at the right time.
                    </p>

                    <p>
                        If you are manually texting people back, you are the bottleneck in your own company. You are literally capping your own income.
                    </p>

                    <hr className="my-8" />

                    <h3>Stop Paying for Clicks, Start Filling the Calendar</h3>

                    <p>
                        We see it all the time. Contractors pay "marketing gurus" thousands for Facebook ads. The leads come in. The contractor is too busy to call them fast enough. The leads ghost. The contractor cancels the ads and says "Facebook ads don't work."
                    </p>

                    <p><strong>The ads worked fine. The follow-up failed.</strong></p>

                    <p>
                        Renovation Magnet Media fixes the middle of the funnel. We take the "maybe" and turn it into a "Monday at 10 AM estimate."
                    </p>

                    <figure className="my-10 border border-border rounded-xl overflow-hidden">
                        <img src="https://cdn.marblism.com/obykiGdxd69.jpeg" alt="Comparison Chart" className="w-full h-auto" />
                        <figcaption className="text-sm text-center text-muted-foreground p-3 bg-muted/30">Comparison: Traditional agency vs. Renovation Magnet AI System.</figcaption>
                    </figure>

                    <p>
                        Our system qualifies them before they ever touch your calendar. We ask about their budget. We ask about their timeline. If they're a tire-kicker looking for a $5,000 kitchen "refresh," they don't get through.
                    </p>

                    <p>
                        You only spend time on the high-end marble islands and custom walnut cabinetry projects.
                    </p>

                    <hr className="my-8" />

                    <h3>The "Digital Foreman" Advantage</h3>

                    <p>
                        We built this for remodelers. We know what a job site looks like. We know that blue-ink blueprints and navy-blue work shirts are the reality, not shiny corporate offices.
                    </p>

                    <p>Our interface is clean. It's professional. It feels like an extension of your crew.</p>

                    <p>For <strong>$697/month</strong>, you get:</p>
                    <ol>
                        <li>24/7 AI Lead Response (Under 60 seconds)</li>
                        <li>Automated 14-Day Nurture Sequences</li>
                        <li>Lead Qualification (Budget &amp; Timeline)</li>
                        <li>Calendar Integration (Estimates booked while you sleep)</li>
                        <li>The 90-Day "Risk-Free" Guarantee</li>
                    </ol>

                    <p>
                        If you land one small bathroom job from this, the system is paid for for the next two years. If you land one major kitchen, it's paid for for a decade.
                    </p>

                    <p>The math is simple. The ROI is undeniable.</p>

                    <hr className="my-8" />

                    <h2>Your Leads Aren't Dead</h2>

                    <p>
                        Stop letting $50,000 projects slip through the cracks because you were too busy to send a text. Stop calling your leads "trash" when you haven't given them a reason to trust you yet.
                    </p>

                    <p><strong>Give your business a heartbeat.</strong></p>

                    <p>
                        Resurrect those "ghosts" and start filling your calendar with people who actually have the budget to hire you.
                    </p>

                    <p>
                        You can keep doing it the old-school way. You can keep complaining about "lead quality" while your competitors use AI to snatch up every serious homeowner in a 50-mile radius. Or, you can spend $697 and fix the leak in your bucket forever.
                    </p>

                    <p>The choice is yours. We're ready when you are.</p>

                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mt-12 text-center">
                        <h3 className="text-2xl font-bold mb-4 mt-0">Ready to resurrect your "dead" leads?</h3>
                        <p className="mb-6">
                            Let's get those estimates booked and your calendar full.
                        </p>
                        <a
                            href="https://www.renovationmagnetmedia.com"
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary !text-white shadow hover:bg-primary/90 h-11 px-8 py-2 no-underline"
                        >
                            Check out our system at Renovation Magnet Media
                        </a>
                    </div>

                </div>
            </article>
        </main>
    );
};

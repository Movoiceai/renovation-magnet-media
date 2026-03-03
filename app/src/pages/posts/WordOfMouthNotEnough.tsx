import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WordOfMouthNotEnough = () => {
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
                        <span className="inline-flex items-center"><Clock className="mr-1 h-3 w-3" /> 7 min read</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
                        Why "Word of Mouth" is No Longer Enough: How the Top 1% of Remodelers Are Stealing Your Leads with AI Follow-up
                    </h1>
                </header>

                {/* Hero Image */}
                <figure className="mb-12 rounded-2xl overflow-hidden shadow-xl border border-border">
                    <img
                        src="https://cdn.marblism.com/4f7YeNpy0mK.webp"
                        alt="Hero: Why Word of Mouth is No Longer Enough"
                        className="w-full h-auto object-cover max-h-[500px]"
                    />
                </figure>

                {/* Article Body */}
                <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl">
                    <p className="lead text-xl text-muted-foreground font-medium mb-8">
                        Mike sat in his truck, the smell of sawdust and stale coffee filling the cab. It was 6:30 PM. He’d just finished a walkthrough for a master bath in a high-end zip code. His phone vibrated, a voicemail from two days ago.
                    </p>

                    <p>It was a referral from a past client. A $140,000 kitchen gut-job.</p>

                    <p>
                        Mike dialed the number immediately, his heart racing. A woman picked up on the second ring.
                    </p>

                    <p>
                        "Oh, hi Mike," she said. Her voice was polite but distant. "Thanks for calling back. We actually already had another company come out this morning. They texted us back five minutes after we looked at their site, booked the estimate right then, and we really liked their vision. We’re moving forward with them."
                    </p>

                    <p>
                        Mike hung up. He felt sick. That was a six-figure job gone because he was on a ladder, installing crown molding, and couldn’t pick up the phone.
                    </p>

                    <p>
                        He’d always relied on word of mouth. It was his badge of honor. But honor doesn’t pay the overhead when the "Top 1%" of guys in town are using technology to snatch your leads before you even finish your lunch.
                    </p>

                    <h2>The Death of the "Good Ol' Boy" Referral System</h2>

                    <p>
                        For decades, being a good builder was enough. If you did great work, the phone rang. But the world changed while we were busy on the job site.
                    </p>

                    <p>
                        Homeowners today don't have patience. They have iPhones.
                    </p>

                    <p>
                        When a neighbor tells them, "You should call Mike," they don't just call Mike. They Google Mike. They look at Mike’s website. And then, they look at three other guys. The contractor who wins isn't always the one with the best portfolio, it’s the one who answers first.
                    </p>

                    <figure className="my-10 border border-border rounded-xl overflow-hidden">
                        <img src="https://cdn.marblism.com/-T-xfbaoPXO.jpeg" alt="THE NEIGHBORHOOD HAS CHANGED" className="w-full h-auto" />
                        <figcaption className="text-sm text-center text-muted-foreground p-3 bg-muted/30">The neighborhood has changed. High-end homeowners expect instant communication.</figcaption>
                    </figure>

                    <p>
                        People don’t wait by the phone for a "call back later this evening." If you don’t respond in five minutes, you’re dead to them. You’re just another name on a list.
                    </p>

                    <p>
                        <strong>The reality? You’re losing $80k to $150k a month in potential revenue simply because you’re a victim of your own success. You’re too busy working to grow.</strong>
                    </p>

                    <h2>Why You Can’t Win with a Cell Phone and a Prayer</h2>

                    <p>
                        Let’s be honest. You’re a remodeler, not a receptionist.
                    </p>

                    <p>
                        You’re managing subs. You’re dealing with late material deliveries. You’re at the permit office. You physically cannot be the "first responder" for every lead that comes in.
                    </p>

                    <p>This is what we call "The Ladder Problem."</p>

                    <figure className="my-10 border border-border rounded-xl overflow-hidden">
                        <img src="https://cdn.marblism.com/d60jb-FUw-i.jpeg" alt="The ‘Ladder’ Problem" className="w-full h-auto" />
                        <figcaption className="text-sm text-center text-muted-foreground p-3 bg-muted/30">The ‘Ladder’ Problem: When you're working, you can't be answering.</figcaption>
                    </figure>

                    <p>Every time your phone rings while you’re mid-cut or mid-meeting, you have two choices:</p>
                    <ol>
                        <li>Stop working, lose your flow, and potentially look unprofessional in front of a current client.</li>
                        <li>Let it go to voicemail and hope they don’t call the guy in the next town over.</li>
                    </ol>

                    <p>
                        Most guys choose option two. And that’s where the "Top 1%" are eating your lunch. They aren't better at tile than you. They aren't better at project management. They just installed a system that answers the door when they can’t.
                    </p>

                    <h2>The 5-Minute Death Clock</h2>

                    <p>
                        Data from MIT shows that if you don't respond to a lead within five minutes, your chances of actually talking to that person drop by 400%.
                    </p>

                    <figure className="my-10 border border-border rounded-xl overflow-hidden">
                        <img src="https://cdn.marblism.com/qkndnNGahRA.jpeg" alt="The 5-Minute Death Clock" className="w-full h-auto" />
                        <figcaption className="text-sm text-center text-muted-foreground p-3 bg-muted/30">The 5-Minute Death Clock: Why speed is the ultimate sales tool.</figcaption>
                    </figure>

                    <p>
                        By the time you get home, shower, and sit down with your laptop at 8:00 PM, that lead has already spoken to two other contractors. They’ve already booked an estimate. You’re not just late; you’re irrelevant.
                    </p>

                    <p>
                        The guys at the top know this. They don't handle their own leads. They use AI to do the heavy lifting.
                    </p>

                    <h2>How the "Digital Foreman" Changes the Game</h2>

                    <p>
                        At <a href="https://www.renovationmagnetmedia.com">Renovation Magnet Media</a>, we don't believe in just "more leads." Most contractors don't need more leads, they need more <em>qualified</em> appointments.
                    </p>

                    <p>
                        We install what we call a "Digital Foreman" into your business. It’s an AI-powered system designed specifically for the remodeling industry. It doesn't get tired, it doesn't take lunch breaks, and it never misses a text.
                    </p>

                    <p><strong>Here is exactly how the Top 1% are stealing your market share:</strong></p>

                    <h3>01. 24/7 Instant AI Answering</h3>
                    <p>
                        When someone fills out a form on your site or messages your Facebook page at 11:00 PM, the AI responds in 30 seconds. It introduces itself, starts a conversation, and makes the homeowner feel "heard" immediately.
                    </p>

                    <h3>02. Automated Lead Qualification</h3>
                    <p>
                        The AI doesn't just say hello. It asks the hard questions. "What’s your budget? What’s your timeline? Have you talked to an architect yet?" It weeds out the tire-kickers and "handyman" jobs so you only spend your time on high-margin projects.
                    </p>

                    <h3>03. The 14-Day Persistent Follow-up</h3>
                    <p>
                        Most contractors follow up once, maybe twice. The "Digital Foreman" follows up for 14 days straight via text and email until they book or tell us to go away. It’s professional, persistent, and it closes deals while you’re sleeping.
                    </p>

                    <figure className="my-10 border border-border rounded-xl overflow-hidden">
                        <img src="https://cdn.marblism.com/c0zV5_U4d-T.webp" alt="AI assistant qualifying home remodeling leads" className="w-full h-auto" />
                        <figcaption className="text-sm text-center text-muted-foreground p-3 bg-muted/30">The Digital Foreman: Filtering out low-budget leads and placing high-value appointments directly onto your schedule.</figcaption>
                    </figure>

                    <h2>The "Top 1%" Advantage by the Numbers</h2>

                    <div className="bg-muted/50 p-6 rounded-xl border border-border mb-8">
                        <p className="font-bold mb-4">The difference between a "word of mouth" business and an AI-automated business is staggering:</p>
                        <ul className="space-y-2">
                            <li><strong>Response Time:</strong> 4-24 hours vs. &lt; 60 seconds.</li>
                            <li><strong>Lead Conversion:</strong> 30% higher on average.</li>
                            <li><strong>Project Value:</strong> AI-qualified leads average $67,000 compared to $43,000 for unvetted referrals.</li>
                            <li><strong>Efficiency:</strong> 78% less time spent on "dead-end" sales calls.</li>
                        </ul>
                    </div>

                    <figure className="my-10 border border-border rounded-xl overflow-hidden">
                        <img src="https://cdn.marblism.com/obykiGdxd69.jpeg" alt="Comparison chart: Agency vs. Renovation Magnet Lead Response" className="w-full h-auto" />
                        <figcaption className="text-sm text-center text-muted-foreground p-3 bg-muted/30">Comparison: Traditional agency results vs. the Renovation Magnet AI system.</figcaption>
                    </figure>

                    <h2>The Offer: Build a Fortress Around Your Business</h2>

                    <p>
                        You can keep doing what you’re doing. You can keep hoping the phone rings and you happen to be off the ladder to answer it. Or, you can act like the owner of a $5M+ company and install a system that handles the grunt work for you.
                    </p>

                    <p><strong>Here’s the deal:</strong></p>

                    <p>At Renovation Magnet Media, we don't do "marketing fluff." We build revenue engines. </p>

                    <ul>
                        <li><strong>The Price:</strong> Starts at <strong>$697/month</strong>. That’s less than the cost of a single small vanity install.</li>
                        <li><strong>The Guarantee:</strong> We are so confident this will change your life that we offer a <strong>90-day money-back guarantee</strong>. If you don’t see the value, if you aren't booking more qualified estimates, you don't pay. Period.</li>
                    </ul>

                    <p>
                        We handle the setup. We handle the AI training. You just show up to the estimates and do what you do best: build beautiful homes.
                    </p>

                    <h2>Stop Losing Deals to Guys Who Are "Just Faster"</h2>

                    <p>
                        Mike eventually called us. He realized that relying on word of mouth was like building a house without a foundation. It might look okay for a while, but eventually, the cracks start to show.
                    </p>

                    <p>
                        Three months after installing our system, Mike isn't checking voicemails at 9:00 PM anymore. He wakes up, looks at his calendar, and sees three pre-qualified kitchen estimates booked for the week. All of them have confirmed budgets over $50k. All of them were "captured" by the AI while he was actually enjoying dinner with his family.
                    </p>

                    <p><strong>Are you ready to stop the leak?</strong></p>

                    <p>Don't let another six-figure project go to the guy down the street just because his phone responded faster than yours. </p>

                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mt-12 text-center">
                        <h3 className="text-2xl font-bold mb-4 mt-0">Ready to see if your business is ready for a Digital Foreman?</h3>
                        <p className="mb-6">
                            We’ll look at your current process, find the leaks, and show you exactly how to plug them.
                        </p>
                        <a
                            href="https://www.renovationmagnetmedia.com"
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary !text-white shadow hover:bg-primary/90 h-11 px-8 py-2 no-underline"
                        >
                            Book your "Strategy Deep Dive" Here
                        </a>
                        <p className="mt-4 text-sm font-semibold text-primary">
                            $697/month. 90-day guarantee. Zero risk. All upside.
                        </p>
                    </div>

                    <p className="mt-12 text-center text-muted-foreground italic">
                        The neighborhood has changed. It's time to change with it.
                    </p>

                </div>
            </article>
        </main>
    );
};

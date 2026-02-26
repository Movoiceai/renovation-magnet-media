import { Hero } from '../sections/Hero';
import { Problem } from '../sections/Problem';
import { Solution } from '../sections/Solution';
import { HowItWorks } from '../sections/HowItWorks';
import { LiveDemo } from '../sections/LiveDemo';
import { ClientPortal } from '../sections/ClientPortal';
import { Comparison } from '../sections/Comparison';
import { Pricing } from '../sections/Pricing';
import { CaseStudies } from '../sections/CaseStudies';
import { Guarantee } from '../sections/Guarantee';
import { Implementation } from '../sections/Implementation';
import { CTA } from '../sections/CTA';

export const LandingPage = () => {
    return (
        <main>
            <Hero />
            <Problem />
            <Solution />
            <HowItWorks />
            <LiveDemo />
            <ClientPortal />
            <Comparison />
            <Pricing />
            <CaseStudies />
            <Guarantee />
            <Implementation />
            <CTA />
        </main>
    );
};

import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { Problem } from './sections/Problem';
import { Solution } from './sections/Solution';
import { HowItWorks } from './sections/HowItWorks';
import { ClientPortal } from './sections/ClientPortal';
import { Comparison } from './sections/Comparison';
import { Pricing } from './sections/Pricing';
import { CaseStudies } from './sections/CaseStudies';
import { Guarantee } from './sections/Guarantee';
import { Implementation } from './sections/Implementation';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { LiveDemo } from './sections/LiveDemo';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navigation />
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
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;


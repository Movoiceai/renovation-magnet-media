import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './sections/Navigation';
import { Footer } from './sections/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { LandingPage } from './pages/LandingPage';
import { SpeedToLeadMatters } from './pages/posts/SpeedToLeadMatters';
import { AiVsHumanReceptionist } from './pages/posts/AiVsHumanReceptionist';
import { FollowUpLeakingCash } from './pages/posts/FollowUpLeakingCash';
import { SevenMistakes } from './pages/posts/SevenMistakes';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
          <Navigation />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/blog/speed-to-lead-matters" element={<SpeedToLeadMatters />} />
            <Route path="/blog/ai-vs-human-receptionist" element={<AiVsHumanReceptionist />} />
            <Route path="/blog/follow-up-leaking-cash" element={<FollowUpLeakingCash />} />
            <Route path="/blog/seven-mistakes" element={<SevenMistakes />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;



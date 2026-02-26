import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './sections/Navigation';
import { Footer } from './sections/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { LandingPage } from './pages/LandingPage';
import { SpeedToLeadMatters } from './pages/posts/SpeedToLeadMatters';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
          <Navigation />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/blog/speed-to-lead-matters" element={<SpeedToLeadMatters />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;



import IntroSection from './components/IntroSection';
import ClientWork from './components/ClientWork';
import Resources from './components/Resources';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="bg-surface text-primary min-h-screen">
      {/* Film Grain Overlay */}
      <div className="grain-overlay" aria-hidden="true"></div>
      {/* Vignette */}
      <div className="vignette" aria-hidden="true"></div>

      {/* Scroll-Driven Intro */}
      <IntroSection />

      {/* Post-Intro Sections */}
      <ClientWork />
      <Resources />
      <ContactCTA />
    </div>
  );
}

export default App;

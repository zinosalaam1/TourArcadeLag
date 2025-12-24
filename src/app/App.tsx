import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero";
import { EventOverview } from "./components/EventOverview";
import { PillarsSection } from "./components/PillarsSection";
import { Audience } from "./components/Audience";
import { StakeholderValue } from "./components/StakeholderValue";
import { Footer } from "./components/Footer";
import { Registration } from "./components/Registration";
import { Sponsorship } from "./components/Sponsorship";
import { AboutTourArcade } from "./components/AboutTourArcade";
import { TourArcadeLaunch } from "./components/TourArcadeLaunch";

function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <EventOverview />
      <PillarsSection />
      <Audience />
      <StakeholderValue />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/about-tour-arcade" element={<AboutTourArcade />} />
        <Route path="/tour-arcade-launch" element={<TourArcadeLaunch />} />
      </Routes>
    </Router>
  );
}
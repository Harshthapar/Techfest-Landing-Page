import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import EventCategories from "./components/EventCategories";
import ScheduleTimeline from "./components/ScheduleTimeline";
import CampusAmbassadorBanner from "./components/CampusAmbassadorBanner";
import RegistrationModal from "./components/RegistrationModal";
import SponsorMarquee from "./components/SponsorMarquee";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-[#07090e]">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* Section separator */}
      <div className="section-divider mx-8 sm:mx-16" />

      {/* Event Categories */}
      <EventCategories />

      {/* Section separator */}
      <div className="section-divider mx-8 sm:mx-16" />

      {/* Schedule Timeline */}
      <ScheduleTimeline />

      {/* Section separator */}
      <div className="section-divider mx-8 sm:mx-16" />

      {/* Campus Ambassador Banner */}
      <CampusAmbassadorBanner />

      {/* Section separator */}
      <div className="section-divider mx-8 sm:mx-16" />

      {/* Registration Portal Section */}
      <RegistrationModal />

      {/* Section separator */}
      <div className="section-divider mx-8 sm:mx-16" />

      {/* Sponsor Marquee */}
      <SponsorMarquee />

      {/* Footer */}
      <Footer />
    </main>
  );
}

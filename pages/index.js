import Hero from "../components/ui/Hero";
import GradientWrapper from "../components/GradientWrapper";
import CenteredCTA from "../components/ui/CenteredCTA";
import Stats from "../components/ui/Stats";
import Features from "../components/ui/Features";
import CTA from "../components/ui/CTA";
import Pricing from "../components/ui/Pricing";
import Footer from "../components/ui/Footer";
import FooterCTA from "../components/ui/FooterCTA";
import AboutUs from "../components/ui/aboutus";
export default function Home() {
  return (
    <>
      <Hero />
      <GradientWrapper className="pb-0 sm:my-16">
        <CenteredCTA />
        <Stats />
      </GradientWrapper>
      <Features />
      <CTA />
      <Pricing />
      <AboutUs />
      <FooterCTA />
      <Footer />
    </>
  );
}

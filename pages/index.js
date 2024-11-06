import Hero from "../components/ui/Hero";
import GradientWrapper from "../components/GradientWrapper";
import CenteredStats from "../components/ui/CenteredCTA";
import Features from "../components/ui/Features";
import Footer from "../components/ui/Footer";
import FooterCTA from "../components/ui/FooterCTA";
import AboutUs from "../components/ui/aboutus";
export default function Home() {
  return (
    <>
      <Hero />
      <GradientWrapper className="pb-0 sm:my-16">
        <CenteredStats/>
      </GradientWrapper>
      <Features />
      <AboutUs />
      <Footer />
    </>
  );
}

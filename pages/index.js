import Hero from "../components/ui/Hero";
import GradientWrapper from "../components/GradientWrapper";
import CenteredStats from "../components/ui/CenteredCTA";
import Features from "../components/ui/Features";
import Footer from "../components/ui/Footer";
import Newsletter from "../components/ui/FooterCTA";
import AboutUs from "../components/ui/aboutus";
import VideoPlayer from "../components/ui/YT_Channel/YTEmbed";
export default function Home() {
  return (
    <>
      <Hero />
      <GradientWrapper className="pb-0 sm:my-16">
        <CenteredStats/>
      </GradientWrapper>
      <VideoPlayer/>
      <br/> 
      <Features />
      <Newsletter />
      <Footer />
    </>
  );
}

import FAQs from "./components/FAQs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import PricingPlans from "./components/PricingPlans";
import ProblemsHoldingYouBack from "./components/ProblemsHoldingYouBack";
import ReadyToTransformYourMarketing from "./components/ReadyToTransformYourMarketing";
import SeeHowVilmaAiWorks from "./components/SeeHowVilmaAiWorks";
import SuccessStories from "./components/SuccessStories";
import TrustedBy from "./components/TrustedBy";
import UseCases from "./components/UseCases";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <TrustedBy/>
      <ProblemsHoldingYouBack/>
      <SeeHowVilmaAiWorks/>
      <HowItWorks/>
      <WhyUs/>
      <Features/>
      <UseCases/>
      <SuccessStories/>
      <PricingPlans/>
      <FAQs/>
      <ReadyToTransformYourMarketing/>
      <Footer/>
    </div>
  );
}

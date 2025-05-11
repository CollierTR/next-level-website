import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import PerformanceFacts from "@/components/PerformanceFacts";
import FeaturedProjects from "@/components/FeaturedProjects";
import FeaturedReveiws from "@/components/FeaturedReveiws";
import CustomerJourney from "@/components/CustomerJourney";
import OurCustomersMarquee from "@/components/OurCustomersMarquee";
import ContactCTA from "@/components/ContactCTA";




export default function Home() {
  return (
    <div className="text-2xl">
      <Hero></Hero>

      {/* <OurCustomersMarquee></OurCustomersMarquee> */}

      <ServicesSection></ServicesSection>
      <FeaturedProjects></FeaturedProjects>
      <FeaturedReveiws></FeaturedReveiws>
      <ContactCTA></ContactCTA>

      <PerformanceFacts></PerformanceFacts>

      <CustomerJourney></CustomerJourney>

    </div>
  );
}

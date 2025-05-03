import Hero from "@/components/Hero";
import FeaturedServices from "@/components/FeaturedServices";
import ServicesSection from "@/components/ServicesSection";
import FeaturedAbout from "@/components/FeaturedAbout";
import FeaturedProjects from "@/components/FeaturedProjects";
import FeaturedReveiws from "@/components/FeaturedReveiws";
import ContactCTA from "@/components/ContactCTA";




export default function Home() {
  return (
    <div className="text-2xl">
      <Hero></Hero>
      <ServicesSection></ServicesSection>
      <FeaturedServices></FeaturedServices>
      <FeaturedProjects></FeaturedProjects>
      <FeaturedReveiws></FeaturedReveiws>
      <FeaturedAbout></FeaturedAbout>
      <ContactCTA></ContactCTA>
    </div>
  );
}

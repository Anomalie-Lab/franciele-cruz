import { ServicesSection } from "@/app/sections/services.section";
import { HomeSection } from "./sections/home.section";
import { SkillsSection } from "./sections/skills.section";
import { ContactSection } from "./sections/contact.section";
import { TrackSection } from "./sections/track.section";
import { LocationSection } from "./sections/location.section";
import { FooterSection } from "./sections/footer.section";
export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeSection />
      <TrackSection />
      <SkillsSection />
      <ServicesSection />
      <ContactSection />
      <LocationSection />
      <FooterSection />
    </div>
  );
}

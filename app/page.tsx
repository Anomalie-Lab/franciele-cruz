import { ServicesSection } from "@/app/sections/services.section";
import { HomeSection } from "./sections/home.section";
import { SkillsSection } from "./sections/skills.section";
import { ContactSection } from "./sections/contact.section";
import { TrackSection } from "./sections/track.section";
export default function Home() {
  return (
    <>
      <HomeSection />
      <TrackSection />
      <SkillsSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}

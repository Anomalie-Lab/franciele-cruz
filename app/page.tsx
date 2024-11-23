import { ServicesSection } from "@/app/sections/services.section";
import { HomeSection } from "./sections/home.section";
import { TrajectorySection } from "./sections/trajectory.section";
import { ContactSection } from "./sections/contact.section";
import { FooterSection } from "./sections/footer.section";
import { TrackSection } from "./sections/track.section";
export default function Home() {
  return (
    <>
      <HomeSection />
      <div className="">
        <ServicesSection />
      </div>
      <TrajectorySection />
      <ContactSection />
      <TrackSection />
      <FooterSection />
    </>
  );
}

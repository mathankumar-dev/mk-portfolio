import { Metadata } from "next";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Experience & Track Record",
  description:
    "Engineering career timeline, production Flutter apps, full-stack systems, and software engineering contributions.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-20">
      <ExperienceTimeline />
      <ContactSection />
    </div>
  );
}

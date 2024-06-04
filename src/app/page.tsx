import About from "@/components/Home/About/page";
import Service from "@/components/Home/Service/page";
import Hero from "@/components/Home/Hero.component";
import Work from "@/components/Home/Work/page";
import CTA from "@/components/Home/Cta/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Work />
      <CTA />
    </main>
  );
}

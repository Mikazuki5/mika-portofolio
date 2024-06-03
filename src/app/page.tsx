import About from "@/components/About/page";
import Service from "@/components/Service/page";
import Work from "@/components/Work/page";
import Hero from "@/components/utils/Hero.component";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Work />
    </main>
  );
}

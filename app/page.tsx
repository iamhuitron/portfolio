import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";

export default function HomePage() {
  return (
    <div data-theme="home">
      <Hero />
      <FeaturedProjects />
    </div>
  );
}

import { Nav } from "./Nav";
import { ScrollProgress } from "./ScrollProgress";
import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Timeline } from "./Timeline";
import { GitHubStats } from "./GitHubStats";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function Portfolio() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <GitHubStats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
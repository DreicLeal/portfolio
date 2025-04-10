import Description from "./components/Description";
import Header from "./components/Header";
import ProjectsSection from "./components/Projects/ProjectsSection";

export default function Home() {
  return (
    <div>
      <Header />
      <Description />
      <ProjectsSection />
    </div>
  );
}

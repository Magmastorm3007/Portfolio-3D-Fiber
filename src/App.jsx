import MonitorScene from "./components/Monitor";
import Grid from "./components/Grid";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Grid />
      <div className="relative font-sans text-[#111] leading-relaxed z-10">
        {/* Hero Section */}
        <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden z-20">
          <MonitorScene />
        </section>

        {/* Glowing Sections */}
        <main className="relative z-10 font-mono text-gray-200">
          <WorkExperience />
          <Projects />
          <Skills/>
          <Contact/>
        </main>
      </div>
    </>
  );
}

export default App;

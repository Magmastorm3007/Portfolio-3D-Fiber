import GlowingCard from "./GlowingCard";

const projectData = [
  {
    title: "Set Memory – NPM Package",
    description:
      "A utility to configure memory limits from available system memory, preventing heap overflow during Node.js deployment.",
    link: "https://www.npmjs.com/package/set-memory",
    linkLabel: "🔗 View on NPM",
  },
  {
    title: "Breast Cancer Detection Paper",
    description:
      "Top 15 best paper award at ICISDIA 2023. Published in Springer's book: Communication, Software and Networks.",
    link: "https://link.springer.com/chapter/10.1007/978-981-19-4990-6_57",
    linkLabel: "📘 Read on Springer",
  },
];

export default function Projects() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-12  text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-10">Projects</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectData.map((project) => (
          <GlowingCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

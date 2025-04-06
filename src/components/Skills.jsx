export default function Skills() {
    const skillList = [
      "C++", "Python", "JavaScript", "React.js", "Node.js",
      "Tailwind CSS", "Material UI", "Express.js", "PySpark", "Airflow",
      "MongoDB", "MySQL", "PostgreSQL", "GitHub", "Git",
      "Digital Ocean", "Docker", "AWS"
    ];
  
    return (
      <section className="py-16 px-4 sm:px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-10">Skills</h2>
        <div className="  p-6 rounded-xl max-w-5xl mx-auto flex flex-wrap justify-center gap-3">
          {skillList.map((skill) => (
            <span
              key={skill}
              className="bg-white text-gray-700 px-4 py-2 rounded-full border border-gray-200 text-sm sm:text-base shadow hover:scale-105 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    );
  }
  
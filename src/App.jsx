import MonitorScene from "./components/Monitor";
import Grid from "./components/Grid";

function App() {
  return (
    <>
      <Grid />
      <div className="relative font-sans text-[#111] leading-relaxed z-10">
        {/* Hero Section */}
        <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden z-20">
          <MonitorScene />
         
        </section>

        {/* Main Content Below */}
        <main className="relative z-10 font-mono text-gray-200">
          {/* Work Experience Section */}
          <section className="text-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-green-500">Work Experience</h2>
            <div className="space-y-6 max-w-3xl mx-auto text-left">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">Data Engineer – LTIMindtree</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-400">Dec 2024 – Present</p>
                <p className="mt-2 text-gray-300 text-sm sm:text-base md:text-lg">Working on migrating complex ETL workflows from Informatica to AWS Cloud using PySpark and AWS Glue, ensuring seamless
data transformation and integration. Leveraged Airflow,AWS Lambda for event-driven orchestration and Step Functions for
workflow management, optimizing scalability and cost-efficiency.
<div className="text-green-400">
Python,SQL,Git,Hadoop,Hive,PySpark,Kafka,Airflow
AWS EC2,S3,CloudWatch,Glue</div></p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">Freelance Frontend Developer</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-400">Jun 2024 – Nov 2024</p>
                <p className="mt-2 text-gray-300 text-sm sm:text-base md:text-lg">
                Developed a prototype dashboard for the client with a team for a school application across the state, with
authentication using HTTP only cookies,JWT and Role Based Access Control to facilitate different views for
district,block and cluster authorities.
Setup the infrastructure on Digital Ocean, used vite bundler in production for frontend builds to preserve resources
and ensuring cost efficient scalability
<div className="text-green-400">
React-Vite,Tailwind,Digital Ocean,MongoDB Atlas,Postman,GitHub
</div>
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">Software Developer Intern – HumanAI Pvt. Ltd.</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-400">Dec 2023 – Jun 2024</p>
                <p className="mt-2 text-gray-300 text-sm sm:text-base md:text-lg">Designed a scalable, responsive React.js dashboard for monitoring multiple installations, reducing RAM usage by
1GB through optimized UI builds and systemd services on droplet VMs.
Developed Web3 applications for POC to interact with smart contracts on Hyperledger Besu, enabling seamless
display of verified blockchain data.
Built a Chef recipe approval application leveraging GPT-4 API for comparative analysis of 100+ dishes, improving
frontend performance with memoization and caching techniques.
<div className="text-green-400">
Tech Stack: React.js, Node.js, Tailwind CSS, Next.js, Hyperledger Besu, Hyperledger Fabric, Material UI, Solidity,
Digital Ocean, Ubuntu, Git, Postman.</div></p>
              </div>
            </div>
          </section>
          {/* Skills Section */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 text-center">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-green-500">Skills</h2>
  <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
    {[
      "C++", "Python", "JavaScript",
      "React.js", "Node.js", "Next.js", "Tailwind CSS", "Material UI",
      "Express.js", "ether.js", "web3.js", "Hyperledger Besu",
      "MongoDB", "MySQL", "PySpark", "Airflow",
      "GitHub", "Git", "Digital Ocean", "Docker", "Firebase", "AWS"
    ].map((skill) => (
      <span
        key={skill}
        className="bg-white text-gray-600 px-4 py-2 rounded-full border border-gray-200 text-sm sm:text-base shadow hover:scale-105 transition"
      >
        {skill}
      </span>
    ))}
  </div>
</section>



          {/* Projects Section */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 text-center">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-green-500">Projects</h2>
  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    
    {/* Project 1 */}
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md text-left text-gray-200 hover:shadow-xl transition">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">Set Memory – NPM Package</h3>
      <p className="text-sm sm:text-base md:text-lg mb-3">
        A custom memory utility published to NPM. Helps developers manage and deploy applications. Sets the NODE OPTIONS for memory limit configuration on Linux/Unix based systems from the available OS memory to prevent heap overflow.
      </p>
      <a
        href="https://www.npmjs.com/package/set-memory"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-green-400 hover:text-green-300 text-sm"
      >
        <i className="fas fa-external-link-alt mr-2"></i> View on NPM
      </a>
    </div>

    {/* Project 2 */}
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md text-left text-gray-200 hover:shadow-xl transition">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">Analysis of Breast Cancer Detection Techniques</h3>
      <p className="text-sm sm:text-base md:text-lg mb-3">
        Part of best paper awards at 7th International Conference on Information System Design and Intelligent Application for top 15 papers. Published in Communication, Software and Networks pp 613–620, Springer.
      </p>
      <a
        href="https://link.springer.com/chapter/10.1007/978-981-19-4990-6_57"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm"
      >
        <i className="fas fa-book-open mr-2"></i> Read on Springer
      </a>
    </div>

  </div>
</section>

          
          {/* Contact Section */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 text-center">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-green-500">Get in Touch</h2>
  <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4">Let's build something great together!</p>
  <p className="text-base sm:text-lg md:text-xl text-white">
    📧 <a href="mailto:shashwatnath30@gmail.com" className="underline hover:text-blue-400">shashwatnath30@gmail.com</a>
  </p>

  {/* Social Icons */}
  <div className="flex justify-center gap-6 mt-6 text-3xl">
    {/* GitHub */}
    <a
      href="https://github.com/Magmastorm3007"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-green-400 transition-transform transform hover:scale-110"
    >
      <i className="fab fa-github"></i>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/shashwat-nath-077128168/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-blue-400 transition-transform transform hover:scale-110"
    >
      <i className="fab fa-linkedin"></i>
    </a>

    {/* Hashnode */}
    <a
      href="https://magmastorm.hashnode.dev/"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform transform hover:scale-110"
    >
      <img
        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png"
        alt="Hashnode"
        className="w-8 h-8 inline-block"
      />
    </a>

    {/* LeetCode */}
    <a
      href="https://leetcode.com/u/user5454Z/"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform transform hover:scale-110"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
        alt="LeetCode"
        className="w-8 h-8 invert inline-block"
      />
    </a>
  </div>
</section>


        </main>
      </div>
    </>
  );
}

export default App;

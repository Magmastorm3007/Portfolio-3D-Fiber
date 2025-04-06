import GlowCard from "./GlowingCard";

const experiences = [
  {
    title: "Data Engineer – LTIMindtree",
    subtitle: "Dec 2024 – Present",
    description:
      "Working on migrating complex ETL workflows from Informatica to AWS Cloud using PySpark and AWS Glue, ensuring seamless data transformation and integration. Leveraged Airflow, AWS Lambda for event-driven orchestration and Step Functions for workflow management, optimizing scalability and cost-efficiency.",
    tech:
      "Python, SQL, Git, Hadoop, Hive, PySpark, Kafka, Airflow, AWS EC2, S3, CloudWatch, Glue"
  },
  {
    title: "Freelance Frontend Developer",
    subtitle: "Jun 2024 – Nov 2024",
    description:
      "Developed a prototype dashboard for the client with a team for a school application across the state, with authentication using HTTP only cookies, JWT and Role Based Access Control to facilitate different views for district, block and cluster authorities. Setup the infrastructure on Digital Ocean, used vite bundler in production for frontend builds to preserve resources and ensure cost-efficient scalability.",
    tech:
      "React-Vite, Tailwind, Digital Ocean, MongoDB Atlas, Postman, GitHub"
  },
  {
    title: "Software Developer Intern – HumanAI Pvt. Ltd.",
    subtitle: "Dec 2023 – Jun 2024",
    description:
      "Designed a scalable, responsive React.js dashboard for monitoring multiple installations, reducing RAM usage by 1GB through optimized UI builds and systemd services on droplet VMs. Developed Web3 applications for POC to interact with smart contracts on Hyperledger Besu, enabling seamless display of verified blockchain data. Built a Chef recipe approval application leveraging GPT-4 API for comparative analysis of 100+ dishes, improving frontend performance with memoization and caching techniques.",
    tech:
      "React.js, Node.js, Tailwind CSS, Next.js, Hyperledger Besu, Hyperledger Fabric, Material UI, Solidity, Digital Ocean, Ubuntu, Git, Postman"
  },
];

const WorkExperienceSection = () => (
  <section className="py-16 px-4 sm:px-6 md:px-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-20">Work Experience</h2>
    <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-14 max-w-5xl mx-auto">
      {experiences.map(({ title, subtitle, description, tech }) => (
        <GlowCard
          key={title}
          title={title}
          subtitle={subtitle}
          description={description}
          tech={tech}
        />
      ))}
    </div>
  </section>
);

export default WorkExperienceSection;

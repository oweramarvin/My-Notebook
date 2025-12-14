import "./ProjectsPage.css";

interface Project {
  title: string;
  short: string;
  img: string;
}

const projects: Project[] = [
  {
    title: "Inventory System",
    short:
      "A C# desktop inventory app. A C# desktop inventory app. A C# desktop inventory app. A C# desktop inventory app.",
    img: "/src/assets/image/sample.png",
  },
  {
    title: "Portfolio Website",
    short: "My Angular portfolio with animations.",
    img: "/src/assets/image/sample.png",
  },
  {
    title: "AI Chatbot",
    short: "A chatbot powered by AI API.",
    img: "/src/assets/image/sample.png",
  },
  {
    title: "Inventory System",
    short: "A C# desktop inventory app.",
    img: "/src/assets/image/sample.png",
  },
  {
    title: "Portfolio Website",
    short: "My Angular portfolio with animations.",
    img: "/src/assets/image/sample.png",
  },
  {
    title: "AI Chatbot",
    short: "A chatbot powered by AI API.",
    img: "/src/assets/image/sample.png",
  },
  {
    title: "Inventory System",
    short: "A C# desktop inventory app.",
    img: "/src/assets/image/sample.png",
  },
  {
    title: "Portfolio Website",
    short: "My Angular portfolio with animations.",
    img: "/src/assets/image/sample.png",
  },
  {
    title: "AI Chatbot",
    short: "A chatbot powered by AI API.",
    img: "/src/assets/image/sample.png",
  },
];

export default function ProjectsPage() {
  return (
    <div key="about" className="page notebook-page">
      <div className="page-content">
        <h2 className="page-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <div className="img-wrap">
                <img src={p.img} alt={p.title} />
              </div>

              <h3>{p.title}</h3>
              <p>{p.short}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

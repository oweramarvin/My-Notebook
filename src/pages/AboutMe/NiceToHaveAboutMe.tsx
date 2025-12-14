import "./NiceToHaveAboutMe.css";

const niceItems = [
  {
    id: 1,
    title: "A supportive working environment",
    description:
      "Somewhere I can grow, learn, and be mentored while contributing to real-world projects.",
  },
  {
    id: 2,
    title: "Opportunities to learn new technologies",
    description:
      "I enjoy exploring new frameworks, AI tools, and modern development patterns.",
  },
  {
    id: 3,
    title: "A team that values creativity",
    description:
      "I love when ideas are heard, explored, and turned into unique solutions.",
  },
];

export default function NiceToHaveAboutMe() {
  return (
    <div className="page notebook-page">
      <div className="page-content">
        <h2 className="page-title">Nice To Have</h2>

        <div className="nice-container">
          {niceItems.map((item) => (
            <div key={item.id} className="nice-card">
              <h3 className="nice-title">✦ {item.title}</h3>
              <p className="nice-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

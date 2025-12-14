import "./NiceToHavePage.css";

const niceToHaveList = [
  {
    title: "CRUD System",
    description:
      "This portfolio should allow adding, deleting, customizing, and updating pages.",
    status: "In Progress",
  },
  {
    title: "Personal Login",
    description: "Admin login so I can edit the portfolio without coding.",
    status: "Planned",
  },
  {
    title: "Template Builder",
    description: "Create new pages using customizable templates.",
    status: "Planned",
  },
  {
    title: "Media Gallery",
    description: "Photos and videos organized neatly into albums.",
    status: "Upcoming",
  },
  {
    title: "Journal",
    description: "Daily thoughts, reflections, and memories.",
    status: "Upcoming",
  },
  {
    title: "Timeline Chart",
    description: "Life milestones visualized from 2000 to present.",
    status: "Upcoming",
  },
  {
    title: "References",
    description: "People who’ve inspired and supported me.",
    status: "Upcoming",
  },
  {
    title: "Anonymous Messages",
    description: "Visitors can send messages without revealing their identity.",
    status: "Upcoming",
  },
  {
    title: "Achievements",
    description: "Certifications, awards, and major career milestones.",
    status: "Upcoming",
  },
  {
    title: "Skill Graph",
    description: "Visual representation of my self-assessed skills.",
    status: "Upcoming",
  },
  {
    title: "API Projects",
    description:
      "External integrations to make the portfolio dynamic and alive.",
    status: "Planned",
  },
];

export default function NiceToHavePage() {
  return (
    <div className="page notebook-page">
      <div className="page-content">
        <h2 className="page-title">Nice To Have</h2>

        <p className="nth-subtext">
          Future features that will transform this portfolio into an
          interactive, dynamic, and evolving space.
        </p>

        <div className="nth-timeline">
          {niceToHaveList.map((item, index) => (
            <div className="nth-card" key={index}>
              <div className="nth-card-header">
                <h3>{item.title}</h3>
                <span
                  className={`status-tag ${item.status
                    .replace(" ", "")
                    .toLowerCase()}`}
                >
                  {item.status}
                </span>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

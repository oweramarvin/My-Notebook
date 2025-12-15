import "./NiceToHavePage.css";

const niceToHaveList = [
  {
    title: "CRUD System",
    description:
      "This portfolio will soon allow adding, updating, deleting, customizing, and updating pages and contents.",
    status: "In Progress",
  },
  {
    title: "User Friendly",
    description:
      "This portfolio has a lot of issue mostly in mobile, it's hard to swipe. Soon I'll fix it",
    status: "In Progress",
  },
  {
    title: "Personal Login",
    description:
      "Admin login so I can customize this portfolio without coding.",
    status: "In Progress",
  },
  {
    title: "Template Builder",
    description: "Create new pages using customizable templates.",
    status: "Planned",
  },
  {
    title: "Media Gallery",
    description:
      "I will add my or user photos and videos organized neatly into albums.",
    status: "Upcoming",
  },
  {
    title: "Journal",
    description: "Daily thoughts, reflections, and memories.",
    status: "Planned",
  },
  {
    title: "Timeline Chart",
    description: "Life milestones visualized from birth to present.",
    status: "Planned",
  },
  {
    title: "References",
    description: "People you can contact for my reference.",
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

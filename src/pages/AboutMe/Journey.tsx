import React from "react";
import "./Journey.css";

const timeline = [
  {
    year: "2025",
    title: "Present — Growing",
    desc: "Continuing projects, learning new stacks, improving portfolio.",
  },
  {
    year: "2023",
    title: "Software Developer — Acutrive",
    desc: "Working on Acumatica customizations and integrations.",
  },
  {
    year: "2023",
    title: "Graduated — BS Computer Science",
    desc: "Completed degree at TUP.",
  },
  {
    year: "2022",
    title: "Freelance Game Dev",
    desc: "Built small games, websites, and scripts for clients.",
  },
  {
    year: "2019",
    title: "College — Computer Science",
    desc: "Started Computer Science degree at TUP.",
  },
  {
    year: "2016",
    title: "Senior High — ICT",
    desc: "Focused on ICT subjects and practical tech skills.",
  },
  {
    year: "2007",
    title: "Primary School / Grade 1",
    desc: "Early school years and clumsy first projects.",
  },
  { year: "2000", title: "Born", desc: "Quezon City — where it all started." },
];

export default function Journey() {
  return (
    <div className="page notebook-page">
      <div className="page-content">
        <h2 className="page-title">Journey</h2>

        <div className="timeline">
          {timeline.map((item, idx) => (
            <div
              className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}
              key={idx}
            >
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <div className="timeline-title">→ {item.title}</div>
                <div className="timeline-desc">{item.desc}</div>
              </div>
              <div className="timeline-marker" />
            </div>
          ))}
          <div className="timeline-line" />
        </div>
      </div>
    </div>
  );
}

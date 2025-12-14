import React, { useEffect, useState } from "react";
import "./Skills.css";

const skillGroups = [
  {
    category: "Programming & Development",
    skills: [
      { name: "C#", level: 95 },
      { name: "SQL", level: 90 },
      { name: "JavaScript / HTML / CSS", level: 80 },
      { name: ".NET Framework / ASPX / React", level: 80 },
      { name: "VB.NET", level: 80 },
      { name: "Unity / Vuforia / AR", level: 95 },
      { name: "Acumatica ERP Customization", level: 95 },
      { name: "REST API / JSON", level: 80 },
    ],
  },
  {
    category: "Tools & Workflow",
    skills: [
      { name: "Visual Studio / GitHub / Postman", level: 90 },
      { name: "IIS & Debugging / DLL Management", level: 95 },
      { name: "SQL Server / MySQL", level: 90 },
      { name: "Version Control: Git / GitHub", level: 80 },
      { name: "Project Management: Jira, Planner, Asana", level: 95 },
      { name: "Collaboration: MS Teams, Zoom", level: 95 },
    ],
  },
  {
    category: "Soft Skills & Attributes",
    skills: [
      { name: "Problem Solving", level: 95 },
      { name: "Teamwork & Communication", level: 95 },
      { name: "Adaptability & Learning", level: 80 },
      { name: "Time Management", level: 80 },
      { name: "Creativity & Innovation", level: 85 },
      { name: "ERP Troubleshooting / Attention to Detail", level: 90 },
    ],
  },
];

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page notebook-page">
      <div className="page-content">
        <h2 className="page-title">Skills</h2>
        {skillGroups.map((group, idx) => (
          <div key={idx} className="skill-group">
            <h3>{group.category}</h3>
            {group.skills.map((skill, sIdx) => (
              <div key={sIdx} className="skill">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: animate ? `${skill.level}%` : "0%" }}
                  />
                </div>
                <span className="skill-percent">{skill.level}%</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

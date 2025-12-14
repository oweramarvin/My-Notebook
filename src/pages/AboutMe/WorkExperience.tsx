import { useState } from "react";
import "./WorkExperience.css";

interface Job {
  id: number;
  title: string;
  company: string;
  year: string;
  description: string;
}

const workData: Job[] = [
  {
    id: 1,
    title: "Software Developer",
    company: "Acutrive IT Solutions Inc.",
    year: "2023 - 2025",
    description:
      "I specialize in customizing, extending, and maintaining Acumatica ERP, a cloud-based system, using C#, .NET, ASPX, SQL, Acumatica BQL, custom DLLs, REST APIs, dashboards, business events, and system upgrades to meet client-specific business needs. \n\n I work closely with the functional team to analyze requirements, review documentation, estimate development effort, and implement custom screens, UI enhancements, dashboards, business logic, workflows, integrations, table relationships, automated documents, financial reports, and other printed outputs, while supporting system upgrades and ensuring customizations remain compatible. \n\nI also develop automation and process triggers, configure and extend business events, create and maintain Generic Inquiries, build and consume APIs, optimize BQL and SQL queries, troubleshoot and debug in UAT and production environments, perform performance tuning, and support deployments. Through these responsibilities, I deliver secure, scalable, maintainable, and efficient Acumatica solutions that meet client requirements and follow best practices.",
  },
  {
    id: 2,
    title: "Quality Engineer Intern",
    company: "Edusuite Inc.",
    year: "2023 (Mar - July)",
    description:
      "Designed and executed test cases and test steps to ensure application reliability and quality. Performed formal and informal testing, including functional and exploratory testing, to identify bugs and system issues. Logged, tracked, and documented defects using Jira (Atlassian), and coordinated closely with developers to verify fixes and improvements. \n\nActively participated in agile meetings, including sprint planning, daily stand-ups, and feature testing. Assisted in recording test results, documenting issues, and ensuring new features met expected requirements before release.",
  },
  {
    id: 3,
    title: "Game Developer",
    company: "Freelancing",
    year: "2022",
    description:
      "Developed a complete game using Unity3D as the game engine and C# for scripting, handling all aspects of development independently, including UI design, gameplay logic, and backend scripting. Built multiple mini-games such as guess-the-picture with jumbled letters, wire-connection puzzles, and hidden object challenges, focusing on smooth user interaction and engaging gameplay. \n\nAs the sole developer, I communicated directly with the client to gather requirements, provide updates, and implement feedback. This experience strengthened my understanding of object-oriented programming (OOP), system design, debugging, and problem-solving, skills which I later applied in my corporate development role.",
  },
];

export default function WorkExperience() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="page notebook-page">
      <div className="page-content">
        <h2 className="page-title">Work Experience</h2>

        <div className="workexp-container">
          {workData.map((job) => (
            <div
              key={job.id}
              className={`work-card ${openId === job.id ? "open" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                toggle(job.id);
              }}
            >
              <div className="top-row">
                <span className="title">{job.title}</span>
                <span className="plus">{openId === job.id ? "−" : "+"}</span>
              </div>

              <div className="company">{job.company}</div>
              <div className="year">{job.year}</div>

              <div className="description-wrapper">
                <p className="description">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

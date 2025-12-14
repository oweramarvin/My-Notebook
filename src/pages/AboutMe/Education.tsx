import "./Education.css";

const educationData = [
  {
    level: "Elementary",
    school: "San Jose Elementary School",
    year: "2007 - 2013",
  },
  {
    level: "Junior High School",
    school: "Felicisimo T. San Luis Integrated SHS",
    year: "2013 - 2017",
  },
  {
    level: "Senior High School",
    school: "Polytechnic University of the Philippines - Sta. Mesa",
    year: "2017 - 2019",
  },
  {
    level: "College",
    school: "Technological University of the Philippines - Manila",
    year: "2019 - 2023",
  },
];

export default function Education() {
  return (
    <div className="page notebook-page">
      <div className="page-content">
        <h2 className="page-title">Education</h2>

        <div className="edu-timeline">
          {educationData.map((edu, index) => (
            <div
              className="edu-item fade-in"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="edu-dot" />
              <div className="edu-content">
                <h3 className="edu-school">{edu.school}</h3>
                <span className="edu-year">{edu.year}</span>
                <span className="edu-level">{edu.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

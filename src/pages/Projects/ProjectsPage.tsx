import IsMobile from "../../components/IsMobile";
import "./ProjectsPage.css";
import type { Project } from "../../types/Project";

function imageDriveLink(id: string) {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w800-h600`;
}

export const projects: Project[] = [
  {
    title: "Mochi Fight",
    shortDesc:
      "This project demonstrates my early experience with C#, Unity, game logic, and UI interaction design.",
    description: `Mochi Fight is a two-player Android game designed for kids, featuring simple controls, power-ups, and competitive gameplay. Both players share the same screen and control their characters using on-screen joysticks within their designated areas. Each player is presented with two characters - only one is real while the other is fake. 
    
    The player must interact with their joystick. To identify the real character you need to move your joystick downward, movement is controlled left and right, while shooting is performed upward. The game also includes various power-ups such as freezing the opponent, slowing their movement, disabling shooting, revealing the correct answer, and more. 
    
    This game was developed in 2021 and is the first game I ever created, which makes it a special milestone in my development journey. I solely developed the game mechanics and logic using Unity3D with C# scripting in Visual Studio, while the game’s visual design was created by my friend Benjie. 
    
    Mochi Fight was previously published on Google Play, but was later removed due to outdated policy requirements. <strong> UNFORTUNATELY, THE ORIGINAL SOURCE CODE WAS LOST </strong> after a laptop failure and hard reset, leaving the APK as the only remaining backup. Although simple, this project taught me a great deal about game development, problem-solving, and the complete development lifecycle - from idea to deployment.`,

    imageUrl: imageDriveLink("1pLOUAd4VXop5UUjB9uLoV-4ZxAk9LCdK"),
    videoUrl: "/My-Notebook/videos/mochi-video.mp4",

    downloadUrl:
      "https://drive.google.com/uc?export=download&id=1fW7QUnVIztgZfnKEv7W1Zq6SKtFP-XHe",
    githubUrl: "",
    documentUrl: "",
  },
  {
    title: "ARrested",
    shortDesc:
      "This is our thesis project, featuring augmented reality gameplay and interactive investigation.",
    description: `ARrested is an augmented reality (AR) Android game inspired by Among Us, where players must investigate and identify the killer among NPCs. Players collect clues through NPC dialogue, mini-games like hidden object challenges, and by scanning AR cards, each with a unique purpose. For example, an old photograph card can reveal visual hints about the killer and the victim. To submit their investigation, players visit the police station, answer five questions based on collected clues, and ultimately select the NPC they believe is guilty, earning points based on accuracy.

    I developed the game mechanics and AR functionality using Unity3D and C#, while my groupmate handled design and documentation for our thesis project. Vuforia was used for augmented reality card scanning, and Canva and Photoshop were used for asset creation. Although the game was made for Android, Unity’s cross-platform capabilities mean it could also be exported to iOS.

    This project taught me how to integrate AR interactions, mini-games, and UI workflows into a cohesive experience. I also learned practical skills like object scaling, positioning on screen, and managing interactive gameplay logic, which significantly improved my understanding of game development pipelines and problem-solving.`,
    imageUrl: imageDriveLink("13Os6h_hu3Er-r2OlyX4AIl4jXmuCcp-Z"),
    videoUrl: "/My-Notebook/videos/ARrested-video.mp4",

    downloadUrl:
      "https://drive.google.com/uc?export=download&id=1mz-wzSrzhHVP7erHSFNivlgpZQphwpmG",
    githubUrl:
      "https://github.com/oweramarvin/ARrested-Augmented-Reality-Thesis-.git",
    documentUrl:
      "https://docs.google.com/document/d/1nbtQkcXB6XesuzkGw9UdBTkQF0Ddfv_f/edit?usp=sharing&ouid=109697681410563732901&rtpof=true&sd=true",
  },
  {
    title: "Notebook Portfolio",
    shortDesc:
      "This is the portfolio you’re seeing, built as an interactive notebook with React and TypeScript.",
    description: `My interactive portfolio is built using HTMLFlipBook, React, TypeScript, and Vite, with plans to integrate a database for dynamic login, content editing, and page template management, so it won’t be hard-coded.

    It features an About Me page showcasing my education, work experience, skills, fun facts, and downloadable resume and cover letter. The Projects section highlights selected personal projects, while respecting confidentiality for corporate and lost academic projects.

    Additionally, the Contact page provides links to my social media and email (phone number is confidential), and there’s a Plans & Tasks section for upcoming and in-progress portfolio updates.`,
    imageUrl: imageDriveLink("1D44M4v3pt9PmdVsE4G-DnOkUhzojBYv-"),
    videoUrl: "/My-Notebook/videos/notebook-video.mp4",
    downloadUrl: "",
    githubUrl: "https://github.com/oweramarvin/My-Notebook.git",
    documentUrl: "",
  },
];

interface ProjectsPageProps {
  setSelectedProject: (project: Project) => void;
  bookRef: any;
}

export default function ProjectsPage({
  setSelectedProject,
  bookRef,
}: ProjectsPageProps) {
  const isMobile = IsMobile();

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);

    if (isMobile && bookRef?.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  return (
    <div key="about" className="page notebook-page">
      <div className="page-content">
        <h2 className="page-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={i}
              className="project-card"
              onClick={() => handleProjectClick(p)}
            >
              <div className="img-wrap">
                <img src={p.imageUrl} alt={p.title} />
              </div>

              <h3>{p.title}</h3>
              <p>{p.shortDesc}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

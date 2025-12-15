import AboutPageContent from "./AboutPageContent";
import "./AboutPage.css";
import IsMobile from "../../components/IsMobile";
import type { RefObject } from "react";
import Education from "./Education";
import HTMLFlipBookOrig from "react-pageflip";

interface AboutPageProps {
  setSelectedPage: (value: string) => void;
  bookRef?: RefObject<any>;
}

const HTMLFlipBook = HTMLFlipBookOrig as any;

export default function AboutPage({
  setSelectedPage,
  bookRef,
}: AboutPageProps) {
  const isMobile = IsMobile();

  const handleClickButton = (page: string) => {
    setSelectedPage(page);

    if (isMobile && bookRef?.current) bookRef.current.pageFlip().flipNext();
  };

  return (
    <div key="about" className="page notebook-page">
      <div className="page-content">
        <h2 className="page-title">About Me</h2>
        <p>
          I’m a Software Developer who loves turning complex problems into
          simple solutions. I am expertised in customizing 'ACUMATICA', a
          cloud-based ERP system (want me to customize yours?). I am also
          skilled in game development (Unity3D), web development (React +
          TypeScript + Express), and desktop applications (VB.NET & C#.NET).
        </p>

        <div className="more-section">
          <h3>Wanna know more about me?</h3>

          <div className="more-links">
            <button
              className="more-item"
              onClick={() => handleClickButton("Education")}
            >
              Education
            </button>
            <button
              className="more-item"
              onClick={() => handleClickButton("Work Experience")}
            >
              Work Experience
            </button>
            <button
              className="more-item"
              onClick={() => handleClickButton("Skills")}
            >
              Skills
            </button>
            <button
              className="more-item"
              onClick={() => handleClickButton("Fun Facts")}
            >
              Fun Facts
            </button>
            <button
              className="more-item"
              onClick={() => handleClickButton("Resume")}
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

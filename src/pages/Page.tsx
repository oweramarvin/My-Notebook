import { useEffect, useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Page.css";
import FrontCoverPage from "./Cover/FrontCoverPage";
import AboutPage from "./AboutMe/AboutPage";
import AboutPageContent from "./AboutMe/AboutPageContent";
import ProjectsPage from "./Projects/ProjectsPage";
import ProjectDetails from "./Projects/ProjectDetails";
import ContactPage from "./Contact/ContactPage";
import NiceToHavePage from "./NiceToHave/NiceToHavePage";
import BackCoverPage from "./Cover/BackCoverPage";
import MobileSwipeButton from "../components/MobileSwipeButton";
import IsMobile from "../components/IsMobile";
import { projects } from "./Projects/ProjectsPage";
import type { Project } from "../types/Project";

function Page() {
  //const HTMLFlipBook = HTMLFlipBookOrig as any;
  const bookRef = useRef<any>(null);
  const isMobile = IsMobile();

  const [bookSize, setBookSize] = useState({ width: 350, height: 450 });
  const [selectedPage, setSelectedPage] = useState<string>("Education"); // My default selected page
  const [currentPage, setCurrentPage] = useState(0);

  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  useEffect(() => {
    const updateSize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      const mobileW = w <= 768;
      setBookSize({
        width: Math.round(mobileW ? w * 0.9 : w * (3 / 7)),
        height: Math.round(mobileW ? h * 0.8 : h * 0.9),
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const pages = [
    <div>
      <FrontCoverPage />
    </div>,
    <div key={"about"}>
      <AboutPage setSelectedPage={setSelectedPage} bookRef={bookRef} />
    </div>,
    <div key="about-content">
      <AboutPageContent page={selectedPage} />
    </div>,
    <div>
      <ProjectsPage setSelectedProject={setSelectedProject} bookRef={bookRef} />
    </div>,
    <div>
      <ProjectDetails {...selectedProject} />
    </div>,
    <div>
      <ContactPage />
    </div>,
    <div>
      <NiceToHavePage />
    </div>,
    <div>
      <BackCoverPage />
    </div>,
  ];

  return (
    <>
      <div className="book-wrapper">
        {isMobile && (
          <p className="page-indicator">
            {currentPage + 1} / {pages.length}
          </p>
        )}
        <HTMLFlipBook
          style={{}}
          startPage={0}
          width={bookSize.width}
          height={bookSize.height}
          drawShadow={true}
          flippingTime={1000}
          usePortrait={window.innerWidth <= 768}
          startZIndex={0}
          autoSize={false}
          clickEventForward={false}
          useMouseEvents={true}
          swipeDistance={100}
          showPageCorners={true}
          disableFlipByClick={true}
          showCover={true}
          maxShadowOpacity={0.5}
          size="fixed"
          mobileScrollSupport={true}
          ref={bookRef}
          onFlip={(e) => setCurrentPage(e.data)}
          onChangeOrientation={() => {}}
          onChangeState={() => {}}
          minWidth={bookSize.width}
          maxWidth={bookSize.width}
          minHeight={bookSize.height}
          maxHeight={bookSize.height}
          className="demo-book"
        >
          {pages}
        </HTMLFlipBook>
        <MobileSwipeButton bookRef={bookRef} />
      </div>
    </>
  );
}

export default Page;

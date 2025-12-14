import "./AboutPage.css";
import Education from "./Education";
import FunFacts from "./FunFacts";
import Journey from "./Journey";
import NiceToHaveAboutMe from "./NiceToHaveAboutMe";
import Resume from "./Resume";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

interface AboutPageContentProps {
  page: "education" | "journey";
}

export default function AboutPageContent({ page }: { page: string }) {
  return (
    <>
      {page == "Education" && <Education />}
      {page == "Journey" && <Journey />}
      {page == "Work Experience" && <WorkExperience />}
      {page == "Skills" && <Skills />}
      {page == "Fun Facts" && <FunFacts />}
      {page == "Nice to have" && <NiceToHaveAboutMe />}
      {page == "Resume" && <Resume />}
    </>
  );
}

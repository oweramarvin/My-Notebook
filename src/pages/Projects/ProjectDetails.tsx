import "./ProjectDetails.css";
import { projects } from "./ProjectsPage";

interface ProjectDetailsProps {
  title: string;
  shortDesc: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  downloadUrl: string;
  githubUrl: string;
  documentUrl: string;
}

export default function ProjectDetails({
  title,
  shortDesc,
  description,
  imageUrl,
  videoUrl,
  downloadUrl,
  githubUrl,
  documentUrl,
}: ProjectDetailsProps) {
  return (
    <div className="page notebook-page">
      <div className="page-content">
        <h2 className="page-title">Project Details</h2>

        <div className="video-container">
          <video key={videoUrl} controls preload="metadata">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <h1 className="project-title">{title}</h1>
        {/*<p className="project-description">{description}</p>*/}
        <div
          className="project-description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>

        <div className="project-buttons">
          {downloadUrl && (
            <a href={downloadUrl} download className="btn project-btn">
              Download
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" className="btn project-btn">
              GitHub
            </a>
          )}
          {documentUrl && (
            <a href={documentUrl} target="_blank" className="btn project-btn">
              Document
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

import "./ProjectDetails.css";

interface ProjectDetailsProps {
  title: string;
  videoUrl: string;
  description: string;
  downloadUrl?: string;
  githubUrl?: string;
}

export default function ProjectDetails({
  title,
  videoUrl,
  description,
  downloadUrl,
  githubUrl,
}: ProjectDetailsProps) {
  return (
    <div className="page notebook-page">
      <div className="page-content">
        <h2 className="page-title">Project Details</h2>

        {/* VIDEO */}
        <div className="video-container">
          <video src={videoUrl} controls />
        </div>

        {/* DESCRIPTION */}
        <p className="project-description">{description}</p>

        {/* BUTTONS */}
        <div className="project-buttons">
          {downloadUrl && (
            <a href={downloadUrl} download className="btn download-btn">
              Download
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" className="btn github-btn">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

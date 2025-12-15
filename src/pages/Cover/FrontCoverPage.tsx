import "./FrontCoverPage.css";

export default function CoverPage() {
  return (
    <div key="front-cover" className="page cover front-cover">
      <div className="cover-content">
        <div className="top-row">
          <div className="name-box">
            <h2 className="name">MARVIN OWERA</h2>
            <div className="underline"></div>
            <p className="role">Software Developer</p>
          </div>
        </div>
      </div>
      <p className="tagline">Slide left to explore</p>
    </div>
  );
}

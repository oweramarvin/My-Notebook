import "./FrontCoverPage.css";

export default function CoverPage() {
  return (
    <div key="front-cover" className="page cover front-cover">
      <div className="cover-content">
        <div className="top-row">
          <div className="logo-box">
            <img src="./src/assets/image/MyChibiNB.png" alt="My Chibi" />
          </div>
          <div className="name-box">
            <h2 className="name">MARVIN OWERA</h2>
            <div className="underline"></div>
            <p className="role">Software Developer</p>
          </div>
        </div>
      </div>
      <p className="tagline">Complex to Simple</p>
    </div>
  );
}

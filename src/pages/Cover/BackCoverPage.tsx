import "./BackCoverPage.css";

export default function BackCoverPage() {
  return (
    <div key="back-cover" className="page cover back-cover">
      <div className="back-cover-content">
        {/* Quote / Closing Message */}
        <p className="back-quote">
          "Thank you for flipping through my journey."
        </p>

        {/* Footer */}
        <p className="footer-note">© 2025 Marvin Owera — All rights reserved</p>
      </div>
    </div>
  );
}

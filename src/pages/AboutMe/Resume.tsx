import { useState, useRef } from "react";
import "./Resume.css";

const resumeUrl =
  "https://drive.google.com/uc?export=download&id=1MIkeZWD4PFYJlXVzSE-REJ6bLLiOFw1b";
const coverLetterUrl =
  "https://drive.google.com/uc?export=download&id=1P_nDTFsUwZrX6YG2kT-2-66hcoXnrH4v";
const password = "Resume!23";

export default function Resume() {
  const [showPasswordPrompt, setShowPasswordPrompt] = useState<
    null | "resume" | "cover"
  >(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleCheckPassword = () => {
    if (input === password) {
      const url = showPasswordPrompt === "resume" ? resumeUrl : coverLetterUrl;
      window.open(url, "_blank");

      // reset
      setShowPasswordPrompt(null);
      setInput("");
      setError("");

      // focus again (optional)
      passwordInputRef.current?.focus();
    } else {
      setError("Incorrect password. Please try again.");
      setInput(""); // clear field after wrong password
      passwordInputRef.current?.focus(); // re-focus
    }
  };

  return (
    <div className="page notebook-page">
      <div className="page-content">
        <h2 className="page-title">Resume & Cover Letter</h2>

        <p className="resume-intro">
          I am Marvin Owera, a Software Developer passionate about building
          efficient, clean, and scalable software solutions. Click the buttons
          below to download my resume and cover letter. This section is intended
          for companies applying only; please message me to receive the
          password.
        </p>

        <div className="download-buttons">
          <button
            className="btn download-btn"
            onClick={() => setShowPasswordPrompt("resume")}
          >
            Download Resume
          </button>

          <button
            className="btn download-btn"
            onClick={() => setShowPasswordPrompt("cover")}
          >
            Download Cover Letter
          </button>
        </div>

        {showPasswordPrompt && (
          <div className="password-modal-overlay">
            <div className="password-modal">
              <h3>Enter Password to Download</h3>

              {/* password input */}
              <input
                ref={passwordInputRef}
                className="password-input"
                type="password"
                placeholder="Enter password"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
              />

              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                }}
              >
                <button
                  className="btn download-btn"
                  onClick={handleCheckPassword}
                >
                  Submit
                </button>
                <button
                  className="btn close-btn"
                  onClick={() => {
                    setShowPasswordPrompt(null);
                    setInput("");
                    setError("");
                  }}
                >
                  Cancel
                </button>
              </div>

              {error && <p className="error">{error}</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

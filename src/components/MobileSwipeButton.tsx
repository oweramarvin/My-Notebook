import "./MobileSwipeButton.css";

interface Props {
  bookRef: React.RefObject<any>;
}

export default function MobileSwipeButton({ bookRef }: Props) {
  const flipPrev = () => {
    bookRef.current.pageFlip().turnToPrevPage();
  };
  const flipNext = () => {
    bookRef.current.pageFlip().flipNext();
  };

  if (window.innerWidth > 768) return null;

  return (
    <div className="mobile-controls">
      <div className="info-icon">ℹ️</div>

      <div className="nav-bottom-container">
        <button className="nav-btn" onClick={flipPrev}>
          ← Left
        </button>
        <button className="nav-btn" onClick={flipNext}>
          Right →
        </button>
      </div>
    </div>
  );
}

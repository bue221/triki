import React from "react";

function Doodles() {
  return (
    <div className="doodles" aria-hidden="true">
      <svg className="doodle doodle-star" viewBox="0 0 48 48" fill="none">
        <path
          d="M24 4l3.2 12.4L40 16l-10 7.2L33.6 36 24 28.4 14.4 36 18 23.2 8 16l12.8.4L24 4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <svg className="doodle doodle-spark" viewBox="0 0 40 40" fill="none">
        <path d="M20 4v10M20 26v10M4 20h10M26 20h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg className="doodle doodle-arrow" viewBox="0 0 80 48" fill="none">
        <path
          d="M8 28c18-18 36-18 56-8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path d="M54 12l18 8-12 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg className="doodle doodle-face" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="18" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="22" cy="24" r="1.6" fill="currentColor" />
        <circle cx="34" cy="24" r="1.6" fill="currentColor" />
        <path d="M20 34c3 4 13 4 16 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
      <svg className="doodle doodle-confetti" viewBox="0 0 64 64" fill="none">
        <path d="M10 18l6 4M48 12l-4 8M18 48l8-2M52 44l-8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M32 8l2 6M8 36l6 1M56 28l-5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <svg className="doodle doodle-bubble" viewBox="0 0 72 48" fill="none">
        <rect x="6" y="6" width="52" height="28" rx="12" stroke="currentColor" strokeWidth="1.7" />
        <path d="M18 34l-6 8 14-6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default Doodles;

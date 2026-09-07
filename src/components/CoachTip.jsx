import React from "react";

function CoachTip({ tip }) {
  if (!tip) {
    return null;
  }

  return (
    <aside className="coach-tip" aria-live="polite">
      <p className="coach-tip-kicker">Tip</p>
      <p className="coach-tip-title">{tip.title}</p>
      <p className="coach-tip-body">{tip.body}</p>
    </aside>
  );
}

export default CoachTip;

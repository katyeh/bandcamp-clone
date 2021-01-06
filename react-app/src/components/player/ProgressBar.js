import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

export default function ProgressBar({ duration, currentTime, onTimeUpdate }) {
  const currentPercentage = (currentTime / duration) * 100;

  function formatDuration(duration) {
    return moment
      .duration(duration, "seconds")
      .format("mm:ss", { trim: false });
  }

  const clickedTimeCalculator = (e) => {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector(".bar__progress");
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }

  const timeDragHandler = (e) => {
    onTimeUpdate(clickedTimeCalculator(e));

    const updateTimeOnMove = eMove => {
      onTimeUpdate(clickedTimeCalculator(eMove))
    }

    document.addEventListener("mousemove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  }

  return (
    <div className="bar">
      <span className="bar__time">{formatDuration(currentTime)}</span>
      <div
      className="bar__progress"
      style={{
        background: `linear-gradient(to right, #ebb9fc ${currentPercentage}%, white 0)`
      }}
      onMouseDown={e => timeDragHandler(e)}
      >
        <span className="bar__progress__knob" style={{ left: `${currentPercentage - 2}%` }}
        />
      </div>
  <span className="bar__time">{formatDuration(duration)}</span>
    </div>
  )



}

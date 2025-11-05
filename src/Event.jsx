
import React from "react";
import "./Event.css";

export default function Event({ evt }) {
  if (!evt) return null;

  const formatTime = (timeStr) => {
    const [h, m] = timeStr.split(":").map(Number);
    const suffix = h >= 12 ? "PM" : "AM";
    const hour = ((h + 11) % 12) + 1;
    return `${hour}:${m.toString().padStart(2, "0")} ${suffix}`;
  };

  return (
    <div
      className="event-wrapper"
      style={{ borderLeftColor: evt.color || "#2196f3" }}
    >
      <div className="event-header">
        <span className="event-badge">Event</span>
        <button className="edit-btn">Edit</button>
      </div>

      <h3 className="event-title">{evt.title}</h3>

      <div className="event-details">
        <div className="event-info">
          <p className="event-date">{new Date(evt.date).toDateString()}</p>
          <p className="event-time">
            {formatTime(evt.startTime)} – {formatTime(evt.endTime)}
          </p>
        </div>

        {evt.days && evt.days.length > 0 && (
          <div className="event-days">
            {evt.days.map((day, i) => (
              <span key={i} className="day-tag">
                {day}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}




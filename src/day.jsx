
import './day.css';

export default function Day({ day, styles, actday, issmonth, evt = [] }) {
  return (
    <div
      style={{
        ...styles,
        color: issmonth ? "#333" : "#bbb",
        cursor: issmonth ? "pointer" : "default",
      }}
      onClick={issmonth ? () => actday(day) : undefined}
    >
      <label className="day-number">{day}</label>

     {issmonth && <div className="day-events">
        {evt.slice(0, 2).map((e, idx) => (
          <div
            key={idx}
            className="event-preview centered"
            style={{ "--event-color": e.color }}
            title={e.title}
          >
            {e.title}
          </div>
        ))}

        {evt.length > 2  &&<div className="more-events">+{evt.length - 2} more</div>}
      </div>}
    </div>
  );
}



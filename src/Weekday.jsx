export default function Weekday({ wday, styles }) {
  return (
    <div className="weekday" style={styles}>
      <label>{wday}</label>
    </div>
  );
}

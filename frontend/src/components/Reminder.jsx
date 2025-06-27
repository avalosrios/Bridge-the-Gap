import "../styles/Reminder.css";

export default function Reminder({ reminder }) {
  return (
    <article className="reminder-card">
      <h4>{reminder.group}</h4>
      <p>{reminder.message}</p>
    </article>
  );
}

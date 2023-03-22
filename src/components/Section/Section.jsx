export default function Section({ title, children }) {
  return (
    <div className="feedback">
      <h2 className="feedback-title">{title}</h2>
      {children}
    </div>
  );
}

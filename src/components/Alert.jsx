export default function Alert({ type, children }) {
  if (!children)
    return (
      <div className="container">
        <div className={`alert-danger`}>{`Si è verificato un errore`}</div>
      </div>
    );
  return (
    <div className="container">
      <div className={`alert-${type || "info"}`}>{children}</div>
    </div>
  );
}

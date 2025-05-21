export default function Alert({ type = "", children }) {
  if (!children)
    return (
      <div className="container">
        <div className={`alert-danger`}>{`Si è verificato un errore`}</div>
      </div>
    );
  else
    return (
      <div className="container">
        <div className={`alert-${type || "danger"}`}>{children}</div>
      </div>
    );
}

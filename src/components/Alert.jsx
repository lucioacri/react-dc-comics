export default function Alert({ type, children }) {
  if (!children) return <></>;
  return (
    <div className="container">
      <div className={`alert-${type || "info"}`}>{children}</div>
    </div>
  );
}

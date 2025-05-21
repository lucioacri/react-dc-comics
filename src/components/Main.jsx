import Merchandise from "./Merchandise";
import Alert from "./Alert";

export default function Main() {
  return (
    <main>
      <Alert type="danger">a</Alert>
      <section id="content-main">
        <div className="container">
          <div className="row">
            <h2>--&gt; Content goes here &lt;--</h2>
          </div>
        </div>
      </section>
      <Merchandise />
    </main>
  );
}

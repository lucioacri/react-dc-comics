import Merchandise from "./Merchandise";
import Alert from "./Alert";
import comics from "./comics.js";

export default function Main() {
  return (
    <main>
      <Alert type="" children="" />
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

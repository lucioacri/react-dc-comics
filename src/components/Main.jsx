export default function Main() {
  return (
    <main>
      <section id="content-main">
        <div className="container">
          <div className="row">
            <h2>-- Content goes here --</h2>
          </div>
        </div>
      </section>
      <section id="merchandise-main">
        <div className="container">
          <nav className="merchandise-navbar">
            <ul>
              <li>
                <a href="#">
                  <img
                    className="merch-img"
                    src="./buy-comics-digital-comics.png"
                    alt=""
                  />
                  <p>DIGITAL COMICS</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="merch-img"
                    src="./buy-comics-merchandise.png"
                    alt=""
                  />
                  <p>DC MERCHANDISE</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="merch-img"
                    src="./buy-comics-subscriptions.png"
                    alt=""
                  />
                  <p>SUBSCRIPTIONS</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="merch-img"
                    src="./buy-comics-shop-locator.png"
                    alt=""
                  />
                  <p>COMIC SHOP LOCATOR</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="merch-img"
                    src="./buy-dc-power-visa.svg"
                    alt=""
                  />
                  <p>DC POWER VISA</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </main>
  );
}

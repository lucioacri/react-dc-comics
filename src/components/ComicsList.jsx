import ComicCard from "./ComicCard";
import comics from "./comics";

export default function ComicsList() {
  return (
    <section id="content-main">
      <div className="container">
        <div className="current-series">
          <button className="btn-primary">CURRENT SERIES</button>
        </div>
        <div className="row">
          {comics.map((comic) => (
            <ComicCard comic={comic} key={comic.id} />
          ))}
          <button className="btn-primary">LOAD MORE</button>
        </div>
      </div>
    </section>
  );
}

import ComicCard from "./ComicCard";
import comics from "./comics";

export default function ComicsList() {
  return (
    <section id="content-main">
      <div className="container">
        <div className="row">
          {comics.map((comic) => (
            <ComicCard comic={comic} key={comic.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

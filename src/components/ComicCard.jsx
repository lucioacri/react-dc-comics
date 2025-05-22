export default function ComicCard({ comic }) {
  return (
    <div className="col-1-6">
      <div className="card">
        <div className="card-media">
          <img src={comic.thumb} alt={comic.title} />
        </div>
        <div className="card-content">{comic.title}</div>
      </div>
    </div>
  );
}

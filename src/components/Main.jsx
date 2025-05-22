import Merchandise from "./Merchandise";
import Alert from "./Alert";
import ComicsList from "./ComicsList";
import Jumbotron from "./Jumbotron";
import comics from "../data/comics";

export default function Main() {
  return (
    <main>
      <Alert type="" children="" />
      <Jumbotron />
      <ComicsList comics={comics} />
      <Merchandise />
    </main>
  );
}

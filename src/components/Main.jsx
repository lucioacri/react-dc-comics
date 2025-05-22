import Merchandise from "./Merchandise";
import Alert from "./Alert";
import ComicsList from "./ComicsList";
import Jumbotron from "./Jumbotron";

export default function Main() {
  return (
    <main>
      <Alert type="" children="" />
      <Jumbotron />
      <ComicsList />
      <Merchandise />
    </main>
  );
}

import "./App.css";
import { useEffect, useState } from "react";
import { getAllComicList } from "./api/comics";
import ComicTemplate from './ComicTemplate';

function App() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllComicList();
      setComics(data?.data?.results);
    }
    fetchData();
  }, []);

  return (
    <div>
      <section>
        {comics.map((comic) => {
          return (
            <ComicTemplate key={comic.id} comic={comic} />
          );
        })}
      </section>
    </div>
  );
}

export default App;

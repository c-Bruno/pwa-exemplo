import "./App.css";
import { useEffect, useState } from "react";
import { getAllComicList } from "./api/comics";
import ComicTemplate from './ComicTemplate';

function App() {
  const [comics, setComics] = useState([]);
  const [orientation, setOrientation] = useState('');

  useEffect(() => {
    const handleOrientationChange = () => {
      const newOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
      setOrientation(newOrientation);
    };

    window.addEventListener('resize', handleOrientationChange);
    handleOrientationChange();

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

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

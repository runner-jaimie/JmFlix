// //  Home

import { useEffect, useState } from 'react'; 
import { API_KEY } from '../globals/variables';
import useGlobal from '../store/globalAppState';
import Movies from './Movies';

function Home({ sort }) {

  const globalStateAndActions = useGlobal();
  const globalActions = globalStateAndActions[1];

  const [movies, setMovies] = useState(null);

  useEffect(() => {

    globalActions.setFavs();

    const fetchMovies = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1`);
      let data = await res.json();
      let first12Movies = data.results.splice(0,12);
      setMovies(first12Movies);
    }

    fetchMovies();

  }, [globalActions, sort]);

  return (
    <main>
      <section>
          
          { movies !== null && <Movies movies={movies} /> }
      </section>
    </main>
  );
}

export default Home;


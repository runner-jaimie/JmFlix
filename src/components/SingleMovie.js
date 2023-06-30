// Single Movie
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FavouriteButton from './FavouriteButton'
import { API_KEY } from '../globals/variables';
import noPoster from '../images/no-movie-poster.jpg';

function SingleMovie() {

  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {

    const fetchMovie = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
      let data = await res.json();
      setMovie(data);
    }

    fetchMovie();

  }, [id]);

return (
  <section className="single-movie-container" >
    {movie == null ? 
      <p>Loading...</p> :
      <main>
        <div className="single-movie-bg" style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`
          }}>
        </div>
        <div className="single-movie-content">
          <div className="single-movie-poster">
            {movie.poster_path !== null ? <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /> :
            <img src={noPoster} alt="No Movie Poster Available" /> }
          </div>
          <div className="single-movie-text-info">
            <div className="single-movie-title-rating">
              <h2>{movie.title}</h2>
              <p>{movie.vote_average*10}%</p>
            </div>
            <div className="single-movie-info-detail">            
              <p>{movie.release_date}&nbsp;&nbsp;&nbsp;&nbsp;{movie.runtime} minutes</p>
              <p>{movie.overview}</p>
              <p>Genres: {movie.genres.length === 0  ?
                  <span>Genres for this Movie are unavailable.</span>:
                  <span className="genre-btn">{movie.genres.map(genre=>genre.name).length>1? movie.genres.map(genre=>genre.name).join(", "): movie.genres.map(genre=>genre.name)}</span>
                }
              </p>
            </div>
            <FavouriteButton className="fav-btn" movie={movie} />
          </div>
        </div>
      </main>
      }
  </section>
);
}

export default SingleMovie;

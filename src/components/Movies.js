// Movies
import { Link } from 'react-router-dom';
import noPoster  from '../images/no-movie-poster.jpg';
import FavouriteButton from './FavouriteButton';
function Movies({ movies, checkFav }) {

    function makeMovies(movies){
        return movies.map((movie, i) => {
            return (
                <div key={i} className="movie">
                  <div className="card">
                    <div className="movie-poster">
                      {movie.poster_path !== null ? 
                          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} /> :
                          <img src={noPoster} alt="No Movie Poster Available" />  
                      }
                    </div>
                    <div className="movie-info">
                      <h2>{movie.title.length > 18  ? `${movie.title.substring(0, 18)}...` : movie.title}</h2>
                      <div className="rating">{movie.vote_average*10}%</div>
                      <h4>{movie.release_date}</h4>
                      <p className="movie-overview">{movie.overview.length > 150  ? `${movie.overview.substring(0, 200)}...` : movie.overview}</p>
                      <div className="btn-click">
                        <div className="info-button">
                            <Link to={`/single-movie/${movie.id}`}><button  className="movie-button">More Info</button></Link>
                        </div>
                        <div className="btn-favourite-home">
                        <FavouriteButton movie={movie} checkFav={checkFav} />
                        </div>
                      </div>
                    </div>
                  </div>    
                </div>
            );
        });
    }

    return (
        <div className="movies-container">
            { makeMovies(movies) }
        </div>
    );
  
}

Movies.defaultProps = {
    checkFav: true
}

export default Movies;


{/* <div className="overview-container">
                      <p>{movie.overview.length > 18  ? `${movie.overview.substring(0, 25)}...` : movie.overview}</p>
                    </div>  */}
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieById, getSimilarMoviesById, getCreditsMoviesById } from "../../APIHandler";
import { validateImage } from "../../Tools";

// import "./moviedetails.scss";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState();
    const [similarMovies, setSimilarMovies] = useState();
    const [creditsMovies, setCreditsMovies] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setMovie(await getMovieById(movieId));
            setSimilarMovies(await getSimilarMoviesById(movieId));
            setCreditsMovies(await getCreditsMoviesById(movieId));
        }

        fetchData();
        window.scrollTo(0, 0);
    }, [movieId]);

    return (
        <article className="row mt-3">
            <div className="col-md-4">
                <img src={validateImage("https://image.tmdb.org/t/p/w500", movie?.poster_path)}
                    alt="Movie Poster"
                    style={{ width: "100%", objectFit: "cover" }}
                    className="img-fluid" />
            </div>
            <div className="col-md-8">
                <h1>{movie?.title}</h1>
                <p className="text-info text-decoration-underline">{movie?.runtime} min</p>
                <p>{movie?.overview}</p>
                <p>{movie?.tr}</p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Genres: </strong> {movie?.genres.map(genre => (<span className="text-info"> {genre.name} </span>))} </li>
                    <li className="list-group-item"><strong>Release Date: </strong> <span className="text-info"> {movie?.release_date}</span></li>
                    <li className="list-group-item"><strong>Popularity: </strong>  <span className="text-info">{movie?.popularity}</span></li>
                    <li className="list-group-item"><strong>Average: </strong>  <span className="text-info">{movie?.vote_average}</span></li>
                </ul>
            </div>


            <hr className="mt-4" />


            <div className="row mt-2">
                {
                    creditsMovies?.cast.map(creditMovie => (
                        <article key={creditMovie.id} className="col-6 col-md-4 col-lg-3 my-2">
                            <div className="card w-100">
                                <img src={validateImage("https://image.tmdb.org/t/p/w500", creditMovie.profile_path)}
                                    alt="Profile"
                                    style={{ objectFit: "cover" }}
                                    className="img-fluid card-img-top" />
                                <div className="card-body">
                                    <Link to={`/person/details/${creditMovie.id}`}>
                                    <h5>{creditMovie.name}</h5>
                                    </Link>
                                    <p className="card-text">{creditMovie.character}</p>
                                </div>
                            </div>
                        </article>
                    ))
                }
            </div>


            <hr className="mt-4" />

            <div>
                <h2 >Similar Movies</h2>
            </div>
            <div className="row mt-2">
                {
                    similarMovies?.results.map(similarMovie => (
                        <article key={similarMovie.id} className="col-6 col-md-4 col-lg-3 g-3">
                            <div className="card w-100">
                                <img src={validateImage("https://image.tmdb.org/t/p/w500", similarMovie?.poster_path)}
                                    alt="Moive poster"
                                    style={{ objectFit: "cover" }}
                                    className="img-fluid card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{similarMovie.title}</h5>
                                    <hr className="m-0"/>
                                    <p className="card-text">{similarMovie.overview.length > 60 ? (similarMovie.overview.substring(0, 60) + "...") : similarMovie.overview}
                                    </p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Release Date: </strong> <span className="text-info"> {similarMovie?.release_date}</span></li>
                                    <li className="list-group-item"><strong>Popularity: </strong>  <span className="text-info">{similarMovie?.popularity}</span></li>
                                    <li className="list-group-item"><strong>Average: </strong>  <span className="text-info">{similarMovie?.vote_average}</span></li>
                                </ul>
                                <div className="card-body">
                                    <Link to={`/movie/details/${similarMovie.id}`} className="card-link">See more</Link>
                                </div>
                            </div>
                        </article>
                    ))
                }
            </div>
        </article>
    );
};

export default MovieDetails;
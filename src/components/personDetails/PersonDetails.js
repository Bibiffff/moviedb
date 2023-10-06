import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPersonById, getPersonMovieCredits, getPersonTvCredits } from "../../APIHandler";
import { validateImage } from "../../Tools";

const PersonDetails = () => {
    const { personId } = useParams();
    const [person, setPerson] = useState();
    const [creditsMovie, setCreditsMovie] = useState();
    const [creditsSerie, setCreditsSeries] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setPerson(await getPersonById(personId));
            setCreditsMovie(await getPersonMovieCredits(personId));
            setCreditsSeries(await getPersonTvCredits(personId));
        }

        fetchData();
    }, []);

    return (
        <article className="row mt-3">
            <div className="col-md-4">
                <img src={validateImage("https://image.tmdb.org/t/p/w500", person?.profile_path)}
                    alt="Profile Poster"
                    style={{ width: "100%", objectFit: "cover" }}
                    className="img-fluid" />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong> Born: </strong>  <span className="text-info">{person?.birthday}</span></li>
                    <li className="list-group-item"><strong> Death: </strong> <span className="text-info"> {person?.deathday}</span></li>
                    <li className="list-group-item"><strong> Birth place: </strong>  <span className="text-info">{person?.place_of_birth}</span></li>
                    <li className="list-group-item"><strong> Known for: </strong>  <span className="text-info">{person?.known_for_department}</span></li>
                </ul>
            </div>
            <div className="col-md-8">
                <h1>{person?.name}</h1>
                <p>{person?.biography}</p>
            </div>
            <div className="row mt-2">
                <hr />
                <h3>Movies</h3>
                {
                    creditsMovie?.cast.map(movieCredits => (
                        <article key={movieCredits.id} className="col-6 col-md-4 col-lg-3 g-3">
                            <div className="card w-100">
                                <img src={validateImage("https://image.tmdb.org/t/p/w500", movieCredits?.poster_path)}
                                    alt="Movie poster"
                                    style={{ objectFit: "cover" }}
                                    className="img-fluid card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{movieCredits.title}</h5>
                                    <hr className="m-0" />
                                    <p className="card-text">{movieCredits.overview.length > 60 ? (movieCredits.overview.substring(0, 60) + "...") : movieCredits.overview}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Release Date: </strong> <span className="text-info"> {movieCredits?.release_date}</span> </li>
                                    <li className="list-group-item"><strong>Popularity: </strong>  <span className="text-info">{movieCredits?.popularity}</span></li>
                                    <li className="list-group-item"><strong>Average: </strong>  <span className="text-info">{movieCredits?.vote_average}</span></li>
                                </ul>
                                <div className="card-body">
                                    <Link to={`/movie/details/${movieCredits.id}`} className="card-link">See more</Link>
                                </div>
                            </div>
                        </article>
                    ))
                }
            </div>
            <div className="row mt-2">
                <hr />
                <h3>Series</h3>
                {
                    creditsSerie?.cast.map(seriesCredits => (
                        <article key={seriesCredits.id} className="col-6 col-md-4 col-lg-3 g-3">
                            <div className="card w-100">
                                <img src={validateImage("https://image.tmdb.org/t/p/w500", seriesCredits?.poster_path)}
                                    alt="Tv Show / Serie poster"
                                    style={{ objectFit: "cover" }}
                                    className="img-fluid card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{seriesCredits.name}</h5>
                                    <hr className="m-0" />
                                    <p className="card-text">{seriesCredits.overview.length > 60 ? (seriesCredits.overview.substring(0, 60) + "...") : seriesCredits.overview}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Release Date: </strong> <span className="text-info"> {seriesCredits?.first_air_date}</span> </li>
                                    <li className="list-group-item"><strong>Popularity: </strong>  <span className="text-info">{seriesCredits?.popularity}</span></li>
                                    <li className="list-group-item"><strong>Average: </strong>  <span className="text-info">{seriesCredits?.vote_average}</span></li>
                                </ul>
                                <div className="card-body">
                                    <Link to={`/tv/details/${seriesCredits.id}`} className="card-link">See more</Link>
                                </div>
                            </div>
                        </article>
                    ))
                }
            </div>

        </article>
    )
}

export default PersonDetails;
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSimilarTVById, getCreditsTVById, getTVById } from "../../APIHandler";
import { validateImage } from "../../Tools";

// import "./moviedetails.scss";

const TVDetails = () => {
    const { tvId } = useParams();
    const [tv, setTV] = useState();
    const [simlarTVs, setsimlarTVs] = useState();
    const [creditsTVs, setCreditsTVs] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setTV(await getTVById(tvId));
            setsimlarTVs(await getSimilarTVById(tvId));
            setCreditsTVs(await getCreditsTVById(tvId));
        }

        fetchData();
        window.scrollTo(0, 0);
    }, [tvId]);

    return (
        <article className="row mt-3">
            <div className="col-md-4">
                <img src={validateImage("https://image.tmdb.org/t/p/w500", tv?.poster_path)}
                    alt="tv Poster"
                    style={{ width: "100%", objectFit: "cover" }}
                    className="img-fluid" />
            </div>
            <div className="col-md-8">
                <h1>{tv?.name}</h1>
                <p className="text-info"> seasons: {tv?.number_of_seasons} | episodes: {tv?.number_of_episodes}</p>
                <p>{tv?.overview}</p>
                <p>{tv?.tr}</p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Genres: </strong> {tv?.genres.map(genre => (<span className="text-info"> {genre.name} </span>))} </li>
                    <li className="list-group-item"><strong>Popularity: </strong>  <span className="text-info">{tv?.popularity}</span></li>
                    <li className="list-group-item"><strong>Average: </strong>  <span className="text-info">{tv?.vote_average}</span></li>
                    <li className="list-group-item"><strong>Release Date: </strong> <span className="text-info"> {tv?.first_air_date} / {tv?.last_air_date} </span> </li>
                </ul>
            </div>


            <hr className="mt-4" />


            <div className="row mt-2">
                {
                    creditsTVs?.cast.map(creditTV => (
                        <article key={creditTV.id} className="col-6 col-md-4 col-lg-3 my-2">
                            <div className="card w-100">
                                <img src={validateImage("https://image.tmdb.org/t/p/w500", creditTV.profile_path)}
                                    alt="Moive poster"
                                    style={{ objectFit: "cover" }}
                                    className="img-fluid card-img-top" />
                                <div className="card-body">
                                    <Link to={`/person/details/${creditTV.id}`}>
                                        <h5>{creditTV.name}</h5>
                                    </Link>
                                    <p className="card-text">{creditTV.character}</p>
                                </div>
                            </div>
                        </article>
                    ))
                }
            </div>


            <hr className="mt-4" />

            <div>
                <h2 >Similar Series</h2>
            </div>
            <div className="row mt-2">
                {
                    simlarTVs?.results.map(simlarTV => (
                        <article key={simlarTV.id} className="col-6 col-md-4 col-lg-3 g-3">
                            <div className="card w-100">
                                <img src={validateImage("https://image.tmdb.org/t/p/w500", simlarTV?.poster_path)}
                                    alt="Moive poster"
                                    style={{ objectFit: "cover" }}
                                    className="img-fluid card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{simlarTV.name}</h5>
                                    <hr className="m-0"/>
                                    <p className="card-text">{simlarTV.overview.length > 60 ? (simlarTV.overview.substring(0, 60) + "...") : simlarTV.overview}
                                    </p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Release Date: </strong> <span className="text-info"> {simlarTV?.first_air_date}</span> </li>
                                    <li className="list-group-item"><strong>Popularity: </strong>  <span className="text-info">{simlarTV?.popularity}</span></li>
                                    <li className="list-group-item"><strong>Average: </strong>  <span className="text-info">{simlarTV?.vote_average}</span></li>
                                </ul>
                                <div className="card-body">
                                    <Link to={`/tv/details/${simlarTV.id}`} className="card-link">See more</Link>
                                </div>
                            </div>
                        </article>
                    ))
                }
            </div>
        </article>
    );
};

export default TVDetails;
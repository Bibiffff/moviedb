import { getNowPlayingMovies, getNowPopularMovies, getNowTopRatedMovies, getNowUpcomingMovies } from "../../APIHandler";
import { useState, useEffect } from "react";
import NowPlaying from "../nowPlaying/NowPlaying";
import NowPopular from "../nowPopular/NowPopular";
import NowTopRated from "../nowTopRated/NowTopRated";
import NowUpcoming from "../nowUpcoming/NowUpcoming";

const Home = () => {
    const [nowPlayingMovies, setNowPlayingMovies] = useState();
    const [nowPopularMovies, setNowPopularMovies] = useState();
    const [nowTopRatedMovies, setNowTopRatedMovies] = useState();
    const [nowTopUpcomingMovies, setNowUpcomingMovies] = useState();



    useEffect(() => {
        const fetchData = async () => {
            setNowPlayingMovies(await getNowPlayingMovies());
        }


        fetchData();
    }, []);


    useEffect(() => {
        const fetchDataPopular = async () => {
            setNowPopularMovies(await getNowPopularMovies());
        }

        fetchDataPopular();
    }, []);


    useEffect(() => {
        const fetchDataTopRated = async () => {
            setNowTopRatedMovies(await getNowTopRatedMovies());
        }

        fetchDataTopRated();
    }, []);


    useEffect(() => {
        const fetchDataUpcoming = async () => {
            setNowUpcomingMovies(await getNowUpcomingMovies());
        }

        fetchDataUpcoming();
    }, []);


    return (
        <>
            <hr />
            <h2 style={{ textAlign: "center" }}>Movies</h2>
            <NowPlaying movieList={nowPlayingMovies?.results} />
            <hr />
            <h2 style={{ textAlign: "center" }}>Popular Movies</h2>
            <NowPopular moviePopular={nowPopularMovies?.results} />
            <hr />
            <h2 style={{ textAlign: "center" }}>Upcoming Movies</h2>
            <NowUpcoming movieUpcoming={nowTopUpcomingMovies?.results} />
            <hr />
            <h2 style={{ textAlign: "center" }}>Top Rated Movies</h2>
            <NowTopRated movieTop={nowTopRatedMovies?.results} />
        </>
    );
};

export default Home;
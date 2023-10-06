import { getNowSeriesAiringToday, getNowSeriesOnTheAir, getNowSeriesPopular, getNowSeriesTopRated } from "../../APIHandler";
import { useState, useEffect } from "react";
import NowTVAiringToday from "../nowTVAiringToday/NowTVAiringToday";
import NowTVOnTheAir from "../nowTVOnTheAir/NowTVOnTheAir";
import NowTVPopular from "../nowTVPopular/NowTVPopular";
import NowTVTopRated from "../nowTVTopRated/NowTVTopRated";

const TV = () => {
    const [nowAiringTodayTV, setNowAiringTodayTV] = useState();
    const [nowOnTheAirTV, setNowOnTheAirTV] = useState();
    const [nowPopularTV, setNowPopularTV] = useState();
    const [nowTopRatedTV, setNowTopRatedTV] = useState();



    useEffect(() => {
        const fetchDataTV = async () => {
            setNowAiringTodayTV(await getNowSeriesAiringToday());
            setNowOnTheAirTV(await getNowSeriesOnTheAir());
            setNowPopularTV(await getNowSeriesPopular());
            setNowTopRatedTV(await getNowSeriesTopRated());
        }


        fetchDataTV();
    }, []);

    // useEffect(() => {
    //     const fetchDataTVOnTheAir = async () => {
    //         setNowOnTheAirTV(await getNowSeriesOnTheAir());
    //     }


    //     fetchDataTVOnTheAir();
    // }, []);

    // useEffect(() => {
    //     const fetchDataTVPopular = async () => {
    //         setNowPopularTV(await getNowSeriesPopular());
    //     }


    //     fetchDataTVPopular();
    // }, []);

    // useEffect(() => {
    //     const fetchDataTVTopRated = async () => {
    //         setNowTopRatedTV(await getNowSeriesTopRated());
    //     }


    //     fetchDataTVTopRated();
    // }, []);


    return (
        <>
            <hr />
            <h2 style={{ textAlign: "center" }}>Airing Today Series</h2>
            <NowTVAiringToday tvAiringToday={nowAiringTodayTV?.results} />
            <hr />
            <h2 style={{ textAlign: "center" }}>On The Air Series</h2>
            <NowTVOnTheAir tvOnTheAir={nowOnTheAirTV?.results} />
            <hr />
            <h2 style={{ textAlign: "center" }}>Popular Series</h2>
            <NowTVPopular tvPopular={nowPopularTV?.results} />
            <hr />
            <h2 style={{ textAlign: "center" }}>Top Rated Series</h2>
            <NowTVTopRated tvTopRated={nowTopRatedTV?.results} />
        </>
    );
};

export default TV;
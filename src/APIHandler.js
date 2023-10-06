const bearerToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGZjMTgxY2U5ODUyNDVmODYzZDcyYmZmYTAyNDhlZCIsInN1YiI6IjY0ZWM0N2JlYzYxM2NlMDBlYWE5ZTZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SDa24tPg8e6aAGF_NqwiNHt4v8Yy7YDhwt3DrWApTno";

//______________________________________________

export const getNowPlayingMovies = async () => {
    const result = await fetch("https://api.themoviedb.org/3/movie/now_playing", {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=uft-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}


export const getNowPopularMovies = async () => {
    const result = await fetch("https://api.themoviedb.org/3/movie/popular", {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=uft-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}


export const getNowTopRatedMovies = async () => {
    const result = await fetch("https://api.themoviedb.org/3/movie/top_rated", {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=uft-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

export const getNowUpcomingMovies = async () => {
    const result = await fetch("https://api.themoviedb.org/3/movie/upcoming", {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=uft-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

//______________________________________________

//async 

export const getMovieById = async (id) => {
    const result = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=uft-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

//______________________________________________

export const getSimilarMoviesById = async (id) => {
    const result = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=uft-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

//_____________________________________________

export const getCreditsMoviesById = async (id) => {
    const result = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=uft-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

//____________________________________________

export const getMultiSearchResult = async (query) => {
    const result = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=uft-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

//___________________________________________
//Tv serier

export const getNowSeriesAiringToday = async () => {
    const result = await fetch("https://api.themoviedb.org/3/tv/airing_today", {
        method: "GET",
        headers: {
        "content-type": "application/json; charset=uft-8",
        "authorization": "bearer " + bearerToken
    }
    });

return await result.json();
}

export const getAiringTodaySeriesById = async (id) => {
    const result = await fetch(`https://api.themoviedb.org/3/tv/${id}/airing_today`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=uft-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

//

export const getNowSeriesOnTheAir = async () => {
    const result = await fetch("https://api.themoviedb.org/3/tv/on_the_air", {
        method: "GET",
        headers: {
        "content-type": "application/json; charset=uft-8",
        "authorization": "bearer " + bearerToken
    }
    });

return await result.json();
}

export const getOnTheAirSeriesById = async (id) => {
    const result = await fetch(`https://api.themoviedb.org/3/tv/${id}/on_the_air`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=uft-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

//

export const getNowSeriesPopular = async () => {
    const result = await fetch("https://api.themoviedb.org/3/tv/popular", {
        method: "GET",
        headers: {
        "content-type": "application/json; charset=uft-8",
        "authorization": "bearer " + bearerToken
    }
    });

return await result.json();
}

export const getPopularSeriesById = async (id) => {
    const result = await fetch(`https://api.themoviedb.org/3/tv/${id}/popular`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=uft-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

//
export const getNowSeriesTopRated = async () => {
    const result = await fetch("https://api.themoviedb.org/3/tv/top_rated", {
        method: "GET",
        headers: {
        "content-type": "application/json; charset=uft-8",
        "authorization": "bearer " + bearerToken
    }
    });

return await result.json();
}

export const getSeriesById = async (id) => {
    const result = await fetch(`https://api.themoviedb.org/3/tv/${id}/top_rated`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=uft-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

//TVID

export const getTVById = async (id) => {
    const result = await fetch(`https://api.themoviedb.org/3/tv/${id}`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=uft-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

//TVSimilar

export const getSimilarTVById = async (id) => {
    const result = await fetch(`https://api.themoviedb.org/3/tv/${id}/similar`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=uft-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

//TVCredit

export const getCreditsTVById = async (id) => {
    const result = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=uft-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

//People


export const getPersonById = async (id) => {
    const result = await fetch (`https://api.themoviedb.org/3/person/${id}`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

// med i - movie + series


export const getPersonMovieCredits = async (id) => {
    const result = await fetch (`https://api.themoviedb.org/3/person/${id}/movie_credits`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

export const getPersonTvCredits = async (id) => {
    const result = await fetch (`https://api.themoviedb.org/3/person/${id}/tv_credits`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}


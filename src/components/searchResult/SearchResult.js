import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMultiSearchResult } from "../../APIHandler";
import { validateImage } from "../../Tools";

const SearchResult = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchResult, setSearchResult] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setSearchResult(await getMultiSearchResult(searchParams.get("query")));
        }

        fetchData();
    }, [searchParams.get("query")]);

    //handle halløj
    const handleImageByMediaType = (multi) => {
        const media = multi.media_type;
        if (media === "tv" || media === "movie") {
            return multi.poster_path;
        }
        else if (media === "person") {
            return multi.profile_path;
        }

        return "N/A";
    }

    const handleTitleByMediaType = (multi) => {
        const media = multi.media_type;
        if (media === "tv" || media === "person") {
            return multi.name;
        }
        else if (media === "movie") {
            return multi.title;
        }

        return "N/A";
    }

    //Link i multi halløj

    const handleLinkByMediaType = (multi) => {
        const media = multi.media_type;
        if (media === "movie") {
            return `/movie/details/${multi.id}`;
        }
        else if (media === "tv" ){
            return `/tv/details/${multi.id}`;
        }
        else if (media === "person") {
            return `/person/details/${multi.id}`;
        }
        return "N/A";
    }

    return (
        <section className="row g-3">
            {
                searchResult?.results.map(multi => (
                    <article className="col-sm-6 col-md-4 col-lg-2">
                        <div className="card w-100" >
                            <img src={validateImage("https://image.tmdb.org/t/p/w500", handleImageByMediaType(multi))} className="card-img-top" alt="..." />
                            <div className="card-body" style={{ height: 250 }}>
                                <h5 className="card-title">{handleTitleByMediaType(multi)}</h5>
                                <p className="card-text limit-multi-overview ">{multi.overview?.length > 60 ? (multi.overview.substring(0, 60) + "...") : multi.overview}</p>
                                <Link to={handleLinkByMediaType(multi)} className="btn btn-primary w-100 m-auto">See more</Link>
                            </div>
                        </div>
                    </article>
                ))
            }
        </section>
    );
};

export default SearchResult;
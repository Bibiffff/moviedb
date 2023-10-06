import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";


const Pagination = ({ movieList, data, itemsPerPage = 5 }) => {
    const [currentPage, setCurrentPage] = useState(1);
    // if (data == undefined) {
    //     return
    // }

    if (movieList === undefined) {
        return (
            <section className="row">
                <div className="col-12">
                    <h1>No Movies...</h1>
                </div>
            </section>
        )
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    //slice out the current page 
    const currentData = data.slice(startIndex, endIndex);
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    }

    const generateTableData = () => {
        let htmlResult = [];
        currentData.forEach(item => (
            htmlResult.push(<div>{item.movie.id}</div>)
        ));
        return htmlResult;
    }

    return (
        <section className="row g-3" >
            {
                movieList.map((movie) => (
                    
                        <article key={movie.id} style={{ fontSize: "20px", }} className="col-sm-6 col-md-3 col-lg-2">
                            <div className="card" style={{ width: "100%" }}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    style={{ width: "100%", objectFit: "cover" }}
                                    className="img-fluid" />
                                <div className="card-body">
                                    <h1 className="card-title" style={{ fontSize: "1em" }} >{movie.title}</h1>
                                    <hr className="m-0" />
                                    <p className="card-text overflow-hidden" style={{ height: 200 }}>{movie.overview}</p>
                                    <Link to={`/movie/details/${movie.id}`} className="btn btn-primary">Go somewhere</Link>
                                </div>

                            </div>
                            <div>
                                {generateTableData()}
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <button onClick={() => handlePageChange(currentPage - 1)} className="btn btn-primary">Preview</button>
                                <button onClick={() => handlePageChange(currentPage + 1)} className="btn btn-success">Next</button>
                            </div>
                        </article>
                ))
            }
        </section>
    );
};

export default Pagination;



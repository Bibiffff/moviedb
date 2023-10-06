import React from "react";
import { Link } from "react-router-dom";

const NowTVPopular = ({ tvPopular }) => {

    if (tvPopular === undefined) {
        return (
            <section className="row">
                <div className="col-12">
                    <h1>No Series...</h1>
                </div>
            </section>
        )
    }

    return (
        <section className="row g-3">
            {
                tvPopular.map((tv, i) => (
                    i < 4 ?
                        <article key={tv.id} style={{ fontSize: "20px", }} className="col-sm-6 col-md-3">
                            <div className="card" style={{ width: "100%" }}>
                                <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                                    style={{ width: "100%", objectFit: "cover" }}
                                    className="img-fluid" />
                                <div className="card-body">
                                    <h1 className="card-title" style={{ fontSize: "1em" }} >{tv.name}</h1>
                                    <hr className="m-0" />
                                    <p className="card-text overflow-hidden" style={{ height: 200 }}>{tv.overview}</p>
                                    <Link to={`/tv/details/${tv.id}`} className="btn btn-primary">Go somewhere</Link>
                                </div>

                            </div>
                        </article>
                        : <React.Fragment key={tv.id}></React.Fragment>
                ))
            }
        </section>
    );
};

export default NowTVPopular;
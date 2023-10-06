import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Nav = () => {
    const [query, setQuery] = useState();
    const navigate = useNavigate();


    const handleFormChange = (event) => {
        const value = event.target.value;
        setQuery(value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        navigate("/searchresult?query=" + query);

    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link to="/" className="navbar-brand" >The Movie DB</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#movie-db-nav" aria-controls="movie-db-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="movie-db-nav">
                    <div className="navbar-nav me-auto">
                        <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                        <Link to="/tv" className="nav-link">TV</Link>
                        <Link to="/" className="nav-link">Home</Link>
                        {/* <Link to="/" className="nav-link disabled" aria-disabled="true">Disabled</Link> */}
                    </div>
                    <form className="d-flex" role="search" onChange={handleFormChange} onSubmit={handleFormSubmit}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" required />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
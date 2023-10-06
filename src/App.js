//CSS
import "./app.scss";

import Home from "./components/home/Home";
import MovieDetails from "./components/movieDetails/MovieDetails";

import TV from "./components/tv/TV";
import TVDetails from "./components/tvDetails/TVDetails";

import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResult from "./components/searchResult/SearchResult";
import PersonDetails from "./components/personDetails/PersonDetails";


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/details/:movieId" element={<MovieDetails />}/>
          <Route path="/person/details/:personId" element={<PersonDetails />}/>
          <Route path="/searchresult"  element={<SearchResult />}/>
          <Route path="/tv"  element={<TV />}/>
          <Route path="/tv/details/:tvId" element={<TVDetails />}/>
          <Route path="*" element={<>HTTP 404 - The page you were looking for does not exist.</>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

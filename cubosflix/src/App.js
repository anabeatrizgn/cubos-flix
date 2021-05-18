import "./App.css";
import Movies from "./dados/data.js";
import { useState } from "react";
import { Header } from "./componentes/Header";
import { Banner } from "./componentes/Banner";
import { Filter } from "./componentes/Filter";
import { MovieCard } from "./componentes/Movie-Cards";
import { MovieBag } from "./componentes/Bag";


function App() {
  const [filmes, setFilmes] = useState(Movies);
  const [addFilme, setAddFilme] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);
  const [filtrosAdicionados, setFiltrosAdicionados] = useState(["all"]);

  Movies.sort((a, b) => b.starsCount - a.starsCount);
  const topMovies = Movies.slice(0, 5);

  function escolherCategoria (filme) {
    const arrayFilmes = [...filtrosAdicionados]
    if(arrayFilmes.includes("all")) return filme
    if(!arrayFilmes.includes("all")) {
      if(arrayFilmes.some(categoria => filme.categories.includes(categoria))) {
        return filme
      }
    }
  }

  return (
    <div className="App">
      <Header setFilmes={setFilmes}/>
        <Banner valorTotal={valorTotal} setValorTotal={setValorTotal}/>
      <div className="outdoors">
        <h3>Top Filmes</h3>
        <div className="top-filmes">
          {topMovies.map((movie) => (
            <MovieCard movie={movie} addFilme={addFilme} setAddFilme={setAddFilme} valorTotal={valorTotal} setValorTotal={setValorTotal}/>
          ))}
        </div>
      </div>
      <div className="filmes">
        <h3>Filmes</h3>
        <Filter filtrosAdicionados={filtrosAdicionados} setFiltrosAdicionados={setFiltrosAdicionados}/>
        <div className="escolher-filmes">
          {filmes.filter(escolherCategoria).map((movie) => (
            <MovieCard movie={movie} addFilme={addFilme} setAddFilme={setAddFilme} valorTotal={valorTotal} setValorTotal={setValorTotal}/>
          ))}
        </div>
      </div>
      <MovieBag addFilme={addFilme} setAddFilme={setAddFilme} valorTotal={valorTotal} setValorTotal={setValorTotal}/>
    </div>
  );
}

export default App;

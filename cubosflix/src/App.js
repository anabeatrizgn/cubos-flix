import "./App.css";
import Movies from "./data.js";
import { useState, useEffect } from "react";
import { MovieCard } from "./componentes/movie-cards";
import { Banner } from "./componentes/banner";
import { MovieBag } from "./componentes/sacola";

const filtros = [
  {
    nome: "Todos",
    checkado: true,
    categorias: ["horror", "action", "romance", "science fiction"]
  },
  {
    nome: "Ação",
    checkado: false,
    categorias: "action"
  },
  {
    nome: "Romance",
    checkado: false,
    categorias: "romance"
  },
  {
    nome: "Ficção",
    checkado: false,
    categorias: "science fiction"
  },
  {
    nome: "Terror",
    checkado: false,
    categorias: "horror"
  },
];


function App() {
  const [filmes, setFilmes] = useState(Movies);
  const [filtrosAdicionados, setFiltrosAdicionados] = useState(filtros[0].nome);
  const [valorPesquisa, setValorPesquisa] = useState("");
  const [addFilme, setAddFilme] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);


  Movies.sort((a, b) => b.starsCount - a.starsCount);
  const topMovies = Movies.slice(0, 5);


  useEffect (() => {
    if(filtrosAdicionados === "Todos") {
      setFilmes(Movies);
    } else {
      const whichFilter= filtros.find(filtro => filtro.nome === filtrosAdicionados);
      const whichMovie = Movies.filter(movie => movie.categories.includes(whichFilter.categorias));
      setFilmes(whichMovie);
    }
  }, [filtrosAdicionados])

  function handleSearchMovie(e) {
    const movieName = Movies.filter((movies) =>
      movies.title.includes(valorPesquisa)
    );
    e.preventDefault();
    setFilmes(movieName);
  }


  return (
    <div className="App">
      <header className="cabecalho">
        <img src="/logo.svg" alt="logo" />
        <div className="pai-pesquisa">
          <form id="pesquisar-filme">
            <input
              type="text"
              placeholder="Pesquise filtros..."
              onChange={(e) => setValorPesquisa(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearchMovie(e)}
            />
          </form>
          <button
            type="button"
            form="pesquisar-filme"
            onClick={(e) => handleSearchMovie(e)}
            className="pesquisa"
          >
            <img src="/search-icon.svg" alt="icone-pesquisa" />
          </button>
        </div>
        <button className="favoritos">
          <img src="/bookmark-icon.svg" alt="icone-favoritos" />
          Favoritos
        </button>
        <button className="promocao">
          <img src="/promotion-icon.svg" alt="icone-promocao" />
          Promoções
        </button>
        <div className="login">
          Bem-vinda Ana Beatriz{" "}
          <img className="profile" src="/anabeatriz.jpg" alt="usuário" />
        </div>
      </header>
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
        <div className="filtros">
          {filtros.map((filtro) => (
            <button
              onClick={() => setFiltrosAdicionados(filtro.nome)}
              className={
                filtrosAdicionados === filtro.nome ? "botao-filtro selecionado" : "botao-filtro"
              }
            >
              {filtro.nome}
            </button>
          ))}
        </div>
        <div className="escolher-filmes">
          {filmes.map((movie) => (
            <MovieCard movie={movie} addFilme={addFilme} setAddFilme={setAddFilme} valorTotal={valorTotal} setValorTotal={setValorTotal}/>
          ))}
        </div>
      </div>
      <MovieBag addFilme={addFilme} setAddFilme={setAddFilme} valorTotal={valorTotal} setValorTotal={setValorTotal}/>
    </div>
  );
}

export default App;

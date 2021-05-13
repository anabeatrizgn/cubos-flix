import "./App.css";
import Movies from "./data.js";
import { useState, useEffect } from "react";
import { MovieCard } from "./componentes/movie-cards";

const filtros = [
  {
    nome: "Todos",
    checkado: true,
  },
  {
    nome: "Ação",
    checkado: false,
  },
  {
    nome: "Romance",
    checkado: false,
  },
  {
    nome: "Ficção",
    checkado: false,
  },
  {
    nome: "Terror",
    checkado: false,
  },
];

function App() {
  const [contagem, setContagem] = useState(10 * 60);
  const minutos = String(Math.floor(contagem / 60)).padStart(2, "0");
  const segundos = String(Math.floor(contagem % 60)).padStart(2, "0");

  const [filmes, setFilmes] = useState(Movies);
  Movies.sort((a, b) => b.starsCount - a.starsCount);
  const topMovies = Movies.slice(0, 5);

  const [filtrosAdicionados, setFiltrosAdicionados] = useState([]);
  const [valorPesquisa, setValorPesquisa] = useState("");

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setContagem((tempoContando) => {
          if (tempoContando > 0) {
            return tempoContando - 1;
          } else {
            return 0;
          }
        }),
      1000
    );
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function handleSearchMovie(e) {
    const movieName = Movies.filter((movies) =>
      movies.title.includes(valorPesquisa)
    );
    e.preventDefault();
    setFilmes(movieName);
  }

  function filtrarFilmes(filtro) {
    const arrayLocal = [...filtrosAdicionados];
    filtro.checkado = !filtro.checkado;
    if (filtro.nome !== "Todos") {
      console.log(arrayLocal);
      if (arrayLocal.includes("Todos")) {
        filtros[0].checkado = false;
        const indexDaCategoria = arrayLocal.findIndex(
          (categoria) => categoria === "Todos"
        );
        arrayLocal.splice(indexDaCategoria, 1);
      }
    }

    if (filtro.checkado) {
      if (!arrayLocal.includes(filtro.nome)) {
        setFiltrosAdicionados([...arrayLocal, filtro.nome]);
      }
    } else {
      if (arrayLocal.includes(filtro.nome)) {
        const indexDaCategoria = arrayLocal.findIndex(
          (categoria) => categoria === filtro.nome
        );
        arrayLocal.splice(indexDaCategoria, 1);
        setFiltrosAdicionados([...arrayLocal]);
      }
    }
    if (arrayLocal.length === 0) {
      filtros[0].checkado = true;
      console.log(filtros, "final");
      setFiltrosAdicionados(["Todos"]);
    }
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
      {filtrosAdicionados}
      {contagem > 0 && (
        <div className="adds">
          <div className="add-cupom">
            <h1>Aproveite agora:</h1>
            <div className="cupom">
              <img src="/coupon-circle-icon.svg" alt="icone-cupom" />
              <p className="codigo-cupom">CUPOM: htmlnaoelinguagem</p>
            </div>
          </div>
          <div className="add-cronometro">
            <h2>Finaliza em:</h2>
            <div className="timer">
              <img src="/time-icon.svg" alt="icone-relogio" />
              <p className="codigo-cupom">
                00:{minutos}:{segundos}
              </p>
            </div>
          </div>
          <img
            className="icone-dinheiro"
            src="/money.png"
            alt="ilustracao-dinheiro"
          />
        </div>
      )}
      <div className="outdoors">
        <h3>Top Filmes</h3>
        <div className="top-filmes">
          {topMovies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
      <div className="filmes">
        <h3>Filmes</h3>
        <div className="filtros">
          {filtros.map((filtro) => (
            <button
              key={filtro.nome}
              onClick={() => filtrarFilmes(filtro)}
              className={
                filtro.checkado ? "botao-filtro selecionado" : "botao-filtro"
              }
            >
              {filtro.nome}
            </button>
          ))}
        </div>
        <div className="escolher-filmes">
          {filmes.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
      <div className="card">
        <header className="header-card">
          <img
            className="imagem-titulo-card"
            src="/bag-icon.svg"
            alt="icone-sacola"
          />
          <h4 className="titulo-card">Sacola</h4>
        </header>
        <h4>Sua sacola está vazia</h4>
        <h5>Adicione filmes agora</h5>
        <img src="/person-illustration.svg" alt="ilustracao-pessoa-logo" />
        <form className="form-cupom">
          <label>Insira sem Cupom</label>
          <input
            className="input-cupom"
            type="text"
            placeholder="Cupom de desconto"
          />
        </form>
      </div>
    </div>
  );
}

export default App;

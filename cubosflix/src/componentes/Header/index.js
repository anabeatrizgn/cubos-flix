import "./style.css";
import { useState } from 'react'
import Movies from "../../dados/data";

export function Header ({setFilmes}) {
    const [valorPesquisa, setValorPesquisa] = useState("");

    function handleSearchMovie(e) {
        const movieName = Movies.filter((movies) =>
          movies.title.includes(valorPesquisa)
        );
        e.preventDefault();
        setFilmes(movieName);
      }

    return (
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
    )
}
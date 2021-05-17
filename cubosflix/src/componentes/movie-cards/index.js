import "./style.css";
import { ReactComponent as Star } from "../../assets/star.svg";
import { useState } from "react";

export function MovieCard({ movie, addFilme, setAddFilme, valorTotal, setValorTotal}) {
  const [avaliar, setAvaliar] = useState(false);

  function handleAdicionarFilmeSacola () {
    let valor = valorTotal
    const filmeNaSacola = addFilme.find(filme => filme.nome === movie.title);
    if (filmeNaSacola) {
      filmeNaSacola.quantidade++
      setValorTotal(valor + filmeNaSacola.preco);
      setAddFilme([...addFilme]);
    } else {
    const novoFilme = {poster: movie.backgroundImg, nome: movie.title, preco: movie.price, quantidade: 1 };
    setValorTotal(valor + novoFilme.preco);
    setAddFilme([...addFilme, novoFilme]);
    }
  }

  return (
    <div
      className="lista-filmes"
      style={{
        backgroundImage: `url(${movie.backgroundImg})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="filtro-infos">
        <Star
          className={avaliar ? "estrela estrelado" : "estrela"}
          onClick={() => setAvaliar(!avaliar)}
        />
        <div className="avaliacao-compra">
          <div className="identificacao-filme">
            <h2>{movie.title}</h2>
            <div className="avaliacao-filme">
              <img src="/golden-star.svg" alt="estrela-dourada" />
              <p className="quantidade-estrelas">{movie.starsCount}</p>
            </div>
          </div>
          <button className="comprar-filme" type="button" onClick={handleAdicionarFilmeSacola}>
            <p className="sacola-botao">Sacola</p>
            <p className="valor-filme">R$ {movie.price}</p>
          </button>
        </div>
      </div>
    </div>
  );
}

import "./style.css";
import { ReactComponent as Star } from "../../assets/star.svg";
import { useState } from "react";

export function MovieCard({ movie }) {
  const [avaliar, setAvaliar] = useState(false);
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
          <button className="comprar-filme" type="button">
            <p className="sacola-botao">Sacola</p>
            <p className="valor-filme">R$ {movie.price}</p>
          </button>
        </div>
      </div>
    </div>
  );
}

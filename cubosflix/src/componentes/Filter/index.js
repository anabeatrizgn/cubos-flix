import "./style.css";
import Filtros from "../../dados/filtros.js";

export function Filter ({filtrosAdicionados, setFiltrosAdicionados}) {

function filtrarFilmes(filtro) {
  const arrayFiltros = [...filtrosAdicionados];
        filtro.checkado = !filtro.checkado;
    
        if (filtro.nome !== "Todos") {
          if (arrayFiltros.includes("all")) {
            Filtros[0].checkado = false;
            const indexDaCategoria = arrayFiltros.findIndex(
              (categoria) => categoria === "all"
            );
  
            arrayFiltros.splice(indexDaCategoria, 1);
            setFiltrosAdicionados([...arrayFiltros]);
          }
        } else {
          Filtros.map(filtro => filtro.checkado = false);
          arrayFiltros.splice(0, arrayFiltros.length)
          Filtros[0].checkado = true
          setFiltrosAdicionados(["all"]);

        }
  
        if (filtro.checkado) {
          if (!arrayFiltros.includes(filtro.categorias)) {
            arrayFiltros.push(filtro.categorias)
            setFiltrosAdicionados([...arrayFiltros]);
          }
    
        } else {
          if (arrayFiltros.includes(filtro.categorias)) {
            const indexDaCategoria = arrayFiltros.findIndex(
              (categoria) => categoria === filtro.categorias
            );
            arrayFiltros.splice(indexDaCategoria, 1);
            setFiltrosAdicionados([...arrayFiltros]);
          }
        }
        if (arrayFiltros.length === 0) {
          Filtros[0].checkado = true
          setFiltrosAdicionados(["all"]);
        }
  }

    return (
      <div className="filtros">
      {Filtros.map((filtro) => (
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
    )
}
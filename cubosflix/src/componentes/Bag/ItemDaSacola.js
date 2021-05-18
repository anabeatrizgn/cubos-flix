import "./ItemDaSacola.css";
import { ReactComponent as Trash } from "../../assets/trash-icon.svg";
import { ReactComponent as Minus } from "../../assets/minus-icon.svg";
import { ReactComponent as Plus } from "../../assets/plus-icon.svg";

export function ItemDaSacola ({addFilme, deletarFilme, colocarNaSacola }) {

  function handleAumentarQuant () {
    colocarNaSacola(addFilme.nome);
  }

function handleDiminuirQuant () {
    deletarFilme(addFilme.nome)
}
    return(
        <div className="item-sacola">
      <div
        className="filme-escolhido"
        style={{
          backgroundImage: `url(${addFilme.poster})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="filme-infos">
        <p className="nome-filme">{addFilme.nome}</p>
        <p className="preco-filme">R${addFilme.preco}</p>
      </div>
      <div className="filme-quantidade">
        <button className='bg-transparente' onClick={handleAumentarQuant}>
          <Plus />
        </button>
        <p className="quantidade-compra">{addFilme.quantidade}</p>
        <button className='bg-transparente' onClick={handleDiminuirQuant}>
          {addFilme.quantidade === 1 ? <Trash /> : <Minus />}
        </button>
      </div>
    </div>
    )
}
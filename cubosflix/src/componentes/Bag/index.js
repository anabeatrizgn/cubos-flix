import "./style.css";
import { ListaDeItens } from "./ListaDeItens";


export function MovieBag({ movie, addFilme, setAddFilme, valorTotal, setValorTotal}) {

  function handleAppPromotion(e) {
    if (e.target.value !== "htmlnaoelinguagem" && e.key !== "Enter") return
    let valor = valorTotal;
       valor -= valor*0.1;

      e.preventDefault();
      setValorTotal(valor);
 
  }

  return (
    <div className="card">
    <header className="header-card">
      <img
        className="imagem-titulo-card"
        src="/bag-icon.svg"
        alt="icone-sacola"
      />
      <h4 className="titulo-card">Sacola</h4>
    </header>
    {addFilme.length === 0 ? (<div>
    <h4>Sua sacola está vazia</h4>
    <h5>Adicione filmes agora</h5>
    <img src="/person-illustration.svg" alt="ilustracao-pessoa-logo" /></div>
    ) : <ListaDeItens movie={movie} addFilme={addFilme} setAddFilme={setAddFilme} valorTotal={valorTotal} setValorTotal={setValorTotal}/>}
    <form className="form-cupom">
      <label>Insira sem Cupom</label>
      <input
        className="input-cupom"
        type="text"
        placeholder="Cupom de desconto"
        onKeyPress={(e) => handleAppPromotion(e)}
      />
    </form>
    {addFilme.length !== 0 && (
      <div className='centralizar-botao'>
        <button type='button' className='finalizar-compra'>Confirme seus dados R$ {valorTotal}</button>
      </div>
    )}
  </div>
  
  );
}

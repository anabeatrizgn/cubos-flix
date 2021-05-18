import "./ListaDeItens.css";

import { ItemDaSacola } from "./ItemDaSacola";

export function ListaDeItens ({ addFilme, setAddFilme, valorTotal, setValorTotal }) {

    function colocarNaSacola(nome) {
        let valor = valorTotal
        const sacola = [...addFilme]
        const adicionarQuantidade = sacola.find(item => item.nome === nome);
        adicionarQuantidade.quantidade++
        setValorTotal(valor + adicionarQuantidade.preco);
        setAddFilme(sacola)
    }

     function deletarFilme(nome) {
        let valor = valorTotal
        const sacola = [...addFilme]
        const diminuirQuantidade = addFilme.find(item => item.nome === nome);
        if(diminuirQuantidade.quantidade > 1) {
          diminuirQuantidade.quantidade--
          setValorTotal(valor - diminuirQuantidade.preco);
          setAddFilme(sacola)
        }else {
            const filmeQueSeraDeletado = addFilme.filter(item => item.nome !== nome);
            const precoDoFilmeDeletado = addFilme.find(item => item.nome === nome)
            setValorTotal(valor - precoDoFilmeDeletado.preco);
            setAddFilme(filmeQueSeraDeletado);
          }
    }

    return (
        <div className={addFilme.length >= 4 ? "tam-lista scroll" : "tam-lista"}>
            <ul>
                {addFilme.map(addFilme => <ItemDaSacola addFilme={addFilme} setAddFilme={setAddFilme} colocarNaSacola={colocarNaSacola} deletarFilme={deletarFilme}/>)}
            </ul>
        </div>
    )
}
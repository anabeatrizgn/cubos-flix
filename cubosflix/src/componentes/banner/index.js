import "./style.css";
import { useState, useEffect } from "react";

export function Banner({setValorTotal, valorTotal}) { 
  const [click, setClick] = useState(false)
    const [contagem, setContagem] = useState(5 * 60);
    const minutos = String(Math.floor(contagem / 60)).padStart(2, "0");
    const segundos = String(Math.floor(contagem % 60)).padStart(2, "0");

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

  function handlePromotion() {
    let valor = valorTotal;
      valor -= valor*0.1;
 
      setValorTotal(valor);
      setClick(true)
  }

    return (<div>{contagem > 0 && !click && (
      <div className="adds" onClick={handlePromotion}>
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
    )}</div>)
}
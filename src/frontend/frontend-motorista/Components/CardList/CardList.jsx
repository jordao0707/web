import React, { useState, useEffect } from 'react'
import { motorista } from '../Form/Form'
import Card from '../Card/Card'
import './CardList.css'
function CardList({ api }) {
  const [passageiros, setPassageiros] = useState([])

  async function updatePassageiro() {
    const response = await api.get("/passageiro");
    setPassageiros(response.data);

  }

  useEffect(() => {
    async function loadPassageiro() {
      let response
      let path
      if (motorista.notificacao !== undefined) {
        let notificacao = motorista.notificacao;
        path = "/passageiro?";
        for (let i = 0; i < notificacao.length; i++) {
          if (i === notificacao.length - 1) {
            path += `id=${notificacao[i]}`
          } else {
            path += `id=${notificacao[i]}&`
          }
        }
        if (path !== "/passageiro?") {
          response = await api.get(`${path}`);
          setPassageiros(response.data)
        }
      }
    }
    const timer = setInterval(() => {
      loadPassageiro();
    }, 1000);
    return () => clearInterval(timer);
  }, [api]);

  return (
    <div className='dp'>
      <h2>Passageiros Disponiveis</h2>
      <button className="ref" onClick={updatePassageiro}>Refresh</button>
      <div className="cl">
        {
          passageiros.map((passageiro) => (
            <Card
              key={passageiro.id}
              passageiro={passageiro}
              api={api}
            />
          )
          )
        }
      </div>
    </div>
  )
}


export { CardList };
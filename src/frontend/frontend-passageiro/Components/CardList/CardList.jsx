import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import './CardList.css'
import { passageiro } from '../Form/Form'

function CardList({ api }) {
  const [motoristas, setMotoristas] = useState([])
  async function updateMotorista() {
    const response = await api.get("/motorista");
    setMotoristas(response.data);
  }
  useEffect(() => {
    async function loadMotorista() {
      const response = await api.get("/motorista");
      setMotoristas(response.data);
      if(passageiro.aceito !== null & passageiro.aceito !== undefined){
        alert(`Sua viagem foi aceita pelo motorista de id: ${passageiro.aceito}`)
        passageiro.aceito = null
      }
    }
    const timer = setInterval(() => {
      loadMotorista();
    }, 1000);
    return () => clearInterval(timer);
  }, [api]);

  return (
    <div className='dp'>
      <h2>Motoristas Disponiveis</h2>
      <button className="ref" onClick={updateMotorista}>Refresh</button>
      <div className="cl">
        {
          motoristas.map((motorista) => (
            <Card
              key={motorista.id}
              motorista={motorista}
              api={api}
            />
          )
          )
        }
      </div>
    </div>
  )
}


export { CardList }//,exportmotorista};
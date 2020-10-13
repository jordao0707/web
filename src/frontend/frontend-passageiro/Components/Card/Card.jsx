import React from 'react'
import './Card.css'
import {passageiro} from '../Form/Form'
function Card({ api, motorista }) {

    async function notificar(e) {
        e.preventDefault()
        if(passageiro.id !== null & passageiro.id !== undefined ){
            motorista.notificacao.push(passageiro.id)
            console.log(passageiro.id)
            await api.put(`motorista/${motorista.id}`, motorista)
        }
    }   

    return (
        <div className='card'>
            <strong >{motorista.nome}</strong>
            <p >Id: {motorista.id}</p>
            <p >Placa: {motorista.placa}</p>
            <p >Local atual: {motorista.local}</p>
            <button onClick={notificar} >Pedir carona</button>
        </div>
    )
};
export default Card
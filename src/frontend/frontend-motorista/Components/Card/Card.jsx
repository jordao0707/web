import React from 'react'
import './Card.css'
import { motorista } from '../Form/Form'
function Card({ api, passageiro }) {

    async function notificar(e) {
        e.preventDefault()
        if (motorista.id !== null & motorista.id !== undefined) {
            passageiro.aceito = motorista.id
            await api.put(`passageiro/${passageiro.id}`, passageiro)
        }
    }

    return (
        <div className='card'>
            <strong>{passageiro.nome}</strong>
            <p >Id: {passageiro.id}</p>
            <p >Origem: {passageiro.origem}</p>
            <p >Destino: {passageiro.destino}</p>
            <button onClick={notificar} >Aceitar carona</button>
        </div>
    )
};
export default Card
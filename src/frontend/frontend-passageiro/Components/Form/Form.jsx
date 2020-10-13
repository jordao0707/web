import React, { useState, useEffect } from 'react'
import './Form.css'
let passageiro = {}
function Form({ api }) {

    const [status, setStatus] = useState("");
    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [origem, setOrigem] = useState("");
    const [destino, setDestino] = useState("");

    useEffect(setStatus, [false])

    async function addPassageiro(passageiro) {

        if (passageiro.id === "") {
            const response = await api.post('/passageiro/', passageiro)
            setId(response.data.id)
        } else {
            const response = await api.get(`/passageiro/${passageiro.id}`)
            passageiro.aceito = response.data.aceito
            await api.put(`/passageiro/${passageiro.id}`, passageiro)
            alert("Passageiro cadastrado com sucesso")
        }
        setStatus(true)
    }
    async function delPassageiro(data) {
        await api.delete(`/passageiro/${id}`)

        setStatus(false)
        setId("")
        setNome("")
        setOrigem("")
        setDestino("")
        alert("Sessão encerrada com sucesso")

    }
    async function submitPassageiro(e) {
        e.preventDefault()
        const aceito = null
        passageiro = {
            id,
            nome,
            origem,
            destino,
            aceito
        }
           
        await addPassageiro(passageiro)
        
    }

    return (
        <div className='formall'>
            <h3>Informações do passageiro</h3>
            <form onSubmit={submitPassageiro}>
                <div className='Login'>
                    <span>Status Login: </span>
                    {status
                        ? <div className="on"><span>Online</span><button type="button" onClick={delPassageiro}>Sair</button></div>
                        : <div className="off"><span>Offline</span></div>
                    }
                </div>
                <div className='inputBlock'>
                    <p>Seu id</p>
                    <input
                        type="number"
                        name="id"
                        value={id}
                        onChange={(e) => (setId(e.target.value))}
                    />
                </div>
                <div className='inputBlock'>
                    <p>Nome</p>
                    <input
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={(e) => (setNome(e.target.value))}
                    />
                </div>
                <div className='inputBlock'>
                    <p>Origem</p>
                    <input
                        type="text"
                        name="origem"
                        value={origem}
                        onChange={(e) => (setOrigem(e.target.value))}
                    />
                </div>
                <div className='inputBlock'>
                    <p>Destino</p>
                    <input
                        type="text"
                        name="Destino"
                        value={destino}
                        onChange={(e) => (setDestino(e.target.value))}
                    />
                </div>
                <button type="submit"> Confirmar</button>
            </form>
        </div>
    )
}

export { Form, passageiro };
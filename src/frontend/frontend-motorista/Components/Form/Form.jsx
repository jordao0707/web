import React, {useState,useEffect} from 'react'
import './Form.css'
let motorista = {}
function Form({api}) {

    const [status , setStatus] = useState(false);
    const [id , setId] = useState("");
    const [nome , setNome] = useState("");
    const [placa , setPlaca] = useState("");
    const [local , setLocal] = useState("");
    
    useEffect(setStatus,[false])
    
    async function addMotorista(motorista){

        if(motorista.id === ""){
            const response = await api.post('/motorista/',motorista)
            setId(response.data.id)
        }else{
            const response = await api.get(`/motorista/${motorista.id}`)
            motorista.notificacao = response.data.notificacao        
            await api.put(`/motorista/${motorista.id}`,motorista)
            alert("motorista Cadastrado com sucesso")   
        }
        setStatus(true)
    }
    async function delMotorista(data){
        await api.delete(`/Motorista/${id}`)
        
        setStatus(false)
        setId ("")
        setNome ("")
        setPlaca("")
        setLocal("")
        alert("Sessão encerrada com sucesso")  
        
    }
    async function submitMotorista(e){
        e.preventDefault()
        let notificacao = []
        motorista = {
            id,
            nome,
            placa,
            local,
            notificacao
        }
        addMotorista(motorista)  
    }

    return (
        <div className= 'formall'>
            <h3>Informações do Motorista</h3>
            <form onSubmit = {submitMotorista}>
                <div className = 'Login'>
                    <span>Status Login: </span>
                    { status 
                        ? <div className = "on"><span>Online</span><button type = "button" onClick = {delMotorista}>Sair</button></div>
                        : <div className = "off"><span>Offline</span></div>
                    } 
                </div>
                <div className = 'inputBlock'>
                    <p>Seu id</p>
                    <input 
                        type="number"
                        name = "id"
                        value = {id} 
                        onChange = {(e) => (setId(e.target.value))}
                        />
                </div>
                <div className = 'inputBlock'>
                    <p>Nome</p>
                    <input 
                        type="text"
                        name = "nome"
                        value = {nome} 
                        onChange = {(e) => (setNome(e.target.value))}
                        />
                </div>
                <div className = 'inputBlock'>
                    <p>Placa</p>
                    <input 
                        type="text"
                        name = "placa"
                        value = {placa} 
                        onChange = {(e) => (setPlaca(e.target.value))}
                        />
                </div>
                <div className = 'inputBlock'>
                    <p>Local</p>
                    <input 
                        type="text"
                        name = "local"
                        value = {local} 
                        onChange = {(e) => (setLocal(e.target.value))}
                        />
                </div>
                <button type = "submit"> Confirmar</button>
            </form>
        </div>
    )
}

export  {Form,motorista};
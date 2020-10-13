import React from 'react'
import {CardList} from './Components/CardList/CardList'
import {Form} from './Components/Form/Form'
import api from './service/api'
import './App-motorista.css'
function AppMotorista(){
    
    return (
        <div className="app">
            <Form api = {api}/>
            <CardList api = {api}/>
        </div>
    );
}
export default AppMotorista

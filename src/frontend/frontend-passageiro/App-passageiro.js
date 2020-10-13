import React from 'react'
import {CardList} from './Components/CardList/CardList'
import {Form} from './Components/Form/Form'
import api from './service/api'
import './App-passageiro.css'
function AppPassageiro(){
   
    return (
        <div className="app">
            <Form api = {api}/>
            <CardList api = {api}/>
        </div>
    ); 
}
export default AppPassageiro
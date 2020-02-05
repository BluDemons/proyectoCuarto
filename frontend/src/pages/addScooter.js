import Sidebar from '../components/sidebar';
import Header from '../components/header';
import React, { Component } from 'react';
import axios from 'axios'
const API_URL = "http://localhost:3000/api/scooter";

class AddsScooter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            descripcion: '',
            estado: '',
            codigo: ''
        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler=(e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post(API_URL,this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(e=>{
            console.log(e)
        })
    }
    render() {
        const { descripcion, estado, codigo } = this.state
        return (
            <div>
                <Sidebar />,
                <Header />,
                <form onSubmit={this.submitHandler}>  
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                        <div className="-xl-3 md:flex sm-6">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Descripcion</label>
                                <textarea className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                    name="descripcion"
                                    value={descripcion}
                                    onChange={this.changeHandler}></textarea>
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <select 
                                    name="estado"
                                    value={estado}
                                    onChange={this.changeHandler}>
                                    <option value="2">Desocupado</option>
                                    <option value="1">Ocupado</option>
                                </select>
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Codigo</label>
                                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                    name="codigo"
                                    value={codigo}
                                    onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded" type="submit">Guadar</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddsScooter;
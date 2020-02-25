/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import axios from "axios";
import { Link } from "react-router-dom";

const API = "http://localhost:5000/thws/scooter";

class Scooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scooter: []
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount = e => {
      axios
        .get(API)
        .then(response => {
          this.setState({ scooter: response.data.datos });
        })
        .catch(error => {
          console.log(error);
        });
  };

  deleteData = value => {
    axios.delete(`${API}?id=${value}`, {
      data: { id: value }
    });
    window.location.assign("http://localhost:3000/scooter");
  };

  editarScooters=(s_id,s_imagen,s_descripcion,s_estado,s_codigo)=>{
    localStorage.setItem('id',s_id);
    localStorage.setItem('imagen',s_imagen);
    localStorage.setItem('descripcion',s_descripcion);
    localStorage.setItem('estado',s_estado);
    localStorage.setItem('codigo',s_codigo);
    this.props.history.push('/editScooter')
  }

  render() {
    const { scooter } = this.state;
    return (
      <div>
        <Sidebar />
        <Header />
        <div className="md:ml-64 xl:ml-64 sm:ml-6 pt-6 pb-8">
          <div className="justify-between flex my-0 select-none">
            <h1 className="ml-12 text-center mr-10 text-5xl">
              Scooters
            </h1>
            <Link to="/gestion_scooter">
            <button
              type="button"
              className="mr-8 shadow-md no-underline font-black rounded-full h-12 w-12 flex items-center justify-center bg-green-400 text-white border-blue btn-primary hover:text-white hover:bg-green-600 focus:outline-none active:shadow-none"
            >
                Add
            </button>
            </Link>
          </div>
          <div className="p-24 flex flex-wrap items-center justify-center">
            {scooter.map(element => (
              <div
                className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg"
                key={element.id}
              >
                <div className="relative pt-10 px-10 flex items-center justify-center">
                  <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                  <img className="block w-40 h-50" src={element.imagen}/>
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                  <div className=" justify-between">
                    <span className="block font-semibold text-sm">
                    Descripción: {element.descripcion}
                    </span>
                    <span className="block font-semibold text-sm">
                      Estado: {element.estado}
                    </span>
                    <span className="block font-semibold text-sm">
                      Código: {element.codigo}
                    </span>
                    <div className="flex justify-between">
                      <Link to="/editScooter">
                        <span 
                        className="justify-between bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center"
                        onClick={()=>this.editarScooters(element.id,element.imagen,element.descripcion,element.estado,element.codigo)}
                        >
                          Editar
                        </span>
                      </Link>
                      <span
                        className="cursor-pointer justify-between bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center"
                        onClick={() => this.deleteData(element.id)}
                      >
                        Borrar
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Scooter;

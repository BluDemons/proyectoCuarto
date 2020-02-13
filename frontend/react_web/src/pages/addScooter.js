import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { Link } from "react-router-dom";
import axios from "axios";

const API = "http://localhost:5000/thws/scooter";

class AddScooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descripcion: "",
      estado: 1,
      codigo: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveData = e => {
    e.preventDefault();
    this.post = {
      datos: {
        descripcion: this.state.descripcion,
        estado: this.state.estado,
        codigo: this.state.codigo
      }
    };

    console.log(JSON.stringify(this.post.datos));

    if (
      this.post.datos.descripcion === "" ||
      this.post.datos.estado === "" ||
      this.post.datos.codigo === ""
    ) {
      alert("Complete todos los campos para continuar...");
    } else {
      axios
        .post(API, this.post)
        .then(response => {
          if (response.data.ok === true) {
            alert("Agregado exitosamente");
            window.location.assign("http://localhost:3000/scooter");
          }
        })
        .catch(error => {
          alert(error);
        });
    }
  };

  render() {
    const { descripcion, estado, codigo } = this.state;
    return (
      <div>
        <Sidebar />
        <Header />
        <div className="md:ml-64 xl:ml-64 sm:ml-0 pt-6 pb-8">
          <div className=" md:left-0 leading-loose">
            <form
              className="md:mr-0 m-4 p-10 bg-white rounded shadow-xl"
              onSubmit={this.saveData}
            >
              <p className="text-gray-800 font-medium">
                Crear nuevo Dispositivo
              </p>
              <div className="">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="descripcion"
                >
                  Descripción
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="descripcion"
                  name="descripcion"
                  type="text"
                  required={true}
                  value={descripcion}
                  placeholder="Añade una descripción"
                  onChange={this.changeHandler}
                />
              </div>
              <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3 mb-6 md:mb-0">
                <label className="block text-sm text-gray-600" htmlFor="codigo">
                  Código:
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="codigo"
                  name="codigo"
                  type="text"
                  required={true}
                  value={codigo}
                  placeholder="generar codigo"
                  onChange={this.changeHandler}
                />
                </div>
                <div className="md:w-full px-3 mb-6 md:mb-0 mt-5">
                <button className=" mx-auto bg-white text-gray-800 font-bold rounded border-b-2 border-teal-500 hover:border-teal-600 hover:bg-teal-500 hover:text-white shadow-md py-2 px-2 inline-flex items-center">
                    <i className="fas fa-qrcode mr-2" />
                    <span>Generar QR</span>
                  </button>
              </div>
              </div>              
              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="estado">
                  Estado
                </label>
                <select
                  className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                  name="estado"
                  onChange={this.changeHandler}
                >
                  <option value={estado}>Desocupado</option>
                  <option >Ocupado</option>
                </select>
              </div>
              <div className="mt-4 flex justify-between">
                <Link to="/scooter">
                  <button className=" mx-auto bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-2 inline-flex items-center">
                    <i className="far fa-times-circle mr-2" />
                    <span>Cancelar</span>
                  </button>
                </Link>
                <button
                  className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-4 inline-flex items-center"
                  type="submit"
                >
                  <span className="mr-2">Guardar</span>
                  <i className="far fa-check-circle" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddScooter;

import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { Link } from "react-router-dom";
import axios from "axios";
import Sweet from 'sweetalert2';


const API = "http://localhost:5000/thws/horario";

class AddHorario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: "",
      precio: "",
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveData = e => {
    e.preventDefault();
    this.post = {
      datos: {
        hora: this.state.hora,
        precio: this.state.precio
      }
    };

    console.log(JSON.stringify(this.post.datos));

    if (
      this.post.datos.hora === "" ||
      this.post.datos.precio === ""
    ) {
      Sweet.fire(
        '',
        'Complete todos los datos para continuar...!'
    )
      axios
        .post(API, this.post)
        .then(response => {
          if (response.data.ok === true) {
            Sweet.fire({
              position: 'center',
              icon: 'success',
              title: 'Actualizado correctamente',
              showConfirmButton: false,
              timer: 1000
          })
            .then( () => this.props.history.push("/horario"));
          }
        })
        .catch(error => {
          alert(error);
        });
    }
  };

  render() {
    const { hora, precio } = this.state;
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
                Crear nuevo Horario
              </p>              
              <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3 mb-6 md:mb-0">
                <label className="block text-sm text-gray-600" htmlFor="hora">
                  Hora:
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="hora"
                  name="hora"
                  type="text"
                  required={true}
                  value={hora}
                  placeholder="Agregue Hora..."
                  onChange={this.changeHandler}
                />
                </div>
                <div className="md:w-full px-3 mb-6 md:mb-0">
                <label className="block text-sm text-gray-600" htmlFor="precio">
                  Precio:
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="precio"
                  name="precio"
                  type="text"
                  required={true}
                  value={precio}
                  placeholder="Agregue un precio..."
                  onChange={this.changeHandler}
                />
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <Link to="/horario">
                  <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-2 inline-flex items-center">
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

export default AddHorario;

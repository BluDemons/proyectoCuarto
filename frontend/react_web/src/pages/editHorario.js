import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { Link } from "react-router-dom";
import axios from "axios";
import Sweet from 'sweetalert2';


const API = "http://localhost:5000/thws/horario";

class EditHorario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:localStorage.getItem('id'),
      precio: localStorage.getItem('precio'),
      hora: localStorage.getItem('hora'),
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateData = e => {
    e.preventDefault();
      this.update = {
        datos: [{
          id: this.state.id,
          precio: this.state.precio,
          hora: this.state.hora,
        }]
      };
  
      if (this.update.datos[0].id === "" ||
        this.update.datos[0].precio === "" ||
        this.update.datos[0].hora === "" 
      ) {
          Sweet.fire(
              '',
              'Complete todos los datos para continuar...!'
          )
      } else {
        axios
          .put(`${API}?id=`+ this.state.id, this.update)
          .then(response => {
            if (response.data.ok === true) {
              Sweet.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Actualizado correctamente',
                  showConfirmButton: false,
                  timer: 2000
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
              onSubmit={this.updateData}
            >
              <p className="text-gray-800 font-medium">
                Editar Horario
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

export default EditHorario;

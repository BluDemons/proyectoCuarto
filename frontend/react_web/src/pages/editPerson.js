import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sweet from 'sweetalert2';

const API = "http://localhost:5000/thws/persona";

class EditPersona extends Component {
  constructor(props) {
    super(props);
    this.state = {
    id:localStorage.getItem('id'),
    nombres: localStorage.getItem('nombres'),
    apellidos: localStorage.getItem('apellidos'),
    direccion: localStorage.getItem('direccion'),
    correo: localStorage.getItem('correo'),
    clave: localStorage.getItem('clave'),
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
          nombres: this.state.nombres,
          apellidos: this.state.apellidos,
          direccion: this.state.direccion,
          correo: this.state.correo,
          clave: this.state.clave,
        }]
      };
  
      if (this.update.datos[0].id === "" ||
        this.update.datos[0].nombres === "" ||
        this.update.datos[0].apellidos === "" ||
        this.update.datos[0].direccion === "" ||
        this.update.datos[0].correo === "" ||
        this.update.datos[0].clave === ""
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
              .then( () => this.props.history.push("/user"));
            }
          })
          .catch(error => {
            alert(error);
          });
      }
    };
  

  render() {
    const { nombres, apellidos, direccion, correo, clave } = this.state;
    return (
      <div>
        <div>
          <Link to="/user">
            <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-indigo-500 hover:border-indigo-600 hover:bg-indigo-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span className="mr-2">Regresar</span>
              <i className="far fa-arrow-alt-circle-left" />
            </button>
          </Link>
        </div>
        <form onSubmit={this.updateData}>
          <div className="sm:mr12 sm:ml-12 md:ml-64 md:mr-64 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-24">
            <h1 className="font-hairline text-center text-2xl">Editar Administrdor THWS!!</h1>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="nombres"
                >
                  Nombres
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  type="text"
                  name="nombres"
                  value={nombres}
                  required={true}
                  placeholder="Arthuro..."
                  onChange={this.changeHandler}
                />
              </div>
              <div className="md:w-full px-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="apellidos"
                >
                  Apellidos
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  type="text"
                  name="apellidos"
                  value={apellidos}
                  required={true}
                  placeholder="Pendragón..."
                  onChange={this.changeHandler}
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className="block tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="direccion"
                >
                  Dirección
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                  id="direccion"
                  type="text"
                  name="direccion"
                  value={direccion}
                  required={true}
                  placeholder="García Moreno S4-35 y Ambato"
                  onChange={this.changeHandler}
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="correo"
                >
                  Correo Electrónico
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  type="text"
                  name="correo"
                  value={correo}
                  required={true}
                  placeholder="example@gmail.com"
                  onChange={this.changeHandler}
                />
              </div>
              <div className="md:w-full px-3">
                <label
                  className="block tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="clave"
                >
                  Contraseña
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                  id="clave"
                  type="text"
                  name="clave"
                  value={clave}
                  required={true}
                  placeholder="******************"
                  minLength="6"
                  onChange={this.changeHandler}
                  securetextentry="true"
                />
              </div>
            </div>
            <div className="flex mr-2">
              <div className="flex-grow">
                <button
                  className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                  type="submit"
                >
                  <span className="mr-2">Guardar</span>
                  <i className="far fa-check-circle" />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditPersona;

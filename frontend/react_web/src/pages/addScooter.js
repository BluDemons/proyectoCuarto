import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { Link } from "react-router-dom";
import axios from "axios";
import QRCode from "qrcode.react";
import Sweet from 'sweetalert2';

const API = "http://localhost:5000/thws/scooter";

class AddScooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descripcion: '',
      imagen: '',
      estado: '',
      codigo: ''
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  encodeImageFileAsURL = (e) => {
    const reader = new FileReader();
    const file = new Blob([e.target.value], { type: 'img/png' });
    this.setState({ imagen: file });
    reader.onloadend = e => {
      this.setState({ imagen: e.target.result })
    }
    reader.readAsDataURL(file);
  }

  onFileChange = (e) => {
    let file = e.target.files[0]
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ imagen: reader.result })
      console.log(reader.result)
    }
    reader.readAsDataURL(file);
  }
  makeid=()=>{
    var result ='';
    var characters       = '0123456789ABCDEFGHIJKLmnopqrstuvwxyzMNOPQRSTUVWXYZabcdefghijkl';
    for ( var i = 0; i < 16; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * 32));
       this.setState({codigo:result})
    }
 }
  saveData = e => {
    e.preventDefault();
    this.post = {
      datos: {
        descripcion: this.state.descripcion,
        estado: this.state.estado,
        codigo: this.state.codigo,
        imagen: this.state.imagen,
      }
    };

    if (
      this.post.datos.descripcion === "" ||
      this.post.datos.estado === "" ||
      this.post.datos.codigo === "" ||
      this.post.datos.imagen === ""
    ) {
      Sweet.fire(
        '',
        'Complete todos los datos para continuar...!'
    )
    } else {
      axios
        .post(API, this.post)
        .then(response => {
          if (response.data.ok === true) {
            Sweet.fire({
              position: 'center',
              icon: 'success',
              title: 'Creado correctamente',
              showConfirmButton: false,
              timer: 2000
          })
          .then( () => this.props.history.push("/scooter"));
          }
        })
        .catch(error => {
          alert(error);
        });
    }
  };

  render() {
    const { descripcion, estado, codigo, imagen, } = this.state;
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
              <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                <label className=" block text-sm text-gray-600" htmlFor="imagen">
                  Imagen
                </label>
                <input
                  className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  name="imagen"
                  type="file"
                  required={true}
                  defaultValue={imagen}
                  onChange={this.onFileChange}
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
                    onChange={this.makeid}
                  />
                  <QRCode value={codigo}/>
                </div>
                <div className="md:w-full px-3 mb-6 md:mb-0 mt-5">
                  <button onClick={this.makeid} className=" mx-auto bg-white text-gray-800 font-bold rounded border-b-2 border-teal-500 hover:border-teal-600 hover:bg-teal-500 hover:text-white shadow-md py-2 px-2 inline-flex items-center">
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
                  value={estado}
                >
                  <option>Seleccionar</option>
                  <option value='1'>Desocupado</option>
                  <option value='0'>Ocupado</option>
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

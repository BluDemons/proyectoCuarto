/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import axios from "axios";
import { Link } from "react-router-dom";
import Sweet from 'sweetalert2';

const API = "http://localhost:5000/thws/persona";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table_header: {
        nombres: "Nombres",
        apellidos: "Apellidos",
        direccion: "Dirección",
        correo: "Correo Electrónico"
      },
      persona: [],
      nombres: "",
      apellidos: "",
      direccion: "",
      correo: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount = e => {
    if (!this.state.persona) {
      console.log("No hay salas disponibles");
    } else {
      axios
        .get(API)
        .then(response => {
          this.setState({ persona: response.data.datos });
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  editarUsers=(u_id,u_nombres,u_apellidos,u_direccion,u_correo,u_clve)=>{
    localStorage.setItem('id',u_id);
    localStorage.setItem('nombres',u_nombres);
    localStorage.setItem('apellidos',u_apellidos);
    localStorage.setItem('direccion',u_direccion);
    localStorage.setItem('correo',u_correo);
    localStorage.setItem('clave',u_clve);
    this.props.history.push('/editPersona')
  }

  deleteData = value => {
   axios.delete(`${API}?id=${value}`, {
      data: { id: value }
    }).then(response => {
    if (response.data.ok === true){
    Sweet.fire(
      '',
      'Eliminado OK'
  )}
  else{
    Sweet.fire(
      '',
      'Imposible De eliminar'
  )}
    window.location.assign("http://localhost:3000/user");
  })
  };
  

  render() {
    const { persona } = this.state;
    return (
      <div>
        <Sidebar />
        <Header />
        <div className="md:ml-64 xl:ml-64 sm:ml-6 pt-6 pb-8">
          <div className="justify-between flex my-0 select-none">
            <h1 className="ml-12 text-center mr-10 text-5xl">
              Usuarios Registrados
            </h1>
            <Link to="/gestion_user">
              <button
                type="button"
                className="mr-8 shadow-md no-underline font-black rounded-full h-12 w-12 flex items-center justify-center bg-green-400 text-white text-sm border-blue btn-primary hover:text-white hover:bg-green-500 focus:outline-none active:shadow-none"
              >
                Add
              </button>
            </Link>
          </div>          
          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <thead className="border-b">
                <tr>
                  <th className="text-left p-3 px-5">
                    {this.state.table_header.nombres}
                  </th>
                  <th className="text-left p-3 px-5">
                    {this.state.table_header.apellidos}
                  </th>
                  <th className="text-left p-3 px-5">
                    {this.state.table_header.direccion}
                  </th>
                  <th className="text-left p-3 px-5">
                    {this.state.table_header.correo}
                  </th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-orange-100 bg-gray-100">
                  <td>
                    {persona.map(element => (
                      <p className="p-2 px-5" key={element.id}>
                        {" "}
                        {element.nombres}{" "}
                      </p>
                    ))}
                  </td>
                  <td>
                    {persona.map(element => (
                      <p className="p-2 px-5" key={element.id}>
                        {" "}
                        {element.apellidos}{" "}
                      </p>
                    ))}
                  </td>
                  <td>
                    {persona.map(element => (
                      <p className="p-2 px-5" key={element.id}>
                        {" "}
                        {element.direccion}{" "}
                      </p>
                    ))}
                  </td>
                  <td>
                    {persona.map(element => (
                      <p className="p-2 px-5" key={element.id}>
                        {" "}
                        {element.correo}{" "}
                      </p>
                    ))}
                  </td>
                  <td>
                    
                    {persona.map(element => (
                      <p className="p-2 px-5" key={element.id}>
                        <Link to="/editPersona">
                        <button
                        onClick={()=>this.editarUsers(element.id,element.nombres,element.apellidos,element.direccion,element.correo,element.clave)}
                          className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Editar
                        </button>
                        </Link>
                      </p>
                    ))}
                  </td>
                  <td>
                    {persona.map(element => (
                      <p className="p-2 px-5" key={element.id}>
                        <button
                          onClick={() => this.deleteData(element.id)}
                          className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Eliminar
                        </button>
                      </p>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default User;

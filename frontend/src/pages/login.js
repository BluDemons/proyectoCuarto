
import React, { Component } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:3000/api/login";

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  loginAccess = e => {
    e.preventDefault()
    if (this.state.email === "" && this.state.password === "") {
      alert("Complete todos los datos para continuar...");
    } else {
      axios.post(API_URL, this.state)
      .then(response => {
        if ( response.data.mensaje === "found" ) {
          window.location.assign("http://localhost:3001/home");
        }
      })
      .catch(error => {
        alert("Datos Incorrectos")
      })
    }
  };

  render() {
    const { email, password } = this.state
    return (
		<div className="mx-auto">
			<div className="flex justify-center px-6 my-12">
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">					
					<div
						className="bg-fixed w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
						style={{backgroundImage: `url('https://cdn.cp.adobe.io/content/2/rendition/ea8d25f5-eefd-4da7-a337-1cfa6e7e5e02/artwork/91402499-4385-424e-90ee-a647d0915cee/version/0/format/jpg/dimension/width/size/300')`}}></div>				
					<div className="w-full lg:w-1/2 bg-gray-800 p-5 rounded-lg lg:rounded-l-none">
						<h3 className="pt-4 text-2xl text-white text-center">Bienvenido de Vuelta!!</h3>
						<form className="px-8 pt-6 pb-8 mb-4 bg-gray-800 rounded">
							<div className="mb-4 bg-gray-800">
								<label className="block mb-2 text-sm font-bold text-gray-600" htmlFor="username">
									Usuario
								</label>
								<input
									className="w-full px-3 py-2 bg-gray-800 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									type="text"
                  placeholder="correo@yavirac.edu.ec"
                  name="email"
                  value={email}
                  onChange={ this.changeHandler } 
								/>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-600" htmlFor="password">
									Contraseña
								</label>
								<input
									className="w-full px-3 py-2 bg-gray-800 mb-3 text-sm leading-tight text-gray-700 border border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									type="password"
                  placeholder="******************"
                  name="password"
                  value={ password }
                  onChange={ this.changeHandler } 
								/>								
							</div>
							{/* <div class="mb-4">
								<input class="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
								<label class="text-sm" for="checkbox_id">
									Remember Me
								</label>
							</div> */}
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-gray-800 bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Ingresar
								</button>
							</div>
							<hr className="mb-6 border-t" />							
							<div class="text-center text-gray-500">
								Copyright &copy; <a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-white"
									href="./home"
								>
									 THWS
								</a>&nbsp;
                2020
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default Login;

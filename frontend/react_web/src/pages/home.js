/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import axios from "axios";
// import { Link } from "react-router-dom";
// import SimpleMapa from "../pages/mapa";
import Grafica from "./grafica";
import SimpleMap from "../pages/mapa";


const API = "http://localhost:5000/thws/";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persona: [],
      scooter: [],
      ubicación: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount = e => {
    axios
      .get(API + "persona")
      .then(response => {
        this.setState({ persona: response.data.datos });
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get(API + "scooter")
      .then(response => {
        this.setState({ scooter: response.data.datos });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    //const { persona, scooter } = this.state;
    return (
      <div>
        <Sidebar />
        <Header />
        <div className="md:ml-64 xl:ml-64 sm:ml-6 pt-6 pb-8">
          <div className="justify-between flex my-0 select-none">
            <h1 className="ml-12 text-center mr-10 text-5xl">Ubicación</h1>
          </div>
          <div className=" sm:ml-6 sm:mr-6 pt-6 pb-8 flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="bg-white border-t border-b sm:rounded sm:border shadow">
                <div className="border-b">
                  <div className="flex justify-between px-6 -mb-px">
                    <h3 className="text-blue-dark py-4 font-normal text-lg">
                      Mapa de Ubicación
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="text-center px-6 py-4">
                    <div className="py-8">
                      <div className=" flex-grow flex-no-shrink ">
                        <SimpleMap />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" sm:ml-6 sm:mr-6 pt-6 pb-8 flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="bg-white border-t border-b sm:rounded sm:border shadow">
                <div className="border-b">
                  <div className="flex justify-between px-6 -mb-px">
                    <h3 className="text-blue-dark py-4 font-normal text-lg">
                      Gráfica Estadística
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="text-center px-6 py-4">
                    <div className="py-8">
                      <div className=" flex-grow flex-no-shrink ">
                        <Grafica />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

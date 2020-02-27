import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => (
    <div className="relative">
        <div className=" mt-0 fixed shadow-xl bg-white flex flex-wrap  items-center justify-between sm:hidden md:w-64 z-10 py-4 px-6 md:inline-fixed md:block md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between mx-auto">
            <div className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-xs font-bold p-4 px-0">
                <span className="font-semibold text-sm tracking-tight text-black">Travel Healthy with Scooter</span>
            </div>
            <div className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded">
                <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                    <li className="items-center">
                        <div className="text-gray-800 text-xs uppercase py-3 font-bold block">
                            <i className="fas fa-home opacity-75 mr-2 text-sm"></i>
                            <span className="mx-2">Inicio</span>
                        </div>
                    </li>
                    <li className="items-center">
                        <Link to="/home">
                            <span className="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
                                <i className="fas fa-adjust opacity-75 mr-2 text-sm"></i>
                                <span className="mx-2">Estadística</span>
                            </span>
                        </Link>
                    </li>
                    {/* <li className="items-center">
                        <Link to="/mapa">
                            <span className="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
                                <i className="fas fa-map-marker-alt opacity-75 mr-2 text-sm"></i>
                                <span className="mx-2"> Mapa de Ubicación</span>
                            </span>
                        </Link>
                    </li> */}
                    <li className="items-center">
                        <div className="text-gray-800 text-xs uppercase py-3 font-bold block">
                            <i className="fas fa-fingerprint text-gray-900 mr-2 text-sm"></i>
                            Usuarios y Dispositivos
                        </div>
                    </li>
                    <li className="items-center">
                        <Link to="/user">
                            <span className="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
                                <i className="fas fa-user-edit opacity-75 mr-2 text-sm"></i>
                                <span className="mx-2">Gesionar Usuarios</span>
                            </span>
                        </Link>
                    </li>
                    <li className="items-center">
                        <Link to="/scooter">
                            <span className="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
                                <i className="fas fa-chalkboard opacity-75 mr-2 text-sm"></i>
                                <span className="mx-1">Gestionar Dispositivos</span>
                            </span>
                        </Link>
                    </li>
                    {/* <li className="items-center">
                        <Link to="/horario">
                            <span className="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
                                <i className="fas fa-business-time opacity-75 mr-2 text-sm"></i>
                                <span className="mx-1">Gestionar Horarios</span>
                            </span>
                        </Link>
                    </li> */}
                </ul>
            </div>
        </div>
    </div>
)

export default Sidebar;
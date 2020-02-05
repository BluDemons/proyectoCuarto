/* eslint-disable jsx-a11y/anchor-is-valid */
import React from'react';
import { Link } from "react-router-dom";

const Header = () => (
        <div className="flex w-full bg-black md:block md:top-0 md:fixed ">
                <div className="container mx-auto px-4">
                    <div className="flex items-center md:justify-between py-4">
                        <div className="w-1/4 md:hidden">
                            <svg className="fill-current text-white h-8 w-8" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path
                                    d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1z" />
                                </svg>
                        </div>
                        <div className="w-1/2 md:w-auto text-center text-white text-2xl font-medium">
                            <img src="img/logout.png" alt=""/>JUAN ANDRES
                        </div>
                        <div className="w-1/4 md:w-auto md:flex text-right">
                            <div>
                                <img className="inline-block h-6 w-6 " src="img/lupa.png" alt=""/>
                            </div>&nbsp;
                            <div>
                                <img className="inline-block h-6 w-6 " src="img/notificacion.png" alt=""/>
                            </div>&nbsp;
                            <div>
                                <img className="inline-block h-6 w-6 " src="img/mensajes.png" alt=""/>
                            </div>&nbsp;
                            <div className="hidden md:block md:flex md:items-center ml-2">
                                <span className="text-white text-sm mr-1">Logout</span>&nbsp;
                                <div>
                                    <img className="inline-block h-6 w-6 " src="img/logout.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)

export default Header;
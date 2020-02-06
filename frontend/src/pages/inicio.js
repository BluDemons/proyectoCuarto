import React from 'react';
import {Link} from 'react-router-dom';

const Inicio =() => {
    return (
    <div className="font-sans bg-grey-lighter flex flex-col min-h-screen w-full">
        <div className="relative">
            <div className="bg-black fixed  w-full">
                <div className=" mx-auto px-4">
                    <div className="flex items-center md:justify-between py-4">
                        <div className="w-1/2 md:w-auto text-center text-white text-2xl font-medium">
                            JUAN ANDRES
                        </div>
                        <div className="w-1/4 md:w-auto md:flex text-right">
                            <div className="hidden md:block md:flex md:items-center ml-2">
                                <span className="text-white text-sm mr-1">Logout</span>&nbsp;                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div className="inline-flex relative">
        <div className=" fixed shadow-xl bg-white flex flex-wrap  items-center justify-between  md:w-64 z-10 py-4 px-6 md:inline-fixed md:block md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between mx-auto">           
            <div className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0">
                <span className="font-semibold text-xl tracking-tight text-black">Sistema THWS</span>
            </div>
            <div className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded">
                <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                    <li className="items-center">
                        <Link to="/home">                
                            <span className="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
                            <i className="fas fa-home opacity-75 mr-2 text-sm"></i>                            
                            <span className="mx-2">Inicio</span>
                            </span>
                        </Link>
                    </li>
                    <li className="items-center">
                        <div className="text-gray-800 text-xs uppercase py-3 font-bold block">
                            <i className="fas fa-fingerprint text-gray-900 mr-2 text-sm"></i>
                            Usuarios y Dispositivos                        
                        </div>
                    </li>
                    <li className="items-center">
                        <Link to="/admins">                
                            <span className="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
                            <i className="fas fa-user-edit opacity-75 mr-2 text-sm"></i>                            
                            <span className="mx-2">Gesionar Usuarios</span>
                            </span>
                        </Link>
                    </li> 
                    <li className="items-center">
                        <Link to="/add_book">                
                            <span className="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
                            <i className="fas fa-chalkboard opacity-75 mr-2 text-sm"></i>                            
                            <span className="mx-1">Gestionar Dispositivos</span>
                            </span>
                        </Link>
                    </li>                                                             
                </ul>                
            </div>
        </div>
        <div className="mx-auto sm:px-4 pt-6 pb-8">
            <div className="bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6">
                <div className="border-b px-6">
                    <div className=" justify-between -mb-px">
                        <div className="flex-grow lg:hidden text-blue py-4 text-lg">
                            Price Charts
                        </div>
                        <div className="hidden lg:flex">
                            <button type="button"
                                className="appearance-none py-4 text-blue-dark border-b border-blue-dark mr-6">
                                Bitcoin &middot; CA$21,404.74
                            </button>
                            <button type="button"
                                className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-6">
                                Ethereum &middot; CA$884.80
                            </button>
                            <button type="button"
                                className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark">
                                Litecoin &middot; CA$358.24
                            </button>
                        </div>
                        <div className="flex text-sm">
                            <button type="button"
                                className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3">
                                1M
                            </button>
                            <button type="button"
                                className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3">
                                1D
                            </button>
                            <button type="button"
                                className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3">
                                1W
                            </button>
                            <button type="button"
                                className="appearance-none py-4 text-blue-dark border-b border-blue-dark mr-3">
                                1M
                            </button>
                            <button type="button"
                                className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3">
                                1Y
                            </button>
                            <button type="button"
                                className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark">
                                ALL
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center px-6 lg:hidden">
                    <div className="flex-grow flex-no-shrink py-6">
                        <div className="text-grey-darker mb-2">
                            <span className="text-3xl align-top">CA$</span>
                            <span className="text-5xl">21,404</span>
                            <span className="text-3xl align-top">.74</span>
                        </div>
                        <div className="text-green-light text-sm">
                            &uarr; CA$12,955.35 (154.16%)
                        </div>
                    </div>
                    <div className="flex-shrink w-32 inline-block relative">
                        <select
                            className="block appearance-none w-full bg-white border border-grey-light px-4 py-2 pr-8 rounded">
                            <option>BTC</option>
                            <option>ETH</option>
                            <option>LTC</option>
                        </select>
                        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex">
                    <div className="w-1/3 text-center py-8">
                        <div className="border-r">
                            <div className="text-grey-darker mb-2">
                                <span className="text-3xl align-top">CA$</span>
                                <span className="text-5xl">21,404</span>
                                <span className="text-3xl align-top">.74</span>
                            </div>
                            <div className="text-sm uppercase text-grey tracking-wide">
                                Bitcoin Price
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 text-center py-8">
                        <div className="border-r">
                            <div className="text-grey-darker mb-2">
                                <span className="text-3xl align-top"><span className="text-green align-top">+</span>CA$</span>
                                <span className="text-5xl">12,998</span>
                                <span className="text-3xl align-top">.48</span>
                            </div>
                            <div className="text-sm uppercase text-grey tracking-wide">
                                Since last month (CAD)
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 text-center py-8">
                        <div>
                            <div className="text-grey-darker mb-2">
                                <span className="text-3xl align-top"><span className="text-green align-top">+</span></span>
                                <span className="text-5xl">154.47</span>
                                <span className="text-3xl align-top">%</span>
                            </div>
                            <div className="text-sm uppercase text-grey tracking-wide">
                                Since last month (%)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap -mx-4">
                <div className="w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col">
                    <div
                        className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
                        <div className="border-b">
                            <div className="flex justify-between px-6 -mb-px">
                                <h3 className="text-blue-dark py-4 font-normal text-lg">Your Portfolio</h3>
                                <div className="flex">
                                    <button type="button"
                                        className="appearance-none py-4 text-blue-dark border-b border-blue-dark mr-3">
                                        List
                                    </button>
                                    <button type="button"
                                        className="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark">
                                        Chart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                            <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
                                <div className="rounded-full bg-orange inline-flex mr-3">
                                    <svg className="fill-current text-white h-8 w-8 block"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <g fillRule="evenodd">
                                            <path
                                                d="M21.78 15.37c.51-.61.83-1.4.83-2.26 0-2.74-1.6-4.38-4.24-4.38V5.45c0-.12-.1-.22-.22-.22h-1.27c-.11 0-.2.1-.2.21v3.3h-1.7V5.44c0-.12-.1-.22-.22-.22H13.5c-.12 0-.2.1-.21.21v3.3H9.67c-.12 0-.21.09-.21.21v1.31c0 .12.1.22.21.22h.21c.94 0 1.7.79 1.7 1.75v7c0 .92-.68 1.67-1.55 1.75a.21.21 0 0 0-.18.16l-.33 1.32c-.01.06 0 .13.04.19.04.05.1.08.17.08h3.55v3.3c0 .1.1.2.2.2h1.28c.12 0 .21-.1.21-.22v-3.28h1.7v3.3c0 .1.1.2.21.2h1.27c.12 0 .22-.1.22-.22v-3.28h.85c2.65 0 4.24-1.64 4.24-4.37 0-1.28-.68-2.39-1.68-3zm-6.8-4.01h2.54c.94 0 1.7.78 1.7 1.75 0 .96-.76 1.75-1.7 1.75h-2.55v-3.5zm3.39 8.75h-3.4v-3.5h3.4c.93 0 1.7.78 1.7 1.75 0 .96-.77 1.75-1.7 1.75z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                                <span className="text-lg">Bitcoin</span>
                            </div>
                            <div className="hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center">
                                <div className="bg-orange h-2 rounded-full flex-grow mr-2"></div>
                                100%
                            </div>
                            <div className="flex w-3/5 md:w/12">
                                <div className="w-1/2 px-4">
                                    <div className="text-right">
                                        0.0010 BTC
                                    </div>
                                </div>
                                <div className="w-1/2 px-4">
                                    <div className="text-right text-grey">
                                        CA$21.28
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                            <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
                                <div className="rounded-full bg-grey inline-flex mr-3">
                                    <svg className="fill-current text-white h-8 w-8 block"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38">
                                        <g fillRule="evenodd">
                                            <path
                                                d="M12.29 28.04l1.29-5.52-1.58.67.63-2.85 1.64-.68L16.52 10h5.23l-1.52 7.14 2.09-.74-.58 2.7-2.05.8-.9 4.34h8.1l-.99 3.8z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                                <span className="text-lg">Litecoin</span>
                            </div>
                            <div className="hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center">
                                <div className="bg-grey h-2 w-2 rounded-full mr-2"></div>
                                0%
                            </div>
                            <div className="flex w-3/5 md:w/12">
                                <div className="w-1/2 px-4">
                                    <div className="text-right">
                                        0.0000 LTC
                                    </div>
                                </div>
                                <div className="w-1/2 px-4">
                                    <div className="text-right text-grey">
                                        CA$0.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                            <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
                                <div className="rounded-full bg-indigo inline-flex mr-3">
                                    <svg className="fill-current text-white h-8 w-8 block"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <g fillRule="evenodd">
                                            <path
                                                d="M10.13 17.76c-.1-.15-.06-.2.09-.12l5.49 3.09c.15.08.4.08.56 0l5.58-3.08c.16-.08.2-.03.1.11L16.2 25.9c-.1.15-.28.15-.38 0l-5.7-8.13zm.04-2.03a.3.3 0 0 1-.13-.42l5.74-9.2c.1-.15.25-.15.34 0l5.77 9.19c.1.14.05.33-.12.41l-5.5 2.78a.73.73 0 0 1-.6 0l-5.5-2.76z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                                <span className="text-lg">Ethereum</span>
                            </div>
                            <div className="hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center">
                                <div className="bg-indigo h-2 w-2 rounded-full mr-2"></div>
                                0%
                            </div>
                            <div className="flex w-3/5 md:w/12">
                                <div className="w-1/2 px-4">
                                    <div className="text-right">
                                        0.0000 ETH
                                    </div>
                                </div>
                                <div className="w-1/2 px-4">
                                    <div className="text-right text-grey">
                                        CA$0.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-6 py-4">
                            <div className="text-center text-grey">
                                Total Balance &asymp; CA$21.28
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                    <div className="bg-white border-t border-b sm:rounded sm:border shadow">
                        <div className="border-b">
                            <div className="flex justify-between px-6 -mb-px">
                                <h3 className="text-blue-dark py-4 font-normal text-lg">Recent Activity</h3>
                            </div>
                        </div>
                        <div>
                            <div className="text-center px-6 py-4">
                                <div className="py-8">
                                    <div className="mb-4">
                                        <svg className="inline-block fill-current text-grey h-16 w-16"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path
                                                d="M11.933 13.069s7.059-5.094 6.276-10.924a.465.465 0 0 0-.112-.268.436.436 0 0 0-.263-.115C12.137.961 7.16 8.184 7.16 8.184c-4.318-.517-4.004.344-5.974 5.076-.377.902.234 1.213.904.959l2.148-.811 2.59 2.648-.793 2.199c-.248.686.055 1.311.938.926 4.624-2.016 5.466-1.694 4.96-6.112zm1.009-5.916a1.594 1.594 0 0 1 0-2.217 1.509 1.509 0 0 1 2.166 0 1.594 1.594 0 0 1 0 2.217 1.509 1.509 0 0 1-2.166 0z" />
                                            </svg>
                                    </div>
                                    <p className="text-2xl text-grey-darker font-medium mb-4">No buys or sells yet</p>
                                    <p className="text-grey max-w-xs mx-auto mb-6">You've successfully linked a payment
                                        method and can start buying digital currency.</p>
                                    <div>
                                        <button type="button"
                                            className="bg-blue hover:bg-blue-dark text-white border border-blue-dark rounded px-6 py-4">Buy
                                            now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div className="bg-white border-t">
            <div className="container mx-auto px-4">
                <div className="md:flex justify-between items-center text-sm">
                    <div className="text-center md:text-left py-3 md:py-4 border-b md:border-b-0">
                        <a href="/" className="no-underline text-grey-dark mr-4">Home</a>
                        <a href="/" className="no-underline text-grey-dark mr-4">Careers</a>
                        <a href="/" className="no-underline text-grey-dark">Legal &amp; Privacy</a>
                    </div>
                    <div className="md:flex md:flex-row-reverse items-center py-4">
                        <div className="text-center mb-4 md:mb-0 md:flex">
                            <div className="w-48 inline-block relative mb-4 md:mb-0 md:mr-4">
                                <select
                                    className="leading-tight block appearance-none w-full bg-white border border-grey-light px-3 py-2 pr-8 rounded">
                                    <option>English</option>
                                </select>
                                <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                </div>
                            </div>
                            <div>
                                <a href="/"
                                    className="inline-block leading-tight bg-blue border border-blue-dark hover:bg-blue-dark px-3 py-2 text-white no-underline rounded">Need
                                    help?</a>
                            </div>
                        </div>
                        <div className="text-grey text-center md:mr-4">&copy; 2017 Cointoad</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Inicio;
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './styles.css';

function App() {
  return (
    <div class="inline-flex">
            <div class="mx-auto sm:px-4 pt-6 pb-8">
                <div class="border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6">
                    <div class="bg-teal border-b px-6">
                        <div class=" justify-between -mb-px">
                            <div class="flex-grow lg:hidden text-white py-4 text-lg">
                                Búsqueda
                            </div>
                            <div class="hidden lg:flex">
                                <button type="button"
                                    class="appearance-none py-4 text-white border-b border-blue-dark mr-6">
                                    Búsqueda
                                </button>
                                <input type="text"
                                    class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal" />
                            </div>
                            <div class="flex text-sm">
                                <button type="button"
                                    class="appearance-none py-4 text-white border-b border-transparent hover:border-grey-dark mr-3">
                                    1M
                                </button>
                                <button type="button"
                                    class="appearance-none py-4 text-white border-b border-transparent hover:border-grey-dark mr-3">
                                    1D
                                </button>
                                <button type="button"
                                    class="appearance-none py-4 text-white border-b border-transparent hover:border-grey-dark mr-3">
                                    1W
                                </button>
                                <button type="button"
                                    class="appearance-none py-4 text-white border-b border-blue-dark mr-3">
                                    1M
                                </button>
                                <button type="button"
                                    class="appearance-none py-4 text-white border-b border-transparent hover:border-grey-dark mr-3">
                                    1Y
                                </button>
                                <button type="button"
                                    class="appearance-none py-4 text-white border-b border-transparent hover:border-white">
                                    ALL
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="bg-blue-dark flex items-center px-6 lg:hidden">
                        <div class="flex-grow flex-no-shrink py-6">
                            <div class="text-grey-darker mb-2">
                                <span class="text-3xl align-top">CA$</span>
                                <span class="text-5xl">21,404</span>
                                <span class="text-3xl align-top">.74</span>
                            </div>
                            <div class="text-green-light text-sm">
                                &uarr; CA$12,955.35 (154.16%)
                            </div>
                        </div>
                        <div class="flex-shrink w-32 inline-block relative">
                            <select
                                class="block appearance-none w-full bg-white border border-grey-light px-4 py-2 pr-8 rounded">
                                <option>BTC</option>
                                <option>ETH</option>
                                <option>LTC</option>
                            </select>
                            <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="hidden lg:flex">
                        <div class="w-1/3 text-center py-8">
                            <div class="border-r">
                                <div class="text-grey-darker mb-2">
                                    <span class="text-3xl align-top">CA$</span>
                                    <span class="text-5xl">21,404</span>
                                    <span class="text-3xl align-top">.74</span>
                                </div>
                                <div class="text-sm uppercase text-grey tracking-wide">
                                    Bitcoin Price
                                </div>
                            </div>
                        </div>
                        <div class="w-1/3 text-center py-8">
                            <div class="border-r">
                                <div class="text-grey-darker mb-2">
                                    <span class="text-3xl align-top"><span
                                            class="text-green align-top">+</span>CA$</span>
                                    <span class="text-5xl">12,998</span>
                                    <span class="text-3xl align-top">.48</span>
                                </div>
                                <div class="text-sm uppercase text-grey tracking-wide">
                                    Since last month (CAD)
                                </div>
                            </div>
                        </div>
                        <div class="w-1/3 text-center py-8">
                            <div>
                                <div class="text-grey-darker mb-2">
                                    <span class="text-3xl align-top"><span class="text-green align-top">+</span></span>
                                    <span class="text-5xl">154.47</span>
                                    <span class="text-3xl align-top">%</span>
                                </div>
                                <div class="text-sm uppercase text-grey tracking-wide">
                                    Since last month (%)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-4 mb-8">
                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4">
                        <div class="bg-white border-t border-b sm:rounded sm:border shadow">
                            <div>
                                <div class="text-center">
                                    <div class="mb-4">
                                        <img class="inline-block fill-current text-grey h-auto rounded-b-none rounded-t-lg w-auto border-r"
                                            src="./src/assets/bus.jpg" alt="" />
                                    </div>
                                    <div class="py-8">
                                        <p class="text-2xl justify-between text-black font-medium mb-4">
                                            Nombre de Cooperativa.
                                        </p>
                                        <p class="text-grey-darker max-w-xs mx-auto mb-6">
                                            You've successfully linked a payment method and can
                                            start buying digital currency.
                                        </p>
                                    </div>
                                    <div class="flex border-t items-center mb-4 px-3 py-3">
                                        <div class="text-center text-grey-darker">
                                            Total &asymp; $21.28
                                        </div>
                                        <div class="flex-grow ml-4">
                                            <button type="button"
                                                class="bg-teal hover:bg-teal-dark text-white border border-blue-teal rounded px-6 py-4">
                                                Comprar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4">
                        <div class="bg-white border-t border-b sm:rounded sm:border shadow">
                            <div>
                                <div class="text-center">
                                    <div class="mb-4">
                                        <img class="inline-block fill-current text-grey h-auto rounded-b-none rounded-t-lg w-auto border-r"
                                            src="./src/assets/bus.jpg" alt="" />
                                    </div>
                                    <div class="py-8">
                                        <p class="text-2xl justify-between text-black font-medium mb-4">
                                            Nombre de Cooperativa.
                                        </p>
                                        <p class="text-grey-darker max-w-xs mx-auto mb-6">
                                            You've successfully linked a payment method and can
                                            start buying digital currency.
                                        </p>
                                    </div>
                                    <div class="flex border-t items-center mb-4 px-3 py-3">
                                        <div class="text-center text-grey-darker">
                                            Total &asymp; $21.28
                                        </div>
                                        <div class="flex-grow ml-4">
                                            <button type="button"
                                                class="bg-teal hover:bg-teal-dark text-white border border-blue-teal rounded px-6 py-4">
                                                Comprar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4">
                        <div class="bg-white border-t border-b sm:rounded sm:border shadow">
                            <div>
                                <div class="text-center">
                                    <div class="mb-4">
                                        <img class="inline-block fill-current text-grey h-auto rounded-b-none rounded-t-lg w-auto border-r"
                                            src="./src/assets/bus.jpg" alt="" />
                                    </div>
                                    <div class="py-8">
                                        <p class="text-2xl justify-between text-black font-medium mb-4">
                                            Nombre de Cooperativa.
                                        </p>
                                        <p class="text-grey-darker max-w-xs mx-auto mb-6">
                                            You've successfully linked a payment method and can
                                            start buying digital currency.
                                        </p>
                                    </div>
                                    <div class="flex border-t items-center mb-4 px-3 py-3">
                                        <div class="text-center text-grey-darker">
                                            Total &asymp; $21.28
                                        </div>
                                        <div class="flex-grow ml-4">
                                            <button type="button"
                                                class="bg-teal hover:bg-teal-dark text-white border border-blue-teal rounded px-6 py-4">
                                                Comprar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4">
                        <div class="bg-white border-t border-b sm:rounded sm:border shadow">
                            <div>
                                <div class="text-center">
                                    <div class="mb-4">
                                        <img class="inline-block fill-current text-grey h-auto rounded-b-none rounded-t-lg w-auto border-r"
                                            src="./src/assets/bus.jpg" alt="" />
                                    </div>
                                    <div class="py-8">
                                        <p class="text-2xl justify-between text-black font-medium mb-4">
                                            Nombre de Cooperativa.
                                        </p>
                                        <p class="text-grey-darker max-w-xs mx-auto mb-6">
                                            You've successfully linked a payment method and can
                                            start buying digital currency.
                                        </p>
                                    </div>
                                    <div class="flex border-t items-center mb-4 px-3 py-3">
                                        <div class="text-center text-grey-darker">
                                            Total &asymp; $21.28
                                        </div>
                                        <div class="flex-grow ml-4">
                                            <button type="button"
                                                class="bg-teal hover:bg-teal-dark text-white border border-blue-teal rounded px-6 py-4">
                                                Comprar
                                            </button>
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

export default App;

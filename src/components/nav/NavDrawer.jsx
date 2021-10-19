/**
 * Drawer
 */

import { MenuIcon, ArrowLeftIcon, XIcon, HomeIcon, ShoppingBagIcon, CogIcon, InformationCircleIcon }
    from "@heroicons/react/outline";

import React, { useState } from "react";

import { Link } from 'react-router-dom';

const Drawer = () => {

    const [open, setOpen] = useState(false);

    return <div> {!open
        ? <button className="rounded p-2 hover:bg-gray-100"
            onClick={() => setOpen(true)}>
            <MenuIcon className="h-7 w-7" />
        </button>
        : <button className="rounded p-2 hover:bg-gray-100"
            onClick={() => setOpen(false)}>
            <ArrowLeftIcon className="h-7 w-7" />
        </button>}

        <div className={`s-transform fixed top-0 left-0 h-screen w-80 bg-white ${open ? 'translate-x-0' : '-translate-x-full'}`}>

            <button className="absolute rounded-full right-0 m-2 p-2 hover:bg-gray-100"
                onClick={() => setOpen(false)}>
                <XIcon className="h-6 w-6" />
            </button>

            <ul className="py-2">
                <li>
                    <div className="flex flex-col items-center p-4">
                        <img
                            className="rounded-full m-2 h-24 w-24"
                            src="../../../public/images/1.jpg"
                            alt="avatar"
                        />
                        {true
                            ? <div>
                                <p className="font-semibold">Sandor Escobar Ruiz</p>
                                <p className="text-sm">sandor@example.com</p>
                            </div>
                            : <div>
                                <button className="border rounded-full m-2 px-2 py-1 uppercase text-sm">
                                    Autenticarse
                                </button>
                                <button className="border rounded-full m-2 px-2 py-1 uppercase text-sm">
                                    Registrarse
                                </button>
                            </div>}
                    </div>
                </li>
                <li className="border-t mx-5 my-2"></li>
                <li>
                    <Link to='/'>
                        <button className="flex font-medium px-1 py-3 w-full hover:bg-gray-100"
                            onClick={() => setOpen(false)}>
                            <HomeIcon className="mx-4 h-6 w-6" />Portada
                        </button>
                    </Link>
                </li>
                <li>
                    <button className="flex font-medium px-1 py-3 w-full hover:bg-gray-100"
                        onClick={() => setOpen(false)}>
                        <ShoppingBagIcon className="mx-4 h-6 w-6" />Tienda
                    </button>
                </li>
                <li>
                    <Link to='/ajustes'>
                        <button className="flex font-medium px-1 py-3 w-full hover:bg-gray-100"
                            onClick={() => setOpen(false)}>
                            <CogIcon className="mx-4 h-6 w-6" />Ajustes
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to='/ayuda'>
                        <button className="flex font-medium px-1 py-3 w-full hover:bg-gray-100"
                            onClick={() => setOpen(false)}>
                            <InformationCircleIcon className="mx-4 h-6 w-6" />Ayuda
                        </button>
                    </Link>
                </li>
            </ul>
        </div>

        {open && <div className="s-opacity" onClick={() => setOpen(false)}></div>}
    </div>;
};

export default Drawer;
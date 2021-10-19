/**
 * Dropdown
 */

import { DotsVerticalIcon, SearchIcon, ShareIcon, InformationCircleIcon, LogoutIcon }
    from "@heroicons/react/outline";

import React, { useState } from "react";

const Dropdown = () => {

    const [open, setOpen] = useState(false);

    return <div>
        <div className="relative">
            <button className="rounded p-2 hover:bg-gray-100"
                onClick={() => setOpen(true)}>
                <DotsVerticalIcon className="h-7 w-7" />
            </button>

            <div className={`s-transform origin-top rounded-md absolute top-0 right-0 w-56 m-2 bg-white ${open ? 'scale-y-100' : 'scale-y-0'}`}>
                <ul className="py-2">
                    <li>
                        <a className="flex font-medium px-1 py-3 hover:bg-gray-100" href="#"
                            onClick={() => setOpen(false)}>
                            <SearchIcon className="mx-4 h-6 w-6" />Buscar
                        </a>
                    </li>
                    <li>
                        <a className="flex font-medium px-1 py-3 hover:bg-gray-100" href="#"
                            onClick={() => setOpen(false)}>
                            <ShareIcon className="mx-4 h-6 w-6" />Compartir
                        </a>
                    </li>
                    <li>
                        <a className="flex font-medium px-1 py-3 hover:bg-gray-100" href="#"
                            onClick={() => setOpen(false)}>
                            <InformationCircleIcon className="mx-4 h-6 w-6" />Reportar
                        </a>
                    </li>
                    <li>
                        <a className="flex font-medium px-1 py-3 hover:bg-gray-100" href="#"
                            onClick={() => setOpen(false)}>
                            <LogoutIcon className="mx-4 h-6 w-6" />Salir
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        {open && <div className="s-opacity" onClick={() => setOpen(false)}></div>}
    </div>
}

export default Dropdown;
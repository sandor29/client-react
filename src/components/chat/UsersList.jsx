/**
 * UsersList
 */

import { ChatIcon, XIcon } from "@heroicons/react/outline";

import { useEffect, useState } from "react";

import UsersItem from "./UsersItem";

const UsersList = () => {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetch("data/usuarios.json")
            .then(response => response.json())
            .then(result => setUsers(result),
                error => setError(error));
    });

    return <div>
        <button className="fixed border rounded-full shadow p-3 right-5 bottom-16 bg-white"
            onClick={() => setOpen(true)}>
            <ChatIcon className="h-6 w-6" />
        </button>

        <div className={`s-transform top-0 right-0 h-screen w-80 bg-white ${open ? 'translate-x-0' : 'translate-x-full'}`}>
            <button className="absolute rounded-full left-0 m-2 p-2 hover:bg-gray-100"
                onClick={() => setOpen(false)}>
                <XIcon className="h-6 w-6" />
            </button>

            <div className="shadow p-4">
                <p className="text-center uppercase">Usuarios</p>
            </div>

            {users.map(user =>
                <div key={user.id}>
                    <UsersItem user={user} />
                </div>
            )}
        </div>

        {open && <div className="s-opacity" onClick={() => setOpen(false)}></div>}
    </div>;
};

export default UsersList;
/**
 * UsersItem
 */

const UsersItem = (props) => {

    const chat = (xId) => {
        console.log("Iniciar Chat: ", xId);
    };

    return <a className="flex px-4 py-2 hover:bg-gray-100" href="#"
        onClick={() => chat(props.user.id)}>
        <img className="rounded-full h-12 w-12" src={props.user.img} />
        <div className="mx-3">
            <p className="font-medium">{props.user.nombre}</p>
            <p className="text-sm truncate overflow-hidden w-44">{props.user.frase}</p>
        </div>
    </a>;
};

export default UsersItem;
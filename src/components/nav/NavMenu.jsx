/**
 * Menu
 */

import { HomeIcon, ShoppingBagIcon } from "@heroicons/react/outline";

const Menu = () => {
    
    return <div className="flex">
        <div>
            <a className="flex rounded p-2 hover:bg-gray-100">
                <HomeIcon className="h-6 w-6" />
                <span className="ml-2 uppercase">Portada</span>
            </a>
        </div>
        <div>
            <a className="flex rounded p-2 hover:bg-gray-100">
                <ShoppingBagIcon className="h-6 w-6" />
                <span className="ml-2 uppercase">Tienda</span>
            </a>
        </div>
    </div>;
};

export default Menu;
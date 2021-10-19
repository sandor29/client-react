/**
 * Header
 */

import { ShoppingCartIcon } from "@heroicons/react/outline";

import NavDrawer from "./NavDrawer";
import NavMenu from "./NavMenu";
import NavDropdown from "./NavDropdown";

const Header = () => {

    return <header className="fixed border-b top-0 w-screen bg-white">
        <div className="flex p-1">

            <div className="flex-none block lg:hidden">
                <NavDrawer />
            </div>

            <div className="flex-grow p-2">
                <p className="text-center text-lg font-medium uppercase">APP REACT</p>
            </div>

            <div className="flex-grow hidden lg:block">
                <NavMenu />
            </div>

            <div className="flex-none">
                <button className="rounded p-2 hover:bg-gray-100">
                    <ShoppingCartIcon className="h-7 w-7" />
                </button>
            </div>

            <div className="flex-none lg:mr-10">
                <NavDropdown />
            </div>
        </div>
    </header>;
};

export default Header;
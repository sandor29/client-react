/**
 * Footer
 */

import { HomeIcon, ShoppingBagIcon, HeartIcon, UserIcon, }
    from "@heroicons/react/outline";

const Footer = () => {

    return <footer className="fixed border-t bottom-0 w-screen bg-white">
        <div className="flex justify-evenly p-1">

            <div className="rounded p-2 hover:bg-gray-100">
                <HomeIcon className="h-7 w-7" />
            </div>

            <div className="rounded p-2 hover:bg-gray-100">
                <ShoppingBagIcon className="h-7 w-7" />
            </div>

            <div className="rounded p-2 hover:bg-gray-100">
                <HeartIcon className="h-7 w-7" />
            </div>

            <div className="rounded p-2 hover:bg-gray-100">
                <UserIcon className="h-7 w-7" />
            </div>
        </div>
    </footer>;
};

export default Footer;
import { useState } from "react";

function NavBar() {
    // State for toggling the mobile menu
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-orange-500">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Brand Name as a clickable link */}
                <a
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="text-2xl font-semibold whitespace-nowrap">
                        Gruppe 1
                    </span></a>

                {/* Button to toggle mobile menu */}
                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-orange-600 focus:outline-none"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                    onClick={toggleMenu}>
                    <span className="sr-only">Åpne opp menyen</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14">
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>

                {/* Mobile menu items */}
                <div
                    className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
                    id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-orange-500 md:bg-orange-500">
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white"
                                aria-current="page">
                                Hjem
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white">
                                Om oss
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

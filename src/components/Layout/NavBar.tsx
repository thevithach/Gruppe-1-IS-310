import { useState } from "react";
import { scrollToProfileSection } from "../../util/scrollUtils";
import { Link, useLocation, useNavigate } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const handleOmOssClick = () => {
    navigate("/", { state: { scrollToProfile: true } });
  };
  return (
    <>
      <nav className="bg-[#fcf8f4] shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto py-5 lg:px-0 px-4 ">
          {/* Brand Name as a clickable link */}
          {location.pathname === "/HvorforOss" ? (
            <Link
              to="/"
              className="flex text-[#181819] hover:text-opacity-65 items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="text-2xl font-semibold whitespace-nowrap ">
                Prosjektgjennomføring
              </span>
            </Link>
          ) : (
            <a
              href="#header-section"
              className="flex text-[#181819] hover:text-opacity-65 items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="text-2xl font-semibold whitespace-nowrap ">
                Prosjektgjennomføring
              </span>
            </a>
          )}

          {/* Button to toggle mobile menu */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#11133c] rounded-lg md:hidden hover:bg-orange-100 focus:outline-none"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Åpne opp menyen</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Mobile menu items */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              {location.pathname === "/HvorforOss" ? (
                <>
                  <li>
                    <Link
                      to="/"
                      className="block py-2 px-3 text-[#181819] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0"
                    >
                      Hjem
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleOmOssClick}
                      className="block py-2 px-3 text-[#181819] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 cursor-pointer"
                    >
                      Om oss
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a
                      href="#header-section"
                      className="block py-2 px-3 text-[#181819] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0"
                    >
                      Hjem
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-2 px-3 text-[#181819] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 cursor-pointer"
                      onClick={scrollToProfileSection}
                    >
                      Om oss
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {/* Add padding to the top of the page content to avoid it being hidden behind the fixed navbar */}
      <div className="pt-20"></div>
    </>
  );
}

export default NavBar;

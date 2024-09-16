import { useState, useEffect } from "react";
import {
  scrollToHomeSection,
  scrollToProfileSection,
} from "../../util/scrollUtils";
import { Link, useLocation, useNavigate } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const themeToggleDarkIcon = document.getElementById(
      "theme-toggle-dark-icon"
    );
    const themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );
    const themeToggleBtn = document.getElementById("theme-toggle");

    if (!themeToggleDarkIcon || !themeToggleLightIcon || !themeToggleBtn) {
      console.error("Theme toggle elements not found");
      return;
    }

    // Set the initial state of the icons based on the current theme
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      themeToggleLightIcon.classList.remove("hidden");
    } else {
      document.documentElement.classList.remove("dark");
      themeToggleDarkIcon.classList.remove("hidden");
    }

    const toggleDarkMode = () => {
      // toggle icons inside button
      themeToggleDarkIcon.classList.toggle("hidden");
      themeToggleLightIcon.classList.toggle("hidden");

      // if set via local storage previously
      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        }
      } else {
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        }
      }
    };

    themeToggleBtn.addEventListener("click", toggleDarkMode);

    // Cleanup event listener on component unmount
    return () => {
      themeToggleBtn.removeEventListener("click", toggleDarkMode);
    };
  }, []);

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
      <nav className="bg-[#fcf8f4] dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b shadow-md">
        <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto py-4 lg:px-0 px-4 pl-6 ">
          {location.pathname === "/HvorforOss" ? (
            <Link
              to="/"
              onClick={scrollToHomeSection}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Prosjektgjennomføring
              </span>
            </Link>
          ) : (
            <a
              href="#home"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Prosjektgjennomføring
              </span>
            </a>
          )}
          <div className="flex items-center space-x-2">
            <div className="">
              <button
                id="theme-toggle"
                type="button"
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 "
              >
                <svg
                  id="theme-toggle-dark-icon"
                  className="hidden w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg
                  id="theme-toggle-light-icon"
                  className="hidden w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
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
          </div>
          <div
            className={`items-center justify-between ${
              isOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:items-center">
              {location.pathname === "/HvorforOss" ? (
                <>
                  <li>
                    <Link
                      to="/"
                      onClick={scrollToHomeSection}
                      className="block py-2 px-3 text-white bg-orange-500 rounded md:bg-transparent md:text-orange-500 md:p-0 md:dark:text-orange-500"
                      aria-current="page"
                    >
                      Hjem
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleOmOssClick}
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Om oss
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a
                      href="#home"
                      className="block py-2 px-3 text-white bg-orange-500 rounded md:bg-transparent md:text-orange-500 md:p-0 md:dark:text-orange-500"
                      aria-current="page"
                    >
                      Hjem
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
      <div className="pt-20" id="home"></div>
    </>
  );
}

export default NavBar;

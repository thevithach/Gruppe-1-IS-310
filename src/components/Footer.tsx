import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-700 py-6">
      <div className="container mx-auto text-center">
        <ul className="list-none flex justify-center gap-4 mb-4">
          <li>
            <a
              href="https://github.com/thevithach/Gruppe-1-IS-310"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa-brands fa-github"
                style={{ fontSize: "30px", color: "black" }}
              ></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa-brands fa-linkedin"
                style={{ fontSize: "30px", color: "black" }}
              ></i>
            </a>
          </li>
        </ul>
        <p>
          Issa Al-Musawi, Nhan Thomas Nguyen, Omar Passi, Tony Nguyen Le, Vi The
          Thach og Viktor Johan Kalhovd
        </p>
        <p>© 2024 • Gruppe 1</p>
      </div>
    </footer>
  );
};

export default Footer;

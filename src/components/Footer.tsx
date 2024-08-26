import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-700 py-6">
      <div className="container mx-auto text-center">
        <ul className="list-none flex justify-center gap-4 mb-4">
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/linkedin-icon.png"
                alt="LinkedIn"
                width="30"
                height="30"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/thevithach/Gruppe-1-IS-310"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/github-icon.png"
                alt="GitHub"
                width="30"
                height="30"
              />
            </a>
          </li>
        </ul>
        <p>
          Issa Al-Musawi, Nhan Thomas Nguyen, Omar Passi, Tony Nguyen
          Le, Vi The Thach og Viktor Johan Kalhovd
        </p>
        <p>© 2024 • Gruppe 1</p>
      </div>
      <style>
        {`
          footer {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }
          footer img {
            width: 30px;
            height: 30px;
            transition: transform 0.3s ease, filter 0.3s ease;
          }
          footer img:hover {
            transform: scale(1.1);
            filter: brightness(0.8);
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;

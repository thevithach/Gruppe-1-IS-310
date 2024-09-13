import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0e1035] text-gray-300 py-8 shadow-[0_10px_50px_rgba(14,16,53,0.8)]">
      <div className="container mx-auto text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-4 md:mb-0">
            <h1 className="font-semibold text-lg">Ta kontakt med oss</h1>
            <ul className="list-none mt-2 space-y-2">
              <li className="text-base">
                Email: <a href="mailto:nt.thom.ng@gmail.com" className="text-gray-300 underline hover:text-orange-500 duration-300">nt.thom.ng@gmail.com</a>
              </li>
              <li className="text-base">Nummer: 90620256</li>
            </ul>
          </div>
          <div className="text-sm text-gray-400 text-center md:text-right md:mt-10">
            <p className="mb-2">Issa Al-Musawi, Nhan Thomas Nguyen, Omar Passi, Tony Nguyen Le, Vi The Thach og Viktor Johan Kalhovd</p>
            <p>© 2024 • Gruppe 1</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const Header = () => (
  <div className="relative container mx-auto px-4 py-48 ">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full opacity-30 transform -translate-x-20 -translate-y-20"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-64 bg-orange-500 opacity-30 transform -translate-x-16 -translate-y-56 rotate-12"></div>
      <div className="absolute bottom-24 right-0 w-40 h-40 bg-orange-500 rounded-full opacity-30 transform translate-x-16 translate-y-0"></div>
    </div>

    <div className="relative flex flex-col md:flex-row items-center justify-between mb-8">
      <div className="md:w-1/2 mb-4 md:mb-0">
        <h1 className="text-5xl font-bold mb-1 text-orange-500">Hei sann!</h1>
        <h2 className="text-2xl text-gray-700">Vi er Gruppe 1</h2>
        <p className="text-lg text-black-600 max-w-screen-sm mt-10 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui.
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src="./src/assets/group.jpg"
          alt="group-image"
          className="w-3/4 h-auto rounded-lg shadow-lg mx-36 border-4 border-orange-500"
        />
      </div>
    </div>
  </div>
);

export default Header;

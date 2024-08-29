
const Header = () => (
  <div className="relative md:py-40 mb-16 max-w-screen-max mx-auto">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-orange-500 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-32 md:w-96 md:h-64 bg-orange-500 opacity-30 transform -translate-x-1/2 -translate-y-1/2 rotate-12"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 md:w-40 md:h-40 bg-orange-500 rounded-full opacity-30 transform translate-x-1/2 translate-y-1/2"></div>
    </div>
    <div className="relative flex flex-col items-center md:items-stretch md:flex-row justify-between">
      <div className="w-auto mb-10 pt-10 mx-5 md:w-6/12 md:pr-10 md:pl-24 md:pt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-orange-500">Hei sann!</h1>
        <h2 className="text-xl md:text-2xl text-gray-700 mb-4">Vi er Gruppe 1</h2>
        <p className="text-base md:text-lg text-black-600 leading-relaxed mt-4 md:mt-6">
          Vi er en gruppe på seks IT-studenter som har valgt å samarbeide om bacheloroppgaven. Flere av oss har tidligere jobbet sammen i tidligere semestre,
          noe som har ført til gode karakterer, godt samhold og samarbeid. Gjennom studiet har vi tilegnet oss solid kompetanse
          innen systemutvikling og en sterk interesse for IT-systemer. Målet vårt for bacheloroppgaven er å finne en oppdragsgiver som kan utfordre
          våre ferdigheter og utvide vår kunnskap. Vi er motivert for å lære nye konsepter og ser frem til å ta fatt på en kompleks men spennende oppgave.
        </p>
      </div>
      <div className="w-auto flex justify-center md:w-5/12">
        <img
          src="./src/assets/group.jpg"
          alt="group-image"
          className="w-full max-w-md md:max-w-2xl md:mr-24 h-auto rounded-lg shadow-lg border-4 border-orange-500"
        />
      </div>
    </div>
  </div>
);

export default Header;

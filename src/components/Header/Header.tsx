import WhyUsBanner from "./WhyUsBanner";
import GroupImage from "../../assets/group.jpg";

const Header = () => (
  <>
    <div className="relative md:py-40 max-w-screen-max mx-auto">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-32 md:w-96 md:h-64 bg-orange-200 opacity-30  transform -translate-x-1/2 -translate-y-1/2 rotate-12"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 md:w-40 md:h-40  bg-indigo-950  rounded-full transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="relative flex flex-col lg:gap-16 gap-4 items-center justify-center lg:justify-normal lg:flex-row  lg:flex-nowrap max-w-screen-lg mx-auto  py-8 md:py-0">
        <div className="w-3/4 lg:w-3/4">
          <h2 className="text-xl md:text-2xl text-[#ff8949] font-medium text-center lg:text-left">
            Vi er Gruppe 1
          </h2>

          <h1 className="text-4xl md:text-5xl font-bold text-black py-2 text-center lg:text-left ">
            Hei sann!
          </h1>
          <p className="text-base md:text-lg text-black-600 leading-relaxed py-2 align-left">
            Vi er en gruppe på seks IT-studenter som har valgt å samarbeide om
            bacheloroppgaven. Flere av oss har tidligere jobbet sammen i
            tidligere semestre, noe som har ført til gode karakterer, godt
            samhold og samarbeid. Gjennom studiet har vi tilegnet oss solid
            kompetanse innen systemutvikling og en sterk interesse for
            IT-systemer. Målet vårt for bacheloroppgaven er å finne en
            oppdragsgiver som kan utfordre våre ferdigheter og utvide vår
            kunnskap. Vi er motivert for å lære nye konsepter og ser frem til å
            ta fatt på en kompleks men spennende oppgave.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={GroupImage}
            alt="group-image"
            className="lg:h-full lg:w-auto size-4/5 rounded-lg shadow-lg border-4 border-orange-500"
          />
        </div>
      </div>
      <WhyUsBanner />
    </div>
  </>
);

export default Header;

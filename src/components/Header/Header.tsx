import BoxReveal from "../@/components/magicui/box-reveal";
import WhyUsBanner from "./WhyUsBanner";
import GroupImage from "../../assets/group0.png";

const Header = () => (
  <>
    <div
      id="home"
      className="relative md:py-40 max-w-screen-max sm:pt-12 sm:pb-8 pb-8 max-w-screen-max mx-auto bg-[#fcf8f4] dark:bg-gray-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1 left-0 w-32 h-32 md:w-56 md:h-56 bg-[#ff8949] rounded-full transform -translate-x-1/2"></div>
        <div className="absolute top-1/2 right-0 w-48 h-32 md:w-96 md:h-64 bg-orange-200 opacity-30  transform -translate-x-1/2 -translate-y-1/2 rotate-12"></div>

        <div className="absolute bottom-0 right-0 w-20 h-20 md:w-40 md:h-40 bg-indigo-950 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="relative flex flex-col lg:gap-16 gap-4 items-center justify-center lg:justify-normal lg:flex-row lg:flex-nowrap max-w-screen-lg mx-auto pb-8 pt-16 md:py-0">
        <div className="flex flex-col justify-center items-center lg:justify-normal lg:items-start lg:w-4/5">
          <BoxReveal>
            <h2 className="text-lg md:text-md text-[#ff8949] dark:text-[#ffb380] font-medium text-center lg:text-left">
              Gruppe 1
            </h2>
          </BoxReveal>
          <BoxReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-[#11133c] dark:text-white py-2">
              Hei oppdragsgiver!
            </h1>
          </BoxReveal>
          <div className="flex justify-center items-center w-4/5 lg:w-full">
            <BoxReveal>
              <p className="text-base md:text-lg text-[#010203] dark:text-gray-300 leading-relaxed py-2">
                Vi er en gruppe på seks IT-studenter som har valgt å samarbeide
                om bacheloroppgaven. Flere av oss har tidligere jobbet sammen i
                tidligere semestre, noe som har ført til gode karakterer, godt
                samhold og samarbeid. Gjennom studiet har vi tilegnet oss solid
                kompetanse innen systemutvikling og en sterk interesse for
                IT-systemer. Målet vårt for bacheloroppgaven er å finne en
                oppdragsgiver som kan utfordre våre ferdigheter og utvide vår
                kunnskap. Vi er motivert for å lære nye konsepter og ser frem
                til å ta fatt på en kompleks men spennende oppgave.
              </p>
            </BoxReveal>
          </div>
        </div>
        <div className="flex justify-center items-center size-4/5">
          <BoxReveal>
            <img
              src={GroupImage}
              alt="group-image"
              loading="lazy"
              className="lg:w-[480px] rounded-lg shadow-lg border-2 border-[#1d2b51] dark:border-gray-700"
            />
          </BoxReveal>
        </div>
      </div>
      <WhyUsBanner />
    </div>
  </>
);

export default Header;

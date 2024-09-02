import { useEffect } from "react";
import GroupImage from "../assets/group.jpg";
import BoxReveal from "../components/@/components/magicui/box-reveal";
import "./WhyUsPage.css";

const WhyUsPage = () => {
  useEffect(() => {
    const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
    const numBalls = 25;
    const balls: HTMLDivElement[] = [];

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add("ball");
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random()}em`;
      ball.style.height = ball.style.width;
      ball.style.zIndex = 1; 

      balls.push(ball);
      document.body.append(ball);
    }

    balls.forEach((el, i) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12,
      };

      el.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${to.x}rem, ${to.y}rem)` },
        ],
        {
          duration: (Math.random() + 1) * 2000,
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });


    return () => {
      balls.forEach((ball) => ball.remove());
    };
  }, []); 

  
  return (
    <div className="relative md:py-20 max-w-screen-max mx-auto bg-[#fcf8f4]">
      <div className="relative flex flex-col lg:gap-16 gap-4 items-center justify-center lg:justify-normal lg:flex-nowrap max-w-screen-lg mx-auto  py-8 md:py-0 content-container">
        <h1 className="text-4xl md:text-5xl font-bold text-[#11133c] py-1">
          Hvorfor velge oss?
        </h1>
        <BoxReveal>
          <div className="flex lg:h-full lg:w-auto justify-center items-center">
            <img
              src={GroupImage}
              alt="group-image"
              className="size-4/5 rounded-lg shadow-lg border-4 border-orange-500"
            />
          </div>
          <p className="text-base text-justify md:text-lg text-[#010203] leading-relaxed pt-10 px-7">
            Vi er en ivrig prosjektgruppe bestående av seks studenter som har
            bestemt seg for å samarbeide rundt vårt bachelorprosjekt. Gruppen
            har valgt å slutte seg sammen på bakgrunn av vårt store engasjement
            for IT, og vi ønsker derfor å utnytte vår lidenskap til å fordype
            oss i et prosjekt som gagner både oppdragsgiver og oss. Gjennom
            studieforløpet har gruppen opparbeidet seg både teoretiske og
            praktiske ferdigheter, og gjennom agil metodikk ser vi frem til å
            bruke disse til å oppnå vårt prosjektmål. Gruppen har også dannet
            seg en arbeidsdynamikk der vi ikke er sterkere enn vårt svakeste
            ledd, noe som har ført til at vi effektivt tar i bruk enkeltpersoners
            ferdigheter, erfaringer og styrker til å skape et arbeidsmiljø som
            både er inkluderende, givende og ikke minst effektivt. Denne
            åpenheten og troverdigheten blant gruppen gir oss styrke til å kunne
            utfylle hverandres ønsker og samtidig oppnå våre mål ved et gitt
            arbeid, og vi ser derfor frem til å vise dette til oppdragsgiver.
          </p>
        </BoxReveal>
      </div>
    </div>
  );
};

export default WhyUsPage;
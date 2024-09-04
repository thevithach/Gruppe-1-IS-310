import { useEffect } from "react";
import GroupImage from "../assets/group.jpg";
import BoxReveal from "../components/@/components/magicui/box-reveal";
import "./WhyUsPage.css";
import StrategyCard from "../components/WhyUsPage/StrategyCard";
import {
  collaborationAndToolsContent,
  qualityAndImprovementContent,
  scrumDialogContent,
} from "../components/WhyUsPage/StrategyDialog/strategyDialogContent";

const WhyUsPage = () => {
  useEffect(() => {
    const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
    const numBalls = 25;
    const balls: HTMLDivElement[] = [];
    const container = document.getElementById("ball-container");

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add("ball");
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}%`;
      ball.style.top = `${Math.floor(Math.random() * 100)}%`;
      ball.style.transform = `scale(${Math.random()})`;
      const size = `${Math.random()}em`;
      ball.style.width = size;
      ball.style.height = size;
      ball.style.position = "absolute";
      ball.style.zIndex = "1";

      balls.push(ball);
      container?.append(ball);
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
    <>
      <div
        className="relative md:py-16 max-w-screen-xl mx-auto bg-[#fcf8f4] overflow-hidden"
        id="ball-container"
      >
        <div className="relative flex flex-col lg:gap-16 gap-4 items-center justify-center lg:justify-normal lg:flex-nowrap max-w-screen-lg mx-auto  py-8 md:py-0 content-container">
          <h1 className="text-4xl md:text-5xl font-bold text-[#11133c] py-1">
            Hvorfor velge oss?
          </h1>
          <BoxReveal>
            <div className="flex lg:h-full lg:w-auto justify-center items-center">
              <img
                src={GroupImage}
                alt="group-image"
                className="size-4/5 rounded-lg shadow-lg border-2 border-orange-500"
              />
            </div>
          </BoxReveal>
          <BoxReveal>
            <p className="text-base text-justify md:text-lg text-[#010203] leading-relaxed px-7">
              Vi er en ivrig prosjektgruppe bestående av seks studenter som har
              bestemt seg for å samarbeide rundt vårt bachelorprosjekt. Gruppen
              har valgt å slutte seg sammen på bakgrunn av vårt store
              engasjement for IT, og vi ønsker derfor å utnytte vår lidenskap
              til å fordype oss i et prosjekt som gagner både oppdragsgiver og
              oss. Gjennom studieforløpet har gruppen opparbeidet seg både
              teoretiske og praktiske ferdigheter, og gjennom agil metodikk ser
              vi frem til å bruke disse til å oppnå vårt prosjektmål. Gruppen
              har også dannet seg en arbeidsdynamikk der vi ikke er sterkere enn
              vårt svakeste ledd, noe som har ført til at vi effektivt tar i
              bruk enkeltpersoners ferdigheter, erfaringer og styrker til å
              skape et arbeidsmiljø som både er inkluderende, givende og ikke
              minst effektivt. Denne åpenheten og troverdigheten blant gruppen
              gir oss styrke til å kunne utfylle hverandres ønsker og samtidig
              oppnå våre mål ved et gitt arbeid, og vi ser derfor frem til å
              vise dette til oppdragsgiver.
            </p>
          </BoxReveal>
        </div>
      </div>
      <div className="bg-[#11133c] mt-10 pb-2">
        <div className="max-w-screen-lg mx-auto py-4">
          <h2 className="text-center text-4xl font-semibold text-[#fcf8f4] pb-2">
            Strategi
          </h2>
          <p className="px-7 pb-5 text-[#fcf8f4] md:text-lg">
            Her gir vi en innføring i hvordan vi planlegger å håndtere neste
            semesters bacheloroppgave. Vår strategi er utviklet for å maksimere
            effektiviteten og kvaliteten på vårt fremtidige prosjekt, hvor vi
            definerer klare mål og en strukturert tilnærming. Vi fokuserer på
            grundig undersøkelse, tydelig kommunikasjon og kontinuerlig
            evaluering for å sikre at vi møter alle krav og forventninger. Bli
            kjent med vår strategi for å forstå hvordan vi vil navigere gjennom
            oppgavers ulike faser, og hvordan vi sikrer at vi leverer et solid
            og vellykket prosjekt.
          </p>
          <div className="flex px-7 gap-4 flex-col custom-md:flex-row flex-wrap  ">
            <StrategyCard
              icon="fa-solid fa-diagram-project fa-xl"
              title={"Prosjektstyring"}
              bulletpoint1="Scrum"
              bulletpoint2="Daglige standups"
              bulletpoint3="Sprintplanlegging"
              dialogContent={scrumDialogContent}
            />
            <StrategyCard
              icon="fa-solid fa-code-branch fa-xl"
              title={"Samarbeid og Verktøy"}
              bulletpoint1="Oppgavestyring"
              bulletpoint2="Dokumentasjon"
              bulletpoint3="Versjonskontroll"
              dialogContent={collaborationAndToolsContent}
            />
            <StrategyCard
              icon="fa-solid fa-file-shield fa-xl"
              title={"Kvalitetssikring"}
              bulletpoint1="Testing"
              bulletpoint2="Kontinuerlig forbedring"
              bulletpoint3="Tiltak"
              dialogContent={qualityAndImprovementContent}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUsPage;

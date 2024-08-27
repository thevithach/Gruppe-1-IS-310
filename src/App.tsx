import "./output.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProfileCard from "./components/About/ProfileCard";
import TheviBilde from "./assets/thevi-profile.jpeg";
import TonyBilde from "./assets/tony-profile.jpg";
import ThomasBilde from "./assets/thomas.profile.jpg";
import Header from "./components/Header.tsx";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />

        <div className="flex-grow">
          <Header />
          {/* Your page content goes here */}
          <hr className="container mx-auto max-w-screen-lg border-orange-400 pb-3" />
          <ProfileCard
            name="Issa"
            title="Student | Full-Stack Utvikler"
            university="Universitet i Agder"
            githubUrl="https://github.com/thevithach"
            linkedinUrl="https://www.linkedin.com/in/vithethach/"
            imageUrl={TheviBilde}
            description="Vi The Thach er en engasjert IT-student på 24 år fra Kristiansand, med en dyp interesse for teknologi og problemløsning. Han har utviklet en bred kompetanse innen IT, med spesielt fokus på Full-Stack utvikling. Med analytisk tenkning, sterk teknisk forståelse, og solide feilsøkingsevner, er Vi alltid klar til å påta seg nye utfordringer og tilegne seg ny kunnskap. Han kombinerer nysgjerrighet med en sterk arbeidsetikk, og ser på hver oppgave som en mulighet til å utvikle seg. For tiden er Vi i praksis hos Phonero, hvor han får praktisk erfaring og videreutvikler sine ferdigheter innen programvareutvikling."
            skills={{
              frontend: [
                "React",
                "TypeScript",
                "Tailwind",
                "Redux",
                "GraphQL",
                "CSS",
                "HTML",
              ],
              backend: ["C#", "Java", "Python", "Golang", "TypeScript"],
              database: ["MySQL", "MariaDB", "PostgreSQL", "MS SQL"],
              tools: ["Docker", "Git", "npm", "Agile Methodology", "Azure"],
            }}
            additionalInfo="Vi The Thach er praksisstudent hos Phonero høsten 2024, for mer informasjon besøk -"
            personalWebsite="thevithach.vercel.app"
          />
          <ProfileCard
            name="Nhan Thomas Trong Nguyen"
            title="Student | Full-Stack Utvikler"
            university="Universitet i Agder"
            githubUrl="https://github.com/NThomTNg"
            linkedinUrl="https://www.linkedin.com/in/nhan-thomas-nguyen-024860253/"
            imageUrl={ThomasBilde}
            description="Nhan Thomas er en engasjert IT-student på 22 år fra Trondheim, med en stor interesse for teknologi og data. Gjennom flere år på universitet så har han utviklet en solid kompentanse innen IT. Dette gjelder både back-end og front-end. Nysgjerrighet og prøve ved feil har gitt han en god forståelse og kunnskap innenfor feltet, og han er alltid klar for å lære noe nytt og løse utfordringer. Gjennom høsten 2024 jobber Thomas hos Swipload, der han lærer veldig mye praktisk og profesjonell erfaring som kommer til å utvikle videre hans kompentanse."
            skills={{
              frontend: [
                "React",
                "Svelte",
                "TypeScript",
                "Javascript",
                "Tailwind",
                "Bootstrap",
              ],
              backend: ["C#", "Java", "Python", "Golang", "TypeScript"],
              database: ["MySQL", "Azure", "PostgreSQL", "Mongo DB"],
              tools: ["Docker", "Git", "npm", "Azure"],
            }}
            additionalInfo="Thomas jobber praksis hos Swipload i høst-perioden 2024 -"
            personalWebsite="https://nthomtng.github.io/PraksisNettSide/"
          />
          <ProfileCard
            name="Omar"
            title="Student | Full-Stack Utvikler"
            university="Universitet i Agder"
            githubUrl="https://github.com/thevithach"
            linkedinUrl="https://www.linkedin.com/in/vithethach/"
            imageUrl={TheviBilde}
            description="Vi The Thach er en engasjert IT-student på 24 år fra Kristiansand, med en dyp interesse for teknologi og problemløsning. Han har utviklet en bred kompetanse innen IT, med spesielt fokus på Full-Stack utvikling. Med analytisk tenkning, sterk teknisk forståelse, og solide feilsøkingsevner, er Vi alltid klar til å påta seg nye utfordringer og tilegne seg ny kunnskap. Han kombinerer nysgjerrighet med en sterk arbeidsetikk, og ser på hver oppgave som en mulighet til å utvikle seg. For tiden er Vi i praksis hos Phonero, hvor han får praktisk erfaring og videreutvikler sine ferdigheter innen programvareutvikling."
            skills={{
              frontend: [
                "React",
                "TypeScript",
                "Tailwind",
                "Redux",
                "GraphQL",
                "CSS",
                "HTML",
              ],
              backend: ["C#", "Java", "Python", "Golang", "TypeScript"],
              database: ["MySQL", "MariaDB", "PostgreSQL", "MS SQL"],
              tools: ["Docker", "Git", "npm", "Agile Methodology", "Azure"],
            }}
            additionalInfo="Vi The Thach er praksisstudent hos Phonero høsten 2024, for mer informasjon besøk -"
            personalWebsite="thevithach.vercel.app"
          />
          <ProfileCard
            name="Tony Nguyen Le"
            title="Student | Full-Stack Utvikler"
            university="Universitet i Agder"
            githubUrl="https://github.com/TonyLe02"
            linkedinUrl="https://www.linkedin.com/in/tonynl02"
            imageUrl={TonyBilde}
            description="Tony Nguyen Le er en engasjert IT-student på 22 år fra Lillesand, med en dyp interesse for teknologi og problemløsning. Han har utviklet en bred kompetanse innen IT, med spesielt fokus på Full-Stack utvikling. Med analytisk tenkning, sterk teknisk forståelse, og solide feilsøkingsevner, er Vi alltid klar til å påta seg nye utfordringer og tilegne seg ny kunnskap. Han kombinerer nysgjerrighet med en sterk arbeidsetikk, og ser på hver oppgave som en mulighet til å utvikle seg. For tiden er Vi i praksis hos Phonero, hvor han får praktisk erfaring og videreutvikler sine ferdigheter innen programvareutvikling."
            skills={{
              frontend: [
                "TypeScript",
                "Tailwind",
                "Redux",
                "GraphQL",
                "CSS",
                "HTML",
              ],
              backend: ["C#", "Java", "Python", "Golang", "TypeScript"],
              database: ["MySQL", "MariaDB", "PostgreSQL", "MS SQL"],
              tools: ["Docker", "Git", "npm", "Agile Methodology", "Azure"],
            }}
            additionalInfo="Tony Nguyen Le er praksisstudent hos Swipload høsten 2024, for mer informasjon besøk -"
            personalWebsite="https://leworks.vercel.app/"
          />
          <ProfileCard
            name="Vi The Thach"
            title="Student | Full-Stack Utvikler"
            university="Universitet i Agder"
            githubUrl="https://github.com/thevithach"
            linkedinUrl="https://www.linkedin.com/in/vithethach/"
            imageUrl={TheviBilde}
            description="Vi The Thach er en engasjert IT-student på 24 år fra Kristiansand, med en dyp interesse for teknologi og problemløsning. Han har utviklet en bred kompetanse innen IT, med spesielt fokus på Full-Stack utvikling. Med analytisk tenkning, sterk teknisk forståelse, og solide feilsøkingsevner, er Vi alltid klar til å påta seg nye utfordringer og tilegne seg ny kunnskap. Han kombinerer nysgjerrighet med en sterk arbeidsetikk, og ser på hver oppgave som en mulighet til å utvikle seg. For tiden er Vi i praksis hos Phonero, hvor han får praktisk erfaring og videreutvikler sine ferdigheter innen programvareutvikling."
            skills={{
              frontend: [
                "React",
                "TypeScript",
                "Tailwind",
                "Redux",
                "GraphQL",
                "CSS",
                "HTML",
              ],
              backend: ["C#", "Java", "Python", "Golang", "TypeScript"],
              database: ["MySQL", "MariaDB", "PostgreSQL", "MS SQL"],
              tools: ["Docker", "Git", "npm", "Agile Methodology", "Azure"],
            }}
            additionalInfo="Vi The Thach er praksisstudent hos Phonero høsten 2024, for mer informasjon besøk -"
            personalWebsite="https://thevithach.vercel.app"
          />
          <ProfileCard
            name="Viktor"
            title="Student | Full-Stack Utvikler"
            university="Universitet i Agder"
            githubUrl="https://github.com/thevithach"
            linkedinUrl="https://www.linkedin.com/in/vithethach/"
            imageUrl={TheviBilde}
            description="Vi The Thach er en engasjert IT-student på 24 år fra Kristiansand, med en dyp interesse for teknologi og problemløsning. Han har utviklet en bred kompetanse innen IT, med spesielt fokus på Full-Stack utvikling. Med analytisk tenkning, sterk teknisk forståelse, og solide feilsøkingsevner, er Vi alltid klar til å påta seg nye utfordringer og tilegne seg ny kunnskap. Han kombinerer nysgjerrighet med en sterk arbeidsetikk, og ser på hver oppgave som en mulighet til å utvikle seg. For tiden er Vi i praksis hos Phonero, hvor han får praktisk erfaring og videreutvikler sine ferdigheter innen programvareutvikling."
            skills={{
              frontend: [
                "React",
                "TypeScript",
                "Tailwind",
                "Redux",
                "GraphQL",
                "CSS",
                "HTML",
              ],
              backend: ["C#", "Java", "Python", "Golang", "TypeScript"],
              database: ["MySQL", "MariaDB", "PostgreSQL", "MS SQL"],
              tools: ["Docker", "Git", "npm", "Agile Methodology", "Azure"],
            }}
            additionalInfo="Vi The Thach er praksisstudent hos Phonero høsten 2024, for mer informasjon besøk -"
            personalWebsite="thevithach.vercel.app"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

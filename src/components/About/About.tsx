import ProfileCard from "./ProfileCard";
import TheviBilde from "../../assets/thevi-profile.jpeg";
import TonyBilde from "../../assets/tony-profile.jpg";
import ThomasBilde from "../../assets/thomas.profile.jpg";
import viktorBilde from "../../assets/viktor-profile.jpg";

const About = () => {
  return (
    <div className="flex flex-col pb-8 mt-8 bg-[#fcf8f4]">
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
        description="Omar Passi er en engasjert IT-student på 21 år fra Kristiansand, med en stor lidenskap for teknologi. Gjennom studietiden har Omar utviklet en solid kompetanse innen både front-end og back-end utvikling. Han kombinerer nysgjerrighet med sterk arbeidsetikk, og har en dyp interesse for å utvikle innovative løsninger. Omar trives med å løse komplekse problemer, og benytter sin analytiske ferdigheter og feilsøkingsevner for å finne de beste løsningene. For tiden er Omar i praksis hos Universitetet i Agder, hvor han får verdifull praktisk erfaring og videreutvikler sine ferdigheter innen programvareutvikling."
        skills={{
          frontend: ["React", "JavaScript", "Bootstrap", "CSS", "HTML"],
          backend: ["C#", "Java", "Python", "Golang", "PHP"],
          database: ["MySQL", "MariaDB", "PostgreSQL", "MongoDB"],
          tools: ["Docker", "Git"],
        }}
        additionalInfo="Omar er praksisstudent hos UiA høsten 2024, for mer informasjon besøk -"
        personalWebsite="MÅ-LEGGE-INN-GOOGLE-SIDEN!!"
      />
      <ProfileCard
        name="Tony Nguyen Le"
        title="Student | Full-Stack Utvikler"
        university="Universitet i Agder"
        githubUrl="https://github.com/TonyLe02"
        linkedinUrl="https://www.linkedin.com/in/tonynl02"
        imageUrl={TonyBilde}
        description="Tony Nguyen Le er en 22 år gammel IT-student fra Lillesand med en stor lidenskap for teknologi og problemløsning. Han har bygget en solid kompetanse innen IT, med spesielt fokus på Full-Stack utvikling. Med skarp analytisk tenkning og sterke feilsøkingsevner, er Tony alltid klar for nye utfordringer og muligheter til å lære. Han kombinerer nysgjerrighet med en sterk arbeidsetikk, og ser hver oppgave som en sjanse til å vokse. For tiden er han praksisstudent hos Swipload, hvor han videreutvikler sine ferdigheter innen programvareutvikling."
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
          tools: ["Docker", "Git", "npm", "DevOps Methodology", "Azure"],
        }}
        additionalInfo="Lær mer om Tony Nguyen Le ved å besøke hans nettside -"
        personalWebsite="https://leworks.vercel.app/"
      />
      <ProfileCard
        name="Vi The Thach"
        title="Student | Full-Stack Utvikler"
        university="Universitet i Agder"
        githubUrl="https://github.com/thevithach"
        linkedinUrl="https://www.linkedin.com/in/vithethach/"
        imageUrl={TheviBilde}
        description="Vi The Thach er en engasjert IT-student på 24 år fra Kristiansand, med en dyp interesse for teknologi og problemløsning. Han har utviklet en bred kompetanse innen IT, med spesielt fokus på Full-Stack utvikling. Med analytisk tenkning, sterk teknisk forståelse, og innovative løsninger er Vi alltid klar til å påta seg nye utfordringer og tilegne seg ny kunnskap. Han kombinerer nysgjerrighet med en sterk arbeidsetikk, og ser på hver oppgave som en mulighet til å utvikle seg. For tiden er Vi i praksis hos Phonero, hvor han får praktisk erfaring og videreutvikler sine ferdigheter innen programvareutvikling."
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
        githubUrl="httpsgithub.comViktorJGK"
        linkedinUrl="httpswww.linkedin.cominviktor-johan-glenne-kalhovd-4a0a14323"
        imageUrl={viktorBilde}
        description="Viktor Kalhovd, en 22 år gammel IT-student fra Egersund, har en sterk interesse for data, teknologi og problemløsning. Gjennom sitt studium ved Universitetet i Agder (UiA) har han utviklet en solid kompetanse innen IT, med en spesialisering i Full-Stack utvikling. Hans løsningsorienterte tilnærming, kombinert med en utholdende arbeidsmoral, har gitt ham en dyp forståelse av teknologiske utfordringer og de nødvendige ferdighetene for å løse komplekse problemer på en effektiv måte"
        skills={{
          frontend: ["TypeScript", "Tailwind", "CSS", "HTML"],
          backend: ["C#", "Java", "PHP", "Golang", "TypeScript"],
          database: ["MySQL", "MariaDB", "PostgreSQL", "MS SQL"],
          tools: ["Docker", "Git", "npm", "Agile Methodology"],
        }}
        additionalInfo=""
      />
    </div>
  );
};

export default About;

import ProfileCard from "./ProfileCard";
import TheviBilde from "../../assets/thevi-profile.jpeg";
import TonyBilde from "../../assets/tony-profile.jpg";
import ThomasBilde from "../../assets/thomas.profile.jpg";
import viktorBilde from "../../assets/viktor-profile.jpg";
import OmarBilde from "../../assets/omar-profile.jpg";
import issaBilde from "../../assets/issa-profile.jpg";

const About = () => {
  return (
    <div id="#about" className="flex flex-col pb-8 mt-8 bg-[#fcf8f4] dark:bg-gray-900">
      <ProfileCard
        name="Issa Al-Musawi"
        nameBold="Issa Al-Musawi"
        title="Student | Full-Stack Utvikler"
        university="Universitet i Agder"
        githubUrl="https://github.com/issaalmusawi"
        linkedinUrl="https://www.linkedin.com/in/issa-al-musawi-77684b96/"
        imageUrl={issaBilde}
        description=" er en engasjert IT-student på 29 år fra Kristiansand, med en dyp interesse for teknologi, problemløsning og ledelse. Han har fra tidligere en bachelorgrad i statsvitenskap, og har gjennom IT studiet også utviklet en bred kompetanse innen IT og informasjonssystemer, med spesielt fokus på Full-Stack utvikling. Med erfaringer fra arbeidslivet og tidligere studier har Issa opparbeidet seg evnen til å tenke analytisk, samt utviklet en sterk teknisk og teoretisk forståelse for de ulike omgivelsene han befinner seg i. Issa er alltid klar til å påta seg nye utfordringer og tilegne seg ny kunnskap, der han kombinerer nysgjerrighet med viljen til å lære, og ser på hver oppgave som en mulighet til å utvikle seg."
        skills={{
          frontend: ["JavaScript", "Tailwind", "Bootstrap", "CSS", "HTML"],
          backend: ["C#", "Java", "PHP", "Golang"],
          database: ["MySQL", "MariaDB"],
          tools: ["Docker", "Git", "npm", "Agile Methodology", "CLI"],
        }}
        additionalInfo=""
        personalWebsite=""
      />
      <ProfileCard
        name="Nhan Thomas Trong Nguyen"
        nameBold="Nhan Thomas"
        title="Student | Frontend Utvikler, Prosjekt Manager"
        university="Universitet i Agder"
        githubUrl="https://github.com/NThomTNg"
        linkedinUrl="https://www.linkedin.com/in/nhan-thomas-nguyen-024860253/"
        imageUrl={ThomasBilde}
        description=" er en engasjert IT-student på 22 år fra Trondheim, med en stor interesse for teknologi og data. Gjennom flere år på universitet så har han utviklet en solid kompentanse innen IT. Dette gjelder både back-end og front-end. Nysgjerrighet og prøve ved feil har gitt han en god forståelse og kunnskap innenfor feltet, og han er alltid klar for å lære noe nytt og løse utfordringer. Gjennom høsten 2024 jobber Thomas hos Swipload, der han lærer veldig mye praktisk og profesjonell erfaring som kommer til å utvikle videre hans kompentanse."
        skills={{
          frontend: [
            "React",
            "Svelte",
            "Next.js",
            "TypeScript",
            "Javascript",
            "Tailwind",
            "Bootstrap",
          ],
          backend: ["C#", "Java", "Python"],
          database: ["MySQL", "Azure Data Studio", "PostgreSQL", "Mongo DB"],
          tools: ["Docker", "Git", "npm", "Figma", "Scrum"],
        }}
        additionalInfo="Thomas jobber praksis hos Swipload i høst-perioden 2024 -"
        personalWebsite="https://nthomtng.github.io/PraksisNettSide/"
      />
      <ProfileCard
        name="Omar Passi"
        nameBold="Omar Passi"
        title="Student | Full-Stack Utvikler"
        university="Universitet i Agder"
        githubUrl="https://github.com/Omarp321"
        linkedinUrl="https://www.linkedin.com/in/omarpassi1/"
        imageUrl={OmarBilde}
        description=" er en engasjert IT-student på 21 år fra Kristiansand, med en stor lidenskap for teknologi. Gjennom studietiden har Omar utviklet en solid kompetanse innen både front-end og back-end utvikling. Han kombinerer nysgjerrighet med sterk arbeidsetikk, og har en dyp interesse for å utvikle innovative løsninger. Omar trives med å løse komplekse problemer, og benytter sin analytiske ferdigheter og feilsøkingsevner for å finne de beste løsningene. For tiden er Omar i praksis hos Universitetet i Agder, hvor han får verdifull praktisk erfaring og videreutvikler sine ferdigheter innen programvareutvikling."
        skills={{
          frontend: ["React", "JavaScript", "Bootstrap", "CSS", "HTML"],
          backend: ["C#", "Java", "Python", "Golang", "PHP"],
          database: ["MySQL", "MariaDB", "PostgreSQL", "MongoDB"],
          tools: ["Docker", "Git"],
        }}
        additionalInfo="Omar er praksisstudent hos UiA høsten 2024, for mer informasjon besøk -"
        personalWebsite="https://sites.google.com/view/UiA-Praksisprosjekt"
      />
      <ProfileCard
        name="Tony Nguyen Le"
        nameBold="Tony Nguyen Le "
        title="Student | Full-Stack Utvikler"
        university="Universitet i Agder"
        githubUrl="https://github.com/TonyLe02"
        linkedinUrl="https://www.linkedin.com/in/tonynl02"
        imageUrl={TonyBilde}
        description=" er en 22 år gammel IT-student fra Lillesand med en dyp lidenskap for teknologi og en sterk interesse for problemløsning. Gjennom sitt studium ved Universitetet i Agder og sin rolle som styreleder i NITO Studentene Kristiansand, har han utviklet omfattende kompetanse innen full-stack utvikling og teknologi. Han er kjent for sin analytiske tilnærming, sterke feilsøkingsevner, og evne til å lede og samarbeide effektivt."
        descriptionSecondParagraph="Han har også erfaring som læringsassistent, som har gitt ham en dyp forståelse av komplekse teknologiske utfordringer og et solid fundament i programvareutvikling. I sin nåværende praksis hos Swipload Technologies AS er han involvert i spennende prosjekter som gir ham muligheten til å anvende og videreutvikle sine ferdigheter i en profesjonell setting. Han kombinerer sin nysgjerrighet med en sterk arbeidsetikk og ser hver oppgave som en mulighet til å vokse og forbedre seg."
        skills={{
          frontend: [
            "React",
            "Svelte",
            "Tailwind",
            "JavaScript",
            "CSS",
            "HTML",
          ],
          backend: ["C#", "Java", "Python", "Golang", "TypeScript", "PHP"],
          database: ["MySQL", "MariaDB", "PostgreSQL", "MS SQL"],
          tools: ["Docker", "Git", "npm", "DevOps Methodology", "Azure"],
        }}
        additionalInfo="For mer informasjon om Tony Nguyen Le og hans prosjekter, besøk nettsiden hans:"
        personalWebsite="https://leworks.vercel.app/"
      />
      <ProfileCard
        name="Vi The Thach"
        nameBold="Vi The Thach "
        title="Student | Full-Stack Utvikler"
        university="Universitet i Agder"
        githubUrl="https://github.com/thevithach"
        linkedinUrl="https://www.linkedin.com/in/vithethach/"
        imageUrl={TheviBilde}
        description=" er en lidenskapelig full-stack utviklerentusiast med allsidig arbeidserfaring som assistenthjelpepleier, mentor og læringsassistent, samt systemutvikler hos Phonero. Denne unike bakgrunnen har gitt ham en sterk forståelse for samspillet mellom mennesker og teknologi. Erfaringen som hjelpende pleier har utviklet hans empati og evne til å jobbe under press, mens rollen som mentor har styrket hans pedagogiske ferdigheter, evne til å forklare komplekse konsepter på en enkel måte, og ikke minst gjort ham bedre til å lede andre."
        descriptionSecondParagraph="Som systemutvikler hos Phonero kombinerer Vi sin tekniske innsikt med problemløsning for å skape effektive og innovative løsninger, noe som gjør ham i stand til å levere solide, brukervennlige produkter. Hans brede erfaring gjør ham til en dyktig utvikler med et skarpt blikk for detaljer."
        skills={{
          frontend: [
            "React",
            "TypeScript",
            "JavaScript",
            "Tailwind",
            "Redux",
            "GraphQL",
            "SCSS",
            "Jest",
          ],
          backend: ["C#", "Java", "Python", "Golang", "TypeScript"],
          database: ["MySQL", "MariaDB", "PostgreSQL", "MS SQL"],
          tools: ["Docker", "Git", "npm", "Agile Methodology", "Azure"],
        }}
        additionalInfo="Vi The Thach er praksisstudent hos Phonero høsten 2024, for mer informasjon besøk -"
        personalWebsite="https://thevithach.vercel.app"
      />

      <ProfileCard
        name="Viktor Johan Kalhovd"
        nameBold="Viktor Johan Kalhovd"
        title="Student | Full-Stack Utvikler"
        university="Universitet i Agder"
        githubUrl="https://github.com/ViktorJGK"
        linkedinUrl="https://www.linkedin.com/in/viktor-johan-glenne-kalhovd-4a0a14323/"
        imageUrl={viktorBilde}
        description=", en 22 år gammel IT-student fra Egersund, har en sterk interesse for data, teknologi og problemløsning. Gjennom sitt studium ved Universitetet i Agder (UiA) har han utviklet en solid kompetanse innen IT, med en spesialisering i Full-Stack utvikling. Hans løsningsorienterte tilnærming, kombinert med en utholdende arbeidsmoral, har gitt ham en dyp forståelse av teknologiske utfordringer og de nødvendige ferdighetene for å løse komplekse problemer på en effektiv måte"
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

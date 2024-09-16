import React from "react";

interface ProfileProps {
  name: string;
  nameBold?: string;
  title: string;
  university: string;
  githubUrl: string;
  linkedinUrl: string;
  imageUrl: string;
  description: string;
  descriptionSecondParagraph?: string;
  skills: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
  additionalInfo?: string;
  personalWebsite?: string;
}

const ProfileCard: React.FC<ProfileProps> = ({
  name,
  nameBold,
  title,
  university,
  githubUrl,
  linkedinUrl,
  imageUrl,
  description,
  descriptionSecondParagraph,
  skills,
  additionalInfo,
  personalWebsite,
}) => {
  return (
    <>
      <div
        id="profile-section"
        className="container mx-auto max-w-screen-lg min-h-min m-2 p-4 py-6 rounded-md bg-white dark:bg-gray-800"
      >
        <div className="flex lg:flex-row flex-col items-center lg:items-start lg:justify-normal justify-center lg:gap-8 gap-4">
          <div className="flex flex-col gap-2 w-1/2 justify-center items-center">
            <div className="self-center">
              <img
                src={imageUrl}
                alt={name}
                loading="lazy"
                className="w-[200px] md:w-[300px] max-w-[300px] rounded-full border dark:border-gray-700"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl text-center font-semibold text-[#11133c] dark:text-white">
                {name}
              </h2>
              <span className="text-center text-sm text-gray-700 dark:text-gray-300">
                {title}
              </span>
              <span className="text-center text-sm text-gray-700 dark:text-gray-300">
                {university}
              </span>

              <div className="flex gap-4 justify-center text-3xl py-2">
                <a href={githubUrl}>
                  <i
                    className="fa-brands fa-github text-black dark:text-white"
                    style={{ fontSize: "30px" }}
                  ></i>
                </a>
                <a href={linkedinUrl}>
                  <i
                    className="fa-brands fa-linkedin text-black dark:text-white"
                    style={{ fontSize: "30px" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="px-4">
              <p className="text-gray-800 dark:text-white">
                <strong>{nameBold}</strong>
                {description}
              </p>
              {descriptionSecondParagraph && (
                <>
                  <p className="text-gray-800 dark:text-white pt-2">
                    {descriptionSecondParagraph}
                  </p>
                </>
              )}
              <h2 className="py-2 font-semibold text-[#11133c] dark:text-white">
                Relevante IT-kompetanseområder inkluderer:
              </h2>
              <ul className="list-disc px-4 text-[#11133c] dark:text-white">
                <li>
                  <span className="font-semibold">Frontend-utvikling:</span>{" "}
                  {skills.frontend.join(", ")}
                </li>
                <li>
                  <span className="font-semibold">Backend-utvikling:</span>{" "}
                  {skills.backend.join(", ")}
                </li>
                <li>
                  <span className="font-semibold">Database-utvikling:</span>{" "}
                  {skills.database.join(", ")}
                </li>
                <li>
                  <span className="font-semibold">Utvikler-verktøy:</span>{" "}
                  {skills.tools.join(", ")}
                </li>
              </ul>
              <p className="py-2 text-gray-800 dark:text-white">
                {additionalInfo}{" "}
                <a
                  href={personalWebsite}
                  className="text-blue-500 dark:text-blue-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-200"
                >
                  {personalWebsite}
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr className="border-orange-400 mt-4 border-[1px]" />

        <style>
          {`
          .fa-brands {
            width: 30px;
            height: 30px;
            transition: transform 0.3s ease, filter 0.3s ease;
          }
          .fa-brands:hover {
            transform: scale(1.2);
            filter: brightness(0.8);
          }
        `}
        </style>
      </div>
    </>
  );
};

export default ProfileCard;

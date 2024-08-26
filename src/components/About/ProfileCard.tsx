import React from "react";

interface ProfileProps {
  name: string;
  title: string;
  university: string;
  githubUrl: string;
  linkedinUrl: string;
  imageUrl: string;
  description: string;
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
  title,
  university,
  githubUrl,
  linkedinUrl,
  imageUrl,
  description,
  skills,
  additionalInfo,
  personalWebsite,
}) => {
  return (
    <div className="container mx-auto max-w-screen-lg min-h-min p-4">
      <div className="flex lg:flex-row flex-col items-center lg:items-start lg:justify-normal justify-center lg:gap-8 gap-4">
        <div className="flex flex-col gap-2 w-1/2">
          <div className="self-center min-w-[330px]">
            <img
              src={imageUrl}
              alt={name}
              className="w-full max-w-[350px] lg:max-w-none rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl text-center font-semibold">{name}</h2>
            <span className="text-center text-sm text-gray-600">{title}</span>
            <span className="text-center text-sm text-gray-600">
              {university}
            </span>

            <div className="flex gap-4 justify-center text-3xl py-2">
              <a href={githubUrl}>
                <i className="fa-brands fa-github"></i>
              </a>
              <a href={linkedinUrl}>
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="px-4">
            <p className="text-gray-700 pb-2">{description}</p>
            <h2 className="py-2 font-semibold">
              Relevante IT-kompetanseområder inkluderer:
            </h2>
            <ul className="list-disc px-4">
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
            <p className="py-2">
              {additionalInfo}{" "}
              <a href={personalWebsite} className="text-blue-500">
                {personalWebsite}
              </a>
            </p>
          </div>
        </div>
      </div>
      <hr className="border-orange-400" />
    </div>
  );
};

export default ProfileCard;

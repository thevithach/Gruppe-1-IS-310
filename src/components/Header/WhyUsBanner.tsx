import React from "react";
import { Link } from "react-router-dom";

const WhyUsBanner = () => {
  return (
    <Link to="/HvorforOss">
      <div className="container max-w-screen-lg mx-auto pb-8 md:pt-8 flex justify-center lg:block">
        <div className="max-w-5xl lg:max-w-xl w-4/5">
          <div className="bg-white shadow-[0_2px_10px_0_rgba(0,0,0,0.1)] relative">
            <div className="p-2 px-4">
              <span className="rounded-md inline-block mb-3 lg:mb-0 py-1 px-2.5 mt-0.5 uppercase text-[9px] font-heading font-semibold tracking-wider text-orange-500 bg-orange-100">
                Mer
              </span>
            </div>

            <div className="pb-24 md:pb-6 lg:pb-5 pr-5 md:pr-32 lg:pr-28">
              <h4 className="font-heading font-semibold text-lg leading-tight mb-0.5 px-4">
                Hvorfor skal arbeidsgivere velge oss?
              </h4>
              <p className="text-gray-400 text-sm font-semibold px-4">
                Velg vår gruppe til bacheloroppgaven for å få innovative
                løsninger og strålende resultater. Med solid kompetanse innen IT
                og programmering, tilbyr vi effektiv problemløsning og høy
                kvalitet.
              </p>
            </div>
            <div className="overflow-hidden absolute bottom-0 md:bottom-[unset] md:top-0 right-0 h-full w-24 md:w-32 lg:w-24">
              <svg
                viewBox="0 0 111 118"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-3 md:bottom-[unset] md:top-0 right-0 h-[104px] md:h-full lg:h-[104px] rotate-90 md:rotate-0 w-auto transition-all text-orange-500 group-hover:text-orange-600"
              >
                <g
                  id="Desktop"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Homepage"
                    transform="translate(-594.000000, -537.000000)"
                    fill="currentColor"
                  >
                    <g
                      id="Page/Hero"
                      transform="translate(0.000000, 100.000000)"
                    >
                      <g
                        id="Promo-Banner"
                        transform="translate(75.000000, 437.000000)"
                      >
                        <g
                          id="Link-Tab"
                          transform="translate(519.000000, -0.000000)"
                        >
                          <polygon
                            id="Yellow-Cutout-Panel"
                            transform="translate(55.500000, 59.000000) scale(-1, -1) rotate(-270.000000) translate(-55.500000, -59.000000) "
                            points="-3.5 84.9155463 88.6453479 3.5 114.5 3.5 114.5 114.5 -3.5 114.5"
                          ></polygon>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                width="30px"
                height="24px"
                viewBox="0 0 30 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-5 md:bottom-[unset] md:top-9 lg:top-7 right-5 md:right-7 lg:right-5 transition-all text-white"
              >
                <g
                  id="Desktop"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Homepage"
                    transform="translate(-649.000000, -573.000000)"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <g
                      id="Page/Hero"
                      transform="translate(0.000000, 100.000000)"
                    >
                      <g
                        id="Promo-Banner"
                        transform="translate(75.000000, 437.000000)"
                      >
                        <g
                          id="Link-Tab"
                          transform="translate(519.000000, -0.000000)"
                        >
                          <g
                            id="Link/Arrow/Med"
                            transform="translate(54.000000, 33.000000)"
                          >
                            <path
                              d="M18.250226,4.39339828 L28.9409609,15 L18.250226,25.6066017 M28.9409609,15 L1.72679283,15"
                              id="Icon"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WhyUsBanner;

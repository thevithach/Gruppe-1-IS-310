import { StrategyDialog } from "./justTestin";

interface DialogContent {
  title: string;
  shortDescription: string;
  boldContentFirstParagraph: string;
  FirstParagraph: string;
  boldContentSecondParagraph: string;
  SecondParagraph: string;
  boldContentThirdParagraph: string;
  ThirdParagraph: string;
  boldContentFourthParagraph: string;
  FourthParagraph: string;
}

interface Prop {
  icon: string;
  title: string;
  bulletpoint1: string;
  bulletpoint2: string;
  bulletpoint3: string;
  dialogContent: DialogContent;
}

const StrategyCard = ({
  icon,
  title,
  bulletpoint1,
  bulletpoint2,
  bulletpoint3,
  dialogContent,
}: Prop) => {
  return (
    <div className="bg-[#fcf8f4] custom-md:w-[32%] xs:w-full p-4 rounded-md">
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 w-12 h-12 flex justify-center items-center rounded-lg">
        <i className={`${icon}`}></i>
      </div>
      <h3 className="text-lg font-semibold py-2 text-black">{title}</h3>
      <hr className="w-12 gradient-border pb-2" />
      <ul className="list-disc pl-[18px]">
        <li>{bulletpoint1}</li>
        <li>{bulletpoint2}</li>
        <li>{bulletpoint3}</li>
      </ul>
      <StrategyDialog {...dialogContent} />
    </div>
  );
};

export default StrategyCard;

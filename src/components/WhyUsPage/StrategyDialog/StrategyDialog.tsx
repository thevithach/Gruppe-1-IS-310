import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

export function StrategyDialog({
  title,
  shortDescription,
  boldContentFirstParagraph,
  FirstParagraph,
  boldContentSecondParagraph,
  SecondParagraph,
  boldContentThirdParagraph,
  ThirdParagraph,
  boldContentFourthParagraph,
  FourthParagraph,
}: DialogContent) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="cursor-pointer pt-2 underline w-14 hover:opacity-50">
          Se mer
        </p>
      </DialogTrigger>
      <DialogContent className="w-[90%] overflow-scroll sm:overflow-auto sm:max-w-[600px] sm:max-h-[90%] h-[90%] sm:h-auto  rounded-md dark:bg-gray-900">
        <DialogHeader>
          <DialogTitle className="dark:text-orange-400">{title}</DialogTitle>
          <DialogDescription>{shortDescription}</DialogDescription>
        </DialogHeader>
        <div className="dark:text-white">
          <p className="pb-2">
            <span className="font-semibold">{boldContentFirstParagraph}</span>{" "}
            {FirstParagraph}
          </p>
          <p className="pb-2">
            <span className="font-semibold">{boldContentSecondParagraph}</span>{" "}
            {SecondParagraph}
          </p>
          <p className="pb-2">
            <span className="font-semibold">{boldContentThirdParagraph}</span>{" "}
            {ThirdParagraph}
          </p>
          <p className="pb-2">
            <span className="font-semibold">{boldContentFourthParagraph}</span>{" "}
            {FourthParagraph}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

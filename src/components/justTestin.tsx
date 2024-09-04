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
        <p className="cursor-pointer pt-2 underline w-14 hover:opacity-80">
          Se mer
        </p>
      </DialogTrigger>
      <DialogContent className="w-full sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{shortDescription}</DialogDescription>
        </DialogHeader>
        <p>
          <span className="font-semibold">{boldContentFirstParagraph}</span>{" "}
          {FirstParagraph}
        </p>
        <p>
          <span className="font-semibold">{boldContentSecondParagraph}</span>{" "}
          {SecondParagraph}
        </p>
        <p>
          <span className="font-semibold">{boldContentThirdParagraph}</span>{" "}
          {ThirdParagraph}
        </p>
        <p>
          <span className="font-semibold">{boldContentFourthParagraph}</span>{" "}
          {FourthParagraph}
        </p>
      </DialogContent>
    </Dialog>
  );
}

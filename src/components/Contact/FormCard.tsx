import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export function FormCard() {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const navigate = useNavigate();
  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formattedDate = formatDate(new Date());

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, e.target as HTMLFormElement, publicKey)
      .then(() => {
        navigate("/");
        toast.success("Henvendelse er opprettet", {
          description: formattedDate,
          position: "top-right",
        });
      })
      .catch(() => {
        toast.success("Klarte ikke å sende email. Prøv igjen.", {
          description: formattedDate,
          position: "top-right",
        });
      });
  };
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Kontakt</CardTitle>
        <CardDescription>
          Skriv inn din informasjon for å opprette kontakt
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={sendEmail}>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first_name">Fornavn</Label>
                <Input
                  id="first_name"
                  name="first_name"
                  placeholder="Ola"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last_name">Etternavn</Label>
                <Input
                  id="last_name"
                  placeholder="Pettersen"
                  name="last_name"
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                name="email_from"
                id="emailFrom"
                placeholder="email@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Textarea
                name="message"
                id="message"
                placeholder="Henvendelse.."
                className="h-[10vh]"
              ></Textarea>
            </div>
            <Button
              type="submit"
              className="w-full dark:text-white bg-orange-400 dark:bg-orange-400 dark:hover:bg-orange-300 hover:bg-orange-300"
            >
              Send
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

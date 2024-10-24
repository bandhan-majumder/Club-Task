import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

interface cardDetails {
  imgUrl: string;
  guestName: string;
  guestDetails: string;
  linkedInUrl: string;
  twitterUrl?: string; // twitter is optional
}

export default function Component({
  imgUrl,
  guestName,
  guestDetails,
  linkedInUrl,
  twitterUrl,
}: cardDetails) {
  return (
    <>
      <Card className="w-full max-w-sm mx-auto bg-[#030E11]">
        <CardContent className="flex aspect-square items-center justify-center p-6">
          <img
            src={`${imgUrl}`}
            width="400"
            height="400"
            alt="event image"
            className="aspect-square object-cover rounded-lg overflow-hidden"
          />
        </CardContent>
        <CardHeader className="text-center">
          <CardTitle className="text-white">{`${guestName}`}</CardTitle>
          <CardDescription className="text-slate-500">{`${guestDetails}`}</CardDescription>
        </CardHeader>
        <CardContent className="text-3xl font-semibold flex items-center justify-center gap-2">
          <Link to={`${linkedInUrl}`} className="text-white">
            <FaLinkedin />
          </Link>
          {twitterUrl && <Link to={`${twitterUrl}`} className="text-white">
          <FaXTwitter />
          </Link>}
        </CardContent>
      </Card>
    </>
  );
}

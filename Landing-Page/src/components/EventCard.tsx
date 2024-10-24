import "../App.css";
import ImageCard from "./ImageCard.tsx";
import { Button } from "./ui/button.tsx";
import { Link } from "react-router-dom";

interface eventCardDetails {
  imgUrl: string;
  guestName: string;
  guestDetails: string;
  linkedInUrl: string;
  twitterUrl?: string;
  eventAbout: string;
  registerLink: string;
  eventDate: string;
  flip: boolean;
}

function EventCard({
  imgUrl,
  guestName,
  guestDetails,
  linkedInUrl,
  twitterUrl,
  eventAbout,
  registerLink,
  eventDate,
  flip,
}: eventCardDetails) {
  return (
    <>
        <div className="flex justify-center items-center flex-col">
          <div className="md:flex flex-row lg:max-w-[70vw] max-w-[90vw]">
            <div className="md:flex flex-row gap-3 md:justify-around md:w-[65vw]">
              {!flip && (
                <div className="md:flex flex-row justify-center md:gap-3 md:max-h-[58vh]">
                  <div className="md:w-[30vw]">
                    <ImageCard
                      imgUrl={`${imgUrl}`}
                      guestName={`${guestName}`}
                      guestDetails={`${guestDetails}`}
                      linkedInUrl={`${linkedInUrl}`}
                      twitterUrl={`${twitterUrl}`}
                    />
                  </div>
                  <div className="md:flex justify-center items-center hidden">
                    <div className="w-1.5 h-[30vh]  hidden bg-green-600 md:block"></div>
                  </div>
                </div>
              )}
              <div className="md:max-w-[30vw] max-w-[90vw] border-solid border-1 border-gray-600 rounded-xl px-3 py-3 flex flex-col justify-around mt-4 md:mt-0">
                <div>
                  <p className="text-xl text-white underline">About:</p>
                  <div className="flex justify-start gap-1">
                    <p className="text-lg text-slate-500">Date:</p>
                    <p className="text-lg text-slate-500">{eventDate}</p>
                  </div>
                  <br />
                  <p className="text-white">{eventAbout}</p>
                </div>
                <div className="flex justify-center">
                  <Link to={registerLink}>
                    <Button className="bg-[#3EC256] text-md hover:bg-green-700 mt-8 md:mt-0">
                      Register now
                    </Button>
                  </Link>
                </div>
              </div>
              {flip && (
                <div className="md:flex flex-row justify-center md:gap-3 md:max-h-[58vh]">
                  <div className="md:flex justify-center items-center hidden">
                    <div className="w-1.5 h-[30vh]  hidden bg-green-600 md:block"></div>
                  </div>
                  <div className="md:w-[30vw]">
                    <ImageCard
                      imgUrl={`${imgUrl}`}
                      guestName={`${guestName}`}
                      guestDetails={`${guestDetails}`}
                      linkedInUrl={`${linkedInUrl}`}
                      twitterUrl={`${twitterUrl}`}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
    </>
  );
}

export default EventCard;

import "../App.css";
import { useEffect, useState } from "react";
import ImageCard from "./ImageCard.tsx";
import { Button } from "./ui/button.tsx";
import { Link } from "react-router-dom";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel.tsx";

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
  upcoming: boolean; // upcoming -> true for upcoming events, false for past events
  eventPhotos?: string[]
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
  flip: initialFlip,
  upcoming,
  eventPhotos
}: eventCardDetails) {
  const [flip, setFlip] = useState(initialFlip);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // checks if the device is mobile or any other smaller sized screen or not

    const handleScreenResize = () => {
      if (mediaQuery.matches) {
        setFlip(false); // Set flip to false for screen sizes smaller than 'md'
      } else {
        setFlip(initialFlip); // Revert to the initial value when screen size is above 'md'
      }
    };

    // Set the initial value based on the current screen size
    handleScreenResize();
  }, [initialFlip]);
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
                <p className="text-xl text-white underline underline-offset-4">
                  About:
                </p>
                <div className="flex justify-start gap-1">
                  <p className="text-lg text-slate-500">Date:</p>
                  <p className="text-lg text-slate-500">{eventDate}</p>
                </div>
                <br />
                <p className="text-white md:text-xl font-serif">{eventAbout}</p>
              </div>
              { (!upcoming && eventPhotos) && <div>
                <p className="text-white my-4 text-xl">Glimpse:</p>
                <Carousel>
                  <CarouselContent>
                    {eventPhotos.map((_, index) => (<CarouselItem className="basis-1/3">
                      <img
                        src={eventPhotos[index]}
                        alt=""
                      />
                    </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>}
              <div className="flex justify-center">
                <Link to={registerLink}>
                  <Button
                    className={`${!upcoming ? "bg-[#3EC256] hover:bg-green-700 animate-none" : "bg-red-600 hover:bg-red-800 animate-bounce"} mt-8 md:mt-0 text-md font-mono`}
                  >
                    {upcoming ? "Register now" : "View more"}
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

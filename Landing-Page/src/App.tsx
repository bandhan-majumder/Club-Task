import EventCard from "./components/EventCard.tsx";
import { BrowserRouter, Link } from "react-router-dom";
import { pastEvents } from "./pastEvents.ts";
import { upComingEvents } from "./upComingEvents.ts";
import Footer from "./components/Footer.tsx";

interface upcomingEventsInterface {
  imgUrl: string;
  guestName: string;
  guestDetails: string;
  linkedInUrl: string;
  twitterUrl?: string;
  eventName: string;
  eventAbout: string;
  registerLink: string;
  eventDate: string;
  // will hardcode the below two for a reason
  // flip: boolean;
  // upcoming: boolean; // upcoming -> true for upcoming events, false for past events
}

interface pastEventsInterface {
  imgUrl: string;
  guestName: string;
  guestDetails: string;
  linkedInUrl: string;
  twitterUrl?: string;
  eventName: string;
  eventAbout: string;
  registerLink: string;
  eventDate: string;
  // will hardcode the below two for a reason
  // flip: boolean;
  // upcoming: boolean; // upcoming -> true for upcoming events, false for past events
}

function App() {
  const upComingEventsArr: upcomingEventsInterface[] = upComingEvents;
  const pastEventsArr: pastEventsInterface[] = pastEvents;

  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen pt-5">
        <div className="text-center flex justify-center my-10 text-nowrap">
          <p className="text-white text-4xl font-bold md:text-5xl">Check our</p>
          <p className="text-[#3EC256] text-4xl font-bold py-5 md:text-5xl">
            All Events
          </p>
        </div>
        <br />
        <div className="flex justify-center items-center">
          <div className="lg:max-w-[50vw] rounded-xl px-1 py-2 max-w-[90vw]">
            <p className="text-white text-3xl font-bold mb-3">Our Aim:</p>
            <p className="text-white font-serif md:text-xl">
              At BashCraft, we aim to{" "}
              <span className="text-red-600">map the gap</span> between
              theoretical knowledge and real life executability. Through a
              variety of engaging events, workshops, and hands-on projects, we
              provide students with opportunities to apply their skills and
              learn new ones in a practical and dynamic environment. Despite
              being a young club, we’ve never let that hold us back. Our drive
              and passion have enabled us to successfully organize and execute
              numerous{" "}
              <span className="text-red-600">offline and online events</span>,
              with our flagship event bringing over{" "}
              <span className="text-red-600">300</span> in-person attendees.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="text-center">
            <p className="text-[#3EC256] text-4xl font-semibold underline underline-offset-4 my-10 animate-pulse font-serif cursor-pointer">
              Upcoming Events
            </p>
          </div>
          <div>
            {upComingEventsArr.map((event, index) => (
              <div key={index}>
                <EventCard
                  imgUrl={event.imgUrl}
                  guestDetails={event.guestDetails}
                  guestName={event.guestName}
                  linkedInUrl={event.linkedInUrl}
                  twitterUrl={event.twitterUrl}
                  eventName={event.eventName}
                  eventDate={event.eventDate}
                  registerLink={event.registerLink}
                  eventAbout={event.eventAbout}
                  flip={index % 2 == 0} // flip them one by one
                  upcoming={true} // hardcoding as all of these will be upcoming events
                />
                <br />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center flex-col mb-20">
          <div className="text-center">
            <p className="text-[#3EC256] text-4xl font-semibold underline underline-offset-4 my-10 font-serif cursor-pointer">
              Our Past Events
            </p>
          </div>
          <div>
            {pastEventsArr.map((event, index) => (
              <div key={index}>
                <EventCard
                  imgUrl={event.imgUrl}
                  guestDetails={event.guestDetails}
                  guestName={event.guestName}
                  linkedInUrl={event.linkedInUrl}
                  twitterUrl={event.twitterUrl}
                  eventName={event.eventName}
                  eventDate={event.eventDate}
                  registerLink={event.registerLink}
                  eventAbout={event.eventAbout}
                  flip={index % 2 == 0} // flip them one by one
                  upcoming={false} // hardcoding as all of these will be upcoming events
                />
                <br />
              </div>
            ))}
          </div>
        </div>
        <Link to="https://bashcraft.vercel.app/">
          <div>
            <p className="text-green-600 underline text-center">
              Check out more about us here
            </p>
          </div>
        </Link>

        <div className="py-4 md:py-20">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import EventCard from "./components/EventCard.tsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  const upComingEvent1 = {
    imgUrl:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1727894047/bash/B5_iqxqmw.jpg",
    guestName: "special guest",
    guestDetails: "IIT furfurinagar",
    linkedInUrl: "url.com",
    twitterUrl: "url.com",
    eventAbout:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima consectetur id illum architecto consequuntur, enim perspiciatis animi libero ad fugiat maiores quos. Adipisci doloribus non ducimus. Omnis quisquam velit at provident ut corporis iure deserunt?",
    registerLink: "xo.com",
    eventDate: "12:1:24",
  };

  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen">
        {/* <Header /> */}
        <div className="text-center">
          <p className="text-[#3EC256] text-4xl font-semibold underline underline-offset-4 py-5">
            Events
          </p>
        </div>
        <br />
        <div className="flex justify-center items-center">
          <div className="lg:max-w-[50vw] rounded-xl px-1 py-2 max-w-[90vw]">
            <p className="text-white">
              At BashCraft, we aim to map the gap between theoretical knowledge
              and real life executability. Through a variety of engaging events,
              workshops, and hands-on projects, we provide students with
              opportunities to apply their skills and learn new ones in a
              practical and dynamic environment. Despite being a young club,
              we’ve never let that hold us back. Our drive and passion have
              enabled us to successfully organize and execute numerous offline
              and online events, with our flagship event bringing over 300
              in-person attendees.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col">
          <div className="text-center">
            <p className="text-[#3EC256] text-4xl font-semibold underline underline-offset-4 my-10">
              Upcoming Events
            </p>
          </div>
          <div>
<EventCard
            imgUrl={upComingEvent1.imgUrl}
            guestDetails={upComingEvent1.guestDetails}
            guestName={upComingEvent1.guestName}
            linkedInUrl={upComingEvent1.linkedInUrl}
            twitterUrl={upComingEvent1.twitterUrl}
            eventDate={upComingEvent1.eventDate}
            registerLink={upComingEvent1.registerLink}
            eventAbout={upComingEvent1.eventAbout}
            flip={true}
          />
          <br />
          <EventCard
            imgUrl={upComingEvent1.imgUrl}
            guestDetails={upComingEvent1.guestDetails}
            guestName={upComingEvent1.guestName}
            linkedInUrl={upComingEvent1.linkedInUrl}
            twitterUrl={upComingEvent1.twitterUrl}
            eventDate={upComingEvent1.eventDate}
            registerLink={upComingEvent1.registerLink}
            eventAbout={upComingEvent1.eventAbout}
            flip={false}
          />
          </div>
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

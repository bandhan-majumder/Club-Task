interface upcomingEventsInterface {
  imgUrl: string;
  guestName: string;
  guestDetails: string;
  linkedInUrl: string;
  twitterUrl?: string;
  eventAbout: string;
  registerLink: string;
  eventDate: string;
  // will hardcode the below two for a reason
  // flip: boolean;
  // upcoming: boolean; // upcoming -> true for upcoming events, false for past events
}

export const upComingEvents: upcomingEventsInterface[] = [{
    imgUrl:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1727894141/bash/sc2_max52a.jpg",
    guestName: "special guest",
    guestDetails: "IIT furfurinagar",
    linkedInUrl: "url.com",
    twitterUrl: "url.com",
    eventAbout:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima consectetur id illum architecto consequuntur, enim perspiciatis animi libero ad fugiat maiores quos. Adipisci doloribus non ducimus. Omnis quisquam velit at provident ut corporis iure deserunt?",
    registerLink: "xo.com",
    eventDate: "12:1:24",
  },{
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
  }];

  
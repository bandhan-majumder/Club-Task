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

export const upComingEvents: upcomingEventsInterface[] = [{
    imgUrl:
      "https://cdn.leonardo.ai/users/f559988b-6657-46f3-9260-b66a0cce379f/generations/b577caff-8dd5-4da6-9552-e811beaa11fe/AlbedoBase_XL_a_tech_event_in_a_college_where_a_speaker_is_giv_1.jpg",
    guestName: "Revealing soon..",
    guestDetails: "Coming soon..",
    linkedInUrl: "https://www.linkedin.com/company/bashcraft/",
    eventName: "Gen AI",
    eventAbout:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima consectetur id illum architecto consequuntur, enim perspiciatis animi libero ad fugiat maiores quos. Adipisci doloribus non ducimus. Omnis quisquam velit at provident ut corporis iure deserunt?",
    registerLink: "https://www.linkedin.com/company/bashcraft/",
    eventDate: "Coming soon..",
  },{
    imgUrl:
      "https://cdn.leonardo.ai/users/f559988b-6657-46f3-9260-b66a0cce379f/generations/55825157-3efb-4a74-bd2a-630ea664c8f5/Leonardo_Kino_XL_A_teacher_teaching_web_development_while_deve_1.jpg",
    guestName: "Dr. AI",
    guestDetails: "AI Web Dev Teacherr",
    linkedInUrl: "#",
    twitterUrl: "#",
    eventName: "Web Dev with AI",
    eventAbout:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima consectetur id illum architecto consequuntur, enim perspiciatis animi libero ad fugiat maiores quos. Adipisci doloribus non ducimus. Omnis quisquam velit at provident ut corporis iure deserunt?",
    registerLink: "#",
    eventDate: "12th December",
  }];

  
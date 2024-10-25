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

  
    export const pastEvents: pastEventsInterface[] = [{
      imgUrl:
        "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1727894141/bash/sc2_max52a.jpg",
      guestName: "Arpit Bhayani",
      guestDetails: "Co-founder and CTO at Duggup",
      linkedInUrl: "https://www.linkedin.com/in/arpitbhayani/",
      twitterUrl: "https://x.com/arpit_bhayani",
      eventName: "TechTalk with Arpit Bhayani",
      eventAbout:
        "Bashcraft recently hosted a captivating session with Arpit Bhayani, Google's senior staff software engineer, diving deep into the latest tech trends and essential skills for future innovators. Attendees engaged in lively discussions about AI, software development, and the future of technology which sparked their curiosity in the ever-evolving tech landscape.",
      registerLink: "https://bashcraft.vercel.app/",
      eventDate: "28th June",
    },{
      imgUrl:
        "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1727894472/bash/IMG_5055_zpkt3q.jpg",
      guestName: "Team Members",
      guestDetails: "Organized by Core Team",
      linkedInUrl: "https://www.linkedin.com/company/bashcraft/",
      eventName: "Investathon",
      eventAbout:
        "On March 26th, Bashcraft hosted an engaging finance event in collaboration with Zerodha, where participants learned to build personal portfolios and gained valuable financial insights. Following the workshop, attendees took part in an exciting Finance Hackathon, aimed at creating a finance platform from scratch. Participants faced UI/UX and development challenges, showcasing their skills and creativity while tackling real-world finance problems.",
      registerLink: "https://bashcraft.vercel.app/",
      eventDate: "26th March"
    }];
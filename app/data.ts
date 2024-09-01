export const data = {
  about: {
    title: "ABout me content",
    desc: "Um a a a Um aa a a",
  },
  socialLinks: {
    github: "https://github.com/sarthak0714",
    linkedin: "https://www.linkedin.com/in/sarthaktanpure/",
    x: "https://x.com/sarthakt0714",
    email: "mailto:sarthak.t1403@gmail.com",
  },
  resumeLink: "",
  workExp: [
    {
      title: "SDE Intern",
      company: "Reliance Industries Ltd.",
      companyMob: "Reliance Industries",
      tenure: "June - July 24",
    },
    {
      title: "Research Analyst Intern",
      company: "Decimal Point Analytics",
      companyMob: "D P A",
      tenure: "May - July 23",
    },
  ],
  achievements: [
    {
      title: "SIH 2023",
      rank: "Winner",
      institution: "[VVCE, Mysuru]",
      date: "December 2023",
    },
    {
      title: "Refacktor",
      rank: "First Runner Up",
      institution: "[VJTI Matunga, Mumbai]",
      date: "February 2023",
    },
    {
      title: "ERR_404 5.0",
      rank: "Second Runner Up",
      institution: "[MHSSCE, Byculla, Mumbai]",
      date: "March 2023",
    },
    {
      title: "PyExpo",
      rank: "Winner",
      institution: "[TSEC Bandra, Mumbai]",
      date: "April 2023",
    },
    {
      title: "JavaGenix",
      rank: "Second Runner Up",
      institution: "[TSEC Bandra, Mumbai]",
      date: "October 2022",
    },
  ],
  Projects: [
    {
      title: "Certisure",
      descriptionS:
        "A SaaS platform enabling scalable and accessible certificate generation and verification services.",
      descriptionL:
        "CERTISURE is a SaaS platform that enables scalable and accessible certificate generation and verification services for a diverse client base. It provides a streamlined system that allows users to create various types of certificates efficiently while offering accessible verification services to ensure authenticity and reliability.",

      technologies: ["React", "Tailwind CSS", "Flask", "Vercel"],
      link: "https://certisure.vercel.app/",
    },
    {
      title: "Tic-Tac-Toe (Game Server)",
      descriptionS:
        "Developed a server using Go and the actor model for encapsulation, scalability, and real-time updates via WebSockets.",
      descriptionL:
        "Developed a web-based Tic-Tac-Toe game server in Go using the actor model for better encapsulation and scalability, with channel communication between actors. Implemented real-time game updates via WebSockets for seamless state synchronization across clients. Designed game logic for game creation, move validation, and status updates, with a clear structure for actors, messages, handlers, and logic.",
      technologies: ["Go", "WebSockets"],
      link: "https://github.com/sarthak0714/ttt",
    },
    {
      title: "Tollywood",
      description:
        "A Go-based implementation of the actor model for building distributed systems with message-passing communication via gRPC.",
      descriptionL:
        "A Go-based implementation of the actor model, providing a straightforward framework for building scalable and distributed systems. Implemented lightweight, concurrent actors with message-passing based communication, supporting remote actor management and communication via gRPC. Designed a scalable architecture suitable for distributed systems and ensured easy integration with existing Go applications.",
      technologies: ["Go", "gRPC"],
      link: "https://github.com/sarthak0714/tollywood",
    },
  ],
};

export type DataType = typeof data;

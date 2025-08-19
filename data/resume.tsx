import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ankita Gurung",
  initials: "AG",
  url: "https://linkedin.com/ankita-gurung",
  location: "Jalpaiguri, India",
  locationLink: "https://www.google.com/maps/place/jalpaiguri",
  description:
    "Crafting my future with code and curiosity.",
  summary:
    // "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
    "Known for being proactive, detail-oriented, and a strong team player. I'm a pre-final year student currently interning at ISI Kolkata, working on Machine Learning and LLMs. Winner of Smart India Hackathon 2024 for co-developing TrailMine, a blockchain analytics tool to improve privacy in decentralized networks. I also contributed to RLHF for Fortune 500 clients.",
    avatarUrl: "/me.png",
  skills: [
    "C++",
    "Python",
    "Streamlit",
    "Machine Learning",
    "Data Science",
    "Data Visualization",
    "OpenZeppelin",
    "Remix",
    "Web3.js",
    "The Graph",
    "MetaMask SDK",
    "OpenCV",
    "YOLOv8",
    "SQL",
    "Docker",
    "Git",
    "Javascript",
    "Typescript",
    "React",
    "Next.js",
    "Node.js",
    "Postgres",
    "MongoDB",
    "Figma",
    "Motion.dev",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "ag2732@me.jgec.ac.in",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/itsankita-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/ankita-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://dub.sh/ankita-resume",
        icon: Icons.googleDrive,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dhabal-aritra",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/aritra-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:ag2732@me.jgec.ac.in",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    //Study and Experience
    {
      company: "Indian Statistical Institute, Kolkata",
      href: "",
      badges: ["Hybrid"],
      location: "Hybrid",
      title: "Research Intern",
      logoUrl: "/isi.png",
      start: "Aug. 2025",
      end: "Present",
      description: "",
    },
    {
      company: "IIIT Allahabad",
      href: "https://drive.google.com/file/d/1p1EKgwoH82i4Fieug6OMkzf6iLuxPmIl/view?usp=sharing",
      badges: ["Onsite"],
      location: "Offline",
      title: "Summer Trainee - NLP & Robotics",
      logoUrl: "/IIIT.png",
      start: "June 2025",
      end: "Aug 2025",
      description: "",
    },
    {
      company: "Scale AI",
      href: "",
      badges: ["Remote"],
      location: "Offline",
      title: "LLM Model Trainee",
      logoUrl: "Scale.png",
      start: "June 2025",
      end: "Aug 2025",
      description: "",
    },
  ],
  education: [
    {
      school: "Jalpaiguri Government Engineering College",
      href: "https://jgec.ac.in",
      degree: "Bachelor of Technology, Mechanical Engineering",
      logoUrl: "/jgec.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Sunshine School",
      href: "https://sunshineschoolbirpara.in/",
      degree: "Senior Secondary-ISC & ICSE-93%",
      logoUrl: "/sschool.png",
      start: "2021",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Movie Matrix",
      href: "#projects",
      dates: "June 2025 - July 2025",
      active: true,
      description:
        "Movie Matrix is a content-driven recommendation application that identifies the top five similar titles for any selected film by analyzing and comparing key descriptive features using foundational natural language processing techniques.",
      technologies: [
        "Scikit-learn",
        "Pandas",
        "Numpy",
        "nltk",
        "Streamlit",
        "Python",
        "Streamlit Cloud",
        "Git",
        "PostgreSQL",
        "Google Cloud",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "movie-matrix.streamlit.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/itsanki/Movie-Recommender",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-74c3ed08843449e6ae368362f8db21ad.r2.dev/Movie-Matrix.webm",
    },
    {
      title: "TrailMine",
      href: "#projects",
      dates: "Nov. 2024 - Dec. 2024",
      active: true,
      description:
        "TrailMine is a real-time blockchain analytics tool to uncover hidden transaction patterns across multiple blockchains. It features visualizations, deep transaction tracing and dashboards to help understand complex blockchains.",
      technologies: [
        "Ethereum",
        "Matplotlib",
        "Pytorch",
        "Seaborn",
        "Python",
        "Numpy",
        "Pandas",
        "Neo4j",
        "Firebase",
        "Google Cloud",
        "Git",
      ],
      links: [
        {
          type: "Website",
          href: "https://trailmine-d059837d2f27.herokuapp.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aritradhabal/TrailMine",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-74c3ed08843449e6ae368362f8db21ad.r2.dev/trailmine.webm",
    },
  ],
  hackathons: [
    {
      title: "Smart India Hackathon",
      dates: "Sept. 2024 - Dec. 2024",
      location: "IIT Bhubaneswar",
      description:
        "Won Smart India Hackathon 2024 (MoE Innovation Cell) by building TrailMine, enabling the NCB to track illicit crypto flows and generate live investigation dashboards.",

      image: "sih.png",
      win: true,
      mlh: "",
      links: [
        {
          title: "Project",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/aritradhabal/TrailMine",
        },
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://sih.gov.in/sih2024/sih2024-grand-finale-result#:~:text=Tamil%20Nadu-,Indian%20Institute%20of%20Technology%2C%20Bhubaneshwar,Jalpaiguri%20Govt.%20Engineering%20College%20101,-Jalpaiguri",
        },
        {
          title: "Live Stream",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/live/Y-ZQZgt4nFc?si=B0rdaAr5SqCuWMXG&t=1047",
        },
      ],
    },
    // {
    //   title: "ETH Waterloo",
    //   dates: "October 13th - 15th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //   links: [
    //     {
    //       title: "Organization",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ethdocnet",
    //     },
    //   ],
    // },
  ],
} as const;

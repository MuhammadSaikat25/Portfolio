import lms from "../../../public/lms.png";
import job from "../../../public/job.png";
export const projectsData = [
  {
    id: 1,
    name: "Full Stack LMS website",
    description:
      "This is a comprehensive Learning Management System (LMS) built using the MERN stack, designed to provide seamless functionality for both administrators and users. The platform features two distinct roles: Admin and User. Administrators have full control over the system, allowing them to create, update, and manage courses, as well as oversee user activities. For users, the platform offers the ability to browse, purchase, and access a variety of courses. Payments are securely handled through Stripe, ensuring a smooth transaction process. The website utilizes JWT (JSON Web Token) for robust authentication, ensuring that users' access is secure and properly managed. This LMS is developed for efficient course administration and a user-friendly learning experience.",
    tools: [
      "Express",
      "TypeScript",
      "MongoDB",
      "Node Mailer",
      "Jod",
      "React.js",
      "Rtk Query",
      "Tailwind.css",
    ],
    role: "",
    code: "",
    demo: "https://lmsclinet.vercel.app/",
    image: lms,
    clientGit: "https://github.com/MuhammadSaikat25/lms-client",
    serverGit: "https://github.com/MuhammadSaikat25/lms-Server",
  },
  {
    id: 2,
    name: "Talent Plus",
    description:
      "This is a MERN stack-based job portal website designed with two primary user roles: Employer and Candidate. Employers can create and manage their company profiles, post job listings, and handle job applications. For each job, employers have the ability to approve or reject candidate applications. Upon approval, both the employer and candidate can engage in a direct chat for further discussions. Additionally, employers can schedule and initiate video calls for interviews, streamlining the hiring process. Candidates can apply for jobs, track their application status, and communicate with employers after approval, ensuring a seamless and efficient job-hunting experience.",
    tools: [
      "Express",
      "TypeScript",
      "MongoDB",
      "Node Mailer",
      "Jod",
      "React.js",
      "Rtk Query",
      "Tailwind.css",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "https://jobclient.vercel.app/",
    image: job,
    clientGit: "https://github.com/MuhammadSaikat25/Job_Portal",
    serverGit: "https://github.com/MuhammadSaikat25/job-portal-backend",
  },
];

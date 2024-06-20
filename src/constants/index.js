import project1 from "../assets/projects/project-1.png"
import project2 from "../assets/projects/project-2.png"
import project3 from "../assets/projects/project-3.png"
import project4 from "../assets/projects/project-4.png"

export const HERO_CONTENT = `I am a passionate MERN stack developer with 6-7 months of focused learning and a 6-month online internship where I built industry-standard applications. My hands-on experience has honed my problem-solving skills and deepened my understanding of full-stack development. Eager to learn and grow, I am committed to reaching the pinnacle of this field. With my dedication and team-oriented approach, I am confident I can be a valuable asset to your company, contributing to real-life problem-solving applications and continuous improvement.`

export const ABOUT_TEXT = `I am a Computer Science engineer who graduated in 2022. After graduation, I pursued a different path by preparing for the armed forces, successfully qualifying the written examinations of CDS twice and AFCAT three times, and attending eight SSB interviews. Although I didn't achieve the desired outcome, these experiences built my resilience and determination. Now, I have transitioned back to the tech field, equipped with new skills in MERN stack development and a strong self-confidence. I am eager to grow as a developer, creating impactful applications for users and continually improving in this dynamic industry.`

export const EXPERIENCES = [
  {
    year: "25 Aug 2023 - April 2024",
    role: "Full Stack Developer Intern",
    company: "Cuvette Tech Pvt. Ltd.",
    description: `Gained hands-on experience with the MERN stack by working on industry-standard projects. Collaborating with a UX/UI designer who provided designs in Figma, I brought these designs to life through code. This challenging process significantly enhanced my skills, particularly in creating bug-free, robust applications. Each project was rigorously evaluated, and I successfully passed by delivering high-quality work, demonstrating my readiness for a Junior Full Stack Engineer role.`,
    technologies: ["MongoDB", "Express", "React.js", "Node.js"]
  }
]

export const PROJECTS = [
  {
    title: "Movie App",
    image: project1,
    description:
      "The ultimate movie review and recommendation platform built using the MERN stack! With our app, you can: Review Movies Get Recommendations Create a Watchlist Access Detailed Information. An admin panel with a robust dashboard to upload movie information, manage trailers, and oversee all app details",
    technologies: ["React", "Node.js", "MongoDB", "Cloudinary"],
    source: "https://github.com/ProtoShiva/MERN-CinePhiles",
    live: "https://mern-cine-philes.vercel.app/"
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking. Also you can share the task progress to your team members",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    source: "https://github.com/ProtoShiva/final-task-manager",
    live: "https://final-task-manager.vercel.app/"
  },
  {
    title: "Ecommerce SaaS",
    image: project3,
    description:
      "An application for Ecommerce websites to let them select the trending products for their website. An hassle-free way to get the info about the products. User can download images, videos, description, adcopies for their product and sell them easily in any platform they want ",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Redux", "Stripe"],
    source: "https://github.com/ProtoShiva/TrendSpot-Frontend",
    live: "https://trendspot4.netlify.app/"
  },
  {
    title: "Pals-Chat App",
    image: project4,
    description:
      "A real time chat app to connect with your friends using Socket.io. User can Chat with multiple people. A seprate Group can be created for pals to plan an activity. Friends can send DMs to another person",
    technologies: [
      "Express",
      "HTML",
      "Node.js",
      "CSS",
      "JavaScript",
      "Socket.io"
    ],
    source: "https://github.com/ProtoShiva/Pals",
    live: "https://github.com/ProtoShiva/Pals"
  }
]

export const CONTACT = {
  address: "236/1 Gurudwara Colony, Clementtown, Dehradun 248002 ",
  phoneNo: "+91 8279950566 ",
  Whatsapp: "+91 8126055391",
  email: "hgusain088@gmail.com"
}

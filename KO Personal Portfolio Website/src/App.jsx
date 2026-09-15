import { useEffect, useState } from 'react'
import './App.css'

const profile = {
  name: 'Kalista Oberes',
  role: 'Mechanical Engineer',
  intro: '4th year student at UF studying mechanical engineering and computer science.',
  bio: [
    'I got my start in engineering on robotics teams, which I began competing on in elementary school. Currently, I am a senior at the University of Florida majoring in mechanical engineering and minoring in computer science. I am passionate about finding ways to combine these two fields to create innovative solutions.',
    'Supporting women in STEM has always been important to me, and I have been involved in the Phi Sigma Rho Engineering Sorority in various leadership roles.',
    'Outside of school, I enjoy finding the best local restaurants, karaoking with my friends, and teaching myself how to play guitar.',
  ],
  linkedin: 'https://www.linkedin.com/in/kalista-oberes/',
  github: 'https://github.com/kali-mari',
  email: 'kalistaoberes@gmail.com'
}

const experiences = [
  {
    organization: 'Stellar Energy Americas',
    roles: [
      {
        title: 'Project Management Engineering Intern',
        date: 'May 2026 - Current',
        description: 'Supporting manufacturing operations for modular cooling units built for hyperscale data centers, working across engineering, procurement, and the shop floor to keep production on schedule',
        highlights: [
          'Developed manufacturing schedules across 5 active projects using Microsoft Project, evaluating how long lead times for materials and components would affect project completion dates',
          'Mapped material locations from CAD drawings across 6 modules, organizing a manufacturing BOM by 9 process scopes to support procurement and shop floor operations',
          'Developed a production and ASME pressure-test procedures for a mock project with a team of interns, presenting final design submittals to leadership',
          'Created budget estimates for in-house structural manufacturing processes, using monthly budget data for cost analysis to support vendor selection and outsourcing decisions for future projects',
        ],
      },
    ],
  },
  {
    organization: 'Phi Sigma Rho Engineering Sorority Tau Chapter',
    roles: [
      {
        title: 'VP Finance',
        date: 'May 2025 - May 2026',
        description: 'Owned a $52,000 annual operating budget for an 80+ member chapter, covering chapter expenses and national dues',
        highlights: [
          'Allocated $4,000 in scholarship funding across 33 members',
          'Replaced ad hoc reporting with recurring expenditure and cash flow updates, giving members visibility into chapter spending',
        ],
      },
      {
        title: 'Sisterhood Chair',
        date: 'Jan. 2025 - May 2025',
        description: 'Planned and ran an overnight retreat for 50+ members to build connection between new and returning sisters',
        highlights: [
          'Built and managed the budget for catering, activities, and accommodations',
          'Resolved on-site logistics in real time, from room assignments to last-minute communication issues',
        ],
      },
    ],
  },
  {
    organization: 'Game-based Learning and Digital Experiences Laboratory',
    roles: [
      {
        title: 'Student Researcher',
        date: 'Sep. 2024 - Dec. 2024',
        description: 'Developed interactive VR-ready statics learning content',
        highlights: [
        'Constructed and modeled interactive 3D statics problems using Onshape and Blender',
        'Researched learning strategies that use 3D visualization to explain engineering concepts',
      ],
      },
    ],
  },
]

const projects = [
{
  title: 'OffTheCharts',
  image: '/offthecharts.png',
  date: 'July 2026',
  description: 'Python CLI recommending songs by audio similarity — not popularity — across 90K Spotify tracks.',
  longDescription: 'OffTheCharts finds songs with similar audio characteristics to a track you already like, ignoring popularity and chart position entirely. Built as a Python CLI, it runs k-d tree and max-heap nearest-neighbor search over 90K Spotify tracks using attributes like tempo, energy, and instrumentalness.',
  skills: ['Python', 'Git', 'NumPy', 'pandas', 'prompt_toolkit'],
  solutionMethods: [
    'Normalized 12 audio attributes per track into feature vectors across 90K tracks using pandas and NumPy',
    'Implemented k-d tree and max-heap nearest-neighbor search, exposed through a CLI',
    'Built song search and selection with prompt_toolkit\'s WordCompleter for autocomplete input',
  ],
  results: [
    'Returns top 5 ranked songs from a 90K-track library',
    'Surfaces niche tracks that popularity-based recommenders miss',
  ],
  githubUrl: 'https://github.com/kali-mari/COP3530-Project-2-Off-the-Charts',
  websiteUrl: '',
},
  {
    title: '3D LiDAR Scanner',
    image: '/3D-LiDAR.jpg',
    date: 'Mar. 2026',
    description: 'Lightweight, low-cost, 3D-printable LiDAR scanner with a two-axis servo and stepper motor positioning system',
    longDescription: 'Designed a low-cost system mounting a Garmin LiDAR-Lite sensor on a two-axis gimbal to perform 3D scans of a space and visualize the output as a point cloud in Unity in 24 hours for the 2026 UF Association of Applied Computing Hackathon.',
    skills: ['Onshape', '3D Printing'],
    solutionMethods: ['Modeled the FDM components in Onshape with manufacturability and low print time in mind, keeping the geometry simple so it would integrate cleanly with the positional data pipeline later on', 'Used a stepper motor for yaw and a servo for pitch, giving the LiDAR a two-axis positioning system for full directional scanning'],
    results: ['Reduced print time to under 3 hours for rapid prototyping', 'Enabled real-time point cloud visualization from the scanner hardware', 'Achieved full two-axis movement in a completed prototype post-hackathon'],
    githubUrl: 'https://github.com/annahudson356/lidar-sensor-hardware-hack-2026',
      websiteUrl: '',
  },
  {
    title: 'MyFlowFriend',
    image: '/myflowfriend.jpg',
    date: 'Feb. 2026',
    description: 'Tamagotchi-inspired period-tracking device that logs daily menstrual symptoms via an ESP32 microcontroller, paired with a mobile app that visualizes long-term health trends',
    longDescription: 'Created in 36 hours for the 2026 WiNGHacks hackathon, MyFlowFriend pairs a Tamagotchi-inspired Wi-Fi device with a React Native companion app. Users can track symptoms over 30 days, view their history in a calendar-style interface, and receive AI-assisted cycle forecasts and health answers.',
    skills: ['React Native (Expo)', 'Firebase', 'Gemini API'],
    solutionMethods: [
      'Stored user input from ESP32 microcontroller in Firebase',
      'Designed UI for viewing past 30 entries for flow, pain, sleep, and mood symptoms in a calendar-style interface in a React Native app',
      'Used Gemini 2.5 Flash to predict future cycles based on flow data and for a menstrual chat bot',
    ],
    results: [
        'Real-time symptom tracking and visualization for users due to backend integration with Firebase',
        'Won the WiNGHacks Women-Centric Track Award against 29 competing projects',
    ],
    githubUrl: 'https://github.com/kali-mari/MyFlowFriend-Winkghacks2026',
      websiteUrl: '',
  },
]

const skillGroups = [
  { label: 'CAD & Simulation', icon: '◇', skills: ['SolidWorks', 'Onshape', 'Fusion 360', 'Blender', 'Prusa Slicer'] },
  { label: 'Languages & Frameworks', icon: '</>', skills: ['C++', 'Python', 'Java', 'MATLAB', 'Git', 'NumPy', 'pandas', 'React Native (Expo)', 'Firebase'] },
  { label: 'Project Management', icon: '▦', skills: ['Microsoft Project', 'JD Edwards', 'Procore'] },
]



function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  return (
    <>
      <article className="project-card">
      <div className="project-card-body">
        <div className="project-photo">
          {project.image ? <img src={project.image} alt={`${project.title} preview`} /> : <span>Add project photo</span>}
        </div>
        <div className="project-card-details">
          <div className="project-meta"><span>{project.category}</span><span>{project.date}</span></div>
          <div className="project-heading"><h3>{project.title}</h3></div>
          <p className="project-description">{project.description}</p>
          <div className="project-section"><h4>Skills used</h4><div className="skills">{project.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
          <button className="project-details-button" type="button" onClick={() => setIsOpen(true)}>View project details <span>-&gt;</span></button>
          <div className="project-links">
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <span>-&gt;</span></a>}
              {(project.websiteUrl || project.liveUrl) && <a href={project.websiteUrl || project.liveUrl} target="_blank" rel="noreferrer">Project website <span>-&gt;</span></a>}
          </div>
        </div>
      </div>
      </article>
      {isOpen && <div className="project-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false) }}>
        <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby={`${project.title}-modal-title`}>
          <button className="modal-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close project details">×</button>
          <div className="modal-image-wrap">
            {project.image ? <img src={project.image} alt={`${project.title} larger preview`} /> : <span>Add project photo</span>}
          </div>
          <div className="modal-content">
            <div className="project-meta"><span>Project details</span><span>{project.date}</span></div>
            <h2 id={`${project.title}-modal-title`}>{project.title}</h2>
            <div className="modal-section"><h4>Project Description</h4><p className="modal-description">{project.longDescription || project.description}</p></div>
            <div className="modal-section"><h4>Solution Methods</h4><ul>{project.solutionMethods.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className="modal-section"><h4>Results</h4><ul>{project.results.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className="project-links">
              {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <span>-&gt;</span></a>}
                {(project.websiteUrl || project.liveUrl) && <a href={project.websiteUrl || project.liveUrl} target="_blank" rel="noreferrer">Project website <span>-&gt;</span></a>}
            </div>
          </div>
        </section>
      </div>}
    </>
  )
}

function App() {
  return (
    <main>
      <header className="site-header page-width">
        <a className="logo" href="#top">KO<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="intro page-width" id="top">
        <div className="intro-content">
          <p className="eyebrow">{profile.role} / Portfolio</p>
          <h1>Hi, I&apos;m <span>{profile.name.split(' ')[0]}.</span></h1>
          <p className="intro-copy">{profile.intro}</p>
          <a className="button-link" href="#projects">See my projects <span>-&gt;</span></a>
        </div>
        <div className="profile-photo">
          <img src="/Profile.jpg" alt={`${profile.name} portrait`} onError={(event) => { event.currentTarget.style.display = 'none' }} />
          <span>Add your photo at<br /><strong>public/profile.jpg</strong></span>
        </div>
      </section>

      <section className="about page-width section" id="about">
        <div className="about-content">
          <h2>About Me</h2>
          <div className="about-body">
            <div className="about-photo">
              <img src="/about-photo.jpg" alt={`${profile.name} in a personal setting`} onError={(event) => { event.currentTarget.style.display = 'none' }} />
              <span>Add your photo at<br /><strong>public/about-photo.jpg</strong></span>
            </div>
            <div className="bio-copy">
              {profile.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </div>
        <div className="skills-content">
          <h3>Skills</h3>
          <div className="skill-groups">
            {skillGroups.map((group) => <div className="skill-group" key={group.label}>
              <h4>{group.label}</h4>
              <div className="skills">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </div>)}
          </div>
        </div>
      </section>

      <section className="experience page-width section" id="experience">
        <div className="experience-content">
          <h2>Experience</h2>
          <div className="experience-list">
            {experiences.map((experience) => <article className="experience-item" key={experience.organization}>
              <div className="experience-organization">{experience.organization}</div>
              {experience.roles.map((role) => <div className="experience-role" key={`${role.title}-${role.date}`}>
                <div className="experience-meta"><span>{role.date}</span></div>
                <h3>{role.title}</h3>
                <p>{role.description}</p>
                <ul>{role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              </div>)}
            </article>)}
          </div>
        </div>
      </section>

      <section className="projects page-width section" id="projects">
        <div className="projects-content">
          <h2>My Projects</h2>
          <div className="project-list">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
        </div>
      </section>

      <section className="contact page-width section" id="contact">
        <div className="contact-content">
          <h2>Contact Me</h2>
          <p>I'd love to hear from you! Feel free to reach out.</p>
          <div className="social-links contact-links"><a href={`mailto:${profile.email}`}>Email Me <span>-&gt;</span></a><a href={profile.github} target="_blank" rel="noreferrer">GitHub <span>-&gt;</span></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <span>-&gt;</span></a></div>
        </div>
      </section>

      <footer className="footer page-width"><span>{profile.name}</span><span>Built with React</span></footer>
    </main>
  )
}

export default App

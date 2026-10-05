import { useEffect, useState } from 'react'
import './App.css'
import { experiences, profile, projects, skillGroups } from './data.js'
import NowPanel from './NowPanel.jsx'
import Photo from './Photo.jsx'
import ProjectCard from './ProjectCard.jsx'
import ProjectPage from './ProjectPage.jsx'
import Reveal from './Reveal.jsx'
import SiteHeader from './SiteHeader.jsx'

function useHash() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

function App() {
  const hash = useHash()
  const slug = hash.match(/^#\/projects\/(.+)$/)?.[1]
  const activeProject = slug ? projects.find((p) => p.slug === slug) : undefined

  useEffect(() => {
    if (activeProject) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    else if (hash && !hash.startsWith('#/')) document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash, activeProject])

  if (activeProject) return <ProjectPage project={activeProject} />

  return (
    <main>
      <SiteHeader />

      <section className="intro page-width" id="top">
        <div className="intro-content">
          <h1>Hi, I&apos;m <span>{profile.name.split(' ')[0]}.</span></h1>
          <p className="intro-copy">{profile.intro}</p>
          <div className="profile-photo">
            <Photo src="/Profile.png" alt={`${profile.name} portrait`} />
          </div>
          <a className="button-link" href="#projects">See my projects <span>-&gt;</span></a>
        </div>
        <NowPanel />
      </section>

      <Reveal as="section" className="experience page-width section" id="experience">
        <div className="experience-content">
          <h2>Experience</h2>
          <div className="experience-list">
            {experiences.map((experience) => (
              <article className="experience-item" key={experience.organization}>
                <div className="experience-organization">{experience.organization}</div>
                {experience.roles.map((role) => (
                  <div className="experience-role" key={`${role.title}-${role.date}`}>
                    <div className="experience-meta"><span>{role.date}</span></div>
                    <h3>{role.title}</h3>
                    <p>{role.description}</p>
                    {role.highlights?.length > 0 && (
                      <ul>{role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                    )}
                  </div>
                ))}
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="projects page-width section" id="projects">
        <div className="projects-content">
          <h2>My Projects</h2>
          <div className="project-list">
            {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="skills-section page-width section" id="skills">
        <div className="skills-section-content">
          <h2>Skills</h2>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.label}>
                <h4>{group.label}</h4>
                <div className="skills">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="about page-width section" id="about">
        <div className="about-content">
          <h2>About Me</h2>
          <div className="about-body">
            <div className="about-photo">
              <Photo src="/about-photo.jpg" alt={`${profile.name} in a personal setting`} />
            </div>
            <div className="bio-copy">
              {profile.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="contact page-width section" id="contact">
        <div className="contact-content">
          <h2>Contact Me</h2>
          <p>I&apos;d love to hear from you! Feel free to reach out.</p>
          <div className="social-links">
            <a href={`mailto:${profile.email}`}>Email <span>-&gt;</span></a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub <span>-&gt;</span></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>-&gt;</span></a>
          </div>
        </div>
      </Reveal>

      <footer className="footer page-width"><span>{profile.name}</span><span>Built with React</span></footer>
    </main>
  )
}

export default App

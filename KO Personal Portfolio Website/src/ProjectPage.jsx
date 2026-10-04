import Reveal from './Reveal.jsx'

const hasPhoto = (block) => block.type === 'text' && Boolean(block.image)

function Paragraphs({ body }) {
  return body
    .split('\n\n')
    .map((para) => para.trim())
    .filter(Boolean)
    .map((para, i) => <p key={i}>{para}</p>)
}

function Block({ block, imageSide }) {
  if (block.type === 'text') {
    const photo = hasPhoto(block)
    return (
      <section className={`story-block story-text${photo ? ` story-split story-split-${imageSide}` : ''}`}>
        <div className="story-copy">
          {block.date && <span className="story-date">{block.date}</span>}
          {block.heading && <h2>{block.heading}</h2>}
          <Paragraphs body={block.body} />
        </div>
        {photo && (
          <figure className="story-photo">
            <img src={block.image} alt={block.alt || block.caption || ''} loading="lazy" />
            {block.caption && <figcaption>{block.caption}</figcaption>}
          </figure>
        )}
      </section>
    )
  }

  if (block.type === 'image') {
    return (
      <figure className="story-block story-figure">
        <img src={block.src} alt={block.caption || ''} loading="lazy" />
        {block.caption && <figcaption>{block.caption}</figcaption>}
      </figure>
    )
  }

  if (block.type === 'gallery') {
    return (
      <div className="story-block story-gallery">
        {block.images.map((image) => (
          <figure key={image.src}>
            <img src={image.src} alt={image.caption || ''} loading="lazy" />
            {image.caption && <figcaption>{image.caption}</figcaption>}
          </figure>
        ))}
      </div>
    )
  }

  if (block.type === 'video' && block.youtubeId) {
    return (
      <figure className="story-block story-figure">
        <div className="story-video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${block.youtubeId}`}
            title={block.caption || 'Project video'}
            loading="lazy"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        {block.caption && <figcaption>{block.caption}</figcaption>}
      </figure>
    )
  }

  return null
}

function ProjectPage({ project }) {
  const story = project.story || []
  const collaborators = project.collaborators || []
  const skills = project.skills || []

  // First photo block goes right, second goes left, and so on.
  // Only text blocks with an image count toward the alternation.
  const sideFor = (index) =>
    story.slice(0, index).filter(hasPhoto).length % 2 === 0 ? 'right' : 'left'

  return (
    <main>
      <header className="site-header page-width">
        <a className="logo" href="#top">KO<span>.</span></a>
        <nav aria-label="Main navigation">
          <a className="back-button" href="#projects">&larr; All projects</a>
        </nav>
      </header>

      <article className="project-page page-width">
        <div className="project-meta">
          <span>{project.date}</span>
        </div>
        <h1>{project.title}</h1>
        <p className="project-page-summary">{project.description}</p>
        {skills.length > 0 && <div className="skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>}
        <div className="project-links">
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <span>-&gt;</span></a>}
          {(project.websiteUrl || project.liveUrl) && <a href={project.websiteUrl || project.liveUrl} target="_blank" rel="noreferrer">Project website <span>-&gt;</span></a>}
        </div>

        <div className="story">
          {story.map((block, index) => (
            <Reveal key={`${block.type}-${index}`}>
              <Block block={block} imageSide={sideFor(index)} />
            </Reveal>
          ))}
        </div>

        {collaborators.length > 0 && (
          <Reveal as="section" className="collaborators">
            <h2>Collaborators</h2>
            <ul>
              {collaborators.map((person) => (
                <li key={person.name}>
                  <strong>{person.name}</strong>
                  {person.role && <span>{person.role}</span>}
                  <div className="project-links">
                    {person.github && <a href={person.github} target="_blank" rel="noreferrer">GitHub <span>-&gt;</span></a>}
                    {person.linkedin && <a href={person.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>-&gt;</span></a>}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <div className="story-back">
          <a className="back-button" href="#projects">&larr; Back to all projects</a>
        </div>
      </article>

      <footer className="footer page-width"><span>Kalista Oberes</span><a href="#projects">Back to projects</a></footer>
    </main>
  )
}

export default ProjectPage
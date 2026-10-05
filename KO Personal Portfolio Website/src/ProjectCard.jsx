import { useEffect, useState } from 'react'

function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)
  const skills = project.skills || []
  const solutionMethods = project.solutionMethods || []
  const results = project.results || []
  const storyHref = project.slug ? `#/projects/${project.slug}` : null
  const hasImage = Boolean(project.image) && !imageFailed
  const comingSoon = ['in-progress', 'upcoming'].includes(project.status)
  const placeholder = !project.image && comingSoon ? 'Coming Soon' : 'Image unavailable'
  const titleId = `modal-title-${project.slug || project.title.replace(/\W+/g, '-').toLowerCase()}`

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
            {hasImage
              ? <img src={project.image} alt={`${project.title} preview`} onError={() => setImageFailed(true)} />
              : <span>{placeholder}</span>}
          </div>
          <div className="project-card-details">
            <div className="project-meta"><span>{project.date}</span></div>
            <div className="project-heading"><h3>{project.title}</h3></div>
            <p className="project-description">{project.description}</p>
            {skills.length > 0 && (
              <div className="project-section">
                <h4>Skills used</h4>
                <div className="skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </div>
            )}
            {storyHref && (
              <div className="project-actions">
                <a className="project-details-button" href={storyHref}>Full project story <span>-&gt;</span></a>
              </div>
            )}
          </div>
        </div>
        <button className="project-card-hit" type="button" aria-label={`View ${project.title} summary`} onClick={() => setIsOpen(true)} />
      </article>

      {isOpen && (
        <div
          className="project-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false) }}
        >
          <section className={`project-modal${hasImage ? '' : ' no-image'}`} role="dialog" aria-modal="true" aria-labelledby={titleId}>
            <button className="modal-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close project details">×</button>
            {hasImage && (
              <div className="modal-image-wrap">
                <img src={project.image} alt={`${project.title} larger preview`} />
              </div>
            )}
            <div className="modal-content">
              <div className="project-meta"><span>Project details</span><span>{project.date}</span></div>
              <h2 id={titleId}>{project.title}</h2>
              <div className="modal-section"><h4>Project Description</h4><p className="modal-description">{project.longDescription || project.description}</p></div>
              {solutionMethods.length > 0 && <div className="modal-section"><h4>Solution Methods</h4><ul>{solutionMethods.map((item) => <li key={item}>{item}</li>)}</ul></div>}
              {results.length > 0 && <div className="modal-section"><h4>Results</h4><ul>{results.map((item) => <li key={item}>{item}</li>)}</ul></div>}
              {storyHref && (
                <div className="project-links">
                  <a href={storyHref}>Full project story <span>-&gt;</span></a>
                </div>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export default ProjectCard
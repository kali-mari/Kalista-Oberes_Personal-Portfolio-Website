import { NOW_UPDATED, experiences, projects } from './data.js'

function NowPanel() {
  const roles = experiences.flatMap((exp) =>
    exp.roles
      .filter((role) => /current/i.test(role.date))
      .map((role) => ({ ...role, organization: exp.organization }))
  )
  const building = projects.filter((p) => p.status === 'in-progress')

  return (
    <aside className="now-panel" aria-labelledby="now-title">
      <div className="now-header">
        <h2 id="now-title">Right Now</h2>
        <span className="now-updated"><i aria-hidden="true" />Updated {NOW_UPDATED}</span>
      </div>

      <div className="now-grid">
        {roles.map((role) => (
          <a className="now-card" href="#experience" key={`${role.organization}-${role.title}`}>
            <h3>{role.organization}</h3>
            <p className="now-org">{role.title}</p>
          </a>
        ))}

        {building.map((project) => {
          const latest = [...(project.story || [])].reverse().find((b) => b.date)
          return (
            <a className="now-card" href="#projects" key={project.title}>
              <h3>{project.title}</h3>
              {latest && <p className="now-update">{latest.date} · {latest.heading}</p>}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default NowPanel

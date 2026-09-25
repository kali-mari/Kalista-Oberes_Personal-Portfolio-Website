# Portfolio Website

Personal portfolio site built with React + Vite. Showcases about me, experience, and projects.

## Tech Stack
- React
- Vite
- Plain CSS (no framework)

## Project Structure
```
src/
  App.jsx        # main page content and components
  App.css        # site styles
  main.jsx       # app entry point
  ProjectPage.jsx # full project story page (per-project route)
index.css       # global styles
public/
  Profile.jpg       # intro section photo
  about-photo.jpg    # About Me section photo
  [project images]   # referenced in the projects array in App.jsx
```

## Editing the site

All content lives in a few JavaScript arrays near the top of `src/App.jsx`. Edit the arrays, save, and the page updates — no other files need to change unless noted below.

### Adding a skill

Skills are grouped under `skillGroups`. Add a string to the `skills` array of the group it belongs in:

```js
const skillGroups = [
  { label: 'CAD & Simulation', icon: '◇', skills: ['SolidWorks', 'Onshape', /* add here */] },
  // ...
]
```

To add a new group entirely, add an object with the same three keys (`label`, `icon`, `skills`).

### Adding an experience

Experiences are grouped by `organization`, each with one or more `roles`. To add a new role at an organization you already have, add to its `roles` array:

```js
{
  organization: 'Stellar Energy Americas',
  roles: [
    { title: 'Project Management Engineering Intern', date: '...', description: '...', highlights: ['...'] },
    // add a new role object here
  ],
}
```

To add a new organization, add a new object with `organization` and a `roles` array to the `experiences` list. Each role needs `title`, `date`, `description`, and a `highlights` array of bullet points.

### Adding a project

Add an object to the `projects` array. Required fields:

| Field | What it's for |
|---|---|
| `title` | Project name |
| `image` | Path to the thumbnail, e.g. `/myproject.jpg` — file goes in `public/` |
| `date` | Shown in the card meta line |
| `description` | Short summary shown on the card |
| `skills` | Array of skill tags shown on the card |
| `githubUrl` | Optional — omit or leave `''` to hide the GitHub link |
| `websiteUrl` | Optional — omit or leave `''` to hide the live site link |

The pop-up (quick-glance modal) also needs:

| Field | What it's for |
|---|---|
| `longDescription` | Longer version of the description, shown in the modal |
| `solutionMethods` | Array of bullet points — how you approached it |
| `results` | Array of bullet points — outcomes |

For the full project story page, add:

| Field | What it's for |
|---|---|
| `slug` | URL segment, e.g. `'offthecharts'` → page lives at `#/projects/offthecharts`. Omit and the "Full project story" link won't appear. |
| `status` | `'completed'` or `'in-progress'` — shows a badge on the card |
| `story` | Array of content blocks, in the order they should appear (see below) |
| `collaborators` | Optional array of teammates (see below) |

**Story blocks.** Each entry in `story` is one of four types:

```js
story: [
  { type: 'text', heading: 'Where it started', body: 'First paragraph.\n\nSecond paragraph.' },
  { type: 'image', src: '/projects/myproject/sketch.jpg', caption: 'First sketch' },
  { type: 'gallery', images: [
    { src: '/projects/myproject/a.jpg', caption: 'v1' },
    { src: '/projects/myproject/b.jpg', caption: 'v2' },
  ] },
  { type: 'video', youtubeId: 'dQw4w9WgXcQ', caption: 'Demo' },
]
```

- `text` blocks take an optional `date` field (e.g. `'Sep. 2026'') for logging progress over time — use this for in-progress projects, adding a new block each time there's an update.
- `heading` and `caption` are optional on every block type.
- `youtubeId` is the part of the URL after `v=` — works with unlisted videos.
- Photos go in `public/projects/<slug>/`. Keep them around 1600px wide before uploading; full-size phone photos slow the page down.

**Collaborators.** Optional — leave the field out entirely if a project has none:

```js
collaborators: [
  { name: 'Jane Doe', role: 'Backend', github: 'https://github.com/janedoe', linkedin: 'https://linkedin.com/in/janedoe' },
]
```

`role`, `github`, and `linkedin` are each optional per person.

## Deployment
Deployed via Hostinger

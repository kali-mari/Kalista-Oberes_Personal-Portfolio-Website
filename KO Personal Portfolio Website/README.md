# Portfolio Website

Personal portfolio site built with React + Vite. Showcases about me, experience, and projects.

## Tech Stack
- React 19 with the React Compiler
- Vite
- Plain CSS (no framework)
- Oxlint

## Scripts
```
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run lint     # oxlint
```

## Project Structure
```
index.html           # page metadata, social preview tags, font links
src/
  data.js            # all site content (profile, experiences, projects, skills)
  App.jsx            # page layout and hash routing
  SiteHeader.jsx     # sticky header and section nav (home + project pages)
  ProjectCard.jsx    # project card and summary pop-up
  ProjectPage.jsx    # full project story page (per-project route)
  NowPanel.jsx       # "Right Now" panel
  Photo.jsx          # image with a neutral placeholder if the file is missing
  Reveal.jsx         # scroll-in animation wrapper
  App.css            # site styles
  index.css          # global resets
  main.jsx           # app entry point
public/
  Profile.png        # intro section photo
  about-photo.jpg    # About Me section photo
  sunflowericon.svg  # favicon
  projects/<slug>/   # story-page photos, one folder per project
  [card thumbnails]  # referenced by `image` in the projects array in data.js
```

## Editing the site

All content lives in `src/data.js`. Edit the arrays, save, and the page updates. No other files need to change unless noted below.

### Photos

The intro and About Me photos load from `public/Profile.png` and `public/about-photo.jpg`. If a file is missing, the page shows a "Photo unavailable" placeholder instead of a broken image.

### Adding a skill

Skills are grouped under `skillGroups`. Add a string to the `skills` array of the group it belongs in:

```js
export const skillGroups = [
  { label: 'CAD & Simulation', icon: '◇', skills: ['SolidWorks', 'Onshape', /* add here */] },
  // ...
]
```

To add a new group, add an object with the same three keys (`label`, `icon`, `skills`).

### Adding an experience

Experiences are grouped by `organization`, each with one or more `roles`. To add a role at an organization you already have, add to its `roles` array:

```js
{
  organization: 'Stellar Energy Americas',
  roles: [
    { title: 'Project Management Engineering Intern', date: '...', description: '...', highlights: ['...'] },
    // add a new role object here
  ],
}
```

To add a new organization, add an object with `organization` and a `roles` array to `experiences`. Each role needs `title`, `date`, and `description`. `highlights` is an optional array of bullet points. A role whose `date` contains the word "Current" also shows up in the Right Now panel.

### Right Now panel

The panel lists every role marked "Current" and every project with `status: 'in-progress'`. Update `NOW_UPDATED` in `src/data.js` whenever you refresh it.

### Adding a project

Add an object to the `projects` array. A project with only these fields still renders:

| Field | What it's for |
|---|---|
| `title` | Project name |
| `date` | Shown in the card meta line |
| `description` | Short summary shown on the card |

Everything else is optional, and anything you leave out is hidden instead of breaking the page:

| Field | What it's for |
|---|---|
| `slug` | URL segment, e.g. `'off-the-charts'` → page lives at `#/projects/off-the-charts`. Omit it and the "Full project story" button won't appear. Only add a slug once the project has a `story`, or the page will be empty. |
| `image` | Card thumbnail, e.g. `/myproject.jpg` — file goes in `public/`. Without it, or if the file fails to load, the card shows "Image unavailable". Projects with `status` of `'in-progress'` or `'upcoming'` and no `image` show "Coming Soon" instead. |
| `skills` | Array of skill tags shown on the card and the story page |
| `longDescription` | Longer description shown in the pop-up |
| `solutionMethods` | Array of bullet points in the pop-up: how you approached it |
| `results` | Array of bullet points in the pop-up: outcomes |
| `status` | `'in-progress'` lists the project under "Building" in the Right Now panel |
| `githubUrl` | GitHub link, shown on the story page only. Omit it to hide it. |
| `websiteUrl` | Live site / Devpost link, shown on the story page only. Omit it to hide it. |
| `story` | Array of content blocks for the story page (see below) |
| `collaborators` | Array of teammates (see below) |

**How cards behave.** Clicking anywhere on a card opens the pop-up summary. The card and the pop-up each have a "Full project story" button that goes to the story page. GitHub and project-website links appear only on the story page.

### Story blocks

Each entry in `story` is one of four types:

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

- Paragraphs inside `body` are separated by a blank line (`\n\n`).
- `text` blocks take an optional `date` field (e.g. `'Sep. 2026'`) for logging progress over time. Use this for in-progress projects, adding a new block each time there's an update. The latest dated block appears in the Right Now panel.
- `text` blocks can also carry a photo (see below).
- `heading` and `caption` are optional on every block type.
- `image` blocks and gallery images accept an optional `alt`; it falls back to the caption.
- `youtubeId` is the part of the URL after `v=` and works with unlisted videos. The key is spelled `youtubeId`, with a lowercase d. `youtubeID` shows nothing.

### Adding images to a Full Project page

**1. Put the files in the project's folder.** Make `public/projects/<folder>/` and drop the photos in. Example: `public/projects/3D-LiDAR/gimbal.jpg`.

**2. Reference them from the story with a path that starts at `/projects/`.** Leave out `public`: `/projects/3D-LiDAR/gimbal.jpg`.

**3. Pick where the photo goes.**

*Beside a section of text.* Add `image` to a `text` block. `caption` and `alt` are optional:

```js
{
  type: 'text',
  heading: 'Mechanical Design',
  body: 'The pitch axis is a servo...\n\nFor yaw, a pair of 1:1 gears...',
  image: '/projects/3D-LiDAR/gimbal.jpg',
  caption: 'Pitch and yaw gimbal',
  alt: 'Two-axis gimbal holding the LiDAR sensor',
}
```

- The photo takes half the row and the text takes the other half.
- Photos alternate sides automatically: the first photo is on the right, the second on the left, and so on.
- Only sections with a photo count toward the alternation. A text block with no `image` runs the full width of the page and doesn't affect which side the next photo lands on.
- On phones, every photo stacks under its text.

*Full-width, on its own.* Use an `image` block:

```js
{ type: 'image', src: '/projects/3D-LiDAR/point-cloud.png', caption: 'Point cloud in Unity' }
```

*Several photos in a row.* Use a `gallery` block (see the example above). Gallery photos are cropped to a 4:3 frame, so keep the subject near the center.

**Photo tips.**
- Resize to about 1600px wide before uploading. Full-size phone photos slow the page down.
- Use `.jpg`, `.png`, or `.webp`. Browsers don't display `.heic`, so convert iPhone photos first.
- File names are case-sensitive on the live site. `Gimbal.jpg` and `gimbal.jpg` are different files, even if both work on your computer.
- Skip spaces in file names. Use `point-cloud.png`, not `point cloud.png`.
- A photo that shows a broken-image icon almost always has a wrong path or a case mismatch.

### Collaborators

Optional. Leave the field out entirely if a project has none:

```js
collaborators: [
  { name: 'Jane Doe', role: 'Backend', github: 'https://github.com/janedoe', linkedin: 'https://linkedin.com/in/janedoe' },
]
```

`role`, `github`, and `linkedin` are each optional per person.

### Scroll animations

The intro section animates on page load in CSS. The other homepage sections and the story-page blocks fade in as they scroll into view. To animate a new section or block, swap its tag for `Reveal`:

```jsx
import Reveal from './Reveal.jsx'

<Reveal as="section" className="my-section page-width section" id="my-section">
  ...
</Reveal>
```

`as` sets the HTML tag (default `div`) and `delay={150}` waits 150ms before starting. Visitors with reduced motion turned on in their OS see no animation.

## Deployment
Deployed via Hostinger. Run `npm run build` and upload the contents of `dist/`.

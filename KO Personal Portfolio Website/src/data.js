// All site content lives here. See README.md for the shape of each array.

export const NOW_UPDATED = 'Oct. 2026'

export const profile = {
  name: 'Kalista Oberes',
  role: 'Mechanical Engineer',
  intro: '4th year student at UF studying mechanical engineering and computer science.',
  bio: [
    "I fell in love with robotics after joining a FIRST LEGO League team when I was nine years old. Competing in FIRST Tech Challenge and taking STEM courses throughout middle and high school solidified that passion, and I quickly became fascinated by the mechanical side of robotics and the problem-solving challenges it presented. That curiosity ultimately led me to study mechanical engineering at the University of Florida.",
    "As someone who benefitted directly from organizations that encouraged young girls to stay involved in engineering, supporting women in STEM has always been important to me. At UF, I have been involved in the Phi Sigma Rho Engineering Sorority since my freshman year, serving in multiple leadership roles and helping foster a supportive community for women in engineering on campus.",
    "Right now, I’m focused on becoming a well-rounded engineer capable of seamlessly integrating mechanical design, hardware prototyping, and software development. My ultimate goal is to pursue a career in an interdisciplinary field such as robotics or mechatronics. Through my coursework and hackathon projects, I’ve honed my ability to merge mechanical and software skills effectively, and my leadership roles and experience as a project management intern have strengthened my teamwork, communication, and organizational abilities.",
    "Outside of engineering, I enjoy finding the best new resturants and coffee shops, karaoke with friends, and teaching myself guitar.",
  ],
  linkedin: 'https://www.linkedin.com/in/kalista-oberes/',
  github: 'https://github.com/kali-mari',
  email: 'kalistaoberes@gmail.com',
}

export const experiences = [
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
        title: 'Banquet Chair',
        date: 'Aug. 2026 - Current',
        description: 'Planning a formal banquet for 80+ members and guests, including venue selection, catering, and event logistics to celebrate the accomplishments of the chapter and its members at the end of the semester',
      },
      {
        title: 'VP Finance',
        date: 'May 2025 - May 2026',
        description: 'Owned a $52,000 annual operating budget for an 80+ member chapter, covering local chapter expenses for events and national dues',
        highlights: [
          'Allocated $4,000 in scholarship funding for 33 members, improving member retention',
          'Replaced ad hoc reporting with recurring expenditure and cash flow updates, giving members visibility into chapter spending',
          'Supported 2 memorabilia and 3 fundraising chairs in tracking merchandise sold and money raised through two new fundraising events that generated $1000+ in revenue for the chapter',
        ],
      },
      {
        title: 'Sisterhood Chair',
        date: 'Jan. 2025 - May 2025',
        description: 'Planned and ran an overnight retreat for 50+ members to build connection between new and returning sisters',
        highlights: [
          'Built and managed a $4500 budget for transportation, catering, activities, and accommodations for 2 days and 3 nights',
          'Resolved on-site logistics in real time, from room assignments to last-minute communication issues to ensure a smooth experience for all attendees',
        ],
      },
      {
        title: 'VP Social of Alpha Iota Class',
        date: 'Jan. 2024 - May 2024',
        description: 'Planned social events to build sisterhood between a 20-person new member class',
        highlights: [
          'Executed two social activities, including an on-campus movie night and off-campus outdoor day trip to a lake',
          'Assisted fellow class officers with service event and class gift, staying within a $500 budget for all new class activities',
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

export const projects = [
  {
    title: 'Senior Design Project',
    slug: 'senior-design',
    status: 'in-progress',
    date: 'Aug. 2026 - Current',
    description: 'Leading a team of 7 designing a machine that manufactures Nitinol wire blockers for biomedical use.',
    longDescription: 'Enrolled in EML4501 Mechanical Design II at UF, working in a team of 7 to design a mechanical system for biomedical manufacturing.',
    skills: ['SolidWorks', 'Microsoft Project'],
    story: [
      {
        type: 'text',
        heading: 'Project Overview',
        body: `For my senior design project at the University of Florida, I am serving as the Team Lead for a group of seven mechanical engineering students. Our team is designing and building a machine capable of manufacturing 20 mm-tall spring-like Nitinol wire blockers for medical use in the lung, based on current research in minimally invasive device design. In this role, I keep the team aligned and on schedule, coordinate subsystem responsibilities, and guide major design decisions as we move from research into prototyping.\n\n` +
          `After studying the problem space and reviewing existing technologies for spring forming and medical-device manufacturing, we developed our engineering specifications and generated multiple concepts. We recently finalized our chosen concept and have begun translating it into a full CAD model, marking the start of our detailed design phase.`,
      },
    ],
  },

  {
    // No slug yet: the card shows a summary pop-up only. Add a slug and a story when there is something to tell.
    title: 'SwampHacks XII',
    status: 'in-progress',
    date: 'Oct. 2026',
    description: 'Competing in UF\'s Fall 2026 SwampHacks hackathon.',
  },

  {
    title: 'OffTheCharts',
    slug: 'off-the-charts',
    image: '/projects/OffTheCharts/offthecharts-finalCLI.png',
    date: 'July 2026',
    description: 'Python CLI that recommends songs by audio similarity, not popularity, across 90K Spotify tracks.',
    longDescription: 'OffTheCharts finds songs with similar audio characteristics to a track you already like, ignoring popularity and chart position entirely. Built as a Python CLI, it runs k-d tree and max-heap nearest-neighbor search over 90K Spotify tracks using attributes like tempo, energy, and instrumentalness.',
    skills: ['Python', 'Git', 'NumPy', 'pandas', 'prompt_toolkit'],
    solutionMethods: [
      'Normalized 12 audio attributes per track into feature vectors across 90K tracks using pandas and NumPy',
      'Implemented k-d tree and max-heap nearest-neighbor search, exposed through a CLI',
      'Built song search and selection with prompt_toolkit’s WordCompleter for autocomplete input',
    ],
    results: [
      'Returns top 5 ranked songs from a 90K-track library',
      'Surfaces niche tracks that popularity-based recommenders miss',
    ],
    story: [
      {
        type: 'text',
        heading: 'The Idea',
        body: `This project was for the COP3530 Data Structures and Algorithms course at UF. The assignment required us to implement two data structures to parse a large dataset and compare their efficiency. After exploring publicly available datasets and proposing different ideas, our team decided to use a Spotify dataset. We were frustrated with how most music recommendation algorithms prioritize popularity, pushing mainstream songs and artists to the top of every list. We wanted to build a recommendation system that surfaced songs based on audio similarity rather than chart position, helping users discover new music they might not have found otherwise.`,
      },
      {
        type: 'text',
        heading: 'Data Preparation',
        body: `My main responsibility at the start of the project was preparing the dataset. I pulled the raw Spotify data from Kaggle and wrote Python scripts to clean it, remove duplicates, and filter out incomplete entries. Because the dataset contained tens of thousands of tracks, even small inconsistencies created major issues downstream, so I spent time normalizing the audio features and ensuring every song had a complete, usable profile.\n\n` +
          `A major part of my role was figuring out how to characterize each song numerically. I selected a set of audio attributes (including tempo, energy, danceability, acousticness, and instrumentalness) and combined them into a single feature vector. This gave us a consistent way to compare songs mathematically and measure similarity in a meaningful way.`,
      },
      {
        type: 'text',
        heading: 'Building the CLI Interface',
        body: `Once the dataset was ready, I focused on building the command-line interface that users would interact with. I designed the CLI to feel intuitive and responsive, even with a dataset of over 90,000 tracks. To simplify searching, I integrated a real-time autocomplete feature using an existing library instead of building one from scratch. This approach saved development time and gave the interface a polished, professional feel.`,
        image: '/projects/OffTheCharts/offthecharts-searchautocomplete.png',
        caption: 'Real-time autocomplete when searching for songs and artists',
      },
      {
        type: 'text',
        heading: 'Accomplishments',
        body: `By the end of the project, we had a fully functional recommendation system capable of returning the top five most similar songs to any track in the dataset. The CLI I built made the tool easy to use, and the autocomplete feature significantly improved the user experience.\n\n` +
          `The feature vector design I implemented allowed the system to surface niche tracks that popularity-based algorithms would never recommend. Seeing the recommendations match our expectations was one of the most rewarding parts of the project.`,
        image: '/projects/OffTheCharts/offthecharts-finalCLI.png',
        caption: 'Final CLI and most similar tracks display',
      },
      {
        type: 'text',
        heading: 'Lessons Learned',
        body: `This project taught me how to work with large datasets and design meaningful feature vectors for real-world applications. I also gained hands-on experience with Git and GitHub—especially resolving merge conflicts when multiple teammates were modifying the same files.\n\n` +
          `Another key takeaway was learning when to rely on existing libraries. Integrating a pre-built autocomplete library saved time and made the CLI feel more polished than anything we could have built from scratch within the project timeline. Overall, this project strengthened my understanding of algorithmic design and showed me how data structures directly impact the usability and performance of real applications.`,
      },
      { type: 'video', youtubeId: 'ibyIf6aCOUQ' },
    ],
    githubUrl: 'https://github.com/kali-mari/COP3530-Project-2-Off-the-Charts',
  },

  {
    title: '3D LiDAR Scanner',
    slug: '3d-lidar-scanner',
    image: '/projects/3D-LiDAR/3D-LiDAR-prototype.jpg',
    date: 'Mar. 2026',
    description: 'Low-cost, 3D-printable LiDAR scanner with two-axis servo and stepper positioning.',
    longDescription: 'Built during a 24-hour sprint at the inaugural UF Association of Applied Computing and Engineering hackathon, this low-cost prototype integrates a Garmin LiDAR-Lite sensor with a 3D-printable two-axis mechanical assembly to perform full 3D environmental scans, rendering the output as a real-time point cloud in Unity.',
    skills: ['Onshape', '3D Printing'],
    solutionMethods: [
      'Modeled the FDM components in Onshape with manufacturability and low print time in mind',
      'Used a stepper motor for yaw and a servo for pitch, giving the LiDAR a two-axis positioning system for full directional scanning',
    ],
    results: [
      'Reduced print time to under 3 hours for rapid prototyping',
      'Enabled real-time point cloud visualization from the scanner hardware',
      'Achieved full two-axis movement in a completed prototype post-hackathon',
    ],
    story: [
      {
        type: 'text',
        heading: 'The Idea',
        body: 'One of our teammates originally owned the LiDAR sensor and had been wanting to use it for a 3D scanning project. When the UF Association of Applied Computing and Engineering announced they were hosting their inaugural hardware hackathon, it felt like the perfect opportunity to finally build it. We assembled a team with both mechanical and hardware experience, combining our backgrounds to take on a project more ambitious in design than any of us could have attempted individually.',
      },
      {
        type: 'text',
        heading: 'Collaboration',
        body: `The most challenging part of this project was learning how to collaborate effectively across the mechanical and hardware teams. Our group of four was split evenly between two mechanical engineers and two hardware engineers, and early on, the other mechanical engineer and I struggled to communicate our design ideas clearly. We realized that to make progress, we needed to be far more direct and specific in our discussions. Instead of using broad terms like “rotational motion,” we defined exactly what we meant by “pitch” and “yaw,” and we spent more time creating detailed sketches to illustrate our concepts. Once we aligned on terminology and communication style, we discovered that our initial individual designs were actually quite similar.`,
      },
      {
        type: 'text',
        heading: 'Mechanical Design',
        body: `The mechanical design needed to be simple, fast to fabricate, and easy to iterate within the 24-hour hackathon window. Because print time directly limited how many redesigns we could attempt, we focused on creating geometries that were lightweight and optimized for rapid 3D printing. At the same time, the structure had to integrate cleanly with the hardware team’s electronics, so we avoided complex assemblies and ensured that all mounting points aligned directly with the motors and LiDAR unit.\n\n` +
          `A key functional requirement was achieving two axes of motion to enable full 3D scanning rather than a basic 2D sweep. The pitch axis was obtained by mounting the LiDAR directly onto a servo, giving us a straightforward and reliable way to control vertical rotation. For yaw, we designed a pair of 3D-printed gears with a 1:1 gear ratio. This kept the mechanism simple and allowed the motor’s rotation to correspond directly to the LiDAR’s yaw angle without additional gearing calculations or compensation in software.`,
        image: '/projects/3D-LiDAR/3D-LiDAR-onshapemodel.png',
        caption: 'CAD model of mechanical system',
      },
      {
        type: 'text',
        heading: 'Accomplishments',
        body: `By the end of the hackathon, we had a partially working prototype that demonstrated the core functionality of our 3D scanning system. We were able to show both pitch and yaw motion and visualize the LiDAR’s distance data in Unity as a point cloud. However, we ran out of time to fully test the mechanical design, and the 3D-printed gears did not have enough tolerance to rotate smoothly on the axles built into the printed housing.\n\n` +
          `After the hackathon, we revisited the design and created a fully functional prototype. We redesigned the gears with increased tolerance and printed a more robust housing to better support the axles. The updated assembly achieved smooth rotation and accurate scanning, demonstrating the potential of our low-cost, 3D-printable LiDAR scanner.`,
      },
      {
        type: 'gallery',
        images: [
          { src: '/projects/3D-LiDAR/3D-LiDAR-prototype.jpg', caption: 'End of hackathon prototype' },
          { src: '/projects/3D-LiDAR/3D-LiDAR-pointclouddemo.jpeg', caption: 'Point cloud demo in Unity' },
        ],
      },
      {
        type: 'text',
        heading: 'Lessons Learned',
        body: `This project taught me how to design mechanical systems for rapid prototyping while keeping hardware requirements in mind. Even though I wanted a more elaborate and robust design, a hackathon is not the best environment for complexity. Limited time to print and test meant I had to prioritize manufacturability and compatibility. Staying ahead of scope creep allowed us to achieve a partial prototype within the hackathon window.\n\n` +
          `Another key takeaway was the importance of clear communication and shared terminology when collaborating with a team. By defining our terms and using sketches to illustrate our ideas, we were able to align on a common vision and move forward more effectively. One factor that made our project successful was having a team lead who acted as a systems engineer. Because they understood both the hardware and mechanical requirements, they served as a bridge between the two teams and prevented misalignment. Having a systems engineer was crucial in grounding the project and ensuring our designs remained compatible.`,
        image: '/projects/3D-LiDAR/3D-LiDAR-teamphoto.jpeg',
      },
      {
        type: 'videoGallery',
        videos: [
          { youtubeId: 'h_uVNsXJl7M', caption: 'End of hackathon prototype' },
          { youtubeId: 'GBcUBboPLdo', caption: 'Post-hackathon redesign' },
        ],
      },
    ],
    githubUrl: 'https://github.com/annahudson356/lidar-sensor-hardware-hack-2026',
    websiteUrl: 'https://www.hackathonparty.com/hackathons/40/projects/471',
    collaborators: [
      {
        name: 'Ethan Toper',
        role: 'Project Manager and Mechanical Engineer',
        website: 'https://ethantoper.com/',
        linkedin: 'https://www.linkedin.com/in/ethan-toper-173b702a8/',
        github: 'https://github.com/EthanBToper',
      },
      {
        name: 'Anna Hudson',
        role: 'Hardware Engineer',
        github: 'https://github.com/annahudson356',
        linkedin: 'https://www.linkedin.com/in/anna-r-hudson/',
      },
      {
        name: 'Timothy Macias',
        role: 'Hardware Engineer',
        github: 'https://github.com/timacias',
        linkedin: 'https://www.linkedin.com/in/ti-macias/',
      },
    ],
  },

  {
    title: 'MyFlowFriend',
    slug: 'myflowfriend',
    image: '/projects/MyFlowFriend/myflowfriend-title.jpg',
    date: 'Feb. 2026',
    description: 'Tamagotchi-style ESP32 device and mobile app for tracking menstrual symptoms and cycle trends.',
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
    story: [
      {
        type: 'text',
        heading: 'The Idea',
        body: `My teammate and I went into WiNGHacks knowing we wanted to build something centered on women’s health, especially since the hackathon highlights women in tech. The idea to gamify menstrual tracking came from a conversation about how difficult it is to stay consistent with our health as busy college students. We both understood how important symptom tracking is, but every menstrual app we had tried felt boring, easy to ignore, and never motivating enough to use regularly. That led us to a simple question: how could we make daily health tracking feel engaging instead of tedious?\n\n` +
          `We ended up drawing inspiration from Tamagotchis, small virtual pets that need attention every day. Their playful, low stakes design sparked the concept for MyFlowFriend: a menstrual tracking device that encourages daily check ins by making the experience feel more fun, interactive, and rewarding.`,
      },
      {
        type: 'text',
        heading: 'Determining the Tech Stack',
        body: `Since this was my first hackathon, I started by building the mobile app. After researching beginner friendly options, React Native stood out as the easiest way to get a cross platform app running quickly. We wanted the app to update automatically whenever users logged symptoms on the hardware companion, so Firebase became the natural choice for the backend because of its real time syncing.\n\n` +
          `Because this was the first mobile app I had ever built, working with API calls for Firebase and Gemini Flash was completely new to me. Once I learned how to make those calls reliably, we integrated Gemini Flash 2.5 to serve as a conversational chatbot and to generate future cycle forecasts, a feature included in most menstrual tracking apps.`,
        image: '/projects/MyFlowFriend/myflowfriend-homescreen.jpg',
        caption: 'Mobile app homescreen',
      },
      {
        type: 'text',
        heading: 'Designing the Mobile App',
        body: `The mobile app uses a pastel, Y2K inspired aesthetic based on the era when Tamagotchis were popular. Each symptom category — flow, pain, sleep, and mood — has its own page with a 30 day grid showing the user’s entries. Designing this interface taught me a lot about mobile UI patterns, visual hierarchy, and how to make health data feel approachable rather than clinical.\n\n` +
          `Because this was my first mobile app, I ran into several issues while integrating Firebase and Gemini Flash. Debugging API calls became a major part of the design process — from handling asynchronous updates to making sure the app refreshed symptom data the moment the hardware device sent new logs. Working through those challenges helped me understand how the frontend and backend communicate and how to design screens that respond smoothly to real time data.`,
        image: '/projects/MyFlowFriend/myflowfriend-healthchat.png',
        caption: 'Health chatbot powered by Gemini Flash',
      },
      {
        type: 'text',
        heading: 'Accomplishments',
        body: `By the end of the 36 hour hackathon, we had the hardware and mobile app communicating seamlessly. When users entered their data into the hardware component and saved it, the backend automatically updated the mobile app in real time. We tested and demoed the system using dummy data to show the full workflow.\n\n` +
          `The mobile app included display screens for all four symptoms, generated cycle predictions, and demonstrated the chatbot functionality. On the hardware side, my teammate built a Tamagotchi inspired device using an ESP32 that let users log symptoms through simple daily interactions. The device sent each entry over WiFi to Firebase, where my app immediately pulled and displayed the updated data. Seeing both components sync instantly was one of the most rewarding moments of the weekend.\n\n` +
          `Even though the hardware added a fun, nostalgic element to the project, the mobile app became the central place where users could see and understand their health data. The UI, cycle predictions, and chatbot features tied the whole experience together and made the hardware feel purposeful rather than just playful.\n\n` +
          `We also outlined several improvements we want to make to the hardware moving forward. We plan to design and 3D print a portable, ergonomic housing for the device, and eventually power it with a 3.7V Li Po battery paired with a TP4056 charge and protection module. These upgrades would make the Tamagotchi fully portable and rechargeable, strengthening the connection between the physical device and the mobile app.\n\n` +
          `Beyond the technical milestones, we had created a project that we would want to use. Our demo resonated with judges and attendees, and we ultimately took home the Women Centric Track award.`,
        image: '/projects/MyFlowFriend/myflowfriend-predict.png',
        caption: 'Cycle prediction screen',
      },
      {
        type: 'text',
        heading: 'Lessons Learned',
        body: `I learned the fundamentals of mobile app development in React Native in a single weekend, including UI design, API integration, and real time data handling. I also gained a better understanding of how to scope a hackathon project and realized that with the right focus, you can accomplish far more in 36 hours than you expect.`,
        image: '/projects/MyFlowFriend/myflowfriend-teamphoto.jpeg',
      },
      { type: 'video', youtubeId: 'hejCKkAaBac' },
    ],
    githubUrl: 'https://github.com/kali-mari/MyFlowFriend-Winkghacks2026',
    websiteUrl: 'https://devpost.com/software/my-flowfriend',
    collaborators: [
      {
        name: 'Kali Schuchhardt',
        role: 'Hardware Engineer',
        website: 'https://kalischuchhardt.com/',
        linkedin: 'https://www.linkedin.com/in/kalischuchhardt984/',
        github: 'https://github.com/kalischuchhardt',
      },
    ],
  },
]

export const skillGroups = [
  { label: 'CAD & Simulation', icon: '◇', skills: ['SolidWorks', 'Onshape', 'Fusion 360', 'Blender', 'Prusa Slicer'] },
  { label: 'Languages & Frameworks', icon: '</>', skills: ['C++', 'Python', 'Java', 'MATLAB', 'Git', 'NumPy', 'pandas', 'React Native (Expo)', 'Firebase'] },
  { label: 'Project Management', icon: '▦', skills: ['Microsoft Project', 'JD Edwards', 'Procore'] },
]
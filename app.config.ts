export default defineAppConfig({
  siteConfig: {
    siteTitle: "Rubén Rodríguez",
    siteTitleAlt: "Front-End Developer",
    siteLogo: "https://rubenr.dev/icons/icon-256x256.png",
    siteUrl: "https://rubenr.dev",
    shortSiteUrl: "rubenr.dev",
    siteDescription:
      "Front-End developer & PhD student. Javascript & Open Source enthusiast. This is my personal website & blog. I write about tech, programming, and web technologies.",
    userName: "Rubén Rodríguez",
    userEmail: "hola@rubenr.dev",
    userLocation: "Madrid, Spain",
    seoKeywords:
      "blog, front-end, developer, javascript, react, gatsby, angular, ecommerce, magento, vuejs, vite, research, phd",
  },
  navigation: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Blog",
      url: "/blog",
    },
  ],
  footerLinks: [
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "Uses",
      url: "/uses",
    },
    {
      title: "RSS",
      url: "/sitemap.xml",
      external: true,
    },
  ],
  socialLinks: [
    {
      label: "GitHub",
      url: "http://github.com/rubenRP",
      iconClass: "github",
    },
    {
      label: "LinkedIn",
      url: "http://linkedin.com/in/rubenrodriguezpaz",
      iconClass: "linkedin",
    },
    {
      label: "Bluesky",
      url: "https://bsky.app/profile/rubenr.dev",
      iconClass: "bluesky",
    },
  ],
  home: {
    hero: {
      title: ["Hello world!", "¡Hola mundo!"],
      subtitle: "Soy Rubén Rodríguez.",
      text: "I'm a Madrid based developer. <strong>Front-End engineer</strong> @ Fever.<br/>Javascript enthusiast, Open Source lover.<br/><strong>PhD Student</strong>.",
    },
  },
  about: {
    title: "About me",
    imageAlign: "left",
    contactName: "Rubén Rodríguez",
    contactEmail: "hola [at] rubenr [dot] dev",
    contactLink:
      '<a href="https://www.linkedin.com/in/rubenrodriguezpaz/" class="btn btn-lg" target="_blank" rel="noopener">View full resume</a>',
    text: "Rubén Rodríguez, 1989, Madrid. Tech lover and restless by nature. Passionate about Javascript development and everything related to web technologies and Open Source projects.",
    shortInfo:
      "Rubén Rodríguez, 1989, Madrid based. Tech lover and restless by nature. Front-End engineer @ Fever.",
  },
  resume: [
    {
      id: 0,
      title: "Skills",
      cssClass: "skills",
      items: [
        {
          id: 0,
          skillList: [
            {
              id: 4,
              name: "Javascript",
              icon: "javascript",
            },
            {
              id: 5,
              name: "Typescript",
              icon: "typescript",
            },
            {
              id: 1,
              name: "Angular",
              icon: "angular",
            },
            {
              id: 3,
              name: "Vue",
              icon: "vue",
            },
            {
              id: 2,
              name: "React",
              icon: "react",
            },
            {
              id: 6,
              name: "Jest",
              icon: "jest",
            },
            {
              id: 7,
              name: "Cypress",
              icon: "cypress",
            },
          ],
        },
      ],
    },
    {
      id: 1,
      title: "Work",
      cssClass: "work",
      items: [
        {
          id: 1,
          title: "Fever",
          info: "Software Engineer",
          date: "2025 - Current",
        },
        {
          id: 2,
          title: "Universitat Oberta de Catalunya",
          info: "Course Instructor",
          date: "2020 - Current",
          description:
            'More details in my <a href="https://www.linkedin.com/in/rubenrodriguezpaz/" target="_blank" rel="noopener">LinkedIn</a> profile.',
        },
      ],
    },
    {
      id: 2,
      title: "Education",
      cssClass: "education",
      items: [
        {
          id: 1,
          title: "Universitat Oberta de Catalunya",
          info: "Doctoral Programme in Network and Information Technologies",
          date: "2023 - Current",
        },
        {
          id: 2,
          title: "Universitat Oberta de Catalunya",
          info: "Master of Technology - MTech, Computer Engineering",
          date: "2019",
        },
        {
          id: 3,
          title: "Universidad Autónoma de Madrid",
          info: "Bachelor of Engineering, Computer Engineering",
          date: "2015",
        },
      ],
    },
    {
      id: 3,
      title: "Certifications",
      cssClass: "education",
      items: [
        {
          id: 1,
          title: "Adobe",
          info: "Magento Commerce Front-End Developer",
          date: "2019",
        },
        {
          id: 2,
          title: "Magento",
          info: "Magento Certified Front End Developer",
          date: "2015",
        },
        {
          id: 3,
          title: "GitLab",
          info: "GitLab Certified Associate",
          date: "2021",
        },
      ],
    },
    {
      id: 4,
      title: "Speaking",
      cssClass: "speaking",
      items: [
        {
          id: 1,
          title: "MageTitans ES",
          info: "PWA & Magento: Deity, another point of view",
          description:
            "Brief description of the Deity platform, its architecture, integration with Magento 2 and module development with it. Slides <a href='https://www.slideshare.net/RubnRodrguezPaz/pwa-magento-2-deity-otro-punto-de-vista' target='_blank'>here</a>.",
          url: "https://www.slideshare.net/RubnRodrguezPaz/pwa-magento-2-deity-otro-punto-de-vista",
          date: "2018",
        },
        {
          id: 2,
          title: "Meet Magento Spain",
          info: "Theming in Magento 2 using a frontend framework",
          description:
            "How to develop a new framework on top of Magento 2 architecture and integration with Bootstrap 4. Slides <a href='https://www.slideshare.net/RubnRodrguezPaz/mm17es-theming-en-magento-2-usando-un-framework-de-frontend' target='_blank'>here</a>, video <a href='https://www.youtube.com/watch?v=ih3ZfYM2MBY' target='_blank'>here</a>.",
          url: "https://www.slideshare.net/RubnRodrguezPaz/mm17es-theming-en-magento-2-usando-un-framework-de-frontend",
          date: "2017",
        },
      ],
    },
  ],
});

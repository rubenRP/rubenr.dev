const config = {
  siteTitle: "Rubén Rodríguez - Front-End Developer", // Site title.
  siteTitleShort: "Rubén Rodríguez", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Front-End Developer", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://rubenr.dev", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "Hello world! Soy Rubén Rodríguez. I''m a Madrid based developer. Front-End developer @interactiv4. SASS, Bootstrap lover & Javascript enthusiast. Magento certified. Specialized in custom theme development and new UX patterns.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Gatsby Advanced Starter RSS feed", // Title of the RSS feed
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-156169940-1", // GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  userName: "Advanced User", // Username to display in the author segment.
  userEmail: "AdvancedUser@example.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "North Pole, Earth", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  headerLinks: [
    {
      title: "Uses",
      url: "/uses",
    },
    {
      title: "Blog",
      url: "/blog",
    },
  ],
  userLinks: [
    {
      label: "Twitter",
      url: "http://twitter.com/@_rubenr",
      iconClassName: "fa fa-twitter",
    },
    {
      label: "LinkedIn",
      url: "http://linkedin.com/in/rubenrodriguezpaz",
      iconClassName: "fa fa-linkedin",
    },
    {
      label: "GitHub",
      url: "http://github.com/rubenRP",
      iconClassName: "fa fa-github",
    },
    {
      label: "Instagram",
      url: "http://instagram.com/_rubenr",
      iconClassName: "fa fa-instagram",
    },
  ],
  certifications: [
    {
      name: "Magento 2 Certified Professional Front End Developer",
      file: "middle_frontend_developer_m2.png",
    },
    {
      name: "Magento Certified Front End Developer",
      file: "middle_frontend_developer.png",
    },
  ],
}

module.exports = config

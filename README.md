# rubenr.dev

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Personal website made with Astro and Vue 3

## Requirements

- Node.js `22.13.0` or newer
- npm `10.8.2` or newer
- Optional: `nvm` to use the version pinned in `.nvmrc`

## Features

- Posts and pages in Markdown
- Tags and categories
- Sass Integration
- Ackee Stats integration

## Contributing

This is a personal blog, but if you want to contribute or make some fix, raise an issue or let me know.

## Forking policy

Feel free to fork this repository and use it as a base for your own blog. If you do so, please consider the following:

- Remove all the posts and images
- Change the content of the `about.md` file
- Change the content of the CONSTS file

## Author

[Rubén Rodríguez](https://www.rubenr.dev)

## License

This project is open source and available under the [MIT License](LICENSE).

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                   |
| :------------------------ | :------------------------------------------------------- |
| `npm install`             | Installs dependencies                                    |
| `npm run dev`             | Starts local dev server at `localhost:4321`              |
| `npm run build`           | Builds your production site to `./dist/`                 |
| `npm run preview`         | Previews your build locally                              |
| `npm run check`           | Runs Astro type/content checks                           |
| `npm run lint`            | Runs ESLint over JS/TS/Vue/Astro files                   |
| `npm run lint:fix`        | Runs ESLint with autofix                                 |
| `npm run format`          | Formats project files with Prettier                      |
| `npm run format:check`    | Checks formatting without writing changes                |
| `npm run audit`           | Runs dependency security audit (high severity threshold) |
| `npm run ci`              | Local quality gate (`lint` + `check` + `build`)          |
| `npm run astro ...`       | Runs Astro CLI commands like `astro add`                 |
| `npm run astro -- --help` | Gets help using the Astro CLI                            |

## Quality & Automation

- CI workflow in `.github/workflows/ci.yml` validates format, lint, type checks and build on push/PR.
- Security headers for Netlify are configured in `netlify.toml`.
- Dependency updates are automated through `.github/dependabot.yml`.

# Next Js Frontend - Template Setup

- [next Js Project](#next-js-project)
- [Git & Github](#git-and-github)
- [Folder Structure](#folder-structure)
- [Tailwind CSS](#tailwind-css)
- [Husky](#husky)

## Next Js Project

### About

Next.js is a React framework for building full-stack web applications. It provides additional features and optimizations for developing user interfaces using React components. You can also read the docs[https://nextjs.org/]

### Installation

To create a new Next.js project, use the following command:

```sh
npx create-next-app@latest
```

When prompted, you can configure the project with the following options:

Would you like to use TypeScript? ... No / Yes

- Would you like to use ESLint? ... No / Yes
- Would you like to use Tailwind CSS? ... No / Yes
- Would you like to use `src/` directory? ... No / Yes
- Would you like to use App Router? (recommended) ... No / Yes
- Would you like to customize the default import alias (@/\_)? ... No / Yes
- What import alias would you like configured? ... @/\_

## Git and Github

Git is automatically initialized when you set up your Next.js project. After initializing, you need to add and commit your files before pushing them to a GitHub repository.

Follow these steps to commit and push your code:

1. Add and Commit Your Files:

This command stages all the changes and commits them with a message:

```sh
git add .
git commit -am 'feat: Initial Next.js project setup'
```

2. Push Your Code to GitHub:

First, create a repository on GitHub. Then link your local project to the remote repository and push your changes:

```sh
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin master
```

## Folder Structure

### Folder Descriptions

#### Root Directory Structure

1. docker:

- Purpose: Contains Docker-related configuration files.
- Usage: Used to define the Docker environment for the application, including Docker files and Docker Compose files.

2. public:

- Purpose: Stores static assets such as images, fonts, and other files that need to be directly accessible via URL.
- Usage: Used for serving static files that don’t change frequently and need to be cached by the browser.

#### src Directory Structure

1. @types:

- Purpose: Contains TypeScript type definitions.
- Usage: Used to define custom types and interfaces, improving type safety and code completion within the project.

2. app:

- Purpose: Contains the application’s main routing and layout logic.
- Usage: Utilized for defining routes, layouts, and nested routes in Next.js 14. Each file or folder represents a route.

3. assets:

- Purpose: Stores images, icons, and other static assets.
- Usage: These assets are imported and used within components and pages.

4. components:

- Purpose: Contains reusable React components.
- Usage: Used to define UI components that can be used throughout the application, promoting reusability and modularity.

5. configs:

- Purpose: Holds configuration files and settings.
- Usage: Used for managing application configuration such as environment settings, API configurations, and third-party service configurations.

6. constants:

- Purpose: Stores constant values and enumerations.
- Usage: Used to define constant values that are used across the application, ensuring consistency and ease of maintenance.

7. locales:

- Purpose: Contains localization files.
- Usage: Used for managing translations and internationalization, allowing the application to support multiple languages.

8. mock:

- Purpose: Stores mock data and APIs.
- Usage: Used for testing and development purposes, providing fake data and endpoints to simulate real APIs.

9. services:

- Purpose: Contains service functions and API calls.
- Usage: Used for handling business logic and API interactions, abstracting data fetching and manipulation.

10. store:

- Purpose: Manages state management logic.
- Usage: Used for setting up state management libraries like Redux, managing global state and actions.

11. styles:

- Purpose: Stores global styles, CSS, SCSS, or any other styling-related files.
- Usage: Helps in maintaining a consistent look and feel across the application.

12. utils:

- Purpose: Contains utility functions and helpers.
- sad

13. views:

- Purpose: Stores page components and views.
- Usage: Used for defining the main pages and views of the application, typically corresponding to routes defined in the app directory.

## Tailwind Css

To make global changes in Tailwind CSS, use the `tailwind.config.ts` file in the root directory.
ReadThis[https://tailwindcss.com/docs/configuration]

### Content

Apply Tailwind CSS to all files in the `src` directory and its subdirectories:

```ts
content: [

    "./src/*.{js,ts,jsx,tsx,mdx}",
  ],
```

### Theme Customization

Tailwind CSS allows extensive customization of your design system. Below are some examples.

### Colors

Tailwind offers a wide range of color options, but you can also customize the colors to match your brand:

```ts
theme: {
  extend: {
    colors: {
      primary: "#ffffff",
      secondary: "#000000",
      // Add more custom colors as needed
    },
  },
},
```

### Screens

Customize the responsive breakpoints to match your design requirements:

```ts
theme: {
  extend: {
    screens: {
      mobile: '576px',
      tablet: '960px',
      desktop: '1440px',
      // Add more custom screens as needed
    },
  },
},

```

### Spacing

Adjust spacing values to maintain consistent layout and design:

```ts
theme: {
  extend: {
    spacing: {
      '128': '32rem',
      '144': '36rem',
      // Add more custom spacing values as needed
    },
  },
},
```

### Plugins

Tailwind CSS supports various plugins to extend its functionality. You can include plugins in the configuration:

```ts
plugins: [
  // Add plugins here
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
  // Add more plugins as needed
],
```

his is basic you need to know. For more, go through the documentation. You can also create constants for height, width, color, padding, and margin values to maintain consistency across your project.

This example demonstrates how to set up Tailwind CSS for your project, including content paths, theme customizations, and plugins. For more details, refer to the Tailwind CSS Documentation.[https://tailwindcss.com/docs]

## Husky

### About Husky

Husky is a popular tool used in Git repositories to manage and enforce Git hooks. Git hooks are scripts that Git executes before or after events such as committing, pushing, and receiving changes.

Install Husky and lint-staged:

```bash
npm i husky lint-staged -D
```

Initialize Husky:

```bash
npx husky init
```

After this, the .husky folder will be created. Create a pre-commit hook:

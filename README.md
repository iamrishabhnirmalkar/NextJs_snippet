# Next Js Frontend - Template Setup

- [next Js Project](#next-js-project)
- [Git & Github](#git-and-github)

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

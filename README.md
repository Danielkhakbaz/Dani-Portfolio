# Danial Khakbaz's Portfolio

<a href="https://danieloo.vercel.app/" target="_blank"><img src="public/images/projects/portfolio/screen-shot.png" alt="The screen-shot of the daniel's portfolio" /></a>

Danial Khakbaz's portfolio built with [Next.js](https://nextjs.org/), showcasing his skills as a Front-end developer with a journey toward becoming a Full-stack developer. This project highlights his ambition for continuous learning and crafting seamless web applications using modern technologies.

## Project Overview

This portfolio website serves as a professional platform to showcase Danial’s work, skills, and personal philosophy on balanced living. It is optimized for performance and utilizes several popular tools and libraries for a smooth, interactive user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Development Scripts](#development-scripts)
- [Folder Structure](#folder-structure)

## Features

- **Responsive Design**: Fully responsive layout with smooth animations.
- **Interactive Animations**: Powered by Framer Motion.
- **MDX Support**: Easily integrates Markdown with React components.
- **Theme Customization**: Leveraging Chakra UI for theme flexibility.
- **View Transitions**: Provides smooth transitions between pages.
- **Form Integration**: Contact form connected to EmailJS for direct communication.

## Technologies Used

- **[Next.js](https://nextjs.org/)** - React framework for server-side rendering and static website generation.
- **[React](https://reactjs.org/)** - JavaScript library for building user interfaces.
- **[Chakra UI](https://chakra-ui.com/)** - Component library for building accessible React applications.
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library for React.
- **[EmailJS](https://www.emailjs.com/)** - Service to send emails directly from the client-side.
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with static typing.

## Folder Structure

```plaintext
danielo-portfolio/
├── app/                        # Source files for app pages(contains routing system)
│   ├── blog/                   # Blog section (page for blog posts)
│   ├── contact/                # Contact section (page for contact forms)
│   ├── experiences/            # Experiences section (page for work experience)
│   ├── projects/               # Projects section (page for showcasing projects)
│   ├── error.tsx               # Custom error page
│   ├── favicon.ico             # Favicon for the website
│   ├── layout.tsx              # Root layout component for setting up global layouts
│   ├── not-found.tsx           # Custom 404 page for handling not-found routes
│   └── page.tsx                # Main landing page component
│
├── features/                   # Seperated pages with all their parts
│   ├── home/                   # Home section (components for home posts)
│   │   ├── components/         # Components related to home
│   │   └── constants/          # Constants related to home
│   │
│   ├── blog/                   # Blog section (components for blog posts)
│   │   ├── components/         # Components related to blog
│   │   └── constants/          # Constants related to blog
│   │
│   ├── contact/                # Contact section (components for contact forms)
│   │   ├── components/         # Components related to contact
│   │   └── constants/          # Constants related to contact
│   │
│   ├── experiences/            # Experiences section (components for work experience)
│   │   ├── components/         # Components related to experiences
│   │   └── constants/          # Constants related to experiences
│   │
│   └── projects/               # Projects section (components for showcasing projects)
│       ├── components/         # Components related to projects
│       └── constants/          # Constants related to projects
│
├── shared/                     # All the pieces of codes that used throughout the app
│   ├── components/             # Components used throughout the app
│   ├── constants/              # Constants and configurations used throughout the app
│   ├── providers/              # Context providers for managing global state and data
│   ├── utils/                  # Utility function and components used throughout the app
│   └── styles/                 # Global and theme-specific styling files
│       ├── fonts/                   # Font files or font-related configurations
│       ├── theme/                  # Theme settings for design consistency (colors, typography, etc.)
│       └── globals.css             # Global CSS applied to the entire application
│
├── .eslintrc.json              # ESLint configuration for linting and code standards
├── .prettierrc                 # Prettier configuration for consistent code formatting
├── next.config.js              # Next.js configuration settings
├── package.json                # Project metadata, scripts, and dependencies
└── README.md                   # Documentation file explaining the project setup and usage
```

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Danielkhakbaz/Danielo-Portfolio
   cd danielo-portfolio

   ```

2. **Install dependencies**:

   ```tsx
   yarn
   ```

3. **Run the development server**:

   ```tsx
   yarn dev

   ```

4. **Open http://localhost:3000 in your browser to see the project**.

## Development Scripts

Here are some helpful scripts to assist in the development and maintenance of this project:

`dev`: Runs the app in development mode. <br/><br/>
`build`: Compiles the app for production. <br/><br/>
`start`: Starts the production server. <br/><br/>
`lint`: Lints and fixes files using ESLint. <br/><br/>
`fix`: Formats files using Prettier. <br/><br/>
`check-prettier`: Checks the code format without making changes. <br/>

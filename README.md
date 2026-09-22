# Personal Portfolio

A personal portfolio website I built with React to showcase my software engineering experience, technical skills, and side projects.

> **Note:** This portfolio was originally built in 2024 as a personal React project, and the profile content has not been kept up to date. For my current professional experience, please refer to my LinkedIn profile or resume.

## Overview

The site includes:

* A brief introduction and professional background
* Technical skills and work experience
* Selected personal projects
* Contact information and professional links
* Responsive navigation for desktop and mobile layouts

Most of the portfolio content is separated into JSON data files, while the UI is organized into reusable React components.

## Tech Stack

* React
* JavaScript
* Vite
* CSS Modules
* ESLint

## Project Structure

```text
src/
├── components/
│   ├── About/
│   ├── Contact/
│   ├── Experience/
│   ├── Hero/
│   ├── Navbar/
│   └── Projects/
├── data/
├── App.jsx
└── main.jsx
```

The `data` directory contains portfolio content such as skills, work history, projects, and contact information, keeping the content separate from the presentation components.

## Running Locally

Clone the repository and install the dependencies:

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

## Why I Built This

I built this site as a simple personal project to create a central place for my engineering background and projects while getting more hands-on experience with React and component-based frontend development.

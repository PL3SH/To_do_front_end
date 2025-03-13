# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Project Overview
This is the frontend application for a Todo List project built with React. It connects to a Ruby on Rails backend API to provide a complete task management system. The application features a modern, responsive UI with animated background elements.

## Project Structure

## Features
- User authentication (login/signup)
- Create, read, update, and delete tasks
- Filter and sort tasks
- Beautiful animated background with particles
- Responsive design for mobile and desktop
## Technologies Used
- React: JavaScript library for building the user interface
- Tailwind CSS: Utility-first CSS framework for styling
- Particles.js: JavaScript library for creating particles background
- Vite: Next generation frontend tooling
## Installation
- Prerequisites
- Node.js (v14+ recommended)
- npm or yarn
- Access to the Rails backend API

## Set up
1. Clone the repository
```bash
   git clone https://github.com/your-username/todo-frontend.git
   cd todo-frontend
```
2. Install dependencies
```bash
   npm install
   # or
   yarn install
```
3. start development server 

```bash
npm run dev
#or 
yarn dev
```

4.The application will be available at http://localhost:5173


## Styling
The application uses Tailwind CSS for styling, with custom configurations for:
- Font families
- Background gradients
- Animated background blobs
- Particles effects
- Visual Elements
## The interface includes:
- Animated floating blobs in the background
- Interactive particle animations
- Gradient backgrounds
- Modern, clean UI components

## Development
To customize the styles:
- Modify the tailwind.config.js for theme changes
- Edit the particles configuration in particles.json
- Add new components in the components directory
- the font used in the application is Ndot inspired by nothing brand here is the url where you can download for your own: (https://nothing.community/d/104-ndot57-the-nothing-typeface)[nothing font]
- Edit the particles configuration in particles.json
- Add new components in the components directory

License
This project is licensed under the MIT License - see the LICENSE file for details.

Note: This is the frontend portion of a full-stack Todo List application. For the backend code and API documentation, please refer to the corresponding Rails repository.(https://github.com/PL3SH/Todo_Backend)[Todo back end repository in rails]


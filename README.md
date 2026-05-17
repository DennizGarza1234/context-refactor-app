# React Context API Refactor App

## Overview

This project demonstrates how to eliminate prop drilling in a React application using the Context API.

The application contains a nested component structure:

App → Dashboard → Sidebar → UserProfile

Instead of passing user data through multiple components using props, the application uses `createContext` and `useContext` to allow deeply nested components to access shared data directly.

---

## Features

- React Context API implementation
- Shared global user state
- Removal of prop drilling
- Functional component architecture
- Clean and responsive UI
- Vite development environment with Hot Module Replacement

---

## Technologies Used

- React
- Vite
- JavaScript
- CSS

---

## Project Structure

```plaintext
src/
│
├── components/
│   ├── Dashboard.jsx
│   ├── Sidebar.jsx
│   └── UserProfile.jsx
│
├── UserContext.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## Installation and Setup

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/context-refactor-app.git
```

### Navigate Into the Project Directory

```bash
cd context-refactor-app
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

---

## Context API Implementation

### UserContext.jsx

The application creates a context using:

```jsx
createContext()
```

A `UserProvider` component stores the shared user object and provides it to all nested components.

---

## useContext Implementation

Inside `UserProfile.jsx`, the user data is accessed directly using:

```jsx
const { user } = useContext(UserContext);
```

This removes the need to pass props through intermediate components.

---

## User Data Displayed

The application displays:

- User name
- User email
- Theme preference

---

## Test Cases

### Normal Test Cases

| Test Case | Expected Result | Status |
|---|---|---|
| Display user name | Name displays correctly | Passed |
| Display user email | Email displays correctly | Passed |
| Display theme preference | Theme displays correctly | Passed |

---

### Edge Test Cases

| Test Case | Expected Result | Status |
|---|---|---|
| Empty user name | App still renders safely | Passed |
| Missing email value | App continues functioning | Passed |
| Long user name | Layout remains readable | Passed |

---

## Learning Outcomes

This project demonstrates:

- How to create and use React Context API
- How to eliminate prop drilling
- How to share global state between components
- How to use the `useContext` hook
- Component organization and state management

---

## Youtube
https://www.youtube.com/watch?v=3iFS9oSmtQI

---

## Conclusion

This project successfully refactors a React component tree to use Context API instead of prop drilling. The implementation improves scalability, readability, and maintainability while successfully passing all required test cases.

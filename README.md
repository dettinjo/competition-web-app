<!-- portfolio:date=2021-12-01 -->

[English](README.md) · [Deutsch](README.de.md)

# Competition Web App

A comprehensive full-stack platform built to manage online coding competitions. It provides a seamless experience for participants to submit their work, for judges to review and rate entries, and for administrators to manage the entire ecosystem. Developed as a university assignment at the University of the West of Scotland, this project demonstrates a full-stack skill set integrating a modern frontend, a robust backend API, and containerised deployment.

<p align="center">
  <img src="docs/docker.svg" alt="Docker" width="170" />
</p>

### Key Features

- **Role-Based Access Control:** Distinct user roles (USER, JUDGE, ADMIN) each with different permissions and views.
- **User Authentication:** Secure registration and login using JWT for session management and `bcryptjs` for password hashing.
- **Competition Management:** Administrators can create, update, and manage competition details.
- **Submission System:** Authenticated users can submit entries to active competitions.
- **Rating and Judging:** Judges access a dedicated portal to view and rate all submissions.
- **Dynamic Frontend:** A responsive UI built with Next.js and Material-UI.

### Technical Highlights

The backend is a GraphQL API powered by Node.js and Express.js, with MongoDB (via Mongoose) as the data store. The frontend uses Apollo Client for data fetching and the React Context API for global state. The entire stack — frontend, backend, and a MongoDB instance — is containerised with Docker Compose, and the app is configured for deployment on Heroku.

### Outcome

A university coursework project exploring secure multi-user application design with real-world technologies. Key learnings included designing a GraphQL schema from scratch, implementing JWT-based role separation, and orchestrating a multi-service stack with Docker Compose.

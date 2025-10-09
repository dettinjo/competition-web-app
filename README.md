<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![ISC License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/dettinjo/competition-web-app">
    <img src="https://user-images.githubusercontent.com/26179770/148731059-e9521325-1658-4851-930f-4b2e67302f1a.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Competition Web App</h3>

  <p align="center">
    A full-stack web application for hosting and participating in coding competitions, developed for a university project.
    <br />
    <a href="https://github.com/dettinjo/competition-web-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://competition-web-app.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/dettinjo/competition-web-app/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/dettinjo/competition-web-app/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#graphql-api">GraphQL API</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://competition-web-app.herokuapp.com/)

This project is a full-stack web application for hosting and participating in coding and hacking competitions. It was developed as part of the **10020 Internet Technologies** module during a semester abroad at the **University of the West of Scotland**.

The application features a complete user authentication system, competition and submission management, and a role-based access control system for regular users, judges, and administrators.

Key Features:
*   **User Authentication:** Secure user registration and login functionality.
*   **Competition Listings:** View a list of active and past competitions.
*   **Submit Entries:** Authenticated users can submit their entries for competitions.
*   **Rate Submissions:** Judges have the ability to view and rate all submissions.
*   **Winner Announcements:** A dedicated page to showcase the winners of competitions.
*   **GraphQL API:** The backend is powered by a GraphQL API for efficient data fetching.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This project was built using a modern MERN-like stack, with Next.js for the frontend and a GraphQL API on the backend.

*   [![Next][Next.js]][Next-url]
*   [![React][React.js]][React-url]
*   [![Node.js][Node.js]][Node-url]
*   [![Express.js][Express.js]][Express-url]
*   [![GraphQL][GraphQL]][GraphQL-url]
*   [![MongoDB][MongoDB]][MongoDB-url]
*   [![Material-UI][MUI]][MUI-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following software installed on your machine:
*   Node.js (v16.10.0 recommended)
*   npm
    ```sh
    npm install npm@latest -g
    ```
*   A running MongoDB instance (local or cloud-based)

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/dettinjo/competition-web-app.git
    cd competition-web-app
    ```
2.  Install root NPM packages
    ```sh
    npm install
    ```
3.  Install Backend NPM packages
    ```sh
    cd backend
    npm install
    ```
4.  Install Frontend NPM packages
    ```sh
    cd ../frontend
    npm install
    ```
5.  Configure backend environment variables. Open `backend/nodemon.json` and enter your MongoDB credentials:
    ```json
    {
        "env": {
            "MONGO_USER": "your_mongo_user",
            "MONGO_PASSWORD": "your_mongo_password",
            "MONGO_DB": "your_database_name"
        }
    }
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

You can run the frontend and backend servers separately or use the concurrent script in the root directory.

*   **Run Backend Server** (from the `/backend` directory):
    ```sh
    npm start
    ```
    The API will be available at `http://localhost:4000`.

*   **Run Frontend Development Server** (from the `/frontend` directory):
    ```sh
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

*   **Run Both Concurrently** (from the root directory):
    ```sh
    npm start
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## GraphQL API

The backend exposes a GraphQL API. When the server is running, you can explore the schema and test queries using the GraphQL Playground.

*   **GraphQL Playground URL:** [https://competition-web-app.herokuapp.com/playground](https://competition-web-app.herokuapp.com/playground)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/dettinjo/competition-web-app/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the ISC License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Joel Dettinger

Project Link: [https://github.com/dettinjo/competition-web-app](https://github.com/dettinjo/competition-web-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

*   [Choose an Open Source License](https://choosealicense.com)
*   [Img Shields](https://shields.io)
*   [Font Awesome](https://fontawesome.com)
*   [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/dettinjo/competition-web-app.svg?style=for-the-badge
[contributors-url]: https://github.com/dettinjo/competition-web-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dettinjo/competition-web-app.svg?style=for-the-badge
[forks-url]: https://github.com/dettinjo/competition-web-app/network/members
[stars-shield]: https://img.shields.io/github/stars/dettinjo/competition-web-app.svg?style=for-the-badge
[stars-url]: https://github.com/dettinjo/competition-web-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/dettinjo/competition-web-app.svg?style=for-the-badge
[issues-url]: https://github.com/dettinjo/competition-web-app/issues
[license-shield]: https://img.shields.io/github/license/dettinjo/competition-web-app.svg?style=for-the-badge
[license-url]: https://github.com/dettinjo/competition-web-app/blob/main/LICENSE.txt
[product-screenshot]: https://user-images.githubusercontent.com/26179770/148731063-4475e7a3-261f-464a-a714-b2b93e36e67e.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/
[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[GraphQL]: https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white
[GraphQL-url]: https://graphql.org/
[MongoDB]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[MUI]: https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white
[MUI-url]: https://mui.com/

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<div align="center">
  <h3 align="center">Jiu Jitsu Connect</h3>
  <p align="center">
    Jiu Jitsu Connect Client
    <br />
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
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

**Jiu Jitsu Connect** is a full stack project that leverages all the programming skills I have acquired so far to create a facebook clone. It features a React Frontend that is written in TypeScript using Vite. Redux is utilized to store session info on the client and persisted using redux-persist. Styling is done via the use of Tailwind CSS as the primary focus was functionality of the web app. The backend utilizes Javascript, AWS S3 bucket, MongoDB, Supertest, Node.js, and Express.js. Both the frontend and backend are hosted on heroku. AWS S3 bucket is utilized in the backend to handle image uploading from the frontend. Authentication is handled via the use of Json Web Tokens.

**Jiu Jitsu Connect client** is the frontend that communicates with my Odin-book-backend. It is a React frontend built using Vite due to Create-react-app no longer being supported. I wrote it in TypeScript to challenge and further develop my programming skills. Styling is done using Tailwind CSS as my primary focus was functionality of the web application. Redux is utilized to store session info as it is persisted using redux-persist. Demo access is available via the login page to tour the app.

Backend Repo [Odin-book-backend](https://github.com/KurtisIvey/odin-book-backend)

Fully Deployed Project [Jiu Jitsu Connect](https://jiujitsu-connect.herokuapp.com/)

give it about 15-30 seconds after pressing login initially as the backend may be asleep 😴

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
- ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Installation

This project is currently setup to only run in conjunction with the backend I created due to the various fetch calls located throughout the app. In order to use it, you would need to clone the repo from my backend, configure the proper env variables for it, and then replace the fetch urls with the url from the locally hosted backend.

## Usage

This front was primarily created to mimic many of the features present on Facebook such as registration, login, posting text, commenting text, updating usernames, updating profile photos, and adding/removing friends. It communicates with my Odin-book-backend. If you need a reference for such code examples, you're free to use/borrow/reference any of the code present. Reach out to me if you have any questions.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Kurtis Ivey - [@IveyCodingBjj](https://twitter.com/IveyCodingBjj) - kurtiveycodes@gmail.com - [linkedin.com/in/kurtisivey/](https://www.linkedin.com/in/kurtisivey/)

Project Link: [https://odin-book-ki.herokuapp.com/](https://odin-book-ki.herokuapp.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Tailwind](https://tailwindcss.com/)
- [Heroku](https://devcenter.heroku.com/categories/reference)
- [React Icons](https://react-icons.github.io/react-icons/search)
- [The repo for this awesome README template courtesy of Othneil Drew](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

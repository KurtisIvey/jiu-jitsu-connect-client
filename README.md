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
  <h3 align="center">Odin Book Backend</h3>
  <p align="center">
    Odin book REST API 
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

Odin-book-backend is a REST API created to communicate with my Odin-book front end. Odin-book-backend was built using test driven development while constructing the various controllers that encompass it. In addition, mongodb-memory-server is used to mock the mongodb database for testing. This was a very challenging project that pushed my knowledge of backend development and understanding of MongoDB. Image uploading is handled via AWS S3 bucket and the corresponding url is then stored in the MongoDB database.

Backend Repo [Odin-book-backend](https://github.com/KurtisIvey/odin-book-backend)

Fully Deployed Project [Odin-book-ki](https://odin-book-ki.herokuapp.com/)

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

##### environment variables required

- DB_URI
- SECRET
- PORT
- BUCKET
- AWS_SECRET_ACCESS_KEY
- AWS_ACCESS_KEY_ID

##### cors

- cors settings should be configured to your preferences

## Usage

This backend was primarily created to mimic many of the features present on Facebook such as registration, login, posting text, commenting text, updating usernames, updating profile photos, and adding/removing friends. If you need a reference for such code examples, you're free to use/borrow/reference any of the code present. Reach out to me if you have any questions.

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

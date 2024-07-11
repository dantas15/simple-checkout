<div id="top"></div>

<!-- PROJECT LOGO -->
## Simple Checkout

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#workflow">Workflow</a></li>
        <li><a href="#project-structure">Project structure</a></li>
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
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT-->

## About the project

### Workflow

> [!NOTE]
> The project is a simple demonstration for a frontend challenge and it's still in development, with that in mind, you can help me by creating issues on the [repo][project-url]

The project is a simple checkout where the user specifies the amount to be paid, then two invoices are created:

- Upfront payment with Pix (Brazillian instant payment method)
- Remainder payment (with credit card or pix)

The user is prompted to pay using Pix.

Once the upfront payment is confirmed, the user can choose how he pays the remainder:

- Instantly with Pix
- Divide using credit card

Once the payment is confirmed, display a success page.

The following image displays the basic frontend workflow:

![frontend-workflow]

- Some screens were taken from the [challenge Figma](https://www.figma.com/file/hv1LgD7oNrtlmfWgKBG6PF/Woovi-Desafio-Front?node-id=1%3A100)

### Project structure

- `web`: Web application
- `server`: the server api
- `@simple-checkout/ui`: a stub React component library
- `@simple-checkout/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@simple-checkout/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Built With

[![Next][next.js]][next-url]
[![React][react.js]][react-url]
[![Node][node.js]][node-url]
[![GraphQL][graphql]][graphql-url]
[![MongoDB][mongodb]][mongodb-url]
[![Koa][koa]][koa-url]

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- Node.js

  ```sh
  https://nodejs.org/en/download/
  ```

- PNPM

  ```sh
  npm install pnpm -g
  ```

- Docker

  ```sh
  https://www.docker.com/get-started/
  ```

## Installation

Clone the repo

```sh
git clone https://github.com/dantas15/simple-checkout.git
```

1. Install packages

   ```sh
   pnpm install
   ```

2. Run containers

   ```sh
   pnpm compose:up
   ```

3. Run the Project

   ```sh
   pnpm dev
   ```

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/amazing-feature`)
3. Commit your Changes (`git commit -m 'feat(amazing-feature): my feature is awesome'`)
4. Push to the Branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

## References

- workspace
  - [pnpm workspaces](https://pnpm.io/pnpm-workspace_yaml)
  - [turbo](https://turbo.build/repo/docs/getting-started/add-to-existing-repository)

<!-- CONTACT -->

## Contact

- [Contact me][contact-url]
- [Project Link][project-url]

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contact-url]: https://www.dantas15.com/contact
[project-url]: https://github.com/dantas15/simple-checkout
[next.js]: https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[node.js]: https://img.shields.io/badge/NodeJS-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[node-url]: https://nodejs.org/
[graphql]: https://img.shields.io/badge/Graphql-E10098?style=for-the-badge&logo=graphql&logoColor=white
[graphql-url]: https://graphql.org/
[mongodb]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[mongodb-url]: https://mongodb.com
[koa]: https://img.shields.io/badge/Koa-F9F9F9?style=for-the-badge&logo=koa&logoColor=33333D
[koa-url]: https://koajs.com

<!-- Model images  -->
[frontend-workflow]: .github/frontend-workflow.png

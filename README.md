## Table of Contents

- [Local Installation Guide](#local-installation-guide)
  - [Clone the Repository](#clone-the-repository)
  - [Install npm Modules](#install-npm-modules)
  - [Configure Environment Variables](#configure-environment-variables)
  - [Start the Development Server](#start-the-development-server)
- [Project Overview](#project-overview)
  - [Project Description](#project-description)
  - [Project Details](#project-details)
  - [Backend Infrastructure](#backend-infrastructure)

## Local Installation Guide

### Clone the Repository

```bash
git clone https://github.com/sambuaneesh/digi-tree
cd digi-tree
```

### Install npm Modules

Ensure all required npm modules are installed by running:

```bash
npm install
```

### Configure Environment Variables

1. Create a `.env` file in the root directory.
2. Add your Firebase environment variables to the `.env` file.
   - **Note:** Prior to starting the application, it's imperative to set up a Firebase project.

```env
FB_PROJECT_ID="<ENTER_HERE>"
FB_CLIENT_EMAIL="<ENTER_HERE>"
FB_PRIVATE_KEY="<ENTER_HERE>"
```

### Start the Development Server

Initiate the development server and launch the application:

```bash
npm run dev
```

Feel free to navigate to the provided local URL to experience the application in its development environment.

---

## Project Overview

### Project Description

This web application serves as a sophisticated platform enabling users to craft personalized landing pages housing a curated collection of links to their various social media accounts. Drawing inspiration from linktr.ee, the application is meticulously constructed using SvelteKit.

### Project Details

- **Tech Stack:** SvelteKit
- **Authorship:** Developed as part of the FKit stack tutorial series by Jeff Delaney
- **Live Demo:** Explore the live demonstration deployed on Vercel at [Digi-Tree](https://digi-tree.vercel.app/)

### Backend Infrastructure

The project seamlessly integrates Firebase as a Backend as a Service (BaaS) for robust functionality.

- **Authentication:** Firebase handles user authentication, ensuring a secure login experience.
- **Database:** Firestore, a NoSQL database by Firebase, is employed to efficiently store and manage client information.

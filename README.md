# SaaS Chat Application

## Overview

Welcome to the SaaS-Chat-Application repository! This comprehensive guide empowers developers to create a robust Software as a Service (SaaS) platform by seamlessly integrating Firebase and Stripe. Dive into a world of advanced features, efficient data handling, and a powerful development stack. Elevate your skills as you navigate through Firebase v9, Firestore Database, Firebase Authentication, Stripe API, and more.

## Key Features

- **Real-Time Chat:** Dynamically access user messages into Firebase Extension, enhancing global accessibility.
- **Firebase Admin for Administrative Tasks:** Streamline administrative tasks with the Firebase Admin SDK for Node.js.
- **Firebase Converter for Data:** Optimize data interaction with Firestore using the Firebase Converter.
- **Membership Management:** Allow users to cancel memberships at any time.
- **Invite Users:** Enable user invitations to chats, restricted to registered users. Only admins can delete chats and invite others.
- **Middleware for Route Safety:** Enhance security with middleware for route safety.

## Development Stack

- **Firebase v9:** Leverage the latest Firebase features, including Firestore Database and Firebase Authentication.
- **Firebase Cloud Functions:** Implement serverless functions for backend logic, including payment processing and Stripe callbacks.
- **Firebase Admin:** Perform administrative tasks securely with the Firebase Admin SDK for Node.js.
- **Firebase Converter:** Optimize Firestore data interaction using the Firebase Converter for efficient data storage and retrieval.
- **Firebase Extensions:** Easily add functionality to your project, such as the "Run Payments with Stripe" extension.
- **Shadcn for UI/UX:** Craft a visually appealing and intuitive user interface for your SaaS platform.
- **Zod for Form Validation:** Ensure type safety and correctness through form validation with Zod.
- **Zustand for Global State Management:** Streamline state management for a scalable application.
- **NextAuth Middleware:** Implement authentication flow using NextAuth on Next.js 13, protecting both page and API routes.
- **Tailwind CSS:** Develop a sleek and responsive SaaS with the popular utility-first CSS framework.
- **TypeScript:** Enhance code quality, reduce bugs, and improve error handling with TypeScript.

## Getting Started

### 1. Clone the Repository:

```bash
git clone https://github.com/sufwanks/chat-app-saas.git
cd your-repo
```

### 2. Installing dependencies

```bash
npm install
#or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set Up Firebase

    Create a Firebase Project

        - Visit the Firebase Console.

        - Click on "Add Project" and follow the on-screen instructions to set up your project.

    Obtain Firebase Configuration
        - After creating the project, click on the gear icon (Settings) in the left-hand menu.

        - Select "Project Settings" and navigate to the "General" tab.

        - Scroll down to the "Your apps" section and find the Firebase SDK snippet.

        - Choose the configuration option and copy the configuration object.

### 4. Setup Environment Variable

- Create a .env file in the root of your project.
- Add the following environment variables to the .env file:

```env
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=

```

### 5. Run the project

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 6. Explore

Open [link](http://localhost:3000) with your browser to see the result.

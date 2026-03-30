  Spott – Event Management Platform

Spott is a simple and modern platform where anyone can create, discover, and attend events without complexity. The goal of this project is to make events accessible to everyone, regardless of their background or technical knowledge.

---

## About the Project

Many event platforms feel complicated or limited to certain groups. Spott focuses on removing that barrier by providing a clean and easy-to-use interface where users can:

* Create events in seconds
* Discover events around them
* Register for events easily
* Get QR-based tickets for smooth entry

The idea is simple — bring people closer through events.

---

## Features

* Authentication using Clerk
*  Real-time backend with Convex
*  AI-powered event creation
*  QR-based ticket system
*  Location-based event details
*  Clean and responsive UI

---

##  Tech Stack

* **Frontend:** Next.js, React
* **Backend:** Convex
* **Authentication:** Clerk
* **Styling:** Tailwind CSS
* **Other Tools:** Sonner (toasts), Lucide Icons

---

##  Getting Started

1. Clone the repository

   ```bash
   git clone <your-repo-link>
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Run the project

   ```bash
   npm run dev
   ```

4. Start Convex backend

   ```bash
   npx convex dev
   ```

---

##  How It Works

* Users sign in using Clerk
* User data is stored in Convex
* Events are created and stored in the database
* Users can register and receive QR-based tickets
* Organizers can manage and track events

---

##  Purpose

This project was built to explore full-stack development using modern tools like Next.js and Convex, while solving a real-world problem — making event participation simple and inclusive for everyone.

---

##  Future Improvements

* Payment integration for paid events
* Event recommendations based on interests
* Notifications and reminders
* Better analytics for organizers

---

## Author

Naresh Bondla

---

##  Final Note

Spott is built with the idea that events should not be limited by complexity or technical barriers. Anyone should be able to create and join events easily, and this project is a step toward that vision.

<img width="1470" height="956" alt="Screenshot 2025-11-14 at 12 34 45 AM" src="https://github.com/user-attachments/assets/f7f48cdc-a3bf-40e0-b275-cf690e1bdd48" />
<img width="1470" height="956" alt="Screenshot 2025-11-14 at 12 34 16 AM" src="https://github.com/user-attachments/assets/84f2f663-8d0f-413f-a26f-d3674b5e03c5" />

### Make sure to create a `.env` file with following variables -

```
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=

NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

CLERK_JWT_ISSUER_DOMAIN=

NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=

GEMINI_API_KEY=
```

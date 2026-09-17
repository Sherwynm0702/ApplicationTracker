# Application Tracker

**Live demo:** [application-tracker-jade.vercel.app](https://application-tracker-jade.vercel.app)
*(backend is on Render's free tier, so the first request after a period of inactivity can take ~30s to wake up)*

A small web app I built to keep track of my job applications and to keep all the important details in one place.
The goal was to make something simple, fast and informative, with a clean UI that’s easy to scan.

### You can:
- Create, edit, view and delete job applications
- Track things like company, role, status, dates and notes
- Filter by status, company and dates to quickly find what you need
- Register and log in so your data is protected

---

## Tech stack

- **Frontend:** React
- **Backend:** Node.js + Express
- **Database:** PostgreSQL 
- **Auth & security:** JWT-based auth, passwords hashed with bcrypt
- **Hosting:**
  - Frontend on Vercel
  - Backend on Render
  - Database on Neon

---

## Running it locally

### Frontend

```bash
cd frontend
npm install
npm start
```

### Backend

```bash
cd backend
npm install
node server.js
```

You'll need a `.env` file in `backend/` (not committed to Git) with:

```
PORT=5000
JWT_SECRET=your-secret-here
# either a full connection string...
DATABASE_URL=postgres://user:password@host:port/dbname
# ...or individual fields
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=
DB_NAME=
```

And a `.env` in `frontend/` with:

```
REACT_APP_API_URL=http://localhost:5000/api
```

---

## What the app does

- **Application management**  
  Add new applications with fields like company, title, status, dates and notes.  
  You can also edit or delete them later.

- **Filtering**  
  Filter your applications by status (e.g. applied, interviewing, rejected), company and dates so you can focus on what matters.

- **Authentication**  
  Simple registration and login flow using JWT and bcrypt.  
  Only logged-in users can see and manage their applications.

- **UI / UX**  
  Focused on being readable and practical rather than flashy.  
  The layout is built to show the most useful info at a glance.

---

## Why I built this

Mainly as a way to practice:

- Building a small full‑stack app end to end
- Working with React on the frontend and Node.js/Express on the backend
- Using PostgreSQL
- Implementing basic auth with JWT and hashed passwords
- Structuring a project so it’s understandable to other developers

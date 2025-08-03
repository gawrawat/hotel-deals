# Hotel Deals Platform

This project was created by **Gawrawa Jayawickrama** as part of an interview process at lesstaxi.lk.

## Project Structure

- `BACKEND/` — Node.js/Express backend with MongoDB
- `frontend/` — Next.js (React, Tailwind CSS) frontend

---

## Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)
- MongoDB database (local or Atlas)

---

## Backend Setup

1. **Install dependencies:**
   ```bash
   cd BACKEND
   npm install
   ```
2. **Configure MongoDB:**
   - The connection string is set in `app.js`. Update it if needed.
3. **Start the backend server:**
   ```bash
   node app.js
   ```
   - The backend will run on `http://localhost:5000` by default.

---

## Frontend Setup

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```
2. **Start the frontend dev server:**
   ```bash
   npm run dev
   ```
   - The frontend will run on `http://localhost:3000` by default.

---

## Usage

- Visit `http://localhost:3000` for the landing page.
- Use the navigation buttons to view all deals, or filter by Kandy/Colombo.
- The backend must be running for the frontend to fetch deals.

---

## Notes
- Make sure MongoDB is running and accessible.
- You can update the backend API URL in the frontend if needed (see `API_URL` in `frontend/src/app/deals/page.tsx`).
- For any issues, check the terminal output for errors.

---

**Author:** Gawrawa Jayawickrama

**Task:** Interview assignment for lesstaxi.lk
# hotel deals


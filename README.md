# 🏠 Rental Scout

![React](https://img.shields.io/badge/React-18+-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Glassmorphism-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

> **Find a place that feels like home.**

**Rental Scout** is a responsive, feature-rich rental property discovery web application built with **React**, **Vite**, and custom **CSS3**[cite: 7, 15]. Designed around a modern frosted-glass (glassmorphism) design system, it streamlines how prospective tenants browse listings, apply multi-criteria filters, bookmark favorites, and submit direct owner inquiries[cite: 2, 4, 6, 7, 11].

---

## 📸 Visual Showcase & Roadmap

![Rental Scout Roadmap](./assets/roadmap.png)

---

## ✨ Key Features

- **Multi-Criteria Property Filtering (`/listings`):** Dynamically filter listings by **City**, **Property Type** (Apartments, Flats, Studios, Builder Floors, Independent Houses, Villas), and **Bedroom Count**, complete with an instant filter reset[cite: 2, 3].
- **Interactive Shortlisting (`/saved`):** Bookmark and persist favorite properties with real-time state toggles (`Save` / `Saved`) to compare top choices side by side[cite: 3, 4].
- **Deep-Dive Property Details (`/listings/:id`):** Dedicated listing pages breaking down monthly rent, locality, room counts, furnishing status, and property amenities[cite: 5].
- **Validated Owner Inquiry Flow (`/listings/:id/inquire`):** Clean application form featuring inline validation error states (`aria-invalid`) for full name, email, phone number, and custom message[cite: 6, 7].
- **Accessible & Responsive UI:** Built from scratch with semantic HTML, keyboard skip-links, high-contrast `:focus-visible` rings, ARIA state attributes (`aria-pressed`), and `prefers-reduced-motion` support[cite: 7].

---

## 🗺️ Application Routes

| Route                   | View                 | Description                                                                    |
| :---------------------- | :------------------- | :----------------------------------------------------------------------------- |
| `/`                     | **Home**             | Landing hero screen with quick call-to-action to explore rentals[cite: 1]      |
| `/listings`             | **Browse Rentals**   | Interactive frosted filter dock + responsive property card grid[cite: 2, 3, 7] |
| `/saved`                | **Saved Rentals**    | Curated shortlist of bookmarked properties[cite: 4]                            |
| `/listings/:id`         | **Property Details** | Full property overview, description, and amenities breakdown[cite: 5]          |
| `/listings/:id/inquire` | **Inquiry Form**     | Direct tenant inquiry submission form linked to the selected listing[cite: 6]  |

---

## 🛠️ Tech Stack & Architecture

- **Frontend Framework:** React (Component-based architecture & client-side routing)[cite: 1, 2, 4, 5, 6, 15]
- **Build Tool:** Vite (Lightning-fast HMR and optimized production bundling)[cite: 1, 2, 15]
- **Styling:** Pure CSS3 (Custom properties, CSS Grid, Flexbox, `backdrop-filter` glassmorphism, responsive media queries)[cite: 7, 11, 15]
- **Accessibility & UX:** ARIA interactive states, fluid typography scaling (`clamp`), and clean focus-visible outlines[cite: 7]

---

## 🚀 Getting Started Locally

1. **Clone the repository**
   ```bash
   git clone [https://github.com/](https://github.com/)<your-username>/rental-scout.git
   cd rental-scout
   ```

# 🏡 ALX Listing App

The **ALX Listing App** is a project built as part of the ALX Intermediate Frontend program.  
Its goal is to create a simplified **Airbnb-style listing page** that showcases modern frontend best practices with **Next.js, TypeScript, Tailwind CSS, and ESLint**.

---

## ✨ Project Goals

- Build a responsive listing page similar to Airbnb.  
- Explore **Next.js (Pages Router)** with TypeScript support.  
- Apply **Tailwind CSS** for rapid and consistent styling.  
- Maintain **clean code quality** with ESLint.  
- Organize components, constants, and interfaces for scalability.  

---

## 📂 Project Structure

Here’s an overview of the directory structure:

```

alx-listing-app/
├── components/        # Reusable UI building blocks (e.g., Card, Navbar, Button)
├── interfaces/        # TypeScript interfaces & types for props, API responses, etc.
├── constants/         # Static values (e.g., mock data, configuration constants)
├── public/
│   └── assets/        # Public images, icons, and static assets
├── pages/             # Next.js pages (since we disabled the App Router)
├── styles/            # Global styles (includes Tailwind imports)
├── package.json       # Project metadata and dependencies
├── postcss.config.js  # PostCSS configuration for Tailwind
├── tailwind.config.js # Tailwind CSS configuration (optional in v4+)
└── README.md          # Project documentation

```

---

## 🚀 Getting Started

Follow the steps below to run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/Aalphakeem-Adroit/alx-listing-app.git
cd alx-listing-app
````

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).
Then install the required dependencies:

```bash
npm install
```

### 3. Run the Development Server

Start the dev server:

```bash
npm run dev
```

The app will be running at:
👉 [http://localhost:3000](http://localhost:3000)

### 4. Build for Production (Optional)

```bash
npm run build
npm start
```

---

## 🛠 Tech Stack

* **Next.js** – React framework for production-ready apps
* **TypeScript** – Static typing for JavaScript
* **Tailwind CSS** – Utility-first CSS framework
* **ESLint** – Linting for consistent code style

---

## 📌 Notes

* By default, Tailwind CSS v4 works without `tailwind.config.js`.
* You can generate a config file if you need custom colors, fonts, or themes:

  ```bash
  npx tailwindcss init
  ```

---

## 👨‍💻 Author

Built with ❤️ by **Busari Abdulhakeem Tunde (Alphakeem Adroit)** as part of the **ALX SE program**.

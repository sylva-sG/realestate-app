#  Real Estate React App

A simple real estate web application built with React. It allows users to browse properties, filter listings by location, price, and type, and navigate between pages using React Router.

---

##  Features

- Hero landing page with call-to-action
- Property listings display
- Filtering by:
  - Location
  - Minimum price
  - Maximum price
  - Property type
- Page navigation using React Router
- Reusable components (Navbar, Footer, Filter, PropertyList)

---

## 🛠️ Tech Stack

- React.js
- React Router DOM
- JavaScript (ES6+)
- CSS
- Vite

---

## 📂 Project Structure


---

## ⚙️ Installation & Setup

```bash
# Clone repository
git clone https://github.com/sylva-sG/real-estate-app.git

# Navigate into project
cd real-estate-app

# Install dependencies
npm install

# Run development server
npm run dev

 --- 
🌐 Routes
Route	Description
/	Home page (Hero section)
/properties	Properties page with filters

##  How It Works

- Property data is stored in state inside `App.jsx`
- The `Filter` component updates the filter state based on user input
- `PropertyList` receives both properties and filters, then dynamically filters the results
- React Router handles navigation between different pages
- The Hero section contains a button that navigates to the Properties page

---

##  UI Components

- **Navbar** → Navigation links between pages
- **Hero** → Landing section with a call-to-action button
- **Filter** → Search and filter inputs for properties
- **PropertyList** → Displays filtered property cards
- **Footer** → Simple page footer with links/info

---

## 📌 Future Improvements

- Add backend (Node.js / Firebase) for real data storage
- Add property details page (`/property/:id`) for single listings
- Improve UI using Tailwind CSS or Bootstrap
- Add authentication (login/signup system)
- Add maps to show property locations
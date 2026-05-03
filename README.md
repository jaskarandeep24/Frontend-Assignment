# 🚀 React Data Table Project

## 📌 About the Project

This project is a simple React application where I built a data table using real API data.
It shows car models and includes useful features like search, sorting, pagination, and a popup (modal) to view details.

The main goal of this project was to practice React basics and understand how data flows in a real application.

---

## ✨ Features

* Display data in a table format
* Search cars by name
* Sort data (ascending / descending)
* Pagination (10 items per page)
* View details in a popup modal
* Clean and simple UI

---

## 🛠️ Tech Used

* React.js (with Vite)
* JavaScript
* HTML & CSS
* React Hooks (`useState`, `useEffect`)

---

## 📂 Folder Structure

```id="f3d9gl"
src/
│
├── components/
│   ├── DataTable.jsx
│   ├── Pagination.jsx
│   ├── Filter.jsx
│   ├── Modal.jsx
│
├── services/
│   ├── api.js
│
├── App.jsx
├── main.jsx
```

---

## 🌐 API

Data is fetched from this public API:

```id="g6mz5q"
https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos
```

---

## ⚙️ How to Run

1. Clone the project

git clone <your-repo-link>
```

2. Go into the folder

cd your-project-name
```

3. Install dependencies

npm install
```

4. Start the project

npm run dev
```

5. Open in browser
   👉 http://localhost:5173

---

## 🔄 How It Works (Simple)

* The app loads and fetches data from the API
* Data is stored in state
* Search filters the data
* Sorting arranges it
* Pagination limits it to 10 items per page
* Clicking “View” opens a modal with details

---

## 🚀 Future Improvements

* Add loading spinner
* Add error handling
* Improve UI using Tailwind CSS
* Add animations

---

## ⭐ Final Note

This project helped me understand how React works in a practical way by building a real-world feature-based application.

---

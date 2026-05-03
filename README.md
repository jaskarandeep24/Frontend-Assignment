# 🚀 React Data Table Project

## 📌 Overview

This project is a **React.js application** that displays car models data in a table format with features like **pagination, sorting, filtering, and modal view**.

The data is fetched from a public API and presented in a clean and interactive UI.

---

## 🎯 Features

* ✅ Fetch data from API
* ✅ Display data in table format
* ✅ Search / Filter by name
* ✅ Sorting (Ascending / Descending)
* ✅ Pagination (10 records per page)
* ✅ Modal popup for detailed view
* ✅ Clean and modular component structure

---

## 🛠️ Tech Stack

* React.js (Vite)
* JavaScript (ES6)
* HTML & CSS
* React Hooks (`useState`, `useEffect`)

---

## 📂 Project Structure

```
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

## 🌐 API Used

```
https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone <your-repo-link>
```

### 2. Navigate to project folder

```
cd your-project-name
```

### 3. Install dependencies

```
npm install
```

### 4. Run the project

```
npm run dev
```

### 5. Open in browser

```
http://localhost:5173
```

---

## 🧠 Key Concepts Used

* React Components
* State Management (`useState`)
* Side Effects (`useEffect`)
* API Fetching
* Event Handling
* Conditional Rendering
* Array Methods (`map`, `filter`, `slice`, `sort`)

---

## 🔄 Project Workflow

```
App Load
   ↓
Fetch API Data
   ↓
Store in State
   ↓
Apply Filter
   ↓
Apply Sorting
   ↓
Apply Pagination
   ↓
Render Table
   ↓
User Interaction (Search / Click / Sort)
   ↓
Update UI

---

## 🚀 Future Improvements

* Add loading spinner
* Add error handling
* Improve UI using Tailwind CSS
* Add debounce for search
* Add animations

-

---

## ⭐ Conclusion

This project demonstrates the practical use of **React fundamentals** to build a real-world interactive data table application.

---

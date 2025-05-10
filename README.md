# ⚖️ BMI Calculator (React.js)

A simple and intuitive **BMI Calculator** built using **React.js**. The app allows users to input their weight and height, and it calculates their **Body Mass Index (BMI)**. Based on the BMI value, it displays whether the user is **Underweight**, **Overweight**, or has a **Healthy Weight**.

---

## 📸 Preview

> ![BMI Calculator Screenshot](./screenshot.png) *(Add a screenshot here if you want)*

---

## 🛠️ Features

- 🧮 Calculates BMI based on height and weight inputs
- 🧑‍⚕️ Displays:
  - Underweight
  - Balanced (Healthy)
  - Overweight
- ⚛️ Built with modern React.js (functional components, hooks)
- 🎨 Clean and minimal UI using CSS

---

## 📁 Project Structure

BMI_CALCULATOR/
├── public/
│ ├── index.html # HTML template
│ └── assets (logos, manifest, etc.)
├── src/
│ ├── App.js # Main component with BMI logic
│ ├── App.css # App styling
│ ├── index.js # React DOM render entry
│ ├── index.css # Global styles
│ ├── reportWebVitals.js # CRA Performance
│ └── setupTests.js # Unit testing setup
├── package.json
└── README.md


---

## 🚀 Getting Started

### ✅ Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)

## Run the Application

- npm start

- 👉 http://localhost:3000

- BMI = weight (kg) / (height in meters)^2

| BMI Range   | Status           |
| ----------- | ---------------- |
| < 18.5      | Underweight      |
| 18.5 - 24.9 | Normal (Healthy) |
| ≥ 25        | Overweight       |

## Built With
- React
- JavaScript (ES6+)
- CSS3
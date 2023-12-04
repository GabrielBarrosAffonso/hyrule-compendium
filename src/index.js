import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './context/themeContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamePage from './components/GamePage/GamePage';
import Header from './components/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
      <Header />
        <Routes>
          <Route 
            path="/"
            element={<App />}
          />
          <Route
            path='/:id'
            element={<GamePage />}
          />

        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

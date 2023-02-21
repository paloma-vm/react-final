import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MenuList from './components/MenuList/MenuList';
import ItemDetails from './components/ItemDetails/ItemDetails';
import About from './components/About/About';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<MenuList />} />
        <Route path="about" element={<About />} />
        <Route path="/details/:id" element={<ItemDetails />} />
      </Route>
    </Routes>
  </Router>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

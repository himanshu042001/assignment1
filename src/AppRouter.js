// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Section4 from './section4';
import ResultPage from './ResultPage';
import App from './App';

const AppRouter = () => (

    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/result" element={<ResultPage />} />
    </Routes>
);

export default AppRouter;

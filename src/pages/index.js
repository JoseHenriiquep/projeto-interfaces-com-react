import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre'

export default function Pages() {
    return(
        <Router>
            <Routes>
                <Route exact path="/" Component={Home}/>
                <Route path="/sobre" Component={Sobre}/>
            </Routes>
        </Router>
    );
};
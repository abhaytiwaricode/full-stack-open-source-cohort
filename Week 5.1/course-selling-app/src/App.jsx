import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./Signup.jsx";
import Appbar from "./Appbar.jsx";
import Signin from "./Signin.jsx";

function App() {
    return (
        <Router>
            <Appbar />
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
            </Routes>
        </Router>
    );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/hearder";
import Home from "./pages/home/home";
import SignIn from "./pages/signin/signin";
import User from "./pages/user/user";
import Footer from "./components/footer/footer";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="user" element={<User />} />
            </Routes>
            <Footer />
        </Router>

    );
}

export default App;

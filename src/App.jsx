import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/hearder';
import Footer from './components/footer/footer';
import Home from "./pages/home/home";
import SignIn from './pages/signin/signin';
import UserPage from './pages/user/user';
import PrivateRoute from './components/privateroute/PrivateRoute';
import { fetchDataUser } from './reducers/authSlice'; // Chemin à ajuster si nécessaire

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(fetchDataUser(token));
    }
  }, [token, dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route 
          path="/user" 
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          } 
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

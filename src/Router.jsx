import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import SignIn from './pages/signin/signin';
import User from './pages/user/user'

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user" element={<User/>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from '../../reducers/authSlice'; // Assure-toi que cette action est bien exportée de ton authSlice
import ImageBank from "../../assets/argentBankLogo.png";
import './header.css';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.userData.userName);

  const handleSignOut = () => {
    dispatch(userLogout()); // Déconnecte l'utilisateur et supprime le token
    navigate('/signin'); // Redirige vers la page de connexion
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={ImageBank}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {location.pathname === '/user' ? ( 
          <>
            <Link className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
              {userName ? userName : "Utilisateur"}
            </Link>
            <button className="main-nav-item" onClick={handleSignOut} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </button>
          </>
        ) : (
          <Link className="main-nav-item" to="/signin">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;

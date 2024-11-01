import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchToken, fetchDataUser, setError } from '../../reducers/authSlice';
import './signin.scss';

const SignIn = () => {
  const [username, setUsername] = useState(''); // Déclare et initialise username
  const [password, setPassword] = useState(''); // Déclare et initialise password
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setError(null)); // Réinitialise les erreurs avant une nouvelle tentative
  
    const postData = { email: username, password };
    console.log("Données envoyées:", postData);
  
    try {
      const actionResult = await dispatch(fetchToken(postData));
      
      if (actionResult.payload) { // Vérifie que le token a bien été récupéré
        console.log("Token obtenu dans handleSubmit:", actionResult.payload);
  
        // Appel fetchDataUser pour récupérer les informations utilisateur
        await dispatch(fetchDataUser(actionResult.payload));
  
        navigate('/user'); // Redirige vers la page utilisateur si succès
        console.log("Redirection vers /user réussie");
      } else {
        console.error("Aucun token reçu");
      }
    } catch (error) {
      console.error("Erreur de connexion :", error);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;

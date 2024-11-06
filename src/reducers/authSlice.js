import { createSlice } from '@reduxjs/toolkit'

export const GET_TOKEN = 'GET_TOKEN'
export const GET_DATA_USER = 'GET_DATA_USER'
export const EDIT_NAME = 'EDIT_NAME'
export const USER_LOGOUT = 'USER_LOGOUT'

const initialState = {
  token: localStorage.getItem('token') || null,
  userData: {
    firstName: null,
    lastName: null,
    userName: null,
  },
  error: null,
  isAuthenticated: !!localStorage.getItem('token'),
};



const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    getDataUser: (state, action) => {
      const { firstName, lastName, userName } = action.payload;
      state.userData.firstName = firstName;
      state.userData.lastName = lastName;
      state.userData.userName = userName;
    },
    editName: (state, action) => {
      const { userName } = action.payload;
      state.userData.userName = userName;
    },    
    userLogout: (state) => {
      state.token = null;
      state.userData = { firstName: null, lastName: null };
      state.isAuthenticated = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isAuthenticated = false;
    },
  },
});

export const { getToken, getDataUser, editName, userLogout, setError } = authSlice.actions;

// Récupérer le token
export const fetchToken = (postData) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });

    const data = await response.json();

    if (response.ok) {
      dispatch(getToken(data.body.token));
      localStorage.setItem('token', data.body.token);
      return { payload: data.body.token };
    } else {
      alert("The login credentials are not correct. We invite you to try again.");
      dispatch(setError(data.message));
      throw new Error(data.message);
    }
  } catch (error) {
    dispatch(setError(error.message));
    throw error;
  }
};

// Récupérer les données utilisateur
export const fetchDataUser = (token) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();

    if (response.ok) {
      dispatch(getDataUser(data.body));
    } else {
      dispatch(setError(data.message));
      console.error("Erreur API:", data.message);
    }
  } catch (error) {
    console.error("Erreur dans fetchDataUser:", error);
    dispatch(setError(error.message));
  }
};

// modifié prénom
export const editNameOnServer = (newUserName, token) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ userName: newUserName }),
    });

    if (!response.ok) {
      throw new Error('Network response not ok');
    }

    const data = await response.json();
    
    dispatch(editName({ userName: newUserName }));
  } catch (error) {
    console.error('Erreur dans editNameOnServer:', error);
    dispatch(setError(error.message));
  }
};

export default authSlice.reducer;
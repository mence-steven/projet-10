import { editName, setError } from './authSlice';

export const editNameOnServer = (data, token) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      dispatch(editName({
        userName: result.body.userName,
      }));
    } else {
      throw new Error(result.message || 'Erreur lors de la mise à jour');
    }
  } catch (error) {
    console.error("Erreur dans editNameOnServer:", error);
    dispatch(setError(error.message));
    throw error;
  }
};

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editNameOnServer } from '../../reducers/userActions';
import AccountList from '../../components/accountList/accountList';
import './user.css';

const UserPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setnewUserName] = useState('');
  
  const firstName = useSelector((state) => state.auth.userData.firstName);
const userName = useSelector((state) => state.auth.userData.userName);
const lastName = useSelector((state) => state.auth.userData.lastName);

  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isEditing) {
      setnewUserName(firstName);
    }
  }, [isEditing, firstName]);

  const handleSaveClick = async () => {
    try {
      await dispatch(editNameOnServer({ userName: newUserName }, token));
      setIsEditing(false);
    } catch (error) {
      console.error("Erreur lors de l'enregistrement :", error);
    }
  };
  

  return (
    <main className="main bg-dark">
      <div className="header">
        {isEditing ? (
          <div className='edit-name'>
            <input
              type="text"
              onChange={(e) => setnewUserName(e.target.value)}
              placeholder="User Name"
              className="edit-input"
            />
            <button onClick={handleSaveClick} className="save-button">Save</button>
            <button onClick={() => setIsEditing(false)} className="cancel-button">Cancel</button>
          </div>
        ) : (
          <div>
            <h1>Welcome back<br />{firstName} {lastName}!</h1>
            <button onClick={() => setIsEditing(true)} className="edit-button">Edit Name</button>
          </div>
        )}
      </div>

      <h2 className="sr-only">Accounts</h2>
      
      {/* Sections des comptes */}
      <AccountList />
    </main>
  );
};

export default UserPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [contact, setContact] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userContact', contact);
    navigate('/billing');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
      padding: '20px'
    }}>
      {/* Logo */}
      <img src="assets/images/logo.svg" alt="Logo" style={{ width: '150px', marginBottom: '10px' }} />

      {/* Greeting Text */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 style={{ margin: '5px 0', fontSize: '24px', color: '#003366' }}>Hello!</h2>
        <h2 style={{ fontSize: '18px', color: '#555' }}>View your digital bill</h2>
      </div>

      {/* Input and Button */}
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <input
          type="text"
          placeholder="Email or Phone"
          value={contact}
          required
          onChange={e => setContact(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            width: '250px',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            marginLeft: '10px',
            backgroundColor: '#003366',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            transition: 'background-color 0.3s ease'
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginPage;

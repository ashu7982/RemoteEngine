
import React from 'react';
// import AppRouter from './AppRouter';
import { Link } from 'react-router-dom';
import AppRouter from './routes';

const Homepage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <Link to="/login" style={{color:'red'}}>Login Page</Link>
    <Link to="/signup" style={{color:'teal'}}>Signup Page</Link>
    {/* <AppRouter /> */}
  </div>
  );
};

export default Homepage;
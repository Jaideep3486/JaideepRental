import React from 'react';
import jwtImage from '../images/jwt.png'; // Replace with your image path
import firebaseImage from '../images/Firebase.png'; // Replace with your image path
import image1 from '../images/image1.png'; // Import your images here

export default function Home() {
  const containerStyle = {
    backgroundImage: `url(${image1})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  };

  const imagesContainerStyle = {
    position: 'absolute',
    top: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    width: 'calc(100% - 40px)',
    padding: '0 20px',
    boxSizing: 'border-box',
    zIndex: 1,
  };

  const imageStyle = {
    maxWidth: '100px', // Adjust the size as needed
    maxHeight: '100px', // Adjust the size as needed
  };

  const textStyle = {
    padding: '20px',
    textAlign: 'center',
    color: 'white',
    zIndex: 1,
  };

  return (
    <div className='bg-cover bg-center min-h-screen relative' style={containerStyle}>
      <div style={imagesContainerStyle}>
        <img src={jwtImage} alt='JWT' style={imageStyle} />
        <img src={firebaseImage} alt='Firebase' style={imageStyle} />
      </div>
      
      <div style={textStyle}>
        <h1 className='text-3xl font-bold mb-4 text-black'>
          Welcome to my Auth App!
        </h1>
        <p className='mb-4 text-black'>
          This is a full-stack web application built with the MERN (MongoDB,
          Express, React, Node.js) stack. It includes authentication features
          that allow users to sign up, log in, and log out, and provides access
          to protected routes only for authenticated users.
        </p>
        <p className='mb-4 text-black'>
          The front-end of the application is built with React and uses React
          Router for client-side routing. The back-end is built with Node.js and
          Express, and uses MongoDB as the database. Authentication is
          implemented using JSON Web Tokens (JWT).
        </p>
        <p className='mb-4 text-black'>
          This application is intended as a starting point for building
          full-stack web applications with authentication using the MERN stack.
          Feel free to use it as a template for your own projects!
        </p>
      </div>
    </div>
  );
}

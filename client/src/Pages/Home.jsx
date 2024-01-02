import React, { useState, useEffect } from 'react';
import jwtImage from '../images/jwt.png'; // Replace with your image path
import firebaseImage from '../images/Firebase.png'; // Replace with your image path
import image1 from '../images/image1.png'; // Import your images here
import Confetti from 'react-confetti';

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);

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
    top: '5%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%',
    maxWidth: '800px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    boxSizing: 'border-box',
    zIndex: 1,
  };

  const imageStyle = {
    width: '20%', // Adjust the size as needed
    height: 'auto',
    maxWidth: '150px', // Max width to maintain aspect ratio
  };

  const textStyle = {
    padding: '20px',
    textAlign: 'center',
    color: 'white',
    zIndex: 1,
  };

  useEffect(() => {
    // Start confetti effect when component mounts
    setShowConfetti(true);
    // Stop confetti after a certain duration (e.g., 5 seconds)
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // Adjust duration as needed
  }, []);

  return (
    <div className='bg-cover bg-center min-h-screen relative' style={containerStyle}>
      {showConfetti && <Confetti />} {/* Render confetti if showConfetti is true */}
      
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

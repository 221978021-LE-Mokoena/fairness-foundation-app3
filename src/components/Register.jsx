import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';
import slide1 from '../assets/slide1.avif';
import slide2 from '../assets/slide2.avif';

function Register() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2];
  const navigate = useNavigate();

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/dashboard'); // Redirect to the dashboard
  };

  return (
    <div className="auth-container">
      <div className="left-section">
        <div className="slider">
          <div className="header-subtitle">
            <h1>Fairness Foundation</h1>
            <p>Be part of a change-driven community</p>
          </div>
          <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
          <div className="address-info">
            <p>123 Justice Lane</p>
            <p>Peace City, World 10100</p>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="auth-form">
          <h2>Sign up</h2>
          <p className="login-link">
            Already have an account? <a href="/login">Login here</a>
          </p>
          <form onSubmit={handleRegister}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="hello@example.com"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Minimum 8 characters"
              required
            />
            <button type="submit" className="join-btn">
              Join
            </button>
          </form>
          <p>
            By joining, you agree to the <a href="#">Terms and Conditions</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;

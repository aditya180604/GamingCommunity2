import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import './forums.css'; // Import styles for the forums page

const ForumsPage = () => {
  return (
    <div className="forums-container">
      <Navbar />
      <div className="forums-hero">
        <h1>Community Forums</h1>
        <p>Join the conversation, share your thoughts, and connect with fellow gamers.</p>
        <div className="search-bar">
          <input type="text" placeholder="Search forums..." />
          <button>Search</button>
        </div>
      </div>

      {/* Forum Categories Section */}
      <div className="forum-categories">
        <h2>Categories</h2>
        <div className="categories-grid">
          <Link to="/forums/general" className="category-card">
            <h3>General Discussion</h3>
            <p>Talk about anything and everything gaming-related.</p>
          </Link>
          <Link to="/forums/tech-support" className="category-card">
            <h3>Tech Support</h3>
            <p>Get help with hardware, software, and game issues.</p>
          </Link>
          <Link to="/forums/esports" className="category-card">
            <h3>Esports</h3>
            <p>Discuss competitive gaming, tournaments, and strategies.</p>
          </Link>
          <Link to="/forums/guides" className="category-card">
            <h3>Guides & Tutorials</h3>
            <p>Share and find guides for your favorite games.</p>
          </Link>
        </div>
      </div>

      {/* Popular Threads Section */}
      <div className="popular-threads">
        <h2>Popular Threads</h2>
        <div className="threads-list">
          <div className="thread-card">
            <h3>Best Settings for Game X</h3>
            <p>Posted by <span className="user">Gamer123</span> | 120 replies</p>
          </div>
          <div className="thread-card">
            <h3>Upcoming Esports Tournament</h3>
            <p>Posted by <span className="user">ProPlayer</span> | 85 replies</p>
          </div>
          <div className="thread-card">
            <h3>How to Fix Lag in Game Y</h3>
            <p>Posted by <span className="user">TechGuru</span> | 64 replies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumsPage;
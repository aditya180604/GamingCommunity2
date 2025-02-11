import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import Navbar from '../../components/Navbar';
import './home.css'; // Import styles

const HomePage = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="hero-section">
        <h1>Welcome to the <span className="highlight">Gaming Community Hub</span>!</h1>
        <p>Join the ultimate gaming network, connect with players, and explore new worlds!</p>
      </div>

      {/* Popular Games Section */}
      <div className="section popular-games">
        <h2>Popular Games</h2>
        <div className="games-grid">
          <div className="game-card">
            <img src="https://via.placeholder.com/150" alt="Game 1" />
            <h3>Game 1</h3>
            <p>Explore the world of Game 1 and join thousands of players online.</p>
          </div>
          <div className="game-card">
            <img src="https://via.placeholder.com/150" alt="Game 2" />
            <h3>Game 2</h3>
            <p>Compete in thrilling battles and climb the leaderboards.</p>
          </div>
          <div className="game-card">
            <img src="https://via.placeholder.com/150" alt="Game 3" />
            <h3>Game 3</h3>
            <p>Immerse yourself in a story-driven adventure.</p>
          </div>
        </div>
      </div>

      {/* Community Forums Section */}
      <div className="section community-forums">
        <h2>Community Forums</h2>
        <p>Join the discussion, share tips, and connect with other gamers.</p>
        <Link to="/forums" className="cta-btn">Visit Forums</Link>
      </div>

      {/* Latest News Section */}
      <div className="section latest-news">
        <h2>Latest News</h2>
        <div className="news-grid">
          <div className="news-card">
            <h3>New Update Released</h3>
            <p>Check out the latest patch notes for your favorite games.</p>
          </div>
          <div className="news-card">
            <h3>Esports Tournament Announced</h3>
            <p>Register now for the upcoming esports championship.</p>
          </div>
          <div className="news-card">
            <h3>Developer Q&A Session</h3>
            <p>Submit your questions for the developers of Game 1.</p>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="section upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          <div className="event-card">
            <h3>Game Night</h3>
            <p>Join us for a community game night this Friday!</p>
          </div>
          <div className="event-card">
            <h3>Cosplay Contest</h3>
            <p>Show off your creativity and win amazing prizes.</p>
          </div>
          <div className="event-card">
            <h3>Live Stream</h3>
            <p>Watch our top players live in action.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
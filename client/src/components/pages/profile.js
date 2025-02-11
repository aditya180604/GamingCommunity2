import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { FaTrophy, FaGamepad, FaTwitter, FaDiscord, FaTwitch, FaSignOutAlt, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'; // Icons
import './profile.css'; // Import styles

const ProfilePage = () => {
  const navigate = useNavigate();

  const user = {
    avatar: 'https://postimg.cc/',
    // Replace with actual profile image
    username: 'GamerX99',
    email: 'abc@gmail.com',
    location: 'New York, USA',
    joinDate: 'January 2025',
    bio: 'Competitive gamer & streamer | Passionate about FPS & RPGs | Always up for a challenge!',
    level: 45,
    achievements: [
      { id: 1, title: 'Top 1% in Battle Royale X', icon: <FaTrophy /> },
      { id: 2, title: 'Completed 100+ RPG Quests', icon: <FaTrophy /> },
      { id: 3, title: 'Ranked #3 in Global FPS Tournament', icon: <FaTrophy /> },
    ],
    favoriteGames: [
      { id: 1, name: 'Cyber Quest', genre: 'Action-Adventure' },
      { id: 2, name: 'Battle Royale X', genre: 'Multiplayer Shooter' },
      { id: 3, name: 'Fantasy Realms', genre: 'RPG' },
    ],
    socialLinks: {
      twitter: 'https://twitter.com/gamer',
      discord: 'https://discord.gg/gamingcommunity',
      twitch: 'https://twitch.tv/gamerx99',
    },
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear authentication token
    navigate('/login'); // Redirect to login page
  };

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <div className="profile-header">
          <img src={user.avatar} alt="Profile Avatar" className="profile-avatar" />
          <h2>{user.username}</h2>
          <p className="profile-bio">{user.bio}</p>
          <p className="profile-level"><strong>Level:</strong> {user.level}</p>
          <div className="profile-info">
            <p><FaEnvelope /> {user.email}</p>
            <p><FaMapMarkerAlt /> {user.location}</p>
            <p><FaCalendarAlt /> Joined: {user.joinDate}</p>
          </div>
          <button className="logout-button" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>

        <div className="profile-section">
          <h3><FaTrophy /> Achievements</h3>
          <ul>
            {user.achievements.map((achievement) => (
              <li key={achievement.id}>
                {achievement.icon} {achievement.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="profile-section">
          <h3><FaGamepad /> Favorite Games</h3>
          <ul>
            {user.favoriteGames.map((game) => (
              <li key={game.id}>
                <strong>{game.name}</strong> - {game.genre}
              </li>
            ))}
          </ul>
        </div>

        <div className="profile-section">
          <h3>Connect with Me</h3>
          <div className="social-icons">
            <a href={user.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href={user.socialLinks.discord} target="_blank" rel="noopener noreferrer">
              <FaDiscord />
            </a>
            <a href={user.socialLinks.twitch} target="_blank" rel="noopener noreferrer">
              <FaTwitch />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { FaHeart, FaSearch } from 'react-icons/fa'; // Import icons
import './games.css'; // Import styles

const GamesPage = () => {
  const [likedGames, setLikedGames] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 6; // Number of games per page

  const toggleLike = (id) => {
    setLikedGames((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle like status
    }));
  };

  const sampleGames = [
    { id: 1, name: 'BGMI (Battlegrounds Mobile India)', description: 'Battle Royale experience with intense combat.', genre: 'Battle Royale', rating: '4.7/5', image: '/public/background.jpg' },
    { id: 2, name: 'Free Fire', description: 'Fast-paced battle royale with unique characters.', genre: 'Battle Royale', rating: '4.5/5', image: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Call of Duty: Mobile', description: 'Iconic FPS shooter with battle royale & multiplayer.', genre: 'FPS Shooter', rating: '4.8/5', image: 'https://via.placeholder.com/200' },
    { id: 4, name: 'PUBG: Battlegrounds', description: 'Classic battle royale with realistic gameplay.', genre: 'Battle Royale', rating: '4.6/5', image: 'https://via.placeholder.com/200' },
    { id: 5, name: 'Apex Legends', description: 'Hero-based battle royale with unique abilities.', genre: 'Battle Royale', rating: '4.9/5', image: 'https://via.placeholder.com/200' },
    { id: 6, name: 'Valorant', description: 'Tactical FPS shooter with unique agents.', genre: 'FPS Shooter', rating: '4.7/5', image: 'https://via.placeholder.com/200' },
    { id: 7, name: 'Fortnite', description: 'Build and fight in an immersive battle royale world.', genre: 'Battle Royale', rating: '4.7/5', image: 'https://via.placeholder.com/200' },
    { id: 8, name: 'CS: GO', description: 'Legendary FPS shooter with intense tactical gameplay.', genre: 'FPS Shooter', rating: '4.6/5', image: 'https://via.placeholder.com/200' },
    { id: 9, name: 'GTA Online', description: 'Open-world action with multiplayer mayhem.', genre: 'Open-World', rating: '4.8/5', image: 'https://via.placeholder.com/200' },
    { id: 10, name: 'Rainbow Six Siege', description: 'Tactical FPS with strategic team-based gameplay.', genre: 'Tactical Shooter', rating: '4.6/5', image: 'https://via.placeholder.com/200' },
    { id: 11, name: 'Overwatch 2', description: 'Hero-based shooter with fast-paced team battles.', genre: 'Hero Shooter', rating: '4.5/5', image: 'https://via.placeholder.com/200' },
    { id: 12, name: 'Rocket League', description: 'High-speed car soccer with insane tricks!', genre: 'Sports/Action', rating: '4.7/5', image: 'https://via.placeholder.com/200' },
  ];
  

  // Filter games based on search query and selected genre
  const filteredGames = sampleGames.filter((game) => {
    const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.genre.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || game.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  // Pagination logic
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar />
      <h1 className="games-title">Games</h1>

      {/* Search and Filter Section */}
      <div className="search-filter-container">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select
          className="genre-filter"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="All">All Genres</option>
          <option value="Action-Adventure">Action-Adventure</option>
          <option value="Multiplayer Shooter">Multiplayer Shooter</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Racing">Racing</option>
          <option value="RPG">RPG</option>
          <option value="Survival Horror">Survival Horror</option>
          <option value="Sci-Fi Shooter">Sci-Fi Shooter</option>
          <option value="Strategy">Strategy</option>
          <option value="Stealth">Stealth</option>
          <option value="Adventure">Adventure</option>
          <option value="Simulation">Simulation</option>
          <option value="Arcade">Arcade</option>
        </select>
      </div>

      {/* Games Grid */}
      <div className="games-container">
        {currentGames.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.image} alt={game.name} className="game-image" />
            <h3>{game.name}</h3>
            <p>{game.description}</p>
            <p><strong>Genre:</strong> {game.genre}</p>
            <p><strong>Rating:</strong> {game.rating}</p>
            <button
              className={`like-button ${likedGames[game.id] ? 'liked' : ''}`}
              onClick={() => toggleLike(game.id)}
            >
              <FaHeart className="heart-icon" /> {likedGames[game.id] ? 'Liked' : 'Like'}
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredGames.length / gamesPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GamesPage;
import React, { useState } from "react";
import "./events.css";

const eventsData = [
  { id: 1, title: "Battle Royale Tournament", date: "March 15, 2025", description: "Compete in the biggest Battle Royale tournament of the year!" },
  { id: 2, title: "Speedrun Challenge", date: "April 5, 2025", description: "Test your skills and complete the game in record time!" },
  { id: 3, title: "Esports Team Recruitment", date: "April 20, 2025", description: "Join an elite esports team and participate in global tournaments!" },
];

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      alert(`You have successfully registered for ${selectedEvent.title}!`);
      setFormData({ name: "", email: "" });
      setSelectedEvent(null);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="events-container">
      <h2>Upcoming Gaming Events</h2>
      <div className="events-list">
        {eventsData.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p>{event.description}</p>
            <button onClick={() => handleRegisterClick(event)} className="register-btn">
              Register Now
            </button>
          </div>
        ))}
      </div>

      {/* Registration Form (Popup) */}
      {selectedEvent && (
        <div className="popup">
          <div className="popup-content">
            <h3>Register for {selectedEvent.title}</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
              <button type="submit">Submit</button>
              <button onClick={() => setSelectedEvent(null)} className="close-btn">Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;

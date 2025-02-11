import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const Messages = ({ userEmail, friendEmail: selectedFriendEmail, onBack }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [recipientEmail, setRecipientEmail] = useState(selectedFriendEmail || "");
  const [showPopup, setShowPopup] = useState(false);

  // Fetch messages from the backend
  const fetchMessages = useCallback(async () => {
    if (!recipientEmail) return;

    try {
      const res = await axios.get(`http://localhost:3001/messages?user=${userEmail}&friend=${recipientEmail}`);
      setMessages(res.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  }, [userEmail, recipientEmail]);

  useEffect(() => {
    fetchMessages();
    
    // Polling for new messages every 3 seconds
    const interval = setInterval(() => {
      fetchMessages();
    }, 3000);

    return () => clearInterval(interval);
  }, [fetchMessages]);

  // Send a new message
  const sendMessage = async () => {
    if (!newMessage.trim() || !recipientEmail.trim()) return;

    try {
      await axios.post("http://localhost:3001/messages", {
        sender: userEmail,
        receiver: recipientEmail,
        text: newMessage,
      });

      setMessages([...messages, { sender: userEmail, text: newMessage }]);
      setNewMessage("");
      
      // Show success popup
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="chat-container">
      {/* Success Popup */}
      {showPopup && <div className="popup">Message Sent!</div>}

      {/* Header with Back Button */}
      <div className="chat-header">
        <button onClick={onBack} className="back-button">⬅ Search</button>
        <h2>Chat</h2>
      </div>

      {/* Recipient Email Input */}
      <div className="recipient-input">
        <input
          type="email"
          placeholder="Enter friend's email..."
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
        />
      </div>

      {/* Messages List */}
      <div className="messages-list">
        {messages.length === 0 ? (
          <p className="no-messages">No messages yet. Start a conversation!</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender === userEmail ? "you" : "friend"}`}>
              <p>{msg.text}</p>
            </div>
          ))
        )}
      </div>

      {/* Message Input */}
      <div className="message-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Messages;

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Messages from "./messages";

const ChatApp = ({ userEmail }) => {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);

  // Fetch friends from the backend
  const fetchFriends = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:3001/employees");
      setFriends(res.data.filter(user => user.email !== userEmail)); // Exclude logged-in user
    } catch (error) {
      console.error("Error fetching friends:", error);
    }
  }, [userEmail]);

  useEffect(() => {
    fetchFriends();
  }, [fetchFriends]);

  return (
    <div className="chat-app">
      {!selectedFriend ? (
        <div className="friends-list">
          <h2>Select a Friend to Chat</h2>
          <ul>
            {friends.map(friend => (
              <li key={friend.email} onClick={() => setSelectedFriend(friend.email)}>
                {friend.email}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Messages userEmail={userEmail} friendEmail={selectedFriend} onBack={() => setSelectedFriend(null)} />
      )}
    </div>
  );
};

export default ChatApp;

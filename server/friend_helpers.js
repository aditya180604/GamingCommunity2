const find_mutual_friends = async (user1Id, user2Id, User) => {
    try {
      const user1 = await User.findById(user1Id).populate('friends');
      const user2 = await User.findById(user2Id).populate('friends');
  
      if (!user1 || !user2) {
        throw new Error('User not found');
      }
  
      const user1Friends = user1.friends.map((friend) => friend._id.toString());
      const user2Friends = user2.friends.map((friend) => friend._id.toString());
  
      const mutualFriends = user1Friends.filter((friendId) => 
        user2Friends.includes(friendId)
      );
  
      return mutualFriends; 
    } catch (error) {
      console.error('Error finding mutual friends:', error);
      throw error; 
    }
  };
  
  module.exports = {
    find_mutual_friends,
  };
import "./App.css";

// Import Profile parts
import Profile from "./components/Profile/Profile";
import userData from "./components/Profile/userData.json";

// Import FriendList parts
import FriendList from "./components/FriendList/FriendList";
import Friends from "./components/FriendList/Friends.json";

// Import TransactionHistory parts
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import TransactionsData from "./components/TransactionHistory/TransactionData.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={Friends} />

      <TransactionHistory items={TransactionsData} />
    </>
  );
};

export default App;

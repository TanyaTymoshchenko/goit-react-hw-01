import FriendListItem from "./FriendListItem";
import "./FriendList.css";

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <li key={friend.id} className="friend-list-card">
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
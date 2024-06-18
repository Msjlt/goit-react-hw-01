import css from "../FriendList/FriendList.module.css";

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  const statusText = isOnline ? "Online" : "Offline";
  const statusClass = isOnline ? css.online : css.offline;

  return (
    <div className={css.friendInfo}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}> {name}</p>
      <p className={`${css.status} ${statusClass}`}> {statusText}</p>
    </div>
  );
};

export default FriendListItem;

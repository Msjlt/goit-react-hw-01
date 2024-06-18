import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.profileContainer}>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.item}>
          <span className={css.activity}>Followers</span>
          <span>{stats.followers}</span>
        </li>

        <li className={css.item}>
          <span className={css.activity}>Views</span>
          <span>{stats.views}</span>
        </li>

        <li className={css.item}>
          <span className={css.activity}>Likes</span> <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

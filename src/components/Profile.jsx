import styles from '../css/Profile.module.css';

const Profile = ({username, tag, location, image, stats}) => {
  return (
    <div className={styles.profile}>
  <div className={styles.post}>
    <img className={styles.avatar}
      src={image}
      alt="User avatar"
    />
    <p className={styles.name}>{username}</p>
    <p className={styles.tag}>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul className={styles.list}>
    <li>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>

  );
};

export default Profile;
import "./Profile.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="wrapper">
      <div className="profile">
        <img className="avatar" src={image} alt="User avatar" />
        <h3 className="name">{name}</h3>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <div className="stats">
        {Object.entries(stats).map(([key, value]) => (
          <div className="stat" key={key}>
            <p>{key}</p>
            <h4>{value}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
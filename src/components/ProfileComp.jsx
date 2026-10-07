import profilePic from "../assets/profilepic.jpg";

function ProfileComp() {
  return (
    <div className="card">
      <img alt="Profile Photo" src={profilePic}></img>
      <h2>ya. chong</h2>
      <p>My favorite hobby is drawing.</p>
    </div>
  );
}

export default ProfileComp;

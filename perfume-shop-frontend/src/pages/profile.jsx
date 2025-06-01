import { useEffect, useState } from "react";
import API from "../api";
import "./Profile.css";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [profile, setProfile] = useState({});
useEffect(() => {
  if (user) {
    API.get(`/user/${user.id}`).then(res => setProfile(res.data));
  }
}, [user]); 


  return (
    <div className="profile-container">
      <h2 className="profile-heading">Profile</h2>
      <div className="profile-card">
        <p><strong>Username:</strong> {profile.username}</p>
        <p><strong>Email:</strong> {profile.email}</p>
      </div>
    </div>
  );
}

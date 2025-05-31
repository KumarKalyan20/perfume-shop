import { useEffect, useState } from "react";
import API from "../api";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (user) {
      API.get(`/user/${user.id}`).then(res => setProfile(res.data));
    }
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
}

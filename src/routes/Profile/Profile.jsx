// src/pages/Profile/Profile.jsx
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Profile.css";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Blessing Kusiwani",
    email: "blessing@example.com",
    phone: "+263 771 234 567",
    bio: "Passionate about building modern apps 🚀",
    avatar: "https://via.placeholder.com/100", // replace with uploaded avatar later
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Profile updated successfully!");
    // Later: save profile to backend (Supabase / API)
  };

  return (
    <div className="profile-page">
      <h2>👤 My Profile</h2>

      <div className="profile-card">
        <img src={profile.avatar} alt="avatar" className="profile-avatar" />
        <form onSubmit={handleSubmit} className="profile-form">
          <label>
            Full Name:
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Bio:
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
            ></textarea>
          </label>
          <button type="submit" className="btn-save">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

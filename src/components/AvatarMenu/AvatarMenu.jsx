import React, { useState } from "react";
import "./AvatarMenu.css";

const AvatarMenu = ({ user, onLogout }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="avatar-container">
      <img
        src={user.avatar || "/default-avatar.png"}
        alt="avatar"
        className="avatar-img"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="avatar-dropdown">
          <p>{user.name}</p>
          <button onClick={onLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default AvatarMenu;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./Sidebar.css";

// const Sidebar = ({ currentUser, isOpen, toggleSidebar }) => {
//   return (
//     <>
//       <div className={`sidebar ${isOpen ? "open" : ""}`}>
//         <div className="sidebar-profile">
//           <img
//             src={currentUser?.avatar || "/default-avatar.png"}
//             alt="avatar"
//             className="avatar"
//           />
//           <h3>{currentUser?.name || "Guest"}</h3>
//         </div>

//         <nav className="sidebar-nav">
//           <Link to="/dashboard" className="sidebar-link" onClick={toggleSidebar}>
//             📋 Dashboard
//           </Link>
//           <Link to="/editor" className="sidebar-link" onClick={toggleSidebar}>
//             ✏️ Create Invite
//           </Link>
//           <Link to="/profile" className="sidebar-link" onClick={toggleSidebar}>
//             ⚙️ Profile Settings
//           </Link>
//           <Link to="/login" className="sidebar-link" onClick={toggleSidebar}>
//             🚪 Logout
//           </Link>
//         </nav>
//       </div>

//       {/* Overlay to close sidebar when clicking outside */}
//       {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
//     </>
//   );
// };

// export default Sidebar;






import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ currentUser, isOpen, toggleSidebar }) => {
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
          <button className="close-btn" onClick={toggleSidebar}>
            <FaTimes size={20} />
          </button>
        </div>

        <div className="sidebar-profile">
          <img
            src={currentUser?.avatar || "/default-avatar.png"}
            alt="avatar"
            className="avatar"
          />
          <h3>{currentUser?.name || "Guest"}</h3>
        </div>

        <nav className="sidebar-nav">
          <Link to="/dashboard" className="sidebar-link" onClick={toggleSidebar}>
            📋 Dashboard
          </Link>
          <Link to="/editor" className="sidebar-link" onClick={toggleSidebar}>
            ✏️ Create Invite
          </Link>
          <Link to="/profile" className="sidebar-link" onClick={toggleSidebar}>
            ⚙️ Profile Settings
          </Link>
          <Link to="/login" className="sidebar-link" onClick={toggleSidebar}>
            🚪 Logout
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;

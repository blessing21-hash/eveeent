// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">EventInviter</div>
//       <div className="navbar-links">
//         <Link to="/">Home</Link>
//         <Link to="/editor">Create Invite</Link>
//         <Link to="/dashboard">Dashboard</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;








import React from "react";
import { Link } from "react-router-dom";
import AvatarMenu from "../AvatarMenu/AvatarMenu";
import "./Navbar.css";

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Event Inviter</Link>
      <ul className="nav-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/editor">Create Invite</Link></li>
      </ul>
      <div className="nav-auth">
        {user ? (
          <AvatarMenu user={user} onLogout={onLogout} />
        ) : (
          <>
            <Link to="/login" className="btn">Login</Link>
            <Link to="/signup" className="btn btn-primary">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

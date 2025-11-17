





// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { InviteContext } from "../../context/InviteContext";
// import "./Dashboard.css";

// const Dashboard = () => {
//   const { invites, deleteInvite } = useContext(InviteContext);

//   return (
//     <div className="dashboard">
//       <header className="dashboard-header">
//         <h2>🎉 Your Dashboard</h2>
//         <Link to="/editor" className="create-btn">
//           + Create New Invite
//         </Link>
//       </header>

//       {/* Stats Section */}
//       <div className="stats">
//         <div className="stat-card">
//           <h3>{invites.length}</h3>
//           <p>Total Invites</p>
//         </div>
//         <div className="stat-card">
//           <h3>
//             {
//               invites.filter(
//                 (invite) => new Date(invite.date) >= new Date()
//               ).length
//             }
//           </h3>
//           <p>Upcoming Events</p>
//         </div>
//         <div className="stat-card">
//           <h3>
//             {
//               invites.filter(
//                 (invite) => new Date(invite.date) < new Date()
//               ).length
//             }
//           </h3>
//           <p>Past Events</p>
//         </div>
//       </div>

//       {/* Invites List */}
//       <h3 className="section-title">📋 Your Invites</h3>
//       {invites.length === 0 ? (
//         <p className="empty-msg">No invites yet. Create one!</p>
//       ) : (
//         <div className="invite-list">
//           {invites.map((invite) => (
//             <div key={invite.id} className="invite-card">
//               <div className="invite-info">
//                 <h3>{invite.title}</h3>
//                 <p>
//                   📅 {invite.date} {invite.time && `at ${invite.time}`} <br />
//                   📍 {invite.location}
//                 </p>
//               </div>
//               <div className="invite-actions">
//                 <Link to={`/invite/${invite.id}`}>
//                   <button className="btn-view">View</button>
//                 </Link>
//                 <button
//                   className="btn-delete"
//                   onClick={() => deleteInvite(invite.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;






// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { InviteContext } from "../../context/InviteContext";
// import "./Dashboard.css";

// const Dashboard = () => {
//   const { invites, deleteInvite } = useContext(InviteContext);

//   // 🟢 Compute totals
//   const today = new Date();
//   const totalInvites = invites.length;
//   const upcomingEvents = invites.filter(
//     (invite) => new Date(invite.date) >= today
//   ).length;
//   const pastEvents = invites.filter(
//     (invite) => new Date(invite.date) < today
//   ).length;

//   return (
//     <div className="dashboard">
//       <header className="dashboard-header">
//         <h2>🎉 Your Dashboard</h2>
//         <Link to="/editor" className="create-btn">
//           + Create New Invite
//         </Link>
//       </header>

//       {/* Stats Section */}
//       <div className="stats">
//         <div className="stat-card">
//           <h3>{totalInvites}</h3>
//           <p>Total Invites</p>
//         </div>
//         <div className="stat-card">
//           <h3>{upcomingEvents}</h3>
//           <p>Upcoming Events</p>
//         </div>
//         <div className="stat-card">
//           <h3>{pastEvents}</h3>
//           <p>Past Events</p>
//         </div>
//       </div>

//       {/* Invites List */}
//       <h3 className="section-title">📋 Your Invites</h3>
//       {totalInvites === 0 ? (
//         <p className="empty-msg">No invites yet. Create one!</p>
//       ) : (
//         <div className="invite-list">
//           {invites.map((invite) => (
//             <div key={invite.id} className="invite-card">
//               <div className="invite-info">
//                 <h3>{invite.title}</h3>
//                 <p>
//                   📅 {invite.date} {invite.time && `at ${invite.time}`} <br />
//                   📍 {invite.location}
//                 </p>
//               </div>
//               <div className="invite-actions">
//                 <Link to={`/invite/${invite.id}`}>
//                   <button className="btn-view">View</button>
//                 </Link>
//                 <button
//                   className="btn-delete"
//                   onClick={() => deleteInvite(invite.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;





// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { InviteContext } from "../../context/InviteContext";
// import "./Dashboard.css";

// const Dashboard = () => {
//   const { invites, deleteInvite } = useContext(InviteContext);

//   // 🟢 Compute totals
//   const today = new Date();
//   const totalInvites = invites.length;
//   const upcomingEvents = invites.filter(
//     (invite) => new Date(invite.date) >= today
//   ).length;
//   const pastEvents = invites.filter(
//     (invite) => new Date(invite.date) < today
//   ).length;

//   return (
//     <div className="dashboard">
//       <header className="dashboard-header">
//         <h2>🎉 Your Dashboard</h2>
//         <Link to="/editor" className="create-btn">
//           + Create New Invite
//         </Link>
//       </header>

//       {/* Stats Section */}
//       <div className="stats">
//         <div className="stat-card">
//           <h3>{totalInvites}</h3>
//           <p>Total Invites</p>
//         </div>
//         <div className="stat-card">
//           <h3>{upcomingEvents}</h3>
//           <p>Upcoming Events</p>
//         </div>
//         <div className="stat-card">
//           <h3>{pastEvents}</h3>
//           <p>Past Events</p>
//         </div>
//       </div>

//       {/* Invites List */}
//       <h3 className="section-title">📋 Your Invites</h3>
//       {totalInvites === 0 ? (
//         <p className="empty-msg">No invites yet. Create one!</p>
//       ) : (
//         <div className="invite-list">
//           {invites.map((invite) => {
//             const accepted = invite.rsvps.filter(r => r.status === "accepted").length;
//             const declined = invite.rsvps.filter(r => r.status === "declined").length;
//             const maybe = invite.rsvps.filter(r => r.status === "maybe").length;

//             return (
//               <div key={invite.id} className="invite-card">
//                 <div className="invite-info">
//                   <h3>{invite.title}</h3>
//                   <p>
//                     📅 {invite.date} {invite.time && `at ${invite.time}`} <br />
//                     📍 {invite.location}
//                   </p>
//                   <div className="rsvp-stats">
//                     <span>✅ {accepted}</span>
//                     <span>❌ {declined}</span>
//                     <span>🤔 {maybe}</span>
//                   </div>
//                 </div>
//                 <div className="invite-actions">
//                   <Link to={`/invite/${invite.id}`}>
//                     <button className="btn-view">View</button>
//                   </Link>
//                   <button
//                     className="btn-delete"
//                     onClick={() => deleteInvite(invite.id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;












// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { InviteContext } from "../../context/InviteContext";
// import "./Dashboard.css";
// import { FaBars } from "react-icons/fa";

// const Dashboard = () => {
//   const { invites, deleteInvite } = useContext(InviteContext);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("all");

//   const today = new Date();

//   // Totals
//   const totalInvites = invites.length;
//   const upcomingEvents = invites.filter(inv => new Date(inv.date) >= today).length;
//   const pastEvents = invites.filter(inv => new Date(inv.date) < today).length;

//   // Filter invites based on search & filter
//   const filteredInvites = invites.filter(invite => {
//     const matchesSearch =
//       invite.title.toLowerCase().includes(search.toLowerCase()) ||
//       invite.location.toLowerCase().includes(search.toLowerCase());
//     const matchesFilter =
//       filter === "all" ||
//       (filter === "upcoming" && new Date(invite.date) >= today) ||
//       (filter === "past" && new Date(invite.date) < today);
//     return matchesSearch && matchesFilter;
//   });

//   return (
//     <div className="dashboard">
//       <header className="dashboard-header">
//         <h2>🎉 Your Dashboard</h2>
//         <Link to="/editor" className="create-btn">
//           + Create New Invite
//         </Link>
//       </header>

//       {/* Stats Section (clickable) */}
//       <div className="stats">
//         <div className="stat-card" onClick={() => setFilter("all")}>
//           <h3>{totalInvites}</h3>
//           <p>Total Invites</p>
//         </div>
//         <div className="stat-card" onClick={() => setFilter("upcoming")}>
//           <h3>{upcomingEvents}</h3>
//           <p>Upcoming Events</p>
//         </div>
//         <div className="stat-card" onClick={() => setFilter("past")}>
//           <h3>{pastEvents}</h3>
//           <p>Past Events</p>
//         </div>
//       </div>

//       {/* Search & Filter */}
//       <div className="search-filter">
//         <input
//           type="text"
//           placeholder="Search by title or location..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <select value={filter} onChange={(e) => setFilter(e.target.value)}>
//           <option value="all">All</option>
//           <option value="upcoming">Upcoming</option>
//           <option value="past">Past</option>
//         </select>
//       </div>

//       {/* Invites List */}
//       <h3 className="section-title">📋 Your Invites</h3>
//       {filteredInvites.length === 0 ? (
//         <p className="empty-msg">No invites found.</p>
//       ) : (
//         <div className="invite-list">
//           {filteredInvites.map((invite) => {
//             const accepted = invite.rsvps.filter(r => r.status === "accepted").length;
//             const declined = invite.rsvps.filter(r => r.status === "declined").length;
//             const maybe = invite.rsvps.filter(r => r.status === "maybe").length;

//             return (
//               <div key={invite.id} className="invite-card">
//                 <div className="invite-info">
//                   <h3>{invite.title}</h3>
//                   <p>
//                     📅 {invite.date} {invite.time && `at ${invite.time}`} <br />
//                     📍 {invite.location}
//                   </p>
//                   <div className="rsvp-stats">
//                     <span>✅ {accepted}</span>
//                     <span>❌ {declined}</span>
//                     <span>🤔 {maybe}</span>
//                   </div>
//                 </div>
//                 <div className="invite-actions">
//                   <Link to={`/invite/${invite.id}`}>
//                     <button className="btn-view">View</button>
//                   </Link>
//                   <button
//                     className="btn-delete"
//                     onClick={() => deleteInvite(invite.id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;





// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { InviteContext } from "../../context/InviteContext";
// import Sidebar from "../../components/Sidebar/Sidebar";
// import { FaBars } from "react-icons/fa";
// import "./Dashboard.css";

// const Dashboard = ({ currentUser }) => {
//   const { invites, deleteInvite } = useContext(InviteContext);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("all");

//   const toggleSidebar = () => setSidebarOpen(prev => !prev);
//   const today = new Date();

//   // Totals
//   const totalInvites = invites.length;
//   const upcomingEvents = invites.filter(inv => new Date(inv.date) >= today).length;
//   const pastEvents = invites.filter(inv => new Date(inv.date) < today).length;

//   // Filter invites based on search & filter
//   const filteredInvites = invites.filter(invite => {
//     const matchesSearch =
//       invite.title.toLowerCase().includes(search.toLowerCase()) ||
//       invite.location.toLowerCase().includes(search.toLowerCase());
//     const matchesFilter =
//       filter === "all" ||
//       (filter === "upcoming" && new Date(invite.date) >= today) ||
//       (filter === "past" && new Date(invite.date) < today);
//     return matchesSearch && matchesFilter;
//   });

//   return (
//     <div className="dashboard-layout">
//       {/* Sidebar */}
//       <Sidebar
//         currentUser={currentUser}
//         isOpen={sidebarOpen}
//         toggleSidebar={toggleSidebar}
//       />

//       {/* Main content */}
//       <div className="dashboard-content">
//         {/* Header with toggle */}
//         <header className="dashboard-header">
//           <button className="sidebar-toggle" onClick={toggleSidebar}>
//             <FaBars size={24} />
//           </button>
//           <h2>🎉 Your Dashboard</h2>
//           <Link to="/editor" className="create-btn">
//             + Create New Invite
//           </Link>
//         </header>

//         {/* Stats Section */}
//         <div className="stats">
//           <div
//             className={`stat-card ${filter === "all" ? "active" : ""}`}
//             onClick={() => setFilter("all")}
//           >
//             <h3>{totalInvites}</h3>
//             <p>Total Invites</p>
//           </div>
//           <div
//             className={`stat-card ${filter === "upcoming" ? "active" : ""}`}
//             onClick={() => setFilter("upcoming")}
//           >
//             <h3>{upcomingEvents}</h3>
//             <p>Upcoming Events</p>
//           </div>
//           <div
//             className={`stat-card ${filter === "past" ? "active" : ""}`}
//             onClick={() => setFilter("past")}
//           >
//             <h3>{pastEvents}</h3>
//             <p>Past Events</p>
//           </div>
//         </div>

//         {/* Search & Filter */}
//         <div className="search-filter">
//           <input
//             type="text"
//             placeholder="Search by title or location..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <select value={filter} onChange={(e) => setFilter(e.target.value)}>
//             <option value="all">All</option>
//             <option value="upcoming">Upcoming</option>
//             <option value="past">Past</option>
//           </select>
//         </div>

//         {/* Invites List */}
//         <h3 className="section-title">📋 Your Invites</h3>
//         {filteredInvites.length === 0 ? (
//           <p className="empty-msg">No invites found.</p>
//         ) : (
//           <div className="invite-list">
//             {filteredInvites.map((invite) => {
//               const accepted = invite.rsvps.filter(r => r.status === "accepted").length;
//               const declined = invite.rsvps.filter(r => r.status === "declined").length;
//               const maybe = invite.rsvps.filter(r => r.status === "maybe").length;

//               return (
//                 <div key={invite.id} className="invite-card">
//                   <div className="invite-info">
//                     <h3>{invite.title}</h3>
//                     <p>
//                       📅 {invite.date} {invite.time && `at ${invite.time}`} <br />
//                       📍 {invite.location}
//                     </p>
//                     <div className="rsvp-stats">
//                       <span className="accepted">✅ {accepted}</span>
//                       <span className="declined">❌ {declined}</span>
//                       <span className="maybe">🤔 {maybe}</span>
//                     </div>
//                   </div>
//                   <div className="invite-actions">
//                     <Link to={`/invite/${invite.id}`}>
//                       <button className="btn-view">View</button>
//                     </Link>
//                     <button
//                       className="btn-delete"
//                       onClick={() => deleteInvite(invite.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;













import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { InviteContext } from "../../context/InviteContext";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FaBars, FaShareAlt, FaEdit } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = ({ currentUser }) => {
  const { invites, deleteInvite } = useContext(InviteContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const toggleSidebar = () => setSidebarOpen(prev => !prev);
  const today = new Date();

  // Totals
  const totalInvites = invites.length;
  const upcomingEvents = invites.filter(inv => new Date(inv.date) >= today).length;
  const pastEvents = invites.filter(inv => new Date(inv.date) < today).length;
  const totalAccepted = invites.reduce(
    (sum, inv) => sum + inv.rsvps.filter(r => r.status === "accepted").length, 0
  );
  const totalPending = invites.reduce(
    (sum, inv) => sum + inv.rsvps.filter(r => r.status === "pending").length, 0
  );

  // Filter invites based on search & filter
  const filteredInvites = invites.filter(invite => {
    const matchesSearch =
      invite.title.toLowerCase().includes(search.toLowerCase()) ||
      invite.location.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "upcoming" && new Date(invite.date) >= today) ||
      (filter === "past" && new Date(invite.date) < today);
    return matchesSearch && matchesFilter;
  });

  // Dummy recent activity (could be replaced with real data)
  const recentActivity = invites
    .slice(-5)
    .map(inv => `New RSVP for ${inv.title}: ${inv.rsvps.length} responses`);

  return (
    <div className="dashboard-layout">
      <Sidebar currentUser={currentUser} isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="dashboard-content">
        {/* Header */}
        <header className="dashboard-header">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <FaBars size={24} />
          </button>
          <h2>🎉 Your Dashboard</h2>
          <Link to="/editor" className="create-btn">
            + Create New Invite
          </Link>
        </header>

        {/* KPI Cards */}
        <div className="stats">
          <div className={`stat-card ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
            <h3>{totalInvites}</h3>
            <p>Total Invites</p>
          </div>
          <div className={`stat-card ${filter === "upcoming" ? "active" : ""}`} onClick={() => setFilter("upcoming")}>
            <h3>{upcomingEvents}</h3>
            <p>Upcoming Events</p>
          </div>
          <div className={`stat-card ${filter === "past" ? "active" : ""}`} onClick={() => setFilter("past")}>
            <h3>{pastEvents}</h3>
            <p>Past Events</p>
          </div>
          <div className="stat-card">
            <h3>{totalAccepted}</h3>
            <p>Guests Attending</p>
          </div>
          <div className="stat-card">
            <h3>{totalPending}</h3>
            <p>Pending RSVPs</p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search by title or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
          </select>
        </div>

        {/* Invite Cards */}
        <h3 className="section-title">📋 Your Invites</h3>
        {filteredInvites.length === 0 ? (
          <p className="empty-msg">No invites found.</p>
        ) : (
          <div className="invite-list">
            {filteredInvites.map(invite => {
              const accepted = invite.rsvps.filter(r => r.status === "accepted").length;
              const declined = invite.rsvps.filter(r => r.status === "declined").length;
              const maybe = invite.rsvps.filter(r => r.status === "maybe").length;

              return (
                <div key={invite.id} className="invite-card">
                  {invite.coverImage && <img src={invite.coverImage} alt="cover" className="invite-cover" />}
                  <div className="invite-info">
                    <h3>{invite.title}</h3>
                    <p>📅 {invite.date} {invite.time && `at ${invite.time}`}<br />📍 {invite.location}</p>
                    <div className="rsvp-stats">
                      <span className="accepted">✅ {accepted}</span>
                      <span className="declined">❌ {declined}</span>
                      <span className="maybe">🤔 {maybe}</span>
                    </div>
                  </div>
                  <div className="invite-actions">
                    <Link to={`/invite/${invite.id}`}><button className="btn-view">View</button></Link>
                    <button className="btn-edit"><FaEdit /> Edit</button>
                    <button className="btn-share"><FaShareAlt /> Share</button>
                    <button className="btn-delete" onClick={() => deleteInvite(invite.id)}>Delete</button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Recent Activity */}
        <div className="recent-activity">
          <h3>📝 Recent Activity</h3>
          <ul>
            {recentActivity.map((act, i) => (
              <li key={i}>{act}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

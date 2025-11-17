// import React from "react";
// import { useParams } from "react-router-dom";
// import "./InviteView.css";

// const InviteView = () => {
//   const { id } = useParams();

//   // For now, we’ll use sample invite data
//   const sampleInvite = {
//     title: "John & Jane’s Wedding",
//     date: "2025-12-20",
//     time: "15:00",
//     location: "Rainbow Gardens, Harare",
//     description:
//       "Join us in celebrating our special day with family and friends. Dress code: Elegant.",
//   };

//   const handleRSVP = () => {
//     alert("Thanks for your RSVP! (In real app, this would save to backend)");
//   };

//   const handleShare = () => {
//     const message = `You're invited to ${sampleInvite.title} 🎉\n📅 ${sampleInvite.date} at ${sampleInvite.time}\n📍 ${sampleInvite.location}\n\nDetails: ${sampleInvite.description}`;
//     const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, "_blank");
//   };

//   return (
//     <div className="invite-view">
//       <h2>{sampleInvite.title}</h2>
//       <p>
//         <strong>Date:</strong> {sampleInvite.date}
//       </p>
//       <p>
//         <strong>Time:</strong> {sampleInvite.time}
//       </p>
//       <p>
//         <strong>Location:</strong> {sampleInvite.location}
//       </p>
//       <p>{sampleInvite.description}</p>

//       <button className="rsvp-btn" onClick={handleRSVP}>
//         RSVP
//       </button>
//       <br />
//       <button className="rsvp-btn" onClick={handleShare} style={{ marginTop: "1rem" }}>
//         Share on WhatsApp
//       </button>
//     </div>
//   );
// };

// export default InviteView;




// import React, { useContext } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { InviteContext } from "../../context/InviteContext";
// import "./InviteView.css";

// const InviteView = () => {
//   const { id } = useParams();
//   const { invites } = useContext(InviteContext);
//   const navigate = useNavigate();

//   // Find invite by ID
//   const invite = invites.find((i) => i.id.toString() === id);

//   if (!invite) {
//     return (
//       <div className="invite-view">
//         <h2>Invite not found</h2>
//         <button onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
//       </div>
//     );
//   }

//   const handleRSVP = () => {
//     alert(`Thanks for RSVPing to ${invite.title}!`);
//   };

//   const handleShare = () => {
//     const message = `🎉 You're invited to *${invite.title}*!\n
// 📅 ${invite.date} ${invite.time ? `at ${invite.time}` : ""}\n
// 📍 ${invite.location}\n
// \n${invite.description}`;
//     const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, "_blank");
//   };

//   return (
//     <div className="invite-view">
//       <h2>{invite.title}</h2>
//       <p>
//         <strong>Date:</strong> {invite.date}
//       </p>
//       {invite.time && (
//         <p>
//           <strong>Time:</strong> {invite.time}
//         </p>
//       )}
//       <p>
//         <strong>Location:</strong> {invite.location}
//       </p>
//       <p>{invite.description}</p>

//       <button className="rsvp-btn" onClick={handleRSVP}>
//         RSVP
//       </button>
//       <br />
//       <button
//         className="rsvp-btn"
//         onClick={handleShare}
//         style={{ marginTop: "1rem" }}
//       >
//         Share on WhatsApp
//       </button>
//     </div>
//   );
// };

// export default InviteView;






import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { InviteContext } from "../../context/InviteContext";
import "./InviteView.css";

const ViewInvite = () => {
  const { id } = useParams();
  const { invites, addRsvp } = useContext(InviteContext);

  const invite = invites.find(inv => inv.id === parseInt(id));
  const [guestName, setGuestName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!invite) return <p>Invite not found.</p>;

  const accepted = invite.rsvps.filter(r => r.status === "accepted").length;
  const declined = invite.rsvps.filter(r => r.status === "declined").length;
  const maybe = invite.rsvps.filter(r => r.status === "maybe").length;

  const handleRsvp = (status) => {
    if (!guestName) return alert("Please enter your name.");
    addRsvp(invite.id, { name: guestName, status });
    setSubmitted(true);
  };

  return (
    <div className="view-invite">
      <div className="invite-card-full">
        <h2>{invite.title}</h2>
        <p>
          📅 {invite.date} {invite.time && `at ${invite.time}`} <br />
          📍 {invite.location}
        </p>

        <div className="rsvp-stats-full">
          <span>✅ {accepted} Accepted</span>
          <span>❌ {declined} Declined</span>
          <span>🤔 {maybe} Maybe</span>
        </div>

        {!submitted ? (
          <div className="rsvp-form">
            <input
              type="text"
              placeholder="Enter your name"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
            />
            <div className="rsvp-buttons">
              <button onClick={() => handleRsvp("accepted")}>✅ Accept</button>
              <button onClick={() => handleRsvp("declined")}>❌ Decline</button>
              <button onClick={() => handleRsvp("maybe")}>🤔 Maybe</button>
            </div>
          </div>
        ) : (
          <p className="thank-you-msg">Thank you for submitting your RSVP!</p>
        )}
      </div>

      {/* WhatsApp Share */}
<div className="share-section">
  <h4>📤 Share this invite</h4>
  <a
    href={`https://wa.me/?text=Check out this event: ${window.location.href}`}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-btn"
  >
    Share on WhatsApp
  </a>

  {/* Email Share */}
  <a
    href={`mailto:?subject=${encodeURIComponent(invite.title)}&body=${encodeURIComponent(
      `You're invited! Check out this event: ${window.location.href}`
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="email-btn"
  >
    Share via Email
  </a>
</div>

    </div>
  );
};

export default ViewInvite;

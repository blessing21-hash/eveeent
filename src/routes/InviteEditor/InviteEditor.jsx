// import React, { useState } from "react";
// import "./InviteEditor.css";

// const InviteEditor = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     date: "",
//     time: "",
//     location: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Invite Created:", formData);
//     alert("Invite Created! (In full app, this would save to backend)");
//   };

//   return (
//     <div className="invite-editor">
//       <h2>Create Your Event Invite ✨</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Event Title (e.g. John's Wedding)"
//           value={formData.title}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="time"
//           name="time"
//           value={formData.time}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="location"
//           placeholder="Event Location"
//           value={formData.location}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="description"
//           rows="4"
//           placeholder="Event Details / Notes"
//           value={formData.description}
//           onChange={handleChange}
//         ></textarea>
//         <button type="submit">Save Invite</button>
//       </form>
//     </div>
//   );
// };

// export default InviteEditor;






import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { InviteContext } from "../../context/InviteContext";
import "./InviteEditor.css";

const InviteEditor = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  const { addInvite } = useContext(InviteContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addInvite(formData);
    alert("Invite Created!");
    navigate("/dashboard"); // redirect to Dashboard
  };

  return (
    <div className="invite-editor">
      <h2>Create Your Event Invite ✨</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Event Title (e.g. John's Wedding)"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Event Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          rows="4"
          placeholder="Event Details / Notes"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Save Invite</button>
      </form>
    </div>
  );
};

export default InviteEditor;

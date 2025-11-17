// import React, { createContext, useState } from "react";

// export const InviteContext = createContext();

// export const InviteProvider = ({ children }) => {
//   const [invites, setInvites] = useState([]);

//   const addInvite = (invite) => {
//     setInvites([...invites, { ...invite, id: Date.now() }]);
//   };

//   const deleteInvite = (id) => {
//     setInvites(invites.filter((invite) => invite.id !== id));
//   };

//   return (
//     <InviteContext.Provider value={{ invites, addInvite, deleteInvite }}>
//       {children}
//     </InviteContext.Provider>
//   );
// };







// import React, { createContext, useState } from "react";

// export const InviteContext = createContext();

// export const InviteProvider = ({ children }) => {
//   const [invites, setInvites] = useState([
//     {
//       id: 1,
//       title: "Blessing & Anna's Wedding 💍",
//       date: "2025-12-15",
//       time: "3:00 PM",
//       location: "Rainbow Towers, Harare",
//     },
//     {
//       id: 2,
//       title: "Sunday Youth Service ✝️",
//       date: "2025-10-05",
//       time: "10:00 AM",
//       location: "Goromonzi Adventist Church",
//     },
//     {
//       id: 3,
//       title: "Tino's Birthday Bash 🎉",
//       date: "2025-11-02",
//       time: "6:00 PM",
//       location: "Avondale, Harare",
//     },
//   ]);

//   // delete invite
//   const deleteInvite = (id) => {
//     setInvites(invites.filter((invite) => invite.id !== id));
//   };

//   // add invite (later from Editor page)
//   const addInvite = (invite) => {
//     setInvites([...invites, { id: Date.now(), ...invite }]);
//   };

//   return (
//     <InviteContext.Provider value={{ invites, deleteInvite, addInvite }}>
//       {children}
//     </InviteContext.Provider>
//   );
// };








import React, { createContext, useState } from "react";

export const InviteContext = createContext();

export const InviteProvider = ({ children }) => {
  const [invites, setInvites] = useState([
    {
      id: 1,
      title: "Blessing & Anna's Wedding 💍",
      date: "2025-12-15",
      time: "3:00 PM",
      location: "Rainbow Towers, Harare",
      rsvps: [
        { name: "Tino", status: "accepted" },
        { name: "Sarah", status: "declined" },
        { name: "Anna", status: "accepted" },
      ],
    },
    {
      id: 2,
      title: "Sunday Youth Service ✝️",
      date: "2025-10-05",
      time: "10:00 AM",
      location: "Goromonzi Adventist Church",
      rsvps: [
        { name: "Blessing", status: "accepted" },
        { name: "Mike", status: "maybe" },
      ],
    },
    {
      id: 3,
      title: "Tino's Birthday Bash 🎉",
      date: "2025-11-02",
      time: "6:00 PM",
      location: "Avondale, Harare",
      rsvps: [],
    },
  ]);

  const addInvite = (invite) => {
    setInvites([...invites, { id: Date.now(), rsvps: [], ...invite }]);
  };

  const deleteInvite = (id) => {
    setInvites(invites.filter((invite) => invite.id !== id));
  };

  // Add RSVP to an invite
  const addRsvp = (inviteId, guest) => {
    setInvites(
      invites.map((invite) =>
        invite.id === inviteId
          ? { ...invite, rsvps: [...invite.rsvps, guest] }
          : invite
      )
    );
  };

  return (
    <InviteContext.Provider value={{ invites, addInvite, deleteInvite, addRsvp }}>
      {children}
    </InviteContext.Provider>
  );
};

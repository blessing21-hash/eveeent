// import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";

// const Home = () => {
//   return (
//     <div className="home">
//       <h1>Welcome to EventInviter 🎉</h1>
//       <p>Create and share digital invites for weddings, parties, and events.</p>
//       <Link to="/editor">
//         <button className="cta-btn">Create Your Invite</button>
//       </Link>
//     </div>
//   );
// };

// export default Home;








// import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";

// const Home = () => {
//   return (
//     <div className="home">
//       {/* Hero Section */}
//       <section className="hero">
//         <h1>🎉 Welcome to EventInviter</h1>
//         <p>Create and share beautiful digital invites for weddings, parties, and more!</p>
//         <Link to="/editor">
//           <button className="cta-btn">Create Your Invite</button>
//         </Link>
//       </section>

//       {/* Features Section */}
//       <section className="features">
//         <h2>Why Use EventInviter?</h2>
//         <div className="features-grid">
//           <div className="feature-card">
//             <h3>📝 Easy to Create</h3>
//             <p>Design stunning invites in minutes with our simple editor.</p>
//           </div>
//           <div className="feature-card">
//             <h3>📲 Share Anywhere</h3>
//             <p>Instantly share your invites via WhatsApp or a unique link.</p>
//           </div>
//           <div className="feature-card">
//             <h3>✅ Track RSVPs</h3>
//             <p>Guests can RSVP instantly so you can plan better.</p>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="cta">
//         <h2>Ready to Host Your Event?</h2>
//         <p>Start creating your invite now and make your event unforgettable.</p>
//         <Link to="/editor">
//           <button className="cta-btn">Get Started</button>
//         </Link>
//       </section>
//     </div>
//   );
// };

// export default Home;










import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    
    <div className="home">
     <Navbar />
      {/* Hero Section */}
      <section className="hero">
         <h1>🎉 Welcome to EventInviter</h1>
        <h2>Create Beautiful Event Invites</h2>
        <p>For weddings, parties, church events & more — with RSVP & WhatsApp sharing.</p>
        <Link to="/signup">
          <button className="cta-btn">Get Started</button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="features">
           {/* <h2>Why Use EventInviter?</h2> */}

        <div className="feature-card">
          <h3>🎉 Custom Templates</h3>
          <p>Choose from elegant, fun, and modern templates for any type of event.</p>
        </div>
        <div className="feature-card">
          <h3>✅ Easy RSVP</h3>
          <p>Track who’s attending in real-time and manage guest lists effortlessly.</p>
        </div>
        <div className="feature-card">
          <h3>📱 Share Anywhere</h3>
          <p>Send invites via WhatsApp, email, or social media in just one click.</p>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="cta">
        <h2>Ready to host your next big event?</h2>
        <Link to="/editor">
          <button>Create an Invite</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;

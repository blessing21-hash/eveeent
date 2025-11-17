// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App





import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './routes/Home/Home'
import InviteEditor from './routes/InviteEditor/InviteEditor'
import InviteView from './routes/InviteView/InviteView'
import Dashboard from './routes/Dashboard/Dashboard'
import Signup from './routes/Signup/Signup'
import Login from './routes/Login/Login'
import Profile from './routes/Profile/Profile'

export default function App(){
  return (
    <div className="app">
      
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editor" element={<InviteEditor />} />
          <Route path="/invite/:id" element={<InviteView />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element ={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

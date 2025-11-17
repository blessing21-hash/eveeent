import React, { useState } from 'react'

export default function RSVPForm({ onSubmit }) {
  const [name, setName] = useState('')
  const [status, setStatus] = useState('accepted')
  const [message, setMessage] = useState('')

  function submit(e){
    e.preventDefault()
    const payload = { name, rsvp_status: status, message, responded_at:new Date().toISOString() }
    if (onSubmit) onSubmit(payload)
    setName(''); setMessage('')
    alert('Thank you — your RSVP was recorded (locally).')
  }

  return (
    <form className="card" onSubmit={submit}>
      <h3>RSVP</h3>
      <div className="form-control"><label>Your name</label><input value={name} onChange={e=>setName(e.target.value)} required/></div>
      <div className="form-control"><label>Will you attend?</label>
        <select value={status} onChange={e=>setStatus(e.target.value)}>
          <option value="accepted">Yes</option>
          <option value="maybe">Maybe</option>
          <option value="declined">No</option>
        </select>
      </div>
      <div className="form-control"><label>Message (optional)</label><textarea value={message} onChange={e=>setMessage(e.target.value)} /></div>
      <button className="btn" type="submit">Send RSVP</button>
    </form>
  )
}

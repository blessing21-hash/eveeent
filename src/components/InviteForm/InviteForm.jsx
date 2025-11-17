
import React, { useState } from 'react'
import { generateSlug } from '../utils/slug'

export default function InviteForm({ onCreate }) {
  const [title,setTitle] = useState('')
  const [dateTime,setDateTime] = useState('')
  const [venue,setVenue] = useState('')
  const [template,setTemplate] = useState('minimal')
  const [description,setDescription] = useState('')

  function submit(e){
    e.preventDefault()
    const payload = {
      title: title || 'Untitled Event',
      date_time: dateTime,
      venue,
      template,
      description,
      public_slug: generateSlug(6),
      created_at: new Date().toISOString()
    }
    onCreate && onCreate(payload)
  }

  return (
    <form className="card" onSubmit={submit}>
      <h2>Create invite</h2>

      <div className="form-control">
        <label>Title</label>
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="e.g. Blessing & Alex's Wedding" required />
      </div>

      <div className="form-row" style={{display:'flex', gap:12}}>
        <div style={{flex:1}} className="form-control">
          <label>Date & time</label>
          <input type="datetime-local" value={dateTime} onChange={e=>setDateTime(e.target.value)} />
        </div>
        <div style={{flex:1}} className="form-control">
          <label>Venue</label>
          <input value={venue} onChange={e=>setVenue(e.target.value)} placeholder="Venue" />
        </div>
      </div>

      <div className="form-control">
        <label>Template</label>
        <select value={template} onChange={e=>setTemplate(e.target.value)}>
          <option value="minimal">Minimal</option>
          <option value="wedding">Wedding (floral)</option>
          <option value="party">Party</option>
        </select>
      </div>

      <div className="form-control">
        <label>Description</label>
        <textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder="Short details, dress code..." />
      </div>

      <div style={{display:'flex', gap:8}}>
        <button className="btn" type="submit">Save invite</button>
      </div>
    </form>
  )
}

import React from 'react'

export default function LivePreview({ invite }) {
  if (!invite) return <div className="card"><p className="muted">Preview will appear after you type details.</p></div>

  return (
    <div className="card">
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <div style={{flex:1}}>
          <h2 style={{marginBottom:6}}>{invite.title}</h2>
          <div style={{color:'#6b7280',marginBottom:8}}>{invite.date_time ? new Date(invite.date_time).toLocaleString() : 'No date'}</div>
          <div style={{marginBottom:8}}>{invite.venue}</div>
          <p style={{marginTop:6}}>{invite.description}</p>
          <div style={{marginTop:10}}>
            <small className="muted">Share: /i/{invite.public_slug}</small>
          </div>
        </div>
        <div style={{width:160}}>
          <div style={{background:'#f3f4f6', padding:8, borderRadius:8, textAlign:'center'}}>Template: {invite.template}</div>
        </div>
      </div>
    </div>
  )
}

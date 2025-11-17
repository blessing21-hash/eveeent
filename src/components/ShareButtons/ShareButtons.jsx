import React from 'react'

export default function ShareButtons({ inviteUrl, title }) {
  const whatsappText = encodeURIComponent(`You're invited to ${title}\n\nDetails: ${inviteUrl}`)
  const whatsappUrl = `https://wa.me/?text=${whatsappText}`

  function copyLink(){
    navigator.clipboard.writeText(inviteUrl)
    alert('Link copied to clipboard')
  }

  return (
    <div style={{display:'flex',gap:8}}>
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn">Share on WhatsApp</a>
      <button onClick={copyLink} className="btn-ghost">Copy link</button>
    </div>
  )
}

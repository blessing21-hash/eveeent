import React from 'react'

export default function TemplateSelector({ value, onChange }) {
  return (
    <div className="card">
      <h3>Choose a template</h3>
      <div style={{display:'flex', gap:12}}>
        <label style={{flex:1}}>
          <input type="radio" name="tpl" value="minimal" checked={value==='minimal'} onChange={e=>onChange(e.target.value)} /> Minimal
        </label>
        <label style={{flex:1}}>
          <input type="radio" name="tpl" value="wedding" checked={value==='wedding'} onChange={e=>onChange(e.target.value)} /> Wedding
        </label>
        <label style={{flex:1}}>
          <input type="radio" name="tpl" value="party" checked={value==='party'} onChange={e=>onChange(e.target.value)} /> Party
        </label>
      </div>
    </div>
  )
}

const KEY = 'event-inviter-invites'

export function loadInvites(){
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  } catch(e){ return [] }
}

export function saveInvite(invite){
  const arr = loadInvites()
  arr.unshift(invite)
  localStorage.setItem(KEY, JSON.stringify(arr))
  return invite
}

export function findInviteBySlug(slug){
  return loadInvites().find(i => i.public_slug === slug)
}

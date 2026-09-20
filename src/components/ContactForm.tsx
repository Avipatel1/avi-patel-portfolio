import { useState } from 'react'
import type { FormEvent } from 'react'
import { Icon } from './Icon'
export function ContactForm() {
  const [prepared, setPrepared] = useState(false)
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name')).trim()
    const email = String(data.get('email')).trim()
    const message = String(data.get('message')).trim()
    const subject = encodeURIComponent('Portfolio inquiry from ' + name)
    const body = encodeURIComponent(message + '\n\nFrom: ' + name + '\nReply to: ' + email)
    window.location.href = 'mailto:avixpatel@hotmail.com?subject=' + subject + '&body=' + body
    setPrepared(true)
  }
  return (
    <form onSubmit={prepareEmail} className="contact-form">
      <div className="grid gap-5 sm:grid-cols-2">
        <label>Your name<input name="name" autoComplete="name" placeholder="Jane Smith" maxLength={100} required /></label>
        <label>Email address<input name="email" type="email" autoComplete="email" placeholder="jane@example.com" maxLength={254} required /></label>
      </div>
      <label className="mt-5">Your message<textarea name="message" rows={4} placeholder="Tell me a little about the opportunity…" maxLength={2000} required /></label>
      <div className="mt-6 flex flex-wrap items-center gap-5">
        <button className="button button-primary" type="submit">Prepare email <Icon /></button>
        <p className="form-note">Opens your email app.<br />You review and send the message there.</p>
      </div>
      <p className="form-feedback" role="status">{prepared ? 'Your email app was requested. If it did not open, email avixpatel@hotmail.com directly. Nothing has been sent by this site.' : ''}</p>
    </form>
  )
}
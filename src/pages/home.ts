import { html } from '#/lib/view'
import { shell } from './shell'

export function home() {
  return shell({
    title: 'Home',
    content: content(),
  })
}

function content() {
  return html`<div id="root">
    <div id="header">
      <h1>Statusphere</h1>
      <p>Set your status on the Atmosphere.</p>
    </div>
  </div>`
}

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
    <div class="container">
      <div class="card">
        <div class="session-form">
          <div><a href="/login">Log in</a> to set your status!</div>
          <div>
            <a href="/login" class="button">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </div>`
}

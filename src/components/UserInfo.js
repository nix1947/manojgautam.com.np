import React, { Component } from 'react'
import coffee from '../images/coffee.svg'
import razaqultegar from '../../content/images/razaqultegar.jpg'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <p>
              Saya Razaqul Tegar, pengembang dari Panda SID, Full Stack Developer & CTO di Puskomedia Indonesia, perokok aktif, kutu buku musiman, dan erap berkegiatan alam terbuka dan sesekali menangkap gerak dengan kamera ponselnya.
            </p>

            <a href="https://ko-fi.com/taniarascia" className="donate-button" target="_blank">
              Buy me a coffee 
              {' '}
            <img src={coffee} className="coffee-icon" />
            </a>
          </div>
          <div className="flex-avatar">
            <img className="avatar" src={razaqultegar} />
          </div>
        </div>
      </aside>
    )
  }
}

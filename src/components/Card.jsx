import React from 'react'
import '../styles/card.css'

export default function Card() {
  return (
    <div className='card'>
        <div className="img_container">
            <img src="/public/images/Frame 31.png" alt="river" />
        </div>
        <div className="card-content">
            <h1>San Francisco</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Scelerisque ut scelerisque viverra scelerisque risus quis.</p>
            <button>details</button>
        </div>
    </div>
  )
}

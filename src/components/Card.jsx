import React from 'react'
import '../styles/card.css'

export default function Card() {
  return (
    <div className='card'>
        <div className="img_container">
            <img src="https://img.freepik.com/free-photo/aerial-drone-view-zadar-sunset-croatia-historical-city-centre-with-old-buildings_1268-23572.jpg?t=st=1732466395~exp=1732469995~hmac=73bd4487a66584468a06fdddaeba139f2427484e2e457f94ef6b1be7be888165&w=826" alt="Buildings" />
        </div>
        <div className="card-content">
        <h1>San Francisco</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex fugiat voluptatum inventore consectetur maiores sapiente ipsa veritatis nobis quod officia?</p>
        </div>
    </div>
  )
}

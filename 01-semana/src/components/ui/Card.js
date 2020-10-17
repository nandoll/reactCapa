import React from 'react'

export const Card = ({ title = 'Nombre', subTitle='Cargo'}) => {
  
  return (
    <div className="cardContainer">
      <div className="card">
        <div className="cardUserImage">
          <img src="./assets/avatar.jpg" alt="Juanito Perez"/>          
        </div>
        <div className="cardTitle">
          <h2> { title } </h2>
        </div>
        <div className="cardSubTitle">
          <p> { subTitle } </p>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

export const Card = ( { idImage, timeAgo }) => {
    return (        
        <div className="card col4">
            <div className="cardTitle">
                <div className="cardImage">
                    <img src={`https://picsum.photos/id/${idImage}/100/100`} className ="img-round" alt="Dog"/>
                </div>
                <span className="text-right up">{timeAgo}</span>
            </div>
            <div className="cardBody">
                <div className="cardBodyTitle">
                    <span className="topTitle">Top Title</span>
                    <span className="blackTitle">Black Title</span>
                </div>
                <div className="cardText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
            </div>
        </div>        
    )
}
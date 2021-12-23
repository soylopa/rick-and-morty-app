import React from "react";
import cards from './cards.css'

const CharactersList = ({characters = []}) => {
    return (
        <div className="row">
            {
                characters.map((item,index) => (
                    <div key={index} className="col">
                        <div className="card" id="data">
                            <img src={item.image} alt="avatar-image" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CharactersList
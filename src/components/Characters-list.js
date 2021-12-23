import React from "react";
import cards from './cards.css'

const CharactersList = ({characters = []}) => {
    return (
        <div className="row">
            {
                characters.map((item,index) => (
                    <div key={index} className="col">
                        <div className="card" id="data">
                            <img src={item.image} className="rounded-circle" alt="avatar-image" />
                            <br />
                            <div className="card-boby">
                                <h4 className="card-tite d-flex justify-content-center">
                                    {item.name}
                                </h4>
                                <p className="d-flex justify-content-center"> {item.location.name}</p>
                                <p className="d-flex justify-content-center"> {item.status}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CharactersList
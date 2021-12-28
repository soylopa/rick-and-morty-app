import React from "react";
import cards from './cards.css'

const CharactersList = ({characters = []}) => {
    return (
        <div className="row">
            {
                characters.map((item,index) => (
                    <div key={index} className="col mb-4">
                        <div className="card" id="data">
                            <img src={item.image} className="rounded-circle" alt="avatar-image" />
                            <br />
                            <div className="card-body mt-5">
                                <h4 className="card-tite d-flex justify-content-center">
                                    {item.name}
                                </h4>
                                <p id="data-card"> {item.location.name}</p>
                                <p id="data-card"> {item.species}</p>
                                <p id="data-card"> {item.status}</p>
                                <button type="button" class="btn btn-outline-secondary" id="data-card">Secondary</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CharactersList
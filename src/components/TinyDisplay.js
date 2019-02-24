import React from 'react';
import TinyDisplayCard from "./TinyDisplayCard";

const TinyDisplay = () => {
    return (
        <div className="tiny-display-cards-wrapper">
            <div className="message">
                <h4>Stay secure, sleep easy:</h4>
            </div>
            <div className="tiny-cards">
                <TinyDisplayCard>
                    <div>
                        <img src="./assets/icons/chess-king.svg" alt="eye.svg"/>
                    </div>
                    <div>
                        <h2>The King in the game</h2>
                    </div>
                </TinyDisplayCard>
                <TinyDisplayCard>
                    <div>
                        <img src="./assets/icons/eye.svg" alt="eye.svg"/>
                    </div>
                    <div>
                        <h2>Sharp eye for detail</h2>
                    </div>
                </TinyDisplayCard>
                <TinyDisplayCard>
                    <div>
                        <i className="fas fa-users fa-3x"></i>
                    </div>
                    <div>
                        <h2>Satisfaction guaranteed</h2>
                    </div>
                </TinyDisplayCard>
                <TinyDisplayCard>
                    <div>
                        <i className="fab fa-internet-explorer fa-3x"></i>
                    </div>
                    <div>
                        <h2>Support down to IE11</h2>
                    </div>
                </TinyDisplayCard>
            </div>
        </div>
    )
};

export default TinyDisplay;
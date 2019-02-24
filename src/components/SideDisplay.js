import React from 'react';
import ButtonCircle from './ButtonCircle';

const SideDisplay = (props) => {

    return (
        <div className={`side-display ${props.className}`}>
            {props.children}
            <div className={`slide-buttons ${props.sideButtonsState}`}>
                <ButtonCircle material="keyboard_arrow_up" className="prev" onClick={props.handleOfferingDecrease}/>
                <ButtonCircle material="keyboard_arrow_down" className="next" onClick={props.handleOfferingIncrease}/>
            </div>
        </div>
    );
}

export default SideDisplay;
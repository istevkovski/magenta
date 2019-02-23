import React from 'react';
import ButtonCircle from './ButtonCircle';

const SideDisplay = (props) => {

    return (
        <div className="side-display">
            {props.children}
            <div className="slide-buttons">
                <ButtonCircle material="keyboard_arrow_up" className="prev"/>
                <ButtonCircle material="keyboard_arrow_down" className="next"/>
            </div>
        </div>
    );
}

export default SideDisplay;
import React from 'react';
import './BuildControls.css';

const buildControls = (props) => (
    <div className="BuilderControl">
        <div className="Label">{props.label}</div>
        <button className="Less">Less</button>
        <button className="More">More</button>
    </div>
);

export default buildControls;
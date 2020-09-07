import React from 'react';

const ButtonLight = props =>{

    return( 
        <div className ="ui inverted segment">
            <button className="ui inverted basic button">{props.btnText}</button>
        </div>
    );
};

export default ButtonLight;
import React from 'react';

import ButtonLight from './buttonLight';

const Card = props =>( 
        <div className="ui link cards">
        <div className="card">
        <div className="image">
        <img  src={props.obj.image}/>
        </div>
        <div className="content">
        <div className="header">{props.obj.name}</div>
        <div className="meta"><a>{'Seen in:' + props.obj.seenIn}</a></div>
        <div className="description">
        {props.obj.text}
        </div>
        </div>
        <ButtonLight btnText = "Read More" />
        </div>
</div>)



export default Card;

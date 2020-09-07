import React from 'react';

const NavBar = () =>{

    return(  <div className = "ui secondary pointing menu">
                <a className="active item">
                    Home
                </a>
                <a className="item">
                    Fan Sites
                </a>
                <a className="item">
                    Games
                </a>
                <div className="right menu">
                    <a className="ui item">
                    Sign up
                    </a>
                    <a className="ui item">
                    Log-in
                    </a>
                </div>
            </div>
    );
};

export default NavBar;
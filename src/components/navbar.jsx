import React from 'react';

const Navbar = (props) => {
        

        return (
            <nav className="navbar">
                <i className="navbar-logo fab fa-battle-net"></i>
                <span className="navbar-title">Habit-Tracker</span>
                <span className="navbar-count">{props.totalcount}</span>

            </nav>
        );
    };

export default Navbar;
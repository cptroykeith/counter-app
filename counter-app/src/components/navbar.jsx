import React, { Component } from 'react';

//stateless functional Component
const NavBar = ({ totalCounters }) => {
    return (
        <nav class="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{" "}
                <span className='badge badge-pill badge-secondary'>
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
};
 
export default NavBar;
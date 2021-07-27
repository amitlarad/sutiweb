import React from 'react';
import {Link} from 'react-router-dom';

function TopNav() {
    return (
        <div>
            <Link to="/"><span>Home</span></Link>
            <Link to="/about"><span>About</span></Link>
            <Link to="/contact"><span>Contact</span></Link>
        </div>
    )
}

export default TopNav

import React from "react";

const Navbar = (props) => {
    return (
        <ul class="nav">
            <li class="nav-item">
                <button type="button" class="btn btn-outline-primary" onClick={() => props.getHomeFunc()}>Home</button>
            </li>
            <li class="nav-item">
                <button type="button" class="btn btn-outline-primary" onClick={() => props.getAboutFunc()}>About</button>
            </li>
            <li class="nav-item">
                <button type="button" class="btn btn-outline-primary" onClick={() => props.getContactFunc()}>Contact</button>
            </li>
        </ul>
    )
}

export default Navbar;
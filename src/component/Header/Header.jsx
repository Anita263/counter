import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
    return (
            <div className="Header">
        <Logo />
        <Nav />
    </div>
    );
}

export default Header;
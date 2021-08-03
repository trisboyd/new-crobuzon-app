import React from 'react';

function Header() {
    return (
        <header className="header">
            <nav>
                <ul className="menu">
                    <li className="menu__item"><a className="menu__item-text" href="#map">Map</a></li>
                    <li className="menu__item"><a className="menu__item-text" href="#species">Species</a></li>
                    <li className="menu__item"><a className="menu__item-text" href="#books">Books</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
import React from 'react';
import './Header.css'

function Header(props) {
    const { background, title } = props;

    const headerBackground = {
        background: background,
    };
    return (
        <header style={headerBackground}>
            <span>{title}</span>
            <nav>
                <ul id='links'>
                    <a href="#t"><li>Link 1</li></a>
                    <a href="#a"><li>Link 2</li></a>
                    <a href="#cv"><li>Link 3</li></a>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
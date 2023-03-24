import React from 'react';
import './Part.css'

function Part(props) {
    const { background, color } = props;

    const sectionBackground = {
        background: background,
        color: color
    };

    return (
        <section style={sectionBackground}>
            {props.children}
        </section>
    );
}

export default Part;
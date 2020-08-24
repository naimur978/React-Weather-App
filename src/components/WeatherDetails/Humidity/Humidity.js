import React from 'react';

import classes from './Humidity.module.css';

const humidity = (props) => {
    return ( <
        div className = {
            classes.HumidityWrapper
        } > humidity: {
            props.type
        } %
        <
        /div>
    );
}

export default humidity;
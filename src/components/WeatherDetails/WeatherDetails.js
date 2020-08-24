import React from 'react';

import classes from './WeatherDetails.module.css';
import Icon from '../../elements/Icon/Icon';
import Temperature from './Temperature/Temperature';
import Humidity from './Humidity/Humidity';
import Description from './Description/Description';
import Date from './Date/Date';

const weatherDetails = (props) => {
    return(
        <div className={classes.WeatherDetailsWrapper}>
            <div className={classes.WeatherIconWrapper}>
                <Icon type={props.data.description} />    
            </div>
            <div className={classes.WeatherDataWrapper}>
                <Temperature degrees={props.data.temperature} />
                <Humidity type={props.data.humidity} />
                <Description type={props.data.description} />
                <Date />
            </div>
        </div>
    );
}

export default weatherDetails;
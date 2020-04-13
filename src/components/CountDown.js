import React, { useEffect, useState } from 'react';

const CountDown = ({hours, minutes = 0, seconds = 0, setIsReady}) => {
    const [leftSeconds, setSecond] = useState( parseInt(hours)*60*60 + parseInt(minutes)*60 + parseInt(seconds) );

    useEffect(function countDown() {
        if( leftSeconds > 0 ) {
            const timerId = setTimeout(() => {
                setSecond( (prevSecond) => prevSecond - 1 );
            }, 1000)
    
            return () => {
                clearTimeout(timerId);
            }

        } else {
            setIsReady(true);
        }
        
    }, [leftSeconds, setIsReady]);

    function formatHour(seconds) {
        let hour = Math.floor(seconds / 3600);
        hour = (hour >= 10) ? hour.toString() : `0${hour}`;

        return hour;
    }
    
    function formatMinutes(seconds) {
        let minutes = Math.floor( (seconds % 3600) / 60 );
        minutes = (minutes >= 10) ? minutes.toString() : `0${minutes}`;

        return minutes;
    }
    
    function formatSeconds(seconds) {
        seconds = (seconds % 3600 % 60);
        seconds = (seconds >= 10) ? seconds.toString() : `0${seconds}`;

        return seconds;
    }

    return (
        <div className="counter">
            <span className="hour">{formatHour(leftSeconds)} : </span>
            <span className="minute">{formatMinutes(leftSeconds)} : </span>
            <span className="seconds">{formatSeconds(leftSeconds)}</span>
        </div>
    );
}

export default CountDown;
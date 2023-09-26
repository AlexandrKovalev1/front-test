import classes from './Timer.module.css'
import React, { useState, useEffect } from 'react';

type PropsType = {
    startTime: string
}

const Timer: React.FC<PropsType> = ({ startTime }) => {

    let hours = +(startTime.split(':')[0] || '00')
    let minutes = +(startTime.split(':')[1] || '00')
    let seconds = +(startTime.split(':')[2] || '00')
    const [over, setOver] = useState(false);
    const [[h, m, s], setTime] = useState([hours, minutes, seconds]);

    const tick = () => {
        if (h === 0 && m === 0 && s === 0) {
            setOver(true);
        } else if (m === 0 && s === 0) {
            setTime([h - 1, 59, 59]);
        } else if (s === 0) {
            setTime([h, m - 1, 59]);
        } else {
            setTime([h, m, s - 1]);
        }
    };

    let timer = `${h.toString().padStart(2, '0')}:${m.toString()
        .padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });

    return (
        <div className={classes.timer__wrapper}>
            <span className={classes.timer_heading}>
                LIMITED OFFER
            </span>
            <div className={classes.timer_value}>{timer}</div>
            {over && <span>Time's up!</span>}
        </div>
    );
};



export default Timer

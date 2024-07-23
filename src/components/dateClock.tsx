import React, { useState, useEffect } from 'react';
import { getDateFormatted, getCurrentMonth } from '../utils/dateUtils';

interface DateClockProps {
    className?: string;
}

const DateClock: React.FC<DateClockProps> = ({ className }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formattedDate = getDateFormatted(time);
    const currentMonth = getCurrentMonth();
    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    return (
        <div id="date-clock-container" className={className}>
            <div className="date-clock">
                <h2>{currentMonth} {formattedDate.split('-')[2]}, {formattedDate.split('-')[0]}</h2>
                <p>{formattedTime}</p>
            </div>
        </div>
    );
}

export default DateClock;

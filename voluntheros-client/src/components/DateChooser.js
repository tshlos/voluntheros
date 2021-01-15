import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function DateChooser() {
    
    const [value, onChange] = useState(new Date());

    // console.log("on change", onChange);
    // console.log('value', value);

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

import React, { useState } from 'react';
import { DateRange } from 'react-date-range';

const DateRang = () => {

    const from = new Date(); 
    const to = new Date();   

    const [ state, setState ] = useState([
        {
            startDate: from, 
            endDate: to,    
            key: 'selection'
        }
    ]);

    const handleDateChange = (item) => {
        setState([ item.selection ]);
        
        console.log('Selected Date Range:', item.selection);
    };

    return (
        <div>
            <DateRange
                editableDateInputs={true}
                onChange={handleDateChange}
                moveRangeOnFirstSelection={false}
                ranges={state}
            />
        </div>
    );
};

export default DateRang;

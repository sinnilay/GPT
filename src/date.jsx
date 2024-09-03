import React from 'react';

function DateTimeDisplay() {
    const currentDateTime = new Date();

    // Get the full date details
    const year = currentDateTime.getFullYear();
    const month = String(currentDateTime.getMonth() + 1).padStart(2, '0');
    const day = String(currentDateTime.getDate()).padStart(2, '0');

    // Get the time details
    const hours = String(currentDateTime.getHours()).padStart(2, '0');
    const minutes = String(currentDateTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentDateTime.getSeconds()).padStart(2, '0');

    // Get the day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[currentDateTime.getDay()];

    // Combine all to a single string
    const formattedDateTime = `${dayOfWeek}, ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return (
        <div className='mt-16 md:mt-96'>
            <p className='text-black font-mono'>Current Date and Time:</p>
            <p className='text-black font-mono'>{formattedDateTime}</p>
        </div>
    );
}

export default DateTimeDisplay;

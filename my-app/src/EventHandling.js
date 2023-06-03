import React, { useState } from 'react';
import Button from "./button";


function EventHandling(){
    // const handleClick = () =>{
    //     console.log('Button Clicked');
    // };
    const [text, setText] = useState('');

    // Event handler function for input change
    const handleChange = (event) => {
      setText(event.target.value);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('Form Submitted');
    };

    return(
        <div>
            <h2>Event Handling Example</h2>
            <Button/>
            <input type="text" value={text} onChange={handleChange} />
            <p>You typed: {text}</p>
            <form onSubmit={handleSubmit}>
                <input type="text"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default EventHandling;
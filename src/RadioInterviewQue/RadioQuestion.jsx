import React from 'react'

function RadioQuestion() {
    const options = ["Cricket", "Hollyball", "Football"]
    const days = ["weekdays", "weekends"]
    return (
        <>
            <div className="App">
                {options.map((currVal) => {
                    console.log(currVal);
                    return (
                        <>
                            <input type="radio" id="{currVal}" name="options" />
                            <label for="curVal">{currVal}</label>
                            <br />
                        </>
                    );
                })}

                {days.map((currVal) => {
                    console.log(currVal);
                    return (
                        <>
                            <input type="radio" id="{currVal}" name="options" />
                            <label for="curVal">{currVal}</label>
                            <br />
                        </>
                    );
                })}

            </div>
        </>
    )
}

export default RadioQuestion
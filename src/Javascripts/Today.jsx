import React, { useState, useEffect } from "react";

export let highestPushUps = 0; // Define the highestPushUps variable at the top-level scope
export default function Today() {
    const storedPushUps = localStorage.getItem("pushUpCount");
    const initialPushUps = storedPushUps ? parseInt(storedPushUps) : 0;
    const [currentPushUps, setCurrentPushUps] = useState(initialPushUps);

    useEffect(() => {
        // Update the localStorage whenever currentPushUps changes
        localStorage.setItem("pushUpCount", currentPushUps.toString());

        // Update the highestPushUps if the current value surpasses it
        if (currentPushUps > highestPushUps) {
            highestPushUps = currentPushUps;
        }
    }, [currentPushUps]);

    const CurrentPU = (props) => {
        return <h1 className="todayCount">{props.currentPushUps}</h1>;
    };

    function handleChange(operation) {
        if (operation === "increase") {
            setCurrentPushUps(currentPushUps + 1);
        }
        else if (operation === "decrease") { setCurrentPushUps(currentPushUps - 1); }
        else { console.error("error during increment/decrement"); }
    }
    const ButtonLayout = () => {
        return (
            <>
                <button onClick={() => handleChange("increase")} className="increase"> + </button>
                <button onClick={() => handleChange("decrease")} className="decrease"> - </button>
            </>
        );
    };

    return (
        <div className="renderToday">
            <CurrentPU currentPushUps={currentPushUps} />
            <ButtonLayout />
        </div>
    );
}

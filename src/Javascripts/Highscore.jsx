import React from "react";
import Today, { highestPushUps } from "./Today.jsx";

export default function Highscore() {
    return (
        <>
            <h1> Your best Score: </h1>
            <h1 style={{ fontSize: '10vh', margin: '0' }}>{highestPushUps}</h1>
        </>
    );
}
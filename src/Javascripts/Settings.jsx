import React from "react";

export default function Settings() {
    return (
        <div className="settingsContainer">
            <button onClick={() => { localStorage.clear() }}> clear Chache </button>
            <button> <a href="https://www.instagram.com/noah.snbr/" > contact me </a> </button>
            <button> <a href="https://github.com/noahSNBR/PuchUpCoach-v3" > source code </a> </button>
            <button> Version 3.0.0 </button>
        </div>
    );
}
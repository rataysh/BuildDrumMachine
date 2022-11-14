/** @format */
import React, {useEffect, useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {sounds} from "./components/sound";

function App() {
    const [showSound, setShowSound] = useState("");

    const playSound = (id) => {
        const audio = document.getElementById(id);
        audio.play();
        setShowSound(id);
    };

    useEffect(() => {
        document.addEventListener("keydown", (event) => {
            playSound(event.key.toUpperCase());
        });
    }, []);
    return (
        <>
            <body id='drum-machine' className='app'>
                <div id='display'>
                    {" "}
                    <div className='window'>
                        <span style={{color: "#FFE869"}}>{showSound}</span>
                    </div>
                </div>
                <div className='sound-bar'>
                    {sounds.map((sound) => {
                        return (
                            <button
                                id={sound.url}
                                className='drum-pad'
                                onClick={() => playSound(sound.name)}>
                                {sound.name}
                                <audio
                                    src={sound.url}
                                    className='clip'
                                    id={sound.name}></audio>
                            </button>
                        );
                    })}
                </div>
            </body>
        </>
    );
}

export default App;

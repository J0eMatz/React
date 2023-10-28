import React, { useState } from "react";
import Episode from "../Episode/Episode";

export default function EpisodeBrowser(props) {
    const {episodes} = props;

    const [activeEpisode, setActiveEpisode]=useState(0);

    const prevEpisode = () => {
        if (activeEpisode > 0){
            setActiveEpisode(activeEpisode - 1);
        }else {
            alert ("No more Episode");
        }
    }

    const nextEpisode = () =>{
        if (activeEpisode < episodes.length - 1){
            setActiveEpisode(activeEpisode + 1);
        }else{
            alert ("No more episodes")
        }
    }

    return (
        <React.Fragment>
            <Episode episode ={episodes[activeEpisode]}/>
            <button onClick={prevEpisode}>PREV</button>
            <button onClick={nextEpisode}>NEXT</button>
        </React.Fragment>
    );
}
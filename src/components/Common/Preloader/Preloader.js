import React from 'react';
import PreloaderSVG from "../../../Images/LoaderSVG/Spin-1.1s-204px.svg";

function Preloader(props) {
    return (
        <div>
            <img src={PreloaderSVG} alt="Preloader" style={{width: '200px', height: "200px"}} />
        </div>
    )
}

export default Preloader;

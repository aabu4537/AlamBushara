import React, { useEffect } from 'react';
import { preLoaderAnim } from '../animations';
import './preloader.css'

const PreLoader = () => {

    useEffect(()=>{
        preLoaderAnim();
    },[]);

    return (
        <div className='preloader'>
            <div className='texts-container'>
                <span> Front-End,</span>
                <span> Back-End, </span>
                <span>Software Developer.</span>
            </div>
        </div>
    )
}

export default PreLoader
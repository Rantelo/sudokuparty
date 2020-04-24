import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import './NotStarted.scss';
import CountDown from '../components/CountDown';
import Button from '../components/Button'

function NotStarted() {
    let { id } = useParams();
    const [timeIsReady, setIsReady] = useState(false);

    function createImage() {
        
    }

    return(
        id === "0" && !timeIsReady && <div className="page page-not-started">
            <div className="container">
                <p>Party starts in:</p>
                <CountDown
                    hours={1}
                    minutes={20}
                    seconds={12}
                    setIsReady={setIsReady}
                />

                <div className="wrapper-btn">
                    <Button 
                        onClick={createImage}
                        iconEl = {<i style={{color: 'green'}} className="fab fa-whatsapp"/>}
                    >
                        Share
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default NotStarted;
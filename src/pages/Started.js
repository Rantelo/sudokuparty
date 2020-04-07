import React from 'react';
import { useParams } from 'react-router-dom';

function Started() {
    let { id } = useParams();
    return(
        id === "1" && <div className="page page-started">
            Started
        </div>
    );
}

export default Started;
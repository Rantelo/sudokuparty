import React from 'react';
import { useParams } from "react-router-dom";

function NotStarted() {
    let { id } = useParams();
    return(
        id === "0" && <div className="page page-not-started">
            NotStarted
        </div>
    );
}

export default NotStarted;
import React from 'react';
import './Landing.scss';
import Button from '../components/Button'
import {useHistory} from 'react-router-dom';

function Landing() {
    const history = useHistory();
    
    return(
        <div className="page page-landing">
            <div className="container">
                <h1>Sudoku Party</h1>
    
                <div className="wrapper-btn">
                    <Button onClick={() => history.push('/new')}>
                        New Party
                    </Button>
                    <Button onClick={() => history.push('/edit')}>
                        Edit Party
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Landing;
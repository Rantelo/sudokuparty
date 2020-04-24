import React, { useState } from 'react';
import './New.scss';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom';
import Timekeeper from 'react-timekeeper';
import DifficultySelector from '../components/DifficultySelector';

function New() {
    const history = useHistory();
    const [time, setTime] = useState( formatDate( new Date() ) );
    const [selected, setSelected] = useState(0);

    const optionsDifficultySelector = [
        "Easy",
        "Medium",
        "Difficult"
    ]

    function handleOnSubmit(e) {
        e.preventDefault();
        console.log( optionsDifficultySelector[selected], time )
        history.push('/party/0');
    }


    function formatDate(date) {
        let hour = date.getHours();
        let minute = date.getMinutes();

        return {hour, minute};
    }

    return(
        <div className="page page-new">
            <div className="container">
                <h1>Sudoku Party</h1>

                <form action="" onSubmit={handleOnSubmit}>
                    <Timekeeper
                        time={time}
                        onChange={(newTime) => setTime({hour: newTime.hour, minute: newTime.minute})}
                        switchToMinuteOnHourSelect
                        hour24Mode
                    />

                    <DifficultySelector
                        options = {optionsDifficultySelector}
                        setter = {setSelected}
                    />
    
                    <div className="wrapper-btn">
                        <Button >
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default New;
import React, {useState} from 'react';
import './Edit.scss';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom';
import Timekeeper from 'react-timekeeper';
import DifficultySelector from '../components/DifficultySelector';
import SearchBar from '../components/SearchBar';

function Edit() {
    const history = useHistory();
    const [time, setTime] = useState( formatDate( new Date() ) );
    const [selected, setSelected] = useState(0);

    const[partyCode, setPartyCode] = useState('');
    const [isFound, setIsFound] = useState(false);

    const optionsDifficultySelector = [
        "Easy",
        "Medium",
        "Difficult"
    ]

    function handleOnSubmit(e) {
        e.preventDefault();
        history.push('/party/0');
    }

    function searchParty() {
        setIsFound((prevValue) => !prevValue);
        console.log(partyCode);
    }

    function handleSearchBarChange(e) {
        setPartyCode(e.target.value);
    }


    function formatDate(date) {
        let hour = date.getHours();
        let minute = date.getMinutes();

        return {hour, minute};
    }

    return(
        <div className="page page-edit">
            <div className="container">
                <h1>Sudoku Party</h1>

                <SearchBar
                    handleInputChange={handleSearchBarChange}
                    termSearch={partyCode}
                    onSearch={searchParty}
                />

                { isFound &&
                    <form action="" onSubmit={handleOnSubmit}>
                        <Timekeeper
                            time={time}
                            onChange={(newTime) => setTime({ hour: newTime.hour, minute: newTime.minute })}
                            switchToMinuteOnHourSelect
                            hour24Mode
                        />

                        <DifficultySelector
                            options={optionsDifficultySelector}
                            setter={setSelected}
                        />

                        <div className="wrapper-btn">
                            <Button >
                                Save
                        </Button>
                        </div>
                    </form>
                }
            </div>
        </div>
    );
}

export default Edit;
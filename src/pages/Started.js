import React from 'react';
import { useParams } from 'react-router-dom';

import Board from '../components/Board';
import NumberSelector from '../components/NumberSelector';

function Started() {
  const original = '100000000000000000000000000000000000000000000000000000000000000000000000000000001';
  const [current, setCurrent] = React.useState('1');
  const [numbers, setNumbers] = React.useState(original);

  const setCell = (idx) => {
    console.log('clicked', idx)
    let tempMatrix = [...numbers];
    tempMatrix[idx] = (tempMatrix[idx] === current) ? 0 : current;
    setNumbers(tempMatrix.join(''));
  }
  let { id } = useParams();
  return (
    (id === "1") && <div className="page page-started">
      <div className="sudoku-party">
        <Board
          original={original}
          numbers={numbers}
          setNumber={setCell}
        />
        <NumberSelector
          currentNumber={current}
          setter={setCurrent}
        />
      </div>
    </div>
  );
}

export default Started;
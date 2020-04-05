import React from 'react';

const Board = ({ numbers, setNumber }) => {
  const cols = [];
  let rows = [];

  numbers.split('').forEach((element, idx) => {
    rows.push(
      <div
        key={`col${idx}`}
        className="col"
        onClick={() => setNumber(idx)}
      >
        {(element === 0) ? "" : element}
      </div>
    );
    if ((idx + 1) % 9 === 0 || idx === numbers.length - 1) {
      cols.push(
        <div className="row" key={`row${idx}`} >
          {rows}
        </div>
      );
      rows = [];
    }
  });
  return (
    <div className="board">
  {cols}
    </div>
  )
}

export default Board;
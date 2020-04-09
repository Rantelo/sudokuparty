import React from 'react';

const Board = ({ original = '', numbers, setNumber }) => {
  const cols = [];
  let rows = [];

  numbers.split('').forEach((element, idx) => {
    rows.push(
      <div
        key={`col${idx}`}
        className={`col${(original[idx] !== '0') ? ' original' : ''}`}
        onClick={() => (original[idx] === '0') ? setNumber(idx): null}
      >
        {(element === '0') ? "" : element}
      </div>
    );
    if ((idx + 1) % 9 === 0 || idx === numbers.length - 1) {
      cols.push(
        <div className="row" key={`row${idx}`} > {rows} </div>
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
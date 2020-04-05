import React from 'react';

const NumberSelector = ({ currentNumber, setter }) => {
  return (
    <div className="current-select">
      {
        '1234567890'.split('').map(e => (
          <div
            key={`${e}-currentselect`}
            className={`${(e === currentNumber) ? "current" : ""}`}
            onClick={() => setter(e)}
          >
            {e}
          </div>
        ))
      }
    </div>
  )
}

export default NumberSelector;
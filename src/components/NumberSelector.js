import React from 'react';

const NumberSelector = ({ currentNumber, setter }) => {
  return (
    <div className="current-select">
      <div className="current-select__first">
        {
          '12345'.split('').map(e => (
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
      <div className="current-select__second">
        {
          '67890'.split('').map(e => (
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
    </div>
  )
}

export default NumberSelector;
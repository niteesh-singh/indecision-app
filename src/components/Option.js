import React from 'react';

const Option = (props) => {
    return (
        <div className="option">
            <p className="option__text">{props.count}. {props.optionText}</p>
        </div>
    );
}

export default Option;
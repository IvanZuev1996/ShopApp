import React from 'react';

const MyButton = ({ disabledCondition, title, handleClick }) => (
    <button
        className="btn-add-to-cart change-password-btn"
        disabled={disabledCondition}
        onClick={handleClick}
    >
        {title}
    </button>
);

export default MyButton;

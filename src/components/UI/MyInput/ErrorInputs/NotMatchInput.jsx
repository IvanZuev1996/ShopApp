import React from 'react';

const NotMatchInput = ({ condition }) => (
    <div>
        {condition && (
            <div className="not-valid-massange">Пароли не совпадают!</div>
        )}
    </div>
);

export default NotMatchInput;

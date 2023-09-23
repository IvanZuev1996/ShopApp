import React from 'react';

const EmptyInput = ({ element }) => (
    <div>
        {element.isDirty && element.isEmpty && (
            <div className="not-valid-massange">Поле не может быть пустым</div>
        )}
    </div>
);

export default EmptyInput;

import React from 'react';

interface ILabel {
    forInput: string | undefined, 
    value: string | number | readonly string[] | undefined, 
    className?: string | undefined,
    children?: JSX.Element | string
}

const Label = ({ forInput, value, className, children } : ILabel) => {
    return (
        <label htmlFor={forInput} className={`block font-medium text-sm text-gray-700 ` + className}>
            {value ? value : children}
        </label>
    );
}

export default Label;
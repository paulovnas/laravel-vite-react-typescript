import React from 'react';

interface ICheckbox {
    name: string | undefined,
    value: string | number | readonly string[] | undefined, 
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = ({ name, value, handleChange } : ICheckbox) => {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={(e) => handleChange(e)}
        />
    );
}

export default Checkbox;
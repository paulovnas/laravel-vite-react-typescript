import React, { useEffect, useRef } from 'react';

interface IInput {
    type?: React.HTMLInputTypeAttribute | undefined,
    name: string | undefined,
    value: string | number | readonly string[] | undefined,
    className: string | undefined,
    autoComplete?: string | undefined,
    required?: boolean,
    isFocused?: boolean,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
    type = 'text',
    name,
    value,
    className,
    autoComplete = 'off',
    required = false,
    isFocused = false,
    handleChange,
} : IInput) => {
    const input = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isFocused) {
            input.current?.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                className={
                    `border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}

export default Input;
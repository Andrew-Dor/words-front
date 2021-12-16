import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

interface IInputProps {
    value: string;
    inline?: boolean;
    placeholder?: string;
    type?: React.HTMLInputTypeAttribute;
    startIcon?: React.ReactElement;
    fullWidth?: boolean;
    className?: string;
    onChange?: (value: string) => void;
}

export const Input = ({
    value,
    type = 'text',
    inline,
    placeholder,
    startIcon,
    fullWidth,
    className,
    onChange,
}: IInputProps) => {
    const wrapperClasses = classnames({ inputWrapper: true }, { fullWidth }, { [`${className}`]: className });

    const inputClasses = classnames(
        {
            input: true,
        },
        { inline },
        { iconInput: !!startIcon },
        { passwordInput: type === 'password' },
    );

    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState<React.HTMLInputTypeAttribute>('text');

    useEffect(() => {
        if (type === 'password') {
            if (showPassword) {
                setInputType('text');
            } else {
                setInputType('password');
            }
        } else {
            setInputType(type);
        }
    }, [type, showPassword]);

    return (
        <div className={wrapperClasses}>
            <div className="startIcon">{startIcon}</div>
            <input
                type={inputType}
                className={inputClasses}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange && onChange(e.target.value)}
            />
            <span className="focusBorder" />
            {type === 'password' &&
                (showPassword ? (
                    <MdVisibilityOff onClick={() => setShowPassword(false)} className="passwordIcon" />
                ) : (
                    <MdVisibility onClick={() => setShowPassword(true)} className="passwordIcon" />
                ))}
        </div>
    );
};

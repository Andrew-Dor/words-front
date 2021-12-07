import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

interface IInputProps {
    value: string;
    inline?: boolean;
    placeholder?: string;
    type?: React.HTMLInputTypeAttribute;
    startIcon?: React.ReactElement;
    onChange?: (value: string) => void;
}

export const Input = ({ value, type = 'text', inline, placeholder, startIcon, onChange }: IInputProps) => {
    const classes = classnames(
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
        <div className="inputWrapper">
            <div className="startIcon">{startIcon}</div>
            <input
                type={inputType}
                className={classes}
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

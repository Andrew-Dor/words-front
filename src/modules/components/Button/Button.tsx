import React from 'react';
import { TElementSize } from '../../core/types';
import './Button.scss';

interface IButtonProps {
    text: string;
    size: TElementSize;
}

export const Button = ({ text, size }: IButtonProps) => {
    return (
        <button className="button" type="button">
            {text}
        </button>
    );
};

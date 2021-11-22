import React from 'react';
import { TElementSize } from '../../core/types';

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

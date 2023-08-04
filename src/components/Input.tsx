import { memo, FC } from 'react';
import { TextField } from '@mui/material';
import { IInputProps } from '../types';

export const Input: FC<IInputProps> = memo(
    ({ sx, variant, placeholder, type, autoComplete, value, size, name, inputRef, onChange }) => {
        return (
            <TextField
                sx={sx}
                onChange={onChange}
                variant={variant}
                placeholder={placeholder}
                type={type}
                autoComplete={autoComplete}
                size={size}
                ref={inputRef}
            />
        );
    }
);

export default Input;

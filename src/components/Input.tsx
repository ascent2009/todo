import { memo, FC } from 'react';
import { TextField } from '@mui/material';
import { IInputProps } from '../types';

export const Input: FC<IInputProps> = memo(
    ({ sx, onChange, variant, placeholder, type, autoComplete, value, size, name }) => {
        return (
            <TextField
                sx={sx}
                onChange={onChange}
                variant={variant}
                placeholder={placeholder}
                type={type}
                autoComplete={autoComplete}
                value={value}
                size={size}
                name={name}
            />
        );
    }
);

export default Input;

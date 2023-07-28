import { memo, FC } from 'react';
import { Button } from '@mui/material';
import { IButtonProps } from '../types';

const ButtonComponent: FC<IButtonProps> = ({ type, variant, color, title, onClick, sx, id, disabled }) => {
    return (
        <Button type={type} variant={variant} color={color} sx={sx} onClick={onClick} id={id} disabled={disabled}>
            {title}
        </Button>
    );
};

export default memo(ButtonComponent);

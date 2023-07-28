import { memo, FC } from 'react';
import { Checkbox } from '@mui/material';
import { ICheckboxProps } from '../types';

export const CheckBox: FC<ICheckboxProps> = memo(({ sx, onChange, value, id, checked }) => {
    return <Checkbox sx={sx} onChange={onChange} value={value} id={id} checked={checked} />;
});

export default CheckBox;

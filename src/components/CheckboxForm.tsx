import { memo, FC } from 'react';
import { FormGroup, FormControlLabel, checkboxClasses } from '@mui/material';
import CheckBox from './Checkbox';
import { IFormProps } from '../types';

export const CheckboxForm: FC<IFormProps> = ({ id, title, checked, onChange, value }) => {
    return (
        <FormGroup>
            <FormControlLabel
                control={
                    <CheckBox
                        onChange={onChange}
                        sx={{
                            color: 'white',
                            [`&, &.${checkboxClasses.checked}`]: {
                                color: 'white',
                            },
                        }}
                        value={value}
                        id={id}
                        checked={checked}
                    />
                }
                label={title}
                sx={{
                    color: 'white',
                    textDecoration: checked ? 'line-through 0.5px #1976d2' : null,
                    '& .MuiFormControlLabel-label': {
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '1.5rem',
                        textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                    },
                }}
            />
        </FormGroup>
    );
};

export default memo(CheckboxForm);

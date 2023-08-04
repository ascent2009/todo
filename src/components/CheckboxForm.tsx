import { memo, FC } from 'react';
import { FormGroup, FormControlLabel, checkboxClasses } from '@mui/material';
import CheckBox from './Checkbox';
import { IFormProps } from '../types';

export const CheckboxForm: FC<IFormProps> = ({ id, title, checked, onChange, value }) => {
    return (
        <FormGroup
            sx={{
                marginBottom: '-2px',
                width: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            }}
        >
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
                label={title.length > 40 ? `${title.substring(0, 40)}...` : title}
                sx={{
                    width: '80%',
                    color: 'white',
                    textDecoration: checked ? 'line-through 0.5px darkgreen' : null,
                    textOverflow: 'ellipsis',
                    '& .MuiFormControlLabel-label': {
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '1.5rem',
                        textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',

                        '& .css-ahj2mt-MuiTypography-root': {
                            textOverflow: 'ellipsis',
                        },
                    },
                }}
            />
        </FormGroup>
    );
};

export default memo(CheckboxForm);

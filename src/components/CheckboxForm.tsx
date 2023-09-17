import { memo, FC } from 'react';
import { FormGroup, FormControlLabel, checkboxClasses, Tooltip } from '@mui/material';
import CheckBox from './Checkbox';
import { IFormProps } from '../types';

export const CheckboxForm: FC<IFormProps> = ({ id, title, checked, onChange, value }) => {
    return (
        <FormGroup
            sx={{
                marginBottom: '-2px',
                overflow: 'hidden',
                width: '100%',
            }}
        >
            <Tooltip title={title} placement='bottom-start' arrow>
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
                    label={title.length > 20 ? `${title.substring(0, 15)}...` : title}
                    sx={{
                        color: 'white',
                        textDecoration: checked ? 'line-through 0.5px darkgreen' : null,
                        '& .MuiFormControlLabel-label': {
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '1.5rem',
                            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                        },
                        '& .MuiFormControlLabel-root .MuiFormControlLabel-label': {
                            wordWrap: 'nowrap',
                        },
                    }}
                />
            </Tooltip>
        </FormGroup>
    );
};

export default memo(CheckboxForm);

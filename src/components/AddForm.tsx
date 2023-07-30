import { memo, FC } from 'react';
import { Box, Grid } from '@mui/material';
import Input from './Input';
import ButtonComponent from './Button';
import { IAddFormProps } from '../types';

const AddForm: FC<IAddFormProps> = ({ onSubmit, onChange, value }) => {
    return (
        <Box component='form' onSubmit={onSubmit}>
            <Grid container spacing={2} alignItems='center' justifyContent='center' m='auto' p={0}>
                <Grid item xs={3}>
                    <Input
                        onChange={onChange}
                        variant='outlined'
                        placeholder='новая задача...'
                        type='text'
                        sx={{
                            background: 'white',
                            borderRadius: '7px',
                            outline: 'none',
                            width: '100%',
                            fontSize: '3rem',
                            input: { fontSize: '1.3rem', padding: '4px 10px' },
                        }}
                        autoComplete='off'
                        value={value}
                        size='small'
                        name='title'
                    />
                </Grid>
                <Grid item xs={2}>
                    <ButtonComponent
                        type='submit'
                        variant='contained'
                        color='primary'
                        title='Добавить'
                        sx={{ width: '70%' }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default memo(AddForm);

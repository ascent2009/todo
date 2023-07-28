import { memo, FC } from 'react';
import { Box, Grid } from '@mui/material';
import ButtonComponent from './Button';
import Input from './Input';
import { IEditTaskProps } from '../types';

const EditTask: FC<IEditTaskProps> = ({ title, id, editTask, handleEditTask, handleCancel, onChange }) => {
    return (
        <Box component='form' onSubmit={handleEditTask} sx={{ width: '300px' }}>
            <Grid item xs={2} sm={4} md={4} key={id}>
                <Grid item xs={3}>
                    <Input
                        onChange={onChange}
                        variant='outlined'
                        placeholder={title}
                        type='text'
                        sx={{ background: 'white', borderRadius: '4px', width: '228px' }}
                        autoComplete='off'
                        size='small'
                        name='title'
                    />
                </Grid>
                <Grid
                    container
                    item
                    xs={3}
                    spacing={2}
                    direction='row'
                    sx={{ width: '100%' }}
                    justifyContent='space-between'
                >
                    <Grid item xs={3} m={0}>
                        <ButtonComponent
                            type='button'
                            onClick={handleCancel}
                            variant='contained'
                            color='primary'
                            sx={{ width: '100px' }}
                            title='Отменить'
                        />
                    </Grid>
                    <Grid item xs={3} m={0}>
                        <ButtonComponent
                            type='submit'
                            variant='contained'
                            color='primary'
                            sx={{ width: '100px' }}
                            title='Сохранить'
                            disabled={editTask ? false : true}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default memo(EditTask);

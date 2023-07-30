import { memo, FC } from 'react';
import { Grid } from '@mui/material';
import ButtonComponent from './Button';
import Input from './Input';
import { IEditTaskProps } from '../types';

const EditTask: FC<IEditTaskProps> = ({ title, id, editTask, handleEditTask, handleCancel, onChange }) => {
    return (
        <Grid
            component='form'
            container
            spacing={2}
            p='0'
            m='auto'
            onSubmit={handleEditTask}
            sx={{ borderBottom: '1px white solid', paddingBottom: '1.5rem' }}
            width='45%'
            gap={2}
            direction='column'
            alignItems='flex-start'
        >
            <Grid item>
                <Input
                    onChange={onChange}
                    variant='outlined'
                    placeholder={`изменить ${title}...`}
                    type='text'
                    sx={{
                        background: 'transparent',
                        borderRadius: '7px',
                        width: '100%',
                        input: { fontSize: '1.4rem', color: '#fff', padding: '4px 10px', outline: 'none' },
                    }}
                    autoComplete='off'
                    size='small'
                    name='title'
                />
            </Grid>
            <Grid
                container
                item
                xs={3}
                spacing={4}
                direction='row'
                sx={{ width: '100%' }}
                justifyContent='flex-start'
                alignItems='center'
                gap={3}
            >
                <Grid item xs={3}>
                    <ButtonComponent
                        type='button'
                        onClick={handleCancel}
                        variant='contained'
                        color='primary'
                        sx={{ width: '100px' }}
                        title='Отменить'
                    />
                </Grid>
                <Grid item xs={3}>
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
    );
};

export default memo(EditTask);

import { memo, FC } from 'react';
import { Grid } from '@mui/material';
import ButtonComponent from './Button';
import { ITasksLists } from '../types';

const TasksLists: FC<ITasksLists> = ({ onClick }) => {
    return (
        <Grid container spacing={2} alignItems='center' justifyContent='center' m='2rem'>
            <Grid item xs={2}>
                <ButtonComponent
                    type='button'
                    onClick={onClick}
                    variant='contained'
                    color='primary'
                    sx={{ width: '70%' }}
                    id='all'
                    title='Все задачи'
                />
            </Grid>
            <Grid item xs={2}>
                <ButtonComponent
                    type='button'
                    onClick={onClick}
                    variant='contained'
                    color='primary'
                    sx={{
                        width: '70%',
                    }}
                    id='active'
                    title='Активные'
                />
            </Grid>
            <Grid item xs={2}>
                <ButtonComponent
                    type='button'
                    onClick={onClick}
                    variant='contained'
                    color='primary'
                    sx={{ width: '70%' }}
                    id='completed'
                    title='Завершенные'
                />
            </Grid>
        </Grid>
    );
};

export default memo(TasksLists);

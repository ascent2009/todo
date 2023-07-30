import { memo, FC } from 'react';
import { Grid } from '@mui/material';
import ButtonComponent from './Button';
import { ITasksLists } from '../types';

const TasksLists: FC<ITasksLists> = ({ onClick, tab }) => {
    return (
        <Grid
            container
            spacing={2}
            alignItems='center'
            justifyContent='center'
            mb='2rem'
            p={0}
            width='calc(100% + 16px)'
        >
            <Grid item xs={2}>
                <ButtonComponent
                    type='button'
                    onClick={onClick}
                    variant='contained'
                    color='primary'
                    sx={{ minWidth: '70%', background: tab === 'all' ? 'darkblue' : '' }}
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
                        minWidth: '70%',
                        background: tab === 'active' ? 'darkblue' : '',
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
                    sx={{ minWidth: '70%', background: tab === 'completed' ? 'darkblue' : '' }}
                    id='completed'
                    title='Завершенные'
                />
            </Grid>
        </Grid>
    );
};

export default memo(TasksLists);

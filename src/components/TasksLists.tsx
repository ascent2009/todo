import { memo, FC } from 'react';
import { Grid } from '@mui/material';
import ButtonComponent from './Button';
import { ITasksLists } from '../types';

const TasksLists: FC<ITasksLists> = memo(({ handleListId, tab, tasks }) => {
    const active = tasks.filter(task => !task.isCompleted).length;
    const completed = tasks.filter(task => task.isCompleted).length;

    const onChooseList = (id: string) => {
        handleListId(id);
    };

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
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => onChooseList((e.target as HTMLElement).id)}
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
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => onChooseList((e.target as HTMLElement).id)}
                    variant='contained'
                    color='primary'
                    sx={{
                        minWidth: '70%',
                        background: tab === 'active' ? 'brown' : '',
                    }}
                    id='active'
                    title={active ? `Активные (${active})` : 'Активные'}
                />
            </Grid>
            <Grid item xs={2}>
                <ButtonComponent
                    type='button'
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => onChooseList((e.target as HTMLElement).id)}
                    variant='contained'
                    color='primary'
                    sx={{ minWidth: '70%', background: tab === 'completed' ? 'darkgreen' : '' }}
                    id='completed'
                    title={completed ? `Завершенные (${completed})` : 'Завершенные'}
                />
            </Grid>
        </Grid>
    );
});

export default memo(TasksLists);

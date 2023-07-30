import { memo, FC } from 'react';
import { Grid } from '@mui/material';
import ButtonComponent from './Button';
import CheckboxForm from './CheckboxForm';
import { ITaskProps, TaskType } from '../types';

const Task: FC<ITaskProps> = ({ id, title, isCompleted, handleEditTaskId, handleDeleteTask, onChange, tasks }) => {
    const onDelete = (id: TaskType['id']) => {
        const deletedTasks = tasks.filter(task => task.id !== id);
        handleDeleteTask(deletedTasks);
    };

    return (
        <Grid
            item
            container
            spacing={2}
            key={id}
            p='0'
            m='auto'
            sx={{ borderBottom: '1px white solid', paddingBottom: '1.5rem' }}
            width='45%'
            gap={2}
        >
            <CheckboxForm id={id} title={title} onChange={onChange} checked={isCompleted} value='white' />
            <Grid container spacing={4} alignItems='center' justifyContent='flex-start' gap={3}>
                <Grid item xs={3}>
                    <ButtonComponent
                        type='button'
                        onClick={() => handleEditTaskId(id)}
                        variant='contained'
                        color='primary'
                        title='Изменить'
                        sx={{ minWidth: '70%' }}
                    />
                </Grid>
                <Grid item xs={2}>
                    <ButtonComponent
                        // onClick={e => handleDeleteTask(e, id)}
                        onClick={() => onDelete(id)}
                        variant='contained'
                        color='primary'
                        type='button'
                        title='Удалить'
                        sx={{ minWidth: '70%' }}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default memo(Task);

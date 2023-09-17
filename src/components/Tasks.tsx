import { memo, FC, useCallback } from 'react';
import { Grid } from '@mui/material';
import Task from './Task';

import { ITasksProps, TaskType } from '../types';

const Tasks: FC<ITasksProps> = memo(({ tasks, tab, handleEditTask, handleDeleteTask, handleCheckboxChange }) => {
    const handleTasksList = useCallback((tab: string, tasks: TaskType[]) => {
        switch (tab) {
            case 'all':
                return tasks;
            case 'active':
                return tasks.filter(task => !task.isCompleted);
            case 'completed':
                return tasks.filter(task => task.isCompleted);
            default:
                return tasks;
        }
    }, []);

    const sortedTasks = handleTasksList(tab, tasks);

    return (
        <Grid container spacing={2} direction='column' alignItems='center' justifyContent='flex-start' mt='1rem'>
            {sortedTasks.map(({ id, title, isCompleted }) => {
                return (
                    <Task
                        id={id}
                        tasks={tasks}
                        title={title}
                        isCompleted={isCompleted}
                        handleCheckboxChange={handleCheckboxChange}
                        handleDeleteTask={handleDeleteTask}
                        key={id}
                        handleEditTask={handleEditTask}
                    />
                );
            })}
        </Grid>
    );
});

export default Tasks;

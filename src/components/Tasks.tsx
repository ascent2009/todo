import { memo, FC } from 'react';
import { Grid } from '@mui/material';
import EditTask from './EditTask';
import Task from './Task';

import { ITasksProps } from '../types';

const Tasks: FC<ITasksProps> = ({
    tasks,
    tab,
    editTask,
    editTaskId,
    handleEditTask,
    handleCancel,
    handleEditTaskId,
    handleInputEdit,
    handleTasksList,
    handleDeleteTask,
    handleCheckboxChange,
}) => {
    const sortedTasks = handleTasksList(tab, tasks);

    return (
        <Grid container spacing={3} direction='column' alignItems='center' justifyContent='flex-start' mt='1rem'>
            {sortedTasks.map(({ id, title, isCompleted }) => {
                if (id === editTaskId) {
                    return (
                        <EditTask
                            id={id}
                            title={title}
                            editTask={editTask}
                            handleEditTask={handleEditTask}
                            handleCancel={handleCancel}
                            onChange={handleInputEdit}
                        />
                    );
                }
                return (
                    <Task
                        id={id}
                        title={title}
                        isCompleted={isCompleted}
                        onChange={handleCheckboxChange}
                        handleEditTaskId={handleEditTaskId}
                        handleDeleteTask={handleDeleteTask}
                    />
                );
            })}
        </Grid>
    );
};

export default memo(Tasks);
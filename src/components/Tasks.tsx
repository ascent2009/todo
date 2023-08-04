import { memo, FC } from 'react';
import { Grid } from '@mui/material';
// import EditTask from './EditTask';
import Task from './Task';

import { ITasksProps, TaskType } from '../types';

const Tasks: FC<ITasksProps> = ({
    tasks,
    tab,
    // editTask,
    // editTaskId,
    handleEditTask,
    // handleCancel,
    // handleEditTaskId,
    handleInput,
    // handleTasksList,
    handleDeleteTask,
    // handleInputEditTask,
    handleCheckboxChange,
    inputRef,
}) => {
    const handleTasksList = (tab: string, tasks: TaskType[]) => {
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
    };

    const sortedTasks = handleTasksList(tab, tasks);

    return (
        <Grid container spacing={2} direction='column' alignItems='center' justifyContent='flex-start' mt='1rem'>
            {sortedTasks.map(({ id, title, isCompleted }) => {
                // if (id === editTaskId) {
                //     return (
                //         <EditTask
                //             id={id}
                //             title={title}
                //             editTask={editTask}
                //             handleEditTask={handleEditTask}
                //             handleCancel={handleCancel}
                //             // onChange={handleInputEdit}
                //             handleInputEdit={handleInputEdit}
                //             key={id}
                //             inputRef={inputRef}
                //         />
                //     );
                // }
                return (
                    <Task
                        id={id}
                        tasks={tasks}
                        title={title}
                        isCompleted={isCompleted}
                        onChange={handleCheckboxChange}
                        // handleEditTaskId={handleEditTaskId}
                        handleDeleteTask={handleDeleteTask}
                        key={id}
                        // editTask={editTask}
                        // editTaskId={editTaskId}
                        handleEditTask={handleEditTask}
                        // handleCancel={handleCancel}
                        // onChange={handleInputEdit}
                        handleInput={handleInput}
                        inputRef={inputRef}
                    />
                );
            })}
        </Grid>
    );
};

export default memo(Tasks);

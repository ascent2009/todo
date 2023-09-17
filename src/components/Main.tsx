import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { Box } from '@mui/material';
import AddForm from './AddForm';
import TasksNumber from './TasksNumber';
import TasksLists from './TasksLists';
import Tasks from './Tasks';
import { TaskType } from '../types';

const Container = memo(() => {
    const formRef = useRef<any>();
    const [tab, setTab] = useState('all');
    const [tasks, setTasks] = useState<TaskType[]>(JSON.parse(localStorage.getItem('tasks') || '[]'));

    useEffect(() => localStorage.setItem('tasks', JSON.stringify(tasks)), [tasks]);

    const resetInput = () => formRef.current.reset();

    const handleAddTask = useCallback((task: TaskType) => {
        setTasks(prev => [...prev, task]);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        resetInput();
    }, []);

    const handleCheckboxChange = useCallback((arr: TaskType[]) => {
        setTasks(arr);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, []);

    const handleListId = (id: string) => {
        setTab(id);
    };

    const handleEditTask = (arr: TaskType[]) => {
        setTasks(arr);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        resetInput();
    };

    const handleDeleteTask = (arr: TaskType[]) => {
        setTasks(arr);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    return (
        <Box>
            <Box>
                <AddForm handleAddTask={handleAddTask} formRef={formRef} />
            </Box>
            <Box>
                <TasksNumber
                    tasks={tasks}
                    styles={{ color: tab === 'all' ? '' : tab === 'active' ? 'brown' : 'darkgreen', fontSize: '2rem' }}
                    tab={tab}
                />
                <TasksLists handleListId={handleListId} tab={tab} tasks={tasks} />
                <Tasks
                    tasks={tasks}
                    tab={tab}
                    handleEditTask={handleEditTask}
                    handleCheckboxChange={handleCheckboxChange}
                    handleDeleteTask={handleDeleteTask}
                />
            </Box>
        </Box>
    );
});

export default Container;

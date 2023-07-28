import React, { useState, useEffect } from 'react';
import { SApp } from './assets/styles/app.styles';
import Header from './components/Header';
import TasksNumber from './components/TasksNumber';
import AddForm from './components/AddForm';
import TasksLists from './components/TasksLists';
import Tasks from './components/Tasks';
import { TaskType, EditTaskType } from './types';

function App() {
    const initialValues: TaskType = {
        id: 0,
        title: '',
        isCompleted: false,
    };
    const [tab, setTab] = useState('');
    const [task, setTask] = useState(initialValues);
    const [tasks, setTasks] = useState<TaskType[]>(JSON.parse(localStorage.getItem('tasks') || '[]'));
    const [editTaskId, setEditTaskId] = useState<number | null>(null);
    const [editTask, setEditTask] = useState<EditTaskType | null>({ title: '' });

    useEffect(() => localStorage.setItem('tasks', JSON.stringify(tasks)), [tasks]);

    const handleInputAdd = (value: string) => {
        setTask({ ...task, title: value });
    };

    const handleInputEdit = (value: string) => {
        setEditTask({ ...editTask, title: value });
    };

    const resetInput = () => {
        setTask(initialValues);
    };

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        let id = tasks.length + 1;
        if (!task.title) return;
        setTasks([...tasks, { ...task, id: id }]);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        resetInput();
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, id: TaskType['id'], isChecked: boolean) => {
        const index = tasks.findIndex(task => task.id === id);
        const checkedTasks = tasks.slice();
        checkedTasks.splice(index, 1, { ...tasks[index], isCompleted: isChecked });
        setTasks(checkedTasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const handleListId = (id: string) => {
        setTab(id);
    };

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

    const handleEditTaskId = (id: TaskType['id']) => {
        setEditTaskId(id);
    };

    const handleCancel = () => {
        setEditTask(null);
        setEditTaskId(null);
    };

    const handleEditTask = () => {
        setTasks(
            tasks.map(task => {
                if (task.id === editTaskId) {
                    return { ...task, ...editTask };
                }
                return task;
            })
        );
        localStorage.setItem('tasks', JSON.stringify(tasks));
        handleCancel();
    };

    const handleDeleteTask = (e: React.MouseEvent<HTMLButtonElement>, id: TaskType['id']) => {
        setTasks(tasks.filter(task => task.id !== id));
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    return (
        <SApp>
            <Header />
            <AddForm onSubmit={handleAddTask} onChange={e => handleInputAdd(e.target.value)} value={task.title} />
            <TasksNumber tasks={tasks} />
            <TasksLists onClick={e => handleListId((e.target as HTMLElement).id)} />
            <Tasks
                tasks={tasks}
                tab={tab}
                editTask={editTask}
                editTaskId={editTaskId}
                handleEditTask={handleEditTask}
                handleCancel={handleCancel}
                handleInputEdit={e => handleInputEdit(e.target.value)}
                handleCheckboxChange={e => handleCheckboxChange(e, +e.target.id, e.target.checked)}
                handleEditTaskId={handleEditTaskId}
                handleDeleteTask={handleDeleteTask}
                handleTasksList={handleTasksList}
            />
        </SApp>
    );
}

export default App;

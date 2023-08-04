import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { SApp } from './assets/styles/app.styles';
import Header from './components/Header';
import TasksNumber from './components/TasksNumber';
import AddForm from './components/AddForm';
import TasksLists from './components/TasksLists';
import Tasks from './components/Tasks';
import { TaskType } from './types';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const initialValues: TaskType = {
        id: '',
        title: '',
        isCompleted: false,
    };
    const formRef = useRef<any>();
    const inputRef = useRef('');
    const [tab, setTab] = useState('all');
    const [task] = useState(initialValues);
    const [tasks, setTasks] = useState<TaskType[]>(JSON.parse(localStorage.getItem('tasks') || '[]'));

    useEffect(() => localStorage.setItem('tasks', JSON.stringify(tasks)), [tasks]);

    const handleInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            inputRef.current = e.target.value;
        },
        [inputRef]
    );

    const resetInput = () => {
        formRef.current.reset();
        inputRef.current = '';
    };

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        let id = uuidv4();
        if (!inputRef.current) return;
        setTasks([...tasks, { ...task, title: inputRef.current, id: id }]);
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

    const handleEditTask = (id: TaskType['id']) => {
        if (!inputRef.current) return;
        setTasks(
            tasks.map(task => {
                if (task.id === id) {
                    return { ...task, title: inputRef.current };
                }
                return task;
            })
        );
        localStorage.setItem('tasks', JSON.stringify(tasks));
        resetInput();
    };

    const handleDeleteTask = (arr: TaskType[]) => {
        setTasks(arr);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    return (
        <SApp>
            <Header />
            <AddForm
                onSubmit={handleAddTask}
                handleInput={handleInput}
                value={task.title}
                inputRef={inputRef}
                formRef={formRef}
            />
            <TasksNumber
                tasks={tasks}
                styles={{ color: tab === 'all' ? '' : tab === 'active' ? 'brown' : 'darkgreen', fontSize: '2rem' }}
                tab={tab}
            />
            <TasksLists onClick={e => handleListId((e.target as HTMLElement).id)} tab={tab} tasks={tasks} />
            <Tasks
                tasks={tasks}
                tab={tab}
                handleEditTask={handleEditTask}
                handleInput={handleInput}
                handleCheckboxChange={e => handleCheckboxChange(e, e.target.id, e.target.checked)}
                handleDeleteTask={handleDeleteTask}
                inputRef={inputRef}
            />
        </SApp>
    );
}

export default memo(App);

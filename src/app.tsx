import React, { useState, useEffect } from 'react';
import { SApp } from './assets/styles/app.styles';
import { STitle } from './assets/styles/title.styles';
import {
    Box,
    Grid,
    TextField,
    Button,
    FormGroup,
    FormControlLabel,
    Checkbox,
    checkboxClasses,
    Dialog,
} from '@mui/material';

type Task = { id: number; title: string; isEdit: boolean; index: number; isCompleted: boolean };

function App() {
    const initialValues: Task = {
        id: 0,
        title: '',
        isEdit: false,
        index: 0,
        isCompleted: false,
    };
    // const [change, setChange] = useState('');
    const [task, setTask] = useState(initialValues);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [showEditInput, setShowEditInput] = useState(false);

    const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const value = target.value;
        // setTask(prev => ({ ...prev, title: value }));
        setTask({ ...task, title: value });
    };

    // useEffect(() => setTasks([...tasks, task]), []);

    const resetInput = () => {
        // setChange('');
        setTask(initialValues);
    };

    const addTask = (e: React.FormEvent) => {
        e.preventDefault();
        let taskID = Math.round(Math.random() * 1000);
        if (!task.title) return;
        setTasks([...tasks, { ...task, id: taskID }]);
        if (task.isEdit) {
            const targetID = parseInt((e!.target as HTMLElement).id);
            const idx = tasks.findIndex(task => targetID === task.id);
            const editedTasks = tasks;
            editedTasks.splice(idx, 1, {
                ...task,
                isEdit: false,
            });
            setTasks(editedTasks);
            console.log(targetID, idx, editedTasks);
        }
        resetInput();
    };

    const handleEditTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        const targetID = parseInt((e!.target as HTMLElement).id);
        const findEditTask = tasks.find(task => targetID === task.id);
        const findIdx = tasks.findIndex(task => targetID === task.id);
        const editTasks = tasks;
        editTasks.splice(findIdx, 1, { ...(findEditTask as Task), isEdit: true });
        setTasks(editTasks);
    };

    // const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.checked) {
    //         setTask(prev => ({ ...prev, isCompleted: true }));
    //     }
    // };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, isChecked: boolean) => {
        const targetID = parseInt((e!.target as HTMLElement).id);
        // const findIdx = tasks.findIndex(task => targetID === task.id);
        const findIdx = tasks.findIndex(task => targetID === task.id);
        const checkedTasks = tasks.slice();
        checkedTasks.splice(findIdx, 1, { ...tasks[findIdx], isCompleted: isChecked });
        // setTasks(checkedTasks);
        console.log(isChecked, tasks);
    };

    const handleDisplayCompletedTasks = () => {
        const completedTasks = tasks.filter(task => task.isCompleted === true);
        setTasks(completedTasks);
    };

    const handleDisplayActiveTasks = () => {
        const activeTasks = tasks.filter(task => task.isCompleted !== true);
        setTasks(activeTasks);
    };

    const handleRemoveTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = parseInt((e!.target as HTMLElement).id);
        setTasks(tasks.filter(task => target !== task.id));
    };

    return (
        <SApp>
            <STitle>Список задач</STitle>

            <Box component='form' onSubmit={addTask}>
                <Grid container spacing={2} alignItems='center' justifyContent='center' mt='2rem'>
                    <Grid item xs={3}>
                        <TextField
                            onChange={handleInputChange}
                            variant='outlined'
                            placeholder='Введите задачу'
                            type='text'
                            sx={{ background: 'white', borderRadius: '4px', width: '100%' }}
                            autoComplete='off'
                            value={task.title}
                            size='small'
                            name='add'
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            type='submit'
                            /*onClick={addTask}*/ variant='contained'
                            color='primary'
                            sx={{ width: '70%' }}
                        >
                            Добавить
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Grid container spacing={2} alignItems='center' justifyContent='center' mt='2rem'>
                <Grid item xs={2}>
                    <Button onClick={() => {}} variant='contained' color='primary' sx={{ width: '70%' }}>
                        Все задачи
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        onClick={handleDisplayActiveTasks}
                        variant='contained'
                        color='primary'
                        sx={{ width: '70%' }}
                    >
                        Активные
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        onClick={handleDisplayCompletedTasks}
                        variant='contained'
                        color='primary'
                        sx={{ width: '70%' }}
                    >
                        Завершенные
                    </Button>
                </Grid>
            </Grid>
            <STitle>Количество задач: {tasks.length}</STitle>
            <Grid container spacing={3} direction='column' alignItems='center' justifyContent='flex-start' mt='1rem'>
                {tasks.map(({ id, title, isEdit, isCompleted }) => {
                    return (
                        <Grid item xs={2} sm={4} md={4} key={id}>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            onChange={e => handleCheckboxChange(e, e.target.checked)}
                                            sx={{
                                                color: 'white',
                                                [`&, &.${checkboxClasses.checked}`]: {
                                                    color: 'white',
                                                },
                                            }}
                                            value='white'
                                            id={id.toString()}
                                            checked={isCompleted}
                                        />
                                    }
                                    label={`${id} ${title}`}
                                    sx={{ color: 'white', fontSize: '1.2rem' }}
                                />
                            </FormGroup>

                            {isEdit ? (
                                <Box component='form' /*onSubmit={addTask}*/ /*sx={{ display: 'none' }}*/>
                                    <TextField
                                        onChange={handleInputChange}
                                        variant='outlined'
                                        placeholder='Измените название задачи...'
                                        type='text'
                                        sx={{ background: 'white', borderRadius: '4px', width: '100%' }}
                                        autoComplete='off'
                                        // value={change}
                                        size='small'
                                        name='edit'
                                    />
                                    {/* <Button onClick={addTask} variant='contained' color='primary'>
                                    Сохранить
                                </Button> */}
                                    {/* <Button onClick={() => {}} variant='contained' color='primary'>
                                    Отменить
                                </Button> */}
                                </Box>
                            ) : null}

                            <Grid container spacing={2} alignItems='center' justifyContent='flex-start'>
                                <Grid item xs>
                                    <Button
                                        onClick={handleEditTask}
                                        variant='contained'
                                        color='primary'
                                        id={id.toString()}
                                    >
                                        {!isEdit ? 'Изменить' : 'Отменить'}
                                    </Button>
                                </Grid>
                                <Grid item xs>
                                    <Button
                                        onClick={!isEdit ? handleRemoveTask : addTask}
                                        variant='contained'
                                        color='primary'
                                        id={id.toString()}
                                    >
                                        {!isEdit ? 'Удалить' : 'Сохранить'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
        </SApp>
    );
}

export default App;

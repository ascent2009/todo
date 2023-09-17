import { memo, FC, useState, useRef, useCallback } from 'react';
import { Grid } from '@mui/material';
import ButtonComponent from './Button';
import CheckboxForm from './CheckboxForm';
import Input from './Input';
import { ITaskProps, TaskType } from '../types';

const Task: FC<ITaskProps> = memo(
    ({ id, title, isCompleted, handleDeleteTask, tasks, handleEditTask, handleCheckboxChange }) => {
        const buttonRef = useRef(false);
        const editInputRef = useRef<any | string>('');

        const [isEdit, setIsEdit] = useState<boolean>(false);

        const onInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            editInputRef.current = e.target.value;
        }, []);

        const onCheckbox = useCallback(
            (e: React.ChangeEvent<HTMLInputElement>, id: TaskType['id'], isChecked: boolean) => {
                const index = tasks.findIndex(task => task.id === id);
                const checkedTasks = tasks.slice();
                checkedTasks.splice(index, 1, { ...tasks[index], isCompleted: isChecked });
                handleCheckboxChange(checkedTasks);
            },
            [handleCheckboxChange, tasks]
        );

        const onEdit = useCallback((e: React.FormEvent, id: TaskType['id']) => {
            e.preventDefault();
            if (editInputRef.current !== '') {
                const edited = tasks.map(task => {
                    if (task.id === id) {
                        return { ...task, title: editInputRef.current };
                    }
                    return task;
                });
                handleEditTask(edited);
                setIsEdit(false);
            }
            editInputRef.current = '';
        }, []);

        const onDelete = useCallback(
            (id: TaskType['id']) => {
                const deletedTasks = tasks.filter(task => task.id !== id);
                handleDeleteTask(deletedTasks);
            },
            [handleDeleteTask, tasks]
        );

        const handleEditMode = useCallback(() => {
            setIsEdit(true);
            buttonRef.current = true;
        }, []);

        const handleCancel = useCallback(() => setIsEdit(false), []);

        return (
            <Grid
                component='form'
                container
                spacing={3}
                p='0'
                m='auto'
                onSubmit={e => onEdit(e, id)}
                sx={{ borderBottom: '1px white solid', paddingBottom: '1.5rem' }}
                width='40%'
                gap={4}
                alignItems='center'
            >
                <Grid item xs={6}>
                    {isEdit ? (
                        <Input
                            onChange={onInput}
                            variant='outlined'
                            placeholder={`изменить ${title}...`}
                            type='text'
                            sx={{
                                background: 'transparent',
                                borderRadius: '7px',
                                input: {
                                    fontSize: '1.4rem',
                                    color: '#fff',
                                    padding: '4px 10px',
                                    outline: 'none',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                },
                            }}
                            autoComplete='off'
                            size='small'
                            name='title'
                            isEdit={isEdit}
                            editInputRef={editInputRef}
                        />
                    ) : (
                        <CheckboxForm
                            id={id}
                            title={title}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                onCheckbox(e, e.target.id, e.target.checked)
                            }
                            checked={isCompleted}
                            value='white'
                        />
                    )}
                </Grid>
                <Grid
                    container
                    item
                    xs={5}
                    direction='row'
                    sx={{ width: '100%' }}
                    justifyContent='flex-start'
                    alignItems='center'
                    gap={2}
                    flexWrap='nowrap'
                >
                    <Grid item>
                        <ButtonComponent
                            type='button'
                            onClick={isEdit ? handleCancel : handleEditMode}
                            variant='contained'
                            color='primary'
                            sx={{ width: '100px' }}
                            title={isEdit ? 'Отменить' : 'Изменить'}
                            buttonRef={buttonRef}
                        />
                    </Grid>
                    <Grid item>
                        <ButtonComponent
                            type={isEdit ? 'submit' : 'button'}
                            onClick={isEdit ? () => {} : () => onDelete(id)}
                            variant='contained'
                            color='primary'
                            sx={{ width: '100px' }}
                            title={isEdit ? 'Сохранить' : 'Удалить'}
                        />
                    </Grid>
                </Grid>
            </Grid>
        );
    }
);

export default Task;

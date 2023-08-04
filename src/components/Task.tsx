import { memo, FC, useState, useRef } from 'react';
import { Grid } from '@mui/material';
import ButtonComponent from './Button';
import CheckboxForm from './CheckboxForm';
import Input from './Input';
import { ITaskProps, TaskType } from '../types';

const Task: FC<ITaskProps> = ({
    id,
    title,
    isCompleted,
    handleDeleteTask,
    onChange,
    tasks,
    handleEditTask,
    handleInput,
    inputRef,
}) => {
    const buttonRef = useRef(false);

    const [isEdit, setIsEdit] = useState<boolean>(false);

    const onDelete = (id: TaskType['id']) => {
        const deletedTasks = tasks.filter(task => task.id !== id);
        handleDeleteTask(deletedTasks);
    };

    const handleEditMode = () => {
        setIsEdit(true);
        buttonRef.current = true;
    };

    const handleCancel = () => setIsEdit(false);

    return (
        <Grid
            component='form'
            container
            spacing={2}
            p='0'
            m='auto'
            onSubmit={() => handleEditTask(id)}
            sx={{ borderBottom: '1px white solid', paddingBottom: '1.5rem' }}
            width='45%'
            gap={2}
            direction='column'
            alignItems='flex-start'
        >
            <Grid item>
                {isEdit ? (
                    <Input
                        onChange={handleInput}
                        variant='outlined'
                        placeholder={`изменить ${title}...`}
                        type='text'
                        sx={{
                            background: 'transparent',
                            borderRadius: '7px',
                            width: '100%',
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
                        inputRef={inputRef}
                    />
                ) : (
                    <CheckboxForm id={id} title={title} onChange={onChange} checked={isCompleted} value='white' />
                )}
            </Grid>
            <Grid
                container
                item
                xs={3}
                spacing={4}
                direction='row'
                sx={{ width: '100%' }}
                justifyContent='flex-start'
                alignItems='center'
                gap={3}
            >
                <Grid item xs={3}>
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
                <Grid item xs={3}>
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
};

export default memo(Task);

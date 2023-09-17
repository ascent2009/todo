import { memo, FC, useRef, useCallback } from 'react';
import { Box, Grid } from '@mui/material';
import Input from './Input';
import ButtonComponent from './Button';
import { IAddFormProps } from '../types';
import { v4 as uuidv4 } from 'uuid';

const AddForm: FC<IAddFormProps> = memo(({ handleAddTask, formRef, handleInput }) => {
    const addInputRef = useRef('') as any | string;

    const onInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        addInputRef.current = e.target.value;
    }, []);

    const onAdd = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        if (!addInputRef.current) {
            return;
        } else {
            const newTask = { id: uuidv4(), title: addInputRef.current, isCompleted: false };
            handleAddTask(newTask);
        }
        addInputRef.current = '';
    }, []);

    return (
        <Box component='form' onSubmit={onAdd} ref={formRef}>
            <Grid container spacing={2} alignItems='center' justifyContent='center' m='auto' p={0}>
                <Grid item xs={3}>
                    <Input
                        variant='outlined'
                        onChange={onInput}
                        placeholder='новая задача...'
                        type='text'
                        sx={{
                            background: 'white',
                            borderRadius: '7px',
                            outline: 'none',
                            width: '100%',
                            fontSize: '3rem',
                            input: {
                                fontSize: '1.3rem',
                                padding: '4px 10px',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            },
                        }}
                        autoComplete='off'
                        size='small'
                        name='title'
                        addInputRef={addInputRef}
                    />
                </Grid>
                <Grid item xs={2}>
                    <ButtonComponent
                        type='submit'
                        variant='contained'
                        color='primary'
                        title='Добавить'
                        sx={{ width: '70%' }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
});

export default AddForm;

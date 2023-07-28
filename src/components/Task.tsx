import { memo, FC } from 'react';
import { Grid } from '@mui/material';
import ButtonComponent from './Button';
import CheckboxForm from './CheckboxForm';
import { ITaskProps } from '../types';

const Task: FC<ITaskProps> = ({ id, title, isCompleted, handleEditTaskId, handleDeleteTask, onChange }) => {
    return (
        <Grid item xs={2} sm={4} md={4} key={id} pb='1.5rem' m='0' sx={{ borderBottom: '1px white solid' }}>
            <CheckboxForm id={id.toString()} title={title} onChange={onChange} checked={isCompleted} value='white' />
            <Grid container spacing={2} alignItems='center' justifyContent='flex-start'>
                <Grid item xs>
                    <ButtonComponent
                        type='button'
                        onClick={() => handleEditTaskId(id)}
                        variant='contained'
                        color='primary'
                        title='Изменить'
                    />
                </Grid>
                <Grid item xs>
                    <ButtonComponent
                        onClick={e => handleDeleteTask(e, id)}
                        variant='contained'
                        color='primary'
                        type='button'
                        title='Удалить'
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default memo(Task);

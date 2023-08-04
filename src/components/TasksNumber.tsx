import { memo, FC } from 'react';
import { SSubTitle } from '../assets/styles/title.styles';
import { IFooterProps, TaskType } from '../types';

const TasksNumber: FC<IFooterProps> = memo(({ tasks, styles, tab }) => {
    const handleTasksLength = (tab: string, tasks: TaskType[]): number => {
        switch (tab) {
            case 'all':
                return tasks.length;
            case 'active':
                return tasks.filter(task => !task.isCompleted).length;
            case 'completed':
                return tasks.filter(task => task.isCompleted).length;
            default:
                return tasks.length;
        }
    };

    const tasksLength = handleTasksLength(tab, tasks);

    return (
        <SSubTitle>
            Количество задач: <span style={styles}>{tasksLength}</span>
        </SSubTitle>
    );
});

export default TasksNumber;

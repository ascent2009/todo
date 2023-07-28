import { memo, FC } from 'react';
import { SSubTitle } from '../assets/styles/title.styles';
import { IFooterProps } from '../types';

const TasksNumber: FC<IFooterProps> = memo(({ tasks }) => <SSubTitle>Количество задач: {tasks.length}</SSubTitle>);

export default TasksNumber;

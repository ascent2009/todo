import { SxProps, Theme, TextFieldVariants } from '@mui/material';

export type TaskType = { id: number; title: string; isCompleted: boolean };
export type EditTaskType = Pick<TaskType, 'title'>;

export interface ITasksProps {
    tasks: Array<TaskType>;
    editTaskId: number | null;
    tab: string;
    editTask: EditTaskType | null;
    handleEditTask: () => void;
    handleCancel: () => void;
    handleEditTaskId: (id: TaskType['id']) => void;
    handleDeleteTask: (e: React.MouseEvent<HTMLButtonElement>, id: TaskType['id']) => void;
    handleInputEdit: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleTasksList: (tab: string, tasks: TaskType[]) => TaskType[];
    handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ITaskProps {
    title: string;
    id: TaskType['id'];
    isCompleted: boolean;
    handleEditTaskId: (id: TaskType['id']) => void;
    handleDeleteTask: (e: React.MouseEvent<HTMLButtonElement>, id: TaskType['id']) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IEditTaskProps {
    title: string;
    id: TaskType['id'];
    editTask: EditTaskType | null;
    handleEditTask: () => void;
    handleCancel: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ITasksLists {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IAddFormProps {
    onSubmit: (e: React.FormEvent) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export interface IFooterProps {
    tasks: TaskType[];
}

export interface IFormProps {
    id: string;
    title: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export interface ICheckboxProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    id: string;
    checked: boolean;
    sx?: SxProps<Theme>;
}

export interface IButtonProps {
    type: 'button' | 'submit' | 'reset' | undefined;
    variant: 'text' | 'outlined' | 'contained';
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined;
    title: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    sx?: SxProps<Theme> | undefined;
    id?: string;
    disabled?: boolean;
}

export interface IInputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    variant: TextFieldVariants | undefined;
    placeholder: string;
    type: string;
    autoComplete: string;
    value?: string;
    size: 'small' | 'medium';
    name: string;
    sx?: SxProps<Theme>;
}

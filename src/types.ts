import { SxProps, Theme, TextFieldVariants } from '@mui/material';

export type TaskType = { id: string; title: string; isCompleted: boolean };
export type EditTaskType = Pick<TaskType, 'title'>;

export interface ITasksProps {
    tasks: Array<TaskType>;
    editTaskId: TaskType['id'] | null;
    tab: string;
    editTask: EditTaskType | null;
    handleEditTask: () => void;
    handleCancel: () => void;
    handleEditTaskId: (id: TaskType['id']) => void;
    handleDeleteTask: (arr: TaskType[]) => void;
    handleInputEdit: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleTasksList: (tab: string, tasks: TaskType[]) => TaskType[];
    handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ITaskProps {
    tasks: Array<TaskType>;
    title: string;
    id: TaskType['id'];
    isCompleted: boolean;
    handleEditTaskId: (id: TaskType['id']) => void;
    handleDeleteTask: (arr: TaskType[]) => void;
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
    tab: string;
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
    id: TaskType['id'];
    title: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export interface ICheckboxProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    id: TaskType['id'];
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
    id?: TaskType['id'] | undefined;
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

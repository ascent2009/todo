import { RefObject } from 'react';
import { SxProps, Theme, TextFieldVariants } from '@mui/material';

export type TaskType = { id: string; title: string; isCompleted: boolean };
export type EditTaskType = Pick<TaskType, 'title'>;

export interface ITasksProps {
    tasks: Array<TaskType>;
    tab: string;
    handleEditTask: (arr: TaskType[]) => void;
    handleDeleteTask: (arr: TaskType[]) => void;
    handleInput?: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void;
    handleCheckboxChange: (arr: TaskType[]) => void;
}

export interface ITaskProps {
    tasks: Array<TaskType>;
    title: string;
    id: TaskType['id'];
    isCompleted: boolean;
    handleDeleteTask: (arr: TaskType[]) => void;
    handleCheckboxChange: (arr: TaskType[]) => void;
    handleEditTask: (arr: TaskType[]) => void;
    handleInput?: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}

export interface IEditTaskProps {
    title: string;
    id: TaskType['id'];
    handleEditTask: (arr: TaskType[]) => void;
}

export interface ITasksLists {
    tab: string;
    handleListId: (id: TaskType['id']) => void;
    tasks: Array<TaskType>;
}

export interface IAddFormProps {
    handleAddTask: (task: TaskType) => void;
    handleInput?: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void;
    value?: string;
    formRef: string | RefObject<string> | null | any;
}

export interface IFooterProps {
    tasks: TaskType[];
    styles: object;
    tab: string;
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
    buttonRef?: string | RefObject<string> | null | any;
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
    addInputRef?: string | RefObject<string> | null | any;
    editInputRef?: string | RefObject<string> | null | any;
    isEdit?: boolean;
}

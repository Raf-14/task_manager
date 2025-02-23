import { ReactNode } from 'react';


// Definition des types pour le Todo et l'array de Todos
export interface Task {
    id: number;
    title: string;
    description: string;
    priority: string;
    status: string;
  }
  
  export interface taskArrayProps {
    tasks: Task[];
  }
  
// Type pour les champs
export type FieldId = 'username' | 'Last_name' | 'email' | 'password' | 'confirmPassword';

export type FieldId2 = 'title' | 'description'

export interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

 export interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  type : 'submit' | 'button' | 'reset';
  children: ReactNode;
}

  export interface InputProps {
    // label: string;
    name: string;
    type: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    id?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
 export interface SignUpData {
    name: string;
    Last_name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
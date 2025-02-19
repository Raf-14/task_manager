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
    items: Task[];
  }
  
// Type pour les champs
export type FieldId = 'username' | 'Last_name' | 'email' | 'password' | 'confPassword'| 'name';
export type FieldId2 = 'title' | 'description'

export interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

 export interface ButtonProps {
  title: string;
  onClick: () => void;
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

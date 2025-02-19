import { FC } from 'react';
import { ButtonProps } from '../types/ineterfaces';

export const Button: FC<ButtonProps> = ({ title, disabled, type, onClick, children }) => {
    return (
      <button type={type} disabled={disabled} title={title} onClick={onClick} className="w-full px-4 py-2 mt-5 font-bold text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-700">
        {children}
      </button>
    );
  };




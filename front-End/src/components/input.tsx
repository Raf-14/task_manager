import { FC } from "react";
import { InputProps } from "../types/ineterfaces";

export const Input: FC<InputProps> = ({  name, type, value, placeholder, disabled, className, id, onChange }) => {
    return (
      <div className="mb-4">
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 ${className} focus:outline-green-500`}
          id={id}
          onChange={onChange}
        />
      </div>
    );
  };

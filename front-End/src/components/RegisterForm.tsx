import { FORM_FIELDS } from '../constants/constants';
import { useRegisterForm } from '../hooks/useRegisterForm';
import { Input } from '../components/input';
import {  Button } from '../components/button';
import { SignUpData } from '../types/ineterfaces'

export const RegisterForm = () => {
  const {
    formData,
    error,
    isLoading,
    handleChange,
    handleSubmit,
  } = useRegisterForm();

  return (
    <form 
      onSubmit={handleSubmit} 
      className="p-5 mx-auto border rounded shadow-2xl w-md bg-zinc-50"
    >
      {FORM_FIELDS.map((field) => (
        <Input
          key={field.id}
          {...field}
          value={formData[field.name as keyof SignUpData]}
          disabled={isLoading}
          onChange={handleChange}
        />
      ))}
      
      {error && (
        <p className="text-red-500" role="alert">
          {error}
        </p>
      )}
      
      <Button 
        type="submit" 
        disabled={isLoading}
      >
        {isLoading ? 'Chargement...' : 'Register'}
      </Button>
    </form>
  );
};
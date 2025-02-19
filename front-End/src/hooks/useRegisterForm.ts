import { useState, useCallback } from 'react';
import { validators } from '../functions/validation';
import { SignUpData } from '../types/ineterfaces'
export const useRegisterForm = () => {
  const [formData, setFormData] = useState<SignUpData>({
    name: '',
    Last_name: '',
    email: '',
    password: '',
    confPassword: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateField = useCallback((name: string, value: string) => {
    switch (name) {
      case 'email':
        return validators.email(value) ? null : 'Veuillez entrer une adresse email valide';
      case 'password':
        return validators.password(value) ? null : 'Mot de passe non conforme';
      case 'confPassword':
        return validators.passwordMatch(value, formData.password) 
          ? null 
          : 'Les mots de passe ne correspondent pas';
      default:
        return null;
    }
  }, [formData.password]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    const fieldError = validateField(name, value);
    setError(fieldError);
  }, [validateField]);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate all fields
    for (const [key, value] of Object.entries(formData)) {
      const fieldError = validateField(key, value);
      if (fieldError) {
        setError(fieldError);
        return;
      }
    }

    setError(null);
    setIsLoading(true);

    try {
      // Remplacez ce setTimeout par votre appel API réel
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Formulaire soumis avec succès :', formData);
    } catch (err) {
      setError('Une erreur est survenue lors de l\'inscription');
      console.error('Une erreur est survenue lors de l\'inscription:', err);
    } finally {
      setIsLoading(false);
    }
  }, [formData, validateField]);

  return {
    formData,
    error,
    isLoading,
    handleChange,
    handleSubmit,
  };
};
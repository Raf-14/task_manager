import { useState, useCallback } from "react";

/**
 * Interface des données du formulaire de connexion.
 */
export interface LoginData {
  email: string;
  password: string;
}

/**
 * Hook personnalisé pour gérer le formulaire de connexion.
 */
export const useLoginForm = () => {
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Gère la modification des champs du formulaire.
   * @param e - Événement de changement de l'input.
   */
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  /**
   * Gère la soumission du formulaire de connexion.
   * @param e - Événement de soumission du formulaire.
   */
  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Vérification basique des champs
    if (!formData.email || !formData.password) {
      setError("Tous les champs sont requis.");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      // Simulation d'un appel API pour l'authentification
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Connexion réussie :", formData);
    } catch (err) {
      setError("Une erreur est survenue lors de la connexion.");
      console.error("Erreur de connexion :", err);
    } finally {
      setIsLoading(false);
    }
  }, [formData]);

  return {
    formData,
    error,
    isLoading,
    handleChange,
    handleSubmit,
  };
};

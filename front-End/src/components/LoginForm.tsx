import { useLoginForm } from "../hooks/useLoginForm";
import { Input } from "../components/input";
import { Button } from "../components/button";

/**
 * Composant de formulaire de connexion
 * Utilise le hook `useLoginForm` pour gérer l'état du formulaire et l'authentification.
 */
export const LoginForm = () => {
  const {
    formData,
    error,
    isLoading,
    handleChange,
    handleSubmit,
  } = useLoginForm();

  return (
    <form 
      onSubmit={handleSubmit} 
      className="p-5 mx-auto border rounded shadow-2xl w-md bg-zinc-50"
    >
      {/* Champ Email */}
      <Input
        type="email"
        name="email"
        placeholder="Entrez votre email"
        value={formData.email}
        disabled={isLoading}
        onChange={handleChange}
      />

      {/* Champ Mot de passe */}
      <Input
        type="password"
        name="password"
        placeholder="Entrez votre mot de passe"
        value={formData.password}
        disabled={isLoading}
        onChange={handleChange}
      />

      {/* Affichage d'erreur */}
      {error && (
        <p className="text-red-500" role="alert">
          {error}
        </p>
      )}

      {/* Bouton de connexion */}
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Chargement...' : 'Connexion'}
      </Button>
    </form>
  );
};

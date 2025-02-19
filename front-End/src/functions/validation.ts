// validation.ts
export const validators = {
    email: (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    password: (password: string) => 
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(password),
    passwordMatch: (password: string, confirmPassword: string) => 
      password === confirmPassword,
  };
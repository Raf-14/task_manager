import { FORM_FIELDS } from '../constants/constants';
import { useRegisterForm } from '../hooks/useRegisterForm';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { SignUpData } from '..types/interfaces';


export const LoginForm = () => {
    const {
        formData,
        error,
        isLoading,
        handleChange,
        handleSubmit
    } = useRegisterForm();

    return(
        <form
        
        >

        </form>
    )
}
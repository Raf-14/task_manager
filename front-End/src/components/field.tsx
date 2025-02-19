import { FieldId ,FieldId2 } from "../types/ineterfaces";

interface FormField {
  id: FieldId;
  type: string;
  placeholder: string;
  name: string;
}
  // Tableau de configuration des champs
  export const fieldsRegister: { id: FieldId;  type: string; placeholder: string, name: string }[] = [
    { id: 'username', type: 'text', placeholder: 'Entrez votre nom', name:"name" },
    { id: 'Last_name',  type: 'text', placeholder: 'Entrez votre Prénom', name:"Last_name" },
    { id: 'email',  type: 'email', placeholder: 'Entrez votre email', name:"email" },
    { id: 'password' , type: 'password', placeholder: 'Entrez votre mot de passe', name:"password" },
    { id: 'confPassword' , type: 'password', placeholder: 'Confirmer votre mot de passe', name:"confPassword" },
  ];

  export const fieldAddTask : {id: FieldId2,type: string, placeholder: string, name: string}[] = [
    {id: 'title', type: 'text', placeholder: 'task name', name: 'taskName'},
    {id: 'description', type: 'text', placeholder: 'task description', name: 'taskDescription'},
  ]
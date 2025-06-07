/**
 * Valide un formulaire de ticket
 * @param {object} values - Valeurs du formulaire
 * @returns {object} Erreurs de validation
 */
export const validateTicketForm = (values) => {
    const errors = {};
  
    if (!values.title) {
      errors.title = 'Le titre est requis';
    } else if (values.title.length < 5) {
      errors.title = 'Le titre doit faire au moins 5 caractères';
    }
  
    if (!values.description) {
      errors.description = 'La description est requise';
    } else if (values.description.length < 10) {
      errors.description = 'La description doit faire au moins 10 caractères';
    }
  
    return errors;
  };
  
  /**
   * Valide un formulaire d'authentification
   * @param {object} values - Valeurs du formulaire
   * @returns {object} Erreurs de validation
   */
  export const validateAuthForm = (values) => {
    const errors = {};
  
    if (!values.email) {
      errors.email = 'Email requis';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email invalide';
    }
  
    if (!values.password) {
      errors.password = 'Mot de passe requis';
    } else if (values.password.length < 6) {
      errors.password = 'Le mot de passe doit faire au moins 6 caractères';
    }
  
    return errors;
  };
/**
 * Formatte une date au format JJ/MM/AAAA
 * @param {Date|string} date - Date à formatter
 * @returns {string} Date formatée
 */
export const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString('fr-FR');
  };
  
  /**
   * Capitalise la première lettre d'une chaîne
   * @param {string} str - Chaîne à capitaliser
   * @returns {string} Chaîne capitalisée
   */
  export const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  /**
   * Génère un ID unique
   * @returns {string} ID unique
   */
  export const generateId = () => {
    return Math.random().toString(36).substring(2, 9);
  };
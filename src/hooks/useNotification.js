import { useState, useCallback } from 'react';

/**
 * Custom hook for showing notifications
 * @returns {Object} - { notification, showNotification, hideNotification }
 */
const useNotification = () => {
  const [notification, setNotification] = useState(null);

  const showNotification = useCallback((message, type = 'success', duration = 3000) => {
    setNotification({ message, type });
    
    if (duration) {
      setTimeout(() => {
        setNotification(null);
      }, duration);
    }
  }, []);

  const hideNotification = useCallback(() => {
    setNotification(null);
  }, []);

  return { notification, showNotification, hideNotification };
};

export default useNotification;

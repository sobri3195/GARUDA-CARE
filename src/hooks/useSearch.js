import { useState, useMemo } from 'react';

/**
 * Custom hook for search functionality
 * @param {Array} data - Array of objects to search through
 * @param {Array} searchKeys - Array of keys to search in each object
 * @returns {Object} - { searchTerm, setSearchTerm, filteredData }
 */
const useSearch = (data, searchKeys) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return data;

    const lowerSearch = searchTerm.toLowerCase();
    
    return data.filter(item => {
      return searchKeys.some(key => {
        const value = getNestedValue(item, key);
        return value && value.toString().toLowerCase().includes(lowerSearch);
      });
    });
  }, [data, searchTerm, searchKeys]);

  return { searchTerm, setSearchTerm, filteredData };
};

// Helper function to get nested object values
const getNestedValue = (obj, path) => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

export default useSearch;

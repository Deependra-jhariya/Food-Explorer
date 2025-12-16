import { useEffect, useState } from 'react';
import axiosInstance from '../../services/Api';

export const useMealSearch = (query: string) => {
  const [meals, setMeals] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        fetchSearchMeals();
      } else {
        setMeals([]);
      }
    }, 400); 

    return () => clearTimeout(timer);
  }, [query]);

  const fetchSearchMeals = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(
        `search.php?s=${query}`,
      );
      setMeals(response?.data?.meals || []);
    } catch (error) {
      console.log('search meals failed', error);
    } finally {
      setLoading(false);
    }
  };

  return { meals, loading };
};

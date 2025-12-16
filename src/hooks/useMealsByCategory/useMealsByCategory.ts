// hooks/useMealsByCategory/useMealsByCategory.ts
import { useEffect, useState } from 'react';
import axiosInstance from '../../services/Api';

export const useMealsByCategory = (category: string) => {
  const [meals, setMeals] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (category) {
      fetchMeals();
    }
  }, [category]);

  const fetchMeals = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(
        `filter.php?c=${category}`,
      );
      setMeals(response?.data?.meals || []);
    } catch (error) {
      console.log('fetch meals failed', error);
    } finally {
      setLoading(false);
    }
  };

  return { meals, loading };
};

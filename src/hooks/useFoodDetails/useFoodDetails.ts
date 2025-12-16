import { useEffect, useState } from 'react';
import axiosInstance from '../../services/Api';

export const useFoodDetails = (mealId: string) => {
  const [foodDetails, setFoodDetails] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (mealId) {
      fetchFoodDetails();
    }
  }, [mealId]);

  const fetchFoodDetails = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(
        `lookup.php?i=${mealId}`,
      );
      console.log("response for food",response)
      setFoodDetails(response?.data?.meals?.[0] || null);
    } catch (error) {
      console.log('fetch food details failed', error);
    } finally {
      setLoading(false);
    }
  };

  return { foodDetails, loading };
};

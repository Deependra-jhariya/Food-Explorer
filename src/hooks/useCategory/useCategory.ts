import { useEffect, useState } from 'react';
import axiosInstance from '../../services/Api';
import { useAppNavigation } from '../../utils/navigationHelper';

export const useCategory = () => {
  const {navigateTo} = useAppNavigation()
  const [categoryData, setCategoryData] = useState({});

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const response = await axiosInstance.get("categories.php");
      console.log('response of category', response);
      setCategoryData(response);
      return response;
    } catch (error: any) {
      console.log('fetch category failed', error);
    }
  };

  return { categoryData,navigateTo };
};

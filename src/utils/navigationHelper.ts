import {
    CommonActions,
    NavigationProp,
    StackActions,
    useNavigation,
  } from '@react-navigation/native';
  import { RootStackParamList } from '../navigation/types';
  
  export const useAppNavigation = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
    // For navigate screen
    const navigateTo = (screen: keyof RootStackParamList, params?: any) => {
      navigation.navigate(screen, params);
    };

    // For reset the screen
    const resetTo = (screen: keyof RootStackParamList, params?: any) => {
      navigation.reset({
        index: 0,
        routes: [{ name: screen, params }],
      });
    };
  
    //Replace (previous screen is removed from stack)
    const replaceTo = (screen: keyof RootStackParamList, params?: any) => {
      navigation.dispatch(StackActions.replace(screen, params));
    };

    // For goBAck
    const goBack = () => {
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    };
  
  
    return { navigateTo, replaceTo,resetTo, goBack };
  };
  
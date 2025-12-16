import React from 'react';
import { View, Text, Image, ScrollView, StatusBar } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { AppHeader, AppText } from '../../components/atoms';
import { useFoodDetails } from '../../hooks/useFoodDetails/useFoodDetails';
import { DetailsStyle } from './DetailsStyle';
import { SafeAreaView } from 'react-native-safe-area-context';

const DetailsScreen = () => {
  const route = useRoute<RouteProp<any>>();
  const { mealId } = route.params;

  const { foodDetails, loading } = useFoodDetails(mealId);

  if (!foodDetails) return null;

  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strTags,
  } = foodDetails;

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <StatusBar barStyle={'dark-content'} />
      <View style={DetailsStyle.container}>
        <AppHeader tittle="Food Details" onMenuIcon={() => {}} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <Image source={{ uri: strMealThumb }} style={DetailsStyle.image} />

          <View style={DetailsStyle.content}>
            <AppText style={DetailsStyle.title} text={strMeal} />

            <AppText
              style={DetailsStyle.meta}
              text={`${strCategory} ${strArea}`}
            />

            {strTags && (
              <AppText style={DetailsStyle.tags} text={`Tags: ${strTags}`} />
            )}

            <AppText style={DetailsStyle.sectionTitle} text={'Instructions'} />

            <AppText style={DetailsStyle.instructions} text={strInstructions} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

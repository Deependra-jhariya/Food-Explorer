import React, { useState } from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from 'react-native';
import { AppHeader, AppText } from '../../components/atoms';
import { useCategory } from '../../hooks/useCategory/useCategory';
import { CategoryStyle } from './CategoryStyle';
import { useMealsByCategory } from '../../hooks/useMealsByCategory/useMealsByCategory';
import { useMealSearch } from '../../hooks/useMealSearch/useMealSearch';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppColors } from '../../themes';

const CategoryScreen = () => {
  const { categoryData, navigateTo } = useCategory();
  const [selectedCategory, setSelectedCategory] = useState<string>('Beef');

  const { meals, loading } = useMealsByCategory(selectedCategory);

  const [searchText, setSearchText] = useState('');

  const { meals: searchMeals, loading: searchLoading } =
    useMealSearch(searchText);

  //Decide which data to show
  const mealsToShow = searchText.length > 0 ? searchMeals : meals;

  //Horizontal Category Item
  const renderCategory = ({ item }: any) => {
    const isActive = item.strCategory === selectedCategory;

    return (
      <TouchableOpacity
        style={[
          CategoryStyle.categoryChip,
          isActive && CategoryStyle.activeChip,
        ]}
        onPress={() => setSelectedCategory(item.strCategory)}
      >
        <Image
          source={{ uri: item.strCategoryThumb }}
          style={CategoryStyle.categoryImage}
        />
        <AppText
          style={[
            CategoryStyle.categoryText,
            isActive && CategoryStyle.activeText,
          ]}
          text={item.strCategory}
        />
      </TouchableOpacity>
    );
  };

  //Meal Item
  const renderMeal = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={CategoryStyle.card}
        onPress={() => {
          navigateTo('DetailsScreen', {
            mealId: item.idMeal,
          });
        }}
      >
        <Image
          source={{ uri: item.strMealThumb }}
          style={CategoryStyle.image}
        />
        <View style={CategoryStyle.content}>
          <AppText style={CategoryStyle.title} text={item.strMeal}/>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <StatusBar barStyle={'dark-content'} />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={CategoryStyle.container}>
            <AppHeader tittle="Food Explorer" />

            <TextInput
              placeholder="Search meals..."
              value={searchText}
              onChangeText={setSearchText}
              style={CategoryStyle.searchInput}
              placeholderTextColor={AppColors.black}
            />

            {/*Horizontal Categories */}
            {searchText.length === 0 && (
              <FlatList
                data={categoryData?.data?.categories}
                renderItem={renderCategory}
                keyExtractor={item => item.idCategory}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={CategoryStyle.categoryList}
              />
            )}
            {/*Meals List */}
            <FlatList
              data={mealsToShow}
              renderItem={renderMeal}
              keyExtractor={item => item.idMeal}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={CategoryStyle.list}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CategoryScreen;

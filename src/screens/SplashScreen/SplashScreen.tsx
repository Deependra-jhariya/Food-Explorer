import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { AppImages, CommonStyle } from '../../themes';
import { useAppNavigation } from '../../utils/navigationHelper';

const SplashScreen = () => {
  const { replaceTo } = useAppNavigation();

  useEffect(() => {
    let timer = setTimeout(() => {
      replaceTo('CategoryScreen');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={CommonStyle.mainContainer}>
      <Image
        source={AppImages.AppIcon}
        style={{
          height: 300,
          width: 300,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 25,
    fontFamily: 'bold',
  },
});

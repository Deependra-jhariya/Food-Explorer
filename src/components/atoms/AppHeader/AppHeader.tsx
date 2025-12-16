import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { AppColors } from '../../../themes';
import { useAppNavigation } from '../../../utils/navigationHelper';
import AppText from '../AppText/AppText';
import { ArrowLeft } from 'lucide-react-native';

interface headerProps {
  onMenuIcon?: () => void;
  onRightIcon?: () => React.ReactNode;
  isMenuIcon?: Boolean;
  isdisableLeftIcon?: Boolean;
  isLogo?: Boolean;
  tittle?: string;
  headerContainerStyle?: ViewStyle;
  tittleStyle?: TextStyle;
  leftIconStyle?: TextStyle | ViewStyle;
}

const AppHeader: React.FC<headerProps> = props => {
  const {
    onMenuIcon,
    isMenuIcon,
    isdisableLeftIcon,
    isLogo,
    tittle,
    headerContainerStyle,
    tittleStyle,
    leftIconStyle,
    onRightIcon,
  } = props;

  const { navigateTo, goBack } = useAppNavigation();

  return (
    <View style={[styles?.headerContainer, headerContainerStyle]}>
      <View style={styles?.headerView}>
        {onMenuIcon && (
          <TouchableOpacity style={styles?.menuIconView} onPress={goBack}>
            <ArrowLeft />
          </TouchableOpacity>
        )}
        <View style={styles?.logoView}>
          <AppText text={tittle} style={[styles?.tittleStyle, tittleStyle]} />
        </View>

        {onRightIcon && (
          <View style={styles?.menuIconView}>{onRightIcon()}</View>
        )}
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: AppColors?.white,
    paddingHorizontal: 16,
  },
  headerView: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  logoView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoSty: {
    // height: 25,
    width: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  menuIconView: {
    alignSelf: 'center',
  },
  tittleStyle: {
    fontSize: 16,
    color: AppColors.black,
    fontWeight: 'bold',
  },
});

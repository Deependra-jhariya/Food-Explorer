import { Dimensions, StyleSheet } from 'react-native';
import { AppColors } from '../../themes';
const { width } = Dimensions.get('window');

export const CategoryStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.lightNavyBlue,
    paddingHorizontal: 16,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: AppColors.white,
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    marginTop: 30,
  },
  image: {
    width: '100%',
    height: width * 0.5,
    resizeMode: 'cover',
    backgroundColor: AppColors.lightNavyBlue,
  },
  content: {
    padding: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: AppColors.black,
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: AppColors.black,
    lineHeight: 20,
  },
  categoryList: {
    maxHeight: 110,
    marginVertical: 12,
  },

  categoryChip: {
    alignItems: 'center',
    marginRight: 14,
    paddingHorizontal: 30,
    paddingBottom: 30,
    paddingTop: 10,
    borderRadius: 12,
    backgroundColor: AppColors.offWhite,
  },

  activeChip: {
    backgroundColor: AppColors.black,
  },

  categoryImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  categoryText: {
    marginTop: 6,
    fontSize: 13,
    color: AppColors.black,
  },

  activeText: {
    color: AppColors.white,
  },
  searchInput: {
    height: 44,
    borderRadius: 10,
    backgroundColor: AppColors.offWhite,
    borderWidth:1,
    paddingHorizontal: 14,
    marginVertical: 12,
    fontSize: 14,
  },
});

import { StyleSheet } from "react-native";
import { AppColors } from "../../themes";

export const DetailsStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
      },
      image: {
        width: '100%',
        height: 300,
      },
      content: {
        padding: 16,
      },
      title: {
        fontSize: 22,
        fontWeight: '700',
        color:AppColors.black,
      },
      meta: {
        marginTop: 6,
        color: AppColors.black,
      },
      tags: {
        marginTop: 6,
        color: AppColors.black,
      },
      sectionTitle: {
        marginTop: 16,
        fontSize: 18,
        fontWeight: '600',
      },
      instructions: {
        marginTop: 8,
        fontSize: 14,
        lineHeight: 22,
        color: AppColors.black,
      },
      
})
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../store/store';
import {COLORS} from '../theme/theme';
import ImageBackGroundInfo from '../components/ImageBackGroundInfo';

const DetailsScreen = ({navigation, route}: any) => {
  // console.log('route =  ', route.params);
  const ItemOfIndex = useStore((state: any) =>
    route.params.type == 'Coffee' ? state.CoffeeList : state.BeanList,
  )[route.params.index];
  const BackHandler =() => {
    navigation.pop();
  }
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}
      />
      <ImageBackGroundInfo
        EnableBackHandler={true}
        imagelink_potrait={ItemOfIndex.imagelink_potrait}
        type={ItemOfIndex.type}
        id={ItemOfIndex.id}
        favourite={ItemOfIndex.favourite}
        name={ItemOfIndex.name}
        special_ingreidient={ItemOfIndex.special_ingreidient}
        ingreidient={ItemOfIndex.ingreidient}
        average_rating={ItemOfIndex.average_rating}
        rating_count={ItemOfIndex.rating_count}
        roasted={ItemOfIndex.roasted}
        BackHandler={() => {}}
        ToggleFavourite={() => {}}
      />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
});

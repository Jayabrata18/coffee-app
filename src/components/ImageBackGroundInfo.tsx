import {
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import GradientBGIcon from './GradientBGIcon';
import {COLORS, FONTSIZE, SPACING} from '../theme/theme';
interface ImageBackGroundInfoProps {
  EnableBackHandler: boolean;
  imagelink_potrait: ImageProps;
  type: string;
  id: string;
  favourite: boolean;
  name: string;
  special_ingreidient: string;
  ingreidient: string;
  average_rating: number;
  rating_count: number;
  roasted: string;
  BackHandler?: any;
  ToggleFavourite: any;
}

const ImageBackGroundInfo: React.FC<ImageBackGroundInfoProps> = ({
  EnableBackHandler,
  imagelink_potrait,
  type,
  id,
  favourite,
  name,
  special_ingreidient,
  ingreidient,
  average_rating,
  rating_count,
  roasted,
  BackHandler,
  ToggleFavourite,
}) => {
  return (
    <View>
      <ImageBackground
        source={imagelink_potrait}
        style={styles.ItemBackgroundImage}>
        {EnableBackHandler ? (
          <View style={styles.ImageheaderBarContainerWithBlack}>
            <TouchableOpacity>
              <GradientBGIcon
                name="left"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <GradientBGIcon
                name="like"
                color={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.ImageheaderBarContainerwithoutBlack}>
            
            <TouchableOpacity>
              <GradientBGIcon
                name="like"
                color={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default ImageBackGroundInfo;

const styles = StyleSheet.create({
  ItemBackgroundImage: {
    width: '100%',
    aspectRatio: 20 / 25,
    justifyContent: 'space-between',
  },
  ImageheaderBarContainerWithBlack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ImageheaderBarContainerwithoutBlack:{}
});

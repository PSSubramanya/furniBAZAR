import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import fontFamily from '../../constants/fontFamily';

const OrdersScreen = (props: any) => {
  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: 100,
      }}>
      <Image
        source={imagePath?.illustrationIcon9}
        height={200}
        width={200}
        style={{height: 200, width: 200}}
        resizeMode="contain"
      />
      <Text
        style={{
          fontFamily: fontFamily?.primaryFont?.medium,
          fontSize: 16,
        }}>
        No orders placed yet
      </Text>
    </View>
  );
};
export default OrdersScreen;

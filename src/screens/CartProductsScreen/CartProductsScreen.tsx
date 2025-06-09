import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import fontFamily from '../../constants/fontFamily';
import colors from '../../constants/colors';

const CartProductsScreen = (props: any) => {
  const {navigation} = props;
  const fetchCartData = useSelector(
    (state: RootState) => state?.homeReducer?.cartData,
  );

  const [cartData, setCartData] = useState(fetchCartData?.data);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 40,
          marginLeft: 15,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation?.goBack();
          }}>
          <Image
            source={imagePath?.leftChevron}
            height={30}
            width={30}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
        <Text
          style={{fontFamily: fontFamily?.primaryFont?.medium, fontSize: 18}}>
          My Cart
        </Text>
      </View>
      <FlatList
        data={cartData}
        contentContainerStyle={{marginTop: 20}}
        keyExtractor={item => item?.id}
        renderItem={({item, index}) => {
          return (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: 90,
                  marginBottom: 10,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 20,
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity onPress={() => {}}>
                      <Image
                        source={
                          index === 3
                            ? imagePath?.checkCircle
                            : imagePath?.radioButton
                        }
                        height={25}
                        width={25}
                        style={{height: 25, width: 25, marginRight: 5}}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: colors?.greyColorLight3,
                        height: 80,
                        width: 80,
                        borderRadius: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={item?.image?.[0]}
                        height={60}
                        width={60}
                        style={{height: 60, width: 60}}
                        resizeMode={'contain'}
                      />
                    </View>
                    <View style={{marginLeft: 20}}>
                      <Text
                        style={{fontFamily: fontFamily?.primaryFont?.regular}}>
                        {item?.name}
                      </Text>
                      <Text
                        style={{
                          fontFamily: fontFamily?.primaryFont?.medium,
                          fontSize: 16,
                        }}>
                        ₹{item?.price}
                      </Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity onPress={() => {}}>
                  <View
                    style={{
                      //   backgroundColor: colors?.darkBluegrey4,
                      height: 40,
                      width: 40,
                      borderRadius: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 20,
                    }}>
                    <Image
                      source={imagePath?.deleteIconDark}
                      height={18}
                      width={18}
                      style={{height: 18, width: 18}}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 0.5,
                  borderRadius: 5,
                  width: 105,
                  marginLeft: 12,
                  marginBottom: 20,
                }}>
                <TouchableOpacity>
                  <View
                    style={{
                      height: 35,
                      width: 35,
                      borderRadius: 3,
                    }}>
                    <Text
                      style={{
                        fontFamily: fontFamily?.primaryFont?.regular,
                        color: colors?.darkBluegrey4,
                        fontSize: 20,
                        textAlign: 'center',
                      }}>
                      --
                    </Text>
                  </View>
                </TouchableOpacity>
                <Text
                  style={{
                    alignSelf: 'center',
                    marginHorizontal: 10,
                    fontFamily: fontFamily?.primaryFont?.medium,
                    fontSize: 16,
                    color: colors?.darkBluegrey4,
                  }}>
                  0
                </Text>
                <TouchableOpacity>
                  <View
                    style={{
                      height: 35,
                      width: 35,
                      borderRadius: 3,
                    }}>
                    <Text
                      style={{
                        fontFamily: fontFamily?.primaryFont?.regular,
                        color: colors?.darkBluegrey4,
                        fontSize: 20,
                        textAlign: 'center',
                      }}>
                      +
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                alignItems: 'center',
                marginTop: 100,
              }}>
              <Image
                source={imagePath?.illustrationIcon7}
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
                Nothing added to the cart
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};
export default CartProductsScreen;

/**
 * Add Bottom Static Modal to calculate Price
 */

import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
  PanResponder,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import fontFamily from '../../constants/fontFamily';
import colors from '../../constants/colors';
import FBModalView from '../../components/FBModalView/FBModalView';

const CartProductsScreen = (props: any) => {
  const {navigation} = props;

  const {width} = Dimensions.get('window');
  const SLIDER_WIDTH = width - 40;
  const SLIDER_HEIGHT = 60;
  const SLIDE_BUTTON_SIZE = 55;

  const fetchCartData = useSelector(
    (state: RootState) => state?.homeReducer?.cartData,
  );

  const pan = useRef(new Animated.ValueXY()).current;
  const [slideCompleted, setSlideCompleted] = useState(false);
  const [cartData, setCartData] = useState(fetchCartData?.data);
  const [discountCode, setDiscountCode] = useState('');
  const [subTotalPrice, setSubTotalPrice] = useState<number>(0);
  const [selectedItems, setSelectedItems] = useState<string[]>([]); //NOTE: Original value is []

  //NOTE: NEED To calculate total price based on the item selected * number of products in counter
  //NOTE: For this we need to maintain a dictionary -> key-value pair to update the product and number of values of it.
  //NOTE: Need a new redux action and reducer for this
  //NOTE: Also discount needs to be calulated
  //NOTE: By mapping from the disount mockdata checking if it includes the coupon that we have applied and then adding it
  //NOTE: Add an info icon nextto discount to open a bottom Modal drawer to show what all discounts are added individually
  //NOTE: On slide navigate to the next page
  //NOTE: On delete of a product, 1st check if it is selected.
  //NOTE: Make it unselected(Manually or via code) then update the store via redux action "cartData"->state?.homeReducer?.cartData
  //NOTE: Modularise the code and also move styles to different file
  //NOTE: Also add types wherever required and replace 'any' with it

  useEffect(() => {
    cartData?.map((val: any) => {
      calculateSubTotalPrice(val?.price);
    });
  }, []);

  const calculateSubTotalPrice = (val: string) => {
    const tempPrice = Number(val.replace(',', ''));
    setSubTotalPrice(prev => prev + tempPrice);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderMove: (_, gestureState) => {
        if (
          gestureState.dx >= 0 &&
          gestureState.dx <= SLIDER_WIDTH - SLIDE_BUTTON_SIZE
        ) {
          pan.setValue({x: gestureState.dx, y: 0});
        }
      },

      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > SLIDER_WIDTH - SLIDE_BUTTON_SIZE - 10) {
          setSlideCompleted(true);

          Animated.timing(pan, {
            toValue: {x: SLIDER_WIDTH - SLIDE_BUTTON_SIZE, y: 0},
            duration: 200,
            useNativeDriver: false,
          }).start();
        } else {
          Animated.spring(pan, {
            toValue: {x: 0, y: 0},
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginLeft: 5,
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
      {selectedItems?.length > 0 && (
        <Text
          style={{
            fontFamily: fontFamily?.primaryFont?.regular,
            fontSize: 14,
            marginLeft: 16,
            marginTop: 20,
          }}>
          {selectedItems?.length} {selectedItems?.length > 1 ? 'items' : 'item'}{' '}
          selected
        </Text>
      )}
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
                    <TouchableOpacity
                      onPress={() => {
                        let temporaryItems = [];
                        if (
                          JSON.stringify(selectedItems)?.includes(
                            JSON.stringify(item),
                          )
                        ) {
                          temporaryItems = [...selectedItems];
                          const indexOfItem = selectedItems?.indexOf(item);
                          temporaryItems.splice(indexOfItem, 1);
                          setSelectedItems(temporaryItems);
                        } else {
                          const temporaryItems = [...selectedItems, item];
                          setSelectedItems(temporaryItems);
                        }
                      }}>
                      <Image
                        source={
                          JSON.stringify(selectedItems)?.includes(
                            JSON.stringify(item),
                          )
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
      {selectedItems?.length > 0 && (
        <View
          style={{
            backgroundColor: colors?.white,
            borderRadius: 20,
            marginBottom: 45,
          }}>
          <View
            style={{
              backgroundColor: colors?.greyColorLight,
              height: 50,
              marginHorizontal: 20,
              marginTop: 15,
              borderRadius: 5,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Apply Coupon Code"
              placeholderTextColor={colors?.greyColor}
              value={discountCode}
              onChangeText={val => {
                setDiscountCode(val);
              }}
              style={{
                fontFamily: fontFamily?.primaryFont?.regular,
                fontSize: 16,
                width: 240,
                marginLeft: 16,
              }}
            />
            <TouchableOpacity
              onPress={() => {}}
              disabled={selectedItems?.length <= 0}>
              <View
                style={{
                  backgroundColor:
                    selectedItems?.length <= 0
                      ? colors?.greyColor
                      : colors?.darkBluegrey4,
                  height: 42,
                  paddingHorizontal: 14,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5,
                  marginRight: 6,
                }}>
                <Text
                  style={{
                    fontFamily: fontFamily?.primaryFont?.regular,
                    color: colors?.white,
                  }}>
                  Apply
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
              marginHorizontal: 20,
            }}>
            <Text style={{fontFamily: fontFamily?.primaryFont?.light}}>
              Sub Total:
            </Text>
            <Text style={{fontFamily: fontFamily?.primaryFont?.medium}}>
              ₹ {subTotalPrice}
            </Text>
          </View>
          {/* Need the Flatlist for Discounts applied */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
              marginHorizontal: 20,
            }}>
            <Text style={{fontFamily: fontFamily?.primaryFont?.light}}>
              Discount:
            </Text>
            <Text style={{fontFamily: fontFamily?.primaryFont?.medium}}>
              ₹ 165
            </Text>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderStyle: 'dashed',
              marginHorizontal: 16,
              marginTop: 12,
            }}
          />
          {/* Calculate the final Total price */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
              marginHorizontal: 20,
            }}>
            <Text style={{fontFamily: fontFamily?.primaryFont?.light}}>
              Final Price:
            </Text>
            <Text style={{fontFamily: fontFamily?.primaryFont?.medium}}>
              ₹ 47475
            </Text>
          </View>

          {/* Stretchable Animated button inside a button needed */}
          <View
            style={{
              backgroundColor: colors?.darkBluegrey4,
              height: 55,
              marginHorizontal: 16,
              marginTop: 16,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              flexDirection: 'row',
            }}>
            <Animated.View
              {...panResponder.panHandlers}
              style={[
                {
                  height: 50,
                  width: 50,
                  backgroundColor: colors?.greyColorLight2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                  position: 'absolute',
                  marginLeft: 3,
                  marginTop: 2,
                },
                pan.getLayout(),
              ]}>
              <Image
                source={imagePath?.doubleArrowIcon}
                height={30}
                width={30}
                style={{height: 30, width: 30}}
              />
            </Animated.View>
            <Text
              style={{
                fontFamily: fontFamily?.primaryFont?.regular,
                color: colors?.white,
              }}>
              CHECKOUT
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};
export default CartProductsScreen;
// Also write test cases for FBModalView

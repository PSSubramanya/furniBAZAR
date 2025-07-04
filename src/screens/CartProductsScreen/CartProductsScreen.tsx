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
  Pressable,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import fontFamily from '../../constants/fontFamily';
import colors from '../../constants/colors';
import {discountData} from '../../utils/mockData';
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
  const [displayableCartData, setDisplayableCartData] = useState([]);
  const [discountCode, setDiscountCode] = useState('');
  const [discountValue, setDiscountValue] = useState(0);
  const [appliedDiscounts, setAppliedDiscounts] = useState<string[]>([]);
  const [subTotalPrice, setSubTotalPrice] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedItems, setSelectedItems] = useState<string[]>([]); //NOTE: Original value is []
  const [totalCartData, setTotalCartData] = useState<any>({});
  const [showVarietyModal, setShowVarietyModal] = useState(false);
  const [productVarietyDetails, setProductVarietyDetails] = useState([]);
  const [selectedSingleItem, setSelectedSingleItem] = useState<any>();
  const [selectedSingleVariant, setSelectedSingleVariant] = useState<any>();

  //NOTE: Need a new redux action and reducer for this values coming from products and numbers selected in this screen so it auto loads next time anywhere in any screen with related data.
  //NOTE: Add an info icon nextto discount to open a bottom Modal drawer to show what all discounts are added individually
  //NOTE: On slide navigate to the next page
  //NOTE: On delete of a product, 1st check if it is selected.
  //NOTE: Make it unselected(Manually or via code) then update the store via redux action "cartData"->state?.homeReducer?.cartData
  //NOTE: Modularise the code and also move styles to different file

  const calculateTotalCost = (cartItems: any) => {
    let tempPrice = 0;
    selectedItems?.map((val: any, ind: number) => {
      tempPrice +=
        Number(val?.price?.replace(',', '')) * cartItems?.[val?.name];
    });
    setSubTotalPrice(tempPrice);
  };

  const addItemsToCart = (item: any) => {
    let tempObject: any = {...totalCartData};
    let itemName: any = item?.name;
    if (
      Object?.keys(tempObject)?.length === 0 ||
      tempObject[itemName] === undefined
    ) {
      tempObject[itemName] = 1;
      setTotalCartData(tempObject);
    } else {
      tempObject[itemName] += 1;
      setTotalCartData(tempObject);
    }
    calculateTotalCost(tempObject);
  };

  //removeItemsToCart

  const applyDiscountCoupon = () => {
    let tempDiscount = discountValue;

    discountData?.map((val: any, ind: number) => {
      if (val?.discountCoupons === discountCode) {
        if (val?.discountPercent) {
          tempDiscount += subTotalPrice * (val?.discountPercent / 100);
        }
      }
    });

    discountData?.map((val: any, ind: number) => {
      if (val?.discountCoupons === discountCode) {
        if (val?.discountPrice) {
          tempDiscount += Number(val?.discountPrice);
        }
      }
    });
    // NOTE: Add a new array which keeps track of added Coupon so duplication doesn't happen
    setDiscountValue(tempDiscount);
  };

  useEffect(() => {
    let tempCartData = fetchCartData?.data;
    let cartDataToSet: any = [];
    tempCartData?.map((val: any, ind: any) => {
      if (val?.varieties) {
        cartDataToSet = [...cartDataToSet, val?.varieties?.[0]];
      } else {
        cartDataToSet = [...cartDataToSet, val];
      }
    });
    setDisplayableCartData(cartDataToSet);
  }, []);

  useEffect(() => {
    const tempTotal = subTotalPrice - discountValue;
    setTotalPrice(tempTotal);
  }, [discountValue]);

  useEffect(() => {
    if (slideCompleted === true) {
      navigation?.navigate('AddressSelectionScreen');
    }
  }, [slideCompleted]);

  useEffect(() => {
    const varietyData = selectedSingleItem?.varieties;
    setProductVarietyDetails(varietyData);
    setSelectedSingleVariant(varietyData?.[0]);
  }, [selectedSingleItem]);

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

  const renderVarietySectionModal = () => {
    return (
      <View
        style={{
          marginTop: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => {
              setShowVarietyModal(false);
            }}>
            <Image
              source={imagePath?.roundCloseIcon}
              height={30}
              width={30}
              style={{height: 20, width: 20}}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontFamily: fontFamily?.primaryFont?.medium,
            fontSize: 16,
            marginLeft: 13,
            marginTop: 10,
          }}>
          Choose the variant
        </Text>
        <FlatList
          data={productVarietyDetails}
          horizontal={true}
          contentContainerStyle={{marginTop: 10}}
          keyExtractor={item => item?.id}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  let tempCartData = cartData;
                  let cartDataToSet: any = [];

                  tempCartData?.map((val: any, ind: any) => {
                    if (val?.varieties) {
                      cartDataToSet = [...cartDataToSet, item];
                    } else {
                      cartDataToSet = [...cartDataToSet, val];
                    }
                  });
                  setDisplayableCartData(cartDataToSet);
                  setShowVarietyModal(false);
                  setSelectedSingleVariant(item);
                }}>
                <View
                  style={{
                    width: 100,
                    marginLeft: 10,
                    alignItems: 'center',
                    paddingHorizontal: 5,
                    paddingBottom: 3,
                    borderRadius: 5,
                    borderWidth:
                      selectedSingleVariant?.image?.[0] === item?.image?.[0]
                        ? 1
                        : 0,
                    borderColor:
                      selectedSingleVariant?.image?.[0] === item?.image?.[0]
                        ? colors?.greyishBlue
                        : colors?.white,
                    backgroundColor:
                      selectedSingleVariant?.image?.[0] === item?.image?.[0]
                        ? colors?.greyishBlue2
                        : colors?.white,
                  }}>
                  <Image
                    source={item?.image?.[0]}
                    height={60}
                    width={60}
                    style={{height: 60, width: 60}}
                    resizeMode={'contain'}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontFamily: fontFamily?.primaryFont?.regular,
                      fontSize: 12,
                    }}>
                    {item?.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

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
                        style={{
                          height: 25,
                          width: 25,
                          marginRight: 5,
                        }}
                      />
                    </TouchableOpacity>
                    <Pressable
                      onPress={() => {
                        if (item?.varieties) {
                          setSelectedSingleItem(item);
                          setShowVarietyModal(true);
                        }
                      }}>
                      <View
                        style={{
                          backgroundColor: colors?.greyColorLight3,
                          height: 80,
                          width: 80,
                          borderRadius: 5,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderWidth: item?.varieties !== undefined ? 2 : 0,
                          borderColor: colors?.borderColor,
                        }}>
                        <Image
                          source={displayableCartData?.[index]?.image?.[0]}
                          height={60}
                          width={60}
                          style={{height: 60, width: 60}}
                          resizeMode={'contain'}
                        />
                      </View>
                    </Pressable>
                    <View style={{marginLeft: 20}}>
                      <Pressable
                        onPress={() => {
                          navigation?.navigate('ProductViewScreen', {
                            productData: item,
                          });
                        }}>
                        <Text
                          style={{
                            fontFamily: fontFamily?.primaryFont?.regular,
                          }}>
                          {displayableCartData?.[index]?.name}
                        </Text>
                      </Pressable>
                      <Text
                        style={{
                          fontFamily: fontFamily?.primaryFont?.medium,
                          fontSize: 16,
                        }}>
                        ₹ {displayableCartData?.[index]?.price}
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
                      source={imagePath?.deleteIcon3}
                      height={18}
                      width={18}
                      style={{height: 22, width: 22}}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              {/* displayableCartData?.[index]?.price */}
              {/* {JSON.stringify(selectedItems)?.includes(
                JSON.stringify(item), */}
              {JSON.stringify(selectedItems)?.includes(
                JSON.stringify(displayableCartData?.[index]),
              ) && (
                <View
                  style={{
                    flexDirection: 'row',
                    borderWidth: 0.5,
                    borderRadius: 5,
                    width: 105,
                    marginLeft: 12,
                    marginBottom: 20,
                  }}>
                  <TouchableOpacity onPress={() => {}}>
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
                    {totalCartData[item?.name] ?? 0}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      addItemsToCart(item);
                      // addItemsToCart(displayableCartData?.[index]); //NOTE: Need to fix + - thing here
                    }}>
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
              )}
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
              onPress={() => {
                applyDiscountCoupon();
                discountData?.map((val: any, ind: number) => {
                  if (val?.discountCoupons === discountCode) {
                    const tempDiscountCodes = [
                      ...appliedDiscounts,
                      discountCode,
                    ];
                    setAppliedDiscounts(tempDiscountCodes);
                  }
                });
              }}
              disabled={appliedDiscounts?.includes(discountCode)}>
              <View
                style={{
                  backgroundColor: appliedDiscounts?.includes(discountCode)
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

          {/* List of Dicount Coupons added here */}
          <View
            style={{
              flexWrap: 'wrap',
              marginLeft: 20,
              marginTop: 10,
              flexDirection: 'row',
            }}>
            {appliedDiscounts?.map((val, ind) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: colors?.darkBluegrey4,
                    borderWidth: 1,
                    padding: 5,
                    borderColor: colors?.darkBluegrey4,
                    borderRadius: 3,
                    marginRight: 8,
                    marginBottom: 5,
                  }}>
                  <Text
                    style={{
                      color: colors?.white,
                      fontFamily: fontFamily?.primaryFont?.medium,
                      fontSize: 12,
                    }}>
                    {val}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      const tempArray = [...appliedDiscounts];
                      tempArray.splice(ind, 1);
                      setAppliedDiscounts(tempArray);
                    }}
                    style={{alignSelf: 'center'}}>
                    <Image
                      source={imagePath?.closeIconWhite}
                      height={15}
                      width={15}
                      style={{
                        height: 15,
                        width: 15,
                        marginLeft: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
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
              {discountValue === 0 ? 'N/A' : `₹ ${discountValue}`}
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
              ₹ {totalPrice}
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
      <FBModalView
        children={renderVarietySectionModal}
        modalVisible={showVarietyModal}
        modalHeightPercentage={'30%'}
        modalColor={colors?.white}
      />
    </View>
  );
};
export default CartProductsScreen;

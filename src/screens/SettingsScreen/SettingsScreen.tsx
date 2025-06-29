import React, {useState, useEffect, useRef} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Switch,
  Animated,
} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';
import imagePath from '../../constants/imagePath';

const SettingsScreen = (props: any) => {
  const translateY = useRef(new Animated.Value(0)).current;
  const rotation = useRef(new Animated.Value(0)).current;
  const currentRotation = useRef(0); // Keep track of accumulated rotation

  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [historySubItemsDisplay, setHistorySubItemsDisplay] = useState(false);

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: historySubItemsDisplay ? 3 : 0, // Moves down when selected
      duration: 300,
      useNativeDriver: true,
    }).start();
    handleRotate();
  }, [historySubItemsDisplay]);

  const handleRotate = () => {
    if (historySubItemsDisplay) {
      currentRotation.current = 90;
    } else {
      currentRotation.current = 0;
    }

    Animated.timing(rotation, {
      toValue: currentRotation.current,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const rotateInterpolation = rotation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const orderAndShoppingPreferences = () => {
    return (
      <>
        <Text
          style={{
            fontFamily: fontFamily?.primaryFont?.semiBold,
            fontSize: 18,
            marginLeft: 12,
            marginTop: 20,
            color: colors?.darkBluegrey4,
          }}>
          ORDER & SHOPPING PREFERENCES
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            marginHorizontal: 10,
            marginTop: 10,
            borderRadius: 5,
            shadowColor: colors?.black,
            shadowOffset: {width: -1, height: -1},
            shadowOpacity: 0.2,
            shadowRadius: 10,
            elevation: 10,
          }}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 50,
                marginHorizontal: 8,
                borderBottomWidth: 0.5,
                borderColor: colors?.greyishBlue2,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath?.saveAddressIcon}
                  height={30}
                  width={30}
                  style={{height: 20, width: 20}}
                />
                <Text
                  style={{
                    fontFamily: fontFamily?.primaryFont?.medium,
                    marginLeft: 8,
                    marginTop: 1,
                  }}>
                  Saved Addresses
                </Text>
              </View>
              <Image
                source={imagePath?.rightChevronIcon}
                height={30}
                width={30}
                style={{height: 20, width: 20, justifyContent: 'flex-end'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 50,
                marginHorizontal: 8,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
                borderColor: colors?.greyishBlue2,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath?.creditCardIcon}
                  height={30}
                  width={30}
                  style={{height: 20, width: 20}}
                />
                <Text
                  style={{
                    fontFamily: fontFamily?.primaryFont?.medium,
                    marginLeft: 8,
                    marginTop: 1,
                  }}>
                  Payment Methods
                </Text>
              </View>
              <Image
                source={imagePath?.rightChevronIcon}
                height={30}
                width={30}
                style={{height: 20, width: 20, justifyContent: 'flex-end'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setHistorySubItemsDisplay(!historySubItemsDisplay);
            }}>
            <View
              style={{
                height: 50,
                marginHorizontal: 8,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
                borderColor: colors?.greyishBlue2,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath?.historyIcon}
                  height={30}
                  width={30}
                  style={{height: 20, width: 20}}
                />
                <Text
                  style={{
                    fontFamily: fontFamily?.primaryFont?.medium,
                    marginLeft: 8,
                    marginTop: 1,
                  }}>
                  History
                </Text>
              </View>
              <Animated.Image
                source={imagePath?.rightChevronIcon}
                height={30}
                width={30}
                style={[
                  {height: 20, width: 20, justifyContent: 'flex-end'},
                  {transform: [{rotate: rotateInterpolation}]},
                ]}
              />
            </View>
          </TouchableOpacity>
          {historySubItemsDisplay && (
            <Animated.View style={{transform: [{translateY}]}}>
              <TouchableOpacity onPress={() => {}}>
                <View
                  style={{
                    height: 50,
                    marginHorizontal: 8,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderBottomWidth: 0.5,
                    borderColor: colors?.greyishBlue2,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={imagePath?.viewedItemIcon}
                      height={30}
                      width={30}
                      style={{height: 20, width: 20}}
                    />
                    <Text
                      style={{
                        fontFamily: fontFamily?.primaryFont?.medium,
                        marginLeft: 8,
                        marginTop: 1,
                      }}>
                      Viewed Items
                    </Text>
                  </View>
                  <Image
                    source={imagePath?.rightChevronIcon}
                    height={30}
                    width={30}
                    style={{height: 20, width: 20, justifyContent: 'flex-end'}}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <View
                  style={{
                    height: 50,
                    marginHorizontal: 8,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderBottomWidth: 0.5,
                    borderColor: colors?.greyishBlue2,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={imagePath?.receiptIcon}
                      height={30}
                      width={30}
                      style={{height: 20, width: 20}}
                    />
                    <Text
                      style={{
                        fontFamily: fontFamily?.primaryFont?.medium,
                        marginLeft: 8,
                        marginTop: 1,
                      }}>
                      Invoices and Receipts
                    </Text>
                  </View>
                  <Image
                    source={imagePath?.rightChevronIcon}
                    height={30}
                    width={30}
                    style={{height: 20, width: 20, justifyContent: 'flex-end'}}
                  />
                </View>
              </TouchableOpacity>
            </Animated.View>
          )}
        </View>
      </>
    );
  };

  const legalPolicies = () => {
    return (
      <>
        <Text
          style={{
            fontFamily: fontFamily?.primaryFont?.semiBold,
            fontSize: 18,
            marginLeft: 12,
            marginTop: 20,
            color: colors?.darkBluegrey4,
          }}>
          LEGAL POLICIES
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            marginHorizontal: 10,
            marginTop: 10,
            borderRadius: 5,
            shadowColor: colors?.black,
            shadowOffset: {width: -1, height: -1},
            shadowOpacity: 0.2,
            shadowRadius: 10,
            elevation: 10,
          }}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 50,
                marginHorizontal: 8,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
                borderColor: colors?.greyishBlue2,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath?.secureIcon}
                  height={30}
                  width={30}
                  style={{height: 20, width: 20}}
                />
                <Text
                  style={{
                    fontFamily: fontFamily?.primaryFont?.medium,
                    marginLeft: 8,
                    marginTop: 1,
                  }}>
                  Privacy Policy
                </Text>
              </View>
              <Image
                source={imagePath?.rightChevronIcon}
                height={30}
                width={30}
                style={{height: 20, width: 20, justifyContent: 'flex-end'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 50,
                marginHorizontal: 8,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
                borderColor: colors?.greyishBlue2,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath?.termsAndConditionsIcon}
                  height={30}
                  width={30}
                  style={{height: 20, width: 20}}
                />
                <Text
                  style={{
                    fontFamily: fontFamily?.primaryFont?.medium,
                    marginLeft: 8,
                    marginTop: 1,
                  }}>
                  Terms & Conditions
                </Text>
              </View>
              <Image
                source={imagePath?.rightChevronIcon}
                height={30}
                width={30}
                style={{height: 20, width: 20, justifyContent: 'flex-end'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 50,
                marginHorizontal: 8,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
                borderColor: colors?.greyishBlue2,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath?.freeDeliveryIcon}
                  height={30}
                  width={30}
                  style={{height: 20, width: 20}}
                />
                <Text
                  style={{
                    fontFamily: fontFamily?.primaryFont?.medium,
                    marginLeft: 8,
                    marginTop: 1,
                  }}>
                  Return and Refund Policy
                </Text>
              </View>
              <Image
                source={imagePath?.rightChevronIcon}
                height={30}
                width={30}
                style={{height: 20, width: 20, justifyContent: 'flex-end'}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const accountPreferences = () => {
    return (
      <>
        <Text
          style={{
            fontFamily: fontFamily?.primaryFont?.semiBold,
            fontSize: 18,
            marginLeft: 12,
            marginTop: 20,
            color: colors?.darkBluegrey4,
          }}>
          ACCOUNT PREFERENCES
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            marginHorizontal: 10,
            marginTop: 10,
            borderRadius: 5,
            shadowColor: colors?.black,
            shadowOffset: {width: -1, height: -1},
            shadowOpacity: 0.2,
            shadowRadius: 10,
            elevation: 10,
          }}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 50,
                marginHorizontal: 8,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
                borderColor: colors?.greyishBlue2,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath?.languageIcon}
                  height={30}
                  width={30}
                  style={{height: 20, width: 20}}
                />
                <Text
                  style={{
                    fontFamily: fontFamily?.primaryFont?.medium,
                    marginLeft: 8,
                    marginTop: 1,
                  }}>
                  Language Selection
                </Text>
              </View>
              <Image
                source={imagePath?.rightChevronIcon}
                height={30}
                width={30}
                style={{height: 20, width: 20, justifyContent: 'flex-end'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 50,
                marginHorizontal: 8,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
                borderColor: colors?.greyishBlue2,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath?.currencyPreferenceIcon}
                  height={30}
                  width={30}
                  style={{height: 20, width: 20}}
                />
                <Text
                  style={{
                    fontFamily: fontFamily?.primaryFont?.medium,
                    marginLeft: 8,
                    marginTop: 1,
                  }}>
                  Currency Preference
                </Text>
              </View>
              <Image
                source={imagePath?.rightChevronIcon}
                height={30}
                width={30}
                style={{height: 20, width: 20, justifyContent: 'flex-end'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 50,
                marginHorizontal: 8,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
                borderColor: colors?.greyishBlue2,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath?.notificationBellIcon}
                  height={30}
                  width={30}
                  style={{height: 20, width: 20}}
                />
                <Text
                  style={{
                    fontFamily: fontFamily?.primaryFont?.medium,
                    marginLeft: 8,
                    marginTop: 1,
                  }}>
                  Enable Notification
                </Text>
              </View>
              <Switch
                onValueChange={() => {
                  setNotificationEnabled(!notificationEnabled);
                }}
                onChange={() => {}}
                value={notificationEnabled}
                trackColor={{true: colors?.darkBluegrey4}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const support = () => {
    return (
      <>
        <Text
          style={{
            fontFamily: fontFamily?.primaryFont?.semiBold,
            fontSize: 18,
            marginLeft: 12,
            marginTop: 20,
            color: colors?.darkBluegrey4,
          }}>
          SUPPORT
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            marginHorizontal: 10,
            marginTop: 10,
            borderRadius: 5,
            shadowColor: colors?.black,
            shadowOffset: {width: -1, height: -1},
            shadowOpacity: 0.2,
            shadowRadius: 10,
            elevation: 10,
          }}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 50,
                marginHorizontal: 8,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
                borderColor: colors?.greyishBlue2,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath?.faqIcon}
                  height={30}
                  width={30}
                  style={{height: 20, width: 20}}
                />
                <Text
                  style={{
                    fontFamily: fontFamily?.primaryFont?.medium,
                    marginLeft: 8,
                    marginTop: 1,
                  }}>
                  Help Centre (FAQ)
                </Text>
              </View>
              <Image
                source={imagePath?.rightChevronIcon}
                height={30}
                width={30}
                style={{height: 20, width: 20, justifyContent: 'flex-end'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 50,
                marginHorizontal: 8,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
                borderColor: colors?.greyishBlue2,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath?.contactUsIcon}
                  height={30}
                  width={30}
                  style={{height: 20, width: 20}}
                />
                <Text
                  style={{
                    fontFamily: fontFamily?.primaryFont?.medium,
                    marginLeft: 8,
                    marginTop: 1,
                  }}>
                  Contact Us
                </Text>
              </View>
              <Image
                source={imagePath?.rightChevronIcon}
                height={30}
                width={30}
                style={{height: 20, width: 20, justifyContent: 'flex-end'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 50,
                marginHorizontal: 8,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
                borderColor: colors?.greyishBlue2,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath?.reportIcon}
                  height={30}
                  width={30}
                  style={{height: 20, width: 20}}
                />
                <Text
                  style={{
                    fontFamily: fontFamily?.primaryFont?.medium,
                    marginLeft: 8,
                    marginTop: 1,
                  }}>
                  Report a Problem
                </Text>
              </View>
              <Image
                source={imagePath?.rightChevronIcon}
                height={30}
                width={30}
                style={{height: 20, width: 20, justifyContent: 'flex-end'}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <View style={{paddingBottom: 20}}>
      {accountPreferences()}
      {orderAndShoppingPreferences()}
      {legalPolicies()}
      {support()}
    </View>
  );
};
export default SettingsScreen;

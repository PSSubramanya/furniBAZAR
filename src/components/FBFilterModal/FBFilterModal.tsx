import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';
import imagePath from '../../constants/imagePath';
import testID from '../../constants/testIdConstants';

const FBFilterModal = (props: any) => {
  const {
    modalVisible,
    setModalVisible,
    modalHeightPercentage = '90%',
    modalColor = colors?.white,
  } = props;

  //   const priceRanges = [
  //     {range: '2k - 5k', lowerRange: 2000, higherRange: 5000},
  //     {range: '5k - 10k', lowerRange: 5000, higherRange: 10000},
  //     {range: '10k - 20k', lowerRange: 10000, higherRange: 20000},
  //     {range: '20k - 50k', lowerRange: 20000, higherRange: 50000},
  //     {range: '50k - 100k', lowerRange: 50000, higherRange: 100000},
  //     {range: '100k - 200k', lowerRange: 100000, higherRange: 200000},
  //   ];

  const priceRanges = [
    {value: '2000', rangeValue: '2k'},
    {value: '5000', rangeValue: '5k'},
    {value: '10000', rangeValue: '10k'},
    {value: '20000', rangeValue: '20k'},
    {value: '50000', rangeValue: '50k'},
    {value: '100000', rangeValue: '100k'},
  ];

  const serchRef = useRef<TextInput>(null);
  const [companyNameSearch, setCompanyNameSearch] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [searchedCompanies, setSearchedCompanies] = useState<string[]>([]);
  /* add searched products by destructurising on click of search Button */

  const [selectedRate, setSelectedRate] = useState<string>('5.0');

  const [sliderValue, setSliderValue] = useState<number>(0);
  const [scrollLock, setScrollLock] = useState(false);
  const slideWidth = 72; //60;

  useEffect(() => {
    const companiesName = ['Nilkamal', 'Godrej', 'IKEA'];
    setSearchedCompanies(companiesName);
  }, []);

  useEffect(() => {
    console.log('sliderValue', sliderValue);
  }, [sliderValue]);

  const setScrollIndex = useCallback(
    (eventVal: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = eventVal.nativeEvent.contentOffset.x;

      if (!scrollLock) {
        setScrollLock(true); // Lock scroll update until momentum ends
        const direction = offsetX > 0 ? 'left' : 'right';

        if (direction === 'right') {
          setSliderValue(sliderValue + slideWidth);
        } else if (direction === 'left') {
          setSliderValue(sliderValue - slideWidth);
        }
      }
    },
    [scrollLock, sliderValue],
  );

  // Unlock after scroll ends
  const handleScrollEnd = () => {
    setScrollLock(false);
  };

  return (
    <Modal
      isVisible={modalVisible}
      style={{
        width: '100%',
        marginLeft: 0,
        justifyContent: 'flex-end',
        marginBottom: -20,
      }}>
      <View
        style={{
          height: modalHeightPercentage,
          borderRadius: 10,
          backgroundColor: modalColor,
          justifyContent: 'space-between',
        }}>
        <ScrollView key={'index'}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  height: 40,
                  width: 230,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: fontFamily?.primaryFont?.semiBold,
                    fontSize: 24,
                  }}>
                  FILTER
                </Text>
                <TouchableOpacity onPress={() => {}}>
                  <Text
                    style={{
                      marginRight: 10,
                      fontFamily: fontFamily?.primaryFont?.regular,
                      fontSize: 16,
                    }}>
                    Clear
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                marginTop: 10,
                marginLeft: 12,
                fontFamily: fontFamily?.primaryFont?.regular,
              }}>
              Selected Category
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                alignItems: 'center',
              }}>
              <View
                style={{
                  marginLeft: 10,
                  backgroundColor: colors?.darkBluegrey4,
                  height: 40,
                  width: 40,
                  borderRadius: 6,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={imagePath?.armChairIconColored}
                  height={30}
                  width={30}
                  style={{
                    height: 30,
                    width: 30,
                    alignSelf: 'center',
                  }}
                  testID={testID?.filteredCategoryIcon}
                />
              </View>
              <Text
                style={{
                  flex: 1,
                  marginLeft: 12,
                  fontFamily: fontFamily?.primaryFont?.semiBold,
                  fontSize: 16,
                  textTransform: 'uppercase',
                }}>
                Arm Chair
              </Text>
            </View>
            <Text
              style={{
                marginTop: 10,
                marginLeft: 12,
                fontFamily: fontFamily?.primaryFont?.regular,
              }}>
              Search Company
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                backgroundColor: isFocused
                  ? colors?.greyishBlue2
                  : colors?.white,
                borderWidth: 2,
                borderColor: colors?.borderColor,
                paddingLeft: 10,
                borderRadius: 10,
                height: 50,
                marginTop: 10,
              }}>
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <Image
                  source={imagePath?.searchIcon}
                  height={30}
                  width={30}
                  style={{
                    height: 20,
                    width: 20,
                    alignSelf: 'center',
                  }}
                  testID={testID?.searchIcon}
                />
              </TouchableOpacity>
              <TextInput
                placeholder="Search"
                placeholderTextColor={colors?.greyColor}
                value={companyNameSearch}
                ref={serchRef}
                onChangeText={val => {
                  setCompanyNameSearch(val);
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={{
                  fontFamily: fontFamily?.primaryFont?.regular,
                  fontSize: 16,
                  marginLeft: 16,
                  width: 300,
                }}
              />
            </View>

            <View
              style={{
                flexWrap: 'wrap',
                marginLeft: 12,
                marginTop: 10,
                flexDirection: 'row',
              }}>
              {searchedCompanies?.map((val, ind) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      backgroundColor: colors?.greyishBlue2,
                      borderWidth: 1,
                      padding: 5,
                      borderColor: colors?.borderColor,
                      borderRadius: 3,
                      marginRight: 8,
                      marginBottom: 5,
                    }}>
                    <Text
                      style={{
                        color: colors?.darkBluegrey4,
                        fontFamily: fontFamily?.primaryFont?.regular,
                      }}>
                      {val}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={{alignSelf: 'center'}}>
                      <Image
                        source={imagePath?.closeIconBlack}
                        height={15}
                        width={15}
                        style={{
                          height: 15,
                          width: 15,
                          marginLeft: 5,
                        }}
                        testID={testID?.searchIcon}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>

            <Text
              style={{
                marginTop: 10,
                marginLeft: 12,
                fontFamily: fontFamily?.primaryFont?.regular,
              }}>
              Ratings
            </Text>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: colors?.greyColorLight2,
                height: 45,
                marginHorizontal: 10,
                marginTop: 10,
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedRate('1.0');
                }}
                style={{
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRightWidth: 1.5,
                    borderColor: colors?.greyishBlue,
                    width: selectedRate === '1.0' ? 80 : 60,
                    height: selectedRate === '1.0' ? 50 : 40,
                    borderRadius: selectedRate === '1.0' ? 10 : 0,
                    backgroundColor:
                      selectedRate === '1.0' ? colors?.darkBluegrey4 : 'none',
                  }}>
                  <Text
                    style={{
                      fontFamily: fontFamily?.primaryFont?.medium,
                      color:
                        selectedRate === '1.0' ? colors?.white : colors?.black,
                    }}>
                    1.0
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectedRate('2.0');
                }}
                style={{
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRightWidth: 1.5,
                    width: selectedRate === '2.0' ? 80 : 60,
                    height: selectedRate === '2.0' ? 50 : 40,
                    borderColor: colors?.greyishBlue,
                    borderRadius: selectedRate === '2.0' ? 10 : 0,
                    backgroundColor:
                      selectedRate === '2.0' ? colors?.darkBluegrey4 : 'none',
                  }}>
                  <Text
                    style={{
                      fontFamily: fontFamily?.primaryFont?.medium,
                      color:
                        selectedRate === '2.0' ? colors?.white : colors?.black,
                    }}>
                    2.0
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectedRate('3.0');
                }}
                style={{
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRightWidth: 1.5,
                    width: selectedRate === '3.0' ? 80 : 60,
                    height: selectedRate === '3.0' ? 50 : 40,
                    borderColor: colors?.greyishBlue,
                    borderRadius: selectedRate === '3.0' ? 10 : 0,
                    backgroundColor:
                      selectedRate === '3.0' ? colors?.darkBluegrey4 : 'none',
                  }}>
                  <Text
                    style={{
                      fontFamily: fontFamily?.primaryFont?.medium,
                      color:
                        selectedRate === '3.0' ? colors?.white : colors?.black,
                    }}>
                    3.0
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectedRate('4.0');
                }}
                style={{
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRightWidth: 1.5,
                    width: selectedRate === '4.0' ? 80 : 60,
                    height: selectedRate === '4.0' ? 50 : 40,
                    borderColor: colors?.greyishBlue,
                    borderRadius: selectedRate === '4.0' ? 10 : 0,
                    backgroundColor:
                      selectedRate === '4.0' ? colors?.darkBluegrey4 : 'none',
                  }}>
                  <Text
                    style={{
                      fontFamily: fontFamily?.primaryFont?.medium,
                      color:
                        selectedRate === '4.0' ? colors?.white : colors?.black,
                    }}>
                    4.0
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectedRate('5.0');
                }}
                style={{
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: selectedRate === '5.0' ? 80 : 60,
                    height: selectedRate === '5.0' ? 50 : 40,
                    borderColor: colors?.greyishBlue,
                    borderRadius: selectedRate === '5.0' ? 10 : 0,
                    backgroundColor:
                      selectedRate === '5.0' ? colors?.darkBluegrey4 : 'none',
                  }}>
                  <Text
                    style={{
                      fontFamily: fontFamily?.primaryFont?.medium,
                      color:
                        selectedRate === '5.0' ? colors?.white : colors?.black,
                    }}>
                    5.0
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <Text
              style={{
                marginTop: 40,
                marginLeft: 12,
                fontFamily: fontFamily?.primaryFont?.regular,
              }}>
              Price range
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View>
                <ScrollView
                  style={{
                    height: 20,
                    marginTop: 15,
                    zIndex: 1,
                  }}
                  scrollEnabled={true}
                  horizontal={true}
                  onScroll={ev => {
                    setScrollIndex(ev);
                  }}
                  onMomentumScrollEnd={handleScrollEnd}
                  scrollEventThrottle={30} // Smooth performance
                  showsHorizontalScrollIndicator={false}>
                  <View
                    style={{
                      backgroundColor: colors?.darkBluegrey4,
                      height: 20,
                      width: 20,
                      borderRadius: 10,
                      marginLeft: 5 + sliderValue,
                    }}
                  />
                </ScrollView>
                <View
                  style={{
                    height: 3,
                    backgroundColor: colors?.borderColor,
                    marginHorizontal: 10,
                    marginTop: -10,
                    width: 360,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    // backgroundColor: 'orange',
                    marginTop: 20,
                    height: 40,
                  }}>
                  <Text
                    style={{
                      fontFamily: fontFamily?.primaryFont?.semiBold,
                      fontSize: 12,
                      position: 'absolute',
                      left: 5,
                    }}>
                    2k
                  </Text>
                  <Text
                    style={{
                      fontFamily: fontFamily?.primaryFont?.semiBold,
                      fontSize: 12,
                      position: 'absolute',
                      left: 77, //65
                    }}>
                    5k
                  </Text>
                  <Text
                    style={{
                      fontFamily: fontFamily?.primaryFont?.semiBold,
                      fontSize: 12,
                      position: 'absolute',
                      left: 149, //137, //125,
                    }}>
                    10k
                  </Text>
                  <Text
                    style={{
                      fontFamily: fontFamily?.primaryFont?.semiBold,
                      fontSize: 12,
                      position: 'absolute',
                      left: 221, //185,
                    }}>
                    20k
                  </Text>
                  <Text
                    style={{
                      fontFamily: fontFamily?.primaryFont?.semiBold,
                      fontSize: 12,
                      position: 'absolute',
                      left: 293, //245,
                    }}>
                    50k
                  </Text>
                  <Text
                    style={{
                      fontFamily: fontFamily?.primaryFont?.semiBold,
                      fontSize: 12,
                      position: 'absolute',
                      left: 350, //365, //305,
                    }}>
                    100k
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}>
            <View
              style={{
                backgroundColor: colors?.white,
                height: 60,
                width: 180,
                marginBottom: 60,
                marginLeft: 10,
                borderRadius: 6,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
                borderColor: colors?.darkBluegrey4,
              }}>
              <Text
                style={{
                  color: colors?.darkBlueGrey,
                  fontFamily: fontFamily?.primaryFont?.semiBold,
                  fontSize: 16,
                }}>
                CLOSE
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                backgroundColor: colors?.darkBluegrey4,
                height: 60,
                width: 180,
                marginBottom: 60,
                marginRight: 10,
                borderRadius: 6,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: colors?.white,
                  fontFamily: fontFamily?.primaryFont?.semiBold,
                  fontSize: 16,
                }}>
                SAVE
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default FBFilterModal;
// type of products - auto filled from home screen etc.

import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';
import imagePath from '../../constants/imagePath';
import testID from '../../constants/testIdConstants';
import FBSlider from '../FBSlider/FBSlider';
import {FBFilterModalProps} from './typesFile';

const FBFilterModal = (props: FBFilterModalProps) => {
  const {
    modalVisible,
    setModalVisible,
    modalHeightPercentage = '90%',
    modalColor = colors?.white,
    selectedProductIcon,
    selectedProductName,
  } = props;

  const serchRef = useRef<TextInput>(null);
  const [companyNameSearch, setCompanyNameSearch] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [searchedCompanies, setSearchedCompanies] = useState<string[]>([]);
  const [selectedRate, setSelectedRate] = useState<string>('5.0');

  return (
    <Modal
      isVisible={modalVisible}
      testID={testID?.filterModalComponent}
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
          paddingHorizontal: 5,
        }}
        testID={testID?.filterModal?.view}>
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
                  }}
                  testID={testID?.filterModal?.text}>
                  FILTER
                </Text>
                <TouchableOpacity
                  onPress={() => {}}
                  testID={testID?.filterModal?.clearbutton}>
                  <Text
                    style={{
                      marginRight: 10,
                      fontFamily: fontFamily?.primaryFont?.regular,
                      fontSize: 16,
                    }}
                    testID={testID?.filterModal?.cleartext}>
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
              }}
              testID={testID?.filterModal?.selectedCategoryText}>
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
                  source={selectedProductIcon}
                  height={30}
                  width={30}
                  style={{
                    height: 30,
                    width: 30,
                    alignSelf: 'center',
                  }}
                  testID={testID?.filterModal?.filteredCategoryIcon}
                />
              </View>
              <Text
                style={{
                  flex: 1,
                  marginLeft: 12,
                  fontFamily: fontFamily?.primaryFont?.semiBold,
                  fontSize: 16,
                  textTransform: 'uppercase',
                }}
                testID={testID?.filterModal?.filteredCategoryText}>
                {selectedProductName}
              </Text>
            </View>
            <Text
              style={{
                marginTop: 10,
                marginLeft: 12,
                fontFamily: fontFamily?.primaryFont?.regular,
              }}
              testID={testID?.filterModal?.companySearch}>
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
                onPress={() => {
                  if (!searchedCompanies?.includes(companyNameSearch)) {
                    const searchedCompanyNamesArray = [
                      ...searchedCompanies,
                      companyNameSearch,
                    ];
                    setSearchedCompanies(searchedCompanyNamesArray);
                  }
                }}
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
                testID={testID?.onPressSearchCompany}>
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
                testID={testID?.filterModal?.companySearchInput}
              />
            </View>

            <View
              style={{
                flexWrap: 'wrap',
                marginLeft: 12,
                marginTop: 10,
                flexDirection: 'row',
              }}
              testID={testID?.filterModal?.selectedCompaniesView}>
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
                    }}
                    testID={testID?.filterModal?.selectedCompanies + ind}>
                    <Text
                      style={{
                        color: colors?.darkBluegrey4,
                        fontFamily: fontFamily?.primaryFont?.regular,
                      }}
                      testID={testID?.filterModal?.selectedCompanyNames + ind}>
                      {val}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        const tempArray = [...searchedCompanies];
                        tempArray.splice(ind, 1);
                        setSearchedCompanies(tempArray);
                      }}
                      style={{alignSelf: 'center'}}
                      testID={testID?.filterModal?.crossIconButton}>
                      <Image
                        source={imagePath?.closeIconBlack}
                        height={15}
                        width={15}
                        style={{
                          height: 15,
                          width: 15,
                          marginLeft: 5,
                        }}
                        testID={testID?.filterModal?.crossIcon}
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
                }}
                testID={testID?.filterModal?.rating1}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRightWidth: 1.5,
                    borderColor: colors?.greyishBlue,
                    width: selectedRate === '1.0' ? 80 : 60,
                    height: selectedRate === '1.0' ? 50 : 30,
                    borderRadius: selectedRate === '1.0' ? 10 : 0,
                    backgroundColor:
                      selectedRate === '1.0'
                        ? colors?.darkBluegrey4
                        : colors?.greyColorLight2,
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
                }}
                testID={testID?.filterModal?.rating2}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRightWidth: 1.5,
                    width: selectedRate === '2.0' ? 80 : 60,
                    height: selectedRate === '2.0' ? 50 : 30,
                    borderColor: colors?.greyishBlue,
                    borderRadius: selectedRate === '2.0' ? 10 : 0,
                    backgroundColor:
                      selectedRate === '2.0'
                        ? colors?.darkBluegrey4
                        : colors?.greyColorLight2,
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
                }}
                testID={testID?.filterModal?.rating3}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRightWidth: 1.5,
                    width: selectedRate === '3.0' ? 80 : 60,
                    height: selectedRate === '3.0' ? 50 : 30,
                    borderColor: colors?.greyishBlue,
                    borderRadius: selectedRate === '3.0' ? 10 : 0,
                    backgroundColor:
                      selectedRate === '3.0'
                        ? colors?.darkBluegrey4
                        : colors?.greyColorLight2,
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
                }}
                testID={testID?.filterModal?.rating4}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRightWidth: 1.5,
                    width: selectedRate === '4.0' ? 80 : 60,
                    height: selectedRate === '4.0' ? 50 : 30,
                    borderColor: colors?.greyishBlue,
                    borderRadius: selectedRate === '4.0' ? 10 : 0,
                    backgroundColor:
                      selectedRate === '4.0'
                        ? colors?.darkBluegrey4
                        : colors?.greyColorLight2,
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
                }}
                testID={testID?.filterModal?.rating5}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: selectedRate === '5.0' ? 80 : 60,
                    height: selectedRate === '5.0' ? 50 : 30,
                    borderColor: colors?.greyishBlue,
                    borderRadius: selectedRate === '5.0' ? 10 : 0,
                    backgroundColor:
                      selectedRate === '5.0'
                        ? colors?.darkBluegrey4
                        : colors?.greyColorLight2,
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
                marginTop: 20,
              }}
              testID={testID?.filterModal?.slider}>
              <View>
                <FBSlider />
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 5,
                    height: 40,
                  }}>
                  <Text
                    style={{
                      fontFamily: fontFamily?.primaryFont?.semiBold,
                      fontSize: 12,
                      position: 'absolute',
                    }}>
                    2k
                  </Text>
                  <Text
                    style={{
                      fontFamily: fontFamily?.primaryFont?.semiBold,
                      fontSize: 12,
                      position: 'absolute',
                      left: 65,
                    }}>
                    5k
                  </Text>
                  <Text
                    style={{
                      fontFamily: fontFamily?.primaryFont?.semiBold,
                      fontSize: 12,
                      position: 'absolute',
                      left: 130,
                    }}>
                    10k
                  </Text>
                  <Text
                    style={{
                      fontFamily: fontFamily?.primaryFont?.semiBold,
                      fontSize: 12,
                      position: 'absolute',
                      left: 195,
                    }}>
                    20k
                  </Text>
                  <Text
                    style={{
                      fontFamily: fontFamily?.primaryFont?.semiBold,
                      fontSize: 12,
                      position: 'absolute',
                      left: 260,
                    }}>
                    50k
                  </Text>
                  <Text
                    style={{
                      fontFamily: fontFamily?.primaryFont?.semiBold,
                      fontSize: 12,
                      position: 'absolute',
                      left: 325,
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
            marginHorizontal: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}
            testID={testID?.filterModal?.close}>
            <View
              style={{
                backgroundColor: colors?.white,
                height: 60,
                width: 180,
                marginBottom: 60,
                // marginLeft: 10,
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
          <TouchableOpacity
            onPress={() => {}}
            testID={testID?.filterModal?.apply}>
            <View
              style={{
                backgroundColor: colors?.darkBluegrey4,
                height: 60,
                width: 180,
                marginBottom: 60,
                // marginRight: 10,
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
                APPLY
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default FBFilterModal;

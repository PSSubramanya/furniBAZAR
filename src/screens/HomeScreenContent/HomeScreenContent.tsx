import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Animated,
} from 'react-native';
import {styles, themeStyle} from './styles';
import imagePath from '../../constants/imagePath';
import testID from '../../constants/testIdConstants';
import colors from '../../constants/colors';
import {ProductListProps} from './typesFile';
import fontFamily from '../../constants/fontFamily';

const HomeScreenContent = (props: any) => {
  const {navigation} = props;

  const furnitureCategories = [
    {
      id: '0',
      name: 'Arm Chair',
      image: imagePath?.armChairIcon,
      selectedImage: imagePath?.armChairIconColored,
    },
    {
      id: '1',
      name: 'Table Light',
      image: imagePath?.tableLampIcon,
      selectedImage: imagePath?.tableLampIconColored,
    },
    {
      id: '2',
      name: 'Sofa',
      image: imagePath?.sofaIcon,
      selectedImage: imagePath?.sofaIconColored,
    },
    {
      id: '3',
      name: 'Dressing Table',
      image: imagePath?.dressingTableIcon,
      selectedImage: imagePath?.dressingTableIconColored,
    },
    {
      id: '4',
      name: 'Bed',
      image: imagePath?.bedIcon,
      selectedImage: imagePath?.bedIconColored,
    },
    {
      id: '5',
      name: 'Bedside Table',
      image: imagePath?.bedsideTable,
      selectedImage: imagePath?.bedsideTableColored,
    },
    {
      id: '6',
      name: 'Wardrobe',
      image: imagePath?.wardrobeIcon,
      selectedImage: imagePath?.wardrobeIconColored,
    },
  ];

  const armChairsList = [
    {
      id: '0',
      name: 'Yellow Ox Chair',
      image: imagePath?.armChair1,
      companyName: 'MONICA FORSTER',
      rating: '4.6',
      price: '16,240.00',
    },
    {
      id: '1',
      name: 'Cream Sofa',
      image: imagePath?.armChair2,
      companyName: 'ANDERSSEN VOLL',
      rating: '4.2',
      price: '4,240.00',
    },
    {
      id: '2',
      name: 'Red Throne',
      image: imagePath?.armChair3,
      companyName: 'ANDERSSEN VOLL',
      rating: '4.8',
      price: '20,240.00',
    },
    {
      id: '3',
      name: 'Leather Brown Sofa',
      image: imagePath?.armChair4,
      companyName: 'ANDERSSEN VOLL',
      rating: '4.8',
      price: '20,240.00',
    },
    {
      id: '4',
      name: 'Leather Sofa',
      image: imagePath?.armChair5,
      companyName: 'IKEA',
      rating: '4.6',
      price: '33,240.00',
    },
    {
      id: '5',
      name: 'Dark Chocoloate Sofa',
      image: imagePath?.armChair6,
      companyName: 'GODREJ',
      rating: '4.0',
      price: '8,240.00',
    },
    {
      id: '6',
      name: 'Wider Sofa',
      image: imagePath?.armChair7,
      companyName: 'ANDERSSEN VOLL',
      rating: '4.2',
      price: '13,240.00',
    },
    {
      id: '7',
      name: 'Lounge Chair',
      image: imagePath?.armChair8,
      companyName: 'IKEA',
      rating: '4.0',
      price: '6,240.00',
    },
    {
      id: '8',
      name: 'Savanna Easy Chair',
      image: imagePath?.armChair9,
      companyName: 'NILKAMAL',
      rating: '4.8',
      price: '20,240.00',
    },
    {
      id: '9',
      name: 'Savanna Easy Blue Chair',
      image: imagePath?.armChair10,
      companyName: 'NILKAMAL',
      rating: '4.9',
      price: '22,240.00',
    },
    {
      id: '10',
      name: 'Savanna Easy Grey Chair',
      image: imagePath?.armChair11,
      companyName: 'NILKAMAL',
      rating: '4.8',
      price: '20,240.00',
    },
  ];

  const [selectedCategroyIndex, setSelectedCategroyIndex] = useState<number>(0);
  const [categorySearchText, setCategorySearchText] = useState<string>('');
  const [filterSelect, setFilterSelect] = useState<boolean>(false);
  const [productsList, setProductsList] = useState<ProductListProps[]>([]);
  const [savedProductsList, setSavedProductsList] = useState<
    ProductListProps[]
  >([]);
  const [addedToCartItems, setAddedToCartItems] = useState<ProductListProps[]>(
    [],
  );
  /* NOTE:
      1.) Maintain this data in redux so it can be used in other screens. 
      2.) Also use that data and store it in backend via nodeJS
  */
  const styleValues = themeStyle({filterSelect});

  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (selectedCategroyIndex === 0) {
      setProductsList(armChairsList);
    } else if (selectedCategroyIndex === 1) {
      setProductsList([]);
    } else if (selectedCategroyIndex === 2) {
      setProductsList([]);
    } else if (selectedCategroyIndex === 3) {
      setProductsList([]);
    } else if (selectedCategroyIndex === 4) {
      setProductsList([]);
    } else if (selectedCategroyIndex === 5) {
      setProductsList([]);
    } else if (selectedCategroyIndex === 6) {
      setProductsList([]);
    }
  }, [selectedCategroyIndex]);

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: filterSelect ? 8 : 0, // Moves down when selected
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [filterSelect]);

  const categoryIconStyle = (index: number) => {
    return index === selectedCategroyIndex
      ? styles?.selectedViewColor
      : styles?.nonSelectedViewColor;
  };

  const addToFavouriteList = (selectedItem: ProductListProps) => {
    if (
      JSON.stringify(savedProductsList)?.includes(JSON.stringify(selectedItem))
    ) {
      const temporaryList: ProductListProps[] = [...savedProductsList];
      const indexOfItem = savedProductsList?.indexOf(selectedItem);
      temporaryList.splice(indexOfItem, 1);
      setSavedProductsList(temporaryList);
    } else {
      const temporaryList: ProductListProps[] = [
        ...savedProductsList,
        selectedItem,
      ];
      setSavedProductsList(temporaryList);
    }
  };

  const carouselSection = () => {
    return (
      <View
        style={{
          width: 360,
          height: 200,
          backgroundColor: colors?.appBackgroundColor,
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: 15,
        }}>
        <Text
          style={{
            textAlign: 'right',
            fontFamily: fontFamily?.primaryFont?.bold,
            fontSize: 24,
            zIndex: 1,
            paddingHorizontal: 8,
            marginTop: 10,
          }}>
          Today's IKEA special !
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={imagePath?.furnitureImages2}
            height={100}
            width={100}
            style={{
              height: 200,
              width: 200,
              marginTop: -30,
            }}
          />
          <View>
            <Text
              style={{
                width: 150,
                height: 60,
                textAlign: 'right',
                fontFamily: fontFamily?.primaryFont?.regular,
                fontSize: 12,
                zIndex: 1,
                paddingHorizontal: 8,
              }}>
              Get discount on every order. Valid only for today
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 20,
                borderRadius: 10,
                backgroundColor: colors?.darkBluegrey4,
                paddingVertical: 10,
              }}>
              <Image
                source={imagePath?.tagIcon}
                height={30}
                width={30}
                style={styles?.tagIcon}
                testID={testID?.tagIcon}
              />
              <Text
                style={{
                  textAlign: 'right',
                  fontFamily: fontFamily?.primaryFont?.bold,
                  fontSize: 28,
                  color: colors?.white,
                  alignSelf: 'center',
                  paddingHorizontal: 8,
                }}>
                25%
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const paginationSection = () => {
    return (
      <View
        style={{
          height: 10,
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: colors?.darkBluegrey4,
            height: 5,
            width: 5,
            marginRight: 5,
            borderRadius: 10,
          }}></View>
        {/* <View
      style={{
        backgroundColor: colors?.darkBluegrey4,
        height: 5,
        width: 5,
        marginRight: 5,
        borderRadius: 10,
      }}></View> */}
        <View
          style={{
            backgroundColor: colors?.darkBluegrey4,
            height: 16,
            marginRight: 5,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: colors?.white,
              fontSize: 8,
              paddingLeft: 5,
              paddingRight: 5,
              fontFamily: fontFamily?.primaryFont?.bold,
            }}>
            2 of 4
          </Text>
        </View>
        <View
          style={{
            backgroundColor: colors?.darkBluegrey4,
            height: 5,
            width: 5,
            marginRight: 5,
            borderRadius: 10,
          }}></View>
        <View
          style={{
            backgroundColor: colors?.darkBluegrey4,
            height: 5,
            width: 5,
            marginRight: 5,
            borderRadius: 10,
          }}></View>
      </View>
    );
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            backgroundColor: colors?.greyColorLight2,
            paddingLeft: 10,
            borderRadius: 10,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              height: 30,
            }}>
            <Image
              source={imagePath?.searchIcon}
              height={30}
              width={30}
              style={styles?.searchIcon}
              testID={testID?.searchIcon}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Search"
            placeholderTextColor={colors?.greyColor}
            value={categorySearchText}
            onChangeText={val => {
              setCategorySearchText(val);
            }}
            style={styles?.searchInput}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setFilterSelect(!filterSelect);
          }}>
          <View
            style={[
              styles?.selectedFilterStyle,
              {marginLeft: 0},
              styleValues?.filterIconViewStyle,
            ]}>
            <Image
              source={
                filterSelect
                  ? imagePath?.filterIconColored
                  : imagePath?.filterIcon
              }
              height={30}
              width={30}
              style={styles?.filterIcon}
              testID={testID?.filterIcon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={[styles?.categoryFilterIconContainer]}>
            <Image
              source={imagePath?.categoryIcon}
              height={30}
              width={30}
              style={styles?.categoryFilterIcon}
              testID={testID?.productFilterIcon}
            />
          </View>
        </TouchableOpacity>
      </View>

      {carouselSection()}
      {paginationSection()}

      {filterSelect && (
        <Animated.View
          style={[styles?.categoryFilterView, {transform: [{translateY}]}]}>
          <FlatList
            data={furnitureCategories}
            keyExtractor={item => item?.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedCategroyIndex(index);
                  }}>
                  <View
                    style={[
                      styles?.selectedViewStyle,
                      categoryIconStyle(index),
                    ]}>
                    <Image
                      source={
                        index === selectedCategroyIndex
                          ? item?.selectedImage
                          : item?.image
                      }
                      height={30}
                      width={30}
                      style={styles?.bottomBarIcon}
                      testID={testID?.categoryIcon + item?.id}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </Animated.View>
      )}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
          marginHorizontal: 18,
        }}>
        <Text
          style={{fontFamily: fontFamily?.primaryFont?.semiBold, fontSize: 16}}>
          POPULAR
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text
            style={{
              fontFamily: fontFamily?.primaryFont?.medium,
              fontSize: 16,
            }}>
            View All
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={productsList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item?.id}
        contentContainerStyle={{marginTop: 16, paddingBottom: 20}}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                marginLeft: 20,
                backgroundColor: colors?.white,
                width: 180,
                paddingTop: 10,
                paddingBottom: 10,
                shadowColor: colors?.greyColor,
                shadowOffset: {height: 2, width: 2},
                shadowOpacity: 0.4,
                shadowRadius: 4,
                borderRadius: 10,
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginRight: 5,
                }}
                onPress={() => {
                  addToFavouriteList(item);
                }}>
                <Image
                  source={
                    JSON.stringify(savedProductsList)?.includes(
                      JSON.stringify(item),
                    )
                      ? imagePath?.saveIconFilled
                      : imagePath?.saveIcon
                  }
                  height={30}
                  width={30}
                  style={styles?.saveIcon}
                  testID={testID?.saveIcon}
                />
              </TouchableOpacity>
              <View
                style={{
                  width: 150,
                  alignSelf: 'center',
                }}>
                <Image
                  source={item?.image}
                  height={140}
                  width={150}
                  style={styles?.productImageStyle}
                />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text
                    style={styles?.productNameStyle}
                    numberOfLines={2}
                    ellipsizeMode="tail">
                    {item?.name}
                  </Text>
                  <Text
                    style={styles?.companyNameStyle}
                    numberOfLines={2}
                    ellipsizeMode="tail">
                    {item?.companyName}
                  </Text>
                  <Text style={styles?.priceStyle}>₹{item?.price}</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 10,
                    }}>
                    <Image
                      source={imagePath?.starIcon}
                      height={30}
                      width={30}
                      style={styles?.starIcon}
                      testID={testID?.starIcon}
                    />
                    <Text style={styles?.ratingStyle}>({item?.rating})</Text>
                  </View>

                  <TouchableOpacity
                    style={styles?.addContainer}
                    onPress={() => {}}>
                    <Image
                      source={imagePath?.addIcon}
                      height={30}
                      width={30}
                      style={styles?.addIcon}
                      testID={testID?.searchIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
export default HomeScreenContent;

/**
 * Story book implementation
 * Popular item cards make it expand on click of down chevron (Have animation effect)
 * View all takes to another page/ products page (Similar to search results page) with grid view
 * advertisment view with pagination
 * add to cart functionality add
 * filter will have more options to filter to options here also, like price, company, rating etc.
 * This filter with extra filters should be in search and products page also
 */

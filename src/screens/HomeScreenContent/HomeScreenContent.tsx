import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Animated,
  ImageSourcePropType,
} from 'react-native';
import {styles, themeStyle} from './styles';
import imagePath from '../../constants/imagePath';
import testID from '../../constants/testIdConstants';
import colors from '../../constants/colors';
import {ProductListProps} from './typesFile';
import fontFamily from '../../constants/fontFamily';
import FBCarouselSlider from '../../components/FBCarouselSlider/FBCarouselSlider';
import FBFilterModal from '../../components/FBFilterModal/FBFilterModal';
import {
  furnitureCategories,
  carouselOfferData,
  armChairsList,
} from '../../utils/mockData';

interface HomeScreenContentProps {
  id: string;
  name: string;
  image: ImageSourcePropType;
  selectedImage: ImageSourcePropType;
}

const HomeScreenContent = (props: any) => {
  const {navigation} = props;

  const [selectedCategroyIndex, setSelectedCategroyIndex] = useState<number>(0);
  const [selectedCategroyData, setSelectedCategroyData] =
    useState<HomeScreenContentProps>(furnitureCategories[0]);
  const [categorySearchText, setCategorySearchText] = useState<string>('');
  const [filterSelect, setFilterSelect] = useState<boolean>(false);
  const [productsList, setProductsList] = useState<ProductListProps[]>([]);
  const [savedProductsList, setSavedProductsList] = useState<
    ProductListProps[]
  >([]);
  const [addedToCartItems, setAddedToCartItems] = useState<ProductListProps[]>(
    [],
  );
  const [modalVisible, setModalVisible] = useState(false);
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
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}>
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

      <FBCarouselSlider carouselOfferData={carouselOfferData} />

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
                    setSelectedCategroyData(item);
                  }}>
                  <View
                    style={[
                      styles?.selectedViewStyle,
                      categoryIconStyle(index),
                    ]}>
                    <Image
                      source={
                        JSON?.stringify(item) ===
                        JSON?.stringify(selectedCategroyData)
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

      <FBFilterModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedProductIcon={selectedCategroyData?.selectedImage}
        selectedProductName={selectedCategroyData?.name}
      />
    </View>
  );
};
export default HomeScreenContent;

/**
 * NOTE:
 * Story book implementation
 * View all takes to another page/ products page (Similar to search results page) with grid view
 * add to cart functionality add
 * filter will have more options to filter to options here also, like price, company, rating etc.
 * This filter with extra filters should be in search and products page also
 * Modularise the entire project, screens and components into reusable functions and components
 * Test cases for all components and screens
 */
